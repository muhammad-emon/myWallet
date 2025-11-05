"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebaseClient";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState<string | null>(null);

  // Optional: if already logged in, go to dashboard
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) router.replace("/dashboard");
    });
    return () => unsub();
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMsg(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setMsg("✅ Signed in!");
      router.replace("/dashboard"); // ← redirect only here
    } catch (err: any) {
      setMsg("❌ " + (err.message || "Sign-in failed"));
    }
  };

  return (
    <main className="auth-page">
      <div className="auth-container register-container">
        <h2>Welcome Back 👋</h2>
        <p>Sign in to continue to <strong>MyWallet</strong></p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
          <input type="email" placeholder="Email" required value={email}
                 onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" required value={password}
                 onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" className="submit-button">Sign In</button>
        </form>

        <p className="switch-link" style={{ marginTop: 12 }}>
          Don’t have an account? <Link href="/get-started">Sign Up</Link>
        </p>

        {msg && <p className="switch-link" style={{ marginTop: 12 }}>{msg}</p>}
      </div>
    </main>
  );
}
