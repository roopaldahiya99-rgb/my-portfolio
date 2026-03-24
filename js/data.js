/* ─────────────────────────────────────────────────────────
   PORTFOLIO DATA — Full Redesign v4
   Update this file to keep your site current.
───────────────────────────────────────────────────────── */

// ── DEAL MAP ─────────────────────────────────────────────
// Flat pin array + explicit connections
const DEAL_MAP = {
  pins: [
    { id: "australia", country: "Australia", lat: -25, lng: 134, code: "au",
      desc: "Backed institutional healthcare ventures across Southeast Asia",
      type: "deal" },
    { id: "vietnam", country: "Vietnam", lat: 14.06, lng: 108.28, code: "vn",
      desc: "Healthcare enterprise scaling — unlocked $400M+ revenue opportunity",
      type: "deal" },
    { id: "indonesia", country: "Indonesia", lat: -0.79, lng: 113.92, code: "id",
      desc: "Kimberly Clark CVC — menstrual health for underserved populations",
      type: "deal" },
    { id: "newdelhi", country: "India — New Delhi", lat: 28.61, lng: 77.21, code: "in",
      desc: "Drove investments into consumertech, healthtech, femtech startups",
      type: "deal" },
    { id: "mumbai", country: "India — Mumbai", lat: 19.08, lng: 72.88, code: "in",
      desc: "Fintech innovation — optimized outcomes for 5M underserved people",
      type: "deal" },
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
      type: "deal" },
    { id: "singapore", country: "Singapore", lat: 1.35, lng: 103.82, code: "sg",
      desc: "Google News Initiative — $20M Indian media-tech pipeline",
      type: "investor" },
    { id: "alberta", country: "Canada — Alberta", lat: 51.05, lng: -114.07, code: "ca",
      desc: "Flora — first-of-its-kind portable fertility insurance",
      type: "deal" },
    { id: "mena", country: "MENA", lat: 23.88, lng: 45.08, code: "sa",
      desc: "Shell — structured finance facility for clean energy access",
      type: "deal" },
    { id: "novascotia", country: "Canada — Nova Scotia", lat: 44.65, lng: -63.57, code: "ca",
      desc: "pHathom — ocean carbon sequestration and credit generation",
      type: "deal" },
    { id: "toronto", country: "Canada — Toronto", lat: 43.65, lng: -79.38, code: "ca",
      desc: "BDC & Meissner — operational and advisory exposure",
      type: "deal",
      logo: "assets/logos/bdc.png" },
    { id: "africa", country: "Africa — Kenya", lat: -1.29, lng: 36.82, code: "ke",
      desc: "Affordable healthtech ventures serving underserved populations",
      type: "deal" },
    { id: "europe", country: "Europe — Brussels", lat: 50.85, lng: 4.35, code: "eu",
      desc: "KOIS — early-stage healthcare investments across the continent",
      type: "deal",
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
    "Market depth beats market sizing — knowing TAM isn't enough. You need to understand value chains, user journeys, regulations, and ecosystems well enough to build in them yourself.",
    "Founder-market fit is overrated — I've seen founders with raw grit and uncanny passion outperform seasoned industry veterans. Experience helps, but obsession wins.",
    "Capital alone doesn't drive returns — the right syndicate, strategic support, and investor relationships are what compound value. This isn't just about follow-on; it's about how you show up post-close.",
    "Real deals are messy — co-founders exit, metrics slip, timelines break. Navigating chaos through strong structuring and term sheet discipline is the real job.",
    "The best investments change the world — I've seen it firsthand on the ground. Ventures unlocking healthcare access, clean energy, financial inclusion. This is what drives me to work every single day.",
  ],
};

// ── FIELD NOTES ──────────────────────────────────────────
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
      icon: "📜",
      title: "CFA & PE Certification",
      whatILearned: "DCF, LBO, cap table modelling, and financial analysis foundations",
      details: "Built deep fluency in DCF modelling, LBO structuring, cap table modelling, and exit modelling. Proficient in CapIQ, FactSet, PitchBook, and advanced Excel. These tools are the analytical foundation I bring to every deal memo, financial model, and IC presentation — turning qualitative conviction into quantitative rigour.",
      tags: ["DCF", "LBO", "CapIQ", "FactSet", "PitchBook"],
    },
    {
      icon: "🎓",
      title: "MBA at Rotman — Finance Specialisation",
      whatILearned: "DCF, LBO modelling, VC strategy, M&A, and financial statement analysis",
      details: "Dean's List (3.75 GPA) with coursework in Fintech, VC Strategy, Private Equity, M&A, and Financial Statement Analysis. At the Creative Destruction Lab, I operationalised GTM strategy for a deep-tech AI venture — bridging the gap between technical milestones and commercial viability. As President of Women in Management Association, leading a team of 12 in supporting women in business. Received $60,000 in merit-based awards including the TorQuest and CDL Awards.",
      tags: ["Fintech", "VC Strategy", "Private Equity", "M&A", "CDL"],
    },
    {
      icon: "📚",
      title: "Favourite PE & VC Case Studies",
      whatILearned: "Value creation levers, brand moats, and market entry strategy",
      details: "LVMH × Tiffany taught me that luxury M&A is about acquiring customer relationships, not just brands. Louis Vuitton's vertical integration showed me how moats are built over decades. M-Pesa vs. Nubank revealed that the best fintech companies design for the unbanked from scratch. Renewable energy transition cases convinced me that climate is the largest capital reallocation event in history.",
      tags: ["LVMH", "Fintech", "Energy Transition", "Strategy"],
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
    {
      name: "Two Small Fish",
      type: "Blog",
      icon: "✍️",
      why: "A personal blog exploring travel, culture, and the intersections of life and work. Writing forces clarity — it sharpens how I see markets, people, and the stories behind every investment.",
    },
  ],
};

