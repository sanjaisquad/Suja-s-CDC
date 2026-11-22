/* ============================================================
   MAIN JS — Suja's Child Development Centre
   Scroll reveals, header behavior, mobile nav, contact form,
   and brochure lightbox modal
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initHeader();
  initMobileNav();
  initSmoothScroll();
  initContactForm();
  initLightbox();
});

/* ── Scroll Reveal (IntersectionObserver — triggers once) ── */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal, .reveal--scale, .reveal--left, .reveal--right');
  if (!reveals.length) return;

  // Respect prefers-reduced-motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    reveals.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // trigger once
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -30px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

/* ── Header scroll behavior (background + shrink) ── */
function initHeader() {
  const header = document.querySelector('.header');
  if (!header) return;

  const scrollThreshold = 40;

  function onScroll() {
    const scrollY = window.scrollY;
    if (scrollY > scrollThreshold) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ── Mobile Navigation (Ecolevision clip-path reveal) ── */
function initMobileNav() {
  const toggleBtn = document.querySelector('.header__menu-toggle');
  const closeBtn = document.querySelector('.mobile-nav__close');
  const mobileNav = document.querySelector('.mobile-nav');
  const body = document.body;

  if (!toggleBtn || !mobileNav) return;

  function openNav() {
    mobileNav.classList.add('is-open');
    body.style.overflow = 'hidden';
    toggleBtn.setAttribute('aria-expanded', 'true');
    setTimeout(() => {
      const firstLink = mobileNav.querySelector('.mobile-nav-link');
      if (firstLink) firstLink.focus();
    }, 450);
  }

  function closeNav() {
    mobileNav.classList.remove('is-open');
    body.style.overflow = '';
    toggleBtn.setAttribute('aria-expanded', 'false');
    toggleBtn.focus();
  }

  toggleBtn.addEventListener('click', openNav);
  if (closeBtn) closeBtn.addEventListener('click', closeNav);

  mobileNav.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', closeNav);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('is-open')) {
      closeNav();
    }
  });

  mobileNav.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', closeNav);
  });
}

/* ── Smooth Scroll & Pre-focus Form ── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      const headerHeight = document.querySelector('.header')?.offsetHeight || 75;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight - 15;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });

      // Update active nav state
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('is-active'));
      const matchingNav = document.querySelector(`.nav-link[href="${targetId}"]`);
      if (matchingNav) matchingNav.classList.add('is-active');

      // Pre-focus inquiry form if clicking Book Consultation
      if (this.textContent.toLowerCase().includes('book') || targetId === '#contact-section') {
        setTimeout(() => {
          const nameInput = document.getElementById('contactName');
          if (nameInput) nameInput.focus();
        }, 600);
      }
    });
  });

  // Set active nav on scroll
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
    }, { threshold: 0.25, rootMargin: '-80px 0px -40% 0px' });

    sections.forEach(s => navObserver.observe(s));
  }
}

/* ── Contact Form (Zero-Backend: WhatsApp + Email redirect) ── */
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

/* ── Lightbox for Clinic Board / Brochure ── */
function initLightbox() {
  const trigger = document.getElementById('openBoardLightbox');
  const modal = document.getElementById('boardLightboxModal');
  const closeBtn = document.getElementById('closeBoardLightbox');

  if (!trigger || !modal) return;

  function openModal() {
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  trigger.addEventListener('click', openModal);
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
