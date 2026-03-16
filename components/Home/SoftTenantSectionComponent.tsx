/* 
  Секция для предпринимателей (SoftTenantSectionComponent)
  Вдохновлено блоком 'À la une' с ярким акцентом.
*/

"use client";

import React from 'react';
import Link from 'next/link';
import styles from './SoftTenantSectionComponent.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function SoftTenantSectionComponent() {
    const { t } = useLanguage();

    return (
        <section className={styles.section} id="partnership">
            <div className={styles.container}>
                <div className={`${styles.mainBox} animate-fade`}>
                    <div className={styles.content}>
                        <div className={styles.subtitleWrapper}>
                            <span className={styles.serifSubtitle}>
                                {t.softTenant.badge}
                            </span>
                        </div>
                        <h2 className={styles.title}>{t.softTenant.titlePart1} <span className={styles.highlight}>Malika</span></h2>
                        <p className={styles.text}>{t.softTenant.text}</p>
                        
                        <div className={styles.infraWrapper}>
                            <p className={styles.infraTitle}>{t.softTenant.infraTitle}</p>
                            <ul className={styles.infraList}>
                                {t.softTenant.infraItems.map((item, idx) => (
                                    <li key={idx} className={styles.infraItem}>
                                        <span className={styles.dot}></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles.footer}>
                            <Link href="/tenants" className={styles.actionBtn}>
                                {t.softTenant.btn}
                            </Link>
                        </div>
                    </div>

                    <div className={styles.visualCard}>
                        <img src="/pinterest_hero_1_1772463234531.png" alt="Business Space" className={styles.image} />
                        <div className={styles.imageOverlay}></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
