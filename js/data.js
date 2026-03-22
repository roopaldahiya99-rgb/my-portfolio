/* ─────────────────────────────────────────────────────────
   PORTFOLIO DATA
   Update this file to keep your site current.
───────────────────────────────────────────────────────── */

// ── MAP PINS ─────────────────────────────────────────────
const MAP_PINS = [
  {
    country: "Kenya", code: "ke", lat: -1.286, lng: 36.817,
    type: "invest", company: "Dot Glasses", role: "Investor",
    description: "Backed Dot Glasses, bringing affordable, foldable reading glasses to underserved communities across Africa.",
    sectors: ["Healthcare", "Impact"], tagClass: "tag-coral",
  },
  {
    country: "India", code: "in", lat: 20.593, lng: 78.963,
    type: "invest", company: "Financial Inclusion & Media Tech", role: "Investor / Advisor",
    description: "Invested in financial inclusion in rural India. Also facilitated Google News Initiative investment in Indian media technology.",
    sectors: ["Fintech", "Media Tech"], tagClass: "tag-sky",
  },
  {
    country: "United States", code: "us", lat: 37.090, lng: -95.712,
    type: "invest", company: "Insurtech & Google News", role: "Investor / Connector",
    description: "Backed an insurtech startup reimagining coverage for the gig economy. Worked with Google News to channel capital into global media startups.",
    sectors: ["Insurtech", "Media"], tagClass: "tag-purple",
  },
  {
    country: "Vietnam", code: "vn", lat: 14.058, lng: 108.277,
    type: "support", company: "Healthcare Enterprise", role: "Cross-border Deal Facilitator",
    description: "Facilitated an Australian fund's investment into a high-growth Vietnamese healthcare enterprise — bridging due diligence, culture, and capital.",
    sectors: ["Healthcare", "Cross-border"], tagClass: "tag-coral",
  },
  {
    country: "Australia", code: "au", lat: -25.274, lng: 133.775,
    type: "support", company: "Australian VC Fund", role: "LP & Deal Sourcing Partner",
    description: "Worked alongside an Australian fund to source and structure deals across Southeast Asia, with a focus on healthcare and consumer.",
    sectors: ["VC", "Healthcare"], tagClass: "tag",
  },
  {
    country: "Canada", code: "ca", lat: 56.130, lng: -106.346,
    type: "network", company: "CDL — Creative Destruction Lab", role: "Mentor & Affiliate",
    description: "Active affiliate of the Creative Destruction Lab at the University of Toronto — one of the world's top deep-tech startup accelerators.",
    sectors: ["Deep Tech", "VC"], tagClass: "tag-amber",
  },
  {
    country: "United Kingdom", code: "gb", lat: 55.378, lng: -3.435,
    type: "network", company: "Global PE & Finance Network", role: "MBA & CFA Candidate",
    description: "Building deep expertise in private equity and global finance through CFA and MBA programs with strong UK-based networks.",
    sectors: ["PE", "Finance"], tagClass: "tag-sky",
  },
  {
    country: "Singapore", code: "sg", lat: 1.352, lng: 103.820,
    type: "support", company: "Southeast Asia Fintech Ecosystem", role: "Advisor",
    description: "Connected founders and investors across the SEA fintech ecosystem, focusing on payments, lending, and financial access.",
    sectors: ["Fintech", "SEA"], tagClass: "tag-sky",
  },
];

