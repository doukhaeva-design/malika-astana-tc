/* 
  Секция для предпринимателей (SoftTenantSectionComponent)
  Вдохновлено блоком 'À la une' с ярким акцентом.
*/

import React from 'react';
import Link from 'next/link';
import styles from './SoftTenantSectionComponent.module.css';

export default function SoftTenantSectionComponent() {
    return (
        <section className={styles.section} id="partnership">
            <div className={styles.container}>
                <div className={`${styles.mainBox} animate-fade`}>
                    <div className={styles.content}>
                        <h3 className={styles.badge}>Партнерство</h3>
                        <h2 className={styles.title}>Ваш бизнес в <span className={styles.highlight}>Malika</span></h2>
                        <p className={styles.text}>
                            Станьте частью бизнес-сообщества MALIKA. Современные площади, стабильный трафик и выгодные локации для вашего роста.
                        </p>

                        <div className={styles.footer}>
                            <Link href="/rent" className={styles.actionBtn}>СТАТЬ АРЕНДАТОРОМ</Link>
                        </div>
                    </div>

                    <div className={styles.visualCard}>
                        <img src="/pinterest_hero_1_1772463234531.png" alt="Business Space" className={styles.image} />
                        <div className={styles.imageOverlay}></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
