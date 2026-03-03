/* 
  Секция контактной информации (ContactInfoSectionComponent)
  Показывает детальные способы связи с торговым центром.
  Пользователь может найти телефон, почту и точный адрес для связи.
*/

import React from 'react';
import styles from './ContactInfoSectionComponent.module.css';

export default function ContactInfoSectionComponent() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.infoGrid}>
                    <div className={styles.infoCard}>
                        <h3>Адрес</h3>
                        <p>г. Астана, район Орда Базар</p>
                        <p>вдоль Шоссе Алаш</p>
                    </div>
                    <div className={styles.infoCard}>
                        <h3>Телефон</h3>
                        <p>+7 (XXX) XXX-XX-XX</p>
                        <p>+7 (XXX) XXX-XX-XX</p>
                    </div>
                    <div className={styles.infoCard}>
                        <h3>Email</h3>
                        <p>info@malika-center.kz</p>
                        <p>rent@malika-center.kz</p>
                    </div>
                    <div className={styles.infoCard}>
                        <h3>График работы</h3>
                        <p>Ежедневно</p>
                        <p>09:00 — 18:00</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
