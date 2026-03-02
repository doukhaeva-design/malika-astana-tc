/* 
  Страница "Арендодателям" (Rent)
  Предложения по аренде коммерческой недвижимости.
  Пользователь может ознакомиться с преимуществами площадки и оставить заявку.
*/

import React from 'react';
import HeaderComponent from '@/components/HeaderComponent/HeaderComponent';
import RentHeroComponent from '@/components/RentHeroComponent/RentHeroComponent';
import WhyBusinessHereComponent from '@/components/WhyBusinessHereComponent/WhyBusinessHereComponent';
import AvailableSpacesComponent from '@/components/AvailableSpacesComponent/AvailableSpacesComponent';
import FormComponent from '@/components/FormComponent/FormComponent';
import FooterComponent from '@/components/FooterComponent/FooterComponent';

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
