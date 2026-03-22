/* ─────────────────────────────────────────────────────────
   MAIN.JS — Full Redesign v2
   Home: Deal Map + Spotlight + Simple Lessons
   Field Notes: Diary layout with tabbed right panel
   Investor/Learner: Bio + Roadmap Timeline + 2-col Communities
───────────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.page;

  initNav();
  initReveal();

  if (page === 'home') {
    initMap();
    initStatCounters();
    initDealSpotlight();
    initLessons();
  }

  if (page === 'fieldnotes') {
    initFieldNotes();
  }

  if (page === 'investor-learner') {
    initInvestorLearner();
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
   MAP — Deal Map with investor→destination connections
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

  const investorMap = {};
  DEAL_MAP.investors.forEach(inv => { investorMap[inv.id] = inv; });

  const lineColors = ['#5aa674', '#3d8bb5', '#d4932a', '#7c5cbf', '#2e9aa8', '#e8674d'];

  DEAL_MAP.destinations.forEach((dest, di) => {
    dest.fromInvestors.forEach(invId => {
      const inv = investorMap[invId];
      if (!inv) return;
      L.polyline([[inv.lat, inv.lng], [dest.lat, dest.lng]], {
        color: lineColors[di % lineColors.length],
        weight: 1.5,
        opacity: 0.3,
        dashArray: '6 6',
      }).addTo(map);
    });
  });

  const renderedInvestors = new Set();
  DEAL_MAP.investors.forEach(inv => {
    const key = `${inv.lat}-${inv.lng}`;
    if (renderedInvestors.has(key)) return;
    renderedInvestors.add(key);

    const icon = L.divIcon({
      className: '',
      html: `<div class="pin-marker pin-origin" title="${inv.city}"></div>`,
      iconSize: [10, 10],
      iconAnchor: [5, 5],
    });
    const marker = L.marker([inv.lat, inv.lng], { icon }).addTo(map);
    marker.bindTooltip(inv.city, { direction: 'top', offset: [0, -8], className: 'origin-tooltip' });
  });

  DEAL_MAP.destinations.forEach(dest => {
    const icon = L.divIcon({
      className: '',
      html: `<div class="pin-marker pin-invest" title="${dest.country}"></div>`,
      iconSize: [16, 16],
      iconAnchor: [8, 8],
      popupAnchor: [0, -14],
    });

    const marker = L.marker([dest.lat, dest.lng], { icon }).addTo(map);

    const stagesHtml = dest.stages.map(s => `<span class="popup-stage">${s}</span>`).join(' ');
    const sectorsHtml = dest.sectors.map(s => `<span class="popup-sector">${s}</span>`).join(' ');

    marker.bindPopup(`
      <div class="pin-popup deal-popup">
        <img class="popup-flag-img" src="https://flagcdn.com/w40/${dest.code}.png" alt="${dest.country} flag" />
        <div class="popup-deal-label">Deal Spotlight</div>
        <h4>${dest.country}</h4>
        <p class="popup-spotlight">${dest.spotlight}</p>
        <div class="popup-tags">
          ${stagesHtml}
          ${sectorsHtml}
        </div>
      </div>
    `, { maxWidth: 280 });

    marker.on('mouseover', function() { this.openPopup(); });
  });

  const star = DEAL_MAP.operationalStar;
  const starIcon = L.divIcon({
    className: '',
    html: `<div class="pin-marker pin-star" title="${star.city}">★</div>`,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
    popupAnchor: [0, -14],
  });

  const starMarker = L.marker([star.lat, star.lng], { icon: starIcon }).addTo(map);
  starMarker.bindPopup(`
    <div class="pin-popup">
      <img class="popup-flag-img" src="https://flagcdn.com/w40/${star.code}.png" alt="India flag" />
      <div class="popup-deal-label">Operational Experience</div>
      <h4>${star.city}, ${star.country}</h4>
      <p style="font-size:0.82rem;color:#4a4a60;line-height:1.6;">${star.detail}</p>
    </div>
  `, { maxWidth: 280 });
  starMarker.on('mouseover', function() { this.openPopup(); });
}

/* ════════════════════════════════════════════════════════
   DEAL SPOTLIGHT (2 featured deals) — sector+stage on top, no role, "What I Learned"
════════════════════════════════════════════════════════ */
function initDealSpotlight() {
  const container = document.getElementById('dealCards');
  if (!container) return;

  container.innerHTML = DEAL_SPOTLIGHT.map((deal, i) => `
    <div class="deal-card" style="transition-delay:${i * 100}ms">
      <div class="deal-card-top">
        <img class="deal-flag" src="https://flagcdn.com/w40/${deal.code}.png" alt="${deal.region} flag" />
        <div class="deal-top-tags">
          <span class="deal-stage-tag">${deal.stage}</span>
          ${deal.sectors.map(s => `<span class="tag">${s}</span>`).join('')}
        </div>
      </div>
      <h3 class="deal-title">${deal.title}</h3>
      <p class="deal-desc">${deal.description}</p>
      <div class="deal-insight">
        <strong>What I Learned:</strong> ${deal.whatILearned}
      </div>
    </div>
  `).join('');

  observeCards(container.querySelectorAll('.deal-card'));
}

