import './style.css';
import { renderNavbar } from './components/Navbar.js';
import { renderHero } from './components/Hero.js';
import { renderAbout } from './components/About.js';
import { renderServices } from './components/Services.js';
import { renderWhyUs } from './components/WhyUs.js';
import { renderCtaBanner } from './components/CtaBanner.js';
import { renderContact } from './components/Contact.js';
import { renderFooter } from './components/Footer.js';
import { renderSupportPage } from './components/SupportPage.js';
import { renderCartPage } from './components/CartPage.js';
import { renderContactPage } from './components/ContactPage.js';
import { renderBlogPage } from './components/BlogPage.js';
import { renderAccountPage } from './components/AccountPage.js';

// ─── SPA Router ──────────────────────────────────────────────
const routes = {
  home: () => `
    ${renderHero()}
    ${renderAbout()}
    ${renderServices()}
    ${renderWhyUs()}
    ${renderCtaBanner()}
    ${renderContact()}
  `,
  about: () => `
    ${renderHero()}
    ${renderAbout()}
    ${renderWhyUs()}
    ${renderCtaBanner()}
  `,
  products: () => `
    ${renderServices()}
    ${renderCtaBanner()}
  `,
  support: () => renderSupportPage(),
  cart: () => renderCartPage(),
  contact: () => renderContactPage(),
  blog: () => renderBlogPage(),
  account: () => renderAccountPage(),
};

let currentPage = 'home';

function getPageFromHash() {
  const hash = window.location.hash.replace('#', '');
  return hash && routes[hash] ? hash : 'home';
}

function renderApp(page) {
  currentPage = page;
  const app = document.querySelector('#app');
  
  const pageContent = routes[page] ? routes[page]() : routes.home();
  
  app.innerHTML = `
    ${renderNavbar()}
    <main id="main-content">
      ${pageContent}
    </main>
    ${renderFooter()}
    <button class="back-to-top" id="back-to-top" aria-label="Lên đầu trang">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="18 15 12 9 6 15"/></svg>
    </button>
  `;
  
  // Update active nav link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.dataset.page === page) {
      link.classList.add('active');
    }
  });
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'instant' });
  
  // Re-init interactions
  initInteractiveFeatures();
}

// ─── Navigation Handler ──────────────────────────────────────
function navigateTo(page) {
  if (page && routes[page]) {
    window.location.hash = page === 'home' ? '' : page;
    renderApp(page);
  }
}

// Listen for hash changes
window.addEventListener('hashchange', () => {
  const page = getPageFromHash();
  if (page !== currentPage) {
    renderApp(page);
  }
});

// ─── Click delegation for data-page links ─────────────────────
document.addEventListener('click', (e) => {
  const pageLink = e.target.closest('[data-page]');
  if (pageLink) {
    e.preventDefault();
    const page = pageLink.dataset.page;
    navigateTo(page);
  }
});

// ─── Interactive Features ────────────────────────────────────
function initInteractiveFeatures() {
  // ─── Navbar scroll effect
  const navbar = document.getElementById('navbar');
  if (navbar) {
    const scrollHandler = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    };
    window.removeEventListener('scroll', scrollHandler);
    window.addEventListener('scroll', scrollHandler);
    scrollHandler();
  }

  // ─── Mobile hamburger
  const hamburger = document.getElementById('hamburger-btn');
  const navLinks = document.getElementById('nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

  // ─── Back to top
  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    const scrollBtnHandler = () => {
      backToTop.classList.toggle('visible', window.scrollY > 300);
    };
    window.addEventListener('scroll', scrollBtnHandler);
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ─── Scroll reveal
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.service-card, .stats-card, .why-item, .value-item, .about-card, .contact-info-item, .support-card, .blog-item, .order-card').forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${i * 0.06}s`;
    revealObserver.observe(el);
  });

  document.querySelectorAll('.about-text, .why-text, .section-header, .about-visual, .why-stats-panel, .contact-form, .support-hero-text, .contact-form-section, .partner-cta').forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
  });

  // ─── Animated counter
  function animateCounter(el, target, duration = 1400) {
    const isLarge = target >= 1000;
    let start = null;
    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);
      el.textContent = isLarge ? current.toLocaleString('vi-VN') : current;
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = isLarge ? target.toLocaleString('vi-VN') : target;
    }
    requestAnimationFrame(step);
  }

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target);
        if (target) animateCounter(el, target);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.stat-big[data-target]').forEach(el => {
    counterObserver.observe(el);
  });

  // ─── Contact form submission (home page form)
  const homeForm = document.getElementById('contact-form-home');
  if (homeForm) {
    homeForm.addEventListener('submit', (e) => {
      e.preventDefault();
      handleFormSubmit(homeForm, 'home-contact-submit', 'home-form-success');
    });
  }

  // ─── Contact form submission (contact page form)
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      handleFormSubmit(contactForm, 'contact-submit', 'form-success');
    });
  }

  // ─── Blog tab filtering
  const blogTabs = document.getElementById('blog-tabs');
  if (blogTabs) {
    blogTabs.addEventListener('click', (e) => {
      const tab = e.target.closest('.blog-tab');
      if (!tab) return;
      document.querySelectorAll('.blog-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      const filter = tab.dataset.filter;
      document.querySelectorAll('.blog-item').forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  }

  // ─── Order tab filtering
  const orderTabs = document.getElementById('order-tabs');
  if (orderTabs) {
    orderTabs.addEventListener('click', (e) => {
      const tab = e.target.closest('.order-tab');
      if (!tab) return;
      document.querySelectorAll('.order-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  }

  // ─── Account sidebar navigation
  const accountSidebar = document.getElementById('account-sidebar');
  if (accountSidebar) {
    accountSidebar.addEventListener('click', (e) => {
      const navItem = e.target.closest('.account-nav-item');
      if (!navItem) return;
      document.querySelectorAll('.account-nav-item').forEach(item => item.classList.remove('active'));
      navItem.classList.add('active');
    });
  }

  // ─── Cart quantity controls
  document.querySelectorAll('.cart-qty button').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = btn.parentElement.querySelector('input');
      let val = parseInt(input.value) || 1;
      if (btn.classList.contains('qty-plus')) {
        input.value = val + 1;
      } else if (btn.classList.contains('qty-minus') && val > 1) {
        input.value = val - 1;
      }
    });
  });

  // ─── Hover tilt for service cards
  document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rx = ((y - cy) / cy) * 3;
      const ry = ((cx - x) / cx) * 3;
      card.style.transform = `translateY(-4px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  // ─── Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#' || this.dataset.page) return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h') || '64');
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

function handleFormSubmit(form, btnId, successId) {
  const btn = document.getElementById(btnId);
  const success = document.getElementById(successId);
  if (!btn) return;

  btn.textContent = 'Đang gửi...';
  btn.style.opacity = '0.7';
  btn.disabled = true;

  setTimeout(() => {
    form.reset();
    btn.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
      Đã Gửi!`;
    btn.style.background = '#4a7c3f';
    btn.style.color = '#fff';
    btn.style.opacity = '1';
    if (success) success.classList.add('show');
    
    setTimeout(() => {
      btn.innerHTML = `Gửi Thông Tin`;
      btn.style.background = '';
      btn.style.color = '';
      btn.disabled = false;
    }, 3000);
  }, 1000);
}

// ─── Initial Render ──────────────────────────────────────────
const initialPage = getPageFromHash();
renderApp(initialPage);
