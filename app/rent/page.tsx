/* 
  Страница "Арендодателям" (Rent)
  Предложения по аренде коммерческой недвижимости.
  Пользователь может ознакомиться с преимуществами площадки и связаться напрямую.
*/

import React from 'react';
import RentHeroComponent from '@/components/Rent/RentHeroComponent';
import RentSpecsComponent from '@/components/Rent/RentSpecsComponent';
import RentApplicationForm from '@/components/Rent/RentApplicationForm';
import FooterComponent from '@/components/Shared/FooterComponent';

export default function RentPage() {
    return (
        <main>
            <RentHeroComponent />
            <RentSpecsComponent />
            <RentApplicationForm />
            <FooterComponent />
        </main>
    );
}
