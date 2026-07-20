// @ts-nocheck
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const NOTIFY_TO_EMAIL = Deno.env.get("NOTIFY_TO_EMAIL") ?? "tahreemasif1010@gmail.com";
const NOTIFY_FROM_EMAIL = Deno.env.get("NOTIFY_FROM_EMAIL") ?? "onboarding@resend.dev";

serve(async (req: Request) => {
  if (req.method !== "POST") {
    return jsonResponse({ success: false, error: "Only POST requests are allowed" }, 405);
  }

  try {
    const payload = await req.json().catch(() => null);

    if (!payload || typeof payload !== "object") {
      return jsonResponse({ success: false, error: "Invalid JSON payload" }, 400);
    }

    const { record, table, type } = payload as {
      record?: Record<string, unknown>;
      table?: string;
      type?: string;
    };

    if (type !== "INSERT") {
      return jsonResponse({ success: true, skipped: true, reason: "Not an insert event" }, 200);
    }

    if (!record || typeof record !== "object") {
      return jsonResponse({ success: false, error: "Missing record payload" }, 400);
    }

    if (!RESEND_API_KEY) {
      return jsonResponse({ success: false, error: "Missing RESEND_API_KEY secret" }, 500);
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: NOTIFY_FROM_EMAIL,
        to: [NOTIFY_TO_EMAIL],
        subject: "New User Added",
        html: `
          <h2>New User Inserted</h2>
          <p><strong>Table:</strong> ${table ?? "unknown"}</p>
          <p><strong>Event:</strong> ${type ?? "unknown"}</p>
          <hr>
          <h3>User Details</h3>
          <pre>${JSON.stringify(record, null, 2)}</pre>
        `,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return jsonResponse({ success: false, error: "Resend request failed", details: data }, response.status);
    }

    return jsonResponse({ success: true, resend: data }, 200);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Edge Function error:", message);
    return jsonResponse({ success: false, error: message }, 500);
  }
});

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
