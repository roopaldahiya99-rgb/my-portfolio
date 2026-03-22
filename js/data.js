/* ─────────────────────────────────────────────────────────
   PORTFOLIO DATA — Full Redesign
   Update this file to keep your site current.
───────────────────────────────────────────────────────── */

// ── DEAL MAP ─────────────────────────────────────────────
// Investor origins → deal destinations with connection lines
const DEAL_MAP = {
  investors: [
    { id: "us-kc",    label: "Kimberly Clark",      city: "Dallas",     lat: 32.78,  lng: -96.80,  code: "us" },
    { id: "us-shell", label: "Shell",               city: "Houston",    lat: 29.76,  lng: -95.37,  code: "us" },
    { id: "sg",       label: "Singapore Investor",   city: "Singapore",  lat: 1.352,  lng: 103.82,  code: "sg" },
    { id: "us-gen",   label: "US Investor",          city: "New York",   lat: 40.71,  lng: -74.00,  code: "us" },
    { id: "us-dc",    label: "US Investor (DC)",     city: "Washington", lat: 38.91,  lng: -77.04,  code: "us" },
    { id: "au",       label: "Australian Fund",      city: "Sydney",     lat: -33.87, lng: 151.21,  code: "au" },
    { id: "uk",       label: "UK Investor",          city: "London",     lat: 51.51,  lng: -0.13,   code: "gb" },
    { id: "to",       label: "Toronto Investor",     city: "Toronto",    lat: 43.65,  lng: -79.38,  code: "ca" },
  ],

  destinations: [
    {
      country: "India", code: "in", lat: 20.59, lng: 78.96,
      spotlight: "Multi-Sector Growth & Early Stage Portfolio",
      stages: ["Growth Stage", "Early Stage"],
      sectors: ["Fintech", "Healthtech", "Media"],
      fromInvestors: ["us-kc", "sg", "us-gen", "uk"],
    },
    {
      country: "Indonesia", code: "id", lat: -0.79, lng: 113.92,
      spotlight: "Growth Stage Consumer Enterprise",
      stages: ["Growth Stage"],
      sectors: ["Consumer", "Manufacturing"],
      fromInvestors: ["us-kc"],
    },
    {
      country: "MENA", code: "sa", lat: 23.88, lng: 45.08,
      spotlight: "Energy Transition Infrastructure",
      stages: ["Growth Stage"],
      sectors: ["Energy", "Infrastructure"],
      fromInvestors: ["us-shell"],
    },
    {
      country: "Cambodia", code: "kh", lat: 12.57, lng: 104.99,
      spotlight: "Early Stage Impact Venture",
      stages: ["Early Stage"],
      sectors: ["Impact", "Social Enterprise"],
      fromInvestors: ["us-dc"],
    },
    {
      country: "Vietnam", code: "vn", lat: 14.06, lng: 108.28,
      spotlight: "Growth Stage Eyecare Enterprise",
      stages: ["Growth Stage"],
      sectors: ["Healthtech"],
      fromInvestors: ["au"],
    },
    {
      country: "Kenya", code: "ke", lat: -1.29, lng: 36.82,
      spotlight: "Early Stage Healthtech Venture",
      stages: ["Early Stage"],
      sectors: ["Healthtech", "Impact"],
      fromInvestors: ["uk"],
    },
    {
      country: "Canada — Nova Scotia", code: "ca", lat: 44.65, lng: -63.57,
      spotlight: "Early Stage Cleantech Venture",
      stages: ["Early Stage"],
      sectors: ["Cleantech"],
      fromInvestors: ["to"],
    },
    {
      country: "Canada — Calgary", code: "ca", lat: 51.05, lng: -114.07,
      spotlight: "Growth Stage Fintech Platform",
      stages: ["Growth Stage"],
      sectors: ["Fintech"],
      fromInvestors: ["to"],
    },
    {
      country: "Canada — Vancouver", code: "ca", lat: 49.28, lng: -123.12,
      spotlight: "Early Stage Healthtech",
      stages: ["Early Stage"],
      sectors: ["Healthtech"],
      fromInvestors: ["to"],
    },
    {
      country: "United States", code: "us", lat: 39.83, lng: -98.58,
      spotlight: "Growth Stage SaaS Platform",
      stages: ["Growth Stage"],
      sectors: ["SaaS", "Enterprise"],
      fromInvestors: ["to"],
    },
  ],

  operationalStar: {
    city: "Bangalore", country: "India", code: "in", lat: 12.97, lng: 77.59,
    label: "Operational Experience",
    detail: "Worked on the ground with Wysa — a global AI mental health startup. Built GTM strategy, trained customers, and shaped organizational design alongside the founder.",
  },
};

