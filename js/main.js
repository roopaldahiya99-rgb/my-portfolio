/* ─────────────────────────────────────────────────────────
   MAIN.JS — Full Redesign v3
   Home: Map + Side-by-side Lessons & Deal Carousel
   Field Notes: Diary with handwritten style, live date, icon tabs
   About: Bio + Explore Path + Roadmap + Communities
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
   MAP
════════════════════════════════════════════════════════ */
function initMap() {
  const map = L.map('map', {
    center: [35, -60],
    zoom: 2.5,
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

  // Build pin lookup for connections
  const pinMap = {};
  DEAL_MAP.pins.forEach(p => { pinMap[p.id] = p; });

  // Draw connection lines
  DEAL_MAP.connections.forEach(conn => {
    const from = pinMap[conn.from];
    const to = pinMap[conn.to];
    if (!from || !to) return;
    L.polyline([[from.lat, from.lng], [to.lat, to.lng]], {
      color: conn.color || '#5aa674',
      weight: 1.5,
      opacity: 0.3,
      dashArray: '6 6',
    }).addTo(map);
  });

  // Render all pins
  DEAL_MAP.pins.forEach(pin => {
    let markerHtml, iconSize, iconAnchor;

    if (pin.type === 'ops') {
      markerHtml = `<div class="pin-marker pin-star" title="${pin.country}">★</div>`;
      iconSize = [20, 20];
      iconAnchor = [10, 10];
    } else if (pin.type === 'investor') {
      markerHtml = `<div class="pin-marker pin-origin" title="${pin.country}"></div>`;
      iconSize = [10, 10];
      iconAnchor = [5, 5];
    } else {
      markerHtml = `<div class="pin-marker pin-invest" title="${pin.country}"></div>`;
      iconSize = [16, 16];
      iconAnchor = [8, 8];
    }

    const icon = L.divIcon({
      className: '',
      html: markerHtml,
      iconSize: iconSize,
      iconAnchor: iconAnchor,
      popupAnchor: [0, -14],
    });

    const marker = L.marker([pin.lat, pin.lng], { icon }).addTo(map);

    const logoHtml = pin.logo
      ? `<img src="${pin.logo}" alt="" style="width:20px;height:20px;object-fit:contain;vertical-align:middle;margin-right:4px;" />`
      : '';

    const tagsHtml = (pin.stages || pin.sectors)
      ? `<div class="popup-tags">${(pin.stages || []).map(s => `<span class="popup-stage">${s}</span>`).join('')}${(pin.sectors || []).map(s => `<span class="popup-sector">${s}</span>`).join('')}</div>`
      : '';

    marker.bindPopup(`
      <div class="pin-popup deal-popup">
        <div class="popup-header">
          <img class="popup-flag-img" src="https://flagcdn.com/w40/${pin.code}.png" alt="${pin.country} flag" />
          <h4>${pin.country}</h4>
        </div>
        <p class="popup-spotlight">${logoHtml}${pin.desc}</p>
        ${tagsHtml}
      </div>
    `, { maxWidth: 280 });

    marker.on('mouseover', function() { this.openPopup(); });
  });
}

/* ════════════════════════════════════════════════════════
   DEAL SPOTLIGHT — 3 cards with arrow navigation
════════════════════════════════════════════════════════ */
function initDealSpotlight() {
  const container = document.getElementById('dealCards');
  const counter = document.getElementById('dealCounter');
  if (!container) return;

  let currentDeal = 0;

  function renderDeal(index) {
    const deal = DEAL_SPOTLIGHT[index];
    container.innerHTML = `
      <div class="deal-card">
        <div class="deal-card-header">
          <img class="deal-flag" src="https://flagcdn.com/w40/${deal.code}.png" alt="flag" />
          <h3 class="deal-title">${deal.title}</h3>
        </div>
        <p class="deal-desc">${deal.description}</p>
        <div class="deal-insight">
          <strong>What I Learned:</strong> ${deal.whatILearned}
        </div>
      </div>
    `;
    if (counter) counter.textContent = `${index + 1} / ${DEAL_SPOTLIGHT.length}`;
  }

  renderDeal(0);

  const leftBtn = document.getElementById('dealLeft');
  const rightBtn = document.getElementById('dealRight');
  if (leftBtn && rightBtn) {
    leftBtn.addEventListener('click', () => {
      currentDeal = (currentDeal - 1 + DEAL_SPOTLIGHT.length) % DEAL_SPOTLIGHT.length;
      renderDeal(currentDeal);
    });
    rightBtn.addEventListener('click', () => {
      currentDeal = (currentDeal + 1) % DEAL_SPOTLIGHT.length;
      renderDeal(currentDeal);
    });
  }
}

/* ════════════════════════════════════════════════════════
   LESSONS — Plain simple bullet points
════════════════════════════════════════════════════════ */
function initLessons() {
  const listEl = document.getElementById('lessonsList');
  if (!listEl) return;

  listEl.innerHTML = `
    <ul class="lessons-plain">
      ${LESSONS_LEARNED.lessons.map(lesson => `
        <li>${lesson}</li>
      `).join('')}
    </ul>
  `;
}

/* ════════════════════════════════════════════════════════
   FIELD NOTES PAGE — Diary with live date, handwritten style, icon tabs
════════════════════════════════════════════════════════ */
function initFieldNotes() {
  renderDiaryLeft();
  renderDiaryRight();
}

function renderDiaryLeft() {
  const container = document.getElementById('diaryLeft');
  if (!container) return;

  // Live date
  const now = new Date();
  const dateStr = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  container.innerHTML = `
    <div class="diary-hero-content">
      <div class="diary-date">${dateStr}</div>
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

  // Build tab bar with icons and new names
  const tabs = [
    { id: 'field', label: 'Deals — Go and No-Go', icon: '🧭' },
    { id: 'classroom', label: 'Classes & Cases', icon: '📚' },
    { id: 'sources', label: 'People & Perspectives', icon: '🎙️' },
  ];

  const tabBar = `
    <div class="diary-tabs">
      ${tabs.map((t, i) => `
        <button class="diary-tab ${i === 0 ? 'active' : ''}" data-tab="${t.id}">
          <span class="diary-tab-icon">${t.icon}</span> ${t.label}
        </button>
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
      <ul class="sources-plain">
        ${FIELD_NOTES.fromPeople.map(src => `
          <li><a href="${src.url}" target="_blank" rel="noopener"><strong>${src.name}</strong></a> — ${src.why}</li>
        `).join('')}
      </ul>
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
      <p class="about-tagline">${INVESTOR_LEARNER.hero.tagline}</p>
      <p class="about-bio">${INVESTOR_LEARNER.hero.bio}</p>
    </div>
  `;
}

/* ── SQUIGGLY ROADMAP — alternating up/down, no scroll ── */
function renderTimeline() {
  const container = document.getElementById('timelineWrap');
  if (!container) return;

  const items = INVESTOR_LEARNER.timeline;

  container.innerHTML = `
    <div class="rm-track">
      ${items.map((item, i) => {
        const isUp = i % 2 === 0;
        const isFuture = item.isFuture;

        const colorClass = item.color ? `rm-color-${item.color}` : '';
        const coordsHtml = item.coords ? `<span class="rm-coords">${item.coords}</span>` : '';
        const noteHtml = ''; // annotations now rendered separately in overlay layer

        const cardHtml = `
          <div class="rm-card ${isFuture ? 'rm-future-card' : ''}">
            <span class="rm-era">${item.era}</span>
            <h4 class="rm-title">${item.title}</h4>
            <p class="rm-why">${item.why}</p>
          </div>
        `;

        const dotHtml = `
          <div class="rm-dot ${isFuture ? 'rm-future-dot' : ''} ${colorClass}">
            ${item.logo
              ? `<img src="${item.logo}" alt="${item.era}" class="rm-logo" />`
              : `<span class="rm-emoji">${item.icon}</span>`
            }
            ${coordsHtml}
          </div>
        `;

        return `
          <div class="rm-item ${isUp ? 'rm-up' : 'rm-down'} ${isFuture ? 'rm-future' : ''}" style="transition-delay:${i * 60}ms">
            <div class="rm-area rm-area-top">${isUp ? cardHtml : (noteHtml || '')}</div>
            ${dotHtml}
            <div class="rm-area rm-area-bottom">${isUp ? (noteHtml || '') : cardHtml}</div>
          </div>
        `;
      }).join('')}
    </div>
  `;

  // Draw SVG path and annotations after layout
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const track = container.querySelector('.rm-track');
      drawRoadmapPath(track);
      drawAnnotations(track, items);

      // Redraw on resize
      let timer;
      window.addEventListener('resize', () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          const old = track.querySelector('.rm-svg');
          if (old) old.remove();
          const oldAnnot = track.querySelector('.rm-annotation-layer');
          if (oldAnnot) oldAnnot.remove();
          drawRoadmapPath(track);
          drawAnnotations(track, items);
        }, 200);
      });
    });
  });

  observeCards(container.querySelectorAll('.rm-item'));
}

