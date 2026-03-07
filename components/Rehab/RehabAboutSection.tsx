/* 
  О центре реабилитации (RehabAboutSection)
  Подробный блок с описанием миссии и подхода центра.
*/

"use client";

import React from 'react';
import styles from './RehabAboutSection.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function RehabAboutSection() {
    const { t } = useLanguage();

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.layout}>
                    <div className="animate-fade">
                        <h2 className={styles.title}>{t.rehabPage.aboutTitle}</h2>
                        <p className={styles.desc}>
                            {t.rehabPage.aboutDesc}
                        </p>
                    </div>
                    <div className="animate-fade stagger-1">
                        <div className={styles.imageWrapper}>
                            <img src="/pinterest_hero_1_1772463234531.png" alt="Rehabilitation center interior" className={styles.image} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
