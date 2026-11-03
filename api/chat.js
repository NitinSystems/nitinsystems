/**
 * Nitin Systems - 24/7 Resilient AI Chat Gateway (Cascading Failover Architecture)
 * Endpoint: /api/chat
 * Security: Private server-side execution. API Key stored in Vercel Environment Variables.
 */

function extractCandidateText(data) {
  const parts = data.candidates?.[0]?.content?.parts || [];
  let text = '';
  for (const part of parts) {
    if (!part.thought && part.text) {
      text += part.text;
    }
  }
  if (!text && parts.length > 0) {
    text = parts[parts.length - 1].text || '';
  }
  return text.trim();
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const apiKey = process.env.AI_AGENT_GEMINI_API_KEY || process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({
      error: 'GEMINI_API_KEY or AI_AGENT_GEMINI_API_KEY environment variable is not configured in Vercel.'
    });
  }

  // Diagnostic GET route: Ping to verify Google connection and available models, or test generation
  if (req.method === 'GET') {
    try {
      if (req.query && req.query.test) {
        const testModel = req.query.model || 'gemini-2.5-flash';
        const testRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${testModel}:generateContent?key=${apiKey}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: 'Who is your founder?' }] }]
          })
        });
        const testData = await testRes.text();
        return res.status(200).json({
          model: testModel,
          status: testRes.status,
          googleResponse: testData
        });
      }

      const checkRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
      const checkData = await checkRes.json();
      return res.status(checkRes.status).json(checkData);
    } catch (e) {
      return res.status(500).json({ error: 'Connection test failed: ' + e.message });
    }
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  try {
    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch (e) {
        body = {};
      }
    }

    const { user_message, system_prompt, contents } = body || {};

    const defaultSystemPrompt = 
      'You are the Nitin Systems AI Systems Consultant. ' +
      'You evaluate B2B workflow friction, diagnose CRM data sync bottlenecks, and architect deterministic automation pipelines. ' +
      'Keep answers concise, authoritative, and practical (2 to 3 sentences maximum). ' +
      'Nitin Systems was founded by Nitin Mishra. ' +
      'If asked biological or personal questions like who is your father or mother, clarify that as an AI you have no biological parents, and that Nitin Mishra is the founder and systems architect who engineered Nitin Systems. ' +
      'Do not repetitively interrogate the user with the exact same tech stack question on every turn.';

    const promptText = user_message || (Array.isArray(contents) && contents.length > 0 ? contents[contents.length - 1]?.parts?.[0]?.text : 'Hello');

    let formattedContents = [];
    if (Array.isArray(contents) && contents.length > 0) {
      formattedContents = contents;
    } else {
      formattedContents = [
        {
          role: 'user',
          parts: [{ text: promptText }]
        }
      ];
    }

    const requestPayload = {
      system_instruction: {
        parts: [{ text: system_prompt || defaultSystemPrompt }]
      },
      contents: formattedContents,
      generationConfig: {
        maxOutputTokens: 1000,
        temperature: 0.7
      }
    };

    // 24/7 Cascading Failover Models (Verified active quota & sub-second availability)
    const modelCandidates = [
      'gemini-flash-lite-latest',
      'gemini-3.5-flash-lite'
    ];

    let finalReply = '';
    let lastError = null;

    for (const model of modelCandidates) {
      try {
        const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 7000);

        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-goog-api-key': apiKey
          },
          body: JSON.stringify(requestPayload),
          signal: controller.signal
        });

        clearTimeout(timeout);

        if (response.ok) {
          const data = await response.json();
          const candidateText = extractCandidateText(data);
          if (candidateText) {
            finalReply = candidateText;
            break; // Successfully answered, exit failover pool immediately
          }
        } else {
          const errText = await response.text();
          console.error(`[Nitin Systems Gateway] Model ${model} returned ${response.status}:`, errText);
          lastError = `Model ${model} returned status ${response.status}: ${errText}`;
        }
      } catch (err) {
        console.error(`[Nitin Systems Gateway] Model ${model} error:`, err.message);
        lastError = `Model ${model} request error: ${err.message}`;
      }
    }

    // Emergency graceful response if Google experiences an outage or quota limit
    if (!finalReply) {
      const lowerPrompt = (promptText || '').toLowerCase();
      if (lowerPrompt.includes('father') || lowerPrompt.includes('mother') || lowerPrompt.includes('parent') || lowerPrompt.includes('human')) {
        finalReply = 'As an artificial intelligence systems consultant, I am software code and do not have biological parents. Nitin Mishra is the founder and enterprise systems architect who created Nitin Systems. What workflow systems or architecture would you like to explore?';
      } else if (lowerPrompt.includes('founder') || lowerPrompt.includes('owner') || lowerPrompt.includes('who are you') || lowerPrompt.includes('who is nitin')) {
        finalReply = 'Nitin Systems was founded by Nitin Mishra. He is an enterprise systems architect specializing in deterministic API bridges, CRM synchronization, and webhook infrastructure. Feel free to describe any workflow challenges your team is encountering.';
      } else {
        finalReply = 'I evaluate B2B workflow friction, diagnose CRM data sync bottlenecks, and architect deterministic automation pipelines. Feel free to describe your current platforms or operational challenges to evaluate.';
      }
    }

    return res.status(200).json({ 
      reply: finalReply,
      debugError: lastError
    });

  } catch (error) {
    console.error('[Nitin Systems Chat API Error]', error);
    const lowerReq = (req.body?.user_message || '').toLowerCase();
    let emergencyReply = 'I evaluate B2B workflow friction, diagnose CRM data sync bottlenecks, and architect deterministic automation pipelines. Feel free to describe your current platforms or operational challenges to evaluate.';
    if (lowerReq.includes('father') || lowerReq.includes('mother') || lowerReq.includes('human')) {
      emergencyReply = 'As an artificial intelligence systems consultant, I am software code and do not have biological parents. Nitin Mishra is the founder and enterprise systems architect who created Nitin Systems. What workflow systems or architecture would you like to explore?';
    } else if (lowerReq.includes('founder') || lowerReq.includes('owner') || lowerReq.includes('nitin')) {
      emergencyReply = 'Nitin Systems was founded by Nitin Mishra. He is an enterprise systems architect specializing in deterministic API bridges, CRM synchronization, and webhook infrastructure.';
    }
    return res.status(200).json({
      reply: emergencyReply,
      debugCatch: error.message
    });
  }
}
