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
            title: 'АВТОТОВАРЫ',
            desc: 'Крупнейший выбор комплектующих, расходных материалов и аксессуаров для всех марок автомобилей.',
            img: '/category_auto_1772459952993.png',
            items: ['ЗАПЧАСТИ', 'ШИНЫ И ДИСКИ', 'МАСЛА', 'АКСЕССУАРЫ']
        },
        {
            id: 'tech',
            title: 'ТЕХНИКА',
            desc: 'Специализированное оборудование и технические решения для офиса и производства.',
            img: '/category_tech_1772459982373.png',
            items: ['ОРГТЕХНИКА', 'ИНСТРУМЕНТЫ', 'СТАНКИ']
        },
        {
            id: 'home',
            title: 'ТОВАРЫ ДЛЯ ДОМА',
            desc: 'Все необходимое для ремонта, декора и создания уюта в вашем жилом пространстве.',
            img: '/category_home_1772459996707.png',
            items: ['МЕБЕЛЬ', 'ДЕКОР', 'ТЕКСТИЛЬ', 'ХОЗТОВАРЫ']
        },
        {
            id: 'business',
            title: 'БИЗНЕС',
            desc: 'Расходные материалы, канцелярия и оборудование для коммерческой деятельности.',
            img: '/category_business_supply_v2_1772464118849.png',
            items: ['КАНЦЕЛЯРИЯ', 'ТОРГОВОЕ ОБОРУДОВАНИЕ']
        },
        {
            id: 'service',
            title: 'СЕРВИС',
            desc: 'Бытовые и профессиональные услуги по обслуживанию техники и решению повседневных задач.',
            img: '/category_service_1772460173357.png',
            items: ['РЕМОНТ ТЕЛЕФОНОВ', 'ЧИСТКА', 'ШВЕЙНЫЙ СЕРВИС']
        },
        {
            id: 'rehab',
            title: 'ЗДОРОВЬЕ',
            desc: 'Медицинские и восстановительные услуги в современном реабилитационном центре внутри ТЦ.',
            img: '/rehab_interior_v2_1772460250804.png',
            items: ['МАССАЖ', 'ЛФК', 'КОНСУЛЬТАЦИИ']
        }
    ] : [
        {
            id: 'auto',
            title: 'AUTO GOODS',
            desc: 'The widest selection of components, consumables, and accessories for all car brands.',
            img: '/category_auto_1772459952993.png',
            items: ['PARTS', 'TIRES', 'OILS', 'ACCESSORIES']
        },
        {
            id: 'tech',
            title: 'EQUIPMENT',
            desc: 'Specialized equipment and technical solutions for office and production.',
            img: '/category_tech_1772459982373.png',
            items: ['OFFICE TECH', 'TOOLS', 'MACHINERY']
        },
        {
            id: 'home',
            title: 'HOME GOODS',
            desc: 'Everything needed for renovation, decor, and creating comfort in your living space.',
            img: '/category_home_1772459996707.png',
            items: ['FURNITURE', 'DECOR', 'TEXTILES', 'HOUSEHOLD']
        },
        {
            id: 'business',
            title: 'BUSINESS',
            desc: 'Consumables, stationery, and equipment for commercial activities.',
            img: '/category_business_supply_v2_1772464118849.png',
            items: ['STATIONERY', 'RETAIL EQUIPMENT']
        },
        {
            id: 'service',
            title: 'SERVICE',
            desc: 'Domestic and professional services for technical maintenance and daily tasks.',
            img: '/category_service_1772460173357.png',
            items: ['PHONE REPAIR', 'CLEANING', 'TAILORING']
        },
        {
            id: 'rehab',
            title: 'HEALTH',
            desc: 'Medical and restorative services in a modern rehabilitation center inside center.',
            img: '/rehab_interior_v2_1772460250804.png',
            items: ['MASSAGE', 'EXERCISES', 'CONSULTATIONS']
        }
    ];

    return (
        <section className={styles.section} id="catalog-grid">
            <div className={styles.container}>
                <div className={styles.grid}>
                    {categories.map((cat, index) => (
                        <div key={cat.id} className={styles.card}>
                            <div className={styles.imageSide}>
                                <img src={cat.img} alt={cat.title} className={styles.image} />
                            </div>
                            <div className={styles.contentSide}>
                                <div className={styles.cardHeader}>
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
