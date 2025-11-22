import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manuel de Veille Médiatique Audiovisuelle",
  description: "Guide complet pour gérer un service de veille médiatique audiovisuel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
