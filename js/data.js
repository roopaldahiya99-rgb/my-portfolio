/* ─────────────────────────────────────────────────────────
   PORTFOLIO DATA — Full Redesign v5
   Update this file to keep your site current.
───────────────────────────────────────────────────────── */

// ── DEAL MAP ─────────────────────────────────────────────
// Flat pin array + explicit connections
const DEAL_MAP = {
  pins: [
    { id: "australia", country: "Australia", lat: -25, lng: 134, code: "au",
      desc: "Backed institutional investors in investing across Asia",
      type: "investor" },
    { id: "vietnam", country: "Vietnam", lat: 14.06, lng: 108.28, code: "vn",
      desc: "Helped a growth-stage healthcare investee expand to new Asian markets",
      type: "deal", stages: ["Growth Stage"], sectors: ["Healthtech"] },
    { id: "indonesia", country: "Indonesia", lat: -0.79, lng: 113.92, code: "id",
      desc: "Helped US consumer brands invest in Asia strategically to expand their market",
      type: "deal", stages: ["Growth Stage"], sectors: ["Healthcare"] },
    { id: "newdelhi", country: "India — New Delhi", lat: 28.61, lng: 77.21, code: "in",
      desc: "Drove multiple investments with the country's largest endowments, VCs, and strategic investors",
      type: "deal", stages: ["Early Stage", "Growth Stage"], sectors: ["Consumertech", "Healthtech", "Femtech"] },
    { id: "bangalore", country: "India — Bangalore", lat: 12.97, lng: 77.59, code: "in",
      desc: "Wysa — Series C AI mental health operating exposure",
      type: "ops",
      logo: "assets/logos/wysa.png" },
    { id: "useast", country: "United States — East Coast", lat: 38.91, lng: -77.04, code: "us",
      desc: "Kimberly Clark — strategic investments in South & Southeast Asia",
      type: "investor" },
    { id: "uswest", country: "United States — West Coast", lat: 37.39, lng: -122.08, code: "us",
      desc: "USAID — capital deployment into Southeast Asia",
      type: "investor" },
    { id: "cambodia", country: "Cambodia", lat: 12.57, lng: 104.99, code: "kh",
      desc: "USAID — $30M climate-smart tech capital deployed",
      type: "deal", stages: ["Early Stage"], sectors: ["Climate-Tech"] },
    { id: "singapore", country: "Singapore", lat: 1.35, lng: 103.82, code: "sg",
      desc: "Google News Initiative — $20M Indian media-tech pipeline",
      type: "investor" },
    { id: "alberta", country: "Canada — Alberta", lat: 51.05, lng: -114.07, code: "ca",
      desc: "<strong>Deal spotlight:</strong> Flora — first-of-its-kind portable fertility insurance",
      type: "deal", stages: ["Early Stage"], sectors: ["Fintech"] },
    { id: "mena", country: "MENA", lat: 23.88, lng: 45.08, code: "sa",
      desc: "Created a structured finance facility that invests in clean energy access across the region",
      type: "deal", stages: ["Growth Stage"], sectors: ["Clean Energy"] },
    { id: "novascotia", country: "Canada — Nova Scotia", lat: 44.65, lng: -63.57, code: "ca",
      desc: "<strong>Deal spotlight:</strong> pHathom — ocean carbon sequestration and credit generation",
      type: "deal", stages: ["Early Stage"], sectors: ["Climate-Tech"] },
    { id: "toronto-bdc", country: "Canada — Toronto", lat: 43.65, lng: -79.38, code: "ca",
      desc: "BDC Capital — early-stage VC and PE (search funds) exposure",
      type: "deal",
      stages: ["Early Stage", "Growth Stage"], sectors: ["Fintech", "B2B SaaS", "EdTech"],
      logo: "assets/logos/bdc.png" },
    { id: "toronto-meissner", country: "Canada — Toronto", lat: 43.85, lng: -79.18, code: "ca",
      desc: "Meissner — deep-tech startup operational exposure via CDL",
      type: "ops" },
    { id: "africa", country: "Africa — Kenya", lat: -1.29, lng: 36.82, code: "ke",
      desc: "Invested in breakthrough technologies making health devices 100x cheaper",
      type: "deal", stages: ["Early Stage"], sectors: ["Healthtech"] },
    { id: "europe", country: "Europe — Brussels", lat: 50.85, lng: 4.35, code: "eu",
      desc: "KOIS — early-stage healthcare investments across the continent",
      type: "deal", stages: ["Early Stage", "Growth Stage"], sectors: ["Healthcare"],
      logo: "assets/logos/kois.png" },
  ],
  connections: [
    { from: "australia", to: "vietnam", color: "#5aa674" },
    { from: "australia", to: "indonesia", color: "#5aa674" },
    { from: "singapore", to: "newdelhi", color: "#d4932a" },
    { from: "useast", to: "newdelhi", color: "#3d8bb5" },
    { from: "useast", to: "indonesia", color: "#3d8bb5" },
    { from: "uswest", to: "cambodia", color: "#7c5cbf" },
  ],
};

