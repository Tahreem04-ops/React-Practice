import { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import QuoteCard from "./components/QuoteCard.jsx";
import Spinner from "./components/Spinner.jsx";
import Aurora from "./components/Aurora.jsx";
import ParticleField from "./components/ParticleField.jsx";

const API_BASE = import.meta.env.VITE_API_URL || (import.meta.env.PROD ? "" : "http://localhost:5000");

export default function App() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [key, setKey] = useState(0);
  const [quoteCount, setQuoteCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const [likedQuotes, setLikedQuotes] = useState([]);
  const [showPanel, setShowPanel] = useState(false);
  const btnRef = useRef(null);

  const fetchQuote = useCallback(async () => {
    setLoading(true);
    setError("");
    setLiked(false);
    try {
      const res = await axios.get(`${API_BASE}/api/quote`);
      setQuote(res.data);
      setKey((k) => k + 1);
      setQuoteCount((c) => c + 1);
    } catch (err) {
      setError("Couldn't reach the quote server. Try again in a moment.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchQuote();
  }, [fetchQuote]);

  const handleLike = () => {
    if (!liked && quote) {
      setLiked(true);
      setLikedQuotes((prev) => [quote, ...prev]);
    }
  };

  const handleShare = async () => {
    if (!quote) return;
    const text = `"${quote.quote}" — ${quote.author}`;
    if (navigator.share) {
      await navigator.share({ title: "QuoteVerse", text });
    } else {
      await navigator.clipboard.writeText(text);
      // small toast feedback via class toggle
      btnRef.current?.classList.add("copied");
      setTimeout(() => btnRef.current?.classList.remove("copied"), 1800);
    }
  };

  return (
    <div className="app">
      <Aurora />
      <ParticleField />
      <div className="grain" />

      {/* Floating counter */}
      {quoteCount > 1 && (
        <div className="counter-badge">
          <span className="counter-num">{quoteCount}</span>
          <span className="counter-label">quotes explored</span>
        </div>
      )}

      {/* Favorites Panel Toggle */}
      {likedQuotes.length > 0 && (
        <button
          className="fav-toggle"
          onClick={() => setShowPanel((v) => !v)}
          aria-label="Toggle favorites"
        >
          <svg viewBox="0 0 24 24" fill={showPanel ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
          <span>{likedQuotes.length}</span>
        </button>
      )}

      {/* Favorites Slide Panel */}
      <aside className={`fav-panel ${showPanel ? "is-open" : ""}`}>
        <div className="fav-panel-header">
          <span>Saved Quotes</span>
          <button className="fav-close" onClick={() => setShowPanel(false)}>✕</button>
        </div>
        <div className="fav-list">
          {likedQuotes.map((q, i) => (
            <div key={i} className="fav-item">
              <p className="fav-text">"{q.quote}"</p>
              <p className="fav-author">— {q.author}</p>
            </div>
          ))}
        </div>
      </aside>

      <div className="container">
        <header className="header">
          <div className="badge">
            <span className="badge-dot" />
            Daily Wisdom
          </div>
          <h1 className="title">
            <span className="title-line">Words that</span>
            <span className="title-line title-accent">move you.</span>
          </h1>
          <p className="subtitle">
            A single sentence, delivered on demand. Refresh for a new spark.
          </p>
        </header>

        <main className="main">
          <div className="card-wrap">
            {loading && !quote ? (
              <Spinner />
            ) : error ? (
              <div className="error">
                <span className="error-icon">⚠</span>
                {error}
              </div>
            ) : (
              quote && (
                <QuoteCard
                  key={key}
                  quote={quote.quote}
                  author={quote.author}
                  loading={loading}
                  onLike={handleLike}
                  liked={liked}
                  onShare={handleShare}
                  shareRef={btnRef}
                />
              )
            )}
          </div>

          <button
            className={`btn ${loading ? "is-loading" : ""}`}
            onClick={fetchQuote}
            disabled={loading}
          >
            <span className="btn-shine" />
            <span className="btn-ripple" />
            <span className="btn-label">
              {loading ? "Summoning…" : "New Quote"}
            </span>
            <svg
              className="btn-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12a9 9 0 1 1-3-6.7" />
              <path d="M21 4v5h-5" />
            </svg>
          </button>
        </main>

        <footer className="footer">
          <span>Made by</span>
          <span className="dot-sep">•</span>
          <span className="footer-name">Tahreem Asif</span>
        </footer>
      </div>
    </div>
  );
}
