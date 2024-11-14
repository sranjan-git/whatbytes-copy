import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { NavBar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WhatBytes",
  description: "WhatBytes - Elevate your Digital Presence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="bg-white h-screen w-full">
          <Header />
          <div className="h-screen flex flex-col lg:flex-row">
            <NavBar />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
