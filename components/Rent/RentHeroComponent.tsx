/* 
  Баннер раздела аренды (RentHeroComponent)
  Показывает заголовок и краткий призыв к действию для потенциальных арендаторов.
  Пользователь может сразу увидеть предложение по коммерческим помещениям.
*/

import React from 'react';
import styles from './RentHeroComponent.module.css';

export default function RentHeroComponent() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <h1 className={styles.title}>Аренда коммерческих помещений</h1>
                <p className={styles.subtitle}>Удобная площадка для стабильной работы и развития бизнеса.</p>
                <p className={styles.description}>
                    Торговый центр MALIKA расположен в активной торговой зоне и предлагает помещения различного формата.
                </p>
                <div className={styles.actions}>
                    <a href="#apply" className={styles.btn}>Оставить заявку</a>
                    <a href="tel:+77777777777" className={styles.btnOutline}>Позвонить</a>
                </div>
            </div>
        </section>
    );
}
