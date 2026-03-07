/* 
  Главная страница (Home)
  Сборка основных секций торгового центра в премиальном стиле.
  Порядок блоков оптимизирован для эмоционального восприятия:
  1. Hero
  2. Направления
  3. Пространство (визуальный экран)
  4. Преимущества
  5. Реабилитационный центр
  6. Арендаторам
  7. Контакты + Карта
*/

import React from 'react';
import HeroSectionComponent from '@/components/Home/HeroSectionComponent';
import AboutSectionComponent from '@/components/Home/AboutSectionComponent';
import SpaceShowcaseComponent from '@/components/Home/SpaceShowcaseComponent';
import CompactAdvantageSectionComponent from '@/components/Home/CompactAdvantageSectionComponent';
import ForEverydayNeedsSectionComponent from '@/components/Home/ForEverydayNeedsSectionComponent';
import RehabHighlightSectionComponent from '@/components/Home/RehabHighlightSectionComponent';
import SoftTenantSectionComponent from '@/components/Home/SoftTenantSectionComponent';
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
      <SpaceShowcaseComponent />
      <RehabHighlightSectionComponent />
      <CompactAdvantageSectionComponent />
      <SoftTenantSectionComponent />
      <VisitInfoSectionComponent />

      <MapSectionComponent />

      <FinalCTAComponent />
      <FooterComponent />
    </main>
  );
}
