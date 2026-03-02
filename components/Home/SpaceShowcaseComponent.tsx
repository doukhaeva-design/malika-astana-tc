/* 
  Секция пространства (SpaceShowcaseComponent)
  'Wow' Effect: Полноэкранный иммерсивный блок с параллакс-ощущением и крупным заголовком.
*/

import React from 'react';
import styles from './SpaceShowcaseComponent.module.css';

export default function SpaceShowcaseComponent() {
    return (
        <section className={styles.section}>
            <div className={styles.bgWrapper}>
                <img
                    src="/space_showcase_1772459938757.png"
                    alt="Malika Interior"
                    className={styles.bgImage}
                />
                <div className={styles.overlay}></div>
            </div>

            <div className={styles.container}>
                <div className={styles.content}>
                    <span className={styles.badge}>Пространство и свет</span>
                    <h2 className={styles.title}>Архитектура <br /> вашего ритма</h2>
                    <p className={styles.text}>
                        Широкие галереи и естественный свет создают пространство,
                        в котором комфортно решать дела любой сложности.
                    </p>
                    <div className={styles.stats}>
                        <div className={styles.statItem}>
                            <span className={styles.num}>150+</span>
                            <span className={styles.label}>Торговых точек</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.num}>2500м²</span>
                            <span className={styles.label}>Площадь центра</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
