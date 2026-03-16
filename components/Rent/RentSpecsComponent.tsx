/*
  Комплексная секция характеристик (RentSpecsComponent)
  Каждый блок — отдельная визуальная секция с чередующимся фоном.
*/

"use client";

import React from 'react';
import styles from './RentSpecsComponent.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function RentSpecsComponent() {
    const { t } = useLanguage();

    const whyIcons = [
        <svg key="1" className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>,
        <svg key="2" className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg>,
        <svg key="3" className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="18" rx="2" /><line x1="12" y1="8" x2="12" y2="16" /><polyline points="8 12 12 8 16 12" /></svg>,
        <svg key="4" className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 3h15v13H1z" /><path d="M16 8h4l3 3v5h-7V8z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>
    ];

    const formatIcons = [
        <svg key="f1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>,
        <svg key="f2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg>,
        <svg key="f3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28"><rect x="2" y="3" width="20" height="18" rx="2" /><line x1="2" y1="9" x2="22" y2="9" /></svg>
    ];

    return (
        <div className={styles.section} id="specs">
            {/* 1. ПРЕИМУЩЕСТВА — серый фон */}
            <section className={styles.whySection}>
                <div className={styles.container}>
                    <h2 className={`${styles.blockTitle} animate-fade`}>{t.rentPage.whyTitle}</h2>
                    <div className={styles.whyGrid}>
                        {t.rentPage.whyReasons.map((reason, idx) => (
                            <div key={idx} className={`${styles.whyCard} animate-fade stagger-${idx + 1}`}>
                                <div className={styles.iconBox}>
                                    {whyIcons[idx]}
                                </div>
                                <h4>{reason.title}</h4>
                                <p>{reason.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2. ФОРМАТЫ + УСЛОВИЯ — белый фон */}
            <section className={styles.dashboardGrid}>
                <div className={styles.container}>
                    <div className={styles.dashboardInner}>
                        <div className={`${styles.formatsCol} animate-fade`}>
                            <h2 className={styles.blockTitle}>{t.rentPage.formatsTitle}</h2>
                            <div className={styles.formatsList}>
                                {t.rentPage.availableSpaces.map((space, idx) => (
                                    <div key={idx} className={styles.formatCard}>
                                        <div style={{ color: 'var(--accent-warm)', flexShrink: 0 }}>
                                            {formatIcons[idx]}
                                        </div>
                                        <div className={styles.formatInfo}>
                                            <h5>{space.title}</h5>
                                            <p>{space.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={`${styles.specsCol} animate-fade stagger-1`}>
                            <div className={styles.specsTable}>
                                <h3>{t.rentPage.termsTitle}</h3>
                                {t.rentPage.termItems.map((item, idx) => (
                                    <div key={idx} className={styles.tableRow}>
                                        <span className={styles.tableLabel}>{item.label}</span>
                                        <span className={styles.tableValue}>{item.value}</span>
                                    </div>
                                ))}
                            </div>
                            <div className={styles.specsTable}>
                                <h3>{t.rentPage.infraTitle}</h3>
                                {t.rentPage.infraItems.map((item, idx) => (
                                    <div key={idx} className={styles.tableRow}>
                                        <span className={styles.tableLabel}>{item.label}</span>
                                        <span className={styles.tableValue}>{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. КОМУ ПОДОЙДУТ — серый фон */}
            <section className={styles.targetSection}>
                <div className={styles.container}>
                    <h2 className={`${styles.blockTitle} animate-fade`}>{t.rentPage.targetTitle}</h2>
                    <p className={`${styles.targetDesc} animate-fade`}>{t.rentPage.targetDesc}</p>
                    <div className={styles.targetGrid}>
                        {t.rentPage.targetItems.map((item, idx) => (
                            <div key={idx} className={`${styles.targetCard} animate-fade stagger-${idx + 1}`}>
                                <h4 className={styles.targetCardTitle}>{item.title}</h4>
                                <p className={styles.targetCardText}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. ПРОЦЕСС — белый фон */}
            <section className={styles.processSection}>
                <div className={styles.container}>
                    <h2 className={`${styles.blockTitle} ${styles.blockTitleTextCenter} animate-fade`}>
                        {t.rentPage.processTitle}
                    </h2>
                    <div className={styles.processGrid}>
                        {t.rentPage.processSteps.map((step, idx) => (
                            <div key={idx} className={`${styles.stepCard} animate-fade stagger-${idx + 1}`}>
                                <span className={styles.stepNumber}>{idx + 1}</span>
                                <h4 className={styles.stepTitle}>{step.title}</h4>
                                <p className={styles.stepDesc}>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
