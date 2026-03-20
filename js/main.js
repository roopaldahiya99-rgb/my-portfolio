/* ─────────────────────────────────────────────────────────
   MAIN.JS — Multi-page Portfolio
   Home: Map + Passport | Learning: Tabs + Sectors | About
───────────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.page;

  initNav();
  initReveal();

  if (page === 'home') {
    initMap();
    initStatCounters();
    initPassportGrid();
  }

  if (page === 'learning') {
    initLearning();
    initSectors();
    initModal();
    scrollToHash();
  }

  if (page === 'about') {
    initAbout();
  }
});

/* ════════════════════════════════════════════════════════
   NAV
════════════════════════════════════════════════════════ */
function initNav() {
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');

  if (document.body.dataset.page === 'home') {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
  }

  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => links.classList.remove('open'));
    });
  }
}

/* ════════════════════════════════════════════════════════
   STAT COUNTERS
════════════════════════════════════════════════════════ */
function initStatCounters() {
  const els = document.querySelectorAll('[data-count]');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      let current = 0;
      const step = Math.ceil(target / 30);
      const interval = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = current;
        if (current >= target) clearInterval(interval);
      }, 40);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });
  els.forEach(el => observer.observe(el));
}

/* ════════════════════════════════════════════════════════
   SCROLL REVEAL
════════════════════════════════════════════════════════ */
function initReveal() {
  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const delay = entry.target.dataset.delay || 0;
      setTimeout(() => entry.target.classList.add('visible'), delay);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => observer.observe(el));
}

/* ════════════════════════════════════════════════════════
   MAP
════════════════════════════════════════════════════════ */
function initMap() {
  const map = L.map('map', {
    center: [20, 15],
    zoom: 2.4,
    zoomControl: false,
    scrollWheelZoom: false,
    attributionControl: true,
    dragging: window.innerWidth > 768,
  });

  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19,
  }).addTo(map);

  drawConnections(map);
  MAP_PINS.forEach(pin => addPin(map, pin));
}

function addPin(map, pin) {
  const colorClass = { invest: 'pin-invest', support: 'pin-support', network: 'pin-network' }[pin.type] || 'pin-invest';

  const icon = L.divIcon({
    className: '',
    html: `<div class="pin-marker ${colorClass}" title="${pin.country}"></div>`,
    iconSize: [16, 16],
    iconAnchor: [8, 8],
    popupAnchor: [0, -14],
  });

  const marker = L.marker([pin.lat, pin.lng], { icon }).addTo(map);
  const tagsHtml = pin.sectors.map(s => `<span class="popup-sector">${s}</span>`).join(' ');

  marker.bindPopup(`
    <div class="pin-popup">
      <img class="popup-flag-img" src="https://flagcdn.com/w40/${pin.code}.png" alt="${pin.country} flag" />
      <h4>${pin.country} — ${pin.company}</h4>
      <p class="popup-role">${pin.role}</p>
      <p style="font-size:0.82rem;color:#4a4a60;line-height:1.6;margin-bottom:10px;">${pin.description}</p>
      ${tagsHtml}
    </div>
  `, { maxWidth: 260 });
}

function drawConnections(map) {
  const auPin = MAP_PINS.find(p => p.country === 'Australia');
  const vnPin = MAP_PINS.find(p => p.country === 'Vietnam');
  if (auPin && vnPin) {
    L.polyline([[auPin.lat, auPin.lng], [vnPin.lat, vnPin.lng]], {
      color: '#5aa674', weight: 1.5, opacity: 0.45, dashArray: '6 6',
    }).addTo(map);
  }

  const usPin = MAP_PINS.find(p => p.country === 'United States');
  const inPin = MAP_PINS.find(p => p.country === 'India');
  if (usPin && inPin) {
    L.polyline([[usPin.lat, usPin.lng], [inPin.lat, inPin.lng]], {
      color: '#3d8bb5', weight: 1.5, opacity: 0.35, dashArray: '6 6',
    }).addTo(map);
  }
}

/* ════════════════════════════════════════════════════════
   PASSPORT GRID (flat 2-row layout)
════════════════════════════════════════════════════════ */
function initPassportGrid() {
  const grid = document.getElementById('passportGrid');
  if (!grid) return;

  PASSPORT_COUNTRIES.forEach((c, i) => {
    const card = document.createElement('div');
    card.className = 'passport-card';
    card.style.transitionDelay = `${i * 80}ms`;

    const sectorsHtml = c.sectors.map(s =>
      `<a href="${s.link}" class="passport-sector-link">${s.name}</a>`
    ).join('');

    card.innerHTML = `
      <img class="passport-flag" src="${c.flag}" alt="${c.region} flag" />
      <div class="passport-region">${c.region}</div>
      <div class="passport-stamp">${c.stamp}</div>
      <div class="passport-sector-links">${sectorsHtml}</div>
    `;

    grid.appendChild(card);
  });

  observeCards(grid.querySelectorAll('.passport-card'));
}