function drawRoadmapPath(track) {
  if (!track) return;
  const dots = [...track.querySelectorAll('.rm-dot')];
  const trackRect = track.getBoundingClientRect();

  const points = dots.map(dot => {
    const rect = dot.getBoundingClientRect();
    return {
      x: rect.left + rect.width / 2 - trackRect.left,
      y: rect.top + rect.height / 2 - trackRect.top,
    };
  });

  if (points.length < 2) return;

  const futureIdx = dots.findIndex(d => d.classList.contains('rm-future-dot'));
  const solidEnd = futureIdx > 0 ? futureIdx : points.length;

  // Build curvy flight path with sweeping curves
  let solidD = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < solidEnd; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const midX = (prev.x + curr.x) / 2;
    const wave = 60 * (i % 2 === 0 ? 1 : -1);
    solidD += ` C ${midX} ${prev.y + wave}, ${midX} ${curr.y - wave}, ${curr.x} ${curr.y}`;
  }

  // Future dashed segment
  let dashedD = '';
  if (futureIdx > 0 && futureIdx < points.length) {
    const prev = points[futureIdx - 1];
    const curr = points[futureIdx];
    const midX = (prev.x + curr.x) / 2;
    const wave = 60 * (futureIdx % 2 === 0 ? 1 : -1);
    dashedD = `M ${prev.x} ${prev.y} C ${midX} ${prev.y + wave}, ${midX} ${curr.y - wave}, ${curr.x} ${curr.y}`;
  }

  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS, 'svg');
  svg.classList.add('rm-svg');
  svg.setAttribute('width', trackRect.width);
  svg.setAttribute('height', trackRect.height);

  // Arrow marker definition
  const defs = document.createElementNS(svgNS, 'defs');
  const marker = document.createElementNS(svgNS, 'marker');
  marker.setAttribute('id', 'flight-arrow');
  marker.setAttribute('markerWidth', '8');
  marker.setAttribute('markerHeight', '6');
  marker.setAttribute('refX', '8');
  marker.setAttribute('refY', '3');
  marker.setAttribute('orient', 'auto');
  const arrowPath = document.createElementNS(svgNS, 'path');
  arrowPath.setAttribute('d', 'M0,0 L8,3 L0,6 L2,3 Z');
  arrowPath.setAttribute('fill', '#5aa674');
  marker.appendChild(arrowPath);
  defs.appendChild(marker);
  svg.appendChild(defs);

  // Flight path — soft shadow
  if (solidD) {
    const shadow = document.createElementNS(svgNS, 'path');
    shadow.setAttribute('d', solidD);
    shadow.setAttribute('fill', 'none');
    shadow.setAttribute('stroke', 'rgba(58,125,86,0.08)');
    shadow.setAttribute('stroke-width', '12');
    shadow.setAttribute('stroke-linecap', 'round');
    svg.appendChild(shadow);
  }

  // Flight path — main dashed line
  if (solidD) {
    const flight = document.createElementNS(svgNS, 'path');
    flight.setAttribute('d', solidD);
    flight.setAttribute('fill', 'none');
    flight.setAttribute('stroke', '#5aa674');
    flight.setAttribute('stroke-width', '2.5');
    flight.setAttribute('stroke-dasharray', '8 6');
    flight.setAttribute('stroke-linecap', 'round');
    flight.setAttribute('marker-end', 'url(#flight-arrow)');
    svg.appendChild(flight);
  }

  // Small arrow chevrons along the solid path for directionality
  if (solidD && solidEnd > 2) {
    for (let i = 1; i < solidEnd - 1; i += 2) {
      const prev = points[i - 1];
      const curr = points[i];
      const mx = (prev.x + curr.x) / 2;
      const my = (prev.y + curr.y) / 2;
      const angle = Math.atan2(curr.y - prev.y, curr.x - prev.x) * (180 / Math.PI);
      const chevron = document.createElementNS(svgNS, 'text');
      chevron.setAttribute('x', mx);
      chevron.setAttribute('y', my);
      chevron.setAttribute('text-anchor', 'middle');
      chevron.setAttribute('dominant-baseline', 'central');
      chevron.setAttribute('font-size', '10');
      chevron.setAttribute('fill', '#5aa674');
      chevron.setAttribute('opacity', '0.5');
      chevron.setAttribute('transform', `rotate(${angle}, ${mx}, ${my})`);
      chevron.textContent = '›';
      svg.appendChild(chevron);
    }
  }

  // Future segment — lighter dashed
  if (dashedD) {
    const futPath = document.createElementNS(svgNS, 'path');
    futPath.setAttribute('d', dashedD);
    futPath.setAttribute('fill', 'none');
    futPath.setAttribute('stroke', '#d4932a');
    futPath.setAttribute('stroke-width', '2');
    futPath.setAttribute('stroke-dasharray', '4 8');
    futPath.setAttribute('stroke-linecap', 'round');
    futPath.setAttribute('opacity', '0.5');
    svg.appendChild(futPath);
  }

  // Plane icon at the last solid point
  if (solidEnd > 0) {
    const lastPt = points[solidEnd - 1];
    const prevPt = solidEnd > 1 ? points[solidEnd - 2] : points[0];
    const angle = Math.atan2(lastPt.y - prevPt.y, lastPt.x - prevPt.x) * (180 / Math.PI);
    const plane = document.createElementNS(svgNS, 'text');
    plane.setAttribute('x', lastPt.x + 18);
    plane.setAttribute('y', lastPt.y - 18);
    plane.setAttribute('font-size', '16');
    plane.setAttribute('transform', `rotate(${angle - 45}, ${lastPt.x + 18}, ${lastPt.y - 18})`);
    plane.textContent = '✈';
    svg.appendChild(plane);
  }

  track.prepend(svg);
}

