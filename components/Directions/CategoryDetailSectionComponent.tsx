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

    const categories = language === 'ru' ? [
        {
            id: 'auto',
            title: 'Автотовары',
            desc: 'Крупнейший выбор комплектующих, расходных материалов и аксессуаров для всех марок автомобилей.',
            img: '/category_auto_1772459952993.png',
            items: ['Запчасти', 'Шины и диски', 'Масла', 'Аксессуары']
        },
        {
            id: 'tech',
            title: 'Техника',
            desc: 'Специализированное оборудование и технические решения для офиса и производства.',
            img: '/category_tech_1772459982373.png',
            items: ['Оргтехника', 'Инструменты', 'Станки']
        },
        {
            id: 'home',
            title: 'Товары для дома',
            desc: 'Все необходимое для ремонта, декора и создания уюта в вашем жилом пространстве.',
            img: '/category_home_1772459996707.png',
            items: ['Мебель', 'Декор', 'Текстиль', 'Хозтовары']
        },
        {
            id: 'business',
            title: 'Бизнес',
            desc: 'Расходные материалы, канцелярия и оборудование для коммерческой деятельности.',
            img: '/category_business_supply_v2_1772464118849.png',
            items: ['Канцелярия', 'Торговое оборудование']
        },
        {
            id: 'service',
            title: 'Сервис',
            desc: 'Бытовые и профессиональные услуги по обслуживанию техники и решению повседневных задач.',
            img: '/category_service_1772460173357.png',
            items: ['Ремонт телефонов', 'Чистка', 'Швейный сервис']
        },
        {
            id: 'rehab',
            title: 'Здоровье',
            desc: 'Медицинские и восстановительные услуги в современном реабилитационном центре внутри ТЦ.',
            img: '/rehab_interior_v2_1772460250804.png',
            items: ['Массаж', 'ЛФК', 'Консультации']
        }
    ] : [
        {
            id: 'auto',
            title: 'Auto Goods',
            desc: 'The widest selection of components, consumables, and accessories for all car brands.',
            img: '/category_auto_1772459952993.png',
            items: ['Parts', 'Tires', 'Oils', 'Accessories']
        },
        {
            id: 'tech',
            title: 'Equipment',
            desc: 'Specialized equipment and technical solutions for office and production.',
            img: '/category_tech_1772459982373.png',
            items: ['Office tech', 'Tools', 'Machinery']
        },
        {
            id: 'home',
            title: 'Home Goods',
            desc: 'Everything needed for renovation, decor, and creating comfort in your living space.',
            img: '/category_home_1772459996707.png',
            items: ['Furniture', 'Decor', 'Textiles', 'Household']
        },
        {
            id: 'business',
            title: 'Business',
            desc: 'Consumables, stationery, and equipment for commercial activities.',
            img: '/category_business_supply_v2_1772464118849.png',
            items: ['Stationery', 'Retail equipment']
        },
        {
            id: 'service',
            title: 'Service',
            desc: 'Domestic and professional services for technical maintenance and daily tasks.',
            img: '/category_service_1772460173357.png',
            items: ['Phone repair', 'Cleaning', 'Tailoring']
        },
        {
            id: 'rehab',
            title: 'Health',
            desc: 'Medical and restorative services in a modern rehabilitation center inside center.',
            img: '/rehab_interior_v2_1772460250804.png',
            items: ['Massage', 'Exercises', 'Consultations']
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {categories.map((cat, index) => (
                        <div key={cat.id} className={styles.card}>
                            <div className={styles.imageSide}>
                                <img src={cat.img} alt={cat.title} className={styles.image} />
                            </div>
                            <div className={styles.contentSide}>
                                <div className={styles.header}>
                                    <span className={styles.number}>0{index + 1}</span>
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

                <div className={styles.infoBlock}>
                    <h3 className={styles.infoTitle}>
                        {language === 'ru' ? 'Не нашли нужный сервис?' : 'Looking for a specific service?'}
                    </h3>
                    <p className={styles.infoText}>
                        {language === 'ru'
                            ? 'Свыше 250 бутиков работают для вас ежедневно. Наша администрация поможет найти конкретный магазин или услугу.'
                            : 'Over 250 boutiques are open for you daily. Our administration will help you find a specific store or service.'}
                    </p>
                    <div className={styles.infoActions}>
                        <Link href="/contacts" className={styles.infoBtn}>
                            {language === 'ru' ? 'Контакты' : 'Contacts'}
                        </Link>
                        <a href="tel:+77055557609" className={styles.callBtn}>
                            {language === 'ru' ? 'Позвонить' : 'Call Now'}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