// ── PASSPORT COUNTRIES (flat grid, 6 cards) ──────────────
const PASSPORT_COUNTRIES = [
  {
    region: "United States",
    code: "us",
    flag: "https://flagcdn.com/w80/us.png",
    sectors: [
      { name: "Insurtech", link: "learning.html#insurance" },
      { name: "Media Tech", link: "learning.html#media" },
    ],
    stamp: "Gig economy insurtech · Google News global media investment",
  },
  {
    region: "Canada",
    code: "ca",
    flag: "https://flagcdn.com/w80/ca.png",
    sectors: [
      { name: "Cleantech", link: "learning.html#climate" },
      { name: "Healthtech", link: "learning.html#healthcare" },
      { name: "Fintech", link: "learning.html#fintech" },
    ],
    stamp: "CDL deep-tech mentorship · Cross-border deal sourcing",
  },
  {
    region: "India",
    code: "in",
    flag: "https://flagcdn.com/w80/in.png",
    sectors: [
      { name: "Media Tech", link: "learning.html#media" },
      { name: "Fintech", link: "learning.html#fintech" },
    ],
    stamp: "Financial inclusion · Google News \u2192 Indian media tech",
  },
  {
    region: "Southeast Asia",
    code: "vn",
    flag: "https://flagcdn.com/w80/vn.png",
    sectors: [
      { name: "Healthtech", link: "learning.html#healthcare" },
    ],
    stamp: "AU fund \u2192 Vietnamese healthcare enterprise · Cross-border deal",
  },
  {
    region: "Africa",
    code: "ke",
    flag: "https://flagcdn.com/w80/ke.png",
    sectors: [
      { name: "Healthtech", link: "learning.html#healthcare" },
    ],
    stamp: "Affordable eyecare for 1B+ people · Dot Glasses",
  },
  {
    region: "Australia",
    code: "au",
    flag: "https://flagcdn.com/w80/au.png",
    sectors: [
      { name: "Healthcare", link: "learning.html#healthcare" },
    ],
    stamp: "VC fund partnership · Deal sourcing across Southeast Asia",
  },
];

