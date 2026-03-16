"use client";

/* 
  Секция направлений (ForEverydayNeedsSectionComponent)
  Вдохновлено муниципальным стилем с карточками (À vos agendas).
*/

import React, { useRef } from 'react';
import Link from 'next/link';
import styles from './ForEverydayNeedsSectionComponent.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function ForEverydayNeedsSectionComponent() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const { t, language } = useLanguage();

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = circularScrollAmount();
            const targetScroll = direction === 'left'
                ? current.scrollLeft - scrollAmount
                : current.scrollLeft + scrollAmount;

            current.scrollTo({
                left: targetScroll,
                behavior: 'smooth'
            });
        }
    };

    // Определяем шаг прокрутки (одна карточка + gap)
    const circularScrollAmount = () => {
        if (typeof window !== 'undefined' && window.innerWidth <= 768) {
            return 315; // Ширина карточки 300 + gap 15
        }
        return 440; // Ширина карточки 400 + gap 40
    };

    const directions = [
        {
            title: t.directions.categories[0].title,
            forWhom: language === 'ru' ? 'Владельцы авто' : 'Car owners',
            desc: t.directions.categories[0].desc,
            img: '/category_auto_1772459952993.png'
        },
        {
            title: t.directions.categories[1].title,
            forWhom: language === 'ru' ? 'Бизнес-решения' : 'Business solutions',
            desc: t.directions.categories[1].desc,
            img: '/category_tech_1772459982373.png'
        },
        {
            title: t.directions.categories[2].title,
            forWhom: language === 'ru' ? 'Быт и уют' : 'Comfort & Life',
            desc: t.directions.categories[2].desc,
            img: '/category_home_1772459996707.png'
        },
        {
            title: t.directions.categories[3].title,
            forWhom: language === 'ru' ? 'Бытовые услуги' : 'Household services',
            desc: t.directions.categories[3].desc,
            img: '/category_service_1772460173357.png'
        },
        {
            title: t.directions.categories[4].title,
            forWhom: language === 'ru' ? 'Реабилитация' : 'Rehabilitation',
            desc: t.directions.categories[4].desc,
            img: '/rehab_interior_v2_1772460250804.png',
            isSpecial: true,
            href: '/rehab'
        }
    ];

    return (
        <section className={styles.section} id="directions">
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.headerLeft}>
                        <h2 className={styles.title}>
                            {language === 'ru' ? (
                                <>Магазины и услуги <br /> для <span className={styles.accent}>дома и бизнеса</span></>
                            ) : (
                                <>Shops & services <br /> for <span className={styles.accent}>home & business</span></>
                            )}
                        </h2>
                        <p className={styles.subtitle}>
                            {language === 'ru'
                                ? 'Находите всё необходимое для дела и жизни в одном месте.'
                                : 'Find everything you need for business and life in one place.'}
                        </p>
                    </div>
                    <div className={styles.headerActions}>
                        <button
                            className={styles.arrowBtn}
                            onClick={() => scroll('left')}
                            aria-label="Scroll left"
                        >
                            ←
                        </button>
                        <button
                            className={styles.arrowBtn}
                            onClick={() => scroll('right')}
                            aria-label="Scroll right"
                        >
                            →
                        </button>
                        <Link href="/shops" className={styles.viewAll}>
                            {language === 'ru' ? 'ВСЕ НАПРАВЛЕНИЯ' : 'ALL DIRECTIONS'}
                        </Link>
                    </div>
                </div>
            </div>

            <div className={styles.grid} ref={scrollRef}>
                {directions.map((dir, index) => (
                    <div
                        key={index}
                        className={`${styles.card} animate-fade stagger-${index + 1}`}
                    >
                        <div className={styles.imageWrapper}>
                            <img src={dir.img} alt={dir.title} className={styles.cardImage} />
                        </div>

                        <div className={styles.cardContent}>
                            <div className={styles.cardHeader}>
                                <span className={styles.tag}>{dir.forWhom}</span>
                                <h3 className={styles.cardTitle}>{dir.title}</h3>
                            </div>
                            <p className={styles.cardText}>{dir.desc}</p>

                            <div className={styles.cardFooter}>
                                {dir.isSpecial && dir.href ? (
                                    <Link href={dir.href} className={styles.btnSpecial}>
                                        {language === 'ru' ? 'Подробнее' : 'Learn more'}
                                    </Link>
                                ) : (
                                    <div className={styles.separator}></div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
