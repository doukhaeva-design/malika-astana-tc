/* 
  Форма заявки (RentApplicationForm)
  Простая форма для связи с отделом аренды.
*/

"use client";

import React from 'react';
import styles from './RentApplicationForm.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function RentApplicationForm() {
    const { t, language } = useLanguage();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // В реальном проекте здесь будет отправка на API
        alert(language === 'ru' ? 'Спасибо! Ваша заявка отправлена.' : 'Thank you! Your application has been sent.');
    };

    return (
        <section className={styles.section} id="rent-form">
            <div className={styles.container}>
                <div className={`${styles.box} animate-fade`}>
                    <div className={styles.header}>
                        <h2 className={styles.title}>{t.rentHero.btnCTA}</h2>
                        <p className={styles.desc}>{t.rentPage.formDesc}</p>
                    </div>

                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.row}>
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>{language === 'ru' ? 'Ваше имя' : 'Your name'}</label>
                                <input type="text" className={styles.input} required placeholder={language === 'ru' ? 'Иван Иванов' : 'John Doe'} />
                            </div>
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>{language === 'ru' ? 'Телефон' : 'Phone'}</label>
                                <input type="tel" className={styles.input} required placeholder="+7 (___) ___-__-__" />
                            </div>
                        </div>

                        <div className={styles.inputGroup}>
                            <label className={styles.label}>{language === 'ru' ? 'Тип бизнеса' : 'Business type'}</label>
                            <input type="text" className={styles.input} placeholder={language === 'ru' ? 'Например: магазин одежды' : 'e.g. Clothing store'} />
                        </div>

                        <div className={styles.inputGroup}>
                            <label className={styles.label}>{language === 'ru' ? 'Сообщение' : 'Message'}</label>
                            <textarea className={styles.textarea} placeholder={language === 'ru' ? 'Расскажите подробнее о ваших пожеланиях' : 'Tell us more about your requirements'}></textarea>
                        </div>

                        <button type="submit" className={styles.submitBtn}>
                            {t.rentHero.btnCTA}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
