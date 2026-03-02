/* 
  Секция направлений (ForEverydayNeedsSectionComponent)
  Показывает расширенный список категорий товаров и услуг.
  Карточки с фоновыми изображениями, градиентом и плавными эффектами.
*/

import React from 'react';
import styles from './ForEverydayNeedsSectionComponent.module.css';

export default function ForEverydayNeedsSectionComponent() {
    const directions = [
        {
            title: 'Автотовары и обслуживание',
            forWhom: 'владельцы автомобилей и автосервисов',
            desc: 'Товары и комплектующие для повседневной эксплуатации и обслуживания автомобилей. Всё необходимое без долгих поисков.',
            img: '/category_auto_1772459952993.png',
            tags: ['запчасти', 'расходные материалы', 'сопутствующие товары']
        },
        {
            title: 'Оборудование и технические решения',
            forWhom: 'предприниматели и частные специалисты',
            desc: 'Специализированные технические решения для бизнеса и частных задач. Практичные товары, востребованные в работе.',
            img: '/category_tech_1772459982373.png'
        },
        {
            title: 'Товары для дома',
            forWhom: 'повседневные покупки',
            desc: 'Практичные товары для поддержания порядка и комфорта дома. Всё необходимое для бытовых задач в одном месте.',
            img: '/category_home_1772459996707.png'
        },
        {
            title: 'Товары для бизнеса',
            forWhom: 'малый и средний бизнес',
            desc: 'Продукция и решения для коммерческой деятельности. Удобно для быстрого решения рабочих задач предпринимателей.',
            img: '/category_business_supply_1772462378450.png'
        },
        {
            title: 'Сервисные услуги',
            desc: 'Профессиональные услуги на территории комплекса. Совмещайте покупки и решение других задач за один визит.',
            img: '/category_service_1772460173357.png'
        },
        {
            title: 'Реабилитационный центр',
            desc: 'Профессиональные услуги восстановления здоровья. Специализированное направление нашего комплекса.',
            img: '/rehab_interior_v2_1772460250804.png',
            hasAction: true
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={`${styles.title} animate-fade`}>Что можно найти в MALIKA</h2>
                    <p className={`${styles.subtitle} animate-fade stagger-1`}>
                        Товары и услуги для повседневных задач, бизнеса и технических решений.
                    </p>
                </div>
                <div className={styles.grid}>
                    {directions.map((dir, index) => (
                        <div
                            key={index}
                            className={`${styles.card} animate-slide stagger-${index + 1}`}
                        >
                            <div className={styles.imageOverlay}></div>
                            <img src={dir.img} alt={dir.title} className={styles.cardImage} />
                            <div className={styles.content}>
                                {dir.forWhom && <span className={styles.forWhom}>{dir.forWhom}</span>}
                                <h3 className={styles.cardTitle}>{dir.title}</h3>
                                <p className={styles.cardText}>{dir.desc}</p>
                                {dir.tags && (
                                    <div className={styles.tags}>
                                        {dir.tags.map(tag => <span key={tag} className={styles.tag}>{tag}</span>)}
                                    </div>
                                )}
                                {dir.hasAction && (
                                    <button className={styles.cardBtn}>Подробнее о центре</button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
