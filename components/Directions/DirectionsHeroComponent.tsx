/* 
  Hero секция каталога (DirectionsHeroComponent)
  Дублирует стиль RentHeroComponent для визуального единства сайта.
*/

"use client";

import React from 'react';
import styles from './DirectionsHeroComponent.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function DirectionsHeroComponent() {
    const { language, t } = useLanguage();

    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={`${styles.content} animate-fade`}>
                    <span className={styles.serifSubtitle}>
                        {language === 'ru' ? 'Выбор MALIKA' : 'Curated by MALIKA'}
                    </span>
                    <h1 className={styles.title}>
                        {t.directionsPage.heroTitle}
                    </h1>
                    <div className={styles.divider}></div>
                    <p className={styles.description}>
                        {t.directionsPage.heroDesc}
                    </p>
                </div>
            </div>
        </section>
    );
}
