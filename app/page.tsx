/*
  Главная страница (Home)
  Витрина — коротко, ярко, без перегруза.

  1. Hero
  2. О центре (компактный, с кнопкой «Подробнее»)
  3. Направления магазинов
  4. Блок для арендаторов
  5. Контакты + Карта
  6. CTA
*/

import React from 'react';
import HeroSectionComponent from '@/components/Home/HeroSectionComponent';
import AboutSectionComponent from '@/components/Home/AboutSectionComponent';
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
      <AboutSectionComponent compact />
      <ForEverydayNeedsSectionComponent />
      <SoftTenantSectionComponent />
      <VisitInfoSectionComponent />
      <MapSectionComponent />
      <FinalCTAComponent />
      <FooterComponent />
    </main>
  );
}
