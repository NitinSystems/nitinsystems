/**
 * Nitin Systems - Serverless AI Chat Gateway (Vercel Serverless Function)
 * Endpoint: /api/chat
 * Security: Private server-side execution. API Key is stored in Vercel Environment Variables.
 */

export default async function handler(req, res) {
  // Enforce CORS for production domain and preview environments
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

  // Diagnostic GET route to verify available models on this key in real-time
  if (req.method === 'GET') {
    try {
      const modelsRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
      const modelsData = await modelsRes.json();
      return res.status(modelsRes.status).json(modelsData);
    } catch (e) {
      return res.status(500).json({ error: 'Failed to query models: ' + e.message });
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

    // Official Google Gemini Interactions API (v1beta) for gemini-3.8-flash
    const interactionEndpoint = `https://generativelanguage.googleapis.com/v1beta/interactions?key=${apiKey}`;
    const interactionBody = {
      model: 'gemini-3.8-flash',
      input: promptText || 'Hello',
      system_instruction: system_prompt || defaultSystemPrompt
    };

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 9000);

    const geminiRes = await fetch(interactionEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(interactionBody),
      signal: controller.signal
    });

    clearTimeout(timeout);

    if (!geminiRes.ok) {
      const errText = await geminiRes.text();
      let errMessage = 'Google Interactions API error ' + geminiRes.status;
      try {
        const errJson = JSON.parse(errText);
        errMessage = errJson.error?.message || errText;
      } catch (e) {
        errMessage = errText || errMessage;
      }
      return res.status(geminiRes.status).json({ error: errMessage });
    }

    const data = await geminiRes.json();
    let replyText = data.output_text || '';

    if (!replyText && Array.isArray(data.steps)) {
      for (const step of data.steps) {
        if (step.type === 'model_output' && Array.isArray(step.content)) {
          for (const item of step.content) {
            if (item.type === 'text' && item.text) {
              replyText += item.text;
            }
          }
        }
      }
    }

    if (!replyText && data.candidates?.[0]?.content?.parts?.[0]?.text) {
      replyText = data.candidates[0].content.parts[0].text;
    }

    return res.status(200).json({ reply: replyText || 'I am ready to diagnose your systems architecture.' });

  } catch (error) {
    console.error('[Nitin Systems Chat API Error]', error);
    return res.status(500).json({
      error: 'Chat Gateway Error: ' + (error.message || 'Internal error')
    });
  }
}
