import { useState } from "react";

export default function QuoteCard({ quote, author, loading, onLike, liked, onShare, shareRef }) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    await onShare();
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <article className={`card ${loading ? "is-fading" : ""}`}>
      <div className="card-border" />
      <div className="card-glow" />
      <div className="card-inner">

        {/* Decorative top-left quote mark */}
        <div className="quote-icon-wrap">
          <svg className="quote-mark" viewBox="0 0 60 50" fill="none" aria-hidden="true">
            <path
              d="M0 30C0 20 6 11 18 6L21 12C14 15 11 20 11 24H19V44H0V30ZM33 30C33 20 39 11 51 6L54 12C47 15 44 20 44 24H52V44H33V30Z"
              fill="currentColor"
            />
          </svg>
        </div>

        <p className="quote-text">
          {quote.split(" ").map((w, i, arr) => (
            <span
              key={i}
              className="word"
              style={{ animationDelay: `${i * 38}ms` }}
            >
              {w}{i < arr.length - 1 ? "\u00A0" : ""}
            </span>
          ))}
        </p>

        <div className="author-row">
          <div className="author-line" />
          <p className="quote-author">{author}</p>
        </div>

        {/* Action row */}
        <div className="card-actions">
          {/* Like button */}
          <button
            className={`action-btn like-btn ${liked ? "is-liked" : ""}`}
            onClick={onLike}
            disabled={liked}
            aria-label={liked ? "Saved" : "Save quote"}
          >
            <svg viewBox="0 0 24 24" fill={liked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            <span>{liked ? "Saved!" : "Save"}</span>
          </button>

          {/* Share / Copy button */}
          <button
            ref={shareRef}
            className={`action-btn share-btn ${copied ? "is-copied" : ""}`}
            onClick={handleShare}
            aria-label="Share or copy quote"
          >
            {copied ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
              </svg>
            )}
            <span>{copied ? "Copied!" : "Share"}</span>
          </button>
        </div>
      </div>
    </article>
  );
}
