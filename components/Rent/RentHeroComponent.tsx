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
    const { language } = useLanguage();

    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <h1 className={styles.title}>{language === 'ru' ? 'Аренда коммерческих помещений' : 'Commercial Space Rental'}</h1>
                <p className={styles.subtitle}>{language === 'ru' ? 'Удобная площадка для стабильной работы и развития бизнеса.' : 'A convenient platform for stable operation and business development.'}</p>
                <p className={styles.description}>
                    {language === 'ru'
                        ? 'Торговый центр MALIKA расположен в активной торговой зоне и предлагает помещения различного формата.'
                        : 'The MALIKA shopping center is located in an active trading zone and offers premises of various formats.'}
                </p>
                <div className={styles.actions}>
                    <a href="#apply" className={styles.btn}>{language === 'ru' ? 'Оставить заявку' : 'Submit Application'}</a>
                    <a href="tel:+77055557609" className={styles.btnOutline}>{language === 'ru' ? 'Позвонить' : 'Call'}</a>
                </div>
            </div>
        </section>
    );
}
