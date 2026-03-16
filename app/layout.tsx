import type { Metadata, Viewport } from "next";
import ScrollObserver from "@/components/Shared/ScrollObserver";
import HeaderComponent from "@/components/Shared/HeaderComponent";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import "./globals.css";

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
      <body suppressHydrationWarning>
        {/* Глобальные подложки для безопасных зон (Notch/Home Indicator) */}
        <div className="safe-area-top"></div>
        <div className="safe-area-bottom"></div>
        <LanguageProvider>
          <ScrollObserver />
          <HeaderComponent />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
