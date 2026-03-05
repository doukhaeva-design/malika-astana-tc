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

    const handleScrollToForm = (e: React.MouseEvent) => {
        e.preventDefault();
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
                            {t.rentHero.title}
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
                        <h2 className={styles.mainTitle}>Ваш бизнес в центре внимания</h2>
                        <p className={styles.description}>
                            Удобная площадка для стабильной работы и развития бизнеса в
                            торговом центре MALIKA. Современная инфраструктура, высокий
                            трафик посетителей и выгодное расположение.
                        </p>

                        <div className={styles.actions}>
                            <a href="#rent-form" onClick={handleScrollToForm} className={styles.primaryBtn}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.btnIcon}><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                                {t.rentHero.btnCTA}
                            </a>
                            <a href="tel:+77470461877" className={styles.secondaryBtn}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.btnIcon}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                {t.rentHero.btnCall}
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