// ── DEAL SPOTLIGHT ───────────────────────────────────────
// Featured deals for the Investment Passport page
const DEAL_SPOTLIGHT = [
  {
    title: "Flora — Portable Fertility Insurance",
    code: "ca",
    stage: "Early Stage",
    sector: "Fintech",
    facts: ["BDC Capital", "First-of-its-kind product", "100% IC approval"],
    description: "Led due diligence on Flora, a first-of-its-kind portable fertility insurance venture. Assessed market sizing, product defensibility, and regulatory landscape — then built conviction around why this team wins in an untapped category.",
    whatILearned: "The best early-stage bets aren't about market size — they're about whether the founder sees a future nobody else does yet.",
  },
  {
    title: "Dot Glasses — Assistive Tech for Africa",
    code: "ke",
    stage: "Early Stage",
    sector: "Healthtech",
    facts: ["KOIS Invest", "Affordable eyecare", "Underserved populations"],
    description: "Evaluated Dot Glasses, an assistive technology venture making affordable corrective eyewear for underserved populations across Kenya. Assessed scalability, unit economics, and distribution models for last-mile healthcare delivery.",
    whatILearned: "The most impactful ventures solve problems so fundamental that the market barely recognises them as markets yet.",
  },
  {
    title: "Cross-Border Eyecare Expansion",
    code: "vn",
    stage: "Growth Stage",
    sector: "Healthtech",
    facts: ["$400M opportunity", "Vietnam to Southeast Asia", "Expansion strategy"],
    description: "Stress-tested the business and operating model of an eyecare enterprise in Vietnam raising capital to expand across Southeast Asia. Evaluated operational readiness, regulatory landscape, and cross-border trust to unlock a $400M opportunity.",
    whatILearned: "In cross-border deals, the first 30% is building relational bridges — that's what makes the other 70% possible.",
  },
];

// ── LESSONS LEARNED ──────────────────────────────────────
const LESSONS_LEARNED = {
  lessons: [
    "<em>Market depth beats market sizing</em> — knowing TAM isn't enough. You need to understand value chains, user journeys, regulations, and ecosystems well enough to build in them yourself.",
    "<em>Founder-market fit can be overrated</em> — I've seen founders with raw grit and uncanny passion outperform seasoned industry veterans. Experience helps, but obsession wins.",
    "<em>Capital alone is never enough</em> — active support, whether hands-on or through the right syndicate, is what separates deals that survive from deals that win. Pay attention to who's around the table.",
    "<em>Real deals are messy</em> — co-founders exit, metrics slip, timelines break. Deal structuring helps, but so does founder support, creativity, and problem solving. The best investors roll up their sleeves.",
    "<em>Investing is truly changing the world</em> — not just impact ventures. Consumer tech, fintech, healthtech — these shift lives at scale. Seeing a new innovation serve the underserved is what drives me every single day.",
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
    },
    {
      era: "Wysa",
      title: "Gave me the operator's lens",
      why: "Got my hands dirty working with a Series C global mental health AI startup — GTM, customer interviews, org structure, and everything in between.",
      logo: "assets/logos/wysa.png",
      color: "purple",
      note: "Helps me understand founders' challenges and mindset",
      notePos: "right",
    },
    {
      era: "U of T MBA",
      title: "Technical and soft skills, 10x speed",
      why: "Built finance 101 to 501, built a global community, worked with a CDL startup, honed leadership skills.",
      logo: "assets/logos/uoft.png",
      color: "sky",
      coords: "43.66°N, 79.40°W",
      note: "↖ See Solo Travel",
      notePos: "left",
    },
    {
      era: "BDC Capital",
      title: "Dealwork and investment discipline",
      why: "Deploying into Canada's top ventures — 100% IC approval on every authored memo.",
      logo: "assets/logos/bdc.png",
      color: "green",
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
      { name: "University of Toronto", desc: "Canada's largest alumni network — behind 500+ startups and a globally top-ranked research university", logo: "assets/logos/uoft.png", url: null },
      { name: "Creative Destruction Lab (CDL)", desc: "World's leading deep-tech accelerator — where science meets venture and breakthroughs become companies", logo: "assets/logos/cdl.png", url: null },
      { name: "UNLEASH", desc: "A truly global network of 7,000+ innovators from 190+ countries solving the world's biggest challenges", logo: "assets/logos/unleash.png", url: null },
      { name: "CAFIID", desc: "Canada's development finance community — bridging capital, policy, and impact at scale", logo: "assets/logos/cafiid.png", url: null },
      { name: "CWVC", desc: "Canadian Women in VC — building the next generation of women fund managers and investors", logo: "assets/logos/cwvc.png", url: null },
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
