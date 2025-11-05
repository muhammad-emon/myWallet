"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebaseClient";
import { collection, getDocs } from "firebase/firestore";

export default function TestFirebaseClient() {
  const [result, setResult] = useState<string>("Checking...");

  useEffect(() => {
    const testConnection = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "testConnection"));
        if (querySnapshot.size > 0) {
          setResult("✅ Firebase Client connected! Found documents in Firestore.");
        } else {
          setResult("⚠️ Firebase connected, but no docs found (empty collection).");
        }
      } catch (error: any) {
        setResult("❌ Firebase Client failed: " + error.message);
      }
    };
    testConnection();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center text-lg font-medium">
      {result}
    </div>
  );
}