// ── DEAL SPOTLIGHT ───────────────────────────────────────
// Featured deals for the Investment Passport page
const DEAL_SPOTLIGHT = [
  {
    title: "Early Stage Cleantech — Canada",
    region: "Nova Scotia",
    code: "ca",
    stage: "Early Stage",
    sectors: ["Cleantech", "Climate"],
    description: "Sourced and evaluated an early-stage cleantech company developing next-generation carbon capture technology. Led due diligence across market sizing, unit economics, and regulatory landscape — ultimately presenting an investment recommendation to the committee.",
    role: "Deal Sourcing & Due Diligence",
    keyInsight: "The best climate ventures don't just solve an environmental problem — they create a cost advantage that makes the clean option the obvious business decision.",
  },
  {
    title: "Growth Stage Healthtech — APAC",
    region: "Vietnam",
    code: "vn",
    stage: "Growth Stage",
    sectors: ["Healthtech", "Cross-border"],
    description: "Facilitated a cross-border investment from an Australian fund into a high-growth Vietnamese healthcare enterprise scaling primary care infrastructure. Bridged due diligence, cultural nuance, and capital across two continents.",
    role: "Cross-Border Deal Facilitation",
    keyInsight: "In cross-border deals, the hardest asset to underwrite isn't the company — it's the trust between two parties who've never shared a room.",
  },
];

// ── LESSONS LEARNED ──────────────────────────────────────
const LESSONS_LEARNED = {
  intro: "Investing in 30+ companies across 8 countries and multiple mandates — from early-stage venture to growth equity — has taught me more than any textbook. These are the convictions I carry into every deal room.",
  lessons: [
    {
      num: "01",
      title: "Bet on the Jockey, Not the Horse",
      summary: "Markets shift, products pivot, but exceptional founders adapt.",
      detail: "The pattern across every successful deal I've touched: an unstoppable person who simply would not quit. TAM models and financial projections matter, but the single best predictor of returns is founder resilience. I've seen mediocre markets generate outsized returns because a founder saw something nobody else could — and refused to stop until the world caught up.",
    },
    {
      num: "02",
      title: "Cross-Border Deals Are Trust Exercises",
      summary: "Capital is global, but trust is local.",
      detail: "Deploying capital across borders isn't just about FX risk and regulatory arbitrage. It's about bridging two parties who operate in entirely different cultural, legal, and interpersonal frameworks. The best cross-border investors don't just transfer capital — they translate context. I've learned that 80% of deal friction isn't financial — it's relational.",
    },
    {
      num: "03",
      title: "The Best Frameworks Are Earned, Not Borrowed",
      summary: "Generic checklists don't survive first contact with a real deal.",
      detail: "Early in my career, I relied on borrowed frameworks — Porter's Five Forces, standard IC templates, boilerplate due diligence checklists. They're useful starting points, but the frameworks that actually drive good decisions are the ones you build from pattern recognition across dozens of deals. My own investment framework has been rewritten three times, and it's better for it.",
    },
    {
      num: "04",
      title: "Sectors Are Chosen by Curiosity, Not Mandate",
      summary: "The best investors don't pick sectors — they follow problems.",
      detail: "I didn't set out to invest in climate or healthtech because they were 'hot.' I followed problems that kept me up at night — a billion people without reading glasses, gig workers with zero insurance, rural communities cut off from capital. Every sector thesis I hold started as a question, not a strategy.",
    },
    {
      num: "05",
      title: "Operating Experience Changes How You Invest",
      summary: "You underwrite differently once you've built something yourself.",
      detail: "Working at Wysa — an AI mental health startup — changed how I evaluate founders. I've sat in the chair: building GTM from scratch, training customers, arguing about org design at 11pm. That experience made me a fundamentally better investor because I stopped asking hypothetical questions and started asking operational ones. 'How will you hire your first 10 salespeople?' beats 'What's your go-to-market strategy?' every time.",
    },
  ],
};

