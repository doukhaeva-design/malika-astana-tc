/* 
  Главный баннер (HeroSectionComponent)
  Modern Commercial Look: Четкая типографика, плотные цвета и акцент на практичность.
*/

import React from 'react';
import Link from 'next/link';
import styles from './HeroSectionComponent.module.css';

export default function HeroSectionComponent() {
    return (
        <section className={styles.hero}>
            <div className={styles.bgText}>MALIKA</div>
            <div className={styles.container}>
                <div className={styles.layout}>
                    <div className={`${styles.content} animate-fade`}>
                        <span className={styles.tagline}>Пространство в ритме Астаны</span>
                        <h1 className={styles.title}>
                            MALIKA — <br /> время в <br /><span className={styles.accent}>вашем ритме</span>
                        </h1>
                        <p className={styles.description}>
                            Компактная структура, понятная навигация и широкий выбор товаров для дома, бизнеса и авто.
                        </p>
                        <div className={styles.actions}>
                            <Link href="/directions" className={styles.btnPrimary}>
                                Направления
                            </Link>
                            <Link href="/contacts" className={styles.btnSecondary}>
                                Как добраться
                            </Link>
                        </div>
                    </div>

                    <div className={styles.visuals}>
                        <div className={`${styles.imageMain} animate-fade stagger-1`}>
                            <img src="/pinterest_hero_1_1772463234531.png" alt="Mall interior" />
                        </div>
                        <div className={`${styles.imageOffset} animate-fade stagger-2`}>
                            <img src="/pinterest_hero_2_1772463249311.png" alt="Customer lifestyle" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.scrollDown}>
                <div className={styles.mouse}></div>
                <span>Листайте ниже</span>
            </div>
        </section>
    );
}
