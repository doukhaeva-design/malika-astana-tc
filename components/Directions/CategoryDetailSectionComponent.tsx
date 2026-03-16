/* 
  Секция категорий (CategoryDetailSectionComponent)
  - Горизонтальные карточки (Listing style) для отличия от главной.
  - 2 колонки для более глубокого погружения.
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
            title: t.directions.categories[0].title,
            desc: t.directions.categories[0].desc,
            img: '/category_auto_1772459952993.png',
            items: language === 'ru' ? ['ЗАПЧАСТИ', 'ШИНЫ И ДИСКИ', 'МАСЛА', 'АКСЕССУАРЫ'] : ['PARTS', 'TIRES', 'OILS', 'ACCESSORIES']
        },
        {
            id: 'tech',
            title: t.directions.categories[1].title,
            desc: t.directions.categories[1].desc,
            img: '/category_tech_1772459982373.png',
            items: language === 'ru' ? ['ОРГТЕХНИКА', 'ИНСТРУМЕНТЫ', 'СТАНКИ'] : ['OFFICE TECH', 'TOOLS', 'MACHINERY']
        },
        {
            id: 'home',
            title: t.directions.categories[2].title,
            desc: t.directions.categories[2].desc,
            img: '/category_home_1772459996707.png',
            items: language === 'ru' ? ['МЕБЕЛЬ', 'ДЕКОР', 'ТЕКСТИЛЬ', 'ХОЗТОВАРЫ'] : ['FURNITURE', 'DECOR', 'TEXTILES', 'HOUSEHOLD']
        },
        {
            id: 'service',
            title: t.directions.categories[3].title,
            desc: t.directions.categories[3].desc,
            img: '/category_service_1772460173357.png',
            items: language === 'ru' ? ['РЕМОНТ', 'ОБСЛУЖИВАНИЕ', 'БЫТОВЫЕ УСЛУГИ'] : ['REPAIR', 'MAINTENANCE', 'SERVICES']
        },
        {
            id: 'rehab',
            title: t.directions.categories[4].title,
            desc: t.directions.categories[4].desc,
            img: '/rehab_interior_v2_1772460250804.png',
            items: language === 'ru' ? ['МАССАЖ', 'ЛФК', 'КОНСУЛЬТАЦИИ'] : ['MASSAGE', 'EXERCISES', 'CONSULTATIONS']
        }
    ];

    return (
        <section className={styles.section} id="catalog-grid">
            <div className={styles.container}>
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
                                <div className={styles.cardHeader}>
                                    <h3 className={styles.cardTitle}>{cat.title}</h3>
                                </div>
                                <p className={styles.cardDesc}>{cat.desc}</p>
                                <div className={styles.itemsList}>
                                    {cat.items.map((item, idx) => (
                                        <span key={idx} className={styles.itemTag}>{item}</span>
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
                            ? 'Магазины и сервисы работают для вас ежедневно. Наша администрация всегда готова помочь вам найти нужный товар или услугу.'
                            : 'Stores and services are open for you daily. Our administration is always ready to help you find a specific product or service.'}
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