// ── FIELD NOTES ──────────────────────────────────────────
// Replaces the old LEARNING tabbed structure
const FIELD_NOTES = {
  hero: {
    label: "Field Notes",
    title: "Every Deal Is a <em>Lesson</em>. Every Lesson Is a <em>Compass</em>.",
    subtitle: "I carry a growth mindset into every room I enter. I ask myself daily: <em>what did I learn today, and how do I learn more tomorrow?</em> Articles, podcasts, classrooms — they all feed the fire. But the deepest learning happens in the field: in deal rooms, founder conversations, and the messy, humbling work of deploying capital where it matters.",
  },

  fromTheField: [
    {
      icon: "🧭",
      title: "Sectors I Love — And Why",
      summary: "From climate to fintech to healthcare access — the problems that keep me up at night and the investment theses I've built around them.",
      detail: `<p>I don't pick sectors because they're trendy. I follow problems that matter — and build conviction through first-hand deal work.</p>
<p><strong>Climate & Clean Energy:</strong> The biggest market transition of the century. I focus on companies that collapse the 'green premium' — making the clean option the cheap option. I've backed solar microgrids in SE Asia, advised on carbon markets infrastructure, and built a 12-sub-sector scoring model ranking climate investments by green premium gap.</p>
<p><strong>Fintech & Financial Inclusion:</strong> 1.4 billion adults remain unbanked. The best fintech companies in emerging markets don't compete with banks — they route around them entirely. I've invested in last-mile lending in India and supported cross-border payments infrastructure in Singapore.</p>
<p><strong>Healthcare & Access:</strong> I invest in access, not luxury healthcare. Affordable diagnostics, last-mile distribution, and telemedicine designed for low-bandwidth environments. From Dot Glasses in Kenya (affordable eyecare for 1B+ people) to scaling primary care in Vietnam.</p>
<p><strong>Insurtech:</strong> Real-time data and parametric triggers are re-underwriting risk that legacy actuarial tables can't see — especially for the 50M+ underserved gig economy workers.</p>
<p><strong>Media Tech:</strong> Local journalism is critical infrastructure. I worked with Google News Initiative to channel capital into media tech companies building sustainable revenue models for regional publishers.</p>`,
      tags: ["Climate", "Fintech", "Healthcare", "Insurtech", "Media Tech"],
    },
    {
      icon: "📐",
      title: "My Company Investment Framework",
      summary: "How I evaluate companies — the lens I've built from pattern recognition across 30+ deals and multiple mandates.",
      detail: `<p>Every investor has a framework. Mine has been rewritten three times — each version forged by mistakes, surprises, and hard-won conviction. Here's what I look for:</p>
<p><strong>1. Founder-Market Fit:</strong> Not just 'does this person understand the market?' but 'is this person <em>unreasonably</em> well-positioned to win here?' The best founders have an unfair insight — something that's true but not yet widely believed.</p>
<p><strong>2. Problem Severity:</strong> I rank problems by urgency and willingness to pay. A nice-to-have in a large market loses to a must-have in a niche one. I look for markets where the pain is so acute that customers are already building workarounds.</p>
<p><strong>3. Business Model Durability:</strong> Revenue is table stakes. I want to understand unit economics trajectory, switching costs, and whether the company gets structurally better as it scales. Does data compound? Do network effects kick in?</p>
<p><strong>4. Capital Efficiency:</strong> Especially in emerging markets, the ability to do more with less is the real competitive moat. I look for companies that have found creative ways to reduce burn without sacrificing growth velocity.</p>
<p><strong>5. Exit Pathway Clarity:</strong> I underwrite to exit. Who are the natural acquirers? What does the IPO path look like? Is there a clear value inflection point within the fund timeline?</p>`,
      tags: ["Framework", "Due Diligence", "Valuation", "Pattern Recognition"],
    },
    {
      icon: "🏗️",
      title: "First Principles in VC & PE",
      summary: "The foundational beliefs that guide how I think about deploying capital — from power law dynamics to value creation levers.",
      detail: `<p>Venture capital and private equity are different games with different rules — but they share first principles that I carry across both.</p>
<p><strong>In VC — The Power Law Is Everything:</strong> Portfolio construction matters more than individual deal selection. One investment will return the fund; the rest provide optionality and learning. This means conviction sizing is critical, and the cost of missing a great deal always exceeds the cost of backing a bad one.</p>
<p><strong>In PE — Value Creation Is the Product:</strong> Entry multiples are the price of admission. The real returns come from operational improvement, revenue acceleration, and strategic repositioning. I've modelled LBOs where the difference between a 2x and 4x return came entirely from post-acquisition execution.</p>
<p><strong>Across Both — Information Asymmetry Is the Edge:</strong> The investors who consistently outperform are the ones with proprietary deal flow, deeper sector expertise, or founder relationships that generate differentiated access. I build this edge through networks, sector specialization, and being the kind of investor founders want in the room.</p>
<p><strong>Across Both — Timing Is Underrated:</strong> Market cycles, technology adoption curves, and regulatory windows create asymmetric entry points. I've learned to layer macro timing into every deal thesis — not as a prediction, but as a scenario.</p>`,
      tags: ["VC", "PE", "Power Law", "Value Creation", "First Principles"],
    },
  ],

  fromTheClassroom: [
    {
      icon: "📜",
      title: "CFA & PE Certification",
      whatILearned: "First principles of valuation, active ownership, and financial rigour",
      details: "Completed CFA Level I & II and PE certification, building deep fluency in DCF modelling, comparable analysis, LBO structuring, and portfolio theory. These aren't just credentials — they're the analytical foundation I bring to every deal memo and IC presentation.",
      tags: ["CFA", "PE", "Valuation", "Financial Analysis"],
    },
    {
      icon: "📚",
      title: "MBA Case Studies — Favourite Picks",
      whatILearned: "Value creation levers, brand moats, and market entry strategy",
      details: "LVMH × Tiffany taught me that luxury M&A is about acquiring customer relationships, not just brands. Louis Vuitton's vertical integration showed me how moats are built over decades. M-Pesa vs. Nubank revealed that the best fintech companies design for the unbanked from scratch. Renewable energy transition cases convinced me that climate is the largest capital reallocation event in history.",
      tags: ["LVMH", "Fintech", "Energy Transition", "Strategy"],
    },
    {
      icon: "🎓",
      title: "MBA Classes — Rotman School of Management",
      whatILearned: "Financial modelling, strategic thinking, and emerging market dynamics",
      details: "Corporate Finance & M&A gave me the toolkit for structuring deals and advising founders on exit paths. Emerging Markets Finance taught me that currency risk and political risk aren't obstacles — they are the investment thesis. Entrepreneurial Strategy taught me the 'test two, choose one' framework that changed how I evaluate founder decisions. Every class reinforced one thing: the best investors combine quantitative rigour with qualitative judgement.",
      tags: ["Corporate Finance", "M&A", "Emerging Markets", "Strategy"],
    },
  ],

  fromPeople: [
    {
      name: "Financial Times",
      type: "Daily Newspaper",
      icon: "📰",
      why: "Trains you to see macro forces hiding in micro stories — the most valuable 30 minutes of my day.",
    },
    {
      name: "The Economist",
      type: "Weekly Analysis",
      icon: "🌍",
      why: "Forces second-order thinking on AI, deglobalisation, and sovereign capital flows.",
    },
    {
      name: "Stratechery by Ben Thompson",
      type: "Newsletter",
      icon: "💡",
      why: "The clearest thinker on tech strategy, aggregation theory, and platform economics.",
    },
    {
      name: "The Generalist by Mario Gabriele",
      type: "Substack",
      icon: "📊",
      why: "Deep-dive company profiles that read like investment memos — exactly how I want to think about businesses.",
    },
    {
      name: "Acquired Podcast",
      type: "Podcast",
      icon: "🎙️",
      why: "Long-form storytelling about how the world's best companies were built — history as a framework for investing.",
    },
  ],
};

