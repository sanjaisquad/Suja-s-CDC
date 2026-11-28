/* ============================================================
   MAIN JS — Suja's Child Development Centre
   Ecolevision-inspired animations and interactions
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initFooterFallAnimation();
  initHeader();
  initMobileNav();
  initSmoothScroll();
  initContactForm();
  initLightbox();
  initParallaxShapes();
  initHeroCardHover();
  initGalleryFilter();
  initStepsPopOnScroll();
});

/* ══════════════════════════════════════════════════════════
   SCROLL REVEAL (IntersectionObserver with stagger)
   ══════════════════════════════════════════════════════════ */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal, .reveal--scale, .reveal--left, .reveal--right, .reveal--rotate');
  if (!reveals.length) return;

  // Respect prefers-reduced-motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    reveals.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observerOptions = {
    threshold: 0.12,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add stagger delay for children in stagger containers
        const parent = entry.target.closest('.reveal-stagger');
        if (parent) {
          const siblings = Array.from(parent.querySelectorAll('.reveal, .reveal--scale, .reveal--left, .reveal--right'));
          const index = siblings.indexOf(entry.target);
          entry.target.style.transitionDelay = `${index * 80}ms`;
        }

        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  reveals.forEach(el => observer.observe(el));
}

/* ══════════════════════════════════════════════════════════
   FOOTER FALLING ANIMATION (IntersectionObserver)
   ══════════════════════════════════════════════════════════ */
function initFooterFallAnimation() {
  const footerShapes = document.querySelectorAll('.anim-fall-footer');
  if (!footerShapes.length) return;

  // Respect prefers-reduced-motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    footerShapes.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  footerShapes.forEach(el => observer.observe(el));
}

/* ══════════════════════════════════════════════════════════
   HEADER (scroll behavior with smooth transitions)
   ══════════════════════════════════════════════════════════ */
function initHeader() {
  const header = document.querySelector('.header');
  if (!header) return;

  const scrollThreshold = 50;
  let lastScroll = 0;
  let ticking = false;

  function updateHeader() {
    const scrollY = window.scrollY;

    if (scrollY > scrollThreshold) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }

    lastScroll = scrollY;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateHeader);
      ticking = true;
    }
  }, { passive: true });

  updateHeader();
}

/* ══════════════════════════════════════════════════════════
   MOBILE NAVIGATION (Ecolevision clip-path curtain reveal)
   ══════════════════════════════════════════════════════════ */
function initMobileNav() {
  const toggleBtn = document.querySelector('.header__menu-btn, .header__menu-toggle');
  const closeBtn = document.querySelector('.mobile-nav__close');
  const mobileNav = document.querySelector('.mobile-nav');
  const body = document.body;

  if (!toggleBtn || !mobileNav) return;

  function openNav() {
    mobileNav.classList.add('is-open');
    mobileNav.setAttribute('aria-hidden', 'false');
    body.style.overflow = 'hidden';
    toggleBtn.setAttribute('aria-expanded', 'true');

    // Focus first link after animation
    setTimeout(() => {
      const firstLink = mobileNav.querySelector('.mobile-nav-link');
      if (firstLink) firstLink.focus();
    }, 500);
  }

  function closeNav() {
    mobileNav.classList.remove('is-open');
    mobileNav.setAttribute('aria-hidden', 'true');
    body.style.overflow = '';
    toggleBtn.setAttribute('aria-expanded', 'false');
    toggleBtn.focus();
  }

  toggleBtn.addEventListener('click', openNav);
  if (closeBtn) closeBtn.addEventListener('click', closeNav);

  // Close on link click
  mobileNav.querySelectorAll('.mobile-nav-link, .mobile-nav-sublink').forEach(link => {
    link.addEventListener('click', () => {
      setTimeout(closeNav, 100);
    });
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('is-open')) {
      closeNav();
    }
  });

  // Close on CTA button click
  mobileNav.querySelectorAll('.btn, .mobile-nav__pill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setTimeout(closeNav, 100);
    });
  });
}

