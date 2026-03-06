/* 
  Секция специалистов (SpecialistsSectionComponent)
  Показывает врачей и специалистов реабилитационного центра.
  Используется для повышения доверия и демонстрации экспертизы.
*/

"use client";

import React from 'react';
import styles from './SpecialistsSectionComponent.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function SpecialistsSectionComponent() {
    const { t } = useLanguage();

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>{t.rehabPage.specialistsTitle}</h2>
                <div className={styles.grid}>
                    {t.rehabPage.specialists.map((specialist, index) => (
                        <div key={index} className={`${styles.card} animate-fade-in`} style={{ transitionDelay: `${index * 0.1}s` }}>
                            <div className={styles.imagePlaceholder}>
                                {/* Здесь будет фото врача */}
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className={styles.icon}>
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <h3 className={styles.name}>{specialist.name}</h3>
                            <p className={styles.role}>{specialist.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
