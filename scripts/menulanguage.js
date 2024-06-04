document.addEventListener('DOMContentLoaded', () => {

    function setLanguageCookie(language, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = "selectedLang=" + language + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    const selectedLang = getCookie('selectedLang');

    const languageBtn = document.getElementById('language-btn');
    const languageOptions = document.getElementById('language-options');
    const langOptions = document.querySelectorAll('.lang-option');

    languageBtn.addEventListener('click', () => {
        languageOptions.style.display = languageOptions.style.display === 'none' ? 'block' : 'none';
        languageBtn.style.display = languageBtn.style.display === 'none' ? 'block' : 'none';
    });

    langOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            const selectedLang = e.target.getAttribute('data-lang');
            setLanguageCookie(selectedLang);
            applyTranslations(selectedLang);
            languageOptions.style.display = 'none';
            languageBtn.style.display = 'block';
        });
    });

    document.addEventListener('click', (event) => {
        const isClickInside = languageOptions.contains(event.target) || languageBtn.contains(event.target);
        if (!isClickInside) {
            languageOptions.style.display = 'none';
            languageBtn.style.display = "block";
        }
    });

    const translations = {
        en: {
            setting: "en",
            dir: "ltr",

            navHome: "Home",
            openFranchise: "Franchise",
            openAboutus: "About Us",
            navMap: "Find Nearest",
            navUber: "Order on UberEats",
            navSTD: "Order on SkipTheDishes",

            gomanoushe: "Go Man'oushé",
            subtext1: "Lebanese Delicacies",
            gosalty: "Go Salty",
            gosalty1: "Zaatar <span>$4.49</span>",
            gosalty2: "Zaatar 'n Chips <span>$5.49</span>",
            gosalty3: "Zaatar 'n Cheese <span>$6.99</span>",
            gosalty4: "Zaatar 'n Veggies <span>$6.49</span>",
            gosalty5: "Zaatar 'n Labneh <span>$8.49</span>",
            gosalty6: "Cheese <span>$6.49</span>",
            gosalty7: "Cheese 'n Pesto <span>$7.49</span>",
            gosalty8: "Spicy Cheese <span>$7.99</span>",
            gosalty9: "Labneh 'n Veggies <span>$6.49</span>",
            gosalty10: "Labneh 'n Cheetos <span>$3.49</span>",
            gosalty11: "Soujouk 'n Cheese <span>$8.49</span>",
            gosalty12: "Turkey, Pesto 'n Cheese <span>$12.49</span>",
            gosalty13: "Keshek <span>$5.98</span>",

            gosweet: "Go Sweet",
            gosweet1: "Choco Banane <span>$7.99</span>",
            gosweet2: "Cheestachio <span>$11.99</span>",
            gosweet3: "Cheese On Date <span>$7.99</span>",


            golahmajoon: "Go Lahmajoon",
            subtext2: "Lebanese Kitchen Treasures",
            gomeat: "Go Meat",
            gomeat1: "Lahmajoon <span>$3.99</span>",
            gomeat2: "Debessjoon <span>$3.99</span>",
            gomeat3: "Jalapeñojoon <span>$5.99</span>",

            gochicken: "Go Chicken",
            gochicken1: "Butter Chickenjoon <span>$3.99</span>",

            goveggie: "Go Vegetarian",
            goveggie1: "Keshekjoon <span>$3.99</span>",

            gokaake: "Go Kaaké",
            subtext3: "Lebanese Street Bite",
            go2salty: "Go Salty",
            go2salty1: "Lebanese Zaatar 'n Tomato <span>$6.49</span>",
            go2salty2: "Lebanese Zaatar 'n Chips <span>$6.99</span>",
            go2salty3: "Akkawi Cheese 'n Sumac <span>$7.99</span>",
            go2salty4: "4 Cheese <span>$9.99</span>",
            go2salty5: "Halloumi Cheese 'n Pesto <span>$9.99</span>",
            go2salty6: "Labneh 'n Veggies <span>$6.99</span>",
            go2salty7: "Labneh 'n Makdousss <span>$7.99</span>",
            go2salty8: "Turkey 'n Cheese <span>$10.99</span>",
            go2salty9: "Soujouk <span>$7.99</span>",
            go2salty10: "Soujouk 'n Cheese <span>$8.99</span>",
            go2salty11: "Basterma <span>$11.99</span>",
            go2salty12: "Basterma 'n Cheese <span>$12.99</span>",

            go2sweet: "Go Sweet",
            go2sweet1: "Choco Banane <span>$7.99</span>",
            go2sweet2: "Halawa Banane <span>$7.99</span>",
            go2sweet3: "Peanut Butter Banane <span>$7.99</span>",
            go2sweet4: "Halawa 'n Cream Cheese <span>$7.99</span>",
            go2sweet5: "Carob Molasses Mix 'n Cheese <span>$8.99</span>",
            go2sweet6: "Dry Fig Jam 'n Cheese <span>$8.99</span>",
            go2sweet7: "Nutty Dry Fig Jam <span>$8.99</span>",

            goextra: "Go Extra",
            sipsadditions: "Sips & Additions",
            addons: "Go Add-Ons",
            addons1: "Mint Leaves <span>$0.49</span>",
            addons2: "Amba <span>$0.49</span>",
            addons3: "Cheese <span>$0.99</span>",
            addons4: "Pomegranate Molasses <span>Free</span>",
            addons5: "Pickles <span>$0.49</span>",
            addons6: "Tomato <span>$0.49</span>",
            addons7: "Lemon Juice <span>Free</span>",
            addons8: "Cayenne Pepper <span>Free</span>",

            onthego: "On The Go",
            chestnuts: "Organic Lebanese Chestnuts",
            chestnuts1: "Medium <span>$4.99</span>",
            chestnuts2: "Large <span>$7.99</span>",

            godrinks: "Go Drinks",
            godrinks1: "Soda <span>$1.99</span>",
            godrinks2: "Ayran <span>$3.00</span>",
            godrinks3: "Bonjus <span>$1.50</span>",
            godrinks4: "Water <span>$1.50</span>",
            godrinks5: "Tea <span>$1.99</span>",


            franchiseTitle: "Our potential franchise should:",
            franchiseReq1: "- Have access to a suitable location",
            franchiseReq2: "- Be able to invest",
            franchiseReq3: "- Have the passion to expand the brand",
            franchiseReq4: "- Be an experienced manager of a successful business and possess adequate resources (People, connection, knowledge)",
            franchiseReq5: "- Be ready to accept and meet our brand standards",
            franchiseInterest: "Interested?",
            franchiseEmail: "Email us: godough@gmail.com",

            aboutTitle: "About Go Dough and the Owners behind it",
            aboutText1: "Welcome to Go Dough, where tradition meets innovation in the heart of Canada. Our journey began in the bustling streets of Tripoli, Lebanon, where generations of traditions and recipes have been passed down. Faced with economic hardships, we made the difficult decision to leave everything behind and seek a new beginning in Canada, following the path laid by our sons.",
            aboutText2: "Despite the challenges of starting anew in a foreign land, one thing remained constant: our dream of sharing the flavors of Lebanon with the world. We knew that opening a bakery was not just a business venture for us; it was a way to preserve our heritage, connect with our community, and introduce Canadians to the rich culinary traditions of our homeland.",
            aboutText3: "To ensure that our offerings were truly authentic, we embarked on a journey of discovery and learning. We traveled across Lebanon, from the bustling markets of Beirut to the charming streets of Tripoli, seeking out the best ingredients and techniques. We studied under master bakers who have been perfecting their craft for generations, gathered inspiration from local artisans, honing our skills and refining our recipes to bring you the most delicious and authentic Lebanese delicacies.",
            aboutText4: "At Go Dough, we pride ourselves on our commitment to quality and authenticity. Our kaaké and man'oushé are made using traditional methods and recipes passed down through generations, ensuring that each bite is a taste of Lebanon. But we also believe in innovation, and we are constantly exploring new flavors and ideas to keep our menu fresh and exciting.",
            aboutText5: "Since opening our doors in the dusk of 2023, we have been overwhelmed by the warm reception from the community. We are grateful for the opportunity to share a piece of our culture with you and look forward to welcoming you to Go Dough, where every bite tells a story of tradition, passion, and love.",

            copyright: "© 2024 Right Reserved",
            location: "Location",
            followUs: "Follow Us"
        },
        fr: {
            setting: "fr",
            dir: "ltr",

            navHome: "Acceuil",
            openFranchise: "Franchise",
            openAboutus: "À propos de nous",
            navMap: "Trouver le plus proche",
            navUber: "Commander sur UberEats",
            navSTD: "Commander sur SkipTheDishes",

            gomanoushe: "Go Man'oushé",
            subtext1: "Délices Libanais",
            gosalty: "Go Salé",
            gosalty1: "Zaatar <span>$4.49</span>",
            gosalty2: "Zaatar et Chips <span>$5.49</span>",
            gosalty3: "Zaatar et Fromage <span>$6.99</span>",
            gosalty4: "Zaatar et Légumes <span>$6.49</span>",
            gosalty5: "Zaatar et Labneh <span>$8.49</span>",
            gosalty6: "Fromage <span>$6.49</span>",
            gosalty7: "Fromage et Pesto <span>$7.49</span>",
            gosalty8: "Fromage Épicé <span>$7.99</span>",
            gosalty9: "Labneh et Légumes <span>$6.49</span>",
            gosalty10: "Labneh et Cheetos <span>$3.49</span>",
            gosalty11: "Soujouk et Fromage <span>$8.49</span>",
            gosalty12: "Dinde, Pesto et Fromage <span>$12.49</span>",
            gosalty13: "Keshek <span>$5.98</span>",
            gosweet: "Go Sucré",
            gosweet1: "Choco Banane <span>$7.99</span>",
            gosweet2: "Cheestachio <span>$11.99</span>",
            gosweet3: "Fromage Sur Date <span>$7.99</span>",

            golahmajoon: "Go Lahmajoon",
            subtext2: "Trésors de la Cuisine Libanaise",
            gomeat: "Viande",
            gomeat1: "Lahmajoon <span>$3.99</span>",
            gomeat2: "Debessjoon <span>$3.99</span>",
            gomeat3: "Jalapeñojoon <span>$5.99</span>",

            gochicken: "Poulet",
            gochicken1: "Poulet au Beurre <span>$3.99</span>",

            goveggie: "Végétarien",
            goveggie1: "Keshekjoon <span>$3.99</span>",

            gokaake: "Go Kaaké",
            subtext3: "Bouchée de Rue Libanaise",
            go2salty: "Salé",
            go2salty1: "Tomate et Zaatar Libanais <span>$6.49</span>",
            go2salty2: "Chips et Zaatar Libanais <span>$6.99</span>",
            go2salty3: "Akkawi et Sumac <span>$7.99</span>",
            go2salty4: "4 Fromages <span>$9.99</span>",
            go2salty5: "Halloumi et Pesto <span>$9.99</span>",
            go2salty6: "Labneh et Légumes <span>$6.99</span>",
            go2salty7: "Labneh et Makdousss <span>$7.99</span>",
            go2salty8: "Dinde et Fromage <span>$10.99</span>",
            go2salty9: "Soujouk <span>$7.99</span>",
            go2salty10: "Soujouk et Fromage <span>$8.99</span>",
            go2salty11: "Basterma <span>$11.99</span>",
            go2salty12: "Basterma et Fromage <span>$12.99</span>",

            go2sweet: "Sucré",
            go2sweet1: "Choco Banane <span>$7.99</span>",
            go2sweet2: "Halawa Banane <span>$7.99</span>",
            go2sweet3: "Peanut Butter Banane <span>$7.99</span>",
            go2sweet4: "Halawa et Fromage <span>$7.99</span>",
            go2sweet5: "Mélange de Mélasse de Caroube et Fromage <span>$8.99</span>",
            go2sweet6: "Confiture de Figues Sèches et Fromage <span>$8.99</span>",
            go2sweet7: "Confiture de Figues Sèches aux Noix <span>$8.99</span>",

            goextra: "Extra",
            sipsadditions: "Sips & Additions",
            addons: "Add-Ons",
            addons1: "Feuilles de Menthe <span>$0.49</span>",
            addons2: "Amba <span>$0.49</span>",
            addons3: "Fromage <span>$0.99</span>",
            addons4: "Mélasse de Grenade <span>Gratuit</span>",
            addons5: "Cornichons <span>$0.49</span>",
            addons6: "Tomate <span>$0.49</span>",
            addons7: "Jus de Citron <span>Gratuit</span>",
            addons8: "Poivre de Cayenne <span>Gratuit</span>",

            onthego: "En Déplacement",
            chestnuts: "Châtaignes Libanaises Bio",
            chestnuts1: "Moyennes <span>$4.99</span>",
            chestnuts2: "Grandes <span>$7.99</span>",

            godrinks: "Boissons",
            godrinks1: "Soda <span>$1.99</span>",
            godrinks2: "Ayran <span>$3.00</span>",
            godrinks3: "Bonjus <span>$1.50</span>",
            godrinks4: "Eau <span>$1.50</span>",
            godrinks5: "Thé <span>$1.99</span>",


            franchiseTitle: "Notre franchise potentielle devrait :",
            franchiseReq1: "- Avoir accès à un emplacement adapté",
            franchiseReq2: "- Être capable d'investir",
            franchiseReq3: "- Avoir la passion d'étendre la marque",
            franchiseReq4: "- Être un gestionnaire expérimenté d'une entreprise prospère et posséder des ressources adéquates (personnes, connexions, connaissances)",
            franchiseReq5: "- Être prêt à accepter et à respecter nos normes de marque",
            franchiseInterest: "Intéressé ?",
            franchiseEmail: "Envoyez-nous un courriel : godough@gmail.com",

            aboutTitle: "À propos de Go Dough et des propriétaires",
            aboutText1: "Bienvenue à Go Dough, où la tradition rencontre l'innovation au cœur du Canada. Notre voyage a commencé dans les rues animées de Tripoli, au Liban, où des générations de traditions et de recettes se sont transmises. Face aux difficultés économiques, nous avons pris la décision difficile de tout quitter et de chercher un nouveau départ au Canada, en suivant la voie tracée par nos fils.",
            aboutText2: "Malgré les défis de repartir à zéro dans un pays étranger, une chose est restée constante : notre rêve de partager les saveurs du Liban avec le monde. Nous savions qu'ouvrir une boulangerie n'était pas seulement une entreprise pour nous ; c'était un moyen de préserver notre patrimoine, de nous connecter avec notre communauté et d'introduire les Canadiens aux riches traditions culinaires de notre pays d'origine.",
            aboutText3: "Pour garantir que nos offres soient véritablement authentiques, nous nous sommes lancés dans un voyage de découverte et d'apprentissage. Nous avons parcouru le Liban, des marchés animés de Beyrouth aux charmantes rues de Tripoli, à la recherche des meilleurs ingrédients et techniques. Nous avons étudié sous la direction de maîtres boulangers qui perfectionnent leur art depuis des générations, nous avons rassemblé l'inspiration auprès d'artisans locaux, perfectionnant nos compétences et affinant nos recettes pour vous offrir les délicatesses libanaises les plus délicieuses et authentiques.",
            aboutText4: "Chez Go Dough, nous sommes fiers de notre engagement envers la qualité et l'authenticité. Nos kaaké et man'oushé sont préparés selon des méthodes traditionnelles et des recettes transmises de génération en génération, garantissant que chaque bouchée est un goût du Liban. Mais nous croyons aussi en l'innovation, et nous explorons constamment de nouvelles saveurs et idées pour garder notre menu frais et excitant.",
            aboutText5: "Depuis l'ouverture de nos portes à la fin de 2023, nous avons été submergés par l'accueil chaleureux de la communauté. Nous sommes reconnaissants pour l'opportunité de partager un morceau de notre culture avec vous et nous attendons avec impatience de vous accueillir à Go Dough, où chaque bouchée raconte une histoire de tradition, de passion et d'amour.",

            copyright: "© 2024 Tous droits réservés",
            location: "Addresse",
            followUs: "Suivez-nous"
        },
        ar: {
            setting: "ar",
            dir: "rtl",

            navHome: "الرئيسية",
            openFranchise: "الامتياز التجاري",
            openAboutus: "معلومات عنا",
            navMap: "اعثر على الأقرب",
            navUber: "اطلب عبر UberEats",
            navSTD: "اطلب عبر SkipTheDishes",

            gomanoushe: "جو منوشي",
            subtext1: "أطباق لبنانية لذيذة",
            gosalty: "مالح",
            gosalty1: "زعتر <span>$4.49</span>",
            gosalty2: "زعتر وشيبس <span>$5.49</span>",
            gosalty3: "زعتر وجبنة <span>$6.99</span>",
            gosalty4: "زعتر وخضار <span>$6.49</span>",
            gosalty5: "زعتر ولبنة <span>$8.49</span>",
            gosalty6: "جبنة <span>$6.49</span>",
            gosalty7: "جبنة وبيستو <span>$7.49</span>",
            gosalty8: "جبنة حارة <span>$7.99</span>",
            gosalty9: "لبنة وخضار <span>$6.49</span>",
            gosalty10: "لبنة وشيتوس <span>$3.49</span>",
            gosalty11: "سجق وجبنة <span>$8.49</span>",
            gosalty12: "ديك رومي، بيستو وجبنة <span>$12.49</span>",
            gosalty13: "كشك <span>$5.98</span>",
            gosweet: "حلويات",
            gosweet1: "شوكولا بالموز <span>$7.99</span>",
            gosweet2: "تشيستاشيو <span>$11.99</span>",
            gosweet3: "جبنة على التاريخ <span>$7.99</span>",

            golahmajoon: "جو لحمجون",
            subtext2: "كنوز المطبخ اللبناني",
            gomeat: "لحم",
            gomeat1: "لحمجون <span>$3.99</span>",
            gomeat2: "دبسجون <span>$3.99</span>",
            gomeat3: "جالابينوجون <span>$5.99</span>",

            gochicken: "دجاج",
            gochicken1: "دجاج بالزبدة <span>$3.99</span>",

            goveggie: "نباتي",
            goveggie1: "كشكجون <span>$3.99</span>",

            gokaake: "جو كعكة",
            subtext3: "وجبات شارعية لبنانية",
            go2salty: "مالح",
            go2salty1: "زعتر وطماطم لبناني <span>$6.49</span>",
            go2salty2: "زعتر ورقائق بطاطا <span>$6.99</span>",
            go2salty3: "جبنة عكاوي وسماق <span>$7.99</span>",
            go2salty4: "4 أنواع جبن <span>$9.99</span>",
            go2salty5: "جبنة حلومي وصلصة البيستو <span>$9.99</span>",
            go2salty6: "لبنة وخضار <span>$6.99</span>",
            go2salty7: "لبنة ومكدوس <span>$7.99</span>",
            go2salty8: "ديك رومي وجبنة <span>$10.99</span>",
            go2salty9: "سجق <span>$7.99</span>",
            go2salty10: "سجق وجبنة <span>$8.99</span>",
            go2salty11: "بسطرمة <span>$11.99</span>",
            go2salty12: "بسطرمة وجبنة <span>$12.99</span>",

            go2sweet: "حلو",
            go2sweet1: "شوكولاتة وموز <span>$7.99</span>",
            go2sweet2: "حلاوة وفستق <span>$7.99</span>",
            go2sweet3: "زبادي وتمر <span>$7.99</span>",
            go2sweet4: "حلاوة وجبنة قشطة <span>$7.99</span>",
            go2sweet5: "خليط محلى من دبس الخروب والجبنة <span>$8.99</span>",
            go2sweet6: "مربى تين جاف وجبنة <span>$8.99</span>",
            go2sweet7: "مربى تين جاف وجوز <span>$8.99</span>",

            goextra: "إضافيات",
            sipsadditions: "مشروبات وإضافات",
            addons: "إضافات",
            addons1: "أوراق النعناع <span>$0.49</span>",
            addons2: "عمبة <span>$0.49</span>",
            addons3: "جبنة <span>$0.99</span>",
            addons4: "دبس الرمان <span>مجاناً</span>",
            addons5: "مخلل <span>$0.49</span>",
            addons6: "طماطم <span>$0.49</span>",
            addons7: "عصير ليمون <span>مجاناً</span>",
            addons8: "فلفل حار <span>مجاناً</span>",

            onthego: "أثناء التنقل",
            chestnuts: "كستناء لبنانية عضوية",
            chestnuts1: "متوسطة <span>$4.99</span>",
            chestnuts2: "كبيرة <span>$7.99</span>",

            godrinks: "مشروبات",
            godrinks1: "صودا <span>$1.99</span>",
            godrinks2: "عيران <span>$3.00</span>",
            godrinks3: "بونجوس <span>$1.50</span>",
            godrinks4: "ماء <span>$1.50</span>",
            godrinks5: "شاي <span>$1.99</span>",


            franchiseTitle: "يجب أن يكون الامتياز التجاري المحتمل لدينا:",
            franchiseReq1: "- لديه إمكانية الوصول إلى موقع مناسب",
            franchiseReq2: "- قادر على الاستثمار",
            franchiseReq3: "- لديه الشغف لتوسيع العلامة التجارية",
            franchiseReq4: "- مدير متمرس لأعمال ناجحة ويمتلك الموارد الكافية (الأشخاص، الاتصالات، المعرفة)",
            franchiseReq5: "- جاهز لقبول والالتزام بمعايير علامتنا التجارية",
            franchiseInterest: "مهتم؟",
            franchiseEmail: "ارسل لنا بريداً إلكترونياً: godough@gmail.com",

            aboutTitle: "حول Go Dough والمالكين وراءه",
            aboutText1: "مرحبًا بكم في Go Dough، حيث تلتقي التقاليد بالابتكار في قلب كندا. بدأت رحلتنا في شوارع طرابلس المزدحمة بلبنان، حيث تم تناقل الأجيال من التقاليد والوصفات. واجهنا صعوبات اقتصادية، واتخذنا قرارًا صعبًا بترك كل شيء وراءنا والبحث عن بداية جديدة في كندا، متبعين المسار الذي وضعه أبناؤنا.",
            aboutText2: "رغم التحديات التي واجهناها في بدء حياة جديدة في بلد أجنبي، بقي شيء واحد ثابت: حلمنا بمشاركة نكهات لبنان مع العالم. علمنا أن فتح مخبز لم يكن مجرد مشروع تجاري لنا؛ بل كان وسيلة للحفاظ على تراثنا، والتواصل مع مجتمعنا، وتقديم الكنديين إلى التقاليد الطهوية الغنية لبلدنا الأصلي.",
            aboutText3: "لضمان أن تكون عروضنا أصيلة حقًا، بدأنا في رحلة استكشاف وتعلم. سافرنا عبر لبنان، من الأسواق النابضة بالحياة في بيروت إلى شوارع طرابلس الساحرة، بحثًا عن أفضل المكونات والتقنيات. درسنا تحت إشراف الخبازين الأساتذة الذين كانوا يتقنون مهنتهم لعدة أجيال، وجمعنا الإلهام من الحرفيين المحليين، وطورنا مهاراتنا وصقلنا وصفاتنا لتقديم ألذ وأصيلة الحلويات اللبنانية.",
            aboutText4: "في Go Dough، نفخر بالتزامنا بالجودة والأصالة. تُصنع كعكة الكعك والمنقوشة باستخدام الطرق التقليدية والوصفات المتوارثة عبر الأجيال، مما يضمن أن كل لقمة هي طعم لبنان. لكننا نؤمن أيضًا بالابتكار، ونحن نستكشف باستمرار نكهات وأفكار جديدة للحفاظ على قائمة الطعام لدينا طازجة ومثيرة.",
            aboutText5: "منذ أن فتحنا أبوابنا في نهاية عام 2023، كنا مغمورين بالاستقبال الحار من المجتمع. نحن ممتنون لفرصة مشاركة جزء من ثقافتنا معكم ونتطلع إلى الترحيب بكم في Go Dough، حيث كل لقمة تروي قصة من التقاليد والشغف والحب.",

            copyright: "© 2024 جميع الحقوق محفوظة",
            location: "الموقع",
            followUs: "تابعونا"
        }
    }

    function applyTranslations(lang) {
        document.documentElement.lang = translations[lang].setting;
        document.documentElement.dir = translations[lang].dir;
        const currentLang = translations[lang];
        for (const key in currentLang) {
            if (currentLang.hasOwnProperty(key)) {
                const element = document.getElementById(key);
                if (element) {
                    element.innerHTML = currentLang[key];
                }
            }
        }
    }

    if (selectedLang != "") {
        applyTranslations(selectedLang);
    }

});