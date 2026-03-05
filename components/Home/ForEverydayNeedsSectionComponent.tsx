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
    const { language } = useLanguage();

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

    const directions = language === 'ru' ? [
        {
            title: 'Здоровье',
            forWhom: 'Реабилитация',
            desc: 'Профессиональный центр восстановления',
            img: '/rehab_interior_v2_1772460250804.png',
            isSpecial: true
        },
        {
            title: 'Автотовары',
            forWhom: 'Владельцы авто',
            desc: 'Весь спектр запчастей и аксессуаров',
            img: '/category_auto_1772459952993.png'
        },
        {
            title: 'Техника',
            forWhom: 'Бизнес-решения',
            desc: 'Промышленное и офисное оборудование',
            img: '/category_tech_1772459982373.png'
        },
        {
            title: 'Бизнес',
            forWhom: 'Предприниматели',
            desc: 'Всё для коммерческой деятельности',
            img: '/category_business_supply_v2_1772464118849.png'
        },
        {
            title: 'Дом',
            forWhom: 'Быт и уют',
            desc: 'Товары для интерьера и быта',
            img: '/category_home_1772459996707.png'
        },
        {
            title: 'Сервис',
            forWhom: 'Бытовые услуги',
            desc: 'Ремонт и обслуживание в одном месте',
            img: '/category_service_1772460173357.png'
        }
    ] : [
        {
            title: 'Health',
            forWhom: 'Rehabilitation',
            desc: 'Professional recovery center',
            img: '/rehab_interior_v2_1772460250804.png',
            isSpecial: true
        },
        {
            title: 'Auto Goods',
            forWhom: 'Car owners',
            desc: 'Full range of spare parts and accessories',
            img: '/category_auto_1772459952993.png'
        },
        {
            title: 'Technology',
            forWhom: 'Business solutions',
            desc: 'Industrial and office equipment',
            img: '/category_tech_1772459982373.png'
        },
        {
            title: 'Business',
            forWhom: 'Entrepreneurs',
            desc: 'Everything for commercial activities',
            img: '/category_business_supply_v2_1772464118849.png'
        },
        {
            title: 'Home',
            forWhom: 'Comfort & Life',
            desc: 'Interior and everyday goods',
            img: '/category_home_1772459996707.png'
        },
        {
            title: 'Service',
            forWhom: 'Household services',
            desc: 'Repair and maintenance in one place',
            img: '/category_service_1772460173357.png'
        }
    ];

    return (
        <section className={styles.section} id="directions">
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.headerLeft}>
                        <h2 className={styles.title}>
                            {language === 'ru' ? (
                                <>Магазины и сервисы <br /> для <span className={styles.accent}>важных задач</span></>
                            ) : (
                                <>Shops and services <br /> for <span className={styles.accent}>important tasks</span></>
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
                        <Link href="/directions" className={styles.viewAll}>
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
                                {dir.isSpecial ? (
                                    <Link href="/rehab" className={styles.btnSpecial}>{language === 'ru' ? 'Подробнее' : 'Learn more'}</Link>
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
