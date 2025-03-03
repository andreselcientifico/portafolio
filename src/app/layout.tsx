import React from "react";
import "@/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import ClientThemeProvider from "@/components/client-theme-provider";

export const runtime = 'edge';

export const metadata: Metadata = {
  title: "Andres Perez Full stack develper",
  description: "Portafolio de desarrollador, andres alfonso perez rodriguez full stack developer & AI Specialist",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <ClientThemeProvider>
        <body>{children}</body>
      </ClientThemeProvider>
    </html>
  );
}
