/* 
  Главная страница (Home)
  Сборка основных секций торгового центра по утвержденной архитектуре.

  1. Hero
  2. О центре
  3. Направления магазинов
  4. Преимущества
  5. Блок для арендаторов
  6. Перспективы развития (Space Showcase)
  7. Контакты
*/

import React from 'react';
import HeroSectionComponent from '@/components/Home/HeroSectionComponent';
import AboutSectionComponent from '@/components/Home/AboutSectionComponent';
import ForEverydayNeedsSectionComponent from '@/components/Home/ForEverydayNeedsSectionComponent';
import CompactAdvantageSectionComponent from '@/components/Home/CompactAdvantageSectionComponent';
import SoftTenantSectionComponent from '@/components/Home/SoftTenantSectionComponent';
import SpaceShowcaseComponent from '@/components/Home/SpaceShowcaseComponent';
import VisitInfoSectionComponent from '@/components/Home/VisitInfoSectionComponent';
import MapSectionComponent from '@/components/Contacts/MapSectionComponent';
import FinalCTAComponent from '@/components/Home/FinalCTAComponent';
import FooterComponent from '@/components/Shared/FooterComponent';

export default function Home() {
  return (
    <main>
      <HeroSectionComponent />
      <AboutSectionComponent />
      <ForEverydayNeedsSectionComponent />
      <CompactAdvantageSectionComponent />
      <SoftTenantSectionComponent />
      <SpaceShowcaseComponent />
      <VisitInfoSectionComponent />
      <MapSectionComponent />
      
      <FinalCTAComponent />
      <FooterComponent />
    </main>
  );
}
