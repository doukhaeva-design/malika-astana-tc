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
                            {language === 'ru' ? (
                                <>
                                    <span className={styles.titleLight}>Ваш</span> торговый центр <br />
                                    в <span className={styles.accent}>Астане</span>
                                </>
                            ) : (
                                <>
                                    <span className={styles.titleLight}>Your</span> shopping center <br />
                                    in <span className={styles.accent}>Astana</span>
                                </>
                            )}
                        </h1>
                        <p className={`${styles.description} ${styles.reveal} ${styles.delay2}`}>
                            {language === 'ru' ? (
                                <>Широкий выбор товаров для дома, бизнеса и авто. <strong className={styles.boldText}>Всё необходимое — рядом и без лишней суеты.</strong></>
                            ) : (
                                <>A wide selection of goods for home, business, and auto. <strong className={styles.boldText}>Everything you need — close by and hassle-free.</strong></>
                            )}
                        </p>
                        <div className={`${styles.actions} ${styles.reveal} ${styles.delay3}`}>
                            <Link href="/contacts" className={styles.btnPrimary}>
                                {t.hero.btnDirections}
                            </Link>
                            <Link href="/directions" className={styles.btnSecondary}>
                                {t.common.directions}
                            </Link>
                        </div>
                    </div>

                    <div className={styles.visuals} style={{
                        transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`
                    }}>
                        <div className={`${styles.imageMain} ${styles.reveal} ${styles.delay2}`}>
                            <img src="/malika-facade-new.jpg" alt="Фасад MALIKA Астана" />
                        </div>
                        <div className={`${styles.imageOffset} ${styles.reveal} ${styles.delay3}`}>
                            <img src="/pinterest_hero_2_1772463249311.png" alt="Customer lifestyle" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
