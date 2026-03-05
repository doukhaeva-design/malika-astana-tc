/* 
  Секция "Доступные помещения" (AvailableSpacesComponent)
  Показывает различные форматы площадей для аренды.
  Пользователь может узнать о доступных типах недвижимости для бизнеса.
  Каждый тип — карточка с иконкой.
*/

"use client";

import React from 'react';
import styles from './AvailableSpacesComponent.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

// Иконки для типов помещений: торговое, склад, коммерческий участок
const spaceIcons = [
    // Торговые помещения — витрина/магазин
    <svg key="shop" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
    </svg>,
    // Складские площади — коробка
    <svg key="box" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>,
    // Коммерческие участки — здание/офис
    <svg key="office" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="18" rx="2" />
        <line x1="2" y1="9" x2="22" y2="9" />
        <line x1="12" y1="9" x2="12" y2="21" />
    </svg>,
];

export default function AvailableSpacesComponent() {
    const { t } = useLanguage();

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.mainTitle}>{t.rentPage.availableTitle}</h2>
                <div className={styles.list}>
                    {t.rentPage.availableSpaces.map((space, index) => (
                        <div key={index} className={styles.spaceItem}>
                            {/* Иконка типа помещения */}
                            <div className={styles.iconBox}>
                                {spaceIcons[index] ?? spaceIcons[0]}
                            </div>
                            <div className={styles.spaceContent}>
                                <h3 className={styles.title}>{space.title}</h3>
                                <p className={styles.text}>{space.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
