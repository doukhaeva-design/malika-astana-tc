/* 
  Страница "Направления" (Directions)
  Подробная информация о категориях товаров и услуг в ТЦ.
  Пользователь может ознакомиться со спецификой торговых направлений.
*/

import React from 'react';
import HeaderComponent from '@/components/HeaderComponent/HeaderComponent';
import PageHeaderComponent from '@/components/PageHeaderComponent/PageHeaderComponent';
import CategoryDetailSectionComponent from '@/components/CategoryDetailSectionComponent/CategoryDetailSectionComponent';
import FooterComponent from '@/components/FooterComponent/FooterComponent';

export default function DirectionsPage() {
    return (
        <main>
            <HeaderComponent />
            <PageHeaderComponent
                title="Направления торговли и услуг"
                description="В торговом центре MALIKA представлены основные категории товаров и сервисов, ориентированные на повседневные и коммерческие потребности."
            />
            <CategoryDetailSectionComponent />
            <FooterComponent />
        </main>
    );
}