// ── LEARNING ─────────────────────────────────────────────
const LEARNING = {
  classes: [
    {
      icon: "📊", title: "CFA Level I & II", meta: "CFA Institute · 2024–2025", type: "class",
      takeaway: "<strong>Key insight:</strong> Rigorous financial analysis discipline — DCF, comparables, and portfolio theory have sharpened how I underwrite investments and stress-test assumptions in early-stage deals.",
      work: "Built a full DCF model and comparable company analysis for a mid-cap consumer goods company. Completed equity valuation under multiple scenarios for CFA exam prep.",
      tags: ["Valuation", "Equity", "Portfolio Theory"],
    },
    {
      icon: "🏢", title: "Private Equity Fundamentals", meta: "MBA Elective · 2024", type: "class",
      takeaway: "<strong>Key insight:</strong> The PE operating model — entry multiples, value creation levers, and exit engineering — has completely changed how I evaluate companies. It's not just capital, it's active ownership.",
      work: "Built an LBO model for a mid-market SaaS acquisition — modelled entry multiples, debt schedules, and a 5-year value creation plan with three exit scenarios.",
      tags: ["LBO", "Value Creation", "PE"],
    },
    {
      icon: "💼", title: "Corporate Finance & M&A", meta: "MBA Core · 2024", type: "class",
      takeaway: "<strong>Key insight:</strong> Understanding the strategic and financial logic behind M&A (synergies, deal structure, post-merger integration) is essential for advising founders on exit paths.",
      work: "Structured a mock acquisition proposal for a cross-border deal, including synergy analysis, deal financing, and post-merger integration roadmap.",
      tags: ["M&A", "Deal Structuring", "Finance"],
    },
    {
      icon: "🌍", title: "Emerging Markets Finance", meta: "MBA Elective · 2024", type: "class",
      takeaway: "<strong>Key insight:</strong> Currency risk, political risk, and informal economies are not obstacles — they are the investment thesis. The opportunity is in navigating what others avoid.",
      work: "Analysed FX hedging strategies for an India-based fintech expansion and built a country risk scorecard for six frontier markets.",
      tags: ["EM", "Risk", "Global Finance"],
    },
    {
      icon: "🚀", title: "Venture Capital & Startup Strategy", meta: "MBA · 2023", type: "class",
      takeaway: "<strong>Key insight:</strong> The power law of VC returns means portfolio construction is everything. Conviction in founders is the edge — markets evolve, but great people adapt.",
      work: "Evaluated a Series A healthtech pitch — built a TAM/SAM/SOM analysis, scored the founding team, and presented an investment recommendation to a mock IC.",
      tags: ["VC", "Startups", "Power Law"],
    },
    {
      icon: "🎯", title: "Entrepreneurial Strategy", meta: "MBA Elective · 2024", type: "class",
      takeaway: "<strong>Key insight:</strong> Strategy for startups isn't about grand plans — it's about choosing the right competitive position and iterating faster than incumbents. The 'test two, choose one' framework changed how I evaluate founder decisions.",
      work: "Assessed the Canada Goose investment opportunity — analysed the brand's competitive moat, DTC strategy, and international expansion risks.",
      tags: ["Strategy", "Competitive Analysis", "DTC"],
    },
  ],
  cases: [
    {
      icon: "👜", title: "LVMH & Tiffany — Luxury M&A", meta: "Case Study · 2024", type: "case",
      takeaway: "<strong>Key insight:</strong> The $15.8B acquisition wasn't just about brand — it was about acquiring the American customer relationship and a distribution moat. Brand equity in luxury is its own form of compounding capital.",
      work: "Analysed the $15.8B deal: modelled the acquisition premium, mapped LVMH's strategic rationale, and assessed post-deal integration risks for the US market.",
      tags: ["Luxury", "M&A", "Brand Strategy"],
    },
    {
      icon: "💎", title: "Louis Vuitton — Brand as a Moat", meta: "Case Study · 2024", type: "case",
      takeaway: "<strong>Key insight:</strong> LV's obsession with scarcity, craftsmanship storytelling, and vertical integration is a masterclass in pricing power. The lesson: moats are built over decades, not quarters.",
      work: "Mapped LV's vertical integration strategy and quantified its pricing power versus peers — built a brand equity framework comparing luxury house valuations.",
      tags: ["Brand Equity", "Luxury", "Moats"],
    },
    {
      icon: "☀️", title: "Renewable Energy Transition — Investor Perspective", meta: "Case Study · 2023", type: "case",
      takeaway: "<strong>Key insight:</strong> The energy transition is the largest capital reallocation event in history. First movers in infrastructure and tech will define the next generation of value creation.",
      work: "Built an investment thesis for solar microgrids in SE Asia — modelled unit economics, compared with diesel alternatives, and presented to class as a mock LP pitch.",
      tags: ["Energy", "Climate", "Infrastructure"],
    },
    {
      icon: "🏦", title: "Fintech in Emerging Markets — M-Pesa to Nubank", meta: "Case Study · 2023", type: "case",
      takeaway: "<strong>Key insight:</strong> Mobile-first financial services succeed not by copying incumbents, but by designing for the unbanked from scratch. Distribution via mobile agents is a competitive moat.",
      work: "Compared M-Pesa's agent network model with Nubank's digital-only approach — mapped their market entry strategies and identified the key success factors for financial inclusion.",
      tags: ["Fintech", "Financial Inclusion", "EM"],
    },
  ],
  reading: [
    {
      icon: "📰", title: "Financial Times — Daily Reading", meta: "FT · Ongoing", type: "read",
      takeaway: "<strong>Key insight:</strong> The FT trains you to see macro forces in micro stories. Tracking central bank policy, geopolitics, and sector M&A patterns daily has become the most valuable 30 minutes of my day.",
      work: "Track central bank policy shifts and M&A activity daily — used FT analysis to inform my thesis on energy transition investment timing.",
      tags: ["Macro", "Markets", "Daily Habit"],
    },
    {
      icon: "📗", title: "The Innovator's Dilemma — Clayton Christensen", meta: "Book · 2023", type: "read",
      takeaway: "<strong>Key insight:</strong> Disruption doesn't beat incumbents — incumbents beat themselves by rationally prioritizing their best current customers. The white space is always at the low end.",
      work: "Applied Christensen's disruption framework to evaluate a fintech startup targeting underbanked populations — used it to structure my investment memo.",
      tags: ["Disruption", "Strategy", "Classic"],
    },
    {
      icon: "🌱", title: "Bill Gates — How to Avoid a Climate Disaster", meta: "Book · 2023", type: "read",
      takeaway: "<strong>Key insight:</strong> The 'green premium' — the cost difference between clean and dirty options — is the real investment thesis for climate. Wherever we can eliminate or fund-down the green premium, value follows.",
      work: "Used the 'green premium' framework to build a sector scoring model for climate tech investments — ranked 12 sub-sectors by premium gap and investability.",
      tags: ["Climate", "Energy", "Impact"],
    },
    {
      icon: "📈", title: "The Economist — Weekly Deep Reads", meta: "The Economist · Ongoing", type: "read",
      takeaway: "<strong>Key insight:</strong> Long-form economic analysis forces second-order thinking. Reading about AI's impact on labor markets, deglobalization trends, and the rise of sovereign wealth changed how I frame sector theses.",
      work: "Synthesised Economist coverage on deglobalisation to write a memo on supply chain resilience as an investment theme for emerging market funds.",
      tags: ["Economics", "Global Trends", "Analysis"],
    },
    {
      icon: "🤝", title: "Zero to One — Peter Thiel", meta: "Book · 2022", type: "read",
      takeaway: "<strong>Key insight:</strong> The best companies create monopolies through secrets — things that are true but not widely believed. I now filter investments by asking: what unique truth does this founder know?",
      work: "Adopted Thiel's 'secret' test as part of my founder evaluation framework — now use it in every IC presentation to assess founder-market fit.",
      tags: ["Venture", "Strategy", "Founders"],
    },
  ],
  thesis: [
    {
      icon: "🌱", title: "Climate & Clean Energy", meta: "Active Thesis · 2023–Present", type: "thesis",
      keyQ: "How do you collapse the 'green premium' through technology and business model innovation?",
      work: "Backed solar microgrids in SE Asia and advised on carbon markets infrastructure. Built a 12-sub-sector scoring model ranking climate investments by green premium gap.",
      learned: "Climate tech isn't charity — it's the biggest market transition of the century. The winners are companies that make the clean option the cheap option.",
      tags: ["Climate", "Energy", "Impact Investing"],
    },
    {
      icon: "💳", title: "Fintech & Financial Inclusion", meta: "Active Thesis · 2022–Present", type: "thesis",
      keyQ: "Can you build financial services for the 1.4B unbanked without competing with banks at all?",
      work: "Invested in a last-mile lending platform in India and supported B2B payments infrastructure in Singapore solving cross-border FX friction for SMEs.",
      learned: "The best fintech companies in emerging markets don't compete with banks — they route around them entirely, leveraging mobile penetration, agent networks, and data.",
      tags: ["Fintech", "Inclusion", "Emerging Markets"],
    },
    {
      icon: "🏥", title: "Healthcare & Access", meta: "Active Thesis · 2023–Present", type: "thesis",
      keyQ: "How do you deliver quality healthcare to people who can't access or afford it?",
      work: "Invested in Dot Glasses (affordable eyecare for 1B+ people in Kenya) and facilitated cross-border investment into a Vietnamese healthcare platform.",
      learned: "Focus on access, not luxury healthcare. Affordable diagnostics, last-mile distribution, and telemedicine designed for low-bandwidth environments are where the impact and returns converge.",
      tags: ["Healthcare", "Access", "Frontier Markets"],
    },
    {
      icon: "🛡️", title: "Insurtech", meta: "Active Thesis · 2023–Present", type: "thesis",
      keyQ: "Can behavioural data and parametric triggers price risk that legacy actuarial tables can't see?",
      work: "Invested in a parametric insurance platform offering real-time, usage-based coverage for 50M+ freelancers and gig workers chronically underserved by traditional carriers.",
      learned: "The best insurtech companies aren't distribution plays — they're fundamentally re-underwriting risk using real-time data, especially for the gig economy.",
      tags: ["Insurtech", "Parametric", "Gig Economy"],
    },
    {
      icon: "📱", title: "Media Tech", meta: "Active Thesis · 2022–Present", type: "thesis",
      keyQ: "Can technology make quality local journalism economically viable again?",
      work: "Facilitated Google News Initiative's investment into Indian media tech — helped build revenue tools for regional language publishers.",
      learned: "Local and regional news media is critical infrastructure. Tech-enabled business models can save journalism — but only if you solve distribution and monetisation together.",
      tags: ["Media", "Journalism", "Google News"],
    },
    {
      icon: "⚡", title: "Energy Transition", meta: "Active Thesis · 2023–Present", type: "thesis",
      keyQ: "Where are the defensible, long-lived businesses in the energy transition infrastructure layer?",
      work: "Early-stage investment in battery tech developing second-life EV battery systems for stationary grid storage. Wrote investment memo on energy storage as the grid bottleneck.",
      learned: "The infrastructure layer — storage, grid modernisation, and distributed energy — is where the most defensible businesses with long asset lives are being built.",
      tags: ["Energy", "Storage", "Infrastructure"],
    },
  ],
};

