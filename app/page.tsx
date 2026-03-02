/* 
  Главная страница (Home)
  Сборка основных секций торгового центра.
  Пользователь может быстро ознакомиться со всем спектром услуг и преимуществ центра.
*/

import React from 'react';
import HeaderComponent from '@/components/HeaderComponent/HeaderComponent';
import HeroSectionComponent from '@/components/HeroSectionComponent/HeroSectionComponent';
import ForEverydayNeedsSectionComponent from '@/components/ForEverydayNeedsSectionComponent/ForEverydayNeedsSectionComponent';
import CompactAdvantageSectionComponent from '@/components/CompactAdvantageSectionComponent/CompactAdvantageSectionComponent';
import LocationComfortSectionComponent from '@/components/LocationComfortSectionComponent/LocationComfortSectionComponent';
import RehabHighlightSectionComponent from '@/components/RehabHighlightSectionComponent/RehabHighlightSectionComponent';
import VisitInfoSectionComponent from '@/components/VisitInfoSectionComponent/VisitInfoSectionComponent';
import SoftTenantSectionComponent from '@/components/SoftTenantSectionComponent/SoftTenantSectionComponent';
import FooterComponent from '@/components/FooterComponent/FooterComponent';

export default function Home() {
  return (
    <main>
      <HeaderComponent />
      <HeroSectionComponent />
      <ForEverydayNeedsSectionComponent />
      <CompactAdvantageSectionComponent />
      <LocationComfortSectionComponent />
      <RehabHighlightSectionComponent />
      <VisitInfoSectionComponent />
      <SoftTenantSectionComponent />
      <FooterComponent />
    </main>
  );
}
