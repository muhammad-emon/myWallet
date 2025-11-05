"use client";

import Link from "next/link";
import { useState } from "react";
import { auth, createUserDoc } from "@/lib/firebaseClient";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export default function GetStartedPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMsg(null);

    try {
      // 1) Create account in Firebase Auth
      const cred = await createUserWithEmailAndPassword(auth, email, password);

      // 2) Set displayName on the Auth profile
      await updateProfile(cred.user, { displayName: name });

      // 3) Create a Firestore doc for this user
      await createUserDoc(cred.user.uid, { name, email });

      // inside handleSubmit after createUserDoc(...)
      setMsg("✅ Account created successfully! You can sign in now.");
      // ❌ no router.push here

      setName("");
      setEmail("");
      setPassword("");
    } catch (err: any) {
      setMsg("❌ " + (err.message || "Failed to create account"));
    }
  };

  return (
    <main className="auth-page">
      <div className="register-container">
        <h2>Create Your MyWallet Account</h2>

        <form id="registrationForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="submit-button">
            Sign Up
          </button>

          <p className="switch-link">
            Already have an account? <Link href="/sign-in">Login</Link>
          </p>

          {msg && (
            <p className="switch-link" style={{ marginTop: 12 }}>
              {msg}
            </p>
          )}
        </form>
      </div>
    </main>
  );
}
