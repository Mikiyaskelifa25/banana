const API_KEY_STORAGE_KEY = "sewasew_user_api_key";

export function getApiKey() {
  if (typeof window === "undefined") return "";
  return localStorage.getItem(API_KEY_STORAGE_KEY)?.trim() || "";
}

export function saveApiKey(key) {
  localStorage.setItem(API_KEY_STORAGE_KEY, key);
}

export function clearApiKey() {
  localStorage.removeItem(API_KEY_STORAGE_KEY);
}

export async function callGeminiApi(userQuery, systemPrompt) {
  const apiKey = getApiKey();
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${apiKey}`;
  const payload = {
    contents: [{ parts: [{ text: userQuery }] }],
    systemInstruction: { parts: [{ text: systemPrompt }] },
  };

  let delay = 1000;
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        const data = await res.json();
        return data.candidates?.[0]?.content?.parts?.[0]?.text || "No response.";
      }
      if (res.status === 429) {
        await new Promise((r) => setTimeout(r, delay));
        delay *= 2;
        continue;
      }
      const err = await res.json();
      throw new Error(err.error?.message || "API request failed.");
    } catch (e) {
      if (attempt === 2) throw e;
      await new Promise((r) => setTimeout(r, delay));
      delay *= 2;
    }
  }
  return "Unable to connect to service.";
}
