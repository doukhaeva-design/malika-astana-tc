/* 
  Страница "Реабилитационный центр" (Rehab)
  Информация о медицинском центре на территории ТЦ.
  Пользователь может узнать о доступных услугах и прочих подробностях центра.
*/

import React from 'react';
import RehabHeroComponent from '@/components/Rehab/RehabHeroComponent';
import ContentSectionComponent from '@/components/Rehab/ContentSectionComponent';
import SpecialistsSectionComponent from '@/components/Rehab/SpecialistsSectionComponent';
import MethodsSectionComponent from '@/components/Rehab/MethodsSectionComponent';
import FooterComponent from '@/components/Shared/FooterComponent';

export default function RehabPage() {
    return (
        <main>
            <RehabHeroComponent />
            <ContentSectionComponent />
            <MethodsSectionComponent />
            <SpecialistsSectionComponent />
            <FooterComponent />
        </main>
    );
}
