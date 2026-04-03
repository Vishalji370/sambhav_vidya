type SubmitPayload = Record<string, unknown>;

export async function submitToGoogleSheet(payload: SubmitPayload) {
  const url = import.meta.env.VITE_GOOGLE_SHEETS_WEBAPP_URL as string | undefined;
  if (!url) {
    throw new Error("Missing VITE_GOOGLE_SHEETS_WEBAPP_URL. Add it to your .env file.");
  }

  const body = JSON.stringify(payload);

  // Apps Script web apps can sometimes trip CORS in browsers depending on deployment/access.
  // Strategy:
  // - Try normal fetch first (lets us read errors + confirm success)
  // - If CORS/network blocks response reading, retry with `no-cors` (opaque response).
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
    });

    // If Apps Script doesn't return JSON, this still gives useful failure signal.
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      throw new Error(`Google Sheet webhook failed (${res.status}). ${text}`.trim());
    }

    // Try to parse JSON response (optional).
    const contentType = res.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      return await res.json();
    }
    return await res.text().catch(() => "");
  } catch (err) {
    // Retry for CORS-blocked scenarios. We can't read the response, but the request can still succeed.
    await fetch(url, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=UTF-8" },
      body,
    });
    return { ok: true, opaque: true, note: "Submitted with no-cors fallback; verify rows in Google Sheet." };
  }
}

