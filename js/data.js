/* ─────────────────────────────────────────────────────────
   PORTFOLIO DATA — Full Redesign v5
   Update this file to keep your site current.
───────────────────────────────────────────────────────── */

// ── DEAL MAP ─────────────────────────────────────────────
// Flat pin array + explicit connections
const DEAL_MAP = {
  pins: [
    // 1. India — Digital Media pipeline for Google News Initiative
    { id: "india-media", country: "India", lat: 28.61, lng: 77.21, code: "in",
      desc: "Sourced proprietary pipeline of 20+ early-stage startups for global tech company's digital news expansion in India",
      type: "early", stages: ["Early-Stage Investment"], sectors: ["Digital Media"] },
    // 2. India — Growth-stage fintech
    { id: "india-fintech", country: "India", lat: 19.08, lng: 72.88, code: "in",
      desc: "Deployed $5M into growth-stage fintech serving credit-underserved middle-income consumers across India",
      type: "growth", stages: ["Growth-Stage Investment"], sectors: ["Fintech"] },
    // 3. Cambodia — Climate-tech pipeline
    { id: "cambodia", country: "Cambodia", lat: 12.57, lng: 104.99, code: "kh",
      desc: "Built investment thesis and 20-startup pipeline guiding $30M into climate-resilient tech ventures in Cambodia",
      type: "early", stages: ["Early-Stage Investment"], sectors: ["Climate Tech"] },
    // 4. Vietnam — Eyecare enterprise expansion
    { id: "vietnam", country: "Vietnam", lat: 14.06, lng: 108.28, code: "vn",
      desc: "Led international expansion and fundraise for Vietnam-based eyecare enterprise, securing $10M in additional funding",
      type: "growth", stages: ["Growth-Stage Investment", "Portfolio Management"], sectors: ["Health Tech"] },
    // 5. MENA — Clean energy finance facility
    { id: "mena", country: "MENA", lat: 23.88, lng: 45.08, code: "sa",
      desc: "Designed and launched clean energy finance facility deploying capital into 6 early-stage companies across MENA",
      type: "fund", stages: ["Early-Stage Investment", "Fund Development"], sectors: ["Climate Tech"] },
    // 6. MENA — Follow-on air quality monitoring
    { id: "mena-followon", country: "MENA", lat: 25.28, lng: 51.52, code: "qa",
      desc: "Executed follow-on investment in AI-enabled air quality monitoring hardware company serving governments across MENA",
      type: "early", stages: ["Follow-On Investment"], sectors: ["Climate Tech"] },
    // 7. Global — Wysa AI mental health (ops)
    { id: "wysa", country: "Global", lat: 12.97, lng: 77.59, code: "in",
      desc: "Supported global AI mental health startup across GTM, customer insights, and organizational scaling toward Series C",
      type: "ops", stages: ["Operational Experience"], sectors: ["Health Tech"] },
    // 8. Canada — Meissner deep-tech (ops)
    { id: "meissner", country: "Canada", lat: 43.85, lng: -79.18, code: "ca",
      desc: "Helped Toronto-based deep-tech AI mineral discovery venture operationalize GTM strategy and secure early commercial pilots",
      type: "ops", stages: ["Operational Experience"], sectors: ["Deep Tech"] },
    // 9. India / Singapore — M&A consulting firm
    { id: "india-ma", country: "India / Singapore", lat: 1.35, lng: 103.82, code: "sg",
      desc: "Led commercial and financial DD and integration strategy for India-to-Singapore consulting firm acquisition by global development advisory",
      type: "growth", stages: ["M&A"], sectors: [] },
    // 10. Kenya — Affordable eyecare
    { id: "kenya", country: "Kenya / Africa", lat: -1.29, lng: 36.82, code: "ke",
      desc: "Invested in Kenya-based health-tech venture democratizing affordable eyecare access across African markets",
      type: "early", stages: ["Early-Stage Investment"], sectors: ["Health Tech"] },
    // 11. UK — Prosthetics for Africa
    { id: "uk-prosthetics", country: "UK / Africa", lat: 51.51, lng: -0.13, code: "gb",
      desc: "Invested in UK-based startup revolutionizing prosthetics pricing and distribution across African markets",
      type: "early", stages: ["Early-Stage Investment"], sectors: ["Health Tech"] },
    // 12. USA — Flora Fertility (femtech)
    { id: "usa-flora", country: "USA", lat: 37.39, lng: -122.08, code: "us",
      desc: "Invested and followed on in US femtech startup offering portable, actuarial-driven fertility insurance for young women",
      type: "early", stages: ["Early-Stage Investment", "Follow-On Investment"], sectors: ["Femtech"] },
    // 13. Canada — pHathom ocean carbon
    { id: "novascotia", country: "Canada — Nova Scotia", lat: 44.65, lng: -63.57, code: "ca",
      desc: "Invested in Nova Scotia-based startup safely sequestering ocean carbon and converting it into verified carbon credits",
      type: "early", stages: ["Early-Stage Investment"], sectors: ["Climate Tech"] },
    // 14. Canada — Montreal biotech
    { id: "montreal-biotech", country: "Canada — Montreal", lat: 45.50, lng: -73.57, code: "ca",
      desc: "Invested in Montreal-based biotech replacing animal testing with human-cell-based platforms to improve drug testing accuracy",
      type: "early", stages: ["Early-Stage Investment"], sectors: ["Biotech"] },
    // 15. Canada — Montreal femtech
    { id: "montreal-femtech", country: "Canada — Montreal", lat: 45.55, lng: -73.65, code: "ca",
      desc: "Invested in Montreal-based AI startup streamlining menopause and menstrual care triage for women across Canada",
      type: "early", stages: ["Early-Stage Investment"], sectors: ["Femtech"] },
    // 16. Europe — Assistive tech fund development
    { id: "europe", country: "Europe", lat: 50.85, lng: 4.35, code: "eu",
      desc: "Built successor assistive technology fund in Europe, growing pipeline and increasing AUM by 2.5x",
      type: "fund", stages: ["Fund Development"], sectors: ["Assistive Tech"] },
  ],
  connections: [
    { from: "india-media", to: "cambodia", color: "#d4932a" },
    { from: "vietnam", to: "kenya", color: "#5aa674" },
    { from: "mena", to: "mena-followon", color: "#7c5cbf" },
    { from: "europe", to: "kenya", color: "#3d8bb5" },
    { from: "europe", to: "uk-prosthetics", color: "#3d8bb5" },
  ],
};

