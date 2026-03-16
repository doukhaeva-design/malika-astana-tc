import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Контакты ТЦ MALIKA — Астана, Байконурский район, Проезд 69, 1А. Телефон: +7 (700) 305-35-36. Ежедневно 09:00–18:00. Карта проезда.",
};

export default function ContactsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
