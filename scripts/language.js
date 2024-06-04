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
            navMenu: "Menu",
            openFranchise: "Franchise",
            openAboutus: "About Us",
            navMap: "Find Nearest",
            navUber: "Order on UberEats",
            navSTD: "Order on SkipTheDishes",
            welcome: "Welcome to GoDough",
            welcomeText: "Welcome to GoDough, gastronomic haven where Lebanese customs and tastes abound. Savor a unique dining experience that combines the friendliness of Lebanese hospitality with a fine meal made from scratch with the freshest ingredients.",
            seeMenu: "See Menu",
            hoursTitle: "Hours of Operation",
            hoursMon: "Closed",
            hoursTue: "9am - 10pm",
            hoursWed: "9am - 10pm",
            hoursThu: "9am - 10pm",
            hoursFri: "9am - 12am",
            hoursSat: "9am - 12am",
            hoursSun: "9am - 10pm",
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
            navMenu: "Menu",
            openFranchise: "Franchise",
            openAboutus: "À propos de nous",
            navMap: "Trouver le plus proche",
            navUber: "Commander sur UberEats",
            navSTD: "Commander sur SkipTheDishes",
            welcome: "Bienvenue à GoDough",
            welcomeText: "Bienvenue à GoDough, havre gastronomique où les coutumes et les saveurs libanaises abondent. Savourez une expérience culinaire unique qui allie la convivialité de l'hospitalité libanaise à un repas fin préparé à partir des ingrédients les plus frais.",
            seeMenu: "Voir le menu",
            hoursTitle: "Heures d'ouverture",
            hoursMon: "Fermé",
            hoursTue: "9h - 22h",
            hoursWed: "9h - 22h",
            hoursThu: "9h - 22h",
            hoursFri: "9h - 24h",
            hoursSat: "9h - 24h",
            hoursSun: "9h - 22h",
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
            navMenu: "قائمة الطعام",
            openFranchise: "الامتياز التجاري",
            openAboutus: "معلومات عنا",
            navMap: "اعثر على الأقرب",
            navUber: "اطلب عبر UberEats",
            navSTD: "اطلب عبر SkipTheDishes",
            welcome: "مرحبًا بكم في GoDough",
            welcomeText: "مرحبًا بكم في GoDough، الملاذ الذواقة حيث تتجلى التقاليد اللبنانية والنكهات. تذوق تجربة طعام فريدة تجمع بين ودية الضيافة اللبنانية ووجبة فاخرة مصنوعة من مكونات طازجة.",
            seeMenu: "عرض القائمة",
            hoursTitle: "ساعات العمل",
            hoursMon: "مغلق",
            hoursTue: "9ص - 10م",
            hoursWed: "9ص - 10م",
            hoursThu: "9ص - 10م",
            hoursFri: "9ص - 12ص",
            hoursSat: "9ص - 12ص",
            hoursSun: "9ص - 10م",
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
        const currentLang = translations[lang];
        document.documentElement.lang = translations[lang].setting;
        document.documentElement.dir = translations[lang].dir;
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