// ── DEAL SPOTLIGHT ───────────────────────────────────────
// Featured deals for the Investment Passport page
const DEAL_SPOTLIGHT = [
  {
    title: "Flora Fertility",
    code: "us",
    icon: "💡",
    stages: ["Early-Stage Investment"],
    sectors: ["Fintech"],
    description: "Invested C$500K + C$350K follow-on in Flora Fertility — a portable, actuarial-driven fertility insurance product. Conviction was built on rising demand for fertility coverage, a proprietary actuarial engine, and a founding duo with deep complementary skills and a track record of execution. Led due diligence, term sheet negotiation, and fundraising support.",
    whatILearned: "Went from zero to deep insurtech expertise in six weeks — uncovering distribution chains, incumbent dynamics, regulatory constraints, and where the real defensibility lies.",
  },
  {
    title: "pHathom Technologies",
    code: "ca",
    icon: "🌊",
    stages: ["Early-Stage Investment"],
    sectors: ["Climate Tech"],
    description: "Invested C$500K in pHathom — a Nova Scotia startup using Accelerated Weathering of Limestone (AWL) to capture CO₂ at coastal emission sources and safely sequester it as ocean bicarbonate. Backed by novel first-of-its-kind tech, early traction from world's largest carbon purchasers, and a solution that avoids geological storage — a key pain point for coastal facilities.",
    whatILearned: "Navigating multi-party term sheet negotiations with strategic and financial investors taught me how to equalize terms, manage competing interests, and close deals through real-life friction.",
  },
  {
    title: "Wysa",
    code: "in",
    icon: "🧠",
    stages: ["Operational Experience"],
    sectors: ["AI", "Health Tech"],
    description: "Joined a Series C global AI mental health startup with FDA approval to get my hands dirty on the other side of the table. Worked across organizational structure, incentive design, product orientation, customer feedback synthesis, and GTM strategy for new geographies and use cases.",
    whatILearned: "The transition from early-stage to growth-stage is a mammoth task. What works is a blend of structure in operations and workflows with nimbleness in culture, key hires, and experimentation.",
  },
];

