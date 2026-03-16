/*
  Секция для предпринимателей (SoftTenantSectionComponent)
  Заголовок + описание + сетка иконок-карточек инфраструктуры + CTA.
*/

"use client";

import React from 'react';
import Link from 'next/link';
import styles from './SoftTenantSectionComponent.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const infraIcons = [
    /* Помещения разных форматов */
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></svg>,
    /* Грузовой лифт */
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="18" rx="2" /><line x1="12" y1="8" x2="12" y2="16" /><polyline points="8 12 12 8 16 12" /></svg>,
    /* Зона загрузки */
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 3 20 16 16 16" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>,
    /* Отдельные входы */
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" /><polyline points="10 17 15 12 10 7" /><line x1="15" y1="12" x2="3" y2="12" /></svg>,
    /* Независимое отопление */
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2c1.5 2 4 4 4 7a4 4 0 1 1-8 0c0-3 2.5-5 4-7z" /><path d="M12 22v-4" /><path d="M8 22h8" /></svg>,
    /* Охрана и видеонаблюдение */
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
    /* Wi-Fi */
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0" /><path d="M1.42 9a16 16 0 0 1 21.16 0" /><path d="M8.53 16.11a6 6 0 0 1 6.95 0" /><line x1="12" y1="20" x2="12.01" y2="20" /></svg>,
    /* Работа в ночное время */
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>,
];

export default function SoftTenantSectionComponent() {
    const { t } = useLanguage();

    return (
        <section className={styles.section} id="partnership">
            <div className={styles.container}>
                {/* Header */}
                <div className={`${styles.header} animate-fade`}>
                    <div className={styles.subtitleWrapper}>
                        <span className={styles.serifSubtitle}>
                            {t.softTenant.badge}
                        </span>
                    </div>
                    <h2 className={styles.title}>{t.softTenant.titlePart1} <span className={styles.highlight}>Malika</span></h2>
                    <p className={styles.text}>{t.softTenant.text}</p>
                </div>

                {/* Infra Grid */}
                <div className={styles.infraGrid}>
                    {t.softTenant.infraItems.map((item, idx) => (
                        <div key={idx} className={`${styles.infraCard} animate-fade stagger-${(idx % 4) + 1}`}>
                            <div className={styles.infraIcon}>
                                {infraIcons[idx]}
                            </div>
                            <span className={styles.infraLabel}>{item}</span>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className={`${styles.ctaRow} animate-fade`}>
                    <Link href="/tenants" className={styles.actionBtn}>
                        {t.softTenant.btn}
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
