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
    // 17. Canada — Vancouver PE ed-tech acquisition
    { id: "vancouver-edtech", country: "Canada — Vancouver", lat: 49.28, lng: -123.12, code: "ca",
      desc: "Invested in PE acquisition of an ed-tech company serving K-12 teachers in USA",
      type: "growth", stages: ["Growth-Stage Investment"], sectors: ["Ed-Tech"] },
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
    url: "https://www.florafertility.com",
    stages: ["Early-Stage Investment"],
    sectors: ["Fintech"],
    description: "Invested C$500K + C$350K follow-on in Flora Fertility — a portable, actuarial-driven fertility insurance product. Conviction was built on rising demand for fertility coverage, a proprietary actuarial engine, and a founding duo with deep complementary skills and a track record of execution. Led due diligence, term sheet negotiation, and fundraising support.",
    whatILearned: "Went from zero to deep insurtech expertise in six weeks — uncovering distribution chains, incumbent dynamics, regulatory constraints, and where the real defensibility lies.",
  },
  {
    title: "pHathom Technologies",
    code: "ca",
    icon: "🌊",
    url: "https://www.phathom.ca",
    stages: ["Early-Stage Investment"],
    sectors: ["Climate Tech"],
    description: "Invested C$500K in pHathom — a Nova Scotia startup using Accelerated Weathering of Limestone (AWL) to capture CO₂ at coastal emission sources and safely sequester it as ocean bicarbonate. Backed by novel first-of-its-kind tech, early traction from world's largest carbon purchasers, and a solution that avoids geological storage — a key pain point for coastal facilities.",
    whatILearned: "Navigating multi-party term sheet negotiations with strategic and financial investors taught me how to equalize terms, manage competing interests, and close deals through real-life friction.",
  },
  {
    title: "Wysa",
    code: "in",
    icon: "🧠",
    url: "https://www.wysa.com",
    stages: ["Operational Experience"],
    sectors: ["AI", "Health Tech"],
    description: "Joined a Series C global AI mental health startup with FDA approval to get my hands dirty on the other side of the table. Worked across organizational structure, incentive design, product orientation, customer feedback synthesis, and GTM strategy for new geographies and use cases.",
    whatILearned: "The transition from early-stage to growth-stage is a mammoth task. What works is a blend of structure in operations and workflows with nimbleness in culture, key hires, and experimentation.",
  },
];

// ── LESSONS LEARNED ──────────────────────────────────────
const LESSONS_LEARNED = {
  lessons: [
    "<strong class='lesson-key'>Market-sizing is insufficient without in-depth understanding</strong> — knowing TAM isn't enough. You need to understand value chains, ecosystem maps, user journeys, substitutes, structural constraints, timing, capital markets, risks, and failure modes.",
    "<strong class='lesson-key'>Passion beats founder-market fit</strong> — I've seen founders with raw grit and uncanny passion outperform seasoned industry veterans. Experience helps, but obsession wins.",
    "<strong class='lesson-key'>Capital alone is never enough</strong> — active support, whether hands-on or through the right syndicate, is what separates deals that survive from deals that win. Pay attention to who's around the table — not as a signal for financial evaluation, but as a signal for value creation over time.",
    "<strong class='lesson-key'>Real deals are messy</strong> — co-founders exit, metrics slip, timelines break. Deal structuring is crucial, and so is founder support, creativity, and problem solving. The best investors roll up their sleeves long before things start to slip.",
    "<strong class='lesson-key'>Investing is truly changing the world</strong> — not just impact ventures. Consumer tech, fintech, healthtech — these shift lives at scale, from financial services ease to healthcare burdens being solved. Seeing a new innovation serve a real pain point that exists at scale is what drives me every single day.",
  ],
};

