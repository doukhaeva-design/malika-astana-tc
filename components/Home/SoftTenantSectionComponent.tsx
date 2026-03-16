/*
  Секция для арендаторов (SoftTenantSectionComponent)
  Заголовок + 4 выгоды + CTA.
*/

"use client";

import Link from 'next/link';
import styles from './SoftTenantSectionComponent.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const infraIcons = [
    /* Поток */
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
    /* Помещения */
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></svg>,
    /* Инфраструктура */
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 3h15v13H1z" /><path d="M16 8h4l3 3v5h-7V8z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>,
    /* Безопасность */
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
];

export default function SoftTenantSectionComponent() {
    const { t } = useLanguage();

    return (
        <section className={styles.section} id="partnership">
            <div className={styles.container}>
                <div className={`${styles.header} animate-fade`}>
                    <div className={styles.subtitleWrapper}>
                        <span className={styles.serifSubtitle}>
                            {t.softTenant.badge}
                        </span>
                    </div>
                    <h2 className={styles.title}>{t.softTenant.titlePart1} <span className={styles.highlight}>Malika</span></h2>
                    <p className={styles.text}>{t.softTenant.text}</p>
                </div>

                <div className={styles.infraGrid}>
                    {t.softTenant.infraItems.map((item, idx) => (
                        <div key={idx} className={`${styles.infraCard} animate-fade stagger-${idx + 1}`}>
                            <div className={styles.infraIcon}>
                                {infraIcons[idx]}
                            </div>
                            <span className={styles.infraLabel}>{item}</span>
                        </div>
                    ))}
                </div>

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
