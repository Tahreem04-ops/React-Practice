# Quote Generator App

A full-stack Quote Generator built with **React (Vite)** on the frontend and **Node.js + Express** on the backend. Click a button and receive an inspiring random quote from a curated collection.

## Features

- Beautiful, responsive UI with gradient background
- Random quote fetched on page load
- "Generate Quote" button for a new quote
- Loading spinner and error handling
- REST API with CORS enabled
- 20+ curated quotes
- Environment-variable driven configuration
- Deploy-ready for Vercel (frontend) and Render (backend)

## Project Structure

```
quote-generator/
├── client/                 # React + Vite frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── QuoteCard.jsx
│   │   │   └── Spinner.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── styles.css
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── .env.example
│
└── server/                 # Express backend
    ├── routes/
    │   └── quotes.js
    ├── server.js
    ├── package.json
    └── .env.example
```

## Installation

### Prerequisites
- Node.js 18+
- npm

### 1. Clone the repo
```bash
git clone <your-repo-url>
cd quote-generator
```

### 2. Backend setup
```bash
cd server
npm install
cp .env.example .env
npm run dev
```
Backend runs at `http://localhost:5000`.

### 3. Frontend setup
Open a new terminal:
```bash
cd client
npm install
cp .env.example .env
npm run dev
```
Frontend runs at `http://localhost:5173`.

## API Documentation

Base URL: `http://localhost:5000`

### GET `/api/quote`
Returns a random quote.

**Response**
```json
{
  "quote": "Success is the sum of small efforts repeated day in and day out.",
  "author": "Robert Collier"
}
```

### GET `/api/quotes`
Returns all available quotes as an array.

## Environment Variables

**client/.env**
```
VITE_API_URL=http://localhost:5000
```

**server/.env**
```
PORT=5000
```

## Deployment

### Backend on Render
1. Push the repo to GitHub.
2. Create a new **Web Service** on [Render](https://render.com/).
3. Root Directory: `server`
4. Build Command: `npm install`
5. Start Command: `npm start`
6. Copy the deployed URL (e.g. `https://your-api.onrender.com`).

### Frontend on Vercel
1. Import the repo in [Vercel](https://vercel.com/).
2. Root Directory: `client`
3. Framework Preset: **Vite**
4. Add environment variable:
   - `VITE_API_URL` = `https://your-api.onrender.com`
5. Deploy.

## Screenshots

_Add your screenshots here:_

- `screenshots/home.png` — Home page with a quote
- `screenshots/loading.png` — Loading state
- `screenshots/error.png` — Error state

## Scripts

**Server**
- `npm run dev` – start with nodemon
- `npm start` – start production server

**Client**
- `npm run dev` – Vite dev server
- `npm run build` – production build
- `npm run preview` – preview production build

## License

MIT
