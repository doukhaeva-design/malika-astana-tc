/*
  Главная страница (Home)

  1. Hero
  2. Цифры (акцентная полоса)
  3. Направления магазинов
  4. Блок для арендаторов
  5. Контакты + Карта
  6. CTA
*/

import HeroSectionComponent from '@/components/Home/HeroSectionComponent';
import StatsStripComponent from '@/components/Home/StatsStripComponent';
import ForEverydayNeedsSectionComponent from '@/components/Home/ForEverydayNeedsSectionComponent';
import SoftTenantSectionComponent from '@/components/Home/SoftTenantSectionComponent';
import VisitInfoSectionComponent from '@/components/Home/VisitInfoSectionComponent';
import MapSectionComponent from '@/components/Contacts/MapSectionComponent';
import FinalCTAComponent from '@/components/Home/FinalCTAComponent';
import FooterComponent from '@/components/Shared/FooterComponent';

export default function Home() {
  return (
    <main>
      <HeroSectionComponent />
      <StatsStripComponent />
      <ForEverydayNeedsSectionComponent />
      <SoftTenantSectionComponent />
      <VisitInfoSectionComponent />
      <MapSectionComponent />
      <FinalCTAComponent />
      <FooterComponent />
    </main>
  );
}
