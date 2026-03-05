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
    const { language } = useLanguage();

    return (
        <section className={styles.section} id="partnership">
            <div className={styles.container}>
                <div className={`${styles.mainBox} animate-fade`}>
                    <div className={styles.content}>
                        <h3 className={styles.badge}>{language === 'ru' ? 'Партнерство' : 'Partnership'}</h3>
                        <h2 className={styles.title}>{language === 'ru' ? 'Ваш бизнес в' : 'Your business at'} <span className={styles.highlight}>Malika</span></h2>
                        <p className={styles.text}>
                            {language === 'ru'
                                ? 'Станьте частью бизнес-сообщества MALIKA. Современные площади, стабильный трафик и выгодные локации для вашего роста.'
                                : 'Become part of the MALIKA business community. Modern spaces, stable traffic, and profitable locations for your growth.'}
                        </p>

                        <div className={styles.footer}>
                            <Link href="/rent" className={styles.actionBtn}>
                                {language === 'ru' ? 'СТАТЬ АРЕНДАТОРОМ' : 'BECOME A TENANT'}
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
