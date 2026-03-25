// data.js -- All KT content pre-baked from context files + Notion
// Sources: context/*.md + Notion Member Travel Pipeline SOP
// NOTHING in this file is fabricated -- every field traces to a source document

const DATA = {

  // === META ===
  meta: {
    title: 'Maestro KT -- Day 1',
    subtitle: 'Project Overview & User Journeys',
    date: 'March 25, 2026',
    facilitator: 'Mishal Chowdhury',
    facilitatorRole: 'Business Analyst / Scrum Master (Allion Technologies)',
    newMembers: [
      { name: 'New Member 1', role: 'Role TBD', company: 'Allion Technologies', isNew: true },
      { name: 'New Member 2', role: 'Role TBD', company: 'Allion Technologies', isNew: true }
    ]
  },

  // === COMPANY (Source: context/Notion_Live_Context.md lines 8-16) ===
  company: {
    name: 'Maestro',
    tagline: 'The AI-native travel concierge for affluent travelers',
    description: 'Combines agentic AI + human ops to plan, book, and manage luxury-grade trips end-to-end.',
    audience: '$300K+ household income, 5-10 premium credit cards, 3-5+ trips/year',
    valueProp: 'Travelers understand points but lack time to optimize -- Maestro does it for them.',
    positioning: '"Amazon for Travel" -- owns the traveler relationship, memory, and last-mile execution.',
    moat: 'Orchestration -- WhatsApp ingestion + AI intent routing + flight/hotel search agents + vector-based traveler memory + Notion trip docs + nightly monitoring agents + ops-facing Command Center.',
    slaTarget: '80% of itineraries generated within 24 hours via Command Center',
    status: 'Live in production with real paying clients',
    workflow: {
      summary: 'AI drafts -> Ops verifies -> AI updates -> Ops sends to client',
      steps: [
        { label: 'Client', detail: 'WhatsApp / Mobile App', icon: 'user' },
        { label: 'AI Agents', detail: 'Intent routing, search, drafting', icon: 'bot' },
        { label: 'Ops Team', detail: 'Command Center -- review, verify, override', icon: 'monitor' },
        { label: 'Trip Plan', detail: 'Notion docs -- structured output', icon: 'file' },
        { label: 'Delivered', detail: 'Mobile App / WhatsApp', icon: 'send' }
      ]
    }
  },

  // === PRODUCTS (Source: context/Notion_Live_Context.md lines 33-42) ===
  products: [
    {
      id: 'mobile',
      name: 'Mobile App',
      icon: 'smartphone',
      description: 'Client-facing: messaging, trip browsing, voice flight search, deals',
      users: 'Travelers (clients)',
      tech: 'React Native + Expo',
      status: 'Live on iOS + Android',
      details: [
        'Voice-powered flight search and booking flow',
        'Messaging via Stream Chat',
        'Trip browsing and Notion trip doc viewing',
        'Push notifications',
        'Onboarding flow',
        'New design system (Navan-inspired) being applied'
      ]
    },
    {
      id: 'command-center',
      name: 'Command Center (CC)',
      icon: 'monitor',
      description: 'Internal ops dashboard -- conversations, AI assistant, trip management',
      users: 'Ops / Concierge team (20+ people)',
      tech: 'React 18, Zustand, Tailwind + MUI, Socket.io',
      status: 'Live -- used daily by ops',
      details: [
        'Unified inbox (WhatsApp + mobile app messages)',
        'AI assistant with trip/traveler context',
        'Trip creation and management',
        'Client account setup',
        'Task tracking and assignment',
        'Real-time sync via Socket.io'
      ]
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp Integration',
      icon: 'message-circle',
      description: 'Primary client messaging channel (multi-provider)',
      users: 'Travelers + Ops',
      tech: 'Twilio, Custom Go provider',
      status: 'Live',
      details: [
        'Primary communication channel for clients',
        'Messages flow into CC shared inbox',
        'Auto-mapped to correct trip context',
        'Multi-provider support'
      ]
    },
    {
      id: 'notion',
      name: 'Notion Trip Docs',
      icon: 'book-open',
      description: 'Structured trip plans, itineraries, hotel/flight tables -- automated via API',
      users: 'Ops + Clients',
      tech: 'Notion API',
      status: 'System of record',
      details: [
        'Welcome message (personalized)',
        'Trip overview (travelers, purpose, destinations)',
        'Flight options (curated with points/cash pricing)',
        'Hotel options (photos, features, pricing)',
        'Day-by-day itinerary',
        'Signature experiences',
        'Dining recommendations',
        'Insider tips'
      ]
    },
    {
      id: 'ai-agents',
      name: 'AI Agents',
      icon: 'cpu',
      description: 'Trip drafting, hotel/flight search, nightly monitoring, auto-responses',
      users: 'System (automated)',
      tech: 'GPT-4.1 (primary), Gemini 2.0 (fallback), BullMQ, Redis',
      status: 'Active',
      details: [
        'Intent routing from client messages',
        'Flight and hotel search automation',
        'Trip drafting from voice/text intake',
        'Nightly monitoring and alerts',
        'Auto-response (v1, restricted rollout)',
        'Vector-based traveler memory (OpenAI embeddings)'
      ]
    }
  ],

  // === TECH STACK (Source: context/Notion_Live_Context.md lines 45-72) ===
  techStack: {
    backend: [
      { name: 'NestJS', detail: 'TypeScript end-to-end, modular monolith (not microservices -- ships 2-3x faster)' },
      { name: 'MongoDB Atlas', detail: 'Conversations, trips, clients, preferences' },
      { name: 'Redis + BullMQ', detail: 'Queues, scheduled agents, retries' },
      { name: 'S3', detail: 'File uploads, images, PDFs' },
      { name: 'Vector DB', detail: 'OpenAI embeddings for personalization' },
      { name: 'Socket.io', detail: 'Real-time streaming, Command Center sync' },
      { name: 'Pusher', detail: 'Global broadcast events' }
    ],
    mobile: [
      { name: 'React Native + Expo', detail: 'Cross-platform mobile app' },
      { name: 'Stream Chat', detail: 'In-app messaging' },
      { name: 'Zustand', detail: 'State management, ~40% code reuse with web' }
    ],
    ai: [
      { name: 'GPT-4.1', detail: 'Primary LLM -- in production for trip drafting, intent routing, auto-response' },
      { name: 'Gemini 2.0', detail: 'Fallback only -- triggered if GPT-4.1 is unavailable or rate-limited' },
      { name: 'Other models (Claude, GPT-4o, etc.)', detail: 'Implemented but NOT production-ready -- experimental / evaluation stage only' },
      { name: 'Planned: LangGraph, OpenAI Agents SDK', detail: 'Future agent framework' }
    ],
    travelApis: [
      { name: 'Amadeus + Google Places', detail: 'Hotels search and enrichment' },
      { name: 'Seats.aero + Roame MCP', detail: 'Award flight availability' },
      { name: 'Notion API', detail: 'Trip document generation and management' }
    ]
  },

  // === ENVIRONMENTS (Source: context/Workflows_and_Standards.md lines 163-167) ===
  environments: [
    { name: 'Dev', description: 'Active development, unstable', owner: 'Tharaka' },
    { name: 'Staging', description: 'QA and UAT testing', owner: 'Tharaka / Thilini' },
    { name: 'Production', description: 'Live clients (AWS)', owner: 'Tharaka' }
  ],

  // === DOMAIN KNOWLEDGE (Source: context/Domain_101_Luxury_Travel_Points.md) ===
  domain: {
    revenueVsAward: {
      revenue: {
        label: 'Revenue Tickets (Cash)',
        points: [
          'Standard tickets purchased with money',
          'Dynamic pricing based on demand, route, season',
          'Availability generally abundant',
          'Earns loyalty points when flown'
        ],
        example: 'NYC to London Business Class: ~$4,000-$8,000 cash. You pay full price but can get on any flight with seats remaining.'
      },
      award: {
        label: 'Award Tickets (Points)',
        points: [
          'Purchased using loyalty points/miles instead of cash',
          'Often fixed pricing in "award charts" (dynamic increasing)',
          'Availability severely constrained -- airlines release only 5-15% of seats',
          'Does NOT typically earn additional miles'
        ],
        example: 'Same NYC to London Business Class: 50,000-70,000 miles (worth $2,500-$4,000+ in cash terms) -- but only if the airline releases award space, which may be zero on popular routes.'
      },
      whyItMatters: 'Maestro clients have millions of points sitting unused. The problem is not earning them -- it is knowing when and how to use them. A client with 500,000 Amex points could fly Business Class round-trip to Tokyo for "free" if Maestro finds the right award window. That is the core value proposition.'
    },

    cpm: {
      formula: 'CPM = (Cash Price of Ticket / Points Required) x 100',
      example: { cashPrice: 5000, points: 80000, cpm: 6.25, explanation: '$5,000 ticket booked for 80,000 points = 6.25 cents per mile. The client "saved" $5,000 using points worth ~$800 at face value.' },
      whyItMatters: 'CPM is how Maestro proves value. If a client earns 1c/point on spend but we redeem at 6c+, we just 6x their money. This is the number Sunthar tracks as the north star metric for Points Concierge.',
      benchmarks: [
        { type: 'Domestic Economy', cpm: '1.0-1.5c', sentiment: 'Poor value', example: 'Using 15,000 miles for a $150 domestic flight -- barely better than buying cash' },
        { type: 'International Economy', cpm: '1.5-2.5c', sentiment: 'Acceptable', example: '40,000 miles for a $700 transatlantic economy seat' },
        { type: 'Business Class', cpm: '3.0-7.0c', sentiment: 'Good value', example: '70,000 miles for a $4,000 lie-flat seat -- this is where Maestro operates' },
        { type: 'First Class (Long-haul)', cpm: '6.0-15.0c', sentiment: 'Excellent value', example: '88,000 ANA miles for a $10,000+ First Class suite -- the holy grail' }
      ]
    },

    transferPartners: {
      description: 'Credit card points (Amex MR, Chase UR) can be transferred to airline/hotel loyalty programs. Transfers are usually 1:1, instant to 24 hours, but irreversible.',
      whyItMatters: 'Most clients do not know this exists. They book through the Amex travel portal at 1.25c/point. Maestro unlocks 4-8x more value by transferring to the right partner for the right route.',
      example: 'Client has 200,000 Amex Membership Rewards. Through the portal: worth $2,500. Transferred to ANA miles and booked Lufthansa First Class: worth $12,000+ in flights. Same points, 5x the value.',
      comparison: [
        { method: 'Amex/Chase Portal', cpm: '1.0-1.5c', flexibility: 'Limited to portal inventory', example: 'Book like a normal website, no transfers needed, but overpay in points' },
        { method: 'Transfer to Partners', cpm: '2.0-10.0c+', flexibility: 'Full award chart access, premium cabins', example: 'Transfer Amex MR to ANA -> book Lufthansa First; or to Air Canada -> book United Business' }
      ],
      keyAdvantages: [
        'Higher redemption value: Business/First can yield 5-10c/point vs 1.25c through portals',
        'Access to premium inventory not available on portals',
        'Better routing via partner airlines (e.g., transfer to ANA to book Lufthansa First)',
        'Lower fees: avoid portal markup'
      ]
    },

    phantomAvailability: {
      definition: 'When an airline search engine shows award seats available, but they cannot actually be booked.',
      whyItMatters: 'This is one of the most expensive failure modes for Maestro. If we tell a client "Business Class is available for 60,000 miles", they transfer points (irreversible), then the booking fails -- we have destroyed trust and real money. Our validation engine exists entirely to solve this.',
      causes: [
        'Cache lag: airline systems show outdated inventory (seats sold seconds ago still show available)',
        'Married segment logic: seat requires booking full journey, not just one leg',
        'Partner sync issues: Airline A shows space on Airline B that does not exist',
        'Technical glitches in reservation platform',
        'Waitlisted seats displayed as "available"'
      ],
      example: 'Seats.aero shows 2 Business Class awards on United NYC-London. Client transfers 120,000 Chase points to United (irreversible, takes 1 hour). We try to book -- "No availability." Points are gone. This is a phantom availability failure.',
      risk: 'User frustration, loss of trust, wasted irreversible point transfers',
      mitigation: 'Multi-source validation (check 2+ systems), pre-booking availability check, confidence score per result'
    },

    marriedSegments: {
      definition: 'Flight combinations where the airline only releases award space if you book the entire itinerary together, not individual legs.',
      example: 'Client wants NYC->London. Searching NYC->London alone: zero award seats. Searching NYC->Dubai (with a London stopover): two Business Class awards available. The airline needs to fill the London->Dubai leg, so it only releases space as a package.',
      whyItMatters: 'A naive search for "NYC to London" returns zero results and we tell the client there are no awards. A smart search finds the same seat by trying multi-city combinations. This is why the validation engine queries hundreds of route permutations, not just direct searches -- and why it is technically complex to build correctly.',
      technicalImplication: 'Must query both individual legs AND full journey combinations. A simple A->B search may require checking A->C->B, A->D->C->B, etc. Yasiru owns the validation engine that handles this.'
    },

    competitors: [
      {
        name: 'Point.me',
        type: 'DIY Search Aggregator',
        price: '$12-30/month',
        strengths: ['Comprehensive program coverage', 'Fast search results', 'Good for self-bookers'],
        weaknesses: ['No booking automation', 'No concierge support', 'Limited validation (phantom common)', 'No monitoring'],
        example: 'A client uses Point.me to find a Business Class flight, sees it available, transfers 80,000 Chase points to United -- then spends 2 hours trying to book, fails due to phantom availability. They contact Maestro instead.'
      },
      {
        name: 'Seats.aero',
        type: 'Availability Alert Tool',
        price: '$5-15/month',
        strengths: ['Proactive monitoring (set and forget)', 'Good for flexible travelers', 'Affordable'],
        weaknesses: ['Reactive not proactive', 'Limited route coverage', 'No multi-city support', 'No booking service'],
        example: 'A client sets an alert for NYC->Tokyo Business Class. Seats.aero pings them at 3am when space opens. They still have to log in, evaluate, transfer points, and book manually -- Maestro does all of that for them.'
      },
      {
        name: 'Velocity Black',
        type: 'Ultra-Premium Concierge',
        price: '$3,000-10,000/year',
        strengths: ['Fully hands-off', 'Human expertise', 'Relationship-based inventory access'],
        weaknesses: ['Extremely expensive', 'Opaque process', 'Slow (24-48 hours)', 'Limited to their partnerships'],
        example: 'Closest to Maestro in service model but 10x the price, no AI, and their concierge team does not specialize in points optimization. Maestro targets clients who want Velocity Black quality at a $500-1,500/year price point.'
      }
    ],

    maestroPosition: 'The AI-powered concierge for points optimization -- combining the comprehensiveness of Point.me with the automation of Velocity Black, at a fraction of the cost. Why it matters: neither competitor does AI + human + validation in one product. That gap is Maestro\'s moat.',

    competitorMatrix: [
      { need: 'Search Automation', pointMe: true, velocityBlack: true, maestro: true },
      { need: 'Booking Automation', pointMe: false, velocityBlack: true, maestro: true },
      { need: 'AI-Powered Optimization', pointMe: 'partial', velocityBlack: false, maestro: true },
      { need: 'Real-Time Monitoring', pointMe: false, velocityBlack: 'partial', maestro: true },
      { need: 'Transparent Pricing', pointMe: true, velocityBlack: false, maestro: true },
      { need: 'Complex Itineraries', pointMe: 'partial', velocityBlack: true, maestro: true },
      { need: 'Speed', pointMe: 'partial', velocityBlack: false, maestro: true }
    ],

    glossary: [
      { term: 'GDS', full: 'Global Distribution System', definition: 'Centralized reservation systems (Amadeus, Sabre, Travelport) used by travel agencies. Aggregates inventory from hundreds of airlines. Pros: single API. Cons: often lacks award inventory, delayed updates, expensive.', example: 'Why it matters: Maestro uses Amadeus for hotel search but cannot rely on GDS for award flights -- it does not see most award inventory.' },
      { term: 'Direct Connect', full: 'Airline Direct API', definition: 'API integration directly with an airline\'s reservation system. Real-time award availability, airline-specific features. Must integrate individually.', example: 'Why it matters: Seats.aero and Roame give Maestro near-real-time award availability without the GDS gap. Each airline has slightly different data.' },
      { term: 'PNR', full: 'Passenger Name Record', definition: 'Unique record in airline reservation system with all itinerary details: passenger names, flight segments, seats, tickets, 6-character booking reference.', example: 'Example: "ABCXYZ" is the PNR. When ops confirms a booking, they store the PNR in Notion so the client can look it up at check-in.' },
      { term: 'CPM', full: 'Cents Per Mile', definition: 'North star metric: (Cash Price / Points Required) x 100. Measures redemption value. Target: >4.0c for Maestro bookings.', example: 'Example: $6,000 business class ticket booked for 80,000 miles = 7.5c/mile. The client used points "worth" $800 to save $6,000.' },
      { term: 'Open Jaw', full: 'Open Jaw Itinerary', definition: 'Return origin differs from outbound destination. Example: fly NYC->Paris, return Rome->NYC (travel Paris->Rome independently).', example: 'Why it matters: Maestro clients often want this for European trips. Award search must handle it -- not all engines support open jaw queries.' },
      { term: 'Stopover', full: 'Extended Connection', definition: 'Deliberate stay >24 hours at a connection point. Rules vary by airline program (0 to unlimited allowed).', example: 'Example: Singapore Airlines allows 1 free stopover in Singapore on round-trip awards. A Maestro client flying NYC->Bali can spend 3 days in Singapore at no extra miles cost.' },
      { term: 'YQ', full: 'Fuel Surcharge', definition: 'Fees imposed by airlines on award tickets beyond government taxes. Range from $0 (United, ANA) to $1,200+ (British Airways). Critically impacts true value.', example: 'Example: Booking Lufthansa Business through Lufthansa miles costs $900 in YQ fees. Booking the same flight through United miles costs $5.60. Same seat, same flight -- $894 difference in fees.' },
      { term: 'Phantom Availability', full: 'Ghost Inventory', definition: 'Award seats shown as available but cannot actually be booked. Causes: cache lag, married segments, partner sync. Maestro validates via 2+ sources.', example: 'Example: A client sees "2 seats available" on our search. They ask us to proceed. We check a second source -- seats are gone. We catch it before the irreversible transfer.' },
      { term: 'Married Segment', full: 'Linked Flight Segments', definition: 'Award space only released if full itinerary is booked together. Individual leg searches may show no availability.', example: 'Example: United shows zero NYC->London awards. But NYC->Frankfurt->London (same price) has 2 seats. The Frankfurt leg is the bait -- United needs to fill it.' }
    ],

    successMetrics: [
      { metric: 'CPM Delivered', target: '>4.0c', description: 'Average CPM of booked awards', example: 'If a client redeems 100,000 points and we hit 5c CPM, they effectively got $5,000 in flights. This is what Maestro charges a premium for.' },
      { metric: 'Booking Success Rate', target: '>60%', description: 'Searches resulting in confirmed bookings', example: 'If we present 10 itineraries and 6 result in confirmed bookings, we are hitting target. Low rate = too many phantom results or mismatched expectations.' },
      { metric: 'Phantom Avoidance', target: '>95%', description: 'Displayed results that successfully book', example: 'Of every 100 award options we show clients, 95+ must be bookable. Any lower and clients start transferring points to dead ends.' },
      { metric: 'Time Saved', target: '8+ hours/trip', description: 'Hours saved vs manual search', example: 'A client manually searching Business Class awards across 5 programs for a complex trip could spend 10-15 hours. Maestro does it in minutes.' }
    ]
  },

  // === DEPARTMENTS (Source: context/Team_Structure.md lines 10-17) ===
  departments: [
    { name: 'Leadership', lead: 'Prahar Shah (CEO)', focus: 'Vision, strategy, brand, growth', location: 'Austin, TX' },
    { name: 'Operations & Member Experience (OMX)', lead: 'Shaloo Savla', focus: 'End-to-end client experience; oversees all client-facing teams', location: 'Houston, TX' },
    { name: 'Travel Advisory (TA)', lead: 'Nina Price / Courtney / Kelly', focus: 'Plans the trip strategically (destination, structure, pacing)', location: 'Austin, TX' },
    { name: 'Concierge Ops (CO)', lead: 'Belle Zandi (Manila lead)', focus: 'Executes the trip (bookings, vendor coordination, live support)', location: 'Manila + Nairobi' },
    { name: 'Points & Cards Strategy (PCS)', lead: 'Matt Jamele', focus: 'Loyalty optimization, points audits, card strategy', location: 'Austin + Manila' },
    { name: 'Product & Engineering', lead: 'Sunthar (Points + Mobile) / Nirav (Trips + Command Center)', focus: 'Builds the platform; Mishal coordinates this function', location: 'Colombo + Canada' }
  ],

  // === ENGINEERING TEAM ===
  engineeringTeam: [
    { name: 'Shashila Heshan', email: 'shashila@askmaestro.com', role: 'Full-Stack Dev', focus: 'Command Center, AI auto-response, integrations', location: 'Colombo, Sri Lanka', tz: 'GMT+5:30', hours: '44-58 hrs/week', isNew: false },
    { name: 'Kalpa Thathsara', email: 'kalpa@askmaestro.com', role: 'Mobile Backend Dev', focus: 'Mobile app development, voice-to-text, flight APIs', location: 'Colombo, Sri Lanka', tz: 'GMT+5:30', hours: '32-43 hrs/week', isNew: false },
    { name: 'Tharaka', email: '', role: 'Software Architect / Infrastructure', focus: 'System architecture, repository patterns, AWS infrastructure', location: 'Colombo, Sri Lanka', tz: 'GMT+5:30', hours: 'TBD', isNew: false },
    { name: 'Yasiru Nilan', email: '', role: 'Validation Engineer', focus: 'Airline validation engine, multi-provider validation', location: 'Colombo, Sri Lanka', tz: 'GMT+5:30', hours: '44-58 hrs/week', isNew: false },
    { name: 'Waruna Samarasinghe', email: '', role: 'Mobile UI/UX Dev', focus: 'Mobile UI, voice assistant, booking flow, onboarding screens', location: 'Canada', tz: 'GMT-6', hours: 'TBD', isNew: false },
    { name: 'Thiranjaya Munasinghe', email: '', role: 'Flight Module Dev', focus: 'Flight module, Command Center, airline validation', location: 'Colombo, Sri Lanka', tz: 'GMT+5:30', hours: '42-54 hrs/week', isNew: false },
    { name: 'Thusal', email: '', role: 'Mobile App Dev', focus: 'Mobile app development', location: 'TBD', tz: 'TBD', hours: 'TBD', isNew: false },
    { name: 'Pasindu', email: '', role: 'Software Engineer', focus: 'TBD', location: 'TBD', tz: 'TBD', hours: 'TBD', isNew: false },
    { name: 'Juan', email: 'juan@askmaestro.com', role: 'Mobile Design & Dev', focus: 'Navan-inspired design system, mobile UI', location: 'TBD', tz: 'TBD', hours: 'TBD', isNew: false, isExternal: true },
    { name: 'Thilini', email: 'thilini@askmaestro.com', role: 'QA', focus: 'UAT, mobile QA, regression testing, staging validation', location: 'TBD', tz: 'TBD', hours: 'TBD', isNew: false },
    { name: 'New Member 1', email: '', role: 'Role TBD', focus: 'TBD -- to be assigned during onboarding', location: 'TBD', tz: 'TBD', hours: '--', isNew: true, company: 'Allion Technologies' },
    { name: 'New Member 2', email: '', role: 'Role TBD', focus: 'TBD -- to be assigned during onboarding', location: 'TBD', tz: 'TBD', hours: '--', isNew: true, company: 'Allion Technologies' }
  ],

  // === STAKEHOLDERS (Source: context/Your_Role_Profile.md + Team_Structure.md) ===
  stakeholders: [
    { name: 'Sunthar Premakumar', role: 'Product Manager -- Points Concierge + Mobile App', priority: 'Primary day-to-day stakeholder', expects: 'Weekly sprint reports, PRDs, clear visibility', location: 'Austin, TX' },
    { name: 'Nirav Amin', role: 'Product Manager -- Trips + Command Center', priority: 'Owns Trip Concierge and Command Center product direction', expects: 'Product specs, requirements clarity', location: 'Austin, TX' },
    { name: 'Prahar Shah', role: 'CEO', priority: 'Final decision maker', expects: 'Active in Slack; budget, resources, strategic direction', location: 'Austin, TX' },
    { name: 'Rushanthi', role: 'Head of Software Delivery (Allion)', priority: 'Mishal\'s direct manager at Allion', expects: 'Clear value delivery, billability evidence', location: 'Allion Technologies' }
  ],

  // === GEOGRAPHY (Source: context/Notion_Live_Context.md lines 152-158) ===
  geography: [
    { region: 'Austin, TX (HQ)', team: 'Leadership, OMX, Travel Advisory, Points & Cards', people: 'Prahar, Sunthar, Shaloo, Matt, Nina, Courtney, Kelly, Sejal', tz: 'CST (GMT-6)', flag: 'US' },
    { region: 'Manila, Philippines', team: 'Concierge Ops', people: 'Belle + 12 Concierge Ops', tz: 'GMT+8', flag: 'PH' },
    { region: 'Colombo, Sri Lanka', team: 'Engineering', people: 'Shashila, Kalpa, Tharaka, Yasiru, Thiranjaya, Thusal, Pasindu', tz: 'GMT+5:30', flag: 'LK' },
    { region: 'Canada', team: 'Engineering (Mobile UI)', people: 'Waruna', tz: 'GMT-6', flag: 'CA' },
    { region: 'Nairobi, Kenya', team: 'Ops Support', people: 'Prudence, Christine', tz: 'GMT+3', flag: 'KE' }
  ],

  // === CLIENT JOURNEY (Source: context/Notion_Live_Context.md + Member Travel Pipeline SOP) ===
  clientJourney: [
    { step: 1, label: 'Discovery', description: 'Client learns about Maestro (referral, social, search)', owner: 'Marketing' },
    { step: 2, label: 'Sign Up', description: 'Client signs up and submits intake form', owner: 'System / Ops' },
    { step: 3, label: 'Onboarding Call', description: 'TA leads onboarding call; captures preferences, points balances, travel style', owner: 'Travel Advisory' },
    { step: 4, label: 'Profile Creation', description: 'Automated: Member Profile page, WhatsApp group created', owner: 'Ops / Automations' },
    { step: 5, label: 'Trip Request', description: 'Client requests a trip via WhatsApp or Mobile App (voice or text)', owner: 'Client' },
    { step: 6, label: 'AI Processing', description: 'AI agents route intent, expand search, draft options', owner: 'AI Agents' },
    { step: 7, label: 'Ops Review', description: 'Ops reviews AI output in Command Center; verifies, overrides, refines', owner: 'Concierge Ops' },
    { step: 8, label: 'TA QA', description: 'Travel Advisor reviews for quality, alignment, member readiness', owner: 'Travel Advisory' },
    { step: 9, label: 'Trip Delivery', description: 'Structured trip plan sent to client via Notion page + mobile app', owner: 'Ops / TA' },
    { step: 10, label: 'Booking & Confirmation', description: 'Flights, hotels, experiences booked and confirmed', owner: 'Ops' },
    { step: 11, label: 'Active Travel', description: 'Client travels; Ops monitors and supports for changes/disruptions', owner: 'Ops' },
    { step: 12, label: 'Post-Trip', description: 'Feedback collection, issue resolution, future trip identification', owner: 'Travel Advisory' }
  ],

  // === MEMBER TRAVEL PIPELINE (Source: Notion page 2b7d1ecb-2189-806d-8015-c503bc0f5a5d) ===
  travelPipeline: [
    { num: 1, stage: 'Pre-Onboarding', owner: 'Ops / Automations', description: 'Member has signed up or been qualified. Signup intake form submitted.', exitCriteria: 'All required onboarding info collected' },
    { num: 2, stage: 'Onboarded', owner: 'Ops / Automations', description: 'Onboarding call complete. Automations (Member Profile, WhatsApp group) in progress.', exitCriteria: 'Trip ready to be planned' },
    { num: 3, stage: 'Planning Call (Optional)', owner: 'TA', description: 'Additional planning call if scope or preferences not fully clarified during onboarding.', exitCriteria: 'TA has sufficient planning context' },
    { num: 4, stage: 'Active Planning', owner: 'Ops / TA', description: 'Trip actively being designed or iterated. Ops owns itinerary build; TA provides guidance and review.', exitCriteria: 'Draft ready for TA QA' },
    { num: '~', stage: 'Revision Loop', owner: 'Ops / TA', description: 'If substantial edits required, trip returns to Active Planning and repeats stages 4-6.', exitCriteria: 'Member approval received' },
    { num: 5, stage: 'TA QA', owner: 'TA', description: 'TA reviews for clarity, alignment, completeness, and member readiness.', exitCriteria: 'Itinerary sent to member' },
    { num: 6, stage: 'Member Review', owner: 'Member', description: 'Member reviews itinerary and provides feedback or approval.', exitCriteria: 'Feedback or approval received' },
    { num: 7, stage: 'Ops Final QA', owner: 'Ops', description: 'Ops incorporates final approved changes and performs final operational checks.', exitCriteria: 'Ready to confirm' },
    { num: 8, stage: 'Itinerary Confirmed', owner: 'Ops', description: 'All itinerary components confirmed. No further structural changes expected.', exitCriteria: 'Trip confirmed' },
    { num: 9, stage: 'Pre-Trip Docs Sent', owner: 'Ops / TA', description: 'Final documents, confirmations, and pre-trip guidance sent to member.', exitCriteria: 'Member fully prepared' },
    { num: 10, stage: 'Active Travel', owner: 'Ops', description: 'Member is actively traveling. Ops monitors and supports for changes or disruptions.', exitCriteria: 'Travel concluded' },
    { num: 11, stage: 'Post-Trip Follow-Up', owner: 'TA', description: 'Feedback collection, issue resolution, and future trip identification.', exitCriteria: 'Trip closed or rolled into next planning' },
    { num: 12, stage: 'Closed', owner: 'System / Ops', description: 'Trip lifecycle fully complete. No further action required unless reopened.', exitCriteria: 'Terminal state' },
    { num: '--', stage: 'On Hold', owner: 'Ops', description: 'Trip temporarily paused (awaiting member input or external dependency). Reason must be documented.', exitCriteria: 'Status resolved', special: true },
    { num: '--', stage: 'Canceled', owner: 'Ops', description: 'Trip canceled by member or due to external factors. Document reason and close.', exitCriteria: 'Trip closed', special: true }
  ],

  // === OWNERSHIP PRINCIPLES (Source: Notion Member Travel Pipeline SOP) ===
  ownershipPrinciples: [
    { title: 'Shared editing, clear accountability', description: 'Ops and TAs may both edit the itinerary. Ops accountable for operational accuracy; TAs focus on structure and member-facing content.' },
    { title: 'TA ownership: strategy, QA, communication', description: 'TAs own trip strategy, quality assurance, and member-facing communication, including sharing itineraries and collecting feedback.' },
    { title: 'Ops ownership: execution and follow-through', description: 'Ops owns bookings, confirmations, vendor coordination, and ensuring the itinerary is the system of record. Also owns logistics-based member communication.' },
    { title: 'Pipeline stages reflect state, not tasks', description: 'Stages indicate the current state of the trip, not individual actions. Nuance lives in notes and SOPs.' },
    { title: 'Feedback loops back to Active Planning', description: 'Revisions return the trip to Active Planning rather than creating a new stage; changes should be clearly noted.' }
  ],

  // === NOTION TRIP PAGE COMPONENTS (Source: context/Notion_Live_Context.md lines 164-173) ===
  tripPageComponents: [
    { name: 'Welcome Message', description: 'Personalized greeting for the client' },
    { name: 'Trip Overview', description: 'Travelers, purpose, destinations, dates, preferences' },
    { name: 'Flight Options', description: 'Curated options with points/cash pricing, business class' },
    { name: 'Hotel Options', description: 'Photos, features, pricing, fit explanations' },
    { name: 'Day-by-Day Itinerary', description: 'Activities, transport, dining, insider tips' },
    { name: 'Signature Experiences', description: 'Curated premium activities' },
    { name: 'Dining Recommendations', description: 'Tailored to preferences' },
    { name: 'Insider Tips', description: 'Transportation, money, culture, packing' }
  ],

  // === CHALLENGES (Source: context/Current_Challenges_and_Priorities.md lines 6-49) ===
  challenges: [
    {
      title: 'Requirements Thrash',
      description: 'Requirements changing mid-sprint, arriving last minute',
      impact: ['Disrupts sprint planning and commitments', 'Dev team constantly context-switching', 'Makes velocity unpredictable', 'Causes burnout from rework'],
      status: 'Being addressed'
    },
    {
      title: 'Unsustainable Pace',
      description: 'Team working 50-67 hrs/week consistently',
      impact: ['Burnout risk (especially Waruna at 67 hrs)', 'Quality degradation over time', 'Attrition risk', 'Not sustainable long-term'],
      status: 'Active monitoring'
    },
    {
      title: 'Too Fast-Paced Environment',
      description: 'Multiple initiatives, quick pivots, high urgency',
      impact: ['Documentation falls behind', 'Technical debt accumulates', 'Testing shortcuts', 'Knowledge silos'],
      status: 'Process improvements underway'
    }
  ],

  // === H1 PHILOSOPHY (Source: context/2026-2027_Product_Roadmap.md lines 1-18) ===
  h1Philosophy: {
    approach: 'Reduce the operational and cognitive burden of travel planning while preserving quality, trust, and personalization. Combine automation where it scales with humans where judgment matters.',
    productLines: [
      { name: 'Points Concierge', description: 'Built for scale and leverage. Targets ~70-80% automation across repeatable flows: points flights, deal discovery, points strategy.', automation: '70-80%' },
      { name: 'Trip Concierge', description: 'Bespoke by nature. Automation added reactively based on ops pain, focused on reducing friction and preventing misses, not replacing expert-in-the-loop planning.', automation: 'Human-led' }
    ],
    principles: [
      { name: 'Voice is the front door', description: 'Capture messy intent via voice, ask clarifying questions, then return structured confirmation.' },
      { name: 'Alerts > one-off searches', description: 'Every meaningful request becomes a durable alert that reruns until booked and improves over time.' },
      { name: 'Trust by default', description: 'Validation is embedded so recommendations are grounded in source-of-truth availability.' },
      { name: 'Experts in the loop', description: 'Review, override, and accountability are explicit; automation reduces workload, not ownership.' }
    ],
    mobilePhases: [
      { phase: 'Phase 1', timeline: 'Feb-May 2026', focus: 'Core Booking & Communication' },
      { phase: 'Phase 2', timeline: 'Jun-Oct 2026', focus: 'Proactive Intelligence (points suite, ROI dashboard)' },
      { phase: 'Phase 3', timeline: 'Nov 2026-May 2027', focus: 'Premium Services & Self-Service' },
      { phase: 'Phase 4', timeline: 'Jun-Dec 2027', focus: 'Community & Delight' }
    ]
  },

  // === SPRINT PROCESS (Source: context/Workflows_and_Standards.md lines 7-47) ===
  sprintProcess: {
    estimation: '1 Story Point = 1 Hour of development work',
    cadence: '2-week sprints (Mon-Sun), effective Mar 16, 2026',
    naming: 'Cycle 1, Cycle 2, Cycle 3...',
    statuses: ['Backlog', 'Ready for Development', 'Dev In Progress', 'Done', 'Released'],
    tools: 'Linear (task management), Slack (communication), Notion (system of record), GitHub (code), Figma (design)',
    reporting: 'Weekly Monday updates to Sunthar (PM -- Points + Mobile)',
    baseline: '40 hrs/week sustainable target',
    bugSeverity: ['S1-Critical (P0, breaks production)', 'S2-Moderate', 'S3-Minor'],
    dod: [
      'Code reviewed by at least one other developer',
      'Testing completed (unit + QA sign-off for major features)',
      'Deployed to staging and verified',
      'Notion/documentation updated if applicable',
      'Linear ticket status updated to Released'
    ]
  },

  // === ROADMAP ITEMS (Source: context/2026-2027_Product_Roadmap.md lines 74-107, key items) ===
  roadmapItems: [
    { name: 'Slack to Linear', timeline: 'January', team: 'Command Center', status: 'In progress', owner: 'Shashila' },
    { name: 'AI Auto-Response (v1)', timeline: 'January', team: 'AI', status: 'In progress', owner: 'Shashila' },
    { name: 'Flight Request Confirmation', timeline: 'January', team: 'Mobile', status: 'In progress', owner: 'Waruna' },
    { name: 'Validation v1 (core airlines)', timeline: 'January', team: 'Points', status: 'In progress', owner: 'Yasiru' },
    { name: 'Flight Alert Setup', timeline: 'January', team: 'Mobile', status: 'In progress', owner: 'Thiranjaya' },
    { name: 'Ops-to-Trip Page Automation', timeline: 'February', team: 'Command Center', status: 'Not started', owner: 'Yasiru' },
    { name: 'Linked Client/Trip/Task Database', timeline: 'February', team: 'Operations', status: 'Not started', owner: 'Shaloo' },
    { name: 'Validation v2 (major coverage)', timeline: 'February', team: 'Points', status: 'Not started', owner: 'Yasiru' },
    { name: 'Command Center v3', timeline: 'March', team: 'Command Center', status: 'Not started', owner: 'Kalpa' },
    { name: 'Validation v3 (performance)', timeline: 'March', team: 'Points', status: 'Not started', owner: 'Yasiru' },
    { name: 'Voice Requests v1', timeline: 'March', team: 'Mobile', status: 'Not started', owner: 'Waruna' },
    { name: 'Hotel Search Engine v1', timeline: 'April', team: 'Points', status: 'Not started', owner: 'Thiranjaya' },
    { name: 'Trip-Aware Client Automations', timeline: 'May', team: 'Command Center', status: 'Not started', owner: 'Kalpa' },
    { name: 'Multi-City Award Flights', timeline: 'H2', team: 'Points', status: 'Not started', owner: 'Thiranjaya' },
    { name: 'Voice Everywhere', timeline: 'H2', team: 'Mobile', status: 'Not started', owner: 'Waruna' },
    { name: 'ROI Profile', timeline: 'H2', team: 'Mobile', status: 'Not started', owner: 'Sunthar' }
  ],

  // === WHERE YOU FIT IN ===
  roleCards: {
    qa: {
      name: 'New QA Lead',
      priorities: [
        'Work with Thilini on QA strategy and test coverage',
        'UAT process for mobile app and Command Center',
        'Staging environment validation workflows',
        'Bug triage process: S1-Critical, S2-Moderate, S3-Minor',
        'Regression testing before production releases',
        'QA sign-off as part of Definition of Done'
      ],
      tools: 'Linear (bug tracking), Notion (SOPs), Slack (coordination)',
      keyContacts: ['Thilini (existing QA)', 'Kalpa (mobile backend)', 'Waruna (mobile UI)', 'Shashila (Command Center)']
    },
    dev: {
      name: 'New Software Engineer',
      priorities: [
        'Get familiar with the NestJS backend + MongoDB architecture',
        'Understand the modular monolith approach (not microservices)',
        'Review Command Center (React 18) or Mobile App (React Native) codebase',
        'Shadow existing devs on current sprint tickets',
        'Learn the Linear workflow: Backlog -> Ready -> In Progress -> Done -> Released',
        'Understand Notion as system of record and API integration'
      ],
      tools: 'GitHub (code), Linear (tickets), Slack (daily), Notion (docs)',
      keyContacts: ['Shashila (Command Center, AI)', 'Kalpa (Mobile backend)', 'Prasanna (DevOps)', 'Waruna (Mobile UI)']
    }
  }
};
