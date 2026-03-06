/* 
  Страница "Арендодателям" (Rent)
  Предложения по аренде коммерческой недвижимости.
  Пользователь может ознакомиться с преимуществами площадки и связаться напрямую.
*/

import React from 'react';
import RentHeroComponent from '@/components/Rent/RentHeroComponent';
import WhyBusinessHereComponent from '@/components/Rent/WhyBusinessHereComponent';
import AvailableSpacesComponent from '@/components/Rent/AvailableSpacesComponent';
import FooterComponent from '@/components/Shared/FooterComponent';

export default function RentPage() {
    return (
        <main>
            <RentHeroComponent />
            <WhyBusinessHereComponent />
            <AvailableSpacesComponent />
            <FooterComponent />
        </main>
    );
}
