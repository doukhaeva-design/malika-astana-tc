"use client";

/* 
  Страница "Направления" (Directions)
  Подробная информация о категориях товаров и услуг в ТЦ.
  Пользователь может ознакомиться со спецификой торговых направлений.
*/

import React from 'react';
import HeaderComponent from '@/components/Shared/HeaderComponent';
import PageHeaderComponent from '@/components/Shared/PageHeaderComponent';
import CategoryDetailSectionComponent from '@/components/Directions/CategoryDetailSectionComponent';
import FooterComponent from '@/components/Shared/FooterComponent';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function DirectionsPage() {
    const { language, t } = useLanguage();

    return (
        <main>
            <HeaderComponent />
            <PageHeaderComponent
                title={t.common.directionsShort}
                description={language === 'ru'
                    ? "В торговом центре MALIKA представлены основные категории товаров и сервисов, ориентированные на повседневные и коммерческие потребности."
                    : "The MALIKA shopping center presents the main categories of goods and services, focused on everyday and commercial needs."}
            />
            <CategoryDetailSectionComponent />
            <FooterComponent />
        </main>
    );
}
