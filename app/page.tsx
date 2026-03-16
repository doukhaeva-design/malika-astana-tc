/*
  Главная страница (Home)

  1. Hero
  2. Цифры
  3. Направления магазинов
  4. Почему MALIKA
  5. Блок для арендаторов
  6. CTA
*/

import HeroSectionComponent from '@/components/Home/HeroSectionComponent';
import AboutStripComponent from '@/components/Home/AboutStripComponent';
import ForEverydayNeedsSectionComponent from '@/components/Home/ForEverydayNeedsSectionComponent';
import WhyVisitComponent from '@/components/Home/WhyVisitComponent';
import SoftTenantSectionComponent from '@/components/Home/SoftTenantSectionComponent';
import FinalCTAComponent from '@/components/Home/FinalCTAComponent';
import FooterComponent from '@/components/Shared/FooterComponent';

export default function Home() {
  return (
    <main>
      <HeroSectionComponent />
      <AboutStripComponent />
      <ForEverydayNeedsSectionComponent />
      <WhyVisitComponent />
      <SoftTenantSectionComponent />
      <FinalCTAComponent />
      <FooterComponent />
    </main>
  );
}
