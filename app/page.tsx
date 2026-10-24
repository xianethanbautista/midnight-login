
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (!/^[^\s@]+@gmail\.com$/i.test(email.trim())) {
      setError("Please use a valid @gmail.com address.");
      return;
    }

    if (password.length <= 6) {
      setError("Your password must be more than 6 characters.");
      return;
    }

    sessionStorage.setItem("midnightUser", email.trim());
    router.push("/dashboard");
  }

  return (
    <main className="login-page">
      <section className="brand-panel">
        <div className="brand-top">
          <div className="brand-icon">M</div>
        </div>

        <div className="brand-message">
          <p className="eyebrow">YOUR SPACE. YOUR PACE.</p>
          <h1>
            Step into
            <br />
            your next chapter.
          </h1>
          <p className="brand-description">
            A quieter place to focus, create, and move forward.
          </p>
        </div>

        <div className="brand-footer">
          <span>SECURE ACCESS</span>
          <span>EST. 2026</span>
        </div>
      </section>

      <section className="form-panel">
        <div className="form-content">
          <div className="mobile-logo">
            <div className="brand-icon">M</div>
          </div>

          <p className="eyebrow">WELCOME BACK</p>
          <h2>Sign in</h2>
          <p className="form-subtitle">
            Enter your details to continue.
          </p>

          <form onSubmit={handleLogin} noValidate>
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              type="email"
              placeholder="you@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="password-label">
              <label htmlFor="password">Password</label>
              <span>MIN. 7 CHARACTERS</span>
            </div>

            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">
              Continue <span>→</span>
            </button>

            {error && (
              <p className="error-message" role="alert">
                {error}
              </p>
            )}
          </form>

          <p className="security-note">
            <span className="status-dot" />
            Input validation enabled
          </p>
        </div>
      </section>
    </main>
  );
}
