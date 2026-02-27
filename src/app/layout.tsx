import type { Metadata } from "next";
import { AppProvider } from "@/components/providers/AppProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "ChronoAI Weekly",
  description: "Premium weekly presentation dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
