import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Аренда помещений",
  description: "Аренда торговых, складских и коммерческих помещений в ТЦ MALIKA, Астана. Парковка, грузовой лифт, отдельные входы, работа в ночное время. От 50 м².",
};

export default function TenantsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