// ── LESSONS LEARNED ──────────────────────────────────────
const LESSONS_LEARNED = {
  lessons: [
    "<strong class='lesson-key'>Market depth beats market sizing</strong> — knowing TAM isn't enough. You need to understand value chains, ecosystem maps, user journeys, substitutes, structural constraints, timing, capital markets, risks, and failure modes.",
    "<strong class='lesson-key'>Passion beats founder-market fit</strong> — I've seen founders with raw grit and uncanny passion outperform seasoned industry veterans. Experience helps, but obsession wins.",
    "<strong class='lesson-key'>Capital alone is never enough</strong> — active support, whether hands-on or through the right syndicate, is what separates deals that survive from deals that win. Pay attention to who's around the table — not as a signal for financial evaluation, but as a signal for value creation over time.",
    "<strong class='lesson-key'>Real deals are messy</strong> — co-founders exit, metrics slip, timelines break. Deal structuring is crucial, and so is founder support, creativity, and problem solving. The best investors roll up their sleeves long before things start to slip.",
    "<strong class='lesson-key'>Investing is truly changing the world</strong> — not just impact ventures. Consumer tech, fintech, healthtech — these shift lives at scale, from financial services ease to healthcare burdens being solved. Seeing a new innovation serve a real pain point that exists at scale is what drives me every single day.",
  ],
};

