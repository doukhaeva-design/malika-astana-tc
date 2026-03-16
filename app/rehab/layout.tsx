import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Реабилитационный центр",
  description: "Центр реабилитации в ТЦ MALIKA, Астана — физическая реабилитация, кинезиотерапия, мануальная терапия, ЛФК. Квалифицированные специалисты.",
};

export default function RehabLayout({ children }: { children: React.ReactNode }) {
  return children;
}
