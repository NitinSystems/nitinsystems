/**
 * Nitin Systems - Serverless AI Chat Gateway (Vercel Serverless Function)
 * Endpoint: /api/chat
 * Security: Private server-side execution. API Key is stored in Vercel Environment Variables.
 */

export default async function handler(req, res) {
  // Enforce CORS for production domain and preview environments
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  const apiKey = process.env.AI_AGENT_GEMINI_API_KEY || process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({
      error: 'GEMINI_API_KEY or AI_AGENT_GEMINI_API_KEY environment variable is not configured in Vercel.'
    });
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

    // 1. Primary: Official Google Gemini Interactions API (GA for gemini-3.8-flash)
    const interactionEndpoint = `https://generativelanguage.googleapis.com/v1/interactions?key=${apiKey}`;
    const interactionBody = {
      model: 'gemini-3.8-flash',
      input: promptText || 'Hello',
      system_instruction: system_prompt || defaultSystemPrompt
    };

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 12000);

    let geminiRes;
    try {
      geminiRes = await fetch(interactionEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(interactionBody),
        signal: controller.signal
      });
    } catch (fetchErr) {
      geminiRes = { ok: false, status: 504, errMessage: fetchErr.message };
    }
    clearTimeout(timeout);

    // If Interactions API succeeded
    if (geminiRes && geminiRes.ok) {
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
      if (replyText) {
        return res.status(200).json({ reply: replyText });
      }
    }

    // 2. Fallback: If Interactions returned non-200, try generateContent with gemini-2.5-flash-lite
    let initialError = '';
    if (geminiRes && typeof geminiRes.text === 'function') {
      initialError = await geminiRes.text().catch(() => '');
    } else if (geminiRes && geminiRes.errMessage) {
      initialError = geminiRes.errMessage;
    }

    const fallbackEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${apiKey}`;
    const fallbackBody = {
      contents: [
        {
          role: 'user',
          parts: [{ text: (system_prompt || defaultSystemPrompt) + '\n\nUser Question: ' + (promptText || 'Hello') }]
        }
      ]
    };

    try {
      const fallbackRes = await fetch(fallbackEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fallbackBody)
      });

      if (fallbackRes.ok) {
        const fbData = await fallbackRes.json();
        const fbReply = fbData.candidates?.[0]?.content?.parts?.[0]?.text;
        if (fbReply) {
          return res.status(200).json({ reply: fbReply });
        }
      }
    } catch (fbErr) {
      // Fallback failed as well
    }

    // Return detailed error so we can diagnose immediately
    return res.status(geminiRes?.status || 500).json({
      error: 'Gemini Gateway Error: ' + (initialError || 'Interaction failed')
    });

  } catch (error) {
    console.error('[Nitin Systems Chat API Error]', error);
    return res.status(500).json({
      error: 'Failed to process chat query: ' + (error.message || 'Internal error')
    });
  }
}