/* ════════════════════════════════════════════════════════
   LESSONS LEARNED — Simple bullet points
════════════════════════════════════════════════════════ */
function initLessons() {
  const listEl = document.getElementById('lessonsList');
  if (!listEl) return;

  listEl.innerHTML = `
    <ul class="lessons-bullets">
      ${LESSONS_LEARNED.lessons.map(lesson => `
        <li class="lesson-bullet">${lesson}</li>
      `).join('')}
    </ul>
  `;

  observeCards(listEl.querySelectorAll('.lesson-bullet'));
}

/* ════════════════════════════════════════════════════════
   FIELD NOTES PAGE — Diary layout with left hero + right tabbed content
════════════════════════════════════════════════════════ */
function initFieldNotes() {
  renderDiaryLeft();
  renderDiaryRight();
}

function renderDiaryLeft() {
  const container = document.getElementById('diaryLeft');
  if (!container) return;

  container.innerHTML = `
    <div class="diary-hero-content">
      <p class="section-label">${FIELD_NOTES.hero.label}</p>
      <h1 class="diary-title">${FIELD_NOTES.hero.title}</h1>
      <p class="diary-subtitle">${FIELD_NOTES.hero.subtitle}</p>
      <div class="diary-scribble diary-scribble-1">~</div>
      <div class="diary-scribble diary-scribble-2">*</div>
      <div class="diary-scribble diary-scribble-3">//</div>
    </div>
  `;
}

function renderDiaryRight() {
  const container = document.getElementById('diaryRight');
  if (!container) return;

  // Build tab bar
  const tabs = [
    { id: 'field', label: 'Lessons from Deals' },
    { id: 'classroom', label: 'Formal Learning' },
    { id: 'sources', label: 'Sources I Rely On' },
  ];

  const tabBar = `
    <div class="diary-tabs">
      ${tabs.map((t, i) => `
        <button class="diary-tab ${i === 0 ? 'active' : ''}" data-tab="${t.id}">${t.label}</button>
      `).join('')}
    </div>
  `;

  // Build content panels
  const fieldPanel = `
    <div class="diary-panel active" data-panel="field">
      ${FIELD_NOTES.fromTheField.map((article, i) => `
        <div class="field-article expandable" style="transition-delay:${i * 100}ms" onclick="this.classList.toggle('expanded')">
          <div class="field-article-header">
            <div class="field-article-icon">${article.icon}</div>
            <div>
              <h3 class="field-article-title">${article.title}</h3>
              <p class="field-article-summary">${article.summary}</p>
            </div>
            <div class="expand-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M6 9l6 6 6-6"/></svg>
            </div>
          </div>
          <div class="field-article-body">
            <div class="field-article-content">${article.detail}</div>
            <div class="field-article-tags">
              ${article.tags.map(t => `<span class="tag">${t}</span>`).join('')}
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  const classroomPanel = `
    <div class="diary-panel" data-panel="classroom">
      ${FIELD_NOTES.fromTheClassroom.map((item, i) => `
        <div class="field-article expandable" style="transition-delay:${i * 100}ms" onclick="this.classList.toggle('expanded')">
          <div class="field-article-header">
            <div class="field-article-icon">${item.icon}</div>
            <div>
              <h3 class="field-article-title">${item.title}</h3>
              <p class="field-article-summary">${item.whatILearned}</p>
            </div>
            <div class="expand-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M6 9l6 6 6-6"/></svg>
            </div>
          </div>
          <div class="field-article-body">
            <div class="field-article-content"><p>${item.details}</p></div>
            <div class="field-article-tags">
              ${item.tags.map(t => `<span class="tag">${t}</span>`).join('')}
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  const sourcesPanel = `
    <div class="diary-panel" data-panel="sources">
      <div class="sources-list">
        ${FIELD_NOTES.fromPeople.map((src, i) => `
          <div class="source-item" style="transition-delay:${i * 80}ms">
            <div class="source-icon">${src.icon}</div>
            <div class="source-info">
              <div class="source-top">
                <span class="source-name">${src.name}</span>
                <span class="source-type">${src.type}</span>
              </div>
              <p class="source-why">${src.why}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  container.innerHTML = tabBar + fieldPanel + classroomPanel + sourcesPanel;

  // Tab switching logic
  const tabBtns = container.querySelectorAll('.diary-tab');
  const panels = container.querySelectorAll('.diary-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      container.querySelector(`[data-panel="${btn.dataset.tab}"]`).classList.add('active');
    });
  });
}