// ── INVESTOR / LEARNER (About Page) ─────────────────────
const INVESTOR_LEARNER = {
  hero: {
    tagline: "Investor. Traveller. Perpetual learner.",
    bio: "I'm currently with <strong>BDC Capital's Thrive Fund</strong>, deploying capital into Canadian ventures across fintech, healthtech, climate, and enterprise software. I hold an <strong>MBA from Rotman</strong> specializing in finance — where I went from finance 101 to 501, sharpened my modelling and valuation toolkit, and led the Women in Management Association. Before that, I built my lens across global advisory at Dalberg, early-stage investing at KOIS, and startup operations at Wysa. Outside of work, I love to solo travel, build communities that bridge cultures and continents, and champion women's empowerment and climate action.",
    photo: "assets/Roopal.jpeg",
  },

  timeline: [
    {
      era: "University of Delhi",
      title: "Taught me to write with clarity",
      why: "Editor in Chief — reviewed and edited 50+ articles, sharpening every word into conviction.",
      icon: "✍️",
    },
    {
      era: "Startup Compass",
      title: "Sparked my love for entrepreneurship",
      why: "Co-authored a startup playbook, interviewed unicorn founders — fell in love with building from zero.",
      icon: "📖",
    },
    {
      era: "Dalberg Advisors",
      title: "Taught me to command a room",
      why: "Presented to USAID, Google, Kimberly Clark, Shell, World Bank — high-stakes, high-conviction advisory.",
      logo: "assets/logos/dalberg.png",
    },
    {
      era: "USAID Cambodia",
      title: "Taught me to learn markets fast",
      why: "Guided $30M in climate-tech capital across a new geography in under 6 months.",
      icon: "🌱",
    },
    {
      era: "Solo Travel",
      title: "Built my global community",
      why: "26+ cities across South and Southeast Asia — the networks and perspectives that shape how I invest.",
      icon: "✈️",
    },
    {
      era: "KOIS Invest",
      title: "Taught me to source and invest",
      why: "First venture exposure — built pipeline, screened 20+ deals, developed conviction from scratch.",
      logo: "assets/logos/kois.png",
    },
    {
      era: "Wysa",
      title: "Gave me the operator's lens",
      why: "Built GTM from scratch at a Series C AI mental health startup — stopped asking hypothetical questions.",
      logo: "assets/logos/wysa.png",
    },
    {
      era: "Rotman MBA",
      title: "Sharpened my financial toolkit",
      why: "Finance 101 to 501, modelling, valuation frameworks — and leading Women in Management.",
      logo: "assets/logos/uoft.png",
    },
    {
      era: "CFA & PE Cert",
      title: "First principles in private equity",
      why: "DCF, LBO, cap tables — the analytical backbone behind every deal memo and IC presentation.",
      icon: "📜",
    },
    {
      era: "BDC Capital",
      title: "Dealwork and investment discipline",
      why: "Deploying into Canada's top ventures — 100% IC approval on every authored memo.",
      logo: "assets/logos/bdc.png",
    },
    {
      era: "The Future",
      title: "My Own Fund",
      why: "Investing in world-changing, category-defining companies — and one day, leading my own fund.",
      icon: "🌟",
      isFuture: true,
    },
  ],

  communities: {
    photo: "assets/Community.jpeg",
    intro: "These communities are my unfair advantage — they shape how I source deals, understand markets, and stay sharp. Every conversation is a data point; every relationship compounds.",
    list: [
      { name: "University of Toronto", desc: "Canada's largest alumni network — behind 500+ startups and a globally top-ranked research university", logo: "assets/logos/uoft.png", url: null },
      { name: "Creative Destruction Lab (CDL)", desc: "World's leading deep-tech accelerator — where science meets venture and breakthroughs become companies", logo: null, url: null },
      { name: "UNLEASH", desc: "A truly global network of 7,000+ innovators from 190+ countries solving the world's biggest challenges", logo: null, url: null },
      { name: "CAFIID", desc: "Canada's development finance community — bridging capital, policy, and impact at scale", logo: null, url: null },
      { name: "CWVC", desc: "Canadian Women in VC — building the next generation of women fund managers and investors", logo: null, url: null },
      { name: "Personal Network", desc: "Founders, investors, and operators across 10+ countries — built through travel, deals, and genuine curiosity", logo: null, url: null },
    ],
  },

  contact: {
    message: "I love connecting with people who are building, investing, or simply curious. If anything on this site resonated — or if you just want to talk startups over coffee — I'd love to hear from you.",
    email: "mailto:roopaldahiya5@gmail.com",
    calendly: "https://calendly.com",
    linkedin: "https://www.linkedin.com/in/roopaldahiya",
  },
};
