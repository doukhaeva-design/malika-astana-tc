/* 
  Баннер раздела реабилитации (RehabHeroComponent)
  Показывает заголовок и краткое описание услуг по восстановлению здоровья.
  Пользователь может сразу понять специализацию центра.
*/

import React from 'react';
import styles from './RehabHeroComponent.module.css';

export default function RehabHeroComponent() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <h1 className={styles.title}>Реабилитационный центр</h1>
                <p className={styles.subtitle}>
                    На территории торгового центра функционирует центр реабилитации,
                    предлагающий профессиональные услуги по восстановлению и поддержанию здоровья.
                </p>
            </div>
        </section>
    );
}
