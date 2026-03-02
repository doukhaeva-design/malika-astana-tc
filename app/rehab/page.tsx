/* 
  Страница "Реабилитационный центр" (Rehab)
  Информация о медицинском центре на территории ТЦ.
  Пользователь может узнать о доступных услугах и прочих подробностях центра.
*/

import React from 'react';
import HeaderComponent from '@/components/HeaderComponent/HeaderComponent';
import RehabHeroComponent from '@/components/RehabHeroComponent/RehabHeroComponent';
import ContentSectionComponent from '@/components/ContentSectionComponent/ContentSectionComponent';
import FooterComponent from '@/components/FooterComponent/FooterComponent';

export default function RehabPage() {
    return (
        <main>
            <HeaderComponent />
            <RehabHeroComponent />
            <ContentSectionComponent />
            <FooterComponent />
        </main>
    );
}
