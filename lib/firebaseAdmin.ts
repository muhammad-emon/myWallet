// lib/firebaseAdmin.ts
import { getApps, initializeApp, cert, type App } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const app: App =
  getApps()[0] ??
  initializeApp({
    credential: cert(JSON.parse(process.env.FB_ADMIN_SA_KEY!)), // ⚙️ this line
  });

export const adminDb = getFirestore(app);