/* ════════════════════════════════════════════════════════
   LEARNING TABS
════════════════════════════════════════════════════════ */
let currentTab = 'classes';

function initLearning() {
  const tabBtns = document.querySelectorAll('.tab');
  const content = document.getElementById('learnContent');
  if (!content) return;

  renderLearnTab(currentTab);

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentTab = btn.dataset.tab;
      content.style.opacity = '0';
      content.style.transform = 'translateY(12px)';
      setTimeout(() => {
        renderLearnTab(currentTab);
        content.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        content.style.opacity = '1';
        content.style.transform = 'translateY(0)';
      }, 180);
    });
  });
}

function renderLearnTab(tabKey) {
  const content = document.getElementById('learnContent');
  const dataMap = { classes: LEARNING.classes, cases: LEARNING.cases, reading: LEARNING.reading, thesis: LEARNING.thesis };
  const items = dataMap[tabKey] || [];
  const typeMap = { classes: 'class', cases: 'case', reading: 'read', thesis: 'thesis' };
  const type = typeMap[tabKey];

  content.innerHTML = `<div class="learn-grid">${
    items.map((item, i) => `
      <div class="learn-card type-${type}" style="transition-delay:${i*70}ms">
        <div class="learn-icon">${item.icon}</div>
        <div class="learn-title">${item.title}</div>
        <div class="learn-meta">${item.meta}</div>
        <div class="learn-takeaway">${item.takeaway}</div>
        ${item.work ? `<div class="learn-work"><strong>What I did:</strong> ${item.work}</div>` : ''}
        <div class="learn-tags">${item.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      </div>
    `).join('')
  }</div>`;

  observeCards(content.querySelectorAll('.learn-card'));
}

/* ════════════════════════════════════════════════════════
   SECTORS
════════════════════════════════════════════════════════ */
function initSectors() {
  const grid = document.getElementById('sectorsGrid');
  if (!grid) return;

  SECTORS.forEach((s, i) => {
    const card = document.createElement('div');
    card.className = `sector-card ${s.cssClass}`;
    card.dataset.sectorId = s.id;
    card.id = s.id;
    card.style.transitionDelay = `${i * 70}ms`;

    card.innerHTML = `
      <div class="sector-icon" style="background:${s.iconBg}">${s.icon}</div>
      <div class="sector-name">${s.name}</div>
      <p class="sector-desc">${s.desc}</p>
      <div class="sector-meta">
        <div class="sector-meta-item">
          <span class="sector-meta-num">${s.investments}</span>
          <span class="sector-meta-label">Investments</span>
        </div>
        <div class="sector-meta-item">
          <span class="sector-meta-num">${s.articles}</span>
          <span class="sector-meta-label">Articles</span>
        </div>
      </div>
    `;

    card.addEventListener('click', () => openSectorModal(s));
    grid.appendChild(card);
  });

  observeCards(grid.querySelectorAll('.sector-card'));
}

/* ════════════════════════════════════════════════════════
   SECTOR MODAL
════════════════════════════════════════════════════════ */
function initModal() {
  const modal    = document.getElementById('sectorModal');
  const backdrop = document.getElementById('modalBackdrop');
  const closeBtn = document.getElementById('modalClose');
  if (!modal) return;

  backdrop.addEventListener('click', closeModal);
  closeBtn.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

function openSectorModal(sector) {
  const modal   = document.getElementById('sectorModal');
  const content = document.getElementById('modalContent');

  const investmentsHtml = sector.investmentList.map(inv => `
    <div class="modal-investment">
      <div class="modal-inv-name">${inv.name}</div>
      <div class="modal-inv-desc">${inv.desc}</div>
    </div>
  `).join('');

  const articlesHtml = sector.articleList.map(a => `
    <div class="modal-article">${a}</div>
  `).join('');

  content.innerHTML = `
    <div class="modal-sector-icon">${sector.icon}</div>
    <div class="modal-sector-title">${sector.name}</div>
    <div class="modal-sector-desc">${sector.detail}</div>
    <div class="modal-subtitle">Investments & Deals</div>
    <div class="modal-investments">${investmentsHtml}</div>
    <div class="modal-subtitle">Articles & Writing</div>
    <div class="modal-articles">${articlesHtml}</div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('sectorModal');
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

/* ════════════════════════════════════════════════════════
   ABOUT PAGE
════════════════════════════════════════════════════════ */
function initAbout() {
  // Bio
  const bioEl = document.getElementById('aboutBio');
  if (bioEl && typeof ABOUT !== 'undefined') {
    bioEl.textContent = ABOUT.bio;
  }

  // Photo
  const photoEl = document.getElementById('aboutPhoto');
  if (photoEl && ABOUT.photo) {
    photoEl.innerHTML = `<img src="${ABOUT.photo}" alt="Roopal" />`;
  }

  // Happy to meet — bullet list
  const meetList = document.getElementById('meetList');
  if (meetList) {
    meetList.innerHTML = ABOUT.happyToMeet.map(item =>
      `<li class="meet-bullet">${item}</li>`
    ).join('');
  }

  // Fun questions — swipeable carousel
  const faqCarousel = document.getElementById('faqCarousel');
  const faqDotsEl = document.getElementById('faqDots');
  if (faqCarousel) {
    ABOUT.funQuestions.forEach((faq, i) => {
      const slide = document.createElement('div');
      slide.className = 'faq-slide' + (i === 0 ? ' active' : '');
      slide.dataset.idx = i;
      slide.innerHTML = `
        <div class="faq-question">${faq.question}</div>
        <div class="faq-answer">${faq.answer}</div>
      `;
      faqCarousel.appendChild(slide);
    });

    // Dots
    if (faqDotsEl) {
      ABOUT.funQuestions.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.className = 'faq-dot' + (i === 0 ? ' active' : '');
        dot.addEventListener('click', () => showFaqSlide(i));
        faqDotsEl.appendChild(dot);
      });
    }

    // Auto-swipe arrows
    const prevBtn = document.getElementById('faqPrev');
    const nextBtn = document.getElementById('faqNext');
    if (prevBtn) prevBtn.addEventListener('click', () => {
      const cur = parseInt(faqCarousel.querySelector('.faq-slide.active').dataset.idx);
      showFaqSlide(cur > 0 ? cur - 1 : ABOUT.funQuestions.length - 1);
    });
    if (nextBtn) nextBtn.addEventListener('click', () => {
      const cur = parseInt(faqCarousel.querySelector('.faq-slide.active').dataset.idx);
      showFaqSlide(cur < ABOUT.funQuestions.length - 1 ? cur + 1 : 0);
    });
  }

  // Companies — logos only
  const logosRow = document.getElementById('logosRow');
  if (logosRow) {
    ABOUT.companies.forEach(c => {
      const el = document.createElement(c.url ? 'a' : 'div');
      el.className = 'logo-item';
      if (c.url) { el.href = c.url; el.target = '_blank'; el.rel = 'noopener'; }
      el.innerHTML = c.logo
        ? `<img src="${c.logo}" alt="${c.name}" />`
        : `<span class="logo-text">${c.name}</span>`;
      logosRow.appendChild(el);
    });
  }

  // Networks — compact rows with thumbnail + name + description
  const networksList = document.getElementById('networksList');
  if (networksList) {
    ABOUT.networks.forEach(n => {
      const row = document.createElement('div');
      row.className = 'network-row';
      row.innerHTML = `
        <div class="network-thumb">${n.photo ? `<img src="${n.photo}" alt="${n.name}" />` : ''}</div>
        <div class="network-row-info">
          <div class="network-row-name">${n.name}</div>
          <div class="network-row-desc">${n.desc}</div>
        </div>
      `;
      networksList.appendChild(row);
    });
  }

  // Connect links
  const connectLinks = document.getElementById('connectLinks');
  if (connectLinks) {
    // LinkedIn
    connectLinks.innerHTML = `
      <a href="${ABOUT.links.linkedin}" target="_blank" rel="noopener" class="contact-btn">
        <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
        LinkedIn
      </a>
      <a href="${ABOUT.links.email}" class="contact-btn">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        Email
      </a>
      <a href="${ABOUT.links.calendly}" target="_blank" rel="noopener" class="contact-btn contact-btn-outline">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
        Book a call
      </a>
      ${ABOUT.links.cv ? `
      <a href="${ABOUT.links.cv}" download class="contact-btn contact-btn-outline">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        Download CV
      </a>
      ` : ''}
    `;
  }
}

/* ════════════════════════════════════════════════════════
   FAQ SLIDE
════════════════════════════════════════════════════════ */
function showFaqSlide(idx) {
  const slides = document.querySelectorAll('.faq-slide');
  const dots = document.querySelectorAll('.faq-dot');
  slides.forEach((s, i) => s.classList.toggle('active', i === idx));
  dots.forEach((d, i) => d.classList.toggle('active', i === idx));
}

/* ════════════════════════════════════════════════════════
   SCROLL TO HASH (learning page sector anchors)
════════════════════════════════════════════════════════ */
function scrollToHash() {
  if (window.location.hash) {
    setTimeout(() => {
      const target = document.querySelector(window.location.hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        target.style.transition = 'box-shadow 0.3s ease';
        target.style.boxShadow = '0 0 0 4px rgba(58,125,86,0.3)';
        setTimeout(() => { target.style.boxShadow = ''; }, 2000);
      }
    }, 600);
  }
}

/* ════════════════════════════════════════════════════════
   HELPER — observe dynamically created cards
════════════════════════════════════════════════════════ */
function observeCards(cards) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const delay = el.style.transitionDelay || '0ms';
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = `opacity 0.5s ease ${delay}, transform 0.5s ease ${delay}`;

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        });
      });

      observer.unobserve(el);
    });
  }, { threshold: 0.08 });

  cards.forEach(c => observer.observe(c));
}
