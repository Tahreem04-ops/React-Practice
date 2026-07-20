# Day 21 — File Sharing App (Login, Upload, List, Download)

## What it does
A React + Supabase app with:
- **Login/Signup** — Supabase Auth (email + password)
- **Upload** — files are uploaded to a Supabase Storage bucket (inside the user's own folder)
- **List** — the user can see their own uploaded files
- **Download** — generates a secure signed URL for download
- **Delete** — the user can remove a file

## Folder Structure
```
day21-file-sharing-app/
└── client/
    ├── index.html
    ├── vite.config.js
    ├── package.json
    ├── .env.example
    └── src/
        ├── main.jsx
        ├── App.jsx
        ├── index.css
        ├── supabaseClient.js
        └── components/
            ├── Login.jsx
            ├── FileUpload.jsx
            └── FileList.jsx
```

## Supabase Setup (required steps)

### 1. Create a Supabase project
Go to https://supabase.com/dashboard and create a new project.

### 2. Email Auth
Dashboard → **Authentication → Providers** — Email is enabled by default.

### 3. Create a Storage bucket
Dashboard → **Storage → New Bucket**
- Name: `files`
- Public: **off** (private bucket — we use signed URLs)

### 4. Add Storage policies
Dashboard → **Storage → files bucket → Policies → New Policy**, or run this in the SQL editor:

```sql
-- Users can upload only inside their own folder (folder name = their user id)
create policy "Users can upload own files"
on storage.objects for insert
with check (bucket_id = 'files' and (storage.foldername(name))[1] = auth.uid()::text);

-- Users can view/list only their own files
create policy "Users can view own files"
on storage.objects for select
using (bucket_id = 'files' and (storage.foldername(name))[1] = auth.uid()::text);

-- Users can delete only their own files
create policy "Users can delete own files"
on storage.objects for delete
using (bucket_id = 'files' and (storage.foldername(name))[1] = auth.uid()::text);
```

## Project Setup

```bash
cd day21-file-sharing-app/client
npm install
cp .env.example .env
```

Fill `.env` with your Supabase URL and anon key (Dashboard → Project Settings → API):
```
VITE_SUPABASE_URL=https://xxxxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJI...
```

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

## How to use the app
1. Sign up (email confirmation may be required depending on your Supabase settings)
2. Log in
3. Choose a file and click **Upload**
4. The file appears in the list — click **Download** to open a signed URL (valid for 60 seconds)
5. Click **Delete** to remove a file from storage

## Notes
- Each user's files are stored inside their own `userId` folder, so no user can see another user's files (enforced by the RLS policies).
- The signed URL is only valid for 60 seconds for security. You can increase this duration in `FileList.jsx` if needed.
- To build for production: `npm run build`, then deploy the `dist/` folder to Vercel/Netlify.
- **Verified**: `npm install` and `npm run build` were run in a sandbox to confirm there are no syntax/dependency errors (see execution log below). Live login/upload/download require your real Supabase project credentials, since they depend on your actual database and storage bucket.
