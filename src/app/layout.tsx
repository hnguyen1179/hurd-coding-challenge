import Header from "@/components/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hurd",
  description: "Hurd Coding Challenge",
};

const inter = Inter({ subsets: ["latin"], preload: true, weight: "400" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="flex h-dvh flex-col">
        <Header />
        <div className="flex-1">{children}</div>
      </body>
    </html>
  );
}
