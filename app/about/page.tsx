"use client";

/* 
  Страница "О центре" (About Center)
  Информация о масштабах, концепции и инфраструктуре ТЦ.

  1. Концепция центра
  2. Масштабы (м2, этажи)
  3. Инфраструктура и район
*/

import React from 'react';
import AboutSectionComponent from '@/components/Home/AboutSectionComponent';
import SpaceShowcaseComponent from '@/components/Home/SpaceShowcaseComponent';
import CompactAdvantageSectionComponent from '@/components/Home/CompactAdvantageSectionComponent';
import FooterComponent from '@/components/Shared/FooterComponent';

export default function AboutPage() {
    return (
        <main>
            <AboutSectionComponent />
            <SpaceShowcaseComponent />
            <CompactAdvantageSectionComponent />
            <FooterComponent />
        </main>
    );
}
