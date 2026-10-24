
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  useEffect(() => {
    const savedEmail = sessionStorage.getItem("midnightUser");

    if (!savedEmail) {
      router.replace("/");
      return;
    }

    setEmail(savedEmail);
  }, [router]);

  function handleLogout() {
    sessionStorage.removeItem("midnightUser");
    router.replace("/");
  }

  return (
    <main className="dashboard-page">
      <section className="dashboard-card">
        <div className="brand-icon">M</div>

        <h1>Welcome!</h1>
        <p>You have successfully logged in.</p>

        <p className="account-email">{email}</p>

        <button
          className="logout-button"
          onClick={handleLogout}
        >
          Logout
        </button>
      </section>
    </main>
  );
}
