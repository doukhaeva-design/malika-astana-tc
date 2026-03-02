/* 
  Подвал сайта (FooterComponent)
  Показывает краткую информацию о центре и основные ссылки.
  Пользователь может найти контактные данные или перейти в нужный раздел.
*/

import React from 'react';
import Link from 'next/link';
import styles from './FooterComponent.module.css';

export default function FooterComponent() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.info}>
                    <p className={styles.logo}>MALIKA</p>
                    <p>Торговый центр в Астане</p>
                </div>
                <div className={styles.contacts}>
                    <p>Адрес: г. Астана, район Орда Базар</p>
                    <p>Телефон: +7 (XXX) XXX-XX-XX</p>
                    <p>График работы: Ежедневно, 09:00 — 21:00</p>
                </div>
                <div className={styles.links}>
                    <p className={styles.footerLabel}>Навигация</p>
                    <Link href="/directions" className={styles.footerLink}>Магазины и сервисы</Link>
                    <Link href="/rehab" className={styles.footerLink}>Реабилитационный центр</Link>
                    <Link href="/rent" className={styles.footerLink}>Арендаторам</Link>
                    <Link href="/contacts" className={styles.footerLink}>Контакты</Link>
                </div>
                <div className={styles.copyright}>
                    <p>&copy; 2024 MALIKA. Все права защищены.</p>
                </div>
            </div>
        </footer>
    );
}