// ── FIELD NOTES ──────────────────────────────────────────
const FIELD_NOTES = {
  hero: {
    label: "Field Notes",
    title: "Every Lesson Is a <em>Compass</em>.",
    subtitle: "I carry a growth mindset into every room I enter. I ask myself: <em>what did I learn today, and how can I apply this to my work and life?</em>",
  },

  fromTheField: [
    {
      icon: "🧭",
      title: "Sectors I Love — And Why",
      summary: "From fintech to climate to healthcare access — the problems that keep me up at night and the investment theses I've built around them.",
      detail: `<p>I don't pick sectors because they're trendy. I follow problems that matter — and build conviction through first-hand deal work across 30+ companies.</p>
<p><strong>Fintech & Vertical Software:</strong> At BDC Capital, I led due diligence on 7 early-stage B2B and fintech ventures. The best fintech companies don't compete with banks — they route around them. I focus on product defensibility, unit economics, and CAC/LTV dynamics that separate winners from noise.</p>
<p><strong>Climate & Clean Energy:</strong> At Dalberg, I evaluated 20 climate-tech investment opportunities for USAID Cambodia, guiding $30M in capital deployment. I also structured a Shell-backed blended finance fund for clean energy in refugee settlements across MENA, unlocking energy access for 500,000+ people.</p>
<p><strong>Healthcare & Access:</strong> At KOIS, I assessed 20+ early and growth stage healthcare ventures across India, Indonesia, and Kenya. I invest in access, not luxury healthcare — from assistive technology to social eyecare enterprises with $400M expansion opportunities.</p>
<p><strong>Enterprise EdTech:</strong> At BDC, I co-led commercial due diligence on two $10-15M enterprise ed-tech acquisitions, conducting 25+ customer calls to validate retention, NPS, and product stickiness.</p>
<p><strong>Media Tech:</strong> At Dalberg, I identified emerging innovations across India's news publishing ecosystem for Google News Initiative, generating a proprietary investment pipeline that guided $20MM in investments.</p>`,
      tags: ["Fintech", "Climate", "Healthcare", "EdTech", "Media Tech"],
    },
    {
      icon: "📐",
      title: "My Investment Framework",
      summary: "How I evaluate companies — the lens I've built from due diligence across 30+ deals with a 100% IC memo approval rate.",
      detail: `<p>Every investor has a framework. Mine has been rewritten across three mandates — BDC Capital, KOIS, and Dalberg — each version forged by real deals, real mistakes, and hard-won conviction.</p>
<p><strong>1. Founder-Market Fit:</strong> Not just 'does this person understand the market?' but 'is this person <em>unreasonably</em> well-positioned to win here?' At BDC, I screened out opportunities citing co-founder risk and weak moats — team strength is always the first filter.</p>
<p><strong>2. Product Defensibility & Unit Economics:</strong> Revenue is table stakes. I assess market sizing, switching costs, and whether the company gets structurally better as it scales. At BDC, I built scenario-based financial models to stress-test every thesis.</p>
<p><strong>3. Capital Efficiency:</strong> Especially in emerging markets, the ability to do more with less is the real competitive moat. At KOIS, I provided strategic assistance that drove a 35% improvement in portfolio company margins.</p>
<p><strong>4. Customer Validation:</strong> I don't rely on founder narratives alone. For the BDC ed-tech acquisitions, I conducted 25+ customer calls to validate retention and product stickiness before making recommendations.</p>
<p><strong>5. Exit Pathway Clarity:</strong> I underwrite to exit. Who are the natural acquirers? Is there a clear value inflection point? I've drafted CIMs and built models that map every path to liquidity.</p>`,
      tags: ["Framework", "Due Diligence", "Unit Economics", "Pattern Recognition"],
    },
    {
      icon: "🏗️",
      title: "First Principles in VC & PE",
      summary: "The foundational beliefs that guide how I deploy capital — from power law dynamics to value creation through acquisitions.",
      detail: `<p>Venture capital and private equity are different games with different rules — but they share first principles that I carry across both at BDC Capital.</p>
<p><strong>In VC — The Power Law Is Everything:</strong> At BDC's Thrive Fund, I originated and screened 25+ early-stage Canadian tech opportunities. Portfolio construction matters more than individual deal selection. Conviction sizing is critical, and the cost of missing a great deal always exceeds the cost of backing a bad one.</p>
<p><strong>In PE — Value Creation Is the Product:</strong> Entry multiples are the price of admission. The real returns come from operational improvement and revenue acceleration. I've evaluated search funds and ETA opportunities, analysing fund economics and past performance to identify where post-acquisition execution creates the 2x-to-4x difference.</p>
<p><strong>Across Both — Proprietary Deal Flow Is the Edge:</strong> The investors who consistently outperform have differentiated access. I build this edge through CDL, Women in VC networks, and being the kind of investor founders want in the room.</p>
<p><strong>Operating Experience Changes Everything:</strong> At Wysa, I built GTM strategy from scratch. Operating inside a startup fundamentally changed how I invest — I stopped asking hypothetical questions and started asking operational ones.</p>`,
      tags: ["VC", "PE", "Power Law", "Value Creation", "First Principles"],
    },
  ],

  fromTheClassroom: [
    {
      icon: "📜",
      title: "CFA & PE Certification",
      whatILearned: "First principles of private investments and financial modelling",
      details: "This is where I built the analytical foundation — DCF, LBO structuring, cap table modelling, and exit analysis. Proficient in CapIQ, FactSet, PitchBook, and advanced Excel. Every deal memo, financial model, and IC presentation I write is grounded in these first principles.",
      tags: ["DCF", "LBO", "CapIQ", "FactSet", "PitchBook"],
    },
    {
      icon: "🎓",
      title: "MBA at Rotman — Finance Specialisation",
      whatILearned: "Financial modelling, cross-functional thinking, and leadership",
      details: "Dean's List (3.75 GPA) — this is where I learned to think across disciplines. Coursework in Fintech, VC Strategy, Private Equity, M&A, and Financial Statement Analysis. At the Creative Destruction Lab, I operationalised GTM strategy for a deep-tech AI venture. As President of Women in Management Association, leading a team of 12. Received $60,000 in merit-based awards including the TorQuest and CDL Awards.",
      tags: ["Fintech", "VC Strategy", "Private Equity", "M&A", "CDL"],
    },
    {
      icon: "📚",
      title: "Favourite PE & VC Case Studies",
      whatILearned: "Value creation, brand moats, endowment strategy, and market entry",
      details: "Canada Goose (PE) — how operational excellence and brand storytelling create outsized value post-acquisition. Tiffany & LVMH (M&A) — luxury M&A is about acquiring customer relationships, not just brands. Yale Endowment — how David Swensen's alternative-heavy allocation model redefined institutional investing. M-Pesa vs. Nubank — the best fintech companies design for the unbanked from scratch.",
      tags: ["Canada Goose", "LVMH", "Yale Endowment", "Fintech"],
    },
  ],

  fromPeople: [
    { name: "Financial Times", url: "https://www.ft.com", why: "My daily read — pattern-matching macro forces across geographies before any deal meeting." },
    { name: "The Economist", url: "https://www.economist.com", why: "Forces second-order thinking on AI, deglobalisation, and capital flows. Stress-tests every thesis." },
    { name: "Stratechery by Ben Thompson", url: "https://stratechery.com", why: "The clearest thinker on tech strategy — his aggregation theory changed how I evaluate platforms." },
    { name: "The Generalist by Mario Gabriele", url: "https://www.readthegeneralist.com", why: "Deep-dive company profiles that read like investment memos. My template for breaking down new companies." },
    { name: "Acquired Podcast", url: "https://www.acquired.fm", why: "History is the best investing framework — Costco, LVMH, TSMC. You see patterns everywhere." },
    { name: "Two Small Fish", url: "#", why: "My personal blog on travel, culture, and the intersections of life and work." },
  ],
};

