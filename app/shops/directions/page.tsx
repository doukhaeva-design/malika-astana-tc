"use client";

/* 
  Страница "Направления" (Directions)
  Подробная информация о категориях товаров и услуг в ТЦ.
  Пользователь может ознакомиться со спецификой торговых направлений.
*/

import React from 'react';
import DirectionsHeroComponent from '@/components/Directions/DirectionsHeroComponent';
import CategoryDetailSectionComponent from '@/components/Directions/CategoryDetailSectionComponent';
import FooterComponent from '@/components/Shared/FooterComponent';

export default function DirectionsPage() {
    return (
        <main>
            <DirectionsHeroComponent />
            <CategoryDetailSectionComponent />
            <FooterComponent />
        </main>
    );
}