// ── INVESTOR / LEARNER (About Page) ─────────────────────
const INVESTOR_LEARNER = {
  hero: {
    bio: "Investor. Traveller. Perpetual student. I'm currently with <strong>BDC Capital</strong>, deploying capital into Canada's most promising ventures and growth-stage companies. I hold an <strong>MBA from Rotman</strong> specializing in finance, and I've built my career at the intersection of curiosity and capital. I care deeply about climate solutions and women's economic empowerment — not as side interests, but as investment theses.",
    photo: null, // Add your photo: "assets/roopal.jpg"
  },

  timeline: [
    {
      era: "Undergrad",
      years: "2014–2018",
      title: "Editorial Columns & the Power of Writing",
      detail: "Led editorial columns that sharpened clarity of thought and economy of language. Didn't know it then, but this became a superpower — every investment memo I write today traces back to learning how to make complex ideas simple and persuasive.",
      icon: "✍️",
    },
    {
      era: "Dalberg",
      years: "2018–2020",
      title: "Global Consulting & High-Stakes Rooms",
      detail: "Joined one of the world's leading development consulting firms and traveled the globe. Sat in rooms with Google, the US Embassy, and government ministers. Learned to hold a room together, synthesise competing stakeholder interests, and build networks that span continents. This is where curiosity became global.",
      icon: "🌏",
    },
    {
      era: "KOIS",
      years: "2020–2021",
      title: "First Principles of Early Stage Investing",
      detail: "My first real exposure to venture investing. Learned deal sourcing, due diligence, and the art of backing founders when all you have is conviction and a thesis. Fell in love with the craft of turning capital into catalysts.",
      icon: "🌱",
    },
    {
      era: "Wysa",
      years: "2021–2022",
      title: "Operating Inside a Global AI Startup",
      detail: "Joined a Bangalore-based AI mental health startup to get my hands dirty. Built GTM strategy from scratch, ran on-ground customer training, and worked directly with the founder on organisational design. Loved the intensity — but the hunger to evaluate new problems every few months pulled me back toward investing.",
      icon: "🚀",
    },
    {
      era: "Rotman MBA",
      years: "2022–2024",
      title: "CDL, First Principles & Financial Modelling",
      detail: "Dove into financial modelling, worked with deep-tech startups through the Creative Destruction Lab, and built investment frameworks from first principles. Every class, case study, and IC presentation reinforced one thing: the best investors combine quantitative rigour with qualitative judgement.",
      icon: "🎓",
    },
    {
      era: "BDC Capital",
      years: "2024–Present",
      title: "Venture Capital & PE Acquisitions",
      detail: "Currently deploying capital across the Canadian venture and growth equity landscape. Every week brings a new sector, a new founder, a new problem to solve. This is exactly where I want to be — at the frontier of capital and curiosity.",
      icon: "💼",
    },
  ],

  communities: {
    photo: null, // Add a community/networking photo: "assets/community.jpg"
    list: [
      { name: "University of Toronto", desc: "Alumni network — Rotman School of Management", url: null },
      { name: "Creative Destruction Lab (CDL)", desc: "Deep-tech startup accelerator — mentor & affiliate", url: null },
      { name: "UNLEASH", desc: "Global Innovation Lab for the SDGs", url: null },
      { name: "CAFIID", desc: "Canadian Association for International Development", url: null },
      { name: "CWVC", desc: "Canadian Women in Venture Capital", url: null },
      { name: "CFA Institute", desc: "Charterholder candidate — global finance community", url: null },
      { name: "Personal Network", desc: "Founders, investors, and operators across 10+ countries", url: null },
    ],
  },

  contact: {
    message: "I love connecting with people who are building, investing, or simply curious. If anything on this site resonated — or if you just want to talk startups over coffee — I'd love to hear from you.",
    email: "mailto:roopaldahiya5@gmail.com",
    calendly: "https://calendly.com", // Replace with real URL
    linkedin: "https://linkedin.com",  // Replace with real URL
  },
};
