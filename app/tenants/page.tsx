"use client";

/* 
  Страница "Для арендаторов" (For Tenants)
  Самая важная страница для бизнеса.
  
  1. Hero: Аренда помещений в ТЦ MALIKA
  2. Преимущества
  3. Типы помещений
  4. Инфраструктура
  5. Перспективы развития
  6. Контакт для аренды
*/

import React from 'react';
import RentHeroComponent from '@/components/Rent/RentHeroComponent';
import RentSpecsComponent from '@/components/Rent/RentSpecsComponent';
import RentApplicationForm from '@/components/Rent/RentApplicationForm';
import SpaceShowcaseComponent from '@/components/Home/SpaceShowcaseComponent';
import FooterComponent from '@/components/Shared/FooterComponent';

export default function TenantsPage() {
    return (
        <main>
            <RentHeroComponent />
            <RentSpecsComponent />
            <SpaceShowcaseComponent />
            <RentApplicationForm />
            <FooterComponent />
        </main>
    );
}
