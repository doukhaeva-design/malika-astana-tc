/* 
  Страница "Арендодателям" (Rent)
  Предложения по аренде коммерческой недвижимости.
  Пользователь может ознакомиться с преимуществами площадки и оставить заявку.
*/

import React from 'react';
import HeaderComponent from '@/components/Shared/HeaderComponent';
import RentHeroComponent from '@/components/Rent/RentHeroComponent';
import WhyBusinessHereComponent from '@/components/Rent/WhyBusinessHereComponent';
import AvailableSpacesComponent from '@/components/Rent/AvailableSpacesComponent';
import FormComponent from '@/components/Rent/FormComponent';
import FooterComponent from '@/components/Shared/FooterComponent';

export default function RentPage() {
    return (
        <main>
            <HeaderComponent />
            <RentHeroComponent />
            <WhyBusinessHereComponent />
            <AvailableSpacesComponent />
            <FormComponent />
            <FooterComponent />
        </main>
    );
}
