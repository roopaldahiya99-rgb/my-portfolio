/* ─────────────────────────────────────────────────────────
   PORTFOLIO DATA — Full Redesign
   Update this file to keep your site current.
───────────────────────────────────────────────────────── */

// ── DEAL MAP ─────────────────────────────────────────────
// Investor origins → deal destinations with connection lines
const DEAL_MAP = {
  investors: [
    { id: "bdc",      label: "BDC Capital",          city: "Toronto",     lat: 43.65,  lng: -79.38,  code: "ca" },
    { id: "usaid",    label: "USAID",                 city: "Washington",  lat: 38.91,  lng: -77.04,  code: "us" },
    { id: "shell",    label: "Shell",                 city: "Houston",     lat: 29.76,  lng: -95.37,  code: "us" },
    { id: "google",   label: "Google News Initiative", city: "Mountain View", lat: 37.39, lng: -122.08, code: "us" },
    { id: "kois",     label: "KOIS Invest",           city: "Brussels",    lat: 50.85,  lng: 4.35,    code: "be" },
    { id: "dalberg",  label: "Dalberg Advisors",      city: "New Delhi",   lat: 28.61,  lng: 77.21,   code: "in" },
  ],

  destinations: [
    {
      country: "Canada", code: "ca", lat: 49.28, lng: -106.35,
      spotlight: "Early-Stage B2B, Fintech & EdTech — $500MM Thrive Fund",
      stages: ["Early Stage", "Growth Stage"],
      sectors: ["Fintech", "B2B SaaS", "EdTech"],
      fromInvestors: ["bdc"],
    },
    {
      country: "India", code: "in", lat: 20.59, lng: 78.96,
      spotlight: "Assistive Tech, Healthcare & Media Investments",
      stages: ["Early Stage", "Growth Stage"],
      sectors: ["Healthcare", "Assistive Tech", "Media Tech"],
      fromInvestors: ["kois", "google"],
    },
    {
      country: "Indonesia", code: "id", lat: -0.79, lng: 113.92,
      spotlight: "Assistive Technology Investment Thesis",
      stages: ["Growth Stage"],
      sectors: ["Assistive Tech", "Healthcare"],
      fromInvestors: ["kois"],
    },
    {
      country: "Cambodia", code: "kh", lat: 12.57, lng: 104.99,
      spotlight: "Climate-Tech — $30M Capital Deployment",
      stages: ["Early Stage"],
      sectors: ["Climate-Tech", "Impact"],
      fromInvestors: ["usaid"],
    },
    {
      country: "Vietnam", code: "vn", lat: 14.06, lng: 108.28,
      spotlight: "Social Eyecare Enterprise — $400M Expansion",
      stages: ["Growth Stage"],
      sectors: ["Healthtech", "Social Enterprise"],
      fromInvestors: ["dalberg"],
    },
    {
      country: "MENA", code: "sa", lat: 23.88, lng: 45.08,
      spotlight: "Clean Energy for Refugee Settlements — 500K+ Beneficiaries",
      stages: ["Growth Stage"],
      sectors: ["Clean Energy", "Impact"],
      fromInvestors: ["shell"],
    },
    {
      country: "Kenya", code: "ke", lat: -1.29, lng: 36.82,
      spotlight: "Assistive Tech & Healthcare Ventures",
      stages: ["Early Stage"],
      sectors: ["Healthcare", "Assistive Tech"],
      fromInvestors: ["kois"],
    },
    {
      country: "Southeast Asia", code: "sg", lat: 1.35, lng: 103.82,
      spotlight: "Cross-Border Acquisition — $15MM Revenue Unlock",
      stages: ["Growth Stage"],
      sectors: ["M&A", "Cross-border"],
      fromInvestors: ["dalberg"],
    },
  ],

  operationalStar: {
    city: "Bangalore", country: "India", code: "in", lat: 12.97, lng: 77.59,
    label: "Operational Experience",
    detail: "Worked on the ground with Wysa — a global AI mental health startup. Built GTM strategy from scratch, ran customer training, and shaped organisational design alongside the founder.",
  },
};

// ── DEAL SPOTLIGHT ───────────────────────────────────────
// Featured deals for the Investment Passport page
const DEAL_SPOTLIGHT = [
  {
    title: "Early-Stage B2B & Fintech — Canada",
    region: "Toronto",
    code: "ca",
    stage: "Early Stage",
    sectors: ["Fintech", "B2B SaaS"],
    description: "Led end-to-end due diligence on 7 early-stage B2B and fintech ventures at BDC Capital's $500MM Thrive Fund. Assessed market sizing, product defensibility, and unit economics — authored 4 investment memos with 100% IC approval rate.",
    whatILearned: "Rigorous due diligence isn't about finding reasons to say no — it's about building conviction to say yes. The best memos don't just analyse a company; they tell the story of why this team wins in this market at this moment.",
  },
  {
    title: "Climate-Tech Capital Deployment — Cambodia",
    region: "Cambodia",
    code: "kh",
    stage: "Early Stage",
    sectors: ["Climate-Tech", "Impact"],
    description: "Evaluated 20 climate-tech investment opportunities for USAID Cambodia at Dalberg Advisors. Conducted market sizing, business model analysis, and investment thesis development across 7 partner organisations to guide $30M in capital deployment.",
    whatILearned: "Impact investing isn't charity with a term sheet — it demands the same rigour as commercial deals. The best climate ventures collapse the green premium, making the clean option the obvious business decision.",
  },
  {
    title: "Cross-Border Healthcare — Vietnam",
    region: "Vietnam",
    code: "vn",
    stage: "Growth Stage",
    sectors: ["Healthtech", "Cross-border"],
    description: "Stress-tested the business and operating model of a social eyecare enterprise in Vietnam. Evaluated and refined an expansion strategy to capture a $400M opportunity in neighbouring Asian markets.",
    whatILearned: "In cross-border deals, the hardest asset to underwrite isn't the company — it's the trust. Spending the first 30% of any cross-border process building relational bridges is what makes the other 70% possible.",
  },
];

