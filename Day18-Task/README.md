# Day 18 — Supabase Edge Function: Email on New Insert

## What it does
Whenever a **new row is inserted** into a database table (e.g. `orders` or
`signups`), this Edge Function is triggered and sends a **notification
email** using the Resend API.

## Folder Structure
```
day18-edge-function-email/
└── supabase/
    └── functions/
        └── send-email-on-insert/
            └── index.ts
```

## Setup

### 1. Install & log in to the Supabase CLI
```bash
npm install -g supabase
supabase login
supabase link --project-ref YOUR_PROJECT_REF
```

### 2. Create a Resend account
- Sign up at https://resend.com (free tier is enough)
- Generate an API key

### 3. Set the function secrets
```bash
supabase secrets set RESEND_API_KEY=your_resend_api_key
supabase secrets set NOTIFY_TO_EMAIL=your_email@example.com
```

### 4. Deploy the function
```bash
supabase functions deploy send-email-on-insert --no-verify-jwt
```

### 5. Add a Database Webhook
Supabase Dashboard → **Database → Webhooks → Create a new webhook**
- Table: `orders` (or whichever table you want to watch)
- Events: `Insert`
- Type: `HTTP Request`
- URL: `https://<project-ref>.functions.supabase.co/send-email-on-insert`
- Method: `POST`

## How to test
Insert a row manually (via SQL editor or Table editor) — the Edge
Function will fire and send an email to the address you configured.

```sql
insert into orders (customer_name, amount) values ('Ayesha', 1500);
```

## Notes
- Secrets are read with `Deno.env.get()` — never hardcode keys in the code.
- If the webhook fails, check **Edge Functions → Logs** in the Supabase Dashboard.
- In production, replace `NOTIFY_FROM_EMAIL` with your own verified sending domain.
