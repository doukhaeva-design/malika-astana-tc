/* 
  Секция преимуществ для бизнеса (WhyBusinessHereComponent)
  Показывает выгоды от аренды площадей именно в этом ТЦ.
  Пользователь (предприниматель) может оценить потенциал расположения и структуры.
*/

"use client";

import React from 'react';
import styles from './WhyBusinessHereComponent.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

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
