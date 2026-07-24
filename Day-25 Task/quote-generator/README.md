# ✨ QuoteVerse — Quote Generator App

> A full-stack quote generator built with **React (Vite)** frontend and **Vercel Serverless Functions** as backend. Get inspired with a random quote at the click of a button!

---

## 🌐 Live Demo

**🚀 Deployed on Vercel (Frontend + Backend):**

[![Live on Vercel](https://img.shields.io/badge/Live%20Demo-Vercel-black?style=for-the-badge&logo=vercel)](https://quote-generator-beta-seven.vercel.app/)

🔗 **https://quote-generator-beta-seven.vercel.app/**

> Both the **React frontend** and the **quote API backend** are live on the **same Vercel deployment** — no separate server needed!

---

## 📸 Screenshot


<img width="1352" height="637" alt="image" src="https://github.com/user-attachments/assets/754fd1fd-762b-4dcf-a826-959b17979e5d" />

<img width="1351" height="637" alt="image" src="https://github.com/user-attachments/assets/2042f758-34a0-4cb8-ab47-39be1631afcf" />


---

## ✨ Features

- 🎨 **Premium Dark UI** — Aurora gradients, glassmorphism card, particle effects
- 🔀 **Random Quote** — Fetched from API on every click
- ❤️ **Favorites Panel** — Save and view liked quotes
- 📤 **Share Button** — Share quotes via Web Share API or copy to clipboard
- 🔢 **Quote Counter** — Tracks how many quotes you've explored
- ⚡ **Serverless Backend** — Vercel Functions (no Express server in production)
- 🌀 **Loading Spinner** — Smooth loading state
- 📱 **Fully Responsive** — Works on mobile and desktop
- 🛡️ **Error Handling** — User-friendly error messages

---

## 🗂️ Project Structure

```
quote-generator/
│
├── client/                        # 🖥️ React + Vite Frontend (deployed on Vercel)
│   ├── api/                       # ⚡ Vercel Serverless Functions (Backend)
│   │   ├── quote.js               #    GET /api/quote  → random quote
│   │   └── quotes.js              #    GET /api/quotes → all quotes
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── QuoteCard.jsx      #    Quote display card
│   │   │   ├── Spinner.jsx        #    Loading spinner
│   │   │   ├── Aurora.jsx         #    Animated aurora background
│   │   │   └── ParticleField.jsx  #    Floating particles effect
│   │   ├── App.jsx                #    Main app component
│   │   ├── main.jsx               #    React entry point
│   │   └── styles.css             #    All CSS styles
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── vercel.json                # Vercel deployment config
│   └── .env.example
│
└── server/                        # 🔧 Express backend (local development only)
    ├── routes/
    │   └── quotes.js
    ├── server.js
    ├── package.json
    └── .env.example
```

---

## 🚀 Vercel Deployment

### How Frontend + Backend Work Together on Vercel

This project uses **Vercel Serverless Functions** for the backend.  
The `client/api/` folder is automatically detected by Vercel and deployed as API routes:

| Endpoint | Function File | Description |
|---|---|---|
| `GET /api/quote` | `client/api/quote.js` | Returns a random quote |
| `GET /api/quotes` | `client/api/quotes.js` | Returns all quotes |

### Deploy Your Own Copy

1. **Push to GitHub**
   ```bash
   git clone https://github.com/your-username/quote-generator.git
   cd quote-generator
   git add .
   git commit -m "initial commit"
   git push
   ```

2. **Import on Vercel**
   - Go to [vercel.com](https://vercel.com) → **New Project**
   - Import your GitHub repository
   - ⚠️ Set **Root Directory** to `client`
   - Framework: **Vite** (auto-detected)
   - Click **Deploy** ✅

3. **That's it!** Vercel automatically:
   - Builds the React frontend from `src/`
   - Deploys `api/quote.js` and `api/quotes.js` as serverless functions
   - Serves everything from one URL

> **No separate backend deployment needed!**

---

## 💻 Local Development

### Prerequisites
- Node.js 18+
- npm

### 1. Clone the repo
```bash
git clone https://github.com/your-username/quote-generator.git
cd quote-generator
```

### 2. Start Backend (Express server)
```bash
cd server
npm install
npm run dev
```
Backend runs at `http://localhost:5000`

### 3. Start Frontend (React + Vite)
Open a new terminal:
```bash
cd client
npm install
npm run dev
```
Frontend runs at `http://localhost:5173`

---

## 📡 API Reference

**Production Base URL:** `https://quote-generator-beta-seven.vercel.app`  
**Local Base URL:** `http://localhost:5000`

### `GET /api/quote`
Returns a single random quote.

**Response:**
```json
{
  "quote": "The only way to do great work is to love what you do.",
  "author": "Steve Jobs"
}
```

### `GET /api/quotes`
Returns all available quotes as an array.

**Response:**
```json
[
  {
    "quote": "Success is the sum of small efforts repeated day in and day out.",
    "author": "Robert Collier"
  },
  ...
]
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend Framework | React 18 + Vite |
| Styling | Vanilla CSS (custom design system) |
| HTTP Client | Axios |
| Backend (Production) | Vercel Serverless Functions |
| Backend (Development) | Node.js + Express |
| Deployment | Vercel |

---

## ⚙️ Environment Variables

**`client/.env`** (local development only)
```env
VITE_API_URL=http://localhost:5000
```
> In production on Vercel, leave this blank — the app auto-uses `/api/` routes.

**`server/.env`** (local only)
```env
PORT=5000
```

---

## 📜 Scripts

**Client:**
```bash
npm run dev      # Start Vite dev server
npm run build    # Build for production
npm run preview  # Preview production build
```

**Server (local only):**
```bash
npm run dev      # Start with nodemon
npm start        # Start production server
```

---

## 👩‍💻 Made By

**Tahreem Asif**

---
