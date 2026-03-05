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

    return (
        <section className={styles.hero}>
            <div className={styles.bgText}>Malika</div>
            <div className={styles.container}>
                <div className={styles.layout}>
                    <div className={`${styles.content} animate-fade`}>
                        <div className={styles.taglineWrapper}>
                            <span className={styles.statusDot}></span>
                            <span className={styles.tagline}>
                                {t.hero.welcome}
                                <span className={styles.taglineMobileOnly}> {t.hero.in} <span className={styles.boldMalika}>{t.hero.malika}</span></span>
                            </span>
                        </div>
                        <h1 className={styles.title}>
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
                        <p className={styles.description}>
                            {language === 'ru' ? (
                                <>Широкий выбор товаров для дома, бизнеса и авто. <strong className={styles.boldText}>Всё необходимое — рядом и без лишней суеты.</strong></>
                            ) : (
                                <>A wide selection of goods for home, business, and auto. <strong className={styles.boldText}>Everything you need — close by and hassle-free.</strong></>
                            )}
                        </p>
                        <div className={styles.actions}>
                            <Link href="/contacts" className={styles.btnPrimary}>
                                {t.hero.btnDirections}
                            </Link>
                            <Link href="/directions" className={styles.btnSecondary}>
                                {t.common.directions}
                            </Link>
                        </div>
                    </div>

                    <div className={styles.visuals}>
                        <div className={`${styles.imageMain} animate-fade stagger-1`}>
                            <img src="/malika-facade-new.jpg" alt="Фасад MALIKA Астана" />
                        </div>
                        <div className={`${styles.imageOffset} animate-fade stagger-2`}>
                            <img src="/pinterest_hero_2_1772463249311.png" alt="Customer lifestyle" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.scrollDown}>
                <div className={styles.mouse}></div>
                <span>{t.hero.scroll}</span>
            </div>
        </section>
    );
}
