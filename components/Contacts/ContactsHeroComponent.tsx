/* 
  Секция заголовка контактов (ContactsHeroComponent)
  Центрированный заголовок с акцентным разделителем в стиле каталога.
*/

"use client";

import React from 'react';
import styles from './ContactsHeroComponent.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function ContactsHeroComponent() {
    const { language, t } = useLanguage();

    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                {/* Элемент разделитель сверху */}
                <div className={styles.topDivider}></div>

                <div className={styles.content}>
                    <h1 className={styles.title}>
                        {language === 'ru' ? 'КОНТАКТЫ' : 'CONTACTS'}
                    </h1>

                    <p className={styles.description}>
                        {language === 'ru'
                            ? "Свяжитесь с нами удобным для вас способом. Мы всегда рады ответить на ваши вопросы."
                            : "Contact us in a way that is convenient for you. We are always happy to answer your questions."}
                    </p>
                </div>
            </div>
        </section>
    );
}