/* ══════════════════════════════════════════════════════════
   SMOOTH SCROLL & ACTIVE NAV STATE
   ══════════════════════════════════════════════════════════ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight - 20;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });

      // Update active nav state
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('is-active'));
      const matchingNav = document.querySelector(`.nav-link[href="${targetId}"]`);
      if (matchingNav) matchingNav.classList.add('is-active');

      // Focus form if clicking Book Consultation
      if (this.textContent.toLowerCase().includes('book') || targetId === '#contact-section') {
        setTimeout(() => {
          const nameInput = document.getElementById('contactName');
          if (nameInput) nameInput.focus();
        }, 700);
      }
    });
  });

  // Active nav on scroll
  const sections = document.querySelectorAll('section[id], div[id]');
  if (sections.length) {
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('is-active'));
          const link = document.querySelector(`.nav-link[href="#${id}"]`);
          if (link) link.classList.add('is-active');
        }
      });
    }, { threshold: 0.2, rootMargin: '-100px 0px -40% 0px' });

    sections.forEach(s => navObserver.observe(s));
  }
}

/* ══════════════════════════════════════════════════════════
   CONTACT FORM (Zero-Backend WhatsApp + Email)
   ══════════════════════════════════════════════════════════ */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const fields = {
    name:    form.querySelector('#contactName'),
    email:   form.querySelector('#contactEmail'),
    phone:   form.querySelector('#contactPhone'),
    message: form.querySelector('#contactMessage')
  };

  const whatsappBtn = form.querySelector('#sendWhatsApp');
  const emailBtn    = form.querySelector('#sendEmail');

  function validate(requireEmail) {
    let valid = true;

    // Reset errors
    Object.values(fields).forEach(f => {
      if (f) {
        f.classList.remove('is-error');
        const errEl = f.parentElement.querySelector('.error-message');
        if (errEl) errEl.style.display = 'none';
      }
    });

    // Name
    if (!fields.name.value.trim()) {
      showError(fields.name, 'Please enter your full name');
      valid = false;
    }

    // Phone
    if (!fields.phone.value.trim()) {
      showError(fields.phone, 'Please enter your phone / WhatsApp number');
      valid = false;
    }

    // Email (required for email button)
    if (requireEmail && !fields.email.value.trim()) {
      showError(fields.email, 'Please enter your email address');
      valid = false;
    } else if (fields.email.value.trim() && !isValidEmail(fields.email.value)) {
      showError(fields.email, 'Please enter a valid email address');
      valid = false;
    }

    // Message
    if (!fields.message.value.trim()) {
      showError(fields.message, 'Please describe your child\'s requirements');
      valid = false;
    }

    return valid;
  }

  function showError(field, message) {
    field.classList.add('is-error');
    // Add shake animation
    field.style.animation = 'shake 0.4s ease';
    setTimeout(() => field.style.animation = '', 400);

    let errEl = field.parentElement.querySelector('.error-message');
    if (errEl) {
      errEl.textContent = message;
      errEl.style.display = 'block';
    }
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function compileMessage() {
    const name    = fields.name.value.trim();
    const email   = fields.email.value.trim();
    const phone   = fields.phone.value.trim();
    const message = fields.message.value.trim();

    return `Hello Suja's Child Development Centre,

I would like to make an enquiry / book a consultation:

*Name:* ${name}
*Email:* ${email || 'Not provided'}
*Phone:* ${phone}
*Message:*
${message}`;
  }

  function compilePlainMessage() {
    const name    = fields.name.value.trim();
    const email   = fields.email.value.trim();
    const phone   = fields.phone.value.trim();
    const message = fields.message.value.trim();

    return `Hello Suja's Child Development Centre,

I would like to make an enquiry / book a consultation:

Name: ${name}
Email: ${email || 'Not provided'}
Phone: ${phone}
Message:
${message}`;
  }

  // WhatsApp button
  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (!validate(false)) return;

      const msg = encodeURIComponent(compileMessage());
      const url = `https://wa.me/918682870313?text=${msg}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  }

  // Email button
  if (emailBtn) {
    emailBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (!validate(true)) return;

      const name = fields.name.value.trim();
      const subject = encodeURIComponent(`Consultation Enquiry - ${name} | Suja's Child Development Centre`);
      const body = encodeURIComponent(compilePlainMessage());
      window.location.href = `mailto:sujascdc0313@gmail.com?subject=${subject}&body=${body}`;
    });
  }

  // Clear error on input
  Object.values(fields).forEach(f => {
    if (f) {
      f.addEventListener('input', () => {
        f.classList.remove('is-error');
        const errEl = f.parentElement.querySelector('.error-message');
        if (errEl) errEl.style.display = 'none';
      });
    }
  });
}

/* ══════════════════════════════════════════════════════════
   LIGHTBOX for Clinic Board
   ══════════════════════════════════════════════════════════ */
function initLightbox() {
  const trigger = document.getElementById('openBoardLightbox');
  const modal = document.getElementById('boardLightboxModal');
  const closeBtn = document.getElementById('closeBoardLightbox');

  if (!trigger || !modal) return;

  function openModal() {
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (closeBtn) closeBtn.focus();
  }

  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    trigger.focus();
  }

  trigger.addEventListener('click', openModal);
  trigger.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openModal();
    }
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });
}

