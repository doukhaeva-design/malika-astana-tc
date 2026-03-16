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
            directions: 'Магазины и услуги',
            directionsShort: 'Каталог',
            rehab: 'Реабилитация',
            aboutCenter: 'О центре',
            rent: 'Арендаторам',
            contacts: 'Контакты',
            becomeTenant: 'Стать арендатором',
            more: 'Ещё',
            company: 'Торговый центр MALIKA',
            footerDesc: 'Торговый центр в Астане',
            footerAddress: 'Астана, район Байконыр, Проезд 69, 1А',
            footerPhone: 'Телефон: +7 (700) 305-35-36',
            footerHours: 'Время работы: Ежедневно, 09:00 — 18:00',
            nav: 'Навигация',
            rights: '© 2024 MALIKA. Все права защищены.',
            call: 'Позвонить',
            instagram: 'https://www.instagram.com/malika_astana/',
            whatsapp: 'https://wa.me/77003053536',
        },
        hero: {
            welcome: 'Добро пожаловать',
            in: 'в',
            malika: 'MALIKA',
            badge: 'Астана · Байконурский район',
            title1: 'Торговый центр',
            title2: 'MALIKA',
            desc: 'Товары и услуги для автомобиля, дома и бизнеса в одном месте.',
            about: 'О центре',
            scroll: 'Листайте вниз',
            btnPrimary: 'Проложить маршрут',
            btnSecondary: 'Аренда помещений',
            metric1: '50+ магазинов',
            metric2: '4 000 м²',
            metric3: 'Ежедневно 09–18',
        },
        about: {
            title: 'О центре',
            text: 'MALIKA расположен в Байконурском районе Астаны. Здесь работают магазины автозапчастей, товаров для дома и быта, точки с оборудованием для бизнеса, сервисные компании и центр реабилитации. Это торговый центр для повседневных задач, куда удобно приехать за нужными товарами и услугами в одном месте.',
            shortText: 'Торговый центр в Байконурском районе Астаны. Автозапчасти, оборудование, бытовые товары, сервисы и медицинский центр — всё в одном месте.',
            moreBtn: 'Подробнее о центре',
            heroSubtitle: 'Узнайте больше',
            heroTitle: 'О центре',
            heroDesc: 'Торговый центр MALIKA — удобное место в Астане, где можно найти товары для дома, бизнеса и автомобилей, а также воспользоваться нужными услугами в одном пространстве.',
            stats: {
                area: '4000 м²',
                floors: '3 этажа',
                parking: 'парковка на 50+ мест'
            }
        },
        advantages: {
            title: 'Почему сюда удобно приезжать',
            subtitle: '',
            items: [
                { title: 'Удобный подъезд', desc: 'Центр расположен рядом с трассой Алаш, поэтому до него удобно добираться на автомобиле.', color: '#fef5e7' },
                { title: 'Парковка', desc: 'На территории предусмотрена парковка для посетителей.', color: '#e6f2ed' },
                { title: 'Всё в одном месте', desc: 'Магазины и сервисы расположены рядом, поэтому за одно посещение можно решить сразу несколько задач.', color: '#e2e8f0' },
                { title: 'Практичный формат', desc: 'Центр ориентирован на реальные повседневные потребности жителей района и бизнеса.', color: '#e0f2fe' },
                { title: 'Безопасность', desc: 'Территория находится под охраной и видеонаблюдением.', color: '#f3f4f6' }
            ]
        },
        directions: {
            title: 'Магазины и услуги',
            subtitle: 'В MALIKA представлены разные категории товаров и сервисов.',
            all: 'Все направления',
            categories: [
                { title: 'Автотовары', desc: 'Запчасти, расходники, инструменты и аксессуары для автомобиля.' },
                { title: 'Оборудование и техника', desc: 'Профессиональная техника и оборудование.' },
                { title: 'Товары для дома', desc: 'Всё необходимое для дома и ремонта.' },
                { title: 'Сервисы и услуги', desc: 'Ремонт, обслуживание и профессиональные услуги.' },
                { title: 'Медицина', desc: 'Современный центр реабилитации и восстановления здоровья.' }
            ]
        },
        rehab: {
            title: 'Медицинский центр',
            subtitle: 'Реабилитационный центр, предлагающий программы восстановления здоровья.',
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
            title: 'MALIKA сегодня',
            subtitle: 'Развитие',
            desc: 'Торговый центр MALIKA развивается как практичное пространство для покупок, услуг и повседневных решений. Сюда приезжают за товарами для автомобиля, дома и работы.',
            extra: ''
        },
        rent: {
            title: 'Для арендаторов',
            subtitle: 'Помещения для бизнеса в ТЦ MALIKA',
            desc: 'Торговый центр предлагает помещения для магазинов, сервисных компаний и коммерческих проектов. Администрация центра открыта к сотрудничеству и готова обсуждать условия аренды.',
            btn: 'Стать арендатором',
        },
        visit: {
            title: 'ТЦ MALIKA',
            subtitle: 'Астана, Байконурский район, Проезд 69, 1А. Ориентир — трасса Алаш',
            allContacts: 'Все контакты',
            addressLabel: 'Адрес центра',
            addressVal: 'Проезд 69, 1А (трасса Алаш)',
            phoneLabel: 'Телефон',
            phoneVal: '+7 (700) 305-35-36',
            hoursLabel: 'Время работы',
            hoursVal: '09:00 — 18:00 ежедневно',
        },
        contactInfo: {
            addressTitle: 'Адрес',
            phoneTitle: 'Телефон',
            hoursTitle: 'Время работы',
            hoursDaily: '09:00 — 18:00 ежедневно',
        },
        softTenant: {
            badge: 'Арендаторам',
            titlePart1: 'Откройте точку в',
            text: 'Готовый поток посетителей, парковка, зона разгрузки и помещения от 50 м² — всё для старта и работы вашего бизнеса.',
            btn: 'Подробнее об аренде',
            infraItems: [
                'Поток покупателей автотоваров и хозтоваров',
                'Помещения от 50 м² с гибкой планировкой',
                'Парковка, грузовой лифт, зона разгрузки',
                'Охрана, отопление, Wi-Fi'
            ]
        },
        finalCta: {
            title: 'Приезжайте в MALIKA',
            desc: 'Автозапчасти, товары для дома, оборудование и сервисы — всё рядом с трассой Алаш.',
            btnRoute: 'Проложить маршрут',
            btnContact: 'Контакты',
        },
        footer: {
            tagline: 'Товары для бизнеса, дома и автомобилей.',
            rights: 'Все права защищены.',
            privacy: 'Политика конфиденциальности',
        },
        map: {
            subtitle: 'Торговый центр MALIKA',
            title: 'Как нас найти',
            desc: 'Астана, Байконурский район, Проезд 69, 1А. Ориентир — трасса Алаш.',
            chooseNav: 'Построить маршрут',
            go: 'ПОЕХАЛИ',
        },
        contactPage: {
            title: 'Контакты',
            subtitle: 'Торговый центр MALIKA',
            desc: 'Астана, Байконурский район, Проезд 69, 1А. Ориентир — трасса Алаш.',
            heroSubtitle: 'Будем на связи',
            heroTitle: 'КОНТАКТЫ',
            heroDesc: 'Свяжитесь с нами удобным для вас способом.',
            addressTitle: 'Адрес',
            address1: 'Астана, Байконурский район, Проезд 69, 1А',
            emailTitle: 'Телефон',
            email1: '+7 (700) 305-35-36',
            email2: 'info@malika-center.kz',
        },
        rentPage: {
            heroTitle: 'Аренда помещений',
            heroDesc: 'Торговый центр MALIKA предлагает в аренду помещения для разных форматов бизнеса. Комплекс расположен в Байконурском районе Астаны, рядом с крупными транспортными магистралями, что обеспечивает удобный доступ для клиентов, сотрудников и поставщиков.',
            heroExtra: 'Доступны площади от 50 м² с возможностью адаптации пространства под задачи вашего бизнеса.',
            heroBtn: 'Оставить заявку',
            heroBtnSecondary: 'Позвонить в отдел аренды',
            status: 'Открыт приём заявок',
            statsUnits: 'Свободных мест',
            statsFormat: 'Удобные форматы',
            whyTitle: 'Преимущества для бизнеса',
            formatsTitle: 'Форматы помещений',
            infraTitle: 'Инфраструктура',
            termsTitle: 'Условия аренды',

            whyReasons: [
                { title: 'Удобное расположение', desc: 'Торговый центр расположен рядом с основными транспортными направлениями города. До комплекса удобно добираться как клиентам, так и поставщикам.' },
                { title: 'Парковка', desc: 'Для посетителей и сотрудников предусмотрена парковка более чем на 50 мест.' },
                { title: 'Грузовой лифт', desc: 'Грузовой лифт упрощает перемещение товаров и оборудования между этажами.' },
                { title: 'Зона разгрузки', desc: 'Для приёма поставок предусмотрена отдельная зона разгрузки. Также доступна техника для перемещения грузов.' }
            ],

            availableIntro: 'Мы предлагаем различные форматы коммерческих помещений.',
            availableTitle: 'Форматы помещений',
            availableSpaces: [
                { title: 'Торговые помещения', desc: 'Площади от 50 м² для магазинов и торговых точек. Помещения можно адаптировать под формат бизнеса, при необходимости разделить перегородками.' },
                { title: 'Складские помещения', desc: 'Подходят для хранения товаров, запасов и организации логистики.' },
                { title: 'Коммерческие помещения', desc: 'Для сервисных компаний, офисов и работы с клиентами.' }
            ],
            infraItems: [
                { label: 'Парковка', value: 'более 50 мест' },
                { label: 'Грузовой лифт', value: 'для перевозки габаритных грузов' },
                { label: 'Зона разгрузки', value: 'удобный дебаркадер для поставок' },
                { label: 'Интернет и связь', value: 'высокоскоростной интернет для работы бизнеса' }
            ],
            termItems: [
                { label: 'Минимальный срок аренды', value: 'от 11 месяцев' },
                { label: 'Депозит', value: '1 месяц' },
                { label: 'Арендные каникулы', value: 'обсуждаются индивидуально' },
                { label: 'Планировка', value: 'возможность разделения помещений' }
            ],
            targetTitle: 'Кому подойдут помещения',
            targetDesc: 'Помещения в торговом центре MALIKA подходят для различных форматов бизнеса:',
            targetItems: [
                { title: 'Магазины и торговые точки', desc: 'Автотовары, товары для дома, специализированная торговля.' },
                { title: 'Сервисные компании', desc: 'Ремонт, обслуживание, бытовые и коммерческие услуги.' },
                { title: 'Складские и логистические форматы', desc: 'Хранение товаров, запасы, работа с поставками.' }
            ],
            processTitle: 'Как стать арендатором',
            processSteps: [
                { title: 'Оставьте заявку', desc: 'Свяжитесь с нами через сайт или по телефону.' },
                { title: 'Подберите помещение', desc: 'Мы предложим подходящие варианты и организуем просмотр.' },
                { title: 'Заключите договор', desc: 'После согласования условий подписывается договор аренды.' },
                { title: 'Начните работу', desc: 'Помещение адаптируется под задачи вашего бизнеса.' }
            ],
            formTitle: 'Интересует аренда?',
            formDesc: 'Оставьте заявку, и мы свяжемся с вами, чтобы обсудить доступные помещения и условия аренды.'
        },
        rentHero: {
            title: 'Аренда помещений',
            subtitle: 'Торговый центр MALIKA',
            heroFeatures: 'Помещения от 50 м² для магазинов, автотоваров, сервисных компаний и коммерческих проектов.',
            heroTags: 'Гибкая планировка · Удобный подъезд · Условия для поставок',
            mainTitle: '',
            mainDesc: '',
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
            phone: 'Телефон: +7 (700) 305-35-36',
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
            heroTitle: 'Магазины и сервисы MALIKA',
            heroDesc: 'Автозапчасти, оборудование, товары для дома, бытовые услуги и медицинский центр — всё в одном месте.',
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
            directions: 'Shops & Services',
            directionsShort: 'Catalog',
            rehab: 'Rehabilitation',
            aboutCenter: 'About Center',
            rent: 'For Tenants',
            contacts: 'Contacts',
            becomeTenant: 'Become a Tenant',
            more: 'More',
            company: 'MALIKA Trading Center',
            footerDesc: 'Shopping center in Astana',
            footerAddress: 'Astana, Baikonyr District, Proyezd 69, 1A',
            footerPhone: 'Phone: +7 (700) 305-35-36',
            footerHours: 'Working Hours: Daily, 09:00 — 18:00',
            nav: 'Navigation',
            rights: '© 2024 MALIKA. All rights reserved.',
            call: 'Call Us',
            instagram: 'https://www.instagram.com/malika_astana/',
            whatsapp: 'https://wa.me/77003053536',
        },
        hero: {
            welcome: 'Welcome',
            in: 'to',
            malika: 'MALIKA',
            badge: 'Astana · Baikonyr District',
            title1: 'Shopping Center',
            title2: 'MALIKA',
            desc: 'Goods and services for your car, home, and business — all in one place.',
            about: 'About Center',
            scroll: 'Scroll Down',
            btnPrimary: 'Get Directions',
            btnSecondary: 'Rental Spaces',
            metric1: '50+ shops',
            metric2: '4,000 m²',
            metric3: 'Daily 09–18',
        },
        about: {
            title: 'MALIKA Shopping Center',
            text: 'MALIKA is a shopping center in the Baikonyr district of Astana. It houses auto parts stores, household goods, business equipment, service companies, and a medical rehabilitation center. The center is oriented toward the everyday tasks of business and local residents.',
            shortText: 'A shopping center in the Baikonyr district of Astana. Auto parts, equipment, household goods, services, and a medical center — all in one place.',
            moreBtn: 'More about the center',
            heroSubtitle: 'Learn more',
            heroTitle: 'ABOUT CENTER',
            heroDesc: 'MALIKA Shopping Center — a practical space for shopping, business, and everyday solutions in Astana.',
            stats: {
                area: '4000 m²',
                floors: '3 floors',
                parking: 'parking for 50+ spots'
            }
        },
        advantages: {
            title: 'A Convenient Place for Shopping and Business',
            subtitle: 'A place where it is convenient to handle matters: from home purchases to auto services.',
            items: [
                { title: 'Convenient Access', desc: 'The center is located near the Alash highway with easy entry.', color: '#fef5e7' },
                { title: 'Parking', desc: 'On-site parking is provided for visitors.', color: '#e6f2ed' },
                { title: 'Compact Format', desc: 'All shops and services are located nearby, allowing you to quickly solve necessary tasks.', color: '#e2e8f0' },
                { title: 'Security', desc: 'The territory is under security and video surveillance.', color: '#e0f2fe' },
                { title: 'Business Comfort', desc: 'Engineering communications and infrastructure allow for comfortable and stable work.', color: '#f3f4f6' }
            ]
        },
        directions: {
            title: 'Shops and Services',
            subtitle: 'Different categories of goods and services are presented in MALIKA.',
            all: 'All Categories',
            categories: [
                { title: 'Auto Goods', desc: 'Spare parts, consumables, tools, and accessories for your car.' },
                { title: 'Equipment & Tech', desc: 'Professional equipment and machinery.' },
                { title: 'Home Goods', desc: 'Everything you need for home and renovation.' },
                { title: 'Services', desc: 'Repair, maintenance, and professional services.' },
                { title: 'Medicine', desc: 'Modern rehabilitation and health recovery center.' }
            ]
        },
        rehab: {
            title: 'Medical Center',
            subtitle: 'Rehabilitation center offering health recovery programs.',
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
            title: 'Growth Prospects',
            subtitle: 'MALIKA is growing',
            desc: 'The shopping center continues to evolve. On the complex territory: about 3 hectares of free land, a new building is already under construction, development of warehouse and retail premises is planned, and further expansion of the complex is being considered.',
            extra: 'The development of the center creates additional opportunities for tenants and increases the flow of visitors.'
        },
        rent: {
            title: 'For Tenants',
            subtitle: 'Business Premises in MALIKA Shopping Center',
            desc: 'The shopping center offers premises for shops, service companies, and commercial projects. The center administration is open to cooperation and ready to discuss rental terms.',
            btn: 'Become a Tenant',
        },
        visit: {
            title: 'MALIKA TC',
            subtitle: 'Astana, Baikonyr District, Proyezd 69, 1A. Landmark — Alash Highway',
            allContacts: 'All Contacts',
            addressLabel: 'Center Address',
            addressVal: 'Proyezd 69, 1A (Alash Highway)',
            phoneLabel: 'Phone',
            phoneVal: '+7 (700) 305-35-36',
            hoursLabel: 'Working Hours',
            hoursVal: '09:00 — 18:00 daily',
        },
        contactInfo: {
            addressTitle: 'Address',
            phoneTitle: 'Phone',
            hoursTitle: 'Working hours',
            hoursDaily: '09:00 — 18:00 daily',
        },
        softTenant: {
            badge: 'For Tenants',
            titlePart1: 'Open a business at',
            text: 'Existing visitor traffic, parking, loading zone, and spaces from 50 m² — everything to start and run your business.',
            btn: 'Learn about rental',
            infraItems: [
                'Buyer traffic for auto and household goods',
                'Spaces from 50 m² with flexible layout',
                'Parking, cargo lift, loading zone',
                'Security, heating, Wi-Fi'
            ]
        },
        finalCta: {
            title: 'Visit MALIKA',
            desc: 'Auto parts, home goods, equipment, and services — all near Alash Highway.',
            btnRoute: 'Get Directions',
            btnContact: 'Contacts',
        },
        footer: {
            tagline: 'Goods for business, home, and cars.',
            rights: 'All rights reserved.',
            privacy: 'Privacy Policy',
        },
        map: {
            subtitle: 'MALIKA Shopping Center',
            title: 'How to Find Us',
            desc: 'Astana, Baikonyr District, Proyezd 69, 1A. Landmark — Alash Highway.',
            chooseNav: 'Get Directions',
            go: 'LET\'S GO',
        },
        contactPage: {
            title: 'Contacts',
            subtitle: 'MALIKA Shopping Center',
            desc: 'Astana, Baikonyr District, Proyezd 69, 1A. Landmark — Alash Highway.',
            heroSubtitle: 'Stay in touch',
            heroTitle: 'CONTACTS',
            heroDesc: 'Contact us in a way that is convenient for you.',
            addressTitle: 'Address',
            address1: 'Astana, Baikonyr District, Proyezd 69, 1A',
            emailTitle: 'Phone',
            email1: '+7 (700) 305-35-36',
            email2: 'info@malika-center.kz',
        },
        rentPage: {
            heroTitle: 'Rental of Premises',
            heroDesc: 'MALIKA Shopping Center offers premises for various business formats. The complex is located in the Baikonyr district of Astana, near major highways, providing convenient access for clients, employees, and suppliers.',
            heroExtra: 'Spaces from 50 m² available with the option to adapt the layout to your business needs.',
            heroBtn: 'Submit Inquiry',
            heroBtnSecondary: 'Call leasing department',
            status: 'Accepting applications',
            statsUnits: 'Available spaces',
            statsFormat: 'Convenient formats',
            whyTitle: 'Business Advantages',
            formatsTitle: 'Space Formats',
            infraTitle: 'Infrastructure',
            termsTitle: 'Lease Terms',

            whyReasons: [
                { title: 'Convenient Location', desc: 'The shopping center is located near the city\'s main transport routes. Easy to reach for both clients and suppliers.' },
                { title: 'Parking', desc: 'Parking for over 50 vehicles is available for visitors and staff.' },
                { title: 'Cargo Lift', desc: 'The cargo lift simplifies moving goods and equipment between floors.' },
                { title: 'Loading Zone', desc: 'A dedicated unloading zone is available for receiving deliveries. Equipment for moving cargo is also provided.' }
            ],

            availableIntro: 'We offer various formats of commercial premises.',
            availableTitle: 'Space Formats',
            availableSpaces: [
                { title: 'Retail Spaces', desc: 'From 50 m² for shops and retail. Spaces can be adapted to your business format, with partitions available if needed.' },
                { title: 'Warehouse Spaces', desc: 'For storing goods, inventory, and logistics operations.' },
                { title: 'Commercial Spaces', desc: 'For service companies, offices, and client-facing operations.' }
            ],
            infraItems: [
                { label: 'Parking', value: 'over 50 spots' },
                { label: 'Cargo Lift', value: 'for transporting bulky goods' },
                { label: 'Loading Zone', value: 'convenient dock for deliveries' },
                { label: 'Internet', value: 'high-speed internet for business' }
            ],
            termItems: [
                { label: 'Minimum lease term', value: 'from 11 months' },
                { label: 'Deposit', value: '1 month' },
                { label: 'Rent-free period', value: 'discussed individually' },
                { label: 'Layout', value: 'option to partition spaces' }
            ],
            targetTitle: 'Who are the spaces for',
            targetDesc: 'MALIKA Shopping Center premises suit various business formats:',
            targetItems: [
                { title: 'Shops & retail', desc: 'Auto goods, home goods, specialized retail.' },
                { title: 'Service companies', desc: 'Repair, maintenance, household and commercial services.' },
                { title: 'Warehouse & logistics', desc: 'Goods storage, inventory, supply chain operations.' }
            ],
            processTitle: 'How to become a tenant',
            processSteps: [
                { title: 'Submit a request', desc: 'Contact us via the website or by phone.' },
                { title: 'Choose a space', desc: 'We will suggest suitable options and arrange a viewing.' },
                { title: 'Sign the lease', desc: 'Once terms are agreed, the lease agreement is signed.' },
                { title: 'Start working', desc: 'The space is adapted to your business needs.' }
            ],
            formTitle: 'Interested in rental?',
            formDesc: 'Leave a request and we will contact you to discuss available spaces and lease terms.'
        },
        rentHero: {
            title: 'Rental of Premises',
            subtitle: 'MALIKA Shopping Center',
            heroFeatures: 'Spaces from 50 m² for shops, auto goods, service companies, and commercial projects.',
            heroTags: 'Flexible layout · Easy access · Delivery conditions',
            mainTitle: '',
            mainDesc: '',
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
            phone: 'Phone: +7 (700) 305-35-36',
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
            heroTitle: 'Shops & Services at MALIKA',
            heroDesc: 'Auto parts, equipment, home goods, household services, and a medical center — all in one place.',
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
