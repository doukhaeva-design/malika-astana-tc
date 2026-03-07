/* 
  Главный баннер (HeroSectionComponent)
  Modern Commercial Look: Четкая типографика, плотные цвета и акцент на практичность.
*/

"use client";

import React from 'react';
import Link from 'next/link';
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
            {/* Animated Background Glows */}
            <div className={styles.glow1}></div>
            <div className={styles.glow2}></div>



            <div className={styles.container}>
                <div className={styles.layout}>
                    <div className={styles.content}>
                        <div className={`${styles.subtitleWrapper} ${styles.reveal}`}>
                            <span className={`${styles.serifSubtitle} serif-accent`}>
                                {language === 'ru' ? 'Добро пожаловать' : 'Welcome'}
                            </span>
                        </div>
                        <h1 className={`${styles.title} ${styles.reveal} ${styles.delay1}`}>
                            <span className={styles.titleLight}>{t.hero.title1}</span> <br />
                            <span className={styles.accent}>{t.hero.title2}</span>
                        </h1>
                        <p className={`${styles.description} ${styles.reveal} ${styles.delay2}`}>
                            {t.hero.desc}
                        </p>
                        <div className={`${styles.actions} ${styles.reveal} ${styles.delay3}`}>
                            <Link href="/directions" className={styles.btnPrimary}>
                                <span>{t.common.directions}</span>
                                <svg className={styles.btnIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="7" y1="17" x2="17" y2="7"></line>
                                    <polyline points="7 7 17 7 17 17"></polyline>
                                </svg>
                            </Link>
                            <Link href="/contacts" className={styles.btnSecondary}>
                                {t.hero.btnDirections}
                            </Link>
                        </div>
                    </div>

                    <div className={styles.visuals}>
                        <div
                            className={`${styles.imageMain} ${styles.reveal} ${styles.delay2}`}
                            style={{ transform: `translate3d(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px, 0)` }}
                        >
                            <img src="/malika-facade-new.jpg" alt="MALIKA Astana Facade" className={styles.heroImage} />
                            <div className={styles.imageOverlay}></div>
                        </div>
                        <div
                            className={`${styles.imageOffset} ${styles.reveal} ${styles.delay3}`}
                            style={{ transform: `translate3d(${mousePos.x * -0.3}px, ${mousePos.y * -0.3}px, 0)` }}
                        >
                            <img src="/pinterest_hero_1_1772463234531.png" alt="Lifestyle MALIKA" className={styles.heroImage} />
                            <div className={styles.imageOverlay}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
