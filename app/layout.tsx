import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ScrollObserver from "@/components/Shared/ScrollObserver";
import HeaderComponent from "@/components/Shared/HeaderComponent";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ТЦ «Malika» — Торговый центр в Астане",
  description: "Практичное пространство для покупок, бизнеса и повседневных решений в Астане.",
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
        <ScrollObserver />
        <HeaderComponent />
        {children}
      </body>
    </html>
  );
}
