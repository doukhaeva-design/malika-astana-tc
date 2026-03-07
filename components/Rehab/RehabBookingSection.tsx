/* 
  Запись на прием (RehabBookingSection)
  Призыв к действию для пациентов реабилитационного центра.
*/

"use client";

import React from 'react';
import styles from './RehabBookingSection.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function RehabBookingSection() {
    const { t } = useLanguage();

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className="animate-fade">
                    <h2 className={styles.title}>{t.rehabPage.ctaTitle}</h2>
                    <p className={styles.desc}>{t.rehabPage.ctaDesc}</p>
                    <div className={styles.actions}>
                        <a href={`tel:${t.rehabPage.phone.replace(/[^0-9+]/g, '')}`} className={styles.btnPrimary}>
                            {t.common.call}
                        </a>
                        <a href="https://wa.me/77055557609" target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
                            WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