/* ════════════════════════════════════════════════════════
   INVESTOR / LEARNER PAGE (About)
════════════════════════════════════════════════════════ */
function initInvestorLearner() {
  renderAboutHero();
  renderTimeline();
  renderCommunities();
  renderContactCta();
}

function renderAboutHero() {
  const container = document.getElementById('aboutHero');
  if (!container) return;

  const photoHtml = INVESTOR_LEARNER.hero.photo
    ? `<img src="${INVESTOR_LEARNER.hero.photo}" alt="Roopal" />`
    : `<div class="about-photo-placeholder"><span>R</span></div>`;

  container.innerHTML = `
    <div class="about-photo-wrap">
      <div class="about-photo">${photoHtml}</div>
    </div>
    <div class="about-intro">
      <h1 class="about-name"><em>Roopal</em></h1>
      <p class="about-tagline">Investor · Traveller · Perpetual Student</p>
      <p class="about-bio">${INVESTOR_LEARNER.hero.bio}</p>
    </div>
  `;
}

/* ── ROADMAP TIMELINE (non-expandable, with logos) ── */
function renderTimeline() {
  const container = document.getElementById('timelineWrap');
  if (!container) return;

  container.innerHTML = `
    <div class="roadmap">
      ${INVESTOR_LEARNER.timeline.map((item, i) => `
        <div class="roadmap-stop" style="transition-delay:${i * 80}ms">
          <div class="roadmap-node">
            ${item.logo
              ? `<img src="${item.logo}" alt="${item.era}" class="roadmap-logo" />`
              : `<span class="roadmap-emoji">${item.icon}</span>`
            }
          </div>
          <div class="roadmap-content">
            <div class="roadmap-header">
              <span class="roadmap-era">${item.era}</span>
            </div>
            <h3 class="roadmap-title">${item.title}</h3>
            <p class="roadmap-detail">${item.detail}</p>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  observeCards(container.querySelectorAll('.roadmap-stop'));
}

/* ── COMMUNITIES (2+ columns with logos + photo) ── */
function renderCommunities() {
  const container = document.getElementById('communitiesWrap');
  if (!container) return;

  const photoHtml = INVESTOR_LEARNER.communities.photo
    ? `<img src="${INVESTOR_LEARNER.communities.photo}" alt="Community" />`
    : `<div class="community-photo-placeholder"><span>🤝</span></div>`;

  const cardsHtml = INVESTOR_LEARNER.communities.list.map(c => {
    const logoHtml = c.logo
      ? `<img src="${c.logo}" alt="${c.name}" class="community-logo" />`
      : `<div class="community-logo-placeholder">${c.name.charAt(0)}</div>`;
    const nameHtml = c.url
      ? `<a href="${c.url}" target="_blank" rel="noopener">${c.name}</a>`
      : c.name;
    return `
      <div class="community-card">
        ${logoHtml}
        <div class="community-card-text">
          <div class="community-name">${nameHtml}</div>
          <div class="community-desc">${c.desc}</div>
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <div class="community-photo">${photoHtml}</div>
    <div class="community-grid">${cardsHtml}</div>
  `;
}

function renderContactCta() {
  const container = document.getElementById('contactCta');
  if (!container) return;

  const c = INVESTOR_LEARNER.contact;
  container.innerHTML = `
    <p class="section-label" style="color:var(--green-light)">Let's Connect</p>
    <h2 style="color:var(--white);font-family:var(--font-serif);font-size:clamp(1.8rem,3vw,2.6rem);margin:12px 0 18px;line-height:1.3;">I'd Love to <em style="color:var(--green-light)">Hear From You</em></h2>
    <p class="contact-sub">${c.message}</p>
    <div class="contact-links">
      <a href="${c.email}" class="contact-btn">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        Email Me
      </a>
      <a href="${c.calendly}" target="_blank" rel="noopener" class="contact-btn contact-btn-outline">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
        Book a Call
      </a>
      <a href="${c.linkedin}" target="_blank" rel="noopener" class="contact-btn contact-btn-outline">
        <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        LinkedIn
      </a>
    </div>
  `;
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
