// lib/i18n/translations.ts

export type Language = 'ru' | 'en';

export const translations = {
    ru: {
        common: {
            address: 'Астана, Шоссе Алаш',
            orientir: 'Ориентир: вдоль Шоссе Алаш',
            hours: 'Ежедневно 09:00 — 18:00',
            route: 'Проложить маршрут',
            home: 'Главная',
            directions: 'Магазины',
            directionsShort: 'Магазины',
            rehab: 'Реабилитация',
            rent: 'Арендаторам',
            contacts: 'Контакты',
            more: 'Ещё',
            company: 'Торговый центр MALIKA',
            footerDesc: 'Торговый центр в Астане',
            footerAddress: 'Астана, район Байконыр, Проезд 69, 1А',
            footerPhone: 'Телефон: +7 (705) 555-76-09',
            footerHours: 'График работы: Ежедневно, 09:00 — 18:00',
            nav: 'Навигация',
            rights: '© 2024 MALIKA. Все права защищены.',
            call: 'Позвонить',
            instagram: 'https://www.instagram.com/malika_astana/',
            whatsapp: 'https://wa.me/77055557609',
        },
        hero: {
            welcome: 'Добро пожаловать',
            in: 'в',
            malika: 'MALIKA',
            title1: 'Торговый центр',
            title2: 'в Астане',
            desc: 'Товары для дома, бизнеса и автомобиля, сервисы и центр реабилитации в одном удобном месте.',
            about: 'О центре',
            scroll: 'Листайте вниз',
            btnDirections: 'Как добраться',
        },
        about: {
            title: 'О центре',
            text: 'MALIKA — торговый центр в Астане, где собраны товары, услуги и сервисы для повседневных задач. Здесь удобно решать вопросы для дома, бизнеса и автомобиля, а также пользоваться услугами центра реабилитации на территории комплекса.',
        },
        advantages: {
            title: 'Почему MALIKA?',
            subtitle: 'Место, где удобно решать дела: от покупок для дома до сервисов для авто. Понятные условия аренды, свободная парковка и комфорт для ежедневных визитов.',
            items: [
                { title: 'Удобное расположение', desc: 'Удобный заезд с главной дороги. Не нужно кружить по кварталам — мы прямо у шоссе.', color: '#fef5e7' },
                { title: 'Экономия времени', desc: 'Формат «зашел — купил — вышел». Всё компактно и под рукой.', color: '#e6f2ed' },
                { title: 'Помещения для бизнеса', desc: 'Помещения любого формата: от небольших точек до крупных отделов.', color: '#e2e8f0' },
                { title: 'Чистота и порядок', desc: 'Чистая территория, охрана и коммуникации. Занимайтесь делом, об остальном позаботимся мы.', color: '#e0f2fe' },
                { title: 'Свободная парковка', desc: 'Забудьте о проблемах с парковкой. У нас места хватит всем гостям.', color: '#f3f4f6' },
                { title: 'Гибкий подход к арендаторам', desc: 'Гибко подходим к каждому арендатору. Нам важно, чтобы ваше дело росло.', color: '#faebd7' }
            ]
        },
        directions: {
            title: 'Направления',
            subtitle: 'Все необходимое в одном месте',
            all: 'Все магазины',
            clothing: 'Одежда и обувь',
            food: 'Продукты',
            services: 'Услуги',
        },
        rehab: {
            title: 'Забота о здоровье',
            subtitle: 'Профессиональная реабилитация',
            desc: 'В ТЦ MALIKA находится современный реабилитационный центр, предоставляющий квалифицированную помощь и поддержку для восстановления здоровья.',
            features: [
                'Квалифицированные специалисты',
                'Современное оборудование',
                'Индивидуальный подход',
                'Комфортные условия',
            ],
            btn: 'Подробнее о центре',
        },
        spaceShowcase: {
            title: 'Пространство',
            subtitle: 'Интерьеры MALIKA',
            desc: 'Светлые галереи, качественные материалы и продуманное освещение создают премиальную атмосферу для шопинга и отдыха.',
        },
        rent: {
            title: 'Арендаторам',
            subtitle: 'Развивайте бизнес в MALIKA',
            desc: 'Удобная локация, современная инфраструктура и форматы помещений для торговли, услуг и повседневного спроса.',
            btn: 'Стать арендатором',
        },
        visit: {
            title: 'Планируйте ваш визит',
            subtitle: 'MALIKA открыт для вас ежедневно. Прямая связь с администрацией и сервисными службами центра.',
            allContacts: 'Все контакты',
            addressLabel: 'Адрес центра',
            addressVal: 'Астана, район Байконыр, Проезд 69, 1А',
            phoneLabel: 'Контактный номер',
            phoneVal: '+7 (705) 555-76-09',
            hoursLabel: 'Режим работы',
            hoursVal: '09:00 — 18:00, ежедневно',
        },
        contactInfo: {
            addressTitle: 'Адрес',
            phoneTitle: 'Телефон',
            hoursTitle: 'График работы',
            hoursDaily: 'Ежедневно',
        },
        softTenant: {
            badge: 'Арендаторам',
            titlePart1: 'Развивайте бизнес в',
            text: 'Удобная локация, современная инфраструктура и форматы помещений для торговли, услуг и повседневного спроса.',
            btn: 'Стать арендатором',
        },
        finalCta: {
            title: 'Планируйте визит в MALIKA',
            desc: 'Посетите торговый центр, найдите нужные товары и сервисы или свяжитесь с администрацией по вопросам аренды.',
            btnRoute: 'Проложить маршрут',
            btnContact: 'Связаться с нами',
        },
        footer: {
            tagline: 'Профессиональное пространство для вашего бизнеса и здоровья.',
            rights: 'Все права защищены.',
            privacy: 'Политика конфиденциальности',
        },
        map: {
            subtitle: 'Маршрут',
            title: 'Торговый центр MALIKA',
            desc: 'Адрес: г. Астана, район Байконыр, Проезд 69, 1А. Ориентир: вдоль Шоссе Алаш.',
            chooseNav: 'Выбор навигатора',
            go: 'ПОЕХАЛИ',
        },
        contactPage: {
            title: 'Контакты',
            subtitle: 'Свяжитесь с нами',
            desc: 'Остались вопросы? Мы всегда готовы помочь. Выберите удобный способ связи.',
            heroSubtitle: 'Будем на связи',
            heroTitle: 'КОНТАКТЫ',
            heroDesc: 'Свяжитесь с нами удобным для вас способом. Мы всегда рады ответить на ваши вопросы.',
            addressTitle: 'Адрес',
            address1: 'Астана, район Байконыр, Проезд 69, 1А',
            emailTitle: 'Email',
            email1: 'info@malika-center.kz',
            email2: 'rent@malika-center.kz',
        },
        rentPage: {
            heroTitle: 'Аренда в MALIKA',
            heroDesc: 'Присоединяйтесь к числу успешных предпринимателей. Мы предлагаем современные помещения, надежное партнерство и комфортную среду для развития вашего бизнеса.',
            heroBtn: 'Оставить заявку на аренду',
            heroBtnSecondary: 'Позвонить в отдел аренды',
            status: 'Открыт прием заявок',
            statsUnits: 'Свободных мест',
            statsFormat: 'Удобные форматы',
            whyTitle: 'Почему MALIKA',
            formatsTitle: 'Форматы помещений',
            infraTitle: 'Инфраструктура',
            termsTitle: 'Условия сотрудничества',

            whyReasons: [
                { title: 'Активная торговая зона', desc: 'Расположение в районе с устойчивым потоком посетителей.' },
                { title: 'Понятная планировка', desc: 'Удобная структура пространства без лишних переходов.' },
                { title: 'Удобная логистика', desc: 'Комфортный доступ для клиентов и поставщиков.' },
                { title: 'Условия для роста', desc: 'Форматы помещений для стабильной работы и развития бизнеса.' }
            ],

            availableIntro: 'Мы предлагаем различные форматы коммерческих помещений.',
            availableTitle: 'Форматы помещений',
            availableSpaces: [
                { title: 'Торговые помещения', desc: 'Площади от 50 м² для магазинов и розничной торговли.' },
                { title: 'Складские помещения', desc: 'Пространства для хранения и логистических задач.' },
                { title: 'Коммерческие участки', desc: 'Площадки для специализированных проектов и индивидуальных решений.' }
            ],
            infraItems: [
                { label: 'Парковка', value: 'Зона на 500+ авто' },
                { label: 'Охрана', value: '24/7 видеонаблюдение' },
                { label: 'Клининг', value: 'Ежедневная уборка' },
                { label: 'Реклама', value: 'Места на фасаде' }
            ],
            termItems: [
                { label: 'Срок аренды', value: 'от 11 месяцев' },
                { label: 'Депозит', value: '1 месяц' },
                { label: 'Каникулы', value: 'Индивидуально' }
            ],
            processTitle: 'Как стать арендатором',
            processSteps: [
                { title: 'Заявка', desc: 'Оставьте запрос на сайте или позвоните нам.' },
                { title: 'Просмотр', desc: 'Мы покажем подходящие варианты на месте.' },
                { title: 'Договор', desc: 'Быстрое оформление и заезд в помещение.' }
            ],
            formDesc: 'Расскажите, какое помещение вам интересно, и мы свяжемся с вами для обсуждения условий.'
        },
        rentHero: {
            title: 'Аренда коммерческих помещений',
            subtitle: 'Ваш бизнес в центре внимания',
            mainTitle: 'Пространство для стабильного бизнеса',
            mainDesc: 'Удобные помещения для торговли, услуг и повседневного спроса в торговом центре MALIKA. Гибкие условия, заметная локация и инфраструктура для стабильной работы.',
            btn: 'Оставить заявку',
            btnCTA: 'Оставить заявку',
            btnCall: 'Позвонить',
            btnDownload: 'Презентация (PDF)'
        },
        rehabPage: {
            heroTitle: 'Профессиональная реабилитация',
            heroDesc: 'Специализированный центр восстановления здоровья, расположенный в комфортной инфраструктуре ТЦ MALIKA. Инновационные методы и заботливый подход к каждому пациенту.',
            heroSubtitle: 'Забота о вашем здоровье',
            heroBtn: 'Записаться на прием',
            heroBtnSecondary: 'Прайс-лист',
            aboutTitle: 'О центре',
            aboutDesc: 'Центр реабилитации в MALIKA — это современное пространство, ориентированное на восстановление двигательной активности и качества жизни. Мы сочетаем доказательную медицину и персональный подход.',

            directionsTitle: 'Направления работы и услуги',
            directionsDocs: [
                'Физическая реабилитация',
                'Восстановление после травм и операций',
                'Консультации профильных специалистов',
                'Кинезиотерапия и ЛФК',
            ],

            specialistsTitle: 'Наши специалисты',
            specialists: [
                { name: 'Марат Ахметов', role: 'Главный врач, реабилитолог' },
                { name: 'Елена Соколова', role: 'Специалист по ЛФК' },
                { name: 'Арман Ибраев', role: 'Мануальный терапевт' },
            ],

            methodsTitle: 'Методики восстановления',
            methods: [
                { title: 'Кинезиотерапия', desc: 'Лечение движением для восстановления функций суставов.' },
                { title: 'Мануальная терапия', desc: 'Ручные техники для снятия боли и коррекции осанки.' },
                { title: 'Физиолечение', desc: 'Использование современного оборудования для ускорения регенерации.' }
            ],

            contactsTitle: 'Контактная информация',
            phone: 'Телефон: +7 (705) 555-76-09',
            address: 'Адрес: Внутри ТЦ MALIKA, 2 этаж',

            scheduleTitle: 'График приёма',
            scheduleDocs: [
                'Пн–Пт: 09:00 — 18:00',
                'Сб: 10:00 — 15:00',
                'Вс: Выходной'
            ],
            ctaTitle: 'Как записаться',
            ctaDesc: 'Оставьте заявку или позвоните нам для первичной консультации и составления плана реабилитации.'
        },
        directionsPage: {
            heroTitle: 'Магазины',
            heroDesc: 'Откройте для себя разнообразие товаров и услуг в нашем торговом центре.',
        },
        rentContact: {
            title: 'Готовы обсудить аренду?',
            text: 'Свяжитесь с администрацией напрямую — ответим на все вопросы, покажем помещения и расскажем об условиях.',
            waBtn: 'Написать в WhatsApp',
            callBtn: 'Позвонить',
            waMessage: 'Здравствуйте! Интересует аренда помещения в ТЦ MALIKA.',
            hint: 'Администрация на связи ежедневно с 09:00 до 18:00',
        }
    },
    en: {
        common: {
            address: 'Astana, Alash Highway',
            orientir: 'Landmark: along Alash Highway',
            hours: 'Daily 09:00 — 18:00',
            route: 'Get Directions',
            home: 'Home',
            directions: 'Shops',
            directionsShort: 'Shops',
            rehab: 'Rehabilitation',
            rent: 'For Tenants',
            contacts: 'Contacts',
            more: 'More',
            company: 'MALIKA Trading Center',
            footerDesc: 'Shopping center in Astana',
            footerAddress: 'Astana, Baikonyr District, Proyezd 69, 1A',
            footerPhone: 'Phone: +7 (705) 555-76-09',
            footerHours: 'Working Hours: Daily, 09:00 — 18:00',
            nav: 'Navigation',
            rights: '© 2024 MALIKA. All rights reserved.',
            call: 'Call Us',
            instagram: 'https://www.instagram.com/malika_astana/',
            whatsapp: 'https://wa.me/77055557609',
        },
        hero: {
            welcome: 'Welcome',
            in: 'to',
            malika: 'MALIKA',
            title1: 'Shopping Center',
            title2: 'in Astana',
            desc: 'Goods for home, business, and cars, services, and a rehabilitation center in one convenient location.',
            about: 'About Center',
            scroll: 'Scroll Down',
            btnDirections: 'How to get here',
        },
        about: {
            title: 'About Center',
            text: 'MALIKA is a shopping center in Astana that brings together goods, services, and facilities for everyday needs. It is a convenient place for home, business, and automotive solutions, as well as accessing rehabilitation services within the complex.',
        },
        advantages: {
            title: 'Why MALIKA?',
            subtitle: 'A place where it is convenient to handle matters: from home purchases to auto services. Clear rental conditions, free parking, and comfort for daily visits.',
            items: [
                { title: 'Convenient Location', desc: 'Convenient access from the main road. No need to circle the blocks — we are right by the highway.', color: '#fef5e7' },
                { title: 'Time Saving', desc: 'A quick "in and out" format. Everything is compact and close at hand.', color: '#e6f2ed' },
                { title: 'Business Premises', desc: 'Spaces of any format: from small spots to large departments.', color: '#e2e8f0' },
                { title: 'Cleanliness and Order', desc: 'Clean territory, security, and communications. Focus on your business, we will take care of the rest.', color: '#e0f2fe' },
                { title: 'Free Parking', desc: 'Forget about parking problems. We have enough space for all guests.', color: '#f3f4f6' },
                { title: 'Flexible Approach to Tenants', desc: 'We take a flexible approach to each tenant. It is important to us that your business grows.', color: '#faebd7' }
            ]
        },
        directions: {
            title: 'Categories',
            subtitle: 'Everything you need in one place',
            all: 'All Shops',
            clothing: 'Clothing & Shoes',
            food: 'Groceries',
            services: 'Services',
        },
        rehab: {
            title: 'Health Care',
            subtitle: 'Professional Rehabilitation',
            desc: 'The MALIKA shopping center houses a modern rehabilitation center providing qualified care and support for health recovery.',
            features: [
                'Qualified specialists',
                'Modern equipment',
                'Individual approach',
                'Comfortable environment',
            ],
            btn: 'Learn more about center',
        },
        spaceShowcase: {
            title: 'Space',
            subtitle: 'MALIKA Interiors',
            desc: 'Bright galleries, high-quality materials, and thoughtful lighting create a premium atmosphere for shopping and relaxation.',
        },
        rent: {
            title: 'For Tenants',
            subtitle: 'Grow your business with MALIKA',
            desc: 'Convenient location, modern infrastructure, and space formats for retail, services, and everyday demand.',
            btn: 'Become a Tenant',
        },
        visit: {
            title: 'Plan Your Visit',
            subtitle: 'MALIKA is open for you every day. Direct communication with the administration and service teams of the center.',
            allContacts: 'All Contacts',
            addressLabel: 'Center Address',
            addressVal: 'Astana, Baikonyr District, Proyezd 69, 1A',
            phoneLabel: 'Contact Number',
            phoneVal: '+7 (705) 555-76-09',
            hoursLabel: 'Working Hours',
            hoursVal: '09:00 — 18:00, daily',
        },
        contactInfo: {
            addressTitle: 'Address',
            phoneTitle: 'Phone',
            hoursTitle: 'Working hours',
            hoursDaily: 'Daily',
        },
        softTenant: {
            badge: 'For Tenants',
            titlePart1: 'Grow your business at',
            text: 'Convenient location, modern infrastructure, and space formats for retail, services, and everyday demand.',
            btn: 'Become a Tenant',
        },
        finalCta: {
            title: 'Plan your visit to MALIKA',
            desc: 'Visit the trading center, find the goods and services you need, or contact the administration regarding rental issues.',
            btnRoute: 'Get Directions',
            btnContact: 'Contact Us',
        },
        footer: {
            tagline: 'Professional space for your business and health.',
            rights: 'All rights reserved.',
            privacy: 'Privacy Policy',
        },
        map: {
            subtitle: 'Route',
            title: 'MALIKA Shopping Center',
            desc: 'Address: Astana, Baikonyr District, Proyezd 69, 1A. Landmark: along Alash Highway.',
            chooseNav: 'Choose Navigator',
            go: 'LET\'S GO',
        },
        contactPage: {
            title: 'Contacts',
            subtitle: 'Get in Touch',
            desc: 'Have questions? We are always ready to help. Choose a convenient way to contact us.',
            heroSubtitle: 'Stay in touch',
            heroTitle: 'CONTACTS',
            heroDesc: 'Contact us in a way that is convenient for you. We are always happy to answer your questions.',
            addressTitle: 'Address',
            address1: 'Astana, Baikonyr District, Proyezd 69, 1A',
            emailTitle: 'Email',
            email1: 'info@malika-center.kz',
            email2: 'rent@malika-center.kz',
        },
        rentPage: {
            heroTitle: 'Rent at MALIKA',
            heroDesc: 'Join the ranks of successful entrepreneurs. We offer modern premises, reliable partnership, and a comfortable environment to grow your business.',
            heroBtn: 'Submit a rental request',
            heroBtnSecondary: 'Call leasing department',
            status: 'Accepting applications',
            statsUnits: 'Available spaces',
            statsFormat: 'Convenient formats',
            whyTitle: 'Why MALIKA',
            formatsTitle: 'Room Formats',
            infraTitle: 'Infrastructure',
            termsTitle: 'Terms of Cooperation',

            whyReasons: [
                { title: 'Active Trading Zone', desc: 'Location in an area with a steady flow of visitors.' },
                { title: 'Compact Structure', desc: 'Clear layout without unnecessary transitions.' },
                { title: 'Convenient Logistics', desc: 'Accessibility for clients and suppliers.' },
                { title: 'Development Potential', desc: 'Opportunity for expansion and long-term cooperation.' }
            ],

            availableIntro: 'We offer various formats of commercial premises.',
            availableTitle: 'Commercial Space Formats',
            availableSpaces: [
                { title: 'Retail Spaces', desc: 'Premises for rent from 50 square meters for shops and retail.' },
                { title: 'Warehouse Areas', desc: 'For storage and logistics tasks.' },
                { title: 'Commercial Lots', desc: 'For specialized projects.' }
            ],
            infraItems: [
                { label: 'Parking', value: '500+ spaces' },
                { label: 'Security', value: '24/7 monitoring' },
                { label: 'Cleaning', value: 'Daily maintenance' },
                { label: 'Marketing', value: 'Facade signage' }
            ],
            termItems: [
                { label: 'Lease term', value: 'from 11 months' },
                { label: 'Deposit', value: '1 month' },
                { label: 'Grace period', value: 'Individual' }
            ],
            processTitle: 'How to become a tenant',
            processSteps: [
                { title: 'Inquiry', desc: 'Leave a request on the website or call us.' },
                { title: 'Viewing', desc: 'We will show you suitable options on-site.' },
                { title: 'Agreement', desc: 'Quick paperwork and moving into the space.' }
            ],
            formDesc: 'Tell us which space you are interested in, and we will contact you to discuss the terms.'
        },
        rentHero: {
            title: 'Commercial Space Rental',
            subtitle: 'Your business in the spotlight',
            mainTitle: 'Space for a stable business',
            mainDesc: 'Convenient premises for trade, services, and everyday demand at the MALIKA shopping center. Flexible terms, prime location, and infrastructure for stable operation.',
            btn: 'Submit Application',
            btnCTA: 'Submit Application',
            btnCall: 'Call',
            btnDownload: 'Presentation (PDF)'
        },
        rehabPage: {
            heroTitle: 'Professional Rehabilitation',
            heroDesc: 'A specialized health recovery center located within the comfortable infrastructure of the MALIKA shopping center. Innovative methods and a caring approach to every patient.',
            heroSubtitle: 'Care for your health',
            heroBtn: 'Book an Appointment',
            heroBtnSecondary: 'Price List',
            aboutTitle: 'About Center',
            aboutDesc: 'The rehabilitation center at MALIKA is a modern space focused on restoring mobility and quality of life. We combine evidence-based medicine and a personal approach.',

            directionsTitle: 'Areas of Work and Services',
            directionsDocs: [
                'Physical rehabilitation',
                'Recovery after injuries and surgeries',
                'Consultations with profile specialists',
                'Kinesitherapy and exercise therapy',
            ],

            specialistsTitle: 'Our Specialists',
            specialists: [
                { name: 'Marat Akhmetov', role: 'Head Physician, Rehabilitation Specialist' },
                { name: 'Elena Sokolova', role: 'Physiotherapist' },
                { name: 'Arman Ibrayev', role: 'Manual Therapist' },
            ],

            methodsTitle: 'Recovery Methods',
            methods: [
                { title: 'Kinesitherapy', desc: 'Movement therapy to restore joint function.' },
                { title: 'Manual Therapy', desc: 'Hands-on techniques for pain relief and posture correction.' },
                { title: 'Physiotherapy', desc: 'Using modern equipment to accelerate regeneration.' }
            ],

            contactsTitle: 'Contact Information',
            phone: 'Phone: +7 (705) 555-76-09',
            address: 'Address: Inside MALIKA Mall, 2nd floor',

            scheduleTitle: 'Reception Schedule',
            scheduleDocs: [
                'Mon–Fri: 09:00 — 18:00',
                'Sat: 10:00 — 15:00',
                'Sun: Closed'
            ],
            ctaTitle: 'How to register',
            ctaDesc: 'Leave a request or call us for an initial consultation and creation of a rehabilitation plan.'
        },
        directionsPage: {
            heroTitle: 'Shops',
            heroDesc: 'Discover a variety of goods and services in our shopping center.',
        },
        rentContact: {
            title: 'Ready to discuss rental?',
            text: 'Contact the administration directly — we will answer all questions, show available spaces, and explain the terms.',
            waBtn: 'Message on WhatsApp',
            callBtn: 'Call Us',
            waMessage: 'Hello! I am interested in renting a space at MALIKA shopping center.',
            hint: 'Administration is available daily from 09:00 to 18:00',
        }
    }
};

export type TranslationKeys = typeof translations.ru;
