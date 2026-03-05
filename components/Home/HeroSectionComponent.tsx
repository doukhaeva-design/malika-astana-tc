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
            <div className={styles.bgText}>Malika</div>
            <div className={styles.container}>
                <div className={styles.layout}>
                    <div className={`${styles.content} animate-fade`}>
                        <div className={styles.taglineWrapper}>
                            <span className={styles.statusDot}></span>
                            <span className={styles.tagline}>Добро пожаловать<span className={styles.taglineMobileOnly}> в <span className={styles.boldMalika}>malika</span></span></span>
                        </div>
                        <h1 className={styles.title}>
                            <span className={styles.titleLight}>Ваш</span> торговый центр <br />
                            в <span className={styles.accent}>Астане</span>
                        </h1>
                        <p className={styles.description}>
                            Широкий выбор товаров для дома, бизнеса и авто. <strong className={styles.boldText}>Всё необходимое — рядом и без лишней суеты.</strong>
                        </p>
                        <div className={styles.actions}>
                            <Link href="/contacts" className={styles.btnPrimary}>
                                Как добраться
                            </Link>
                            <Link href="/directions" className={styles.btnSecondary}>
                                Магазины и услуги
                            </Link>
                        </div>
                    </div>

                    <div className={styles.visuals}>
                        <div className={`${styles.imageMain} animate-fade stagger-1`}>
                            <img src="/malika-facade-new.jpg" alt="Фасад MALIKA Астана" />
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
