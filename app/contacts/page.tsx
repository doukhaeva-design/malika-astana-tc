"use client";

/* 
  Страница "Контакты" (Contacts)
  Полная информация о способах связи и местонахождении.
  Пользователь может быстро найти нужные данные для связи с администрацией.
*/

import React from 'react';
import HeaderComponent from '@/components/Shared/HeaderComponent';
import PageHeaderComponent from '@/components/Shared/PageHeaderComponent';
import ContactInfoSectionComponent from '@/components/Contacts/ContactInfoSectionComponent';
import MapSectionComponent from '@/components/Contacts/MapSectionComponent';
import FooterComponent from '@/components/Shared/FooterComponent';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function ContactsPage() {
    const { language } = useLanguage();

    return (
        <main>
            <HeaderComponent />
            <MapSectionComponent />
            <PageHeaderComponent
                title={language === 'ru' ? "Контакты" : "Contacts"}
                description={language === 'ru'
                    ? "Свяжитесь с нами удобным для вас способом. Мы всегда рады ответить на ваши вопросы."
                    : "Contact us in a way that is convenient for you. We are always happy to answer your questions."}
            />
            <ContactInfoSectionComponent />
            <FooterComponent />
        </main>
    );
}
