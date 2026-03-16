"use client";

/* 
  Страница "Магазины и услуги" (Shops & Services)
  Подробная информация о категориях товаров и услуг в ТЦ.
  Включает раздел реабилитационного центра.
*/

import React from 'react';
import DirectionsHeroComponent from '@/components/Directions/DirectionsHeroComponent';
import CategoryDetailSectionComponent from '@/components/Directions/CategoryDetailSectionComponent';
import RehabAboutSection from '@/components/Rehab/RehabAboutSection';
import ContentSectionComponent from '@/components/Rehab/ContentSectionComponent';
import MethodsSectionComponent from '@/components/Rehab/MethodsSectionComponent';
import SpecialistsSectionComponent from '@/components/Rehab/SpecialistsSectionComponent';
import FooterComponent from '@/components/Shared/FooterComponent';

export default function ShopsPage() {
    return (
        <main>
            <DirectionsHeroComponent />
            <CategoryDetailSectionComponent />
            
            {/* Секция реабилитационного центра */}
            <div id="rehab-section">
                <RehabAboutSection />
                <ContentSectionComponent />
                <MethodsSectionComponent />
                <SpecialistsSectionComponent />
            </div>

            <FooterComponent />
        </main>
    );
}
