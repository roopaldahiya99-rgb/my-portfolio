/* ─────────────────────────────────────────────────────────
   MAIN.JS — Portfolio Interactivity
   Map · Animations · Tabs · Sectors · Network · Modal
───────────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initMap();
  initStatCounters();
  initReveal();
  initPinsGrid();
  initLearning();
  initSectors();
  initNetwork();
  initModal();
});

/* ════════════════════════════════════════════════════════
   NAV
════════════════════════════════════════════════════════ */
function initNav() {
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');

  // Scroll: add .scrolled class
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  // Mobile toggle
  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
  });

  // Close on link click (mobile)
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => links.classList.remove('open'));
  });
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
    entries.forEach((entry, i) => {
      if (!entry.isIntersecting) return;
      // stagger children if it's a grid
      const delay = entry.target.dataset.delay || 0;
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, delay);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => observer.observe(el));
}

/* ════════════════════════════════════════════════════════
   MAP
════════════════════════════════════════════════════════ */
function initMap() {
  // Light, warm CartoDB Voyager tiles
  const map = L.map('map', {
    center: [20, 15],
    zoom: 2.4,
    zoomControl: false,
    scrollWheelZoom: false,
    attributionControl: true,
    dragging: window.innerWidth > 768,
  });

  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19,
  }).addTo(map);

  // Draw connection lines between related pins
  drawConnections(map);

  // Add pins
  MAP_PINS.forEach(pin => addPin(map, pin));
}

function addPin(map, pin) {
  const colorClass = {
    invest:  'pin-invest',
    support: 'pin-support',
    network: 'pin-network',
  }[pin.type] || 'pin-invest';

  const icon = L.divIcon({
    className: '',
    html: `<div class="pin-marker ${colorClass}" title="${pin.country}"></div>`,
    iconSize: [16, 16],
    iconAnchor: [8, 8],
    popupAnchor: [0, -14],
  });

  const marker = L.marker([pin.lat, pin.lng], { icon }).addTo(map);

  const tagsHtml = pin.sectors
    .map(s => `<span class="popup-sector">${s}</span>`)
    .join(' ');

  marker.bindPopup(`
    <div class="pin-popup">
      <img class="popup-flag-img" src="https://flagcdn.com/w40/${pin.code}.png" alt="${pin.country} flag" />
      <h4>${pin.country} — ${pin.company}</h4>
      <p class="popup-role">${pin.role}</p>
      <p style="font-size:0.82rem;color:#4a4a60;line-height:1.6;margin-bottom:10px;">
        ${pin.description}
      </p>
      ${tagsHtml}
    </div>
  `, { maxWidth: 260 });
}

function drawConnections(map) {
  // Australia → Vietnam (funded healthcare deal)
  const auPin  = MAP_PINS.find(p => p.country === 'Australia');
  const vnPin  = MAP_PINS.find(p => p.country === 'Vietnam');
  if (auPin && vnPin) {
    L.polyline(
      [[auPin.lat, auPin.lng], [vnPin.lat, vnPin.lng]],
      {
        color: '#5aa674',
        weight: 1.5,
        opacity: 0.45,
        dashArray: '6 6',
      }
    ).addTo(map);
  }

  // US → India (Google News)
  const usPin = MAP_PINS.find(p => p.country === 'United States');
  const inPin = MAP_PINS.find(p => p.country === 'India');
  if (usPin && inPin) {
    L.polyline(
      [[usPin.lat, usPin.lng], [inPin.lat, inPin.lng]],
      {
        color: '#3d8bb5',
        weight: 1.5,
        opacity: 0.35,
        dashArray: '6 6',
      }
    ).addTo(map);
  }
}

/* ════════════════════════════════════════════════════════
   PINS GRID (below hero)
════════════════════════════════════════════════════════ */
function initPinsGrid() {
  const grid = document.getElementById('pinsGrid');
  if (!grid) return;

  MAP_PINS.forEach((pin, i) => {
    const card = document.createElement('div');
    card.className = 'pin-card';
    card.style.transitionDelay = `${i * 60}ms`;

    const tagsHtml = pin.sectors
      .map(s => `<span class="tag ${pin.tagClass}">${s}</span>`)
      .join('');

    card.innerHTML = `
      <img class="pin-card-flag-img" src="https://flagcdn.com/w40/${pin.code}.png" alt="${pin.country} flag" />
      <div class="pin-card-country">${pin.country}</div>
      <p class="pin-card-desc">${pin.description}</p>
      <div class="pin-card-tags">${tagsHtml}</div>
    `;

    grid.appendChild(card);
  });

  // Re-run reveal for dynamically added cards
  observeCards(grid.querySelectorAll('.pin-card'));
}

/* ════════════════════════════════════════════════════════
   LEARNING TABS
════════════════════════════════════════════════════════ */
let currentTab = 'classes';

function initLearning() {
  const tabBtns  = document.querySelectorAll('.tab');
  const content  = document.getElementById('learnContent');
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
  const dataMap = {
    classes: LEARNING.classes,
    cases:   LEARNING.cases,
    reading: LEARNING.reading,
  };
  const items = dataMap[tabKey] || [];

  const typeMap = { classes: 'class', cases: 'case', reading: 'read' };
  const type = typeMap[tabKey];

  content.innerHTML = `<div class="learn-grid">${
    items.map((item, i) => `
      <div class="learn-card type-${type}" style="transition-delay:${i*70}ms">
        <div class="learn-icon">${item.icon}</div>
        <div class="learn-title">${item.title}</div>
        <div class="learn-meta">${item.meta}</div>
        <div class="learn-takeaway">${item.takeaway}</div>
        <div class="learn-tags">${
          item.tags.map(t => `<span class="tag">${t}</span>`).join('')
        }</div>
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
   NETWORK
════════════════════════════════════════════════════════ */
function initNetwork() {
  const grid = document.getElementById('networkGrid');
  if (!grid) return;

  NETWORK.forEach((n, i) => {
    const card = document.createElement('div');
    card.className = 'network-card';
    card.style.transitionDelay = `${i * 80}ms`;

    card.innerHTML = `
      <div class="network-header">
        <div class="network-icon">${n.icon}</div>
        <div>
          <div class="network-name">${n.name}</div>
          <div class="network-sub">${n.sub}</div>
        </div>
      </div>
      <p class="network-desc">${n.desc}</p>
      <div class="network-highlights">
        ${n.highlights.map(h => `<div class="network-highlight">${h}</div>`).join('')}
      </div>
    `;

    grid.appendChild(card);
  });

  observeCards(grid.querySelectorAll('.network-card'));
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

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
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
   HELPER — observe dynamically created cards
════════════════════════════════════════════════════════ */
function observeCards(cards) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const delay = el.style.transitionDelay || '0ms';
      // Cards are already visible inline — just fade in
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
