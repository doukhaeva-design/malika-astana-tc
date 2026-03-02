/* 
  Секция для арендаторов (SoftTenantSectionComponent)
  Аккуратный темный (не черный) блок с призывом к действию.
  Анимации:
  - Плавное появление (fade-in).
  - Эффект при наведении на светлую кнопку.
*/

import React from 'react';
import styles from './SoftTenantSectionComponent.module.css';

export default function SoftTenantSectionComponent() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={`${styles.box} animate-slide`}>
                    <div className={styles.content}>
                        <h2 className={styles.title}>Ищете площадку для бизнеса?</h2>
                        <p className={styles.text}>
                            MALIKA предлагает торговые и складские помещения в активной торговой зоне Астаны.
                            Компактная структура и стабильный поток посетителей создают условия для устойчивой работы.
                            Мы открыты к сотрудничеству с предпринимателями, заинтересованными в долгосрочном развитии.
                        </p>
                        <button className={styles.btn}>Узнать условия аренды</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
