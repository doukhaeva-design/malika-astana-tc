"use client";

/* 
  Страница "Реабилитация" (Rehab)
  Профессиональный центр восстановления здоровья.
*/

import React from 'react';
import RehabHeroComponent from '@/components/Rehab/RehabHeroComponent';
import RehabAboutSection from '@/components/Rehab/RehabAboutSection';
import ContentSectionComponent from '@/components/Rehab/ContentSectionComponent';
import MethodsSectionComponent from '@/components/Rehab/MethodsSectionComponent';
import SpecialistsSectionComponent from '@/components/Rehab/SpecialistsSectionComponent';
import RehabBookingSection from '@/components/Rehab/RehabBookingSection';
import FooterComponent from '@/components/Shared/FooterComponent';

export default function RehabPage() {
    return (
        <main>
            <RehabHeroComponent />
            <RehabAboutSection />
            <ContentSectionComponent />
            <MethodsSectionComponent />
            <SpecialistsSectionComponent />
            <RehabBookingSection />
            <FooterComponent />
        </main>
    );
}
