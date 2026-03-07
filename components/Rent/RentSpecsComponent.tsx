/* 
  Консолидированная секция характеристик (RentSpecsComponent)
  Объединяет преимущества, форматы и условия в один компактный экран.
*/

"use client";

import React from 'react';
import styles from './RentSpecsComponent.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function RentSpecsComponent() {
    const { t } = useLanguage();

    const icons = [
        <svg key="1" className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>,
        <svg key="2" className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>,
        <svg key="3" className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 3h15v13H1z"></path><path d="M16 8h4l3 3v5h-7V8z"></path><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>,
        <svg key="4" className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
    ];

    return (
        <section className={styles.section} id="specs">
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Левая колонка - Почему мы */}
                    <div className={`${styles.leftCol} animate-fade`}>
                        <div>
                            <h2 className={styles.blockTitle}>{t.rentPage.whyTitle}</h2>
                            <div className={styles.reasonsList}>
                                {t.rentPage.whyReasons.map((reason, idx) => (
                                    <div key={idx} className={styles.reasonItem}>
                                        <div className={styles.iconCircle}>
                                            {icons[idx]}
                                        </div>
                                        <div className={styles.reasonContent}>
                                            <h4>{reason.title}</h4>
                                            <p>{reason.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className={styles.blockTitle}>{t.rentPage.formatsTitle}</h2>
                            <div className={styles.formatsGrid}>
                                {t.rentPage.availableSpaces.map((space, idx) => (
                                    <div key={idx} className={styles.formatCard}>
                                        <h5>{space.title}</h5>
                                        <p>{space.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Правая колонка - Условия и Инфраструктура */}
                    <div className={`${styles.rightCol} animate-fade stagger-1`}>
                        <div className={styles.specsTable}>
                            <h2 className={styles.blockTitle}>{t.rentPage.termsTitle}</h2>
                            {t.rentPage.termItems.map((item, idx) => (
                                <div key={idx} className={styles.tableRow}>
                                    <span className={styles.tableLabel}>{item.label}</span>
                                    <span className={styles.tableValue}>{item.value}</span>
                                </div>
                            ))}
                        </div>

                        <div className={styles.specsTable}>
                            <h2 className={styles.blockTitle}>{t.rentPage.infraTitle}</h2>
                            {t.rentPage.infraItems.map((item, idx) => (
                                <div key={idx} className={styles.tableRow}>
                                    <span className={styles.tableLabel}>{item.label}</span>
                                    <span className={styles.tableValue}>{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Добавленный блок: Процесс работы */}
                <div className={`${styles.processSection} animate-fade-up`}>
                    <h2 className={`${styles.blockTitle} text-center`}>{t.rentPage.processTitle}</h2>
                    <div className={styles.processGrid}>
                        {t.rentPage.processSteps.map((step, idx) => (
                            <div key={idx} className={styles.stepCard}>
                                <div className={styles.stepNumber}>0{idx + 1}</div>
                                <h4 className={styles.stepTitle}>{step.title}</h4>
                                <p className={styles.stepDesc}>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
