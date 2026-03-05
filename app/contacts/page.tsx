"use client";

/* 
  Страница "Контакты" (Contacts)
  Полная информация о способах связи и местонахождении.
  Пользователь может быстро найти нужные данные для связи с администрацией.
*/

import React from 'react';
import HeaderComponent from '@/components/Shared/HeaderComponent';
import ContactsHeroComponent from '@/components/Contacts/ContactsHeroComponent';
import ContactInfoSectionComponent from '@/components/Contacts/ContactInfoSectionComponent';
import MapSectionComponent from '@/components/Contacts/MapSectionComponent';
import FooterComponent from '@/components/Shared/FooterComponent';

export default function ContactsPage() {
    return (
        <main>
            <HeaderComponent />
            <MapSectionComponent />
            <ContactsHeroComponent />
            <ContactInfoSectionComponent />
            <FooterComponent />
        </main>
    );
}
