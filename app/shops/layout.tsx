import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Магазины и услуги",
  description: "Каталог магазинов и услуг ТЦ MALIKA в Астане — автозапчасти, оборудование для бизнеса, товары для дома, сервисы, столовая и медицинский центр.",
};

export default function ShopsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
