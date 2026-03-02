/* 
  Секция направлений (ForEverydayNeedsSectionComponent)
  'Wow' Commercial: Крупная типографика и сетка с акцентами.
*/

import React from 'react';
import Link from 'next/link';
import styles from './ForEverydayNeedsSectionComponent.module.css';

export default function ForEverydayNeedsSectionComponent() {
    const directions = [
        {
            title: 'Автотовары',
            forWhom: 'владельцы авто',
            desc: 'Всё для эксплуатации и обслуживания автомобилей.',
            img: '/category_auto_1772459952993.png',
            color: '#f8f8f8'
        },
        {
            title: 'Техника',
            forWhom: 'бизнес-решения',
            desc: 'Оборудование для эффективного бизнеса.',
            img: '/category_tech_1772459982373.png',
            color: '#eff6ff'
        },
        {
            title: 'Дом',
            forWhom: 'быт и комфорт',
            desc: 'Практичные товары для вашего дома.',
            img: '/category_home_1772459996707.png',
            color: '#ecfdf5'
        },
        {
            title: 'Бизнес',
            forWhom: 'предприниматели',
            desc: 'Продукция для коммерческой деятельности.',
            img: '/category_business_supply_v2_1772464118849.png',
            color: '#fff7ed'
        },
        {
            title: 'Сервис',
            desc: 'Ремонт и бытовые услуги в одном месте.',
            img: '/category_service_1772460173357.png',
            color: '#f5f5f4'
        },
        {
            title: 'Здоровье',
            desc: 'Реабилитационный центр на территории.',
            img: '/rehab_interior_v2_1772460250804.png',
            color: '#f1f5f9',
            hasAction: true
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Направления <br /> для <span className={styles.accent}>важных задач</span></h2>
                    <p className={styles.subtitle}>Всё для дома, авто и бизнеса. Находите нужное без лишнего поиска.</p>
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
