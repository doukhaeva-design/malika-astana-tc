/* 
  Секция 'О центре' (AboutSectionComponent)
  Лаконичный блок с основным описанием торгового центра.
*/

"use client";

import React from 'react';
import styles from './AboutSectionComponent.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function AboutSectionComponent() {
    const { t, language } = useLanguage();

    return (
        <section className={styles.section} id="about">
            <div className={styles.container}>
                <div className={styles.layout}>
                    <div className={`${styles.content} animate-fade`}>
                        <div className={styles.subtitleWrapper}>
                            <span className={styles.serifSubtitle}>
                                {t.about.title}
                            </span>
                        </div>
                        <h2 className={styles.title}>{t.common.company}</h2>
                        <p className={styles.text}>
                            {t.about.text}
                        </p>
                        
                        <div className={styles.stats}>
                            <div className={styles.statItem}>
                                <span className={styles.statValue}>{t.about.stats.area}</span>
                                <span className={styles.statLabel}>{language === 'ru' ? 'площадь' : 'area'}</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statValue}>{t.about.stats.floors}</span>
                                <span className={styles.statLabel}>{language === 'ru' ? 'этажность' : 'floors'}</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statValue}>{language === 'ru' ? 'паркинг' : 'parking'}</span>
                                <span className={styles.statLabel}>{t.about.stats.parking}</span>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.visuals} animate-fade`}>
                        <div className={styles.imageWrapper}>
                            <img
                                src="/malika-facade-new.jpg"
                                alt="MALIKA Concept"
                                className={styles.image}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
