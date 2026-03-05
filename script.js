/* =============================================
   EASY CLEAN — MAIN SCRIPT
   Multi-page site: index | services | gallery | testimonials | contact
   No unnecessary animations — clean, purposeful JS only.
============================================= */



'use strict';
// ---------- MOBILE MENU ----------
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const backdrop = document.getElementById('navBackdrop');

function openMobileMenu() {
    navMenu.classList.add('open');
    hamburger.classList.add('open');
    if (backdrop) backdrop.classList.add('show');
    document.body.style.overflow = 'hidden'; // prevent page scroll while menu is open
}

function closeMobileMenu() {
    navMenu.classList.remove('open');
    hamburger.classList.remove('open');
    if (backdrop) backdrop.classList.remove('show');
    document.body.style.overflow = '';
}

hamburger.addEventListener('click', function () {
    if (navMenu.classList.contains('open')) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
});

// Close when tapping the backdrop
if (backdrop) {
    backdrop.addEventListener('click', closeMobileMenu);
}

// Close menu when clicking outside nav on desktop
document.addEventListener('click', function (e) {
    if (
        navMenu.classList.contains('open') &&
        !navMenu.contains(e.target) &&
        !hamburger.contains(e.target) &&
        (!backdrop || !backdrop.contains(e.target))
    ) {
        closeMobileMenu();
    }
});

// Close menu when a nav link is clicked (mobile)
navMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMobileMenu);
});

// Close on Escape key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMobileMenu();
});


// ---------- NAVBAR SCROLL SHADOW ----------
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function () {
    navbar.style.boxShadow = window.scrollY > 10
        ? '0 4px 20px rgba(0,0,0,.25)'
        : 'none';
}, { passive: true });


// ---------- BEFORE & AFTER DRAG SLIDER (gallery.html only) ----------
(function initSlider() {
    const container = document.getElementById('compareSlider');
    if (!container) return;

    const before = document.getElementById('sliderBefore');
    const handle = document.getElementById('sliderHandle');
    let dragging = false;

    function setPosition(clientX) {
        const rect = container.getBoundingClientRect();
        let pct = (clientX - rect.left) / rect.width;
        pct = Math.max(0.02, Math.min(0.98, pct));
        const pctStr = (pct * 100).toFixed(2) + '%';
        before.style.width = pctStr;
        handle.style.left = pctStr;
    }

    // Mouse events
    handle.addEventListener('mousedown', function (e) {
        e.preventDefault();
        dragging = true;
    });
    document.addEventListener('mousemove', function (e) {
        if (dragging) setPosition(e.clientX);
    });
    document.addEventListener('mouseup', function () {
        dragging = false;
    });

    // Click anywhere on the slider to jump
    container.addEventListener('mousedown', function (e) {
        setPosition(e.clientX);
    });

    // Touch events
    handle.addEventListener('touchstart', function (e) {
        dragging = true;
        e.preventDefault();
    }, { passive: false });
    document.addEventListener('touchmove', function (e) {
        if (dragging) setPosition(e.touches[0].clientX);
    }, { passive: true });
    document.addEventListener('touchend', function () {
        dragging = false;
    });
})();


// ---------- GALLERY FILTER (gallery.html only) ----------
(function initGalleryFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.gallery-card');
    if (!filterBtns.length) return;

    filterBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            const filter = this.dataset.filter;

            filterBtns.forEach(function (b) { b.classList.remove('active'); });
            this.classList.add('active');

            cards.forEach(function (card) {
                const match = filter === 'all' || card.dataset.category === filter;
                card.classList.toggle('hidden', !match);
            });
        });
    });
})();


// ---------- FAQ ACCORDION (contact.html only) ----------
(function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    if (!faqItems.length) return;

    faqItems.forEach(function (item) {
        const btn = item.querySelector('.faq-q');
        const answer = item.querySelector('.faq-a');

        btn.addEventListener('click', function () {
            const isOpen = btn.getAttribute('aria-expanded') === 'true';

            // Close all
            faqItems.forEach(function (other) {
                other.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
                other.querySelector('.faq-a').classList.remove('open');
            });

            // Open this one if it was closed
            if (!isOpen) {
                btn.setAttribute('aria-expanded', 'true');
                answer.classList.add('open');
            }
        });
    });
})();


// ---------- QUOTE FORM (contact.html only) ----------
(function initQuoteForm() {
    const form = document.getElementById('quoteForm');
    const formMsg = document.getElementById('formMsg');
    const submitBtn = document.getElementById('submitBtn');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = form.querySelector('#fname').value.trim();
        const phone = form.querySelector('#fphone').value.trim();
        const service = form.querySelector('#fservice').value;

        if (!name || !phone || !service) {
            setFormMsg('Please fill in all required fields (*).', 'error');
            return;
        }

        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending…';

        // Simulate async submission (front-end only)
        setTimeout(function () {
            form.reset();
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Quote Request';
            setFormMsg('✓ Thank you! We\'ll be in touch within 1 hour.', 'success');
            showToast('Quote request sent successfully!', 'success');

            setTimeout(function () {
                formMsg.textContent = '';
                formMsg.className = 'form-msg';
            }, 5000);
        }, 900);
    });

    function setFormMsg(text, type) {
        formMsg.textContent = text;
        formMsg.className = 'form-msg ' + type;
    }
})();


// ---------- PHONE INPUT FORMAT (contact.html only) ----------
(function initPhoneFormatter() {
    const phoneInput = document.getElementById('fphone');
    if (!phoneInput) return;

    phoneInput.addEventListener('input', function () {
        this.value = this.value.replace(/[^\d+\s\-()]/g, '').slice(0, 18);
    });
})();


// ---------- TOAST ----------
function showToast(message, type) {
    type = type || 'info';
    const toast = document.getElementById('toast');
    if (!toast) return;

    toast.textContent = message;
    toast.className = 'toast show ' + type;

    clearTimeout(toast._timer);
    toast._timer = setTimeout(function () {
        toast.className = 'toast';
    }, 3500);
}


// ---------- FOOTER YEAR ----------
(function setFooterYear() {
    const year = new Date().getFullYear();
    document.querySelectorAll('.footer-year').forEach(function (el) {
        el.textContent = year;
    });
})();