// ── INVESTOR / LEARNER (About Page) ─────────────────────
const INVESTOR_LEARNER = {
  hero: {
    tagline: "Investor. Traveller. Perpetual learner.",
    bio: "I'm currently with <strong>BDC Capital's Thrive Fund</strong>, deploying capital into Canadian ventures across sectors including fintech, healthtech, climatetech, and deeptech. I hold an <strong>MBA from Rotman</strong> specializing in finance — where I worked with Creative Destruction Lab (CDL) and led the Women in Management Association. Before that, I built my lens across early-stage VC, investment advisory, and an operations role with a startup. When I'm not wearing my investor hat, I love traveling solo, listening to live jazz, and championing women's empowerment and climate action.",
    photo: "assets/Roopal.jpeg",
  },

  timeline: [
    {
      era: "Bachelor's in Economics",
      title: "Taught me to write with clarity",
      why: "Editor in Chief — reviewed and edited 50+ articles, sharpening every word into conviction.",
      icon: "🎓",
      color: "sky",
      note: "Helps me write sharp memos",
      notePos: "left",
    },
    {
      era: "Startup Compass",
      title: "Sparked my love for entrepreneurship",
      why: "Interviewed 20+ unicorn founders in India and supported the development of the startup playbook.",
      icon: "🎙️",
      color: "coral",
    },
    {
      era: "Dalberg Advisors",
      title: "Taught me to command a room",
      why: "Collaborated with and advised USAID, Google, Kimberly Clark, Shell, World Bank across the globe — high-stakes, high-conviction advisory.",
      logo: "assets/logos/dalberg.png",
      color: "green",
      note: "This is why I love IC presentations",
      notePos: "right",
      url: "https://dalberg.com",
    },
    {
      era: "USAID Cambodia",
      title: "Taught me to learn markets fast",
      why: "Supported a 7-partner investment coalition to drive $30M in climate-smart technology in Cambodia.",
      icon: "🌱",
      color: "green",
    },
    {
      era: "Solo Travel",
      title: "Built my global community",
      why: "Started traveling solo, covering 26+ cities across South and Southeast Asia — the networks and perspectives that shape how I invest.",
      icon: "✈️",
      color: "amber",
      note: "These are my phone-a-friend calls on anything new",
      notePos: "left",
    },
    {
      era: "KOIS Invest",
      title: "Taught me to source and invest",
      why: "First buy-side experience — built pipeline, screened 20+ deals, and developed conviction from scratch.",
      logo: "assets/logos/kois.png",
      color: "green",
      url: "https://koisinvest.com",
    },
    {
      era: "Wysa",
      title: "Gave me the operator's lens",
      why: "Got my hands dirty working with a Series C global mental health AI startup — GTM, customer interviews, org structure, and everything in between.",
      logo: "assets/logos/wysa.png",
      color: "purple",
      note: "Helps me understand founders' challenges and mindset",
      notePos: "right",
      url: "https://www.wysa.com",
    },
    {
      era: "U of T MBA",
      title: "Technical and soft skills, 10x speed",
      why: "Built finance 101 to 501, built a global community, worked with a CDL startup, honed leadership skills.",
      logo: "assets/logos/uoft.png",
      color: "sky",
      coords: "43.66°N, 79.40°W",
      note: "Gave me the most valuable networks of advisors and peers",
    },
    {
      era: "BDC Capital",
      title: "Dealwork and investment discipline",
      why: "Deploying into Canada's top ventures — 100% IC approval on every authored memo.",
      logo: "assets/logos/bdc.png",
      color: "green",
      url: "https://www.bdc.ca/en/bdc-capital/thrive-venture-fund",
    },
    {
      era: "CFA & PE Cert",
      title: "First principles in private equity",
      why: "Pursuing CFA PE certification strengthening my first-principles thinking in late-stage investments — value creation and distribution, risks, and how to spot both.",
      logo: "assets/logos/cfa.png",
      color: "amber",
    },
    {
      era: "The Future",
      title: "My Own Fund",
      why: "Investing in world-changing, category-defining global companies — and one day, leading my own fund.",
      icon: "💡",
      isFuture: true,
      color: "amber",
    },
  ],

  communities: {
    photo: "assets/Community.jpeg",
    intro: "This is how I source deals, understand markets, and stay sharp.",
    list: [
      { name: "University of Toronto", desc: "Canada's largest alumni network — behind 500+ startups and a globally top-ranked research university", logo: "assets/logos/uoft.png", url: "https://www.utoronto.ca" },
      { name: "Creative Destruction Lab (CDL)", desc: "World's leading deep-tech accelerator — where science meets venture and breakthroughs become companies", logo: "assets/logos/cdl.png", url: "https://creativedestructionlab.com" },
      { name: "UNLEASH", desc: "A truly global network of 7,000+ innovators from 190+ countries solving the world's biggest challenges", logo: "assets/logos/unleash.png", url: "https://unleash.org" },
      { name: "CAFIID", desc: "Canada's development finance community — bridging capital, policy, and impact at scale", logo: "assets/logos/cafiid.png", url: "https://www.cafiid.ca" },
      { name: "CWVC", desc: "Canadian Women in VC — building the next generation of women fund managers and investors", logo: "assets/logos/cwvc.png", url: "https://www.cwvc.ca" },
      { name: "Personal Network", desc: "Founders, investors, and operators across 10+ countries — built through travel, deals, and genuine curiosity", icon: "🌍", url: null },
    ],
  },

  contact: {
    message: "Let's Chat.",
    byline: "I'm always open to connecting — whether you're a founder, investor, student, or someone with ideas to share. If anything on this site sparked a thought, or if I can help in any way, I'd love to hear from you.",
    email: "mailto:roopaldahiya5@gmail.com",
    linkedin: "https://www.linkedin.com/in/roopaldahiya",
  },
};
