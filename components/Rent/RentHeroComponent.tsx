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
    const { t, language } = useLanguage();

    const scrollToForm = () => {
        const element = document.getElementById('rent-form');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className={styles.hero}>
            <div className={`${styles.container} animate-fade`}>
                {/* Заголовок страницы с акцентом */}
                <div className={styles.pageHeader}>
                    <div className={styles.subtitleWrapper}>
                        <span className={`${styles.serifSubtitle} serif-accent`}>
                            {t.rentHero.subtitle}
                        </span>
                    </div>
                    <h1 className={styles.pageTitle}>{t.rentHero.title}</h1>
                </div>

                <div className={styles.layout}>
                    {/* Левая колонка - Визуал */}
                    <div className={styles.imageSide}>
                        <img
                            src="/malika-interior-rent.png"
                            alt="ТЦ Малика Интерьер"
                            className={styles.mainImage}
                        />
                    </div>

                    {/* Правая колонка - Тексты и статика */}
                    <div className={styles.textSide}>
                        <h2 className={styles.mainTitle}>{t.rentHero.mainTitle}</h2>
                        <p className={styles.description}>
                            {t.rentHero.mainDesc}
                        </p>

                        <div className={styles.presentationLinkWrapper}>
                            <a href="/MalikaPresentaciya.pdf" target="_blank" className={styles.presentationLink}>
                                <svg className={styles.linkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                                <span>{t.rentHero.btnDownload}</span>
                            </a>
                        </div>

                        <div className={styles.actions}>
                            {/* Главная кнопка - Заявка */}
                            <button className={styles.callBtn} onClick={scrollToForm}>
                                {t.rentHero.btnCTA}
                            </button>

                            {/* Кнопка звонка */}
                            <a href="tel:+77470461877" className={styles.downloadBtn}>
                                <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                {t.rentHero.btnCall}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
