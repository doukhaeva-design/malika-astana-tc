/*
  Hero-секция для страницы «О центре».
  Консистентна с ContactsHeroComponent.
*/

"use client";

import React from 'react';
import styles from './AboutHeroComponent.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function AboutHeroComponent() {
    const { t } = useLanguage();

    return (
        <section className={styles.hero}>
            <div className={`${styles.container} animate-fade`}>
                <div className={styles.topDivider}></div>
                <div className={styles.content}>
                    <span className={styles.serifSubtitle}>
                        {t.about.heroSubtitle}
                    </span>
                    <h1 className={styles.title}>
                        {t.about.heroTitle}
                    </h1>
                    <p className={styles.description}>
                        {t.about.heroDesc}
                    </p>
                </div>
            </div>
        </section>
    );
}
