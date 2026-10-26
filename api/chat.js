/**
 * Nitin Systems - Resilient Serverless AI Chat Gateway (Vercel Function)
 * Endpoint: /api/chat
 * Security: Private server-side execution. API Key is stored in Vercel Environment Variables.
 */

function createTimeoutSignal(ms) {
  const controller = new AbortController();
  setTimeout(() => controller.abort(), ms);
  return controller.signal;
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

  // Diagnostic GET route: Test Google API connectivity directly in browser
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

    // --- STRATEGY 1: Official Google Interactions API (v1 / v1beta) ---
    const interactionEndpoints = [
      'https://generativelanguage.googleapis.com/v1/interactions',
      'https://generativelanguage.googleapis.com/v1beta/interactions'
    ];

    for (const url of interactionEndpoints) {
      try {
        const iRes = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-goog-api-key': apiKey
          },
          body: JSON.stringify({
            model: 'gemini-flash-latest',
            input: promptText,
            system_instruction: system_prompt || defaultSystemPrompt
          }),
          signal: createTimeoutSignal(5000)
        });

        if (iRes.ok) {
          const iData = await iRes.json();
          let replyText = iData.output_text || '';
          if (!replyText && Array.isArray(iData.steps)) {
            for (const step of iData.steps) {
              if (step.type === 'model_output' && Array.isArray(step.content)) {
                for (const item of step.content) {
                  if (item.type === 'text' && item.text) replyText += item.text;
                }
              }
            }
          }
          if (replyText) {
            return res.status(200).json({ reply: replyText });
          }
        }
      } catch (err) {
        // Continue to next strategy
      }
    }

    // --- STRATEGY 2: Classic generateContent with gemini-flash-latest ---
    try {
      const gcRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': apiKey
        },
        body: JSON.stringify({
          system_instruction: {
            parts: [{ text: system_prompt || defaultSystemPrompt }]
          },
          contents: formattedContents,
          generationConfig: {
            temperature: 0.3,
            maxOutputTokens: 300
          }
        }),
        signal: createTimeoutSignal(6000)
      });

      if (gcRes.ok) {
        const gcData = await gcRes.json();
        const replyText = gcData.candidates?.[0]?.content?.parts?.[0]?.text;
        if (replyText) {
          return res.status(200).json({ reply: replyText });
        }
      }
    } catch (err) {
      // Continue to error reporting
    }

    // --- STRATEGY 3: Final attempt with gemini-3.8-flash generateContent ---
    try {
      const g3Res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': apiKey
        },
        body: JSON.stringify({
          system_instruction: {
            parts: [{ text: system_prompt || defaultSystemPrompt }]
          },
          contents: formattedContents,
          generationConfig: {
            maxOutputTokens: 300
          }
        }),
        signal: createTimeoutSignal(6000)
      });

      if (g3Res.ok) {
        const g3Data = await g3Res.json();
        const replyText = g3Data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (replyText) {
          return res.status(200).json({ reply: replyText });
        }
      }
    } catch (err) {
      // Fall through to error
    }

    return res.status(502).json({
      error: 'Google Gemini Gateway did not return a candidate response. Check API key status.'
    });

  } catch (error) {
    console.error('[Nitin Systems Chat API Error]', error);
    return res.status(500).json({
      error: 'Chat Gateway Exception: ' + (error.message || 'Internal error')
    });
  }
}
