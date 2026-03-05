/* 
  Форма обратной связи (FormComponent)
  Позволяет пользователю оставить заявку на аренду или другой вопрос.
  Пользователь может отправить свои контактные данные для обратной связи.
*/

"use client";

import React from 'react';
import styles from './FormComponent.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function FormComponent() {
    const { language, t } = useLanguage();

    return (
        <section className={styles.section} id="apply">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>{language === 'ru' ? 'Интересует аренда помещения?' : 'Interested in renting a space?'}</h2>
                    <p className={styles.subtitle}>
                        {language === 'ru'
                            ? 'Свяжитесь с командой MALIKA — мы предоставим всю необходимую информацию.'
                            : 'Contact the MALIKA team — we will provide all the necessary information.'}
                    </p>
                </div>

                <div className={styles.formWrapper}>
                    <form className={styles.form}>
                        <div className={styles.field}>
                            <label htmlFor="name">{language === 'ru' ? 'Ваше имя' : 'Your name'}</label>
                            <input type="text" id="name" placeholder={language === 'ru' ? 'Сергей' : 'John'} required />
                        </div>
                        <div className={styles.field}>
                            <label htmlFor="email">
                                Email <span className={styles.labelNote}>{language === 'ru' ? '— обязателен для Email-заявки' : '— required for Email application'}</span>
                            </label>
                            <input type="email" id="email" placeholder="example@mail.com" />
                        </div>
                        <div className={styles.field}>
                            <label htmlFor="phone">
                                {language === 'ru' ? 'Телефон' : 'Phone'} <span className={styles.labelNote}>{language === 'ru' ? '(необязательно)' : '(optional)'}</span>
                            </label>
                            <input type="tel" id="phone" placeholder="+7 (___) ___-__-__" />
                        </div>
                        <div className={styles.field}>
                            <label htmlFor="businessType">{language === 'ru' ? 'Тип бизнеса' : 'Business type'}</label>
                            <input type="text" id="businessType" placeholder={language === 'ru' ? 'Магазин одежды, Кофейня...' : 'Clothing store, coffee shop...'} />
                        </div>
                        <div className={styles.field}>
                            <label htmlFor="comment">{language === 'ru' ? 'Ваше сообщение' : 'Your message'}</label>
                            <textarea id="comment" placeholder={language === 'ru' ? 'Какая площадь вас интересует?' : 'What area are you interested in?'}></textarea>
                        </div>

                        <div className={styles.submitActions}>
                            <a href="mailto:akasalym.renta@gmail.com" className={styles.emailBtn}>
                                <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                {language === 'ru' ? 'Отправить через Email' : 'Send via Email'}
                            </a>
                            <a href="https://wa.me/77055557609" target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
                                <svg className={styles.icon} viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                                {language === 'ru' ? 'Отправить в WhatsApp' : 'Send via WhatsApp'}
                            </a>
                        </div>
                    </form>
                    <p className={styles.note}>
                        {language === 'ru' ? 'Мы свяжемся с вами для уточнения деталей и обсуждения условий.' : 'We will contact you to clarify the details and discuss the conditions.'}
                    </p>
                </div>
            </div>
        </section>
    );
}