// ── FIELD NOTES ──────────────────────────────────────────
const FIELD_NOTES = {
  hero: {
    title: "Every Lesson Is a <em>Compass</em>.",
    subtitle: "I carry a growth mindset into every room I enter. I ask myself: <em>what did I learn today, and how can I apply this to my work and life?</em>",
  },

  fromTheField: [
    {
      icon: "🧭",
      title: "Sectors I Love — And Why",
      summary: "The problems I follow, the theses I've built, and the sectors where I deploy conviction.",
      detail: `<p>I don't pick sectors because they're trendy. I follow structural tailwinds — places where technology, regulation, and human behavior are converging to create massive, durable markets.</p>
<p><strong>Fintech:</strong> Financial infrastructure is being rebuilt from the ground up. Legacy systems are brittle, compliance costs are rising, and consumer expectations have permanently shifted. The next wave isn't about competing with banks — it's about replacing the pipes underneath them. Embedded finance, vertical SaaS with payments, and credit infrastructure for underserved segments are where the real compounding happens. This sector scales because every business eventually becomes a financial services business.</p>
<p><strong>Climate Tech:</strong> Climate is no longer a niche — it's the largest capital reallocation of our generation. Carbon markets are being formalized, energy transition is accelerating across every geography, and regulatory pressure is creating irreversible demand. The companies that win here aren't selling sustainability — they're building infrastructure that's cheaper, faster, and better than the fossil-fuel alternative. The unit economics are finally working, and the policy tailwinds aren't going away.</p>
<p><strong>AI:</strong> AI is moving from feature to infrastructure. The real opportunity isn't general-purpose models — it's vertical AI that solves specific, high-stakes problems with proprietary data and measurable outcomes. Healthcare diagnostics, scientific discovery, industrial automation — these are markets where AI creates 10x improvements, not incremental ones. I look for companies with defensible data moats, clear feedback loops, and problems where the cost of being wrong is high enough that customers will pay for accuracy.</p>`,
      tags: [],
    },
    {
      icon: "📐",
      title: "Market Research Framework",
      summary: "The tools I use to build conviction in data-sparse, early-stage environments where standard frameworks fall short.",
      detail: `<p>In early-stage investing, there's often no product revenue, no retention data, and limited financial metrics. Conviction has to come from understanding the market deeply — the value chains, the adoption logic, the competitive dynamics, and the expansion pathways. This is where market research becomes the most critical tool in the investor's toolkit.</p>
<p>My consulting background trained me to approach markets through a MECE lens. I'm well-versed in standard VC frameworks — TAM/SAM/SOM, Porter's Five Forces, competitive mapping — but these are table stakes. The real edge comes from layers that get skipped in rapid market assessments.</p>
<p><strong>i. Commercialization Pathways & Value Capture</strong><br/>I map the full value chain to understand where value is created and captured. This includes unit economics at a system level — companies rarely operate below industry cost baselines early on. Critical for assessing whether a market structurally supports scalable value creation.</p>
<p><strong>ii. Customer Personas, Adoption Logic & Retention</strong><br/>Before sizing bottom-up, I prioritize user journeys, personas, and triggers for adoption. This grounds TAM in real behavioral demand and clarifies <em>why now</em>. Even pre-revenue, I look for early retention proxies — repeat usage, cohort behavior, NPS, waitlist conversion. Strong retention in a small base is a more reliable signal than a large TAM with no stickiness.</p>
<p><strong>iii. Competitive Landscape Including Alternatives</strong><br/>I map using 2x2 positioning and pricing benchmarks, but place equal emphasis on alternatives — not just direct competitors. Different solutions serve distinct personas and use cases. This surfaces non-obvious threats and whitespace.</p>
<p><strong>iv. Market Evolution & Expansion Pathways</strong><br/>I take a forward-looking view — adjacencies, platform potential, ecosystem expansion. Does success in the core market unlock additional value layers or network effects over time?</p>`,
      tags: ["Market Research", "Due Diligence", "Early-Stage", "Retention"],
    },
    {
      icon: "📊",
      title: "Investment Framework",
      comingSoon: true,
      summary: "How I evaluate companies — the lens I've built from due diligence across 30+ deals with a 100% IC memo approval rate.",
      detail: `<p><em>Coming soon.</em></p>`,
      tags: [],
    },
    {
      icon: "🚀",
      title: "Fundraising Guide",
      comingSoon: true,
      summary: "Lessons from both sides of the table — as an investor, a startup operator, and an advisor who's helped raise $25M+.",
      detail: `<p>I've been an investor evaluating pitches, a startup operator building decks, and an advisor helping companies fundraise more than $25M. That range of perspective shapes everything I know about raising capital effectively.</p>
<p><em>Coming soon.</em></p>`,
      tags: [],
    },
  ],

  classroomComingSoon: "As I graduate in June 2025, I'll be adding deep-dive reflections on each of these — stay tuned.",
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
      title: "Case Studies",
      whatILearned: "PE, M&A, and VC lenses on real companies",
      details: "Canada Goose (PE lens) — how operational excellence and brand storytelling create outsized value post-acquisition. Tiffany & LVMH (M&A lens) — luxury M&A is about acquiring customer relationships, not just brands. Adarra Ventures (VC lens) — emerging manager dynamics and portfolio construction. Currently pursuing CFA in PE with additional cases.",
      tags: ["Canada Goose", "LVMH", "Adarra Ventures", "CFA PE"],
    },
  ],

  fromPeople: {
    intro: "I actively build perspective through a structured mix of daily news, long-form analysis, and operator-led insights. I prioritize sources that sharpen my market understanding, surface emerging trends early, and deepen my judgment on what makes enduring companies.",
    categories: [
      {
        label: "Macro & Global",
        sources: [
          { name: "Financial Times", url: "https://www.ft.com", why: "My first read every morning. Anchors my thinking in global macro, geopolitics, and capital markets — contextualizing company-level decisions within broader economic shifts.", favourite: null },
          { name: "The Economist", url: "https://www.economist.com", why: "Structured, long-horizon analysis. Strengthens my ability to think probabilistically about global trends, policy, and second-order effects.", favourite: null },
        ],
      },
      {
        label: "Weekly Deep Dives",
        sources: [
          { name: "Newcomer", url: "https://www.newcomer.co", why: "One of the most credible insider views into venture capital — fund dynamics, LP sentiment, and how capital is actually deployed behind the scenes.", favourite: null },
          { name: "Not Boring", url: "https://www.notboring.co", why: "Narrative-driven analysis of emerging industries. Invaluable for rapidly building context in unfamiliar sectors and spotting non-obvious opportunities.", favourite: "https://www.notboring.co/p/the-techno-industrial-revolution", favouriteName: "The Techno-Industrial Revolution" },
          { name: "Stratechery", url: "https://stratechery.com", why: "Deeply shapes my thinking on business model design and competitive advantage. Aggregation theory and platform economics have been especially influential.", favourite: "https://stratechery.com/2015/aggregation-theory/", favouriteName: "Aggregation Theory" },
        ],
      },
      {
        label: "Operator Lens",
        sources: [
          { name: "First Round Review", url: "https://review.firstround.com", why: "Operator-first insights on company building — what works, what doesn't, and what execution excellence looks like from the inside.", favourite: "https://review.firstround.com/start-up-on-the-right-foot-build-a-customer-advisory-board/", favouriteName: "Build a Customer Advisory Board" },
        ],
      },
      {
        label: "Podcasts",
        sources: [
          { name: "Acquired", url: "https://www.acquired.fm", why: "Deep dives into iconic companies — builds pattern recognition on how great businesses are built, scaled, and monetized over time.", favourite: null },
        ],
      },
      {
        label: "Specialized / Edge",
        sources: [
          { name: "The Information", url: "https://www.theinformation.com", why: "High-signal reporting on private tech companies — staying ahead of market narratives and competitive dynamics.", favourite: null },
          { name: "ImpactAlpha", url: "https://impactalpha.com", why: "Keeps me close to developments in impact investing — a passion area for me.", favourite: null },
        ],
      },
    ],
  },
};

