"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { auth, db } from "@/lib/firebaseClient";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  where,
  Timestamp,
  DocumentData,
} from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";

type Tx = {
  id: string;
  amount: number;
  category: string;
  note?: string;
  createdAt?: Timestamp;
};

export default function DashboardPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [uid, setUid] = useState<string | null>(null);
  const [displayName, setDisplayName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);

  // form state
  const [amount, setAmount] = useState<string>("");
  const [category, setCategory] = useState("General");
  const [note, setNote] = useState("");

  // data
  const [txs, setTxs] = useState<Tx[]>([]);

  // Protect the route + load user
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.replace("/sign-in");
        return;
      }
      setUid(user.uid);
      setDisplayName(user.displayName || null);
      setEmail(user.email || null);
      setLoading(false);
    });
    return () => unsub();
  }, [router]);

  // Subscribe to my transactions
  useEffect(() => {
    if (!uid) return;
    const q = query(
      collection(db, "transactions"),
      where("userId", "==", uid),
      orderBy("createdAt", "desc")
    );
    const unsub = onSnapshot(q, (snap) => {
      const rows: Tx[] = snap.docs.map((d) => ({ id: d.id, ...(d.data() as DocumentData) }));
      setTxs(rows);
    });
    return () => unsub();
  }, [uid]);

  const balance = useMemo(() => {
    return txs.reduce((sum, t) => sum + (Number(t.amount) || 0), 0);
  }, [txs]);

  async function addTransaction(e: React.FormEvent) {
    e.preventDefault();
    if (!uid) return;
    const amt = Number(amount);
    if (Number.isNaN(amt)) return alert("Amount must be a number (use negative for expenses).");

    await addDoc(collection(db, "transactions"), {
      userId: uid,
      amount: amt,
      category,
      note: note || "",
      createdAt: serverTimestamp(),
    });

    setAmount("");
    setCategory("General");
    setNote("");
  }

  if (loading) {
    return <div className="min-h-screen grid place-items-center">Loading…</div>;
  }

  return (
    <main className="min-h-screen bg-[#f5f7fb]">
      <header className="sticky top-0 z-10 bg-white border-b">
        <div className="container" style={{ display: "flex", alignItems: "center", height: 64, gap: 12, justifyContent: "space-between" }}>
          <div style={{ fontWeight: 700 }}>MyWallet Dashboard</div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ color: "#475569" }}>{displayName || email}</span>
            <button
              onClick={() => signOut(auth).then(() => router.replace("/"))}
              className="btn btn-outline"
              style={{ padding: "8px 12px", borderRadius: 8, border: "1px solid #e2e8f0" }}
            >
              Sign out
            </button>
          </div>
        </div>
      </header>

      <section className="container" style={{ padding: "24px 16px" }}>
        {/* Top cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: 16 }}>
          <Card title="Balance" value={balance.toLocaleString(undefined, { style: "currency", currency: "USD" })} />
          <Card title="Incomes" value={txs.filter(t => Number(t.amount) > 0).reduce((s, t) => s + Number(t.amount), 0).toLocaleString(undefined, { style: "currency", currency: "USD" })} />
          <Card title="Expenses" value={txs.filter(t => Number(t.amount) < 0).reduce((s, t) => s + Number(t.amount), 0).toLocaleString(undefined, { style: "currency", currency: "USD" })} />
        </div>

        {/* Add transaction */}
        <div style={{ marginTop: 20, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <form onSubmit={addTransaction} className="card">
            <h3 style={{ marginBottom: 12, fontWeight: 700 }}>Add Transaction</h3>
            <div className="form-row">
              <label>Amount (use negative for expense)</label>
              <input value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="e.g. -45.20 or 1200" required />
            </div>
            <div className="form-row">
              <label>Category</label>
              <input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="e.g. Grocery / Salary" />
            </div>
            <div className="form-row">
              <label>Note</label>
              <input value={note} onChange={(e) => setNote(e.target.value)} placeholder="optional" />
            </div>
            <button className="btn btn-primary" style={{ marginTop: 8 }}>Save</button>
          </form>

          {/* Recent transactions */}
          <div className="card">
            <h3 style={{ marginBottom: 12, fontWeight: 700 }}>Recent Transactions</h3>
            {txs.length === 0 ? (
              <p style={{ color: "#64748b" }}>No transactions yet.</p>
            ) : (
              <ul style={{ display: "grid", gap: 8 }}>
                {txs.slice(0, 8).map((t) => (
                  <li key={t.id} className="row">
                    <div>
                      <div style={{ fontWeight: 600 }}>{t.category || "General"}</div>
                      <div style={{ color: "#64748b", fontSize: 14 }}>{t.note}</div>
                    </div>
                    <div style={{ fontWeight: 700, color: Number(t.amount) < 0 ? "#ef4444" : "#10b981" }}>
                      {Number(t.amount).toLocaleString(undefined, { style: "currency", currency: "USD" })}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>

      {/* Tiny styles so it looks nice without extra CSS files */}
      <style jsx>{`
        .container { max-width: 1100px; margin: 0 auto; }
        .card { background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; }
        .form-row { display: grid; gap: 6px; margin-bottom: 10px; }
        input { border: 1px solid #cbd5e1; border-radius: 8px; padding: 10px; outline: none; }
        input:focus { border-color: #2563eb; box-shadow: 0 0 0 3px rgba(37,99,235,.15); }
        .row { display: flex; align-items: center; justify-content: space-between; border: 1px solid #e2e8f0; border-radius: 10px; padding: 10px 12px; }
        .btn-primary { background: #2563eb; color: white; border: 1px solid #2563eb; border-radius: 10px; padding: 10px 14px; font-weight: 700; }
        .btn-outline:hover, .btn-primary:hover { filter: brightness(.95); }
      `}</style>
    </main>
  );
}

function Card({ title, value }: { title: string; value: string }) {
  return (
    <div className="card">
      <div style={{ color: "#64748b", fontSize: 14 }}>{title}</div>
      <div style={{ fontSize: 28, fontWeight: 800 }}>{value}</div>
    </div>
  );
}