/* ══════════════════════════════════════════════════════════
   PARALLAX ORGANIC SHAPES (subtle mouse/scroll movement)
   ══════════════════════════════════════════════════════════ */
function initParallaxShapes() {
  const shapes = document.querySelectorAll('.hero__shape');
  if (!shapes.length) return;

  // Skip on reduced motion or touch devices
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if ('ontouchstart' in window) return;

  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  function animate() {
    // Smooth interpolation
    currentX += (mouseX - currentX) * 0.05;
    currentY += (mouseY - currentY) * 0.05;

    shapes.forEach((shape, i) => {
      const factor = (i + 1) * 8;
      const x = currentX * factor;
      const y = currentY * factor;
      shape.style.transform = `translate(${x}px, ${y}px)`;
    });

    requestAnimationFrame(animate);
  }

  animate();
}

/* ══════════════════════════════════════════════════════════
   HERO CARD HOVER (enhanced spring physics)
   ══════════════════════════════════════════════════════════ */
function initHeroCardHover() {
  const cards = document.querySelectorAll('.hero__photo--1, .hero__photo--2, .hero__photo--3');
  if (!cards.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const rotations = {
    'hero__photo--1': 'rotate(15deg)',
    'hero__photo--2': 'rotate(-5deg)',
    'hero__photo--3': 'rotate(3deg)'
  };

  cards.forEach((card) => {
    let bounds;
    const classList = Array.from(card.classList);
    const photoClass = classList.find(c => c.startsWith('hero__photo--'));
    const originalRotation = rotations[photoClass] || '';

    function rotateCard(e) {
      bounds = card.getBoundingClientRect();
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const centerX = bounds.left + bounds.width / 2;
      const centerY = bounds.top + bounds.height / 2;
      const percentX = (mouseX - centerX) / (bounds.width / 2);
      const percentY = (mouseY - centerY) / (bounds.height / 2);

      const rotateX = percentY * -5;
      const rotateY = percentX * 5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
    }

    function resetCard() {
      card.style.transform = originalRotation;
    }

    card.addEventListener('mouseenter', () => {
      card.style.transition = 'transform 0.1s ease-out';
    });

    card.addEventListener('mousemove', rotateCard);

    card.addEventListener('mouseleave', () => {
      card.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
      resetCard();
    });
  });
}

/* ══════════════════════════════════════════════════════════
   GALLERY CATEGORY FILTER
   ══════════════════════════════════════════════════════════ */
function initGalleryFilter() {
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const marqueeItems = document.querySelectorAll('.marquee-item[data-category]');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetCategory = btn.getAttribute('data-filter');

      // Update active button state
      filterBtns.forEach(b => {
        b.classList.remove('is-active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('is-active');
      btn.setAttribute('aria-selected', 'true');

      // Filter or highlight marquee items
      marqueeItems.forEach(item => {
        const itemCat = item.getAttribute('data-category');
        if (targetCategory === 'all' || itemCat === targetCategory) {
          item.classList.remove('is-dimmed');
          if (targetCategory !== 'all') {
            item.classList.add('is-highlighted');
          } else {
            item.classList.remove('is-highlighted');
          }
        } else {
          item.classList.add('is-dimmed');
          item.classList.remove('is-highlighted');
        }
      });
    });
  });
}

/* ══════════════════════════════════════════════════════════
   1 2 3 NUMBERS POP-IN ON SCROLL
   ══════════════════════════════════════════════════════════ */
function initStepsPopOnScroll() {
  const container = document.querySelector('.steps-pop-container');
  if (!container) return;

  const chars = container.querySelectorAll('.step-pop-char');
  if (!chars.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    container.classList.add('is-visible');
    chars.forEach(c => c.classList.add('is-popped'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        container.classList.add('is-visible');
        chars.forEach((char, index) => {
          setTimeout(() => {
            char.classList.add('is-popped');
          }, (index + 1) * 160);
        });
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.18,
    rootMargin: '0px 0px -40px 0px'
  });

  observer.observe(container);
}

/* ══════════════════════════════════════════════════════════
   CSS KEYFRAME INJECTION (shake animation for form errors)
   ══════════════════════════════════════════════════════════ */
const style = document.createElement('style');
style.textContent = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    20% { transform: translateX(-8px); }
    40% { transform: translateX(8px); }
    60% { transform: translateX(-6px); }
    80% { transform: translateX(6px); }
  }
`;
document.head.appendChild(style);
