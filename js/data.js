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
    description: "Sourced and evaluated an early-stage cleantech company developing next-generation carbon capture technology. Led due diligence across market sizing, unit economics, and regulatory landscape.",
    whatILearned: "The best climate ventures collapse the green premium — making the clean option the cheap option. I now ask every climate deal: 'Does this make green the obvious business decision?'",
  },
  {
    title: "Growth Stage Healthtech — APAC",
    region: "Vietnam",
    code: "vn",
    stage: "Growth Stage",
    sectors: ["Healthtech", "Cross-border"],
    description: "Facilitated a cross-border investment from an Australian fund into a high-growth Vietnamese healthcare enterprise scaling primary care infrastructure.",
    whatILearned: "In cross-border deals, the hardest asset to underwrite isn't the company — it's the trust. I now spend the first 30% of any cross-border process building relational bridges.",
  },
  {
    title: "Multi-Sector Portfolio — India",
    region: "India",
    code: "in",
    stage: "Growth Stage",
    sectors: ["Fintech", "Healthtech", "Media"],
    description: "Managed a multi-sector portfolio spanning fintech, healthtech, and media across India — coordinating with investors from the US, Singapore, and UK.",
    whatILearned: "Portfolio management across sectors teaches you pattern recognition faster than any single deal. The frameworks that work in fintech often break in healthtech — and that's where the real learning happens.",
  },
  {
    title: "Early Stage Impact — Cambodia",
    region: "Cambodia",
    code: "kh",
    stage: "Early Stage",
    sectors: ["Impact", "Social Enterprise"],
    description: "Supported an early-stage impact venture in Cambodia focused on social enterprise models that create sustainable livelihoods in underserved communities.",
    whatILearned: "Impact investing isn't charity with a term sheet — it demands the same rigour as commercial deals. The best impact companies build business models where doing good is the competitive advantage, not a side effect.",
  },
  {
    title: "Growth Stage Fintech — Canada",
    region: "Calgary",
    code: "ca",
    stage: "Growth Stage",
    sectors: ["Fintech", "SaaS"],
    description: "Evaluated a growth-stage fintech platform in Calgary building B2B payment infrastructure for the Canadian energy sector.",
    whatILearned: "Vertical fintech wins by understanding industry-specific workflows better than horizontal players ever will. The moat isn't the tech — it's the domain expertise embedded in every product decision.",
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
    bio: "Investor. Traveller. Perpetual learner. I'm currently with <strong>BDC Capital</strong>, deploying capital into Canada's most promising ventures and growth-stage companies. I hold an <strong>MBA from Rotman</strong> specializing in finance, and I've built my career at the intersection of curiosity and capital. Outside of work, I love to solo travel, build communities that bridge cultures and continents, and champion climate justice and women's economic empowerment.",
    photo: "assets/Roopal.jpeg",
  },

  timeline: [
    {
      era: "Undergrad",
      title: "Learning, Writing, and Engagement",
      detail: "Led editorial columns and supported <a href='#' target='_blank' rel='noopener'><em>Startup Compass</em></a> — a book interviewing unicorn founders about building from zero. This taught me clarity of thought, economy of language, and how to make complex ideas simple and persuasive — a superpower I carry into every investment memo today.",
      icon: "✍️",
    },
    {
      era: "Dalberg",
      title: "Advisory for Global Clients",
      detail: "Joined one of the world's leading global advisory firms. Worked across geographies with clients like Google, the US Embassy, and government ministers. This is where curiosity became global — I learned to synthesise competing stakeholder interests and build networks that span continents.",
      icon: "🌏",
      logo: "assets/logos/dalberg.png",
    },
    {
      era: "KOIS",
      title: "First Principles of Early Stage Investing",
      detail: "My first real exposure to venture investing — deal sourcing, due diligence, and the art of backing founders when all you have is conviction and a thesis. Fell in love with the craft of turning capital into catalysts. This shaped my belief that the best frameworks are earned, not borrowed.",
      icon: "🌱",
      logo: "assets/logos/kois.png",
    },
    {
      era: "Wysa",
      title: "Operating Inside a Global AI Startup",
      detail: "Joined a Bangalore-based AI mental health startup. Built GTM strategy from scratch, ran customer training, and shaped org design alongside the founder. Operating experience fundamentally changed how I invest — I stopped asking hypothetical questions and started asking operational ones.",
      icon: "🚀",
      logo: "assets/logos/wysa.png",
    },
    {
      era: "Rotman MBA",
      title: "Finance, Leadership, and CDL",
      detail: "Dove into financial modelling, worked with deep-tech startups through the Creative Destruction Lab, and built investment frameworks from first principles. Every class, case study, and IC presentation reinforced that the best investors combine quantitative rigour with qualitative judgement.",
      icon: "🎓",
      logo: "assets/logos/uoft.png",
    },
    {
      era: "BDC Capital",
      title: "Venture Capital & PE Acquisitions",
      detail: "Currently deploying capital across the Canadian venture and growth equity landscape. Every week brings a new sector, a new founder, a new problem to solve — this is exactly where curiosity meets capital.",
      icon: "💼",
      logo: "assets/logos/bdc.png",
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
    linkedin: "https://linkedin.com",  // Replace with real URL
  },
};
