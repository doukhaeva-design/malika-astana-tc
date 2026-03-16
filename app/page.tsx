/*
  Главная страница (Home)

  1. Hero
  2. Цифры
  3. Каталог
  4. Реабилитация (баннер)
  5. Почему MALIKA
  6. Арендаторам
  7. CTA
*/

import HeroSectionComponent from '@/components/Home/HeroSectionComponent';
import AboutStripComponent from '@/components/Home/AboutStripComponent';
import ForEverydayNeedsSectionComponent from '@/components/Home/ForEverydayNeedsSectionComponent';
import RehabBannerComponent from '@/components/Home/RehabBannerComponent';
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
      <RehabBannerComponent />
      <WhyVisitComponent />
      <SoftTenantSectionComponent />
      <FinalCTAComponent />
      <FooterComponent />
    </main>
  );
}
