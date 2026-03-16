/*
  Секция 'О центре' (AboutSectionComponent)
  compact=true — короткий блок для главной страницы с кнопкой «Подробнее»
  compact=false — полный блок для страницы /about
*/

"use client";

import Link from 'next/link';
import styles from './AboutSectionComponent.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function AboutSectionComponent({ compact = false }: { compact?: boolean }) {
    const { t, language } = useLanguage();

    return (
        <section className={styles.section} id="about">
            <div className={styles.container}>
                <div className={styles.layout}>
                    <div className={`${styles.content} animate-fade`}>
                        <div className={styles.subtitleWrapper}>
                            <span className={styles.serifSubtitle}>
                                {t.about.title}
                            </span>
                        </div>
                        <h2 className={styles.title}>{t.common.company}</h2>
                        <p className={styles.text}>
                            {compact ? t.about.shortText : t.about.text}
                        </p>

                        <div className={styles.stats}>
                            <div className={styles.statItem}>
                                <span className={styles.statValue}>4 000 {language === 'ru' ? 'м²' : 'm²'}</span>
                                <span className={styles.statLabel}>{language === 'ru' ? 'площадь' : 'area'}</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statValue}>3 {language === 'ru' ? 'этажа' : 'floors'}</span>
                                <span className={styles.statLabel}>{language === 'ru' ? 'этажность' : 'levels'}</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statValue}>50+</span>
                                <span className={styles.statLabel}>{language === 'ru' ? 'мест парковки' : 'parking spots'}</span>
                            </div>
                        </div>

                        {compact && (
                            <Link href="/about" className={styles.moreBtn}>
                                {t.about.moreBtn}
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </Link>
                        )}
                    </div>

                    <div className={`${styles.visuals} animate-fade`}>
                        <div className={styles.imageWrapper}>
                            <img
                                src="/malika-facade-new.jpg"
                                alt="MALIKA Concept"
                                className={styles.image}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
