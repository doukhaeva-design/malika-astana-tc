/*
  Главный баннер (HeroSectionComponent)
  Фото-фон + градиент + контент слева.
*/

"use client";

import React from 'react';
import styles from './HeroSectionComponent.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function HeroSectionComponent() {
    const { language, t } = useLanguage();
    const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const x = (clientX / window.innerWidth - 0.5) * 20;
        const y = (clientY / window.innerHeight - 0.5) * 20;
        setMousePos({ x, y });
    };

    return (
        <section className={styles.hero} onMouseMove={handleMouseMove}>
            <div
                className={styles.glow1}
                style={{ transform: `translate(${mousePos.x * 1.5}px, ${mousePos.y * 1.5}px)` }}
            />
            <div
                className={styles.glow2}
                style={{ transform: `translate(${mousePos.x * -1}px, ${mousePos.y * -1}px)` }}
            />

            <div className={styles.container}>
                <div className={styles.layout}>
                    <div className={styles.content}>
                        <h1 className={`${styles.title} ${styles.reveal} ${styles.delay1}`}>
                            <span className={styles.titleLight}>{t.hero.title1}</span> <br />
                            <span className={styles.accent}>{t.hero.title2}</span>
                        </h1>
                        <p className={`${styles.description} ${styles.reveal} ${styles.delay2}`}>
                            {t.hero.desc}
                        </p>
                        <div className={`${styles.actions} ${styles.reveal} ${styles.delay3}`}>
                            <a href="#map" className={styles.btnPrimary}>
                                <span>{t.hero.btnPrimary}</span>
                                <svg className={styles.btnIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                            </a>
                            <a href="/shops" className={styles.btnSecondary}>
                                <span>{language === 'ru' ? 'Каталог' : 'Catalog'}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
