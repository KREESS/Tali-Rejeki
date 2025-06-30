document.addEventListener("DOMContentLoaded", function () {
    // === 1. Fade-Up Animation ===
    const fadeElements = document.querySelectorAll('.fade-up');
    const fadeOptions = {
        threshold: 0.2
    };

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                fadeObserver.unobserve(entry.target);
            }
        });
    }, fadeOptions);

    fadeElements.forEach(el => {
        fadeObserver.observe(el);
    });

    // === 2. Slider Functionality ===
    const slides = document.querySelectorAll('.slider-slide');
    const title = document.getElementById('slider-title');
    const desc = document.getElementById('slider-desc');

    const texts = [
        {
            title: "TALI REJEKI",
            desc: "BERDIRI SEJAK 2011. PT. TALI REJEKI DIPERCAYA SEBAGAI DISTRIBUTOR & AGEN UNTUK BERBAGAI PROJECT BESAR PEREDAM SUARA UNTUK RUANG KARAOKE, BALLROOM, DAN AKUSTIK DI SELURUH INDONESIA."
        },
        {
            title: "DISTRIBUTOR & AGEN RESMI",
            desc: "GLASSWOOL, ROCKWOOL, MATERIAL PEREDAM SUARA & INSULASI"
        },
        {
            title: "SOLUSI INDUSTRI TERPERCAYA",
            desc: "Mitra terpercaya Anda dalam solusi tali dan perlengkapan industri berkualitas tinggi."
        }
    ];

    let slideIndex = 0;
    function showSlides() {
        slides.forEach(slide => slide.classList.remove('slider-active'));

        slideIndex = (slideIndex + 1) % slides.length;
        slides[slideIndex].classList.add('slider-active');

        // Update text
        title.textContent = texts[slideIndex].title;
        desc.textContent = texts[slideIndex].desc;

        setTimeout(showSlides, 3000);
    }

    if (slides.length) showSlides();

    // === 3. Update Tahun Otomatis (jika ada span dengan id 'current-year')
    const yearSpan = document.getElementById("current-year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});