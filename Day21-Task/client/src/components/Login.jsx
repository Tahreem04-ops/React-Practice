import { useState } from "react";
import { supabase } from "../supabaseClient";

export default function Login({ onAuthSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const DEMO_EMAIL = "demo@demo.com";
  const DEMO_PASSWORD = "demo12345";

  const createDemoSession = (emailValue) => ({
    access_token: "demo-token",
    token_type: "bearer",
    expires_in: 3600,
    expires_at: Math.floor(Date.now() / 1000) + 3600,
    refresh_token: "demo-refresh-token",
    user: {
      id: "demo-user",
      email: emailValue,
      aud: "authenticated",
      app_metadata: {},
      user_metadata: {},
    },
  });

  const getFriendlyMessage = (err) => {
    const text = err?.message || "";

    if (text.includes("Invalid login credentials")) {
      return "Login failed. Please create an account first or check your email/password.";
    }
    if (text.includes("Email not confirmed")) {
      return "Please confirm your email first by clicking the confirmation link in your inbox.";
    }
    if (text.includes("rate limit")) {
      return "Too many attempts. Please wait a moment and try again.";
    }
    if (text.includes("email address") && text.includes("invalid")) {
      return "Please enter a valid email address.";
    }
    return text || "Something went wrong. Please try again.";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const normalizedEmail = email.trim().toLowerCase();
      const isDemoAttempt =
        normalizedEmail === DEMO_EMAIL && password === DEMO_PASSWORD;

      if (isDemoAttempt) {
        onAuthSuccess?.(createDemoSession(normalizedEmail));
        setMessage("Demo login successful.");
        return;
      }

      if (isSignUp) {
        const { data, error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        if (data?.session) {
          onAuthSuccess?.(data.session);
          setMessage("Account created and logged in successfully.");
        } else {
          setMessage(
            "Account created! Please confirm your email if confirmation is enabled in Supabase, then log in."
          );
        }
      } else {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        onAuthSuccess?.(data.session);
      }
    } catch (err) {
      setMessage(getFriendlyMessage(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-card">
      <h2>{isSignUp ? "Create Account" : "Login"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={6}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Please wait..." : isSignUp ? "Sign Up" : "Login"}
        </button>
      </form>

      {message && <p className="auth-message">{message}</p>}

      <p className="auth-message">
        Demo login: {DEMO_EMAIL} / {DEMO_PASSWORD}
      </p>

      <button className="link-btn" onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp
          ? "Already have an account? Login"
          : "No account? Sign up"}
      </button>
    </div>
  );
}
