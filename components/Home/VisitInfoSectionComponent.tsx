/* 
  Секция контактов (VisitInfoSectionComponent)
  Вдохновлено блоком 'Annuaire de contacts' с карточками контактов.
*/

"use client";

import React from 'react';
import Link from 'next/link';
import styles from './VisitInfoSectionComponent.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function VisitInfoSectionComponent() {
    const { language, t } = useLanguage();

    const categories = [
        { label: t.visit.addressLabel, value: t.visit.addressVal, icon: '📍' },
        { label: t.visit.phoneLabel, value: t.visit.phoneVal, icon: '📞' },
        { label: t.visit.hoursLabel, value: t.visit.hoursVal, icon: '🕒' }
    ];

    return (
        <section className={styles.section} id="visit">
            <div className={styles.container}>
                <div className={styles.layout}>
                    {/* Main Info Box */}
                    <div className={`${styles.mainBox} animate-fade`}>
                        <h2 className={styles.title}>{t.visit.title}</h2>
                        <p className={styles.text}>
                            {t.visit.subtitle}
                        </p>
                        <Link href="/contacts" className={styles.mainBtn}>
                            {language === 'ru' ? 'ВСЕ КОНТАКТЫ' : 'ALL CONTACTS'}
                        </Link>
                    </div>

                    {/* Smaller Cards Grid */}
                    <div className={styles.sideGrid}>
                        {categories.map((cat, index) => (
                            <div key={index} className={`${styles.catCard} animate-fade stagger-${index + 1}`} style={{ transitionDelay: `${index * 0.15}s` }}>
                                <div className={styles.catIconWrapper}>
                                    <span className={styles.catIcon}>{cat.icon}</span>
                                    <span className={styles.plus}>+</span>
                                </div>
                                <div className={styles.cardContent}>
                                    <span className={styles.catLabel}>{cat.label}</span>
                                    <h3 className={styles.catValue}>{cat.value}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
