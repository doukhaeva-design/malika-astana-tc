/* 
  Шапка сайта (HeaderComponent)
  Показывает логотип, главное меню, кнопку прокладки маршрута и переключатель языка.
  Пользователь может переходить по основным разделам сайта и менять язык.
*/

import React from 'react';
import Link from 'next/link';
import styles from './HeaderComponent.module.css';

export default function HeaderComponent() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    MALIKA
                </Link>

                <nav className={styles.nav}>
                    <Link href="/" className={styles.link}>О центре</Link>
                    <Link href="/directions" className={styles.link}>Направления</Link>
                    <Link href="/rehab" className={styles.link}>Реабилитационный центр</Link>
                    <Link href="/rent" className={styles.link}>Арендаторам</Link>
                    <Link href="/contacts" className={styles.link}>Контакты</Link>
                </nav>

                <div className={styles.actions}>
                    <button className={styles.btnRoute}>Проложить маршрут</button>
                    <div className={styles.langSwitch}>
                        <span className={styles.activeLang}>RU</span> | <span>EN</span>
                    </div>
                </div>
            </div>
        </header>
    );
}
