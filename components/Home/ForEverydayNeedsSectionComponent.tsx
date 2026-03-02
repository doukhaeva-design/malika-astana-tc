/* 
  Секция направлений (ForEverydayNeedsSectionComponent)
  Pinterest-style Commercial: Плотная сетка, профессиональные категории и четкие карточки.
*/

import React from 'react';
import Link from 'next/link';
import styles from './ForEverydayNeedsSectionComponent.module.css';

export default function ForEverydayNeedsSectionComponent() {
    const directions = [
        {
            title: 'Автотовары',
            forWhom: 'владельцы авто',
            desc: 'Всё для эксплуатации и обслуживания автомобилей. Запчасти и расходные материалы.',
            img: '/category_auto_1772459952993.png',
            color: '#f4f4f5' // Zinc light gray
        },
        {
            title: 'Техника',
            forWhom: 'бизнес-решения',
            desc: 'Оборудование и специализированные технические решения для предпринимателей.',
            img: '/category_tech_1772459982373.png',
            color: '#e0f2fe' // Sky blue
        },
        {
            title: 'Дом',
            forWhom: 'быт и комфорт',
            desc: 'Практичные товары для поддержания порядка и комфорта в вашем доме.',
            img: '/category_home_1772459996707.png',
            color: '#ecfdf5' // Emerald light
        },
        {
            title: 'Бизнес',
            forWhom: 'предприниматели',
            desc: 'Продукция и решения для коммерческой и офисной деятельности.',
            img: '/category_business_supply_v2_1772464118849.png',
            color: '#fff7ed' // Orange soft
        },
        {
            title: 'Сервис',
            desc: 'Профессиональный ремонт и бытовые услуги в одном месте.',
            img: '/category_service_1772460173357.png',
            color: '#f5f5f4' // Stone
        },
        {
            title: 'Здоровье',
            desc: 'Реабилитационный центр с медицинским оборудованием.',
            img: '/rehab_interior_v2_1772460250804.png',
            color: '#f1f5f9', // Slate
            hasAction: true
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Что можно найти в MALIKA</h2>
                    <p className={styles.subtitle}>Пространство, организованное для эффективных решений ваших повседневных задач.</p>
                </div>

                <div className={styles.grid}>
                    {directions.map((dir, index) => (
                        <div
                            key={index}
                            className={`${styles.card} animate-fade stagger-${index + 1}`}
                            style={{ backgroundColor: dir.color }}
                        >
                            <div className={styles.cardContent}>
                                {dir.forWhom && <span className={styles.forWhom}>{dir.forWhom}</span>}
                                <h3 className={styles.cardTitle}>{dir.title}</h3>
                                <p className={styles.cardText}>{dir.desc}</p>
                                {dir.hasAction && (
                                    <Link href="/rehab" className={styles.cardBtn}>
                                        Узнать больше
                                    </Link>
                                )}
                            </div>
                            <div className={styles.imageWrapper}>
                                <img src={dir.img} alt={dir.title} className={styles.cardImage} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
