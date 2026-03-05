/* 
  Баннер раздела аренды (RentHeroComponent)
  Показывает заголовок и краткий призыв к действию для потенциальных арендаторов.
  Пользователь может сразу увидеть предложение по коммерческим помещениям.
*/

"use client";

import React from 'react';
import styles from './RentHeroComponent.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function RentHeroComponent() {
    const { t } = useLanguage();

    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <h1 className={styles.title}>{t.rentHero.title}</h1>
                <p className={styles.subtitle}>{t.rentHero.subtitle}</p>
                <div className={styles.actions}>
                    <a href="#apply" className={styles.btn}>{t.rentHero.btn}</a>
                    <a href="tel:+77055557609" className={styles.btnOutline}>{t.rentHero.btnCall}</a>
                </div>
            </div>
        </section>
    );
}
