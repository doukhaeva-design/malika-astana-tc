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
                    <p className={styles.logo}>Malika</p>
                    <p className={styles.tagline}>Профессиональное пространство <br /> для вашего бизнеса и здоровья.</p>
                    <div className={styles.socials}>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </a>
                        <a href="mailto:akasalym.renta@gmail.com" className={styles.socialIcon} aria-label="Email">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        </a>
                        <a href="http://www.aka-salym.kz" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Website">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                        </a>
                    </div>
                </div>

                <div className={styles.contacts}>
                    <p className={styles.footerLabel}>Контакты</p>
                    <div className={styles.contactItem}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.icon}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        <span>Астана, Байконыр, проезд 69, 1А</span>
                    </div>
                    <div className={styles.contactItem}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.icon}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        <span>+7 (705) 555-76-09</span>
                    </div>
                    <div className={styles.contactItem}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.icon}><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                        <span>Ежедневно 09:00 — 18:00</span>
                    </div>
                </div>

                <div className={styles.links}>
                    <p className={styles.footerLabel}>Навигация</p>
                    <Link href="/directions" className={styles.footerLink}>Магазины и сервисы</Link>
                    <Link href="/rehab" className={styles.footerLink}>Реабилитационный центр</Link>
                    <Link href="/rent" className={styles.footerLink}>Арендаторам</Link>
                    <Link href="/contacts" className={styles.footerLink}>Контакты</Link>
                </div>

                <div className={styles.copyright}>
                    <p>&copy; {new Date().getFullYear()} ТЦ «Malika». Все права защищены.</p>
                    <div className={styles.legal}>
                        <span>Политика конфиденциальности</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
