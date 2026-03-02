/* 
  Главный баннер (HeroSectionComponent)
  Показывает заголовок H1 и основные преимущества на фоне светлого холла.
  Анимации:
  - Плавное появление (fade-in) текста при загрузке.
  - Микро-анимация при наведении на кнопки.
  - Фоновый слой, имитирующий динамику пространства.
*/

import React from 'react';
import styles from './HeroSectionComponent.module.css';

export default function HeroSectionComponent() {
    return (
        <section className={styles.hero}>
            {/* Background layer */}
            <div className={styles.bgWrapper}>
                <div className={styles.bgOverlay}></div>
                {/* We use an image as a placeholder for the video aspect */}
                <img
                    src="/hero_bg_1772459922450.png"
                    alt="Malika Shopping Center Interior"
                    className={styles.bgImage}
                />
            </div>

            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={`${styles.title} animate-fade`}>
                        Торговый центр MALIKA в Астане
                    </h1>
                    <p className={`${styles.subtitle} animate-fade stagger-1`}>
                        Практичное пространство для покупок, бизнеса и повседневных решений.
                    </p>
                    <p className={`${styles.description} animate-fade stagger-2`}>
                        MALIKA — это компактный торговый комплекс, где представлены востребованные товары и услуги для ежедневных задач.
                        Удобное расположение и понятная структура делают визит быстрым и комфортным.
                    </p>
                    <div className={`${styles.actions} animate-fade stagger-3`}>
                        <button className={styles.btnPrimary}>Смотреть направления</button>
                        <button className={styles.btnSecondary}>Как добраться</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
