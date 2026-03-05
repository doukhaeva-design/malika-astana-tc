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
                    <span className={`${styles.serifSubtitle} serif-accent`}>
                        {language === 'ru' ? 'Выбор MALIKA' : 'Curated by MALIKA'}
                    </span>
                    <h1 className={styles.title}>
                        {language === 'ru' ? 'КАТАЛОГ МАГАЗИНОВ И СЕРВИСОВ' : 'STORES & SERVICES CATALOG'}
                    </h1>
                    <div className={styles.divider}></div>
                    <p className={styles.description}>
                        {language === 'ru'
                            ? "В торговом центре MALIKA представлены магазины, сервисные компании и профессиональные услуги для бизнеса и повседневных задач."
                            : "The MALIKA shopping center presents stores, service companies, and professional services for business and daily tasks."}
                    </p>
                </div>
            </div>
        </section>
    );
}
