"use client";

import React, { useState } from 'react';
import styles from './RentApplicationForm.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function RentApplicationForm() {
    const { t, language } = useLanguage();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // В реальном проекте здесь будет отправка на API
        // Имитируем задержку отправки для реалистичности
        setTimeout(() => {
            setIsSubmitted(true);
        }, 600);
    };

    return (
        <section className={styles.section} id="rent-form">
            <div className={styles.container}>
                <div className={`${styles.box} animate-fade`}>
                    {!isSubmitted ? (
                        <>
                            <div className={styles.header}>
                                <h2 className={styles.title}>{t.rentPage.formTitle}</h2>
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
                        </>
                    ) : (
                        <div className={styles.successContainer}>
                            <h2 className={styles.successTitle}>
                                {language === 'ru' ? 'Заявка принята!' : 'Application received!'}
                            </h2>
                            <p className={styles.successText}>
                                {language === 'ru'
                                    ? 'Спасибо за интерес к ТЦ MALIKA. Мы свяжемся с вами в ближайшее время для уточнения деталей.'
                                    : 'Thank you for your interest in MALIKA TC. We will contact you shortly to discuss details.'}
                            </p>
                            <button
                                className={styles.submitBtn}
                                onClick={() => setIsSubmitted(false)}
                            >
                                {language === 'ru' ? 'Вернуться' : 'Back'}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
