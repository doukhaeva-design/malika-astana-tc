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
    const { language } = useLanguage();

    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <h1 className={styles.title}>{language === 'ru' ? 'Реабилитационный центр' : 'Rehabilitation Center'}</h1>
                <p className={styles.subtitle}>
                    {language === 'ru'
                        ? 'На территории торгового центра функционирует центр реабилитации, предлагающий профессиональные услуги по восстановлению и поддержанию здоровья.'
                        : 'A rehabilitation center operates on the territory of the shopping center, offering professional services for restoring and maintaining health.'}
                </p>
            </div>
        </section>
    );
}
