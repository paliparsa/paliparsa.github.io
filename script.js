document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('#fullscreen-nav-overlay nav a').forEach(anchor => { // Target links inside new overlay
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default jump

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            // Close the fullscreen navigation overlay when a nav link is clicked
            const fullscreenNavOverlay = document.getElementById('fullscreen-nav-overlay');
            const navToggle = document.querySelector('.nav-toggle');
            if (fullscreenNavOverlay && fullscreenNavOverlay.classList.contains('open')) {
                fullscreenNavOverlay.classList.remove('open');
                navToggle.classList.remove('active'); // Deactivate hamburger icon
            }

            if (targetElement) {
                // Scroll smoothly to the target section
                window.scrollTo({
                    top: targetElement.offsetTop - (document.querySelector('header').offsetHeight), // Adjust for sticky header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll-in animations for sections
    const animatedSections = document.querySelectorAll('.animated-section');

    const observerOptions = {
        root: null, // relative to the viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of the section must be visible to trigger
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, observerOptions);

    animatedSections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Initial check for sections already in view on page load
    sectionObserver.takeRecords().forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            sectionObserver.unobserve(entry.target);
        }
    });

    // --- Language Switching Functionality ---
    const translations = {
        en: {
            'logo-vpn-title': 'P1Store VPN',
            'nav-home': 'Home',
            'nav-features': 'Features',
            'nav-pricing': 'Pricing',
            'nav-support': 'Support',
            'nav-about-us': 'About Us',
            'nav-contact': 'Contact',
            'hero-heading': 'Connect with Iran, Wherever You Are.',
            'hero-description': 'Are you an Iranian living abroad, facing difficulties accessing essential Iranian websites and online banking services? Our VPN service provides a secure and reliable solution, allowing you to connect seamlessly with your homeland.',
            'hero-btn': 'Explore Features',
            'features-heading': 'Key Features',
            'feature1-title': 'Access Iranian Websites',
            'feature1-desc': 'Bypass geographical restrictions and access all Iranian websites, including news, cultural sites, and more, effortlessly.',
            'feature2-title': 'Secure Banking Transactions',
            'feature2-desc': 'Perform your online banking transactions securely and without interruptions, accessing your Iranian bank accounts with ease and confidence.',
            'feature3-title': 'High-Speed & Reliable',
            'feature3-desc': 'Enjoy fast and stable connections, ensuring a smooth Browse and streaming experience for all your online activities.',
            'feature4-title': 'Easy to Use & Setup',
            'feature4-desc': 'Our service is designed for simplicity. Connect to the Iranian internet with just a few clicks, no technical expertise required.',
            'feature5-title': '24/7 Dedicated Support',
            'feature5-desc': 'Our team is always here to help. Get assistance whenever you need it, ensuring a smooth and uninterrupted experience.',
            'feature6-title': 'Multiple Device Support',
            'feature6-desc': 'Use our VPN on all your devices – phones, tablets, and computers – with a single subscription. Stay connected everywhere.',
            'feature7-title': 'Optimized for Streaming',
            'feature7-desc': 'Stream your favorite Iranian shows and movies without buffering, thanks to our optimized servers.',
            'feature8-title': 'Strict No-Logs Policy',
            'feature8-desc': 'Your privacy is paramount. We adhere to a strict no-logs policy, ensuring your online activities remain truly private.',
            'pricing-heading': 'Flexible Pricing Plans',
            'pricing-intro': 'Choose the plan that best fits your needs for seamless access to Iranian online services.',
            // Pricing Plan 1 (VIP)
            'plan1-title': '🌟 VIP Subscription 💎',
            'plan1-type': '🔐 One Month | Special VPN',
            'plan1-feature1': '🔺 20 GB base volume',
            'plan1-feature2': 'Access to all Iranian websites and services',
            'plan1-feature3': 'Suitable for light use',
            'currency-toman': 'Toman',
            'period-month': '/month',
            'plan1-note': 'Possibility to add volume (2000T/GB)',
            'buy-btn': 'Buy',
            // Pricing Plan 2 (Unlimited Single-User)
            'plan2-title': '🪙 Unlimited Single-User 🪙',
            'plan2-type': '🛡 One Month | Unlimited VPN',
            'plan2-feature1': '🔺 Unlimited volume',
            'plan2-feature2': 'Single user',
            'plan2-feature3': 'Suitable for heavy use and streaming',
            'plan2-feature4': 'High and stable speed',
            // Pricing Plan 3 (Unlimited Multi-User)
            'plan3-title': '🚀 Unlimited Multi-User 🚀',
            'plan3-type': '🛡 One Month | Unlimited VPN',
            'plan3-feature1': '🔺 Unlimited volume',
            'plan3-feature2': 'Supports 2 or 3 simultaneous users',
            'plan3-feature3': 'Ideal for family and friends',
            'plan3-feature4': 'Maximum speed and stability',
            'plan3-note': 'Three-user plan: 270,000T',
            'support-heading': 'Need Assistance?',
            'support-description': 'Our support team is ready to help you with any questions or technical issues.',
            'support-btn': 'Contact Support',
            'about-us-heading': 'About P1Store VPN',
            'about-us-description': 'P1Store VPN was founded with a clear mission: to bridge the digital divide for Iranians living abroad. We understand the challenges of accessing essential online services and cultural content from outside Iran. Our dedicated team is committed to providing a secure, reliable, and high-speed VPN solution that empowers you to stay connected to your homeland, no matter where you are in the world. We prioritize your privacy and ease of use, ensuring a seamless experience every time you connect.',
            'contact-heading': 'Order Your VPN Now!',
            'contact-description': 'Ready to experience seamless access? Order your P1Store VPN service easily through our Telegram bot.',
            'order-telegram-btn': 'Order via Telegram Bot',
            'contact-small-text': 'Click the button above to chat with our automated ordering system.',
            'footer-copyright': '&copy; 2025 P1Store. All rights reserved.'
        },
        fa: {
            'logo-vpn-title': 'P1Store VPN',
            'nav-home': 'خانه',
            'nav-features': 'ویژگی‌ها',
            'nav-pricing': 'قیمت‌ها',
            'nav-support': 'پشتیبانی',
            'nav-about-us': 'درباره ما',
            'nav-contact': 'تماس با ما',
            'hero-heading': 'با ایران وصل شوید، هر کجا که هستید.',
            'hero-description': 'آیا شما یک ایرانی ساکن خارج از کشور هستید که برای دسترسی به وب‌سایت‌های ضروری ایرانی و خدمات بانکداری آنلاین با مشکل مواجه هستید؟ سرویس VPN ما یک راه‌حل امن و قابل اعتماد ارائه می‌دهد که به شما امکان می‌دهد به‌طور یکپارچه با وطن خود ارتباط برقرار کنید.',
            'hero-btn': 'بررسی ویژگی‌ها',
            'features-heading': 'ویژگی‌های کلیدی',
            'feature1-title': 'دسترسی به وب‌سایت‌های ایرانی',
            'feature1-desc': 'محدودیت‌های جغرافیایی را دور بزنید و به راحتی به تمام وب‌سایت‌های ایرانی، از جمله اخبار، سایت‌های فرهنگی و غیره دسترسی پیدا کنید.',
            'feature2-title': 'تراکنش‌های بانکی امن',
            'feature2-desc': 'تراکنش‌های بانکی آنلاین خود را به صورت امن و بدون وقفه انجام دهید و با آسودگی و اطمینان به حساب‌های بانکی ایرانی خود دسترسی پیدا کنید.',
            'feature3-title': 'سرعت بالا و قابل اعتماد',
            'feature3-desc': 'از اتصالات سریع و پایدار لذت ببرید و تجربه‌ای روان از مرور و استریم برای تمام فعالیت‌های آنلاین خود تضمین کنید.',
            'feature4-title': 'استفاده و راه‌اندازی آسان',
            'feature4-desc': 'سرویس ما برای سادگی طراحی شده است. با چند کلیک به اینترنت ایران متصل شوید، بدون نیاز به تخصص فنی.',
            'feature5-title': 'پشتیبانی 24/7 اختصاصی',
            'feature5-desc': 'تیم پشتیبانی ما آماده کمک به شما در هر گونه سوال یا مسائل فنی است.',
            'feature6-title': 'پشتیبانی از چندین دستگاه',
            'feature6-desc': 'با یک اشتراک از VPN ما در تمام دستگاه‌های خود – تلفن‌ها، تبلت‌ها و رایانه‌ها – استفاده کنید. همه جا متصل بمانید.',
            'feature7-title': 'بهینه‌سازی شده برای استریم',
            'feature7-desc': 'نمایش‌ها و فیلم‌های ایرانی مورد علاقه خود را بدون بافرینگ استریم کنید، به لطف سرورهای بهینه‌سازی شده ما.',
            'feature8-title': 'سیاست سختگیرانه عدم نگهداری گزارش',
            'feature8-desc': 'حریم خصوصی شما در اولویت است. ما به سیاست سختگیرانه عدم نگهداری گزارش پایبندیم و اطمینان می‌دهیم فعالیت‌های آنلاین شما واقعاً خصوصی باقی می‌ماند.',
            'pricing-heading': 'پلن‌های قیمت‌گذاری انعطاف‌پذیر',
            'pricing-intro': 'پلنی را انتخاب کنید که به بهترین وجه با نیازهای شما برای دسترسی یکپارچه به خدمات آنلاین ایرانی مطابقت دارد.',
            // Pricing Plan 1 (VIP)
            'plan1-title': '🌟 اشتراک VIP 💎',
            'plan1-type': '🔐 یک‌ماهه | فیلترشکن ویژه',
            'plan1-feature1': '🔺 20 گیگ حجم پایه',
            'plan1-feature2': 'دسترسی به تمامی سایت‌ها و سرویس‌های ایرانی',
            'plan1-feature3': 'مناسب برای استفاده سبک',
            'currency-toman': 'تومان',
            'period-month': '/ماه',
            'plan1-note': 'امکان افزودن حجم (2000T/گیگ)',
            'buy-btn': 'خرید',
            // Pricing Plan 2 (Unlimited Single-User)
            'plan2-title': '🪙 نامحدود تک‌کاربره 🪙',
            'plan2-type': '🛡 یک‌ماهه | فیلترشکن نامحدود',
            'plan2-feature1': '🔺 حجم نامحدود',
            'plan2-feature2': 'تک‌کاربره',
            'plan2-feature3': 'مناسب برای استفاده سنگین و استریم',
            'plan2-feature4': 'سرعت بالا و پایدار',
            // Pricing Plan 3 (Unlimited Multi-User)
            'plan3-title': '🚀 نامحدود چندکاربره 🚀',
            'plan3-type': '🛡 یک‌ماهه | فیلترشکن نامحدود',
            'plan3-feature1': '🔺 حجم نامحدود',
            'plan3-feature2': 'پشتیبانی از 2 یا 3 کاربر همزمان',
            'plan3-feature3': 'ایده‌آل برای خانواده و دوستان',
            'plan3-feature4': 'حداکثر سرعت و پایداری',
            'plan3-note': 'پلن سه‌کاربره: 270,000T',
            'support-heading': 'نیاز به کمک دارید؟',
            'support-description': 'تیم پشتیبانی ما آماده کمک به شما در هر گونه سوال یا مسائل فنی است.',
            'support-btn': 'تماس با پشتیبانی',
            'about-us-heading': 'درباره P1Store VPN',
            'about-us-description': 'P1Store VPN با یک ماموریت روشن تاسیس شد: از بین بردن شکاف دیجیتالی برای ایرانیان ساکن خارج از کشور. ما چالش‌های دسترسی به خدمات آنلاین ضروری و محتوای فرهنگی از خارج از ایران را درک می‌کنیم. تیم متعهد ما متعهد به ارائه یک راه‌حل VPN امن، قابل اعتماد و با سرعت بالا است که به شما امکان می‌دهد بدون توجه به اینکه کجای دنیا هستید، به وطن خود متصل بمانید. ما حریم خصوصی و سهولت استفاده شما را در اولویت قرار می‌دهیم و تجربه‌ای یکپارچه را هر بار که متصل می‌شوید تضمین می‌کنیم.',
            'contact-heading': 'همین حالا VPN خود را سفارش دهید!',
            'contact-description': 'آماده تجربه دسترسی یکپارچه هستید؟ سرویس P1Store VPN خود را به راحتی از طریق ربات تلگرام ما سفارش دهید.',
            'order-telegram-btn': 'سفارش از طریق ربات تلگرام',
            'contact-small-text': 'روی دکمه بالا کلیک کنید تا با سیستم سفارش خودکار ما چت کنید.',
            'footer-copyright': '&copy; 2025 P1Store. تمامی حقوق محفوظ است.'
        }
    };

    const langButtons = document.querySelectorAll('.language-switcher button');
    let currentLang = localStorage.getItem('lang') || 'en'; // Get language from localStorage, default to 'en'

    const updateContent = (lang) => {
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key]) {
                const originalContent = element.innerHTML;
                const imgMatch = originalContent.match(/<img[^>]*>/);

                if (imgMatch) {
                    const imgTag = imgMatch[0];
                    // Replace the entire content while keeping the image and wrapping the text in a span
                    element.innerHTML = imgTag + ' <span class="button-text">' + translations[lang][key] + '</span>';
                } else {
                    element.innerHTML = translations[lang][key];
                }
            }
        });

        // Update active button class
        langButtons.forEach(button => {
            button.classList.remove('active');
        });
        document.getElementById(`lang-${lang}`).classList.add('active');

        // Update HTML lang attribute for accessibility and proper rendering
        document.documentElement.lang = lang;

        // Store selected language in localStorage
        localStorage.setItem('lang', lang);
    };

    // Initial content update based on stored language or default
    updateContent(currentLang);

    langButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const newLang = event.target.id.replace('lang-', '');
            if (newLang !== currentLang) {
                currentLang = newLang;
                updateContent(currentLang);
            }
        });
    });
    // --- End of Language Switching Functionality ---

    // --- Fullscreen Navigation Toggle Functionality ---
    const navToggle = document.querySelector('.nav-toggle');
    const fullscreenNavOverlay = document.getElementById('fullscreen-nav-overlay');

    if (navToggle && fullscreenNavOverlay) { // Check if elements exist before adding listeners
        navToggle.addEventListener('click', () => {
            fullscreenNavOverlay.classList.toggle('open');
            navToggle.classList.toggle('active'); // for hamburger animation
            // Disable body scroll when overlay is open
            document.body.style.overflow = fullscreenNavOverlay.classList.contains('open') ? 'hidden' : '';
        });

        // Close nav when a language button inside overlay is clicked
        fullscreenNavOverlay.querySelectorAll('.language-switcher button').forEach(button => {
            button.addEventListener('click', () => {
                if (fullscreenNavOverlay.classList.contains('open')) {
                    fullscreenNavOverlay.classList.remove('open');
                    navToggle.classList.remove('active');
                    document.body.style.overflow = ''; // Re-enable body scroll
                }
            });
        });
    }
    // --- End of Fullscreen Navigation Toggle Functionality ---
});
