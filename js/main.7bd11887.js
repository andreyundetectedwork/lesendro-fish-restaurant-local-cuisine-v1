/**
 * Lesendro Fish Restaurant - Main Script
 * Multi-language support (sr, en, ru) & UI Interactions
 */

document.addEventListener('DOMContentLoaded', () => {

  // --- Translation Dictionary ---
  const translations = {
    sr: {
      nav_about: "O nama",
      nav_menu: "Meni",
      nav_reviews: "Recenzije",
      nav_location: "Lokacija",
      call_us: "Pozovite",
      
      hero_reviews: "recenzija",
      hero_title: "Autentični ukusi rijeke i jezera na samoj obali",
      hero_subtitle: "Tradicija Skadarskog jezera, svježa riba i opuštajući ambijent uz vode Vranjine.",
      hero_cta_menu: "Pogledajte Meni",
      hero_cta_call: "Rezervišite Sto",
      hours_daily: "Svaki dan: 12:00 – 22:00",
      
      about_tag: "Ambijent & Tradicija",
      about_title: "Uživajte u obroku uz šum vode i blagi povjetarac",
      about_desc: "Smješten u srce Vranjine na Skadarskom jezeru, Lesendro Fish Restaurant spaja tradicionalnu domaću kuhinju, svježe ulovljenu ribu i jedinstveni miris prirode. Domaći specijaliteti spremljeni po starim recepturama daju nezaboravan doživljaj svakom gostu.",
      feat_1_title: "Domaća Kuhinja",
      feat_1_text: "Autentična lokalna jela spremljena sa ljubavlju i pažnjom.",
      feat_2_title: "Svjež Ulov",
      feat_2_text: "Krap, pastrmka i jegulja iz čistih voda našeg kraja.",
      
      banner_quote_text: "Pravi lokalni ugođaj, svježa jegulja i krap spremljeni na tradicionalan način, uz pogled koji oduzima dah.",
      
      menu_tag: "Naša Ponuda",
      menu_title: "Jela Sa Našeg Menija",
      menu_subtitle: "Svi specijaliteti se pripremaju od svježih sastojaka",
      cat_fish_title: "Riječni i Morski Specijaliteti",
      cat_sides_title: "Prilozi i Domaća Predjela",
      market_price: "Po ponudi",
      menu_banner_note: "Pravilno izabrani prilozi i topli hljeb upotpunjuju svaki zalogaj.",

      item_1_name: "Jegulja",
      item_1_desc: "Tradicionalno pripremljena jegulja u sosu od limuna i mirisnog začinskog bilja.",
      item_2_name: "Pastrmka",
      item_2_desc: "Svježa riječna pastrmka na žaru sa limunom i svježim biljem.",
      item_3_name: "Skadarski Krap",
      item_3_desc: "Autentični jezerski krap pripremljen po tradicionalnoj domaćoj recepturi.",
      item_4_name: "Losos na Žaru",
      item_4_desc: "Bogati filet lososa pečen na žaru, sočan i pun ukusa.",
      item_5_name: "Riblji Specijalitet Mix za Dvoje",
      item_5_desc: "Odabir najfinije ribe poslužen uz domaći sos od limuna i mediteranskog bilja.",
      item_6_name: "Povrće na Žaru",
      item_6_desc: "Svježe sezonsko povrće pečeno na roštilju.",
      item_7_name: "Domaći Hljeb",
      item_7_desc: "Topao, svježe pečen hljeb sa hrskavom koricom – savršen za preliv od limuna.",
      item_8_name: "Domaći Sir",
      item_8_desc: "Izbor tradicionalnog lokalnog sira.",

      reviews_tag: "Utisci Gostiju",
      reviews_title: "Šta Kažu Naši Posjetioci",
      google_reviews: "Google recenzija",

      review_1_text: "Lesendro Fish Restaurant je bilo jedno od najboljih mjesta koja smo posjetili u Crnoj Gori za svježu ribu. Probali smo jegulju i pastrmku — obije su bile odlične! Terasa na samom jezeru pruža nevjerovatan pogled.",
      review_2_text: "Apsolutno izvanredno. Jedno od najboljih ribljih jela koja sam ikada jeo. Uzeli smo riblji specijalitet mix za dvoje. Ukus je bio vrhunski, a vrijednost za novac odlična. Obavezno uzmite hljeb da upijete sos.",
      review_3_text: "Apsolutno divno! Usluga je bila divna, a hrana svježa i ukusna. Imali smo lososa, povrće na žaru, hljeb i sir. Losos je bio ogroman, dovoljan za sve nas!",
      review_4_text: "Ako želite da doživite autentičnu domaću tradicionalnu kuhinju, samo dođite na ovo mjesto, prepustite se domaćinima i uživajte! Moja preporuka je Krap!",

      location_tag: "Dobrodošli",
      location_title: "Kako Do Nas",
      info_address_title: "Adresa",
      info_phone_title: "Telefon za rezervacije",
      info_hours_title: "Radno Vrijeme",
      hours_schedule: "Ponedjeljak – Nedjelja: 12:00 – 22:00",
      btn_call_direct: "Pozovite Odmah",
      footer_desc: "Fish Restaurant (Local Cuisine) – Vranjina, Montenegro"
    },

    en: {
      nav_about: "About",
      nav_menu: "Menu",
      nav_reviews: "Reviews",
      nav_location: "Location",
      call_us: "Call Us",
      
      hero_reviews: "reviews",
      hero_title: "Authentic river & lake dining right on the shore",
      hero_subtitle: "Skadar Lake tradition, fresh fish, and a soothing breeze in Vranjina.",
      hero_cta_menu: "View Menu",
      hero_cta_call: "Reserve a Table",
      hours_daily: "Mon - Sun: 12:00 PM – 10:00 PM",
      
      about_tag: "Ambiance & Tradition",
      about_title: "Enjoy your meal accompanied by water waves & sea breeze",
      about_desc: "Located in the heart of Vranjina on Lake Skadar, Lesendro Fish Restaurant combines authentic local cuisine, freshly caught fish, and serene natural surroundings. Traditional recipes served with warm hospitality.",
      feat_1_title: "Local Cuisine",
      feat_1_text: "Authentic recipes crafted with care and tradition.",
      feat_2_title: "Fresh Catch",
      feat_2_text: "Carp, trout, and eel from clean local waters.",
      
      banner_quote_text: "Authentic local atmosphere, fresh eel & carp cooked traditionally with breathtaking lake views.",
      
      menu_tag: "Our Menu",
      menu_title: "Signature Dishes",
      menu_subtitle: "All dishes are cooked fresh to order",
      cat_fish_title: "Freshwater & Seafood Specialties",
      cat_sides_title: "Sides & Local Starters",
      market_price: "Market Price",
      menu_banner_note: "Fresh homemade bread and sides complete every signature fish dish.",

      item_1_name: "Skadar Eel",
      item_1_desc: "Traditionally cooked eel served with lemon & Mediterranean herb sauce.",
      item_2_name: "Fresh Trout",
      item_2_desc: "Fresh grilled trout served with lemon and fragrant herbs.",
      item_3_name: "Traditional Carp (Krap)",
      item_3_desc: "Authentic Lake Skadar carp cooked by traditional home recipe.",
      item_4_name: "Grilled Salmon",
      item_4_desc: "Generous salmon fillet grilled to perfection, juicy and flavorful.",
      item_5_name: "Fish Specialty Mix for Two",
      item_5_desc: "A selection of fine fish served with signature lemon & herb sauce.",
      item_6_name: "Grilled Vegetables",
      item_6_desc: "Fresh seasonal grilled vegetables.",
      item_7_name: "Homemade Bread",
      item_7_desc: "Warm freshly baked bread with crispy crust – ideal for soaking up lemon sauce.",
      item_8_name: "Local Cheese",
      item_8_desc: "A selection of authentic traditional local cheese.",

      reviews_tag: "Guest Feedback",
      reviews_title: "What Visitors Say",
      google_reviews: "Google reviews",

      review_1_text: "Lesendro Fish Restaurant was one of the best places we visited in Montenegro for fresh fish. We tried the eel and trout, and both were excellent! The terrace right in front of the lake offered an amazing view.",
      review_2_text: "Absolutely outstanding. One of the best fish dishes I have ever had. We had the fish specialty mix for two. It tasted superb and was excellent value for money. Make sure you get some bread to soak up the sauce.",
      review_3_text: "Absolutely wonderful! The service was lovely, and the food was fresh and delicious. We had the salmon, grilled vegetables, bread, and cheese. The salmon was huge — could have fed 4!",
      review_4_text: "If you want to experience authentic homemade traditional cuisine, just come to this place, let the hosts take care of you, and enjoy! I would recommend Krap!",

      location_tag: "Welcome",
      location_title: "Find Us",
      info_address_title: "Address",
      info_phone_title: "Reservation Phone",
      info_hours_title: "Opening Hours",
      hours_schedule: "Monday – Sunday: 12:00 PM – 10:00 PM",
      btn_call_direct: "Call Now",
      footer_desc: "Fish Restaurant (Local Cuisine) – Vranjina, Montenegro"
    },

    ru: {
      nav_about: "О нас",
      nav_menu: "Меню",
      nav_reviews: "Отзывы",
      nav_location: "Локация",
      call_us: "Позвонить",
      
      hero_reviews: "отзывов",
      hero_title: "Аутентичная рыбная кухня на самом берегу озера",
      hero_subtitle: "Традиции Скадарского озера, свежая рыба и умиротворяющая атмосфера Враньины.",
      hero_cta_menu: "Смотреть Меню",
      hero_cta_call: "Забронировать Стол",
      hours_daily: "Пн - Вс: 12:00 – 22:00",
      
      about_tag: "Атмосфера & Традиции",
      about_title: "Наслаждайтесь обедом под легкий бриз и плеск воды",
      about_desc: "Ресторан Lesendro расположен в самом сердце Враньины на берегу Скадарского озера. Мы объединяем традиционную домашнюю кухню, свежевыловленную рыбу и уютную атмосферу.",
      feat_1_title: "Домашняя Кухня",
      feat_1_text: "Аутентичные блюда, приготовленные по традиционным рецептам.",
      feat_2_title: "Свежий Улов",
      feat_2_text: "Карп, форель и угорь из чистейших вод региона.",
      
      banner_quote_text: "Настоящий местный колорит, свежайший угорь и карп с захватывающим видом на озёрную гладь.",
      
      menu_tag: "Наше Меню",
      menu_title: "Блюда Ресторана",
      menu_subtitle: "Все блюда готовятся исключительно из свежих ингредиентов",
      cat_fish_title: "Рыбные Специалитеты",
      cat_sides_title: "Гарниры и Закуски",
      market_price: "По запросу",
      menu_banner_note: "Свежеипеченный хлеб и традиционные соусы идеально дополняют вкус рыбы.",

      item_1_name: "Скадарский Угорь",
      item_1_desc: "Традиционно приготовленный угорь с лимонно-травяным соусом.",
      item_2_name: "Свежая Форель",
      item_2_desc: "Речная форель на гриле со свежей зеленью и лимоном.",
      item_3_name: "Традиционный Карп (Krap)",
      item_3_desc: "Аутентичный карп из Скадарского озера по домашнему рецепту.",
      item_4_name: "Лосось на Гриле",
      item_4_desc: "Сочный филе-лосось, обжаренный на углях.",
      item_5_name: "Рыбный Микс-Специалитет на Двоих",
      item_5_desc: "Ассорти из свежей рыбы с фирменным лимонно-травяным соусом.",
      item_6_name: "Овощи на Гриле",
      item_6_desc: "Свежие сезонные овощи, обжаренные на углях.",
      item_7_name: "Домашний Хлеб",
      item_7_desc: "Теплый хлеб с хрустящей корочкой — идеально для соуса.",
      item_8_name: "Домашний Сыр",
      item_8_desc: "Подборка традиционных местных сыров.",

      reviews_tag: "Отзывы Гостей",
      reviews_title: "Что Говорят Посетители",
      google_reviews: "отзывов в Google",

      review_1_text: "Lesendro Fish Restaurant — одно из лучших мест в Черногории, где мы пробовали свежую рыбу. Заказывали угря и форель — оба блюда отличные! Терраса прямо у озера создает невероятный вид.",
      review_2_text: "Совершенно потрясающе! Одно из лучших рыбных блюд, что я пробовал. Мы брали рыбный микс на двоих. Вкус великолепный, цена отличная. Обязательно возьмите хлеб для соуса.",
      review_3_text: "Абсолютно чудесно! Замечательное обслуживание, еда свежая и вкусная. Порция лосося была огромной, хватило на всех!",
      review_4_text: "Если вы хотите ощутить настоящую домашнюю традиционную кухню — просто приходите сюда, доверьтесь хозяевам и наслаждайтесь! Особенно рекомендую карпа (Krap)!",

      location_tag: "Добро Пожаловать",
      location_title: "Как Нас Найти",
      info_address_title: "Адрес",
      info_phone_title: "Телефон для брони",
      info_hours_title: "Часы работы",
      hours_schedule: "Понедельник – Воскресенье: 12:00 – 22:00",
      btn_call_direct: "Позвонить Сейчас",
      footer_desc: "Fish Restaurant (Local Cuisine) – Vranjina, Montenegro"
    }
  };

  // --- State & Language Switching ---
  let currentLang = 'sr';

  const langButtons = document.querySelectorAll('.lang-btn');
  const i18nElements = document.querySelectorAll('[data-i18n]');

  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    document.documentElement.lang = lang;

    // Update Language Buttons Active State
    langButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Translate DOM elements
    i18nElements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
  }

  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.dataset.lang);
    });
  });

  // --- Sticky Header Shadow on Scroll ---
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // --- Mobile Navigation Toggle ---
  const mobileToggle = document.getElementById('mobileToggle');
  const mainNav = document.getElementById('mainNav');

  mobileToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
  });

  // Close mobile nav when link clicked
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('active');
    });
  });

  // Set Current Year in Footer
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

});