// ── SECTORS (used on learning page for deal cards + thesis) ──
const SECTORS = [
  {
    id: "climate", icon: "🌱", name: "Climate & Clean Energy",
    cssClass: "sector-climate", iconBg: "#e8f5ed",
    desc: "The defining challenge and the defining investment opportunity of our generation. I'm drawn to solutions that make clean choices the economical ones.",
    investments: 2, articles: 3,
    detail: "Climate tech isn't charity — it's the biggest market transition of the century. I focus on companies that collapse the 'green premium' through technology and business model innovation.",
    investmentList: [
      { name: "Solar Microgrids (SE Asia)", desc: "Backed an off-grid solar company bringing reliable, affordable power to rural Southeast Asia — displacing diesel and enabling the next layer of economic activity." },
      { name: "Carbon Markets Infrastructure", desc: "Advised on a tech platform standardizing voluntary carbon credit verification, addressing the trust deficit in climate finance." },
    ],
    articleList: [
      "Why Climate Tech is the New Software Opportunity",
      "The Green Premium Playbook for Investors",
      "Carbon Markets: From Controversy to Credibility",
    ],
  },
  {
    id: "fintech", icon: "💳", name: "Fintech & Financial Inclusion",
    cssClass: "sector-fintech", iconBg: "#ddeef7",
    desc: "1.4 billion adults remain unbanked. Technology is the fastest route to financial dignity — and there's enormous value in solving access.",
    investments: 2, articles: 2,
    detail: "My thesis: the best fintech companies in emerging markets don't compete with banks — they route around them entirely, leveraging mobile penetration, agent networks, and data.",
    investmentList: [
      { name: "Financial Inclusion Platform — India", desc: "Invested in a last-mile lending product using alternative data scoring to extend credit to India's self-employed rural workforce." },
      { name: "Singapore Payments Infra", desc: "Supported a B2B payments infrastructure company solving FX friction for SMEs operating cross-border in Southeast Asia." },
    ],
    articleList: [
      "How Mobile-First Finance Is Rewiring Emerging Markets",
      "Beyond Microfinance: The Next Wave of Inclusion Tech",
    ],
  },
  {
    id: "energy", icon: "⚡", name: "Energy Transition",
    cssClass: "sector-energy", iconBg: "#fdf0d9",
    desc: "Energy is everything — it powers economies, determines geopolitics, and sets the pace of human development. The transition is where capital meets civilization.",
    investments: 1, articles: 2,
    detail: "I focus on the infrastructure layer of the energy transition — storage, grid modernization, and distributed energy — where defensible businesses with long asset lives are being built.",
    investmentList: [
      { name: "Energy Storage Startup", desc: "Early-stage investment in a battery technology company developing second-life EV battery systems for stationary grid storage." },
    ],
    articleList: [
      "Why Energy Storage Is the Bottleneck of the Green Grid",
      "The Geopolitics of Clean Energy Minerals",
    ],
  },
  {
    id: "insurance", icon: "🛡️", name: "Insurtech",
    cssClass: "sector-insurance", iconBg: "#ede8f8",
    desc: "Insurance is one of the most data-rich, relationship-driven industries in the world — and one of the least innovated.",
    investments: 1, articles: 1,
    detail: "The best insurtech companies are not just distribution plays — they're using behavioral data and parametric triggers to price risk that legacy actuarial tables can't see.",
    investmentList: [
      { name: "Gig Economy Insurtech — US", desc: "Invested in a parametric insurance platform offering real-time, usage-based coverage for freelancers and gig workers — a 50M+ person market chronically underserved by traditional carriers." },
    ],
    articleList: [
      "Parametric Insurance: Why the Future of Coverage is Event-Triggered",
    ],
  },
  {
    id: "healthcare", icon: "🏥", name: "Healthcare & Access",
    cssClass: "sector-healthcare", iconBg: "#fde8e3",
    desc: "Healthcare is deeply personal. I invest in companies that believe everyone, regardless of where they're born, deserves quality care.",
    investments: 2, articles: 2,
    detail: "My focus is on access, not luxury healthcare — affordable diagnostics, last-mile distribution of medical products, and telemedicine designed for low-bandwidth environments.",
    investmentList: [
      { name: "Dot Glasses — Kenya", desc: "Foldable, affordable reading glasses for the 1B+ people in the developing world who need corrective lenses but can't access or afford them." },
      { name: "Vietnam Healthcare Enterprise", desc: "Facilitated cross-border investment into a Vietnamese healthcare platform scaling primary care infrastructure outside major cities." },
    ],
    articleList: [
      "Affordable Eyecare: A Billion-Person Problem Worth Solving",
      "Healthcare Investment in Frontier Markets: Lessons from SE Asia",
    ],
  },
  {
    id: "media", icon: "📱", name: "Media Tech",
    cssClass: "sector-media", iconBg: "#daf2f5",
    desc: "Information shapes markets, politics, and culture. I believe in funding the infrastructure for quality journalism.",
    investments: 1, articles: 1,
    detail: "Working with the Google News Initiative deepened my conviction: local and regional news media is a critical infrastructure problem — and tech-enabled business models can make quality journalism economically viable.",
    investmentList: [
      { name: "Indian Media Tech Platform", desc: "Facilitated the Google News Initiative's investment into an Indian media technology company building revenue-generation tools for regional language publishers." },
    ],
    articleList: [
      "Can Technology Save Local Journalism?",
    ],
  },
];

