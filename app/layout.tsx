// app/layout.tsx
import "./globals.css";         // keep if you already have Tailwind/global styles
import "../styles/landing.css"; // <-- add this line to load your old CSS
import "../styles/auth.css"; 
export const metadata = {
  title: "MyWallet",
  description: "Personal finance app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
