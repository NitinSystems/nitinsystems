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

  // Diagnostic GET route: Ping to verify Google connection and available models
  if (req.method === 'GET') {
    try {
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
      'Keep answers concise, authoritative, and practical (2 to 3 sentences maximum).';

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
        maxOutputTokens: 1000
      }
    };

    // 24/7 Cascading Failover Models (Ordered by reliability & capacity)
    const modelCandidates = [
      'gemini-flash-lite-latest',
      'gemini-2.5-flash-lite',
      'gemini-flash-latest'
    ];

    let finalReply = '';
    let lastError = null;

    for (const model of modelCandidates) {
      try {
        const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 6000);

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
          lastError = `Model ${model} returned status ${response.status}`;
        }
      } catch (err) {
        lastError = `Model ${model} request error: ${err.message}`;
      }
    }

    // Emergency graceful response if Google experiences a global outage
    if (!finalReply) {
      finalReply = 'Nitin Systems evaluates B2B workflow friction, diagnoses CRM data sync bottlenecks, and architects deterministic automation pipelines. Please share your current software stack and work email to begin your systems roadmap.';
    }

    return res.status(200).json({ reply: finalReply });

  } catch (error) {
    console.error('[Nitin Systems Chat API Error]', error);
    return res.status(200).json({
      reply: 'Nitin Systems evaluates B2B workflow friction, diagnoses CRM data sync bottlenecks, and architects deterministic automation pipelines. How can I assist you with your stack?'
    });
  }
}