// ── ABOUT PAGE DATA ──────────────────────────────────────
const ABOUT = {
  name: "Roopal",
  tagline: "VC · PE · MBA — Betting on people and ideas across the globe",
  bio: "I'm a lifelong learner who's curious about everything — from vibe coding to sales strategies, from luxury brand moats to solar microgrids. I work in venture capital and private equity because I love betting on people and creating value in companies. I'm doing my MBA and becoming an expert in finance, which pulls me toward PE. Every day is a chance to learn something new: I read the FT every morning, do case studies monthly, write articles, and take every class I can find. The through-line is curiosity — it's what drives me to invest, to learn, and to connect with people building things that matter.",
  photo: null, // Add your photo path here: "assets/roopal.jpg"
  networks: [
    { name: "CAFIID", desc: "Canadian Association for International Development", photo: null, url: null },
    { name: "CDL", desc: "Creative Destruction Lab — U of T Rotman", photo: null, url: null },
    { name: "UNLEASH", desc: "Global Innovation Lab for the SDGs", photo: null, url: null },
  ],
  companies: [
    { name: "University of Toronto", logo: "assets/logos/uoft.png", url: null },
    { name: "Dalberg", logo: "assets/logos/dalberg.png", url: null },
    { name: "Wysa", logo: "assets/logos/wysa.png", url: null },
    { name: "KOIS", logo: "assets/logos/kois.png", url: null },
    { name: "BDC Capital", logo: "assets/logos/bdc.png", url: null },
  ],
  links: {
    linkedin: "https://linkedin.com", // Replace with real URL
    email: "mailto:roopaldahiya5@gmail.com",
    calendly: "https://calendly.com", // Replace with real URL
    cv: null, // Add CV file path: "assets/Roopal_CV.pdf"
  },
  happyToMeet: [
    "Founders building in my sectors",
    "People looking for mentorship",
    "Anyone who wants to talk startups",
  ],
  funQuestions: [
    {
      question: "What's your favourite part about VC?",
      answer: "IC presentations! It's like game day for me — everything leads to that moment. If you've done your work well, it's the most enjoyable part. The push-back on your thinking from people with experience, that interplay of details and perspective... there's nothing like it.",
      image: null, // Add photo: "assets/faq-vc.jpg"
    },
    {
      question: "What do you read first thing in the morning?",
      answer: "The Financial Times. Every single day. It trains you to see macro forces hiding in micro stories — and it's the most valuable 30 minutes of my day.",
      image: null, // Add photo: "assets/faq-reading.jpg"
    },
    {
      question: "What's the best investment lesson you've learned?",
      answer: "Bet on the jockey, not the horse. Markets shift, products pivot, but exceptional founders adapt. The pattern across every successful deal I've touched: an unstoppable person who simply would not quit.",
      image: null, // Add photo: "assets/faq-lesson.jpg"
    },
  ],
};
