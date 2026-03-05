/* 
  Баннер раздела реабилитации (RehabHeroComponent)
  Показывает заголовок и краткое описание услуг по восстановлению здоровья.
  Пользователь может сразу понять специализацию центра.
*/

"use client";

import React from 'react';
import styles from './RehabHeroComponent.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function RehabHeroComponent() {
    const { t } = useLanguage();

    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <h1 className={styles.title}>{t.rehabPage.heroTitle}</h1>
                <p className={styles.subtitle}>{t.rehabPage.heroDesc}</p>
            </div>
        </section>
    );
}
