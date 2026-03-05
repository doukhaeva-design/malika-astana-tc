// lib/i18n/translations.ts

export type Language = 'ru' | 'en';

export const translations = {
    ru: {
        common: {
            address: 'Астана, Шоссе Алаш',
            hours: 'Ежедневно 09:00 — 18:00',
            route: 'Проложить маршрут',
            home: 'Главная',
            directions: 'Магазины и сервисы',
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
        },
        hero: {
            welcome: 'Добро пожаловать',
            in: 'в',
            malika: 'malika',
            title1: 'Новый уровень',
            title2: 'комфорта',
            desc: 'Современный торговый центр MALIKA — это место, где шопинг, здоровье и бизнес встречаются в идеальном балансе. Пространство, созданное для вашего удобства.',
            about: 'О центре',
            scroll: 'Листайте вниз',
        },
        advantages: {
            title: 'Почему выбирают нас',
            space: 'Современное пространство',
            spaceDesc: 'Продуманная планировка и комфортные зоны отдыха для посетителей.',
            parking: 'Удобная парковка',
            parkingDesc: 'Просторный паркинг с удобным заездом с Шоссе Алаш.',
            tenants: 'Надежные арендаторы',
            tenantsDesc: 'Сотрудничаем с проверенными брендами и компаниями.',
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
            subtitle: 'Развивайте бизнес вместе с MALIKA',
            desc: 'Мы предлагаем выгодные условия аренды и современное пространство для успешного ведения бизнеса. Станьте частью нашего торгового центра.',
            btn: 'Условия аренды',
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
        map: {
            subtitle: 'Маршрут',
            title: 'Торговый центр MALIKA',
            desc: 'Адрес: г. Астана, район Орда Базар, вдоль Шоссе Алаш. Проложите удобный маршрут прямо сейчас.',
            chooseNav: 'Выбор навигатора',
            go: 'ПОЕХАЛИ',
        },
        contactPage: {
            title: 'Контакты',
            subtitle: 'Свяжитесь с нами',
            desc: 'Остались вопросы? Мы всегда готовы помочь. Выберите удобный способ связи.',
            addressTitle: 'Адрес',
            address1: 'Астана, район Байконыр, Проезд 69, 1А',
            emailTitle: 'Email',
            email1: 'info@malika-center.kz',
            email2: 'rent@malika-center.kz',
        },
        rentPage: {
            heroTitle: 'Аренда в MALIKA',
            heroDesc: 'Присоединяйтесь к числу успешных предпринимателей. Мы предлагаем комфортные помещения, высокий трафик и премиальный уровень сервиса для развития вашего бизнеса.',
            heroBtn: 'Оставить заявку на аренду',
            heroBtnSecondary: 'Позвонить в отдел аренды',
            status: 'Открыт прием заявок',
            statsUnits: 'Свободных мест',
            statsFormat: 'Удобные форматы',

            whyTitle: 'Преимущества для бизнеса',
            whySubtitle: 'Почему выбирают MALIKA?',
            whyDocs: [
                {
                    title: 'Выгодное расположение',
                    desc: 'Отличная транспортная доступность и удобный съезд с Шоссе Алаш.'
                },
                {
                    title: 'Стабильный трафик',
                    desc: 'Постоянный поток посетителей благодаря грамотному пулу арендаторов.'
                },
                {
                    title: 'Современная инфраструктура',
                    desc: 'Новые инженерные системы, климат-контроль и скоростной интернет.'
                },
                {
                    title: 'Безопасность',
                    desc: 'Круглосуточная охрана, видеонаблюдение и пожарная безопасность.'
                }
            ],

            formTitle: 'Стать арендатором',
            formSubtitle: 'Оставьте заявку, и мы свяжемся с вами',
            formName: 'Ваше имя',
            formPhone: 'Номер телефона',
            formCompany: 'Название компании',
            formSpace: 'Требуемая площадь (м²)',
            formSubmit: 'ОТПРАВИТЬ ЗАЯВКУ',
        },
        rehabPage: {
            heroTitle: 'Профессиональная реабилитация',
            heroDesc: 'Специализированный центр восстановления здоровья, расположенный в комфортной инфраструктуре ТЦ MALIKA. Инновационные методы и заботливый подход к каждому пациенту.',
            heroBtn: 'Записаться на прием',
            heroBtnSecondary: 'Прайс-лист',

            directionsTitle: 'Направления работы',
            directionsDocs: [
                'Физическая реабилитация',
                'Восстановление после травм',
                'Консультации специалистов',
            ],

            contactsTitle: 'Контактная информация',
            phone: 'Телефон: +7 (705) 555-76-09',
            address: 'Адрес: Внутри ТЦ MALIKA, 2 этаж',

            scheduleTitle: 'График приёма',
            scheduleDocs: [
                'Пн–Пт: 09:00 — 18:00',
                'Сб: 10:00 — 15:00',
                'Вс: Выходной'
            ]
        },
        directionsPage: {
            heroTitle: 'Магазины и сервисы',
            heroDesc: 'Откройте для себя разнообразие товаров и услуг в нашем торговом центре.',
        }
    },
    en: {
        common: {
            address: 'Astana, Alash Highway',
            hours: 'Daily 09:00 — 18:00',
            route: 'Get Directions',
            home: 'Home',
            directions: 'Shops & Services',
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
        },
        hero: {
            welcome: 'Welcome',
            in: 'to',
            malika: 'malika',
            title1: 'New Level',
            title2: 'of Comfort',
            desc: 'The modern MALIKA shopping center is a place where shopping, health, and business meet in perfect balance. A space designed for your convenience.',
            about: 'About Center',
            scroll: 'Scroll Down',
        },
        advantages: {
            title: 'Why Choose Us',
            space: 'Modern Space',
            spaceDesc: 'Thoughtful layout and comfortable seating areas for visitors.',
            parking: 'Convenient Parking',
            parkingDesc: 'Spacious parking lot with easy access from Alash Highway.',
            tenants: 'Reliable Tenants',
            tenantsDesc: 'We cooperate with trusted brands and companies.',
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
            desc: 'We offer favorable rental conditions and modern space for successful business operations. Become part of our shopping center.',
            btn: 'Rental Conditions',
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
        map: {
            subtitle: 'Route',
            title: 'MALIKA Shopping Center',
            desc: 'Address: Astana, Orda Bazar District, along Alash Highway. Build a convenient route right now.',
            chooseNav: 'Choose Navigator',
            go: 'LET\'S GO',
        },
        contactPage: {
            title: 'Contacts',
            subtitle: 'Get in Touch',
            desc: 'Have questions? We are always ready to help. Choose a convenient way to contact us.',
            addressTitle: 'Address',
            address1: 'Astana, Baikonyr District, Proyezd 69, 1A',
            emailTitle: 'Email',
            email1: 'info@malika-center.kz',
            email2: 'rent@malika-center.kz',
        },
        rentPage: {
            heroTitle: 'Rent at MALIKA',
            heroDesc: 'Join the ranks of successful entrepreneurs. We offer comfortable premises, high traffic, and premium service to grow your business.',
            heroBtn: 'Submit a rental request',
            heroBtnSecondary: 'Call leasing department',
            status: 'Accepting applications',
            statsUnits: 'Available spaces',
            statsFormat: 'Convenient formats',

            whyTitle: 'Business Advantages',
            whySubtitle: 'Why choose MALIKA?',
            whyDocs: [
                {
                    title: 'Prime Location',
                    desc: 'Excellent transport accessibility and a convenient exit from Alash Highway.'
                },
                {
                    title: 'Stable Traffic',
                    desc: 'A constant flow of visitors thanks to a well-selected pool of tenants.'
                },
                {
                    title: 'Modern Infrastructure',
                    desc: 'New engineering systems, climate control, and high-speed internet.'
                },
                {
                    title: 'Security',
                    desc: 'Round-the-clock security, video surveillance, and fire safety systems.'
                }
            ],

            formTitle: 'Become a Tenant',
            formSubtitle: 'Leave a request, and we will contact you',
            formName: 'Your Name',
            formPhone: 'Phone Number',
            formCompany: 'Company Name',
            formSpace: 'Required Area (sq.m)',
            formSubmit: 'SUBMIT REQUEST',
        },
        rehabPage: {
            heroTitle: 'Professional Rehabilitation',
            heroDesc: 'A specialized health recovery center located within the comfortable infrastructure of the MALIKA shopping center. Innovative methods and a caring approach to every patient.',
            heroBtn: 'Book an Appointment',
            heroBtnSecondary: 'Price List',

            directionsTitle: 'Areas of Work',
            directionsDocs: [
                'Physical rehabilitation',
                'Recovery after injuries',
                'Specialist consultations',
            ],

            contactsTitle: 'Contact Information',
            phone: 'Phone: +7 (705) 555-76-09',
            address: 'Address: Inside MALIKA Mall, 2nd floor',

            scheduleTitle: 'Reception Schedule',
            scheduleDocs: [
                'Mon–Fri: 09:00 — 18:00',
                'Sat: 10:00 — 15:00',
                'Sun: Closed'
            ]
        },
        directionsPage: {
            heroTitle: 'Shops & Services',
            heroDesc: 'Discover a variety of goods and services in our shopping center.',
        }
    }
};

export type TranslationKeys = typeof translations.ru;
