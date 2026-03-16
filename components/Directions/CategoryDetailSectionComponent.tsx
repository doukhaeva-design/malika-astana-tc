/*
  Секция категорий (CategoryDetailSectionComponent)
  Горизонтальные карточки с метками категорий и тегами.
*/

"use client";

import React from 'react';
import Link from 'next/link';
import styles from './CategoryDetailSectionComponent.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function CategoryDetailSectionComponent() {
    const { language, t } = useLanguage();

    const categories = [
        {
            id: 'auto',
            badge: language === 'ru' ? 'Категория' : 'Category',
            title: t.directions.categories[0].title,
            desc: t.directions.categories[0].desc,
            img: '/category_auto_1772459952993.png',
            items: language === 'ru' ? ['Запчасти', 'Шины и диски', 'Масла', 'Аксессуары'] : ['Parts', 'Tires', 'Oils', 'Accessories']
        },
        {
            id: 'tech',
            badge: language === 'ru' ? 'Категория' : 'Category',
            title: t.directions.categories[1].title,
            desc: t.directions.categories[1].desc,
            img: '/category_tech_1772459982373.png',
            items: language === 'ru' ? ['Оргтехника', 'Инструменты', 'Станки'] : ['Office tech', 'Tools', 'Machinery']
        },
        {
            id: 'home',
            badge: language === 'ru' ? 'Категория' : 'Category',
            title: t.directions.categories[2].title,
            desc: t.directions.categories[2].desc,
            img: '/category_home_1772459996707.png',
            items: language === 'ru' ? ['Мебель', 'Декор', 'Текстиль', 'Хозтовары'] : ['Furniture', 'Decor', 'Textiles', 'Household']
        },
        {
            id: 'service',
            badge: language === 'ru' ? 'Категория' : 'Category',
            title: t.directions.categories[3].title,
            desc: t.directions.categories[3].desc,
            img: '/category_service_1772460173357.png',
            items: language === 'ru' ? ['Ремонт', 'Обслуживание', 'Бытовые услуги'] : ['Repair', 'Maintenance', 'Services']
        },
        {
            id: 'rehab',
            badge: language === 'ru' ? 'Медицина' : 'Medicine',
            title: t.directions.categories[4].title,
            desc: t.directions.categories[4].desc,
            img: '/rehab_interior_v2_1772460250804.png',
            items: language === 'ru' ? ['Массаж', 'ЛФК', 'Консультации'] : ['Massage', 'Exercises', 'Consultations']
        }
    ];

    return (
        <section className={styles.section} id="catalog-grid">
            <div className={styles.container}>
                <div className={`${styles.header} animate-fade`}>
                    <span className={styles.headerSubtitle}>
                        {language === 'ru' ? 'Каталог' : 'Catalog'}
                    </span>
                    <h1 className={styles.headerTitle}>
                        {t.directionsPage.heroTitle}
                    </h1>
                    <p className={styles.headerDesc}>
                        {t.directionsPage.heroDesc}
                    </p>
                </div>
                <div className={styles.grid}>
                    {categories.map((cat, index) => (
                        <div
                            key={cat.id}
                            className={`${styles.card} animate-fade stagger-${(index % 4) + 1}`}
                        >
                            <div className={styles.imageSide}>
                                <img src={cat.img} alt={cat.title} className={styles.image} />
                            </div>
                            <div className={styles.contentSide}>
                                <span className={styles.badge}>{cat.badge}</span>
                                <h3 className={styles.cardTitle}>{cat.title}</h3>
                                <p className={styles.cardDesc}>{cat.desc}</p>
                                <div className={styles.itemsList}>
                                    {cat.items.map((item, idx) => (
                                        <React.Fragment key={idx}>
                                            {idx > 0 && <span className={styles.itemDot}>·</span>}
                                            <span className={styles.itemTag}>{item}</span>
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={`${styles.infoBlock} animate-fade`}>
                    <h3 className={styles.infoTitle}>
                        {language === 'ru' ? 'Не нашли нужный сервис?' : 'Looking for a specific service?'}
                    </h3>
                    <p className={styles.infoText}>
                        {language === 'ru'
                            ? 'Магазины и сервисы работают ежедневно. Администрация всегда готова помочь найти нужный товар или услугу.'
                            : 'Stores and services are open daily. Our team is always ready to help you find what you need.'}
                    </p>
                    <div className={styles.infoActions}>
                        <Link href="/contacts" className={styles.infoBtn}>
                            {language === 'ru' ? 'Контакты' : 'Contacts'}
                        </Link>
                        <a href="tel:+77003053536" className={styles.callBtn}>
                            {language === 'ru' ? 'Позвонить' : 'Call Now'}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
