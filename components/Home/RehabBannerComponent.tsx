"use client";

import Link from 'next/link';
import styles from './RehabBannerComponent.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function RehabBannerComponent() {
    const { language } = useLanguage();

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={`${styles.banner} animate-fade`}>
                    <div className={styles.content}>
                        <span className={styles.badge}>
                            {language === 'ru' ? 'Медицинский центр' : 'Medical Center'}
                        </span>
                        <h2 className={styles.title}>
                            {language === 'ru' ? 'Центр реабилитации' : 'Rehabilitation Center'}
                        </h2>
                        <p className={styles.text}>
                            {language === 'ru'
                                ? 'Восстановление здоровья, кинезиотерапия, мануальная терапия и консультации специалистов. На втором этаже ТЦ MALIKA.'
                                : 'Health recovery, kinesitherapy, manual therapy, and specialist consultations. On the second floor of MALIKA.'}
                        </p>
                        <Link href="/rehab" className={styles.btn}>
                            {language === 'ru' ? 'Подробнее' : 'Learn more'}
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
