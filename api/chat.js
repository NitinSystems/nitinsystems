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

    // Build the contents array for Gemini
    let formattedContents = [];
    if (Array.isArray(contents) && contents.length > 0) {
      formattedContents = contents;
    } else {
      formattedContents = [
        {
          role: 'user',
          parts: [{ text: user_message || 'Hello' }]
        }
      ];
    }

    const defaultSystemPrompt = 
      'You are the Nitin Systems AI Systems Consultant. ' +
      'You evaluate B2B workflow friction, diagnose CRM data sync bottlenecks, and architect deterministic automation pipelines. ' +
      'Keep answers concise, authoritative, and practical (2 to 3 sentences maximum).';

    const requestBody = {
      system_instruction: {
        parts: [{ text: system_prompt || defaultSystemPrompt }]
      },
      contents: formattedContents,
      generationConfig: {
        temperature: 0.3,
        maxOutputTokens: 300,
        thinkingConfig: {
          thinkingBudget: 0
        }
      }
    };

    // Google Gemini 2.5 Flash Endpoint with zero thinking budget for sub-second responses
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 12000);

    const geminiRes = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody),
      signal: controller.signal
    });

    clearTimeout(timeout);

    if (!geminiRes.ok) {
      const errText = await geminiRes.text();
      let errMessage = 'Gemini API returned error status ' + geminiRes.status;
      try {
        const errJson = JSON.parse(errText);
        errMessage = errJson.error?.message || errMessage;
      } catch (e) {
        errMessage = errText || errMessage;
      }
      return res.status(geminiRes.status).json({ error: errMessage });
    }

    const data = await geminiRes.json();
    const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || '';

    return res.status(200).json({ reply: replyText });

  } catch (error) {
    console.error('[Nitin Systems Chat API Error]', error);
    return res.status(500).json({
      error: 'Failed to process chat query: ' + (error.message || 'Internal error')
    });
  }
}