// ── LESSONS LEARNED ──────────────────────────────────────
const LESSONS_LEARNED = {
  lessons: [
    "Bet on the jockey, not the horse — markets shift, products pivot, but exceptional founders adapt.",
    "Cross-border deals are trust exercises — capital is global, but trust is local.",
    "The best frameworks are earned, not borrowed — generic checklists don't survive first contact with a real deal.",
    "Sectors are chosen by curiosity, not mandate — I follow problems, not trends.",
    "Operating experience changes how you invest — you underwrite differently once you've built something yourself.",
  ],
};

// ── FIELD NOTES ──────────────────────────────────────────
// Replaces the old LEARNING tabbed structure
const FIELD_NOTES = {
  hero: {
    label: "Field Notes",
    title: "Every Lesson Is a <em>Compass</em>.",
    subtitle: "I carry a growth mindset into every room I enter. I ask myself daily: <em>what did I learn today, and how can I apply this to my work and life?</em> Articles, podcasts, classrooms — they all feed the fire. But the deepest learning happens in the field: in deal rooms, founder conversations, and the messy, humbling work of deploying capital where it matters.",
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
      icon: "🎓",
      title: "MBA at Rotman — Finance Specialisation",
      whatILearned: "DCF, LBO modelling, VC strategy, M&A, and financial statement analysis",
      details: "Dean's List (3.75 GPA) with coursework in Fintech, VC Strategy, Private Equity, M&A, and Financial Statement Analysis. At the Creative Destruction Lab, I operationalised GTM strategy for a deep-tech AI venture — bridging the gap between technical milestones and commercial viability. As President of Women in Management Association, leading a team of 12 in supporting women in business. Received $60,000 in merit-based awards including the TorQuest and CDL Awards.",
      tags: ["Fintech", "VC Strategy", "Private Equity", "M&A", "CDL"],
    },
    {
      icon: "📚",
      title: "MBA Case Studies — Favourite Picks",
      whatILearned: "Value creation levers, brand moats, and market entry strategy",
      details: "LVMH × Tiffany taught me that luxury M&A is about acquiring customer relationships, not just brands. Louis Vuitton's vertical integration showed me how moats are built over decades. M-Pesa vs. Nubank revealed that the best fintech companies design for the unbanked from scratch. Renewable energy transition cases convinced me that climate is the largest capital reallocation event in history.",
      tags: ["LVMH", "Fintech", "Energy Transition", "Strategy"],
    },
    {
      icon: "📜",
      title: "Technical Skills & Certifications",
      whatILearned: "Analytical toolkit: DCF, LBO, cap table, and exit modelling",
      details: "Built deep fluency in DCF modelling, LBO structuring, cap table modelling, and exit modelling. Proficient in CapIQ, FactSet, PitchBook, and advanced Excel. These tools are the analytical foundation I bring to every deal memo, financial model, and IC presentation — turning qualitative conviction into quantitative rigour.",
      tags: ["DCF", "LBO", "CapIQ", "FactSet", "PitchBook"],
    },
  ],

  fromPeople: [
    {
      name: "Financial Times",
      type: "Daily Newspaper",
      icon: "📰",
      why: "I read the FT every morning before market open. It trains me to see macro forces hiding in micro stories — a currency move in Turkey, a regulatory shift in Brussels. I use it to pattern-match across geographies before any deal meeting.",
    },
    {
      name: "The Economist",
      type: "Weekly Analysis",
      icon: "🌍",
      why: "My weekend ritual. The Economist forces second-order thinking on AI, deglobalisation, and sovereign capital flows. I use their framework pieces to stress-test my own investment theses — if my thesis can't survive an Economist counter-argument, it's not ready for IC.",
    },
    {
      name: "Stratechery by Ben Thompson",
      type: "Newsletter",
      icon: "💡",
      why: "Ben Thompson is the clearest thinker on tech strategy alive. His aggregation theory framework permanently changed how I evaluate platform businesses. I reference his mental models in almost every tech deal memo I write.",
    },
    {
      name: "The Generalist by Mario Gabriele",
      type: "Substack",
      icon: "📊",
      why: "Mario writes deep-dive company profiles that read like investment memos — exactly the format I want my own thinking to follow. I use his structure as a template when I'm breaking down a new company for the first time.",
    },
    {
      name: "Acquired Podcast",
      type: "Podcast",
      icon: "🎙️",
      why: "Long-form storytelling about how the world's best companies were built. I listen on flights and runs. History is the best framework for investing — if you understand how Costco, LVMH, or TSMC were built, you see patterns everywhere.",
    },
  ],
};

