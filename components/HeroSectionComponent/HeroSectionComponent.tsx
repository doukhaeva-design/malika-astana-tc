/* 
  Главный баннер (HeroSectionComponent)
  Показывает заголовок H1 и основные преимущества в кратком виде.
  Пользователь может сразу понять цель проекта и перейти к направлениям или проложить маршрут.
*/

import React from 'react';
import styles from './HeroSectionComponent.module.css';

export default function HeroSectionComponent() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <h1 className={styles.title}>Торговый центр MALIKA в Астане</h1>
                <p className={styles.subtitle}>Практичное пространство для покупок, бизнеса и повседневных решений.</p>
                <p className={styles.description}>
                    MALIKA — это компактный торговый комплекс, где представлены востребованные товары и услуги для ежедневных задач.
                    Удобное расположение и понятная структура делают визит быстрым и комфортным.
                </p>
                <div className={styles.actions}>
                    <button className={styles.btnPrimary}>Смотреть направления</button>
                    <button className={styles.btnSecondary}>Как добраться</button>
                </div>
            </div>
        </section>
    );
}
