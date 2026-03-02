/* 
  Секция пространства (SpaceShowcaseComponent)
  Pinterest-style: Большое имиджевое фото с наложением текста и теплым фоном.
*/

import React from 'react';
import styles from './SpaceShowcaseComponent.module.css';

export default function SpaceShowcaseComponent() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={`${styles.imageBox} animate-fade`}>
                        <img
                            src="/space_showcase_1772459938757.png"
                            alt="Malika Interior"
                            className={styles.image}
                        />
                        <div className={styles.overlayText}>
                            <h3>Современная архитектура для жизни</h3>
                        </div>
                    </div>
                    <div className={`${styles.content} animate-fade stagger-1`}>
                        <h2 className={styles.title}>Больше, чем просто шопинг</h2>
                        <p className={styles.text}>
                            Мы создали пространство, где архитектурные линии встречаются с естественным светом.
                            Широкие галереи, зоны отдыха и продуманная эргономика — каждый метр MALIKA создан для вашего комфорта.
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
            </div>
        </section>
    );
}
