/* 
  Секция преимуществ для бизнеса (WhyBusinessHereComponent)
  Показывает выгоды от аренды площадей именно в этом ТЦ.
  Пользователь (предприниматель) может оценить потенциал расположения и структуры.
  Каждый пункт — карточка с тематической иконкой.
*/

"use client";

import React from 'react';
import styles from './WhyBusinessHereComponent.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

// Иконки для каждого преимущества (в том же порядке, что и whyReasons)
const reasonIcons = [
    // Активная торговая зона — локация/пин
    <svg key="loc" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
    </svg>,
    // Компактная структура — схема/план
    <svg key="struct" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>,
    // Удобная логистика — грузовик/стрелки
    <svg key="log" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="1" />
        <path d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>,
    // Потенциал развития — рост/график
    <svg key="grow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
    </svg>,
];

export default function WhyBusinessHereComponent() {
    const { t } = useLanguage();

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {t.rentPage.whyReasons.map((reason, index) => (
                        <div key={index} className={styles.card}>
                            <h3 className={styles.cardTitle}>{reason.title}</h3>
                            <p className={styles.cardText}>{reason.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
