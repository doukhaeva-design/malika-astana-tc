/* 
  Секция Реабилитационного центра (RehabHighlightSectionComponent)
  Pinterest-style: Яркий блок-наложение, крупная фото и современная кнопка.
*/

"use client";

import React from 'react';
import Link from 'next/link';
import styles from './RehabHighlightSectionComponent.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function RehabHighlightSectionComponent() {
    const { language } = useLanguage();

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={`${styles.box} animate-fade`}>
                    <div className={styles.imageWrapper}>
                        <img
                            src="/rehab_interior_v2_1772460250804.png"
                            alt="Rehab Center"
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.content}>
                        <span className={styles.badge}>{language === 'ru' ? 'Здоровье' : 'Health'}</span>
                        <h2 className={styles.title}>
                            {language === 'ru' ? 'Профессиональный центр восстановления' : 'Professional Rehabilitation Center'}
                        </h2>
                        <p className={styles.text}>
                            {language === 'ru'
                                ? 'Современный медицинский центр на территории торгового комплекса. Удобно совмещать заботу о здоровье с повседневными делами.'
                                : 'A modern medical center located within the shopping complex. It is convenient to combine health care with daily errands.'}
                        </p>
                        <Link href="/rehab" className={styles.btn}>
                            {language === 'ru' ? 'Подробнее' : 'Learn more'}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