// ── INVESTOR / LEARNER (About Page) ─────────────────────
const INVESTOR_LEARNER = {
  hero: {
    bio: "Investor. Traveller. Perpetual learner. I'm currently with <strong>BDC Capital's $500MM Thrive Fund</strong>, deploying capital into Canada's most promising early-stage fintech, vertical software, and enterprise B2B ventures. I hold an <strong>MBA from Rotman</strong> specializing in finance (Dean's List, 3.75 GPA), and I've built my career across venture investing, global advisory, and startup operations. Outside of work, I love to solo travel — 26+ cities across South and Southeast Asia in one year — build communities that bridge cultures and continents, and champion financial literacy for women.",
    photo: "assets/Roopal.jpeg",
  },

  timeline: [
    {
      era: "University of Delhi",
      title: "Editor & Writer",
      why: "This is where I learned to write clearly. I was Editor in Chief and reviewed 50+ writing pieces.",
      icon: "✍️",
    },
    {
      era: "Startup Compass",
      title: "Co-Author",
      why: "Interviewed unicorn founders — fell in love with startups and building from zero.",
      icon: "📖",
    },
    {
      era: "Dalberg Advisors",
      title: "Global Advisory",
      why: "This gave me my global map. I worked with Kimberly Clark, Shell, Google. I learned to walk into a room full of high-stakes stakeholders and drive decisions.",
      icon: "🌏",
      logo: "assets/logos/dalberg.png",
    },
    {
      era: "Google News Initiative",
      title: "Media & Innovation",
      why: "Built a proprietary pipeline guiding $20MM in investments across India's news ecosystem.",
      icon: "🔍",
      parent: "Dalberg",
    },
    {
      era: "USAID Cambodia",
      title: "Climate-Tech",
      why: "Guided $30M in climate-tech capital deployment — where I fell in love with impact investing.",
      icon: "🌱",
      parent: "Dalberg",
    },
    {
      era: "Solo Travel",
      title: "26+ Cities",
      why: "This is where I learned to build communities and develop networks across cultures and continents.",
      icon: "✈️",
    },
    {
      era: "KOIS Invest",
      title: "Early-Stage Investing",
      why: "My first real exposure to venture — fell in love with turning capital into catalysts.",
      icon: "💡",
      logo: "assets/logos/kois.png",
    },
    {
      era: "Wysa",
      title: "AI Startup Ops",
      why: "Operating inside a startup changed how I invest forever. I stopped asking hypothetical questions.",
      icon: "🚀",
      logo: "assets/logos/wysa.png",
    },
    {
      era: "Rotman MBA",
      title: "Finance & CDL",
      why: "This is where I developed my financial skills — modelling, valuation, and investment frameworks.",
      icon: "🎓",
      logo: "assets/logos/uoft.png",
    },
    {
      era: "CFA & PE Cert",
      title: "Certification",
      why: "Built fluency in DCF, LBO, and financial analysis — the analytical backbone of every deal.",
      icon: "📜",
    },
    {
      era: "BDC Capital",
      title: "$500MM Thrive Fund",
      why: "Currently deploying capital into Canada's most promising ventures. 100% IC approval on authored memos.",
      icon: "💼",
      logo: "assets/logos/bdc.png",
    },
    {
      era: "The Future",
      title: "My Own Fund",
      why: "I see myself investing in world-changing, category-defining companies — and one day, leading my own fund.",
      icon: "🌟",
      isFuture: true,
    },
  ],

  communities: {
    photo: "assets/Community.jpeg",
    list: [
      { name: "University of Toronto", desc: "Alumni network — Rotman School of Management", logo: "assets/logos/uoft.png", url: null },
      { name: "Creative Destruction Lab (CDL)", desc: "Deep-tech startup accelerator — mentor & affiliate", logo: null, url: null },
      { name: "UNLEASH", desc: "Global Innovation Lab for the SDGs", logo: null, url: null },
      { name: "CAFIID", desc: "Canadian Association for International Development", logo: null, url: null },
      { name: "CWVC", desc: "Canadian Women in Venture Capital", logo: null, url: null },
      { name: "Personal Network", desc: "Founders, investors, and operators across 10+ countries", logo: null, url: null },
    ],
  },

  contact: {
    message: "I love connecting with people who are building, investing, or simply curious. If anything on this site resonated — or if you just want to talk startups over coffee — I'd love to hear from you.",
    email: "mailto:roopaldahiya5@gmail.com",
    calendly: "https://calendly.com", // Replace with real URL
    linkedin: "https://www.linkedin.com/in/roopaldahiya",
  },
};
