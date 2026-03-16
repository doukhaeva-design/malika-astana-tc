import type { Metadata, Viewport } from "next";
import ScrollObserver from "@/components/Shared/ScrollObserver";
import HeaderComponent from "@/components/Shared/HeaderComponent";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ТЦ MALIKA — Торговый центр в Астане | Автозапчасти, товары для дома и бизнеса",
    template: "%s | ТЦ MALIKA Астана",
  },
  description: "Торговый центр MALIKA в Астане — автозапчасти, оборудование для бизнеса, товары для дома, столовая и реабилитационный центр. Байконурский район, трасса Алаш.",
  keywords: ["торговый центр Астана", "MALIKA", "автозапчасти Астана", "аренда помещений Астана", "Байконурский район", "трасса Алаш", "хозтовары Астана"],
  openGraph: {
    title: "ТЦ MALIKA — Торговый центр в Астане",
    description: "Автозапчасти, оборудование, товары для дома и бизнеса — всё в одном месте рядом с трассой Алаш.",
    type: "website",
    locale: "ru_KZ",
  },
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
