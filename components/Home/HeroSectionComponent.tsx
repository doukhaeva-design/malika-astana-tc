/* 
  Главный баннер (HeroSectionComponent)
  Pinterest-style: Асимметричная верстка, наложение изображений и крупная типографика.
*/

import React from 'react';
import Link from 'next/link';
import styles from './HeroSectionComponent.module.css';

export default function HeroSectionComponent() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.layout}>
                    <div className={`${styles.content} animate-fade`}>
                        <span className={styles.tagline}>Светлое пространство в Астане</span>
                        <h1 className={styles.title}>
                            MALIKA: Место, где <span className={styles.accent}>уютно</span> решать дела
                        </h1>
                        <p className={styles.description}>
                            Мы объединили практичность торгового комплекса с атмосферой современного городского пространства.
                            Заезжайте за покупками или просто на чашку кофе.
                        </p>
                        <div className={styles.actions}>
                            <Link href="/directions" className={styles.btnPrimary}>
                                Исследовать центр
                            </Link>
                            <Link href="/contacts" className={styles.btnSecondary}>
                                Как добраться
                            </Link>
                        </div>
                    </div>

                    <div className={styles.visuals}>
                        <div className={`${styles.imageMain} animate-fade stagger-1`}>
                            <img src="/pinterest_hero_1_1772463234531.png" alt="Mall atmosphere" />
                        </div>
                        <div className={`${styles.imageOffset} animate-fade stagger-2`}>
                            <img src="/pinterest_hero_2_1772463249311.png" alt="Shopping lifestyle" />
                        </div>
                        <div className={styles.blob}></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
