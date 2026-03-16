"use client";

/* 
  Страница "Контакты" (Contacts)
  Полная информация о способах связи и местонахождении.
  
  1. Карта
  2. Заголовок (Hero)
  3. Контактная информация (Адрес, Телефон, Часы работы)
*/

import React from 'react';
import MapSectionComponent from '@/components/Contacts/MapSectionComponent';
import ContactsHeroComponent from '@/components/Contacts/ContactsHeroComponent';
import ContactInfoSectionComponent from '@/components/Contacts/ContactInfoSectionComponent';
import FooterComponent from '@/components/Shared/FooterComponent';

export default function ContactsPage() {
    return (
        <main>
            <MapSectionComponent />
            <ContactsHeroComponent />
            <ContactInfoSectionComponent />
            <FooterComponent />
        </main>
    );
}
