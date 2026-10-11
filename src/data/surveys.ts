import type { Survey } from "@/types/survey";

export const surveys: Survey[] = [
  {
    id: "1",
    slug: "wild-life-impact-hilly-regions",
    aliases: ["wild-life-impact"],
    title: "Wild Life Impact in Hilly Regions",
    subtitle: "Everyday Coexistence, Crop Depredation, and Adaptive Livelihoods",
    description:
      "How wild animal impact the daily life in hilly region",
    category: "Environment & Wildlife",
    status: "ongoing",
    formUrl: "https://forms.gle/example1",
    forms: [
      { language: "English", url: "https://forms.gle/example1" },
      { language: "Hindi", url: "https://docs.google.com/forms/d/e/1FAIpQLSeTYMXF8o-UWNNH_TUZtMbvbTTQGlpVeJvr4R6NAa0RJpU3dQ/viewform?usp=header" },
    ],
    coverImage: "/images/survey-wildlife.jpg",
    coverImageAlt:
      "Himalayan forest fringe settlement with terraced fields bordering dense mountain forest in Mandi",
    estimatedMinutes: 8,
    startDate: "2026-09-15",
    endDate: "2026-12-31",
    languages: ["English", "Hindi"],
    featured: true,
    tags: ["wildlife", "rural", "agriculture", "safety"],
    objective:
      "To document the frequency, nature, and impact of wild animal encounters on communities living near forest areas in hilly terrain, and to understand local coping strategies.",
    targetAudience:
      "Residents of hilly and mountainous regions who live near forests or wildlife habitats",
    privacyNote:
      "All responses are anonymous. No personally identifiable information is collected.",
    about: {
      heading: "Living on the Edge of Wilderness",
      paragraphs: [
        "In mountain settlements nestled against reserve forests and wildlife sanctuaries, everyday routines are inextricably tied to wildlife movement. Terraced fields carved into steep slopes border dense oak and deodar canopies, forming an active corridor where wild ungulates, leopards, and macaques forage.",
        "As forest boundaries shift and agricultural land contracts, interactions between farming households and forest wildlife have intensified. This research documents how households perceive these encounters, the seasonal peaks in crop raiding, and the subtle shifts in daily routines required to navigate vulnerable routes between villages and highland pastures.",
      ],
      supportingImage: {
        src: "/images/wildlife-terrace.jpg",
        alt: "Steep terraced mountain village and apple orchards bordering pine forest in Kinnaur",
        caption: "Brua village in Kinnaur, where steep terraced orchards directly border contiguous forest tracts.",
      },
    },
    audience: {
      heading: "Who Should Participate?",
      description:
        "We invite voices from across Himalayan and hilly districts who live, farm, or work in close proximity to forest belts.",
      targetGroups: [
        "Smallholder farmers managing terraced crop fields or orchards",
        "Pastoral herders and livestock keepers utilizing highland fringes",
        "Forest fringe residents and hamlet representatives",
        "Local school commuters and daily path travelers navigating early morning and dusk routes",
      ],
    },
    exploration: {
      heading: "What This Survey Explores",
      intro:
        "Our inquiry is organized around four structural dimensions of everyday human-wildlife encounters.",
      topics: [
        {
          title: "Crop Depredation & Harvest Protection",
          description:
            "Assessing seasonal raiding patterns on millet, corn, and vegetable terraces, alongside the efficacy of traditional watchtowers and physical deterrents.",
        },
        {
          title: "Livestock Vulnerability & Pastoral Defense",
          description:
            "Documenting predation risks for cattle and sheep, nighttime enclosure practices, and reliance on indigenous Himalayan guardian dogs.",
        },
        {
          title: "Daily Transit & Commuter Safety",
          description:
            "Understanding how walking habits, school journeys, and firewood collection schedules are modified around dawn and dusk predator activity.",
        },
        {
          title: "Institutional Reporting & Relief Mechanisms",
          description:
            "Evaluating awareness and accessibility of forest department compensation claims, response times, and local mitigation support.",
        },
      ],
    },
    significance: {
      heading: "Why This Topic Matters",
      paragraphs: [
        "Human-wildlife encounters in hilly regions are frequently sensationalized in regional headlines, obscuring the nuanced, long-term economic drain borne by smallholder farming families. When an entire season of finger millet or potato harvest is lost in a single night, the consequences reverberate across household food security and rural out-migration.",
        "Documenting authentic ground observations allows community planners and ecological researchers to design non-lethal, sustainable mitigation strategies that protect both rural livelihoods and vital Himalayan biodiversity.",
      ],
      wideImage: {
        src: "/images/wildlife-millet-fields.jpg",
        alt: "Rainfed terraced millet fields on upper slopes bordering forested ridge in Garhwal",
        caption: "Upper Nayaar valley millet fields where forest boundaries directly interface with subsistence cultivation.",
      },
    },
    closingStatement:
      "Coexistence on steep terrain requires balancing ecological conservation with the dignity, safety, and economic survival of mountain communities.",
    participation: {
      status: "ongoing",
      formUrl: "https://forms.gle/example1",
      forms: [
        { language: "English", url: "https://forms.gle/example1" },
        { language: "Hindi", url: "https://forms.gle/example1hi" },
      ],
      estimatedMinutes: 8,
      instructions:
        "The survey is available in both English and Hindi. Choose your preferred language below. It takes approximately 8 minutes to complete.",
      privacyNotice:
        "All responses are anonymous. No personally identifiable information or contact details are collected or stored.",
    },
    relatedSurveySlugs: [
      "preserving-traditional-ecological-knowledge",
      "community-market-dynamics",
      "youth-migration-hill-towns",
    ],
  },
  {
    id: "2",
    slug: "digital-access-rural-communities",
    aliases: ["rural-digital-access"],
    title: "Digital Access in Rural Communities",
    subtitle: "Bandwidth, Device Sharing, and Civic Connectivity Across Rural Settlements",
    description:
      "Exploring how internet connectivity and digital literacy shape opportunities in rural areas.",
    category: "Technology & Society",
    status: "ongoing",
    formUrl: "https://forms.gle/example2",
    forms: [
      { language: "English", url: "https://forms.gle/example2" },
    ],
    coverImage: "/images/survey-digital.jpg",
    coverImageAlt:
      "A primary school teacher in a rural village holding a smartphone to show a digital lesson to seated students",
    estimatedMinutes: 6,
    startDate: "2026-10-01",
    endDate: "2027-01-31",
    languages: ["English"],
    featured: true,
    tags: ["digital divide", "internet", "rural", "education"],
    objective:
      "To map current levels of digital access, identify barriers to connectivity, and understand how digital tools are used for education, commerce, and governance in rural settings.",
    targetAudience: "Residents of rural and semi-urban areas across India",
    privacyNote:
      "All responses are anonymous. No personally identifiable information is collected.",
    about: {
      heading: "Connectivity Realities in Village Life",
      paragraphs: [
        "While headline mobile penetration numbers suggest universal digital coverage, rural digital access remains profoundly shaped by intermittent electricity, spotty 4G cell tower signals, and shared family handsets. For rural households, being 'connected' often means waiting for morning hours when ridge signals strengthen or walking to a village center with solar backup.",
        "This study examines how rural citizens experience government service portals, online schooling, payment systems, and vocational platforms under real-world infrastructure constraints, moving beyond download speed statistics into lived usability.",
      ],
      supportingImage: {
        src: "/images/digital-market.jpg",
        alt: "A village craftsman sitting on the ground at a weekly haat using a mobile phone beside his crafts",
        caption: "An artisan vendor at a rural open-air haat coordinating orders via mobile phone.",
      },
    },
    audience: {
      heading: "Who Should Participate?",
      description:
        "Open to all residents, students, local entrepreneurs, and educators living in rural villages, hamlets, or block headquarters.",
      targetGroups: [
        "Rural students and educators relying on mobile devices for coursework",
        "Village shop owners, farmers, and artisans using digital payments or advisory apps",
        "Common Service Centre (CSC) operators and local panchayat workers",
        "Household members who share a single smartphone across family generations",
      ],
    },
    exploration: {
      heading: "What This Survey Explores",
      intro:
        "We focus on real constraints and grassroots adaptations across four core digital dimensions.",
      topics: [
        {
          title: "Device Ownership & Intrafamily Sharing",
          description:
            "Mapping how smartphones and screens are prioritized between school-age children, earning adults, and elderly dependents.",
        },
        {
          title: "Signal Reliability & Infrastructure Gaps",
          description:
            "Documenting call drop rates, power outage durations, and the geographic dead zones that disrupt routine online tasks.",
        },
        {
          title: "Civic Services & Welfare Navigation",
          description:
            "Investigating user hurdles with biometric authentication, ration card updates, direct benefit transfers, and portal navigation.",
        },
        {
          title: "Digital Financial Literacy & Trust",
          description:
            "Measuring confidence in UPI transactions, fraud awareness, and reliance on village intermediaries for financial tasks.",
        },
      ],
    },
    significance: {
      heading: "Why This Topic Matters",
      paragraphs: [
        "When essential civic entitlements, bank accounts, and educational opportunities transition entirely into digital applications, connectivity becomes a fundamental determinant of social equity. Without nuanced ground evidence, policy frameworks assume frictionless access that rarely matches rural realities.",
        "By surfacing grassroots bottlenecks, this survey helps public interest technologists and policymakers build inclusive offline-first workflows and resilient community infrastructure.",
      ],
      wideImage: {
        src: "/images/digital-learning.jpg",
        alt: "A rural classroom where a teacher guides young students learning on an educational laptop",
        caption: "Interactive digital learning in Khairat village, illustrating community-level device adoption and student engagement.",
      },
    },
    closingStatement:
      "True digital inclusion is not measured in signal bars alone, but in whether every resident can independently exercise their civic rights without friction.",
    participation: {
      status: "ongoing",
      formUrl: "https://forms.gle/example2",
      forms: [
        { language: "English", url: "https://forms.gle/example2" },
      ],
      estimatedMinutes: 6,
      instructions:
        "Complete the survey online using any mobile phone or browser. It takes approximately 6 minutes.",
      privacyNotice:
        "All responses are anonymous. No personal numbers, IDs, or location coordinates are recorded.",
    },
    relatedSurveySlugs: [
      "youth-migration-hill-towns",
      "community-market-dynamics",
      "mental-health-awareness-rural-areas",
    ],
  },
  {
    id: "3",
    slug: "local-water-quality-perception",
    aliases: ["local-water-quality"],
    title: "Local Water Quality Perception",
    subtitle: "Community Trust, Seasonal Turbidity, and Traditional Spring Heritage Across Mountain Catchments",
    description:
      "How do communities perceive and respond to the quality of their daily water supply?",
    category: "Public Health",
    status: "unconfirmed",
    formUrl: null,
    coverImage: "/images/survey-water.jpg",
    coverImageAlt:
      "Natural mountain spring known as Dhara Pani gushing cleanly from bedrock in a Himalayan village",
    estimatedMinutes: 5,
    startDate: "2027-01-15",
    languages: ["English", "Hindi"],
    featured: false,
    tags: ["water", "health", "public services", "environment"],
    objective:
      "To understand community perceptions of water quality, identify common concerns about drinking water sources, and assess awareness of water purification practices.",
    targetAudience:
      "Households relying on local water sources such as springs, wells, and public taps",
    privacyNote:
      "All responses are anonymous. No personally identifiable information is collected.",
    about: {
      heading: "The Mountain Spring Ecosystem",
      paragraphs: [
        "For centuries, mountain communities have relied on customary spring systems—locally known as dharas (gravity springs) and naulas (subsurface aquifer sanctuaries)—for pristine potable water. Filtered naturally through mossy limestone and oak root networks, these natural water points served as both communal lifelines and architectural heritage.",
        "However, erratic rainfall patterns, road widening across recharge zones, and changing piped tap infrastructure have introduced uncertainty. Households frequently notice seasonal cloudiness during the monsoon, shifting mineral tastes in summer, and declining spring yields, raising urgent questions about water safety that formal testing rarely reaches in time.",
      ],
      supportingImage: {
        src: "/images/water-naula.jpg",
        alt: "Traditional stone masonry spring sanctuary in a Himalayan mountain village providing community drinking water",
        caption: "Sankot Naini traditional spring sanctuary, where ancient stone masonry protects aquifer water for the surrounding hamlet.",
      },
    },
    audience: {
      heading: "Who Should Participate?",
      description:
        "Intended for rural and semi-urban households across hill belts who draw daily drinking water from gravity springs, piped panchayat taps, or community storage tanks.",
      targetGroups: [
        "Primary water gatherers and domestic water managers in village homes",
        "Village water and sanitation committee members (VWSC) and panchayat leaders",
        "Residents noticing seasonal shifts in spring taste, color, or flow duration",
        "Public health field workers and rural healthcare practitioners",
      ],
    },
    exploration: {
      heading: "What This Survey Explores",
      intro:
        "A multi-faceted inquiry into sensory perception, traditional knowledge, and infrastructure reliability.",
      topics: [
        {
          title: "Sensory Quality Assessment",
          description:
            "Investigating how households judge safety through visual clarity, seasonal taste changes, odor, and cookware sediment residue.",
        },
        {
          title: "Spring Source Health & Depletion",
          description:
            "Documenting dry-season discharge reduction in historical naulas and dharas alongside land use disturbances in recharge zones.",
        },
        {
          title: "Household Storage & Domestic Treatment",
          description:
            "Mapping customary practices including boiled cooling, cloth filtering, traditional copper vessel storage, and modern filter adoption.",
        },
        {
          title: "Piped Supply vs Natural Heritage",
          description:
            "Comparing community confidence in newly introduced piped tap schemes against heritage spring water sources.",
        },
      ],
    },
    significance: {
      heading: "Why This Topic Matters",
      paragraphs: [
        "Perception of water quality directly governs whether community members choose to consume treated municipal supplies or trek uphill to unfiltered ancestral springs. In many mountain pockets, perceived purity does not always align with microbiological safety during heavy monsoon downpours.",
        "Capturing community attitudes and customary testing heuristics is essential for designing participatory water testing programs that empower residents without dismissing ancestral ecological knowledge.",
      ],
      wideImage: {
        src: "/images/water-stream.jpg",
        alt: "Pristine mountain stream bubbling over clean river stones with wild maidenhair ferns draped above in Uttarakhand",
        caption: "A pristine high-altitude mountain stream in Uttarakhand, reflecting natural riparian health and seasonal flow.",
      },
    },
    closingStatement:
      "Safe drinking water is rooted not merely in chemical metrics, but in the enduring relationship between mountain hamlets and their living springs.",
    participation: {
      status: "unconfirmed",
      formUrl: null,
      estimatedMinutes: 5,
      instructions: "Questionnaire access is currently pending protocol confirmation.",
      unavailableReason:
        "Questionnaire protocol and institutional review board approval are currently in preparation. Form submission will activate once the survey protocol is certified.",
      privacyNotice:
        "Participation will be completely anonymous when activated. No individual identifiers or geolocation markers will be retained.",
    },
    relatedSurveySlugs: [
      "preserving-traditional-ecological-knowledge",
      "wild-animal-human-conflict-hilly-regions",
      "public-transport-hill-regions",
    ],
  },
  {
    id: "4",
    slug: "community-market-dynamics",
    aliases: [],
    title: "Community Market Dynamics",
    subtitle: "Weekly Haats, Agrarian Exchange, and the Social Architecture of Rural Town Bazaars",
    description:
      "A study of how local weekly markets function as social and economic lifelines in small towns.",
    category: "Economics & Livelihoods",
    status: "completed",
    formUrl: "https://forms.gle/example4",
    forms: [
      { language: "English", url: "https://forms.gle/example4" },
    ],
    coverImage: "/images/survey-market.jpg",
    coverImageAlt:
      "Senior produce vendor carefully arranging fresh vegetables and produce in an outdoor market stall",
    estimatedMinutes: 10,
    startDate: "2026-03-01",
    endDate: "2026-06-30",
    languages: ["English"],
    featured: true,
    tags: ["markets", "economy", "community", "livelihoods"],
    objective:
      "To document the economic and social functions of periodic rural markets and understand their role in local supply chains.",
    targetAudience:
      "Vendors, buyers, and community members who regularly attend local weekly or bi-weekly markets",
    privacyNote:
      "All responses are anonymous. No personally identifiable information is collected.",
    about: {
      heading: "The Rhythm of Periodic Markets",
      paragraphs: [
        "In small towns and rural intersections, the weekly haat or bazaar is far more than a commercial node. It functions as an indispensable civic commons where smallholder farmers bypass middleman cartels, artisans barter handwoven baskets and iron tools, and distant relatives converge to exchange regional news.",
        "Field documentation conducted between March and June 2026 mapped footfall patterns, seasonal price fluctuations, and credit relationships among informal micro-vendors. The study revealed how these historic market dynamics provide crucial economic resilience against external supply chain disruptions.",
      ],
      supportingImage: {
        src: "/images/market-vendor.jpg",
        alt: "Elderly woman street vendor seated on pavement selling freshly harvested produce from woven baskets",
        caption: "A grower-vendor offering seasonal field harvest in traditional shallow woven baskets at a periodic market.",
      },
    },
    audience: {
      heading: "Participant Representation",
      description:
        "This study captured empirical responses from regular participants across three representative weekly market nodes.",
      targetGroups: [
        "Smallholder farmers marketing surplus vegetable, grain, and fruit crops",
        "Itinerant retail traders dealing in dry spices, textiles, and household hardware",
        "Local artisans and blacksmiths repairing farm implements and selling woodwork",
        "Regular household shoppers balancing weekly domestic food budgets",
      ],
    },
    exploration: {
      heading: "What This Survey Explored",
      intro:
        "The research investigated four central axes of informal town commerce.",
      topics: [
        {
          title: "Vendor Supply Lines & Intermediation",
          description:
            "Mapping transport logistics, head-load hauling distances, and direct farmer-to-consumer price margins versus mandi middlemen.",
        },
        {
          title: "Informal Credit & Trust Networks",
          description:
            "Examining traditional khata ledger credit, deferred harvest payments, and mutual aid pacts among neighboring stallholders.",
        },
        {
          title: "Physical Infrastructure & Municipal Amenities",
          description:
            "Assessing vendor access to clean drinking water, shade awnings, waste disposal, and secure storage overnight.",
        },
        {
          title: "Civic & Interpersonal Exchange",
          description:
            "Evaluating the market's irreplaceable role as a cultural meeting square for matrimonial news, labor hiring, and community updates.",
        },
      ],
    },
    significance: {
      heading: "Why This Study Matters",
      paragraphs: [
        "Modern retail consolidation and digital delivery models frequently misdiagnose weekly rural markets as archaic remnants slated for obsolescence. In reality, periodic markets operate as sophisticated, climate-adaptive micro-economies that circulate currency directly within the local watershed.",
        "The collected data provides concrete evidence for local urban planning bodies to safeguard historic market grounds, invest in civic vendor sanitation, and resist punitive anti-vending regulations.",
      ],
      wideImage: {
        src: "/images/market-stall.jpg",
        alt: "Colorful variety of fresh regional vegetables arranged closely at an outdoor farm market stall",
        caption: "Bountiful farm-to-table display illustrating the high turnover of perishable seasonal crops in local bazaars.",
      },
    },
    closingStatement:
      "The weekly market is the beating heart of local resilience—a living space where economic survival and community fellowship remain one.",
    participation: {
      status: "completed",
      formUrl: "https://forms.gle/example4",
      forms: [
        { language: "English", url: "https://forms.gle/example4" },
      ],
      estimatedMinutes: 10,
      instructions: "Data collection for this study is now concluded.",
      unavailableReason:
        "Field data collection for this survey concluded on June 30, 2026. Data synthesis and monograph publishing are currently in progress.",
      privacyNotice:
        "All collected data remains confidential and anonymized in accordance with research ethics protocols.",
    },
    relatedSurveySlugs: [
      "digital-access-rural-communities",
      "public-transport-hill-regions",
      "youth-migration-hill-towns",
    ],
  },
  {
    id: "5",
    slug: "youth-migration-hill-towns",
    aliases: ["youth-migration-patterns"],
    title: "Youth Migration from Hill Towns",
    subtitle: "Aspirations, Educational Transit, and the Changing Social Fabric of Mountain Youth",
    description:
      "Why are young people leaving hill towns, and what would make them stay?",
    category: "Demographics & Migration",
    status: "ongoing",
    formUrl: "https://forms.gle/example5",
    forms: [
      { language: "English", url: "https://forms.gle/example5" },
    ],
    coverImage: "/images/survey-migration.jpg",
    coverImageAlt:
      "A young man sitting contemplatively on a roadside bench at a mountain bus stop overlooking a panoramic valley in Shimla",
    estimatedMinutes: 7,
    startDate: "2026-08-01",
    endDate: "2027-02-28",
    languages: ["English", "Hindi"],
    featured: false,
    tags: ["migration", "youth", "employment", "hill towns"],
    objective:
      "To understand the factors driving youth migration from hill towns, including education, employment, and quality of life considerations.",
    targetAudience:
      "Young adults aged 18–35 who have either migrated from or currently live in hill towns",
    privacyNote:
      "All responses are anonymous. No personally identifiable information is collected.",
    about: {
      heading: "Between Heritage and Opportunity",
      paragraphs: [
        "Across mountain valleys, smaller hill towns are experiencing unprecedented demographic shifts. While older generations maintain ancestral stone homes and terraced agriculture, young people face a persistent mismatch between local livelihoods and contemporary aspirations. Limited collegiate degree options, scarce professional white-collar positions, and high living costs in regional hubs push thousands toward lowland metropolitan centers each year.",
        "Yet out-migration is rarely an effortless choice. It entails navigating emotional separation from family networks, high urban rental precarity, and deep nostalgia for clean mountain environments. This survey investigates what drives the departure decision, what ties migrants back to their hometowns, and what structural changes could enable youth to build viable careers in the hills.",
      ],
      supportingImage: {
        src: "/images/migration-students.jpg",
        alt: "College students in casual attire queuing to board a mountain transit bus in Srinagar Garhwal",
        caption: "University students boarding regional transit buses in Garhwal, exemplifying the daily commute for higher education.",
      },
    },
    audience: {
      heading: "Who Should Participate?",
      description:
        "We encourage participation from young people aged 18 to 35 from mountainous and sub-Himalayan regions, whether currently residing in their home districts or living in distant cities.",
      targetGroups: [
        "Higher secondary and college students assessing future relocation options",
        "Recent graduates and early-career professionals who have migrated to plains cities",
        "Young entrepreneurs, teachers, and digital workers who have chosen to stay or return to hill towns",
        "Family members and community mentors observing youth out-migration trends",
      ],
    },
    exploration: {
      heading: "What This Survey Explores",
      intro:
        "We explore personal aspirations, educational pathways, and return incentives across four themes.",
      topics: [
        {
          title: "Higher Education & Specialized Training",
          description:
            "Assessing local availability of vocational polytechnics, university degrees, and competitive exam coaching in hill districts.",
        },
        {
          title: "Employment Horizons & Local Enterprise",
          description:
            "Analyzing the viability of mountain-based entrepreneurship, eco-tourism, organic agriculture, and remote tech work.",
        },
        {
          title: "Urban Plains Reality vs Mountain Quality of Life",
          description:
            "Comparing metropolitan income potential against urban pollution, high rents, mental isolation, and lack of community.",
        },
        {
          title: "Return Migration Catalysts",
          description:
            "Identifying which specific amenities—reliable fiber broadband, healthcare specialty centers, or credit access—would encourage youth to resettle.",
        },
      ],
    },
    significance: {
      heading: "Why This Topic Matters",
      paragraphs: [
        "Persistent youth out-migration leaves mountain villages populated predominantly by aging elders, accelerating the abandonment of terraced fields and weakening customary community institutions. When an entire generation relocates, the living transmission of language, oral lore, and ecological stewardship faces profound interruption.",
        "Gaining granular insights directly from young respondents enables regional development agencies to craft grounded youth policies, vocational funding, and digital infrastructure that foster mountain economies rather than deplete them.",
      ],
      wideImage: {
        src: "/images/migration-almora-ridge.jpg",
        alt: "Panoramic high-angle view of the historic hill town of Almora sprawling across a high Himalayan ridge against rolling mountain ranges",
        caption: "Ridge-top settlement of Almora in Uttarakhand, showing the compact mountain geography where youth weigh local opportunities against outward mobility.",
      },
    },
    closingStatement:
      "Mountain towns will thrive when their young people can choose to stay not out of constraint, but because opportunity and belonging flourish side by side.",
    participation: {
      status: "ongoing",
      formUrl: "https://forms.gle/example5",
      forms: [
        { language: "English", url: "https://forms.gle/example5" },
      ],
      estimatedMinutes: 7,
      instructions:
        "The survey is open to young adults aged 18–35. It takes roughly 7 minutes to complete on mobile or desktop.",
      privacyNotice:
        "All responses are anonymous. No personal names, telephone numbers, or employment records are collected.",
    },
    relatedSurveySlugs: [
      "digital-access-rural-communities",
      "public-transport-hill-regions",
      "wild-animal-human-conflict-hilly-regions",
    ],
  },
  {
    id: "6",
    slug: "preserving-traditional-ecological-knowledge",
    aliases: ["traditional-knowledge-preservation"],
    title: "Preserving Traditional Ecological Knowledge",
    subtitle: "Indigenous Ethnobotany, Terraced Water Canals, and Intergenerational Memory Across the Himalaya",
    description:
      "Documenting how traditional environmental knowledge is passed across generations in mountain communities.",
    category: "Culture & Heritage",
    status: "unconfirmed",
    formUrl: null,
    coverImage: "/images/survey-tradition.jpg",
    coverImageAlt:
      "In-situ botanical observation of flowering Brahmakamal (Saussurea obvallata), a sacred medicinal herb at 13,000 feet in Chamoli",
    estimatedMinutes: 12,
    startDate: "2027-03-01",
    languages: ["English", "Hindi"],
    featured: false,
    tags: ["traditional knowledge", "ecology", "culture", "heritage"],
    objective:
      "To identify and document forms of traditional ecological knowledge in mountain communities and understand how this knowledge is being transmitted, preserved, or lost.",
    targetAudience:
      "Community elders, farmers, and cultural practitioners in mountainous regions",
    privacyNote:
      "All responses are anonymous. No personally identifiable information is collected.",
    about: {
      heading: "Centuries of Mountain Agronomy",
      paragraphs: [
        "Over millennia, indigenous Himalayan communities developed deeply intricate ecological systems attuned to fragile mountain ecosystems. From weather prediction based on bird flight patterns and high-altitude medicinal plant harvesting to gravity-fed gool irrigation canals carved into bedrock, this accumulated wisdom represents sustainable survival engineering.",
        "With rapid cultural standardization, formal school curricula that exclude indigenous flora, and demographic migration, this oral treasury is increasingly concentrated among village elders. This survey seeks to document which facets of ecological knowledge remain active in daily practice, which are at risk of erasure, and how communities wish to preserve their legacy.",
      ],
      supportingImage: {
        src: "/images/tradition-terrace.jpg",
        alt: "Historic stone-walled terraced agricultural fields stepped across Himalayan slopes with traditional gravity irrigation canals in Uttarakhand",
        caption: "Stepped terrace architecture in Uttarakhand, engineered with dry-stone gravity canals that conserve moisture and prevent mountain erosion.",
      },
    },
    audience: {
      heading: "Who Should Participate?",
      description:
        "Intended for indigenous mountain farmers, pastoralists, herbal healers (vaidyas), community elders, and cultural documentarians.",
      targetGroups: [
        "Practicing farmers maintaining heirloom crop varieties (millets, amaranth, pulses)",
        "Traditional herbal practitioners and wild plant foragers",
        "Elder community members holding oral agricultural calendars and folklore",
        "Youth and educators interested in biocultural conservation",
      ],
    },
    exploration: {
      heading: "What This Survey Explores",
      intro:
        "Investigating four central dimensions of biocultural inheritance.",
      topics: [
        {
          title: "Heirloom Seed Saving & Crop Diversity",
          description:
            "Documenting seed saving vessels, bartering rituals, and native resistance of indigenous crops to drought and pests.",
        },
        {
          title: "Ethnobotany & High-Altitude Medicinal Plants",
          description:
            "Mapping customary knowledge of wild edible greens, roots, and therapeutic herbs like Brahmakamal and Kutki.",
        },
        {
          title: "Indigenous Water Engineering & Canals",
          description:
            "Recording the maintenance protocols of community gools (channels), naulas, and stone rainwater catchment ponds.",
        },
        {
          title: "Intergenerational Transmission Mechanisms",
          description:
            "Evaluating the transition from oral village storytelling to formal documentation and youth apprenticeships.",
        },
      ],
    },
    significance: {
      heading: "Why This Topic Matters",
      paragraphs: [
        "As climate volatility disrupts regular mountain weather patterns, traditional ecological knowledge offers invaluable blueprints for climate adaptation. Indigenous millet polycultures, for example, thrive in conditions where monoculture hybrid grains fail completely.",
        "Preserving this knowledge is not a backward-looking exercise in nostalgia, but an imperative for ecological survival, community autonomy, and biodiversity conservation in fragile mountain biomes.",
      ],
      wideImage: {
        src: "/images/tradition-seed-storage.jpg",
        alt: "Artisan weaving indigenous bamboo Duli granary baskets engineered specifically for aerated seed preservation",
        caption: "A master craftsman weaving a traditional bamboo Duli basket engineered for natural aeration and long-term seed storage.",
      },
    },
    closingStatement:
      "Traditional ecological knowledge is not an artifact of the past, but a living compass guiding sustainable coexistence with the mountain earth.",
    participation: {
      status: "unconfirmed",
      formUrl: null,
      estimatedMinutes: 12,
      instructions: "Questionnaire access is currently pending protocol confirmation.",
      unavailableReason:
        "Field research protocol and community consent frameworks are currently being finalized with local institutions. The inquiry will open upon protocol approval.",
      privacyNotice:
        "When launched, all cultural knowledge shared will be attributed ethically according to community biocultural protocols, with option for full anonymity.",
    },
    relatedSurveySlugs: [
      "wild-animal-human-conflict-hilly-regions",
      "local-water-quality-perception",
      "community-market-dynamics",
    ],
  },
  {
    id: "7",
    slug: "public-transport-hill-regions",
    aliases: [],
    title: "Public Transport in Hill Regions",
    subtitle: "Lifeline Mountain Routes, Fleet Reliability, and Commuter Realities Across Precarious Terrain",
    description:
      "Assessing the reliability, accessibility, and impact of public transport services in mountainous areas.",
    category: "Infrastructure",
    status: "completed",
    formUrl: "https://forms.gle/example7",
    forms: [
      { language: "English", url: "https://forms.gle/example7" },
    ],
    coverImage: "/images/survey-transport.jpg",
    coverImageAlt:
      "State transport bus navigating sheer rock-carved cliff overhangs at Taranda Dhank in Kinnaur",
    estimatedMinutes: 6,
    startDate: "2026-01-15",
    endDate: "2026-05-15",
    languages: ["English"],
    featured: false,
    tags: ["transport", "infrastructure", "accessibility", "hills"],
    objective:
      "To assess commuter satisfaction with public transport services and identify critical gaps in connectivity for hill region communities.",
    targetAudience:
      "Regular users of public transport services in hilly and mountainous areas",
    privacyNote:
      "All responses are anonymous. No personally identifiable information is collected.",
    about: {
      heading: "The Mountain Transit Lifeline",
      paragraphs: [
        "In rugged mountain districts, state-run public transport buses and shared utility jeeps are not just transit conveniences—they are the literal lifelines of civic society. Every day, early morning services transport schoolchildren across distant valleys, take sick patients to subdivisional hospitals, and ferry farmers with crates of produce down to wholesale markets.",
        "Conducted from January to May 2026, this study surveyed daily commuters across high-altitude roads to document route frequencies, winter disruption coping strategies, passenger overcrowding, and pedestrian walking distances to the nearest road-head.",
      ],
      supportingImage: {
        src: "/images/transport-bus-stop.jpg",
        alt: "Local boy waiting at roadside bus stand overlooking deep Himalayan valleys in Shimla",
        caption: "A commuter waiting at a roadside shelter in Shimla, highlighting the quiet patience demanded by mountain schedules.",
      },
    },
    audience: {
      heading: "Participant Cohort",
      description:
        "This empirical study synthesized input from regular mountain commuters across both primary highways and remote link roads.",
      targetGroups: [
        "Daily school, college, and university commuters traversing inter-valley routes",
        "Patients and caregivers traveling to district hospitals for healthcare",
        "Agrarian producers transporting fresh produce, milk cans, and goods to town markets",
        "Women commuters evaluating safety, schedule predictability, and last-mile connectivity",
      ],
    },
    exploration: {
      heading: "What This Survey Explored",
      intro:
        "Examining four critical operational dimensions of high-terrain transit.",
      topics: [
        {
          title: "Schedule Adherence & Winter Road Blocks",
          description:
            "Assessing delays caused by monsoonal landslides, snowfall, narrow single-lane bottlenecks, and fleet maintenance breakdowns.",
        },
        {
          title: "Last-Mile Pedestrian Access",
          description:
            "Documenting the steep walking hours required to reach the nearest motorable bus stop from off-road ridge villages.",
        },
        {
          title: "Passenger Safety & Vehicle Roadworthiness",
          description:
            "Measuring commuter confidence in vehicle braking systems, driver mountain skills, and roadside guardrails along precipitous gorges.",
        },
        {
          title: "Affordability & Concession Fares",
          description:
            "Evaluating the financial impact of transit fares on low-income rural households and student passes.",
        },
      ],
    },
    significance: {
      heading: "Why This Study Matters",
      paragraphs: [
        "Public transport deficits in hill regions disproportionately disadvantage women, the elderly, and schoolchildren who cannot afford private vehicles or commercial taxi fares. When a single afternoon bus route is canceled, entire villages can be isolated from medical emergency care and scholastic exams.",
        "The findings from this survey provide quantitative evidence for state transport corporations to optimize fleet allocations, repair dangerous road-edge shoulders, and prioritize underserved branch routes.",
      ],
      wideImage: {
        src: "/images/transport-ridge-bus.jpg",
        alt: "State transport bus negotiating rugged unpaved mountain route towards high-altitude destination at Parashar",
        caption: "Public bus navigating the high-altitude Parashar ridge route, exemplifying the demanding conditions facing mountain fleets.",
      },
    },
    closingStatement:
      "Mobility in the mountains is a fundamental civic right—reliable public transport connects isolated ridges to the opportunities of the world.",
    participation: {
      status: "completed",
      formUrl: "https://forms.gle/example7",
      forms: [
        { language: "English", url: "https://forms.gle/example7" },
      ],
      estimatedMinutes: 6,
      instructions: "Data collection for this survey is now concluded.",
      unavailableReason:
        "Data collection for this survey completed on May 15, 2026. Analysis has concluded and the policy brief is being prepared for regional transit planners.",
      privacyNotice:
        "All participant data was anonymized upon collection in accordance with institutional guidelines.",
    },
    relatedSurveySlugs: [
      "youth-migration-hill-towns",
      "community-market-dynamics",
      "digital-access-rural-communities",
    ],
  },
  {
    id: "8",
    slug: "mental-health-awareness-rural-areas",
    aliases: ["mental-health-awareness-rural"],
    title: "Mental Health Awareness in Rural Areas",
    subtitle: "Community Empathy, Destigmatizing Distress, and Informal Support Networks in Village Settings",
    description:
      "Understanding mental health perceptions, stigma, and access to support in rural communities.",
    category: "Public Health",
    status: "unconfirmed",
    formUrl: null,
    coverImage: "/images/survey-health.jpg",
    coverImageAlt:
      "A person walking along a gentle dirt lane winding through green open fields in soft morning light",
    estimatedMinutes: 8,
    startDate: "2027-04-01",
    languages: ["English", "Hindi"],
    featured: false,
    tags: ["mental health", "stigma", "rural", "healthcare"],
    objective:
      "To gauge awareness and attitudes toward mental health in rural communities, identify barriers to seeking help, and understand existing support networks.",
    targetAudience: "Adults living in rural communities across India",
    privacyNote:
      "All responses are anonymous. No personally identifiable information is collected.",
    about: {
      heading: "Emotional Wellbeing in Village Life",
      paragraphs: [
        "In rural and agrarian environments, mental distress is frequently experienced in silence or interpreted through purely somatic complaints such as persistent exhaustion, headaches, or sleeplessness. The absence of localized mental health terminology, compounded by deep social stigma and fear of village gossip, often prevents individuals from seeking empathetic dialogue.",
        "At the same time, rural communities possess rich customary support networks—trusted elders, tea stall camaraderie, kinship circles, and outdoor routines—that offer organic psychosocial comfort. This exploratory inquiry seeks to understand how mental wellbeing is perceived, articulated, and nurtured in village life without imposing alien clinical categories.",
      ],
      supportingImage: {
        src: "/images/health-conversation.jpg",
        alt: "Two people sitting closely together along a quiet tree-canopied trail having an unhurried empathetic conversation",
        caption: "A supportive, unhurried outdoor conversation along a quiet path, symbolizing safe spaces for dialogue and emotional renewal.",
      },
    },
    audience: {
      heading: "Who Should Participate?",
      description:
        "Designed for community members, frontline health workers (ASHAs/ANMs), educators, and caregivers across rural districts.",
      targetGroups: [
        "Adult community members navigating family, agrarian, or economic stress",
        "Frontline healthcare workers (ASHA, Anganwadi, and ANM workers)",
        "Local school teachers and community youth leaders",
        "Caregivers supporting elderly or chronically ill household members",
      ],
    },
    exploration: {
      heading: "What This Survey Explores",
      intro:
        "A sensitive, grounded exploration of community perceptions and informal care.",
      topics: [
        {
          title: "Perceptions & Cultural Vocabulary of Distress",
          description:
            "Understanding the idioms, vernacular terms, and somatic expressions used to describe psychological strain and emotional fatigue.",
        },
        {
          title: "Social Stigma & Safe Confidential Spaces",
          description:
            "Assessing fears of social ostracization, confidentiality concerns in tight-knit villages, and barriers to vulnerability.",
        },
        {
          title: "Frontline Healthcare Support Capacity",
          description:
            "Evaluating the mental health counseling training, bandwidth, and referral resources available to rural ASHA workers.",
        },
        {
          title: "Informal Healing & Peer Support Networks",
          description:
            "Documenting the role of nature walks, religious gatherings, mutual labor sharing (paddi), and family listening.",
        },
      ],
    },
    significance: {
      heading: "Why This Topic Matters",
      paragraphs: [
        "Agrarian uncertainty, climate-induced crop failures, debt pressures, and isolation can place immense psychological strain on rural households. Yet formal mental healthcare infrastructure remains overwhelmingly concentrated in metropolitan tier-1 hospitals, leaving rural populations almost entirely unserved.",
        "Fostering culturally respectful dialogue and documenting community-grounded coping systems is the crucial first step toward destigmatizing mental health and building compassionate community-first care models.",
      ],
      wideImage: {
        src: "/images/health-village-vista.jpg",
        alt: "A quiet rural hill community nestled among rolling valley slopes under soft daylight",
        caption: "A quiet valley village in soft morning light, reflecting the human scale and community interconnectedness of rural life.",
      },
    },
    closingStatement:
      "Compassion begins with listening—creating safe, unhurried spaces where every individual can speak their truth without fear of judgment.",
    participation: {
      status: "unconfirmed",
      formUrl: null,
      estimatedMinutes: 8,
      instructions: "Questionnaire access is currently pending protocol confirmation.",
      unavailableReason:
        "Ethical protocols, informed consent procedures, and referral safeguards for this sensitive study are undergoing formal institutional review. The survey will launch once certified.",
      privacyNotice:
        "All participation will be completely anonymous and confidential. No clinical records, names, or identifying data will ever be collected.",
    },
    relatedSurveySlugs: [
      "digital-access-rural-communities",
      "youth-migration-hill-towns",
      "local-water-quality-perception",
    ],
  },
];