// ── INVESTOR / LEARNER (About Page) ─────────────────────
const INVESTOR_LEARNER = {
  hero: {
    tagline: "Investor. Traveller. Perpetual learner.",
    bio: "I'm currently with <strong>BDC Capital's Thrive Fund</strong>, deploying capital into Canadian ventures across sectors including fintech, healthtech, climatetech, and deeptech. I hold an <strong>MBA in Finance from University of Toronto</strong> — where I also worked with Creative Destruction Lab (CDL) and led the Women in Management Association. Before that, I built my lens across early-stage and growth-stage VC, investment advisory, and an operations role with a global startup. When I'm not wearing my investor hat, you can find me knee-deep in substack articles, traveling solo, listening to live jazz, or picking up new hobbies like photography. I also actively work towards advancing women's empowerment and climate action.",
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
      why: "Interviewed 20+ unicorn founders in India and supported the development of a startup playbook published by India's top business school.",
      icon: "🎙️",
      color: "coral",
    },
    {
      era: "Dalberg Advisors",
      title: "Taught me to command a room",
      why: "Collaborated with and advised USAID, Google, Kimberly Clark, Shell, World Bank across the globe — high-stakes, high-conviction advisory.",
      logo: "assets/logos/dalberg.png",
      color: "green",
      note: "This is why I thrive in IC presentations",
      notePos: "right",
      url: "https://dalberg.com",
    },
    {
      era: "USAID Cambodia",
      title: "Taught me how to learn new markets, fast",
      why: "Supported a 7-partner investment coalition to drive $30M in climate-smart technology in Cambodia.",
      icon: "🌱",
      color: "green",
    },
    {
      era: "Solo Travel",
      title: "Built my interpersonal skills",
      why: "Started traveling solo, covering 26+ cities across South and Southeast Asia — the networks and perspectives that shape how I invest.",
      icon: "✈️",
      color: "amber",
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
      era: "Rotman MBA",
      title: "Technical and soft skills at 100x speed",
      why: "Went from finance 101 to 501, built a strong community and leadership skills, worked with a CDL startup.",
      logo: "assets/logos/uoft.png",
      color: "sky",
      coords: "43.66°N, 79.40°W",
      note: "Built me a go-to crew of experts and peers on speed dial",
    },
    {
      era: "BDC Capital",
      title: "Leading deal work and learning investment discipline",
      why: "Deploying into Canada's top ventures — 100% IC approval on every authored memo.",
      logo: "assets/logos/bdc.png",
      color: "green",
      url: "https://www.bdc.ca/en/bdc-capital/venture-capital/funds/thrive-platform",
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
      why: "In five years, I aim to launch my own fund, investing in category-defining companies solving critical global problems.",
      icon: "💡",
      isFuture: true,
      color: "amber",
    },
  ],

  communities: {
    photo: "assets/Community.jpeg",
    intro: null,
    list: [
      { name: "University of Toronto", desc: "Canada's largest alumni network — behind 500+ startups and a globally top-ranked research university", logo: "assets/logos/uoft.png", url: "https://www.utoronto.ca" },
      { name: "Creative Destruction Lab (CDL)", desc: "World's leading deep-tech accelerator — where science meets venture and breakthroughs become companies", logo: "assets/logos/cdl.png", url: "https://creativedestructionlab.com" },
      { name: "CWVC", desc: "Canadian Women in VC — building the next generation of women fund managers and investors", logo: "assets/logos/cwvc.png", url: "https://www.cwvc.ca" },
      { name: "Proprietary Network", desc: "Founders, investors, and operators across 10+ countries — built through travel, deals, and genuine curiosity", icon: "🌍", url: null },
      { name: "UNLEASH", desc: "A truly global network of 7,000+ innovators from 190+ countries solving the world's biggest challenges", logo: "assets/logos/unleash.png", url: "https://unleash.org" },
      { name: "CAFIID", desc: "Canada's development finance community — bridging capital, policy, and impact at scale", logo: "assets/logos/cafiid.png", url: "https://www.cafiid.ca" },
      { name: "BDC Capital", desc: "Canada's most active and experienced VC investor — providing access to a network of 20+ co-investment partners, seasoned advisors, and deep operational expertise through the Thrive Fund ecosystem", logo: "assets/logos/bdc.png", url: "https://www.bdc.ca/en/bdc-capital" },
      { name: "LEADS Mentorship", desc: "CVCA's flagship mentorship program pairing emerging professionals with senior VC and PE leaders — providing structured access to industry expertise, career navigation, and a high-calibre peer network across Canadian private capital", icon: "🎓", url: "https://www.cvca.ca/leads" },
    ],
  },

  contact: {
    message: "Let's Chat.",
    byline: "I'm always open to connecting — whether you're a founder, investor, student, or someone with ideas to share. If anything on this site sparked a thought, or if I can help in any way, I'd love to hear from you.",
    email: "mailto:roopaldahiya5@gmail.com",
    linkedin: "https://www.linkedin.com/in/roopaldahiya",
  },
};
