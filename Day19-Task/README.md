# Day 19 — JWT Authentication Middleware (Express)

## What it does
`authMiddleware.js` is an Express middleware that extracts a JWT from the
`Authorization: Bearer <token>` header and verifies it. If the token is
valid, it attaches the decoded payload to `req.user` and calls `next()`;
otherwise it returns a 401/403 error.

## Folder Structure
```
day19-jwt-middleware/
├── authMiddleware.js   # main middleware
├── server.js           # example usage (login + protected route)
├── package.json
└── .env.example
```

## Setup

```bash
cd day19-jwt-middleware
npm install
cp .env.example .env
# edit .env and change JWT_SECRET
npm run dev
```

## How to test

### 1. Log in to get a token
```bash
curl -X POST http://localhost:5000/api/login \
  -H "Content-Type: application/json" \
  -d '{"email": "ayesha@example.com"}'
```
Response: `{ "token": "..." }`

### 2. Call the protected route
```bash
curl http://localhost:5000/api/profile \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

Expected error responses:
- No token → `401 - No token provided`
- Expired → `401 - Token expired`
- Invalid/tampered → `403 - Invalid token`

## Using it in a real project
```js
const authMiddleware = require("./authMiddleware");
app.get("/api/protected-route", authMiddleware, (req, res) => {
  // req.user is available here
});
```

## Notes
- Never hardcode `JWT_SECRET` in code — always load it from `.env` (see Day 20).
- In production, keep `expiresIn` reasonable (e.g. 15m–1h) and add a refresh-token flow if needed.
- **Verified**: this project was installed and test-run in a sandbox — login and protected-route requests were confirmed working (see execution log below).
