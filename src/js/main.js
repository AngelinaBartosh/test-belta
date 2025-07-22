const translations = {
    ru: {
        "about_company": "О предприятии",
        "branches": "Филиалы",
        "services": "Услуги",
        "citizensAppeals": "Обращения граждан",
        "ownerComplaints": "Владельцу тктс",
        "tollRoads": "Паромные переправы",
        "normativeActs": "Нормативные акты",
        "contacts": "Контакты",
        "name": "Название организации",
        "page_title": "Тест БелТа",
        "slide_1_title": "Мы крупнейшее дорожное предприятие, работающее на автомобильных дорогах, улицах  городов и малых населённых пунктов",
        "slide_1_slogan": "Наши дороги - Ваше спокойствие!",
        "banner_1_title": "Согласование проезда",
        "banner_1_text": "Дорожное управление",
        "banner_2_title": "Согласование пСД И ТУ",
        "banner_2_text": "технический отдел",
        "banner_3_title": "Дежурный по согласлванию дорог и мостов",
        "banner_4_title": "Продажа продукции",
        "products": "Продукция",
        "product_1": "Щебёночные материалы",
        "product_2": "Песок",
        "product_3": "Асфальтобетон",
        "product_4": "Плитка тротуарная, бордюр",
        "product_5": "ЖБИ, цементные растворы, фундаменты",
        "viewAll": "Посмотреть все",
        "collapse": "Скрыть",
        "search": "Поиск",
        "paragraph_1": "Пункт 1",
        "paragraph_2": "Пункт 2",
        "paragraph_3": "Пункт 3",
        "paragraph_4": "Пункт 4",
        "burger_title": "Мы крупнейшее дорожное предприятие"
    },
    be: {
        "about_company": "Пра прадпрыемства",
        "branches": "Філіялы",
        "services": "Паслугі",
        "citizensAppeals": "Звароты грамадзян",
        "ownerComplaints": "Уладальніку ТКЦС",
        "tollRoads": "Паромныя пераправы",
        "normativeActs": "Нарматыўныя акты",
        "contacts": "Кантакты",
        "name": "Назва арганізацыі",
        "page_title": "Тэст БелТа",
        "slide_1_title": "Мы найбуйнейшае дарожнае прадпрыемства, якое працуе на аўтамабільных дарогах, вуліцах гарадоў і малых населеных пунктаў",
        "slide_1_slogan": "Нашы дарогі - Ваш спакой!",
        "banner_1_title": "Узгадненне праезду",
        "banner_1_text": "Дарожнае ўпраўленне",
        "banner_2_title": "Узгадненне ПСД і ТУ",
        "banner_2_text": "тэхнічны аддзел",
        "banner_3_title": "Дзяжурны па ўзгадненні дарог і мастоў",
        "banner_4_title": "Продаж прадукцыі",
        "products": "Прадукцыя",
        "product_1": "Шчабянёвыя матэрыялы",
        "product_2": "Пясок",
        "product_3": "Асфальтабетон",
        "product_4": "Плітка тратуарная, бордюр",
        "product_5": "ЖБВ, цэментныя растворы, падмуркі",
        "viewAll": "Глядзець усе",
        "collapse": "Схаваць",
        "search": "Пошук",
        "paragraph_1": "Пункт 1",
        "paragraph_2": "Пункт 2",
        "paragraph_3": "Пункт 3",
        "paragraph_4": "Пункт 4",
        "burger_title": "Мы найбуйнейшае дарожнае прадпрыемства"
    }
};

document.addEventListener('DOMContentLoaded', function() {
    let currentLang = localStorage.getItem('language') ||
        document.querySelector('.lang-option.active')?.dataset.lang ||
        'be';

    function applyTranslations(lang) {
        console.log("Applying translations for language: " + lang);
        const langData = translations[lang];
        if (!langData) {
            console.error(`Translation data not found for language: ${lang}`);
            return;
        }
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (key && langData[key]) {
                element.textContent = langData[key];
            } else {
                console.warn(`Missing translation for key: ${key} in language: ${lang}`);
            }
        });

        if (langData['page_title']) {
            document.title = langData['page_title'];
        }
    }

    function switchLanguage(lang) {
        if (lang === currentLang) return;
        if (!translations[lang]) {
            console.error(`Language ${lang} not found in translations`);
            return;
        }
        applyTranslations(lang);
        currentLang = lang;
        localStorage.setItem('language', lang);

        document.querySelectorAll('.lang-option').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
    }

    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            switchLanguage(this.dataset.lang);
        });
    });

    const toggleBtn = document.getElementById('toggleProductsBtn');
    const additionalProducts = document.querySelector('.additional-products');
    const translationsBtn = {
        viewAll: 'Посмотреть все',
        collapse: 'Свернуть'
    };

    if (toggleBtn && additionalProducts) {
        toggleBtn.addEventListener('click', function() {
            if (additionalProducts.classList.contains('show')) {
                additionalProducts.classList.remove('show');
                toggleBtn.setAttribute('data-translate', 'viewAll');
                toggleBtn.textContent = translationsBtn.viewAll;
            } else {
                additionalProducts.classList.add('show');
                toggleBtn.setAttribute('data-translate', 'collapse');
                toggleBtn.textContent = translationsBtn.collapse;
            }
        });
    }

    applyTranslations(currentLang);

    const radioButtons = document.querySelectorAll('input[name="radio-btn"]');
    const navButtons = document.querySelectorAll('.promo-block-navigation-btn');

    function updateActiveButton() {
        navButtons.forEach((btn, index) => {
            if (radioButtons[index].checked) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    updateActiveButton();

    radioButtons.forEach(radio => {
        radio.addEventListener('change', updateActiveButton);
    });

    const infoRadioButtons = document.querySelectorAll('input[name="info-radio-btn"]');
    const infoNavButtons = document.querySelectorAll('.info-block-navigation-btn');

    function updateInfoActiveButton() {
        infoNavButtons.forEach((btn, index) => {
            if (infoRadioButtons[index].checked) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    updateInfoActiveButton();

    infoRadioButtons.forEach(radio => {
        radio.addEventListener('change', updateInfoActiveButton);
    });

    const burgerButton = document.getElementById('burgerButton');
    const burgerCloseButton = document.getElementById('burgerCloseButton');

    const dropdownMenu = document.querySelector('.nav-burger-dropdown-parent');
    if (dropdownMenu) {
        dropdownMenu.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }

    burgerButton.addEventListener('click', function(e) {
        e.preventDefault();

        this.classList.toggle('active');

        if (dropdownMenu) {
            dropdownMenu.classList.toggle('active');
        }

        e.stopPropagation();
    });

    burgerCloseButton.addEventListener('click', function(e) {
        e.preventDefault();

        if (dropdownMenu) {
            dropdownMenu.classList.remove('active');
        }

        e.stopPropagation();
    });

    document.addEventListener('click', function() {
        burgerButton.classList.remove('active');

        if (dropdownMenu) {
            dropdownMenu.classList.remove('active');
        }
    });

});