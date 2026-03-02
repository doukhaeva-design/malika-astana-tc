/* 
  Форма обратной связи (FormComponent)
  Позволяет пользователю оставить заявку на аренду или другой вопрос.
  Пользователь может отправить свои контактные данные для обратной связи.
*/

import React from 'react';
import styles from './FormComponent.module.css';

export default function FormComponent() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Оставьте заявку</h2>
                <form className={styles.form}>
                    <div className={styles.field}>
                        <label htmlFor="name">Имя</label>
                        <input type="text" id="name" placeholder="Ваше имя" />
                    </div>
                    <div className={styles.field}>
                        <label htmlFor="phone">Телефон</label>
                        <input type="tel" id="phone" placeholder="+7 (___) ___-__-__" />
                    </div>
                    <div className={styles.field}>
                        <label htmlFor="businessType">Тип бизнеса</label>
                        <input type="text" id="businessType" placeholder="Чем вы занимаетесь?" />
                    </div>
                    <div className={styles.field}>
                        <label htmlFor="comment">Комментарий</label>
                        <textarea id="comment" placeholder="Дополнительная информация..."></textarea>
                    </div>
                    <button type="submit" className={styles.btn}>Отправить заявку</button>
                </form>
                <p className={styles.note}>
                    Мы свяжемся с вами для уточнения деталей и обсуждения условий.
                </p>
            </div>
        </section>
    );
}
