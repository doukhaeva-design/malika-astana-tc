/* 
  Секция заголовка контактов (ContactsHeroComponent)
  Центрированный заголовок с акцентным разделителем в стиле каталога.
*/

"use client";

import React from 'react';
import styles from './ContactsHeroComponent.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function ContactsHeroComponent() {
    const { language, t } = useLanguage();

    return (
        <section className={styles.hero} id="contacts-header">
            <div className={`${styles.container} animate-fade`}>
                {/* Элемент разделитель сверху */}
                <div className={styles.topDivider}></div>

                <div className={styles.content}>
                    <span className={`${styles.serifSubtitle} serif-accent`}>
                        {t.contactPage.heroSubtitle}
                    </span>
                    <h1 className={styles.title}>
                        {t.contactPage.heroTitle}
                    </h1>

                    <p className={styles.description}>
                        {t.contactPage.heroDesc}
                    </p>
                </div>
            </div>
        </section>
    );
}
