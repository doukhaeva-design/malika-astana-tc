/*
  Страница "О центре" (About Center)
  Полная информация: концепция, масштабы, преимущества, перспективы.

  1. Hero
  2. О центре (полный текст + статистика)
  3. Преимущества
  4. Перспективы развития
*/

"use client";

import AboutHeroComponent from '@/components/Home/AboutHeroComponent';
import AboutSectionComponent from '@/components/Home/AboutSectionComponent';
import CompactAdvantageSectionComponent from '@/components/Home/CompactAdvantageSectionComponent';
import SpaceShowcaseComponent from '@/components/Home/SpaceShowcaseComponent';
import FooterComponent from '@/components/Shared/FooterComponent';

export default function AboutPage() {
    return (
        <main>
            <AboutHeroComponent />
            <AboutSectionComponent />
            <CompactAdvantageSectionComponent />
            <SpaceShowcaseComponent />
            <FooterComponent />
        </main>
    );
}