/* ── FREE-FLOWING HANDWRITTEN ANNOTATIONS ── */
function drawAnnotations(track, items) {
  if (!track) return;
  const dots = [...track.querySelectorAll('.rm-dot')];
  const trackRect = track.getBoundingClientRect();

  const layer = document.createElement('div');
  layer.className = 'rm-annotation-layer';

  // Each annotation has a bespoke position config for organic scattered feel
  const noteConfigs = {
    0: { dx: -50, dy: -155, rot: -5, arrowDir: 'down-right' },    // Bachelor's — well above
    2: { dx: 30, dy: 135, rot: 4, arrowDir: 'up-left' },           // Dalberg — well below
    4: { dx: -70, dy: -155, rot: -3, arrowDir: 'down-right' },     // Solo Travel — well above
    6: { dx: 40, dy: 135, rot: 3, arrowDir: 'up-left' },           // Wysa — well below
    7: { dx: -20, dy: -155, rot: -4, arrowDir: 'long-to-travel' }, // Rotman — arrow to Solo Travel
  };

  items.forEach((item, i) => {
    if (!item.note || !noteConfigs[i]) return;
    const dot = dots[i];
    if (!dot) return;
    const dotRect = dot.getBoundingClientRect();
    const dotCx = dotRect.left + dotRect.width / 2 - trackRect.left;
    const dotCy = dotRect.top + dotRect.height / 2 - trackRect.top;
    const cfg = noteConfigs[i];

    const ann = document.createElement('div');
    ann.className = 'rm-annotation';
    const textX = dotCx + cfg.dx;
    const textY = dotCy + cfg.dy;

    // For Rotman: draw a long curved arrow all the way to Solo Travel stamp
    if (cfg.arrowDir === 'long-to-travel') {
      const travelIdx = items.findIndex(it => it.era === 'Solo Travel');
      const travelDot = dots[travelIdx];
      if (travelDot) {
        const travelRect = travelDot.getBoundingClientRect();
        const travelCx = travelRect.left + travelRect.width / 2 - trackRect.left;
        const travelCy = travelRect.top - trackRect.top;
        // SVG that spans from text to travel dot
        const svgW = Math.abs(textX - travelCx) + 100;
        const svgH = Math.abs(textY - travelCy) + 60;
        const svgLeft = Math.min(textX, travelCx) - 30;
        const svgTop = Math.min(textY, travelCy) - 20;
        const startX = textX - svgLeft + 40;
        const startY = textY - svgTop + 16;
        const endX = travelCx - svgLeft;
        const endY = travelCy - svgTop - 5;
        const cpX1 = startX - 60;
        const cpY1 = (startY + endY) / 2 - 20;
        const cpX2 = endX + 40;
        const cpY2 = (startY + endY) / 2 + 15;

        ann.innerHTML = `
          <span style="font-size:0.95rem;display:inline-block;transform:rotate(${cfg.rot}deg)">${item.note}</span>
          <svg width="${svgW}" height="${svgH}" style="position:absolute;left:${svgLeft - textX}px;top:${svgTop - textY}px;" viewBox="0 0 ${svgW} ${svgH}">
            <path d="M${startX} ${startY} C${cpX1} ${cpY1}, ${cpX2} ${cpY2}, ${endX} ${endY}" fill="none" stroke="#5a5a6a" stroke-width="1.2" stroke-dasharray="5 4" opacity="0.35"/>
            <circle cx="${endX}" cy="${endY}" r="3" fill="#5a5a6a" opacity="0.35"/>
          </svg>
        `;
      } else {
        ann.innerHTML = `<span style="font-size:0.95rem;display:inline-block;transform:rotate(${cfg.rot}deg)">${item.note}</span>`;
      }
    } else {
      // Standard note with curved arrow pointing to stamp
      const arrowW = 70;
      const arrowH = Math.abs(cfg.dy) - 20;
      const goingDown = cfg.arrowDir.startsWith('down');
      const goingRight = cfg.arrowDir.endsWith('right');

      // Arrow from text to dot
      const aStartX = goingRight ? 50 : 10;
      const aStartY = goingDown ? 0 : arrowH;
      const aEndX = goingRight ? arrowW - 5 : 5;
      const aEndY = goingDown ? arrowH : 0;
      const aCpX = (aStartX + aEndX) / 2 + (goingRight ? 15 : -15);
      const aCpY = (aStartY + aEndY) / 2;

      ann.innerHTML = `
        <span style="font-size:0.92rem;display:inline-block;transform:rotate(${cfg.rot}deg)">${item.note}</span>
        <svg width="${arrowW}" height="${arrowH}" style="position:absolute;${goingDown ? 'bottom' : 'top'}:-${arrowH - 5}px;left:${goingRight ? '30' : '-20'}px;" viewBox="0 0 ${arrowW} ${arrowH}">
          <path d="M${aStartX} ${aStartY} Q${aCpX} ${aCpY} ${aEndX} ${aEndY}" fill="none" stroke="#5a5a6a" stroke-width="1.2" opacity="0.4"/>
          <circle cx="${aEndX}" cy="${aEndY}" r="2.5" fill="#5a5a6a" opacity="0.4"/>
        </svg>
      `;
    }

    ann.style.left = textX + 'px';
    ann.style.top = textY + 'px';
    layer.appendChild(ann);
  });

  track.appendChild(layer);
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
      : c.icon
        ? `<div class="community-logo-placeholder">${c.icon}</div>`
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

  const introHtml = INVESTOR_LEARNER.communities.intro
    ? `<p class="community-intro">${INVESTOR_LEARNER.communities.intro}</p>`
    : '';

  container.innerHTML = `
    <div class="community-photo">${photoHtml}</div>
    <div class="community-content">
      ${introHtml}
      <div class="community-grid">${cardsHtml}</div>
    </div>
  `;
}

function renderContactCta() {
  const container = document.getElementById('contactCta');
  if (!container) return;

  const c = INVESTOR_LEARNER.contact;
  container.innerHTML = `
    <h2 style="color:var(--white);font-family:var(--font-serif);font-size:clamp(1.6rem,2.8vw,2.2rem);margin:0 0 12px;line-height:1.3;">${c.message}</h2>
    <p class="contact-sub">${c.byline}</p>
    <div class="contact-links">
      <a href="${c.email}" class="contact-btn">Email Me</a>
      <a href="${c.linkedin}" target="_blank" rel="noopener" class="contact-btn contact-btn-outline">LinkedIn</a>
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
