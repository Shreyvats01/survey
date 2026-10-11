import type { Survey } from "@/types/survey";

export const surveys: Survey[] = [
  {
    id: "1",
    slug: "wild-life-impact-hilly-regions",
    aliases: ["wild-life-impact"],
    title: "Wildlife in the Hills",
    subtitle: "Crops, livestock and daily life near the forest",
    description: "How wild animals affect everyday life in hill villages.",
    category: "Environment & Wildlife",
    status: "ongoing",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLScmxUsKvu-vrU6n5wDYKWD-ElA9mzOi5thPV7xwqvZ3j1Oq5w/viewform?usp=dialog",
    forms: [
      { language: "English", url: "https://docs.google.com/forms/d/e/1FAIpQLScmxUsKvu-vrU6n5wDYKWD-ElA9mzOi5thPV7xwqvZ3j1Oq5w/viewform?usp=dialog" },
      { language: "Hindi", url: "https://docs.google.com/forms/d/e/1FAIpQLSeTYMXF8o-UWNNH_TUZtMbvbTTQGlpVeJvr4R6NAa0RJpU3dQ/viewform?usp=header" },
    ],
    coverImage: "/images/survey-wildlife.jpg",
    coverImageAlt:
      "Terraced fields at the edge of a dense mountain forest in Mandi",
    estimatedMinutes: 8,
    startDate: "2026-09-15",
    endDate: "2026-12-31",
    languages: ["English", "Hindi"],
    featured: true,
    tags: ["wildlife", "rural", "agriculture", "safety"],
    objective:
      "To understand how often villagers near forests meet wild animals, what damage it causes, and how families cope.",
    targetAudience:
      "People living in hill villages close to forests or wildlife areas",
    privacyNote:
      "Your responses are anonymous. We don't collect any personal information.",
    about: {
      heading: "Life at the Forest Edge",
      paragraphs: [
        "In many hill villages, the forest starts where the last terraced field ends. Monkeys, deer and leopards move through these fields and paths, and families plan their days around them.",
        "Over the years, forests and farmland have moved closer together, and meetings with wildlife have become more common. This survey asks households what they see: when crops get raided, which routes feel unsafe, and what small changes people have made to stay safe.",
      ],
      supportingImage: {
        src: "/images/wildlife-terrace.jpg",
        alt: "Steep terraced orchards bordering a pine forest in Kinnaur",
        caption: "Terraced orchards meeting the forest at Brua village, Kinnaur.",
      },
    },
    audience: {
      heading: "Who Can Take Part",
      description:
        "If you live, farm or work near a forest in the hills, we would like to hear from you.",
      targetGroups: [
        "Farmers with terraced fields or orchards",
        "Herders and people who keep livestock",
        "Residents of villages and hamlets at the forest edge",
        "Anyone who walks to school, work or the forest at dawn or dusk",
      ],
    },
    exploration: {
      heading: "What We're Asking About",
      intro: "The survey looks at four parts of life alongside wildlife.",
      topics: [
        {
          title: "Crop Damage",
          description:
            "When animals raid millet, maize and vegetable fields, and what actually keeps them away, from watchtowers to fences.",
        },
        {
          title: "Livestock Safety",
          description:
            "How often cattle and sheep are attacked, how animals are kept safe at night, and how much people rely on guard dogs.",
        },
        {
          title: "Safe Travel",
          description:
            "How walking to school or collecting firewood changes around dawn and dusk, when predators are most active.",
        },
        {
          title: "Reporting and Compensation",
          description:
            "Whether people know how to claim compensation from the forest department, and how quickly help arrives.",
        },
      ],
    },
    significance: {
      heading: "Why It Matters",
      paragraphs: [
        "News about wild animals in the hills usually focuses on dramatic moments. The slower cost gets far less attention. A family can lose a whole season of millet or potatoes in a single night, and that affects their food supply and can push them to leave the village.",
        "Honest accounts from people on the ground help planners and researchers find ways to reduce conflict without harming animals, while protecting both livelihoods and the mountain environment.",
      ],
      wideImage: {
        src: "/images/wildlife-millet-fields.jpg",
        alt: "Rainfed millet terraces on an upper slope next to a forested ridge in Garhwal",
        caption: "Millet fields in the Nayaar valley, where farming runs right up to the forest.",
      },
    },
    closingStatement:
      "Living alongside wildlife only works when both nature and the people of the mountains are looked after.",
    participation: {
      status: "ongoing",
      formUrl: "https://forms.gle/example1",
      forms: [
        { language: "English", url: "https://forms.gle/example1" },
        { language: "Hindi", url: "https://forms.gle/example1hi" },
      ],
      estimatedMinutes: 8,
      instructions:
        "The survey is available in English and Hindi. Pick your language below. It takes about 8 minutes.",
      privacyNotice:
        "Your responses are anonymous. We don't collect or store names or contact details.",
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
    title: "Digital Access in Villages",
    subtitle: "Signal, shared phones and getting things done online",
    description: "How internet access and digital skills shape life in rural areas.",
    category: "Technology & Society",
    status: "ongoing",
    formUrl: "https://forms.gle/example2",
    forms: [
      { language: "English", url: "https://forms.gle/example2" },
    ],
    coverImage: "/images/digital-rural-india-smart-phone.jpg",
    coverImageAlt:
      "A village teacher teaching a lession on old board",
    estimatedMinutes: 6,
    startDate: "2026-10-01",
    endDate: "2027-01-31",
    languages: ["English"],
    featured: true,
    tags: ["digital divide", "internet", "rural", "education"],
    objective:
      "To find out how easily rural people can get online, what gets in the way, and how they use digital tools for school, business and government services.",
    targetAudience: "People living in rural and semi-urban areas across India",
    privacyNote:
      "Your responses are anonymous. We don't collect any personal information.",
    about: {
      heading: "Being Online in the Village",
      paragraphs: [
        "On paper, almost everyone has a mobile phone. In practice, being online can mean power cuts, patchy 4G and one phone shared by the whole family. Some people wait for the morning, when the signal is stronger. Others walk to the village centre, where there is solar backup.",
        "This survey asks how people manage government portals, online classes, digital payments and training platforms under these conditions. We care less about internet speed and more about whether these tools actually work for people.",
      ],
      supportingImage: {
        src: "/images/04-rural-tradesperson-mobile-phone.jpg",
        alt: "A craftsman sitting at a weekly haat using his phone beside his crafts",
        caption: "A craftsman at a weekly haat taking orders on his phone.",
      },
    },
    audience: {
      heading: "Who Can Take Part",
      description:
        "Students, teachers, shopkeepers, farmers and anyone else living in a village, hamlet or block town.",
      targetGroups: [
        "Students and teachers who use phones for classwork",
        "Shopkeepers, farmers and artisans who use UPI or farming apps",
        "Common Service Centre (CSC) operators and panchayat staff",
        "Families who share one smartphone across generations",
      ],
    },
    exploration: {
      heading: "What We're Asking About",
      intro:
        "Four areas, all about everyday problems and how people work around them.",
      topics: [
        {
          title: "Who Gets the Phone",
          description:
            "How a shared phone is divided between children, working adults and elders.",
        },
        {
          title: "Signal and Power",
          description:
            "How often calls drop, how long power cuts last, and where there is no signal at all.",
        },
        {
          title: "Government Services",
          description:
            "Trouble with biometric login, ration card updates, direct benefit transfers and government websites.",
        },
        {
          title: "Money and Trust Online",
          description:
            "How confident people feel using UPI, how aware they are of fraud, and when they turn to someone else for help.",
        },
      ],
    },
    significance: {
      heading: "Why It Matters",
      paragraphs: [
        "More and more benefits, bank accounts and schooling now run through apps and websites. When the connection is unreliable, people can miss out on things they are entitled to. Policies often assume smooth access that many villages simply don't have.",
        "Hearing directly from villagers helps technologists and policymakers build tools that still work offline or on a weak signal.",
      ],
      wideImage: {
        src: "/images/digital-learning.jpg",
        alt: "A teacher helping young students learn on a laptop in a rural classroom",
        caption: "Students using a laptop in class in Khairat village.",
      },
    },
    closingStatement:
      "Real digital inclusion isn't about signal bars. It's about whether everyone can use their rights without a struggle.",
    participation: {
      status: "ongoing",
      formUrl: "https://forms.gle/example2",
      forms: [
        { language: "English", url: "https://forms.gle/example2" },
      ],
      estimatedMinutes: 6,
      instructions:
        "Take the survey on any phone or browser. It takes about 6 minutes.",
      privacyNotice:
        "Your responses are anonymous. We don't record phone numbers, IDs or locations.",
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
    title: "Water Quality in the Hills",
    subtitle: "How villagers judge their drinking water",
    description: "How communities see the quality of their drinking water.",
    category: "Public Health",
    status: "unconfirmed",
    formUrl: null,
    coverImage: "/images/survey-water.jpg",
    coverImageAlt:
      "A natural spring flowing from rock in a Himalayan village",
    estimatedMinutes: 5,
    startDate: "2027-01-15",
    languages: ["English", "Hindi"],
    featured: false,
    tags: ["water", "health", "public services", "environment"],
    objective:
      "To learn how people judge the safety of their drinking water, what worries them, and how they make it safer to drink.",
    targetAudience:
      "Households that drink water from springs, wells or public taps",
    privacyNote:
      "Your responses will be anonymous. We won't collect any personal information.",
    about: {
      heading: "Springs in the Mountains",
      paragraphs: [
        "For generations, mountain villages have drunk from springs: dharas that flow from the hillside, and naulas, stone-lined pools fed from underground. The water filters through moss, limestone and tree roots. These springs have long been both a lifeline and a shared heritage.",
        "Now rainfall is less predictable, roads cut through the land that feeds the springs, and piped taps are replacing them. People notice cloudy water in the monsoon, a different taste in summer and weaker flow. They want to know if the water is safe, and lab tests rarely reach them in time.",
      ],
      supportingImage: {
        src: "/images/water-naula.jpg",
        alt: "A traditional stone spring providing drinking water to a Himalayan village",
        caption: "A traditional stone spring at Sankot Naini that supplies a nearby hamlet.",
      },
    },
    audience: {
      heading: "Who Can Take Part",
      description:
        "Households in hill areas that get their daily drinking water from springs, panchayat taps or community tanks.",
      targetGroups: [
        "People who fetch and manage water at home",
        "Members of village water and sanitation committees, and panchayat leaders",
        "Residents who have noticed changes in the taste, colour or flow of their water",
        "Health workers in rural areas",
      ],
    },
    exploration: {
      heading: "What We're Asking About",
      intro:
        "Four questions about how people judge their water and what they do about it.",
      topics: [
        {
          title: "How Water Looks and Tastes",
          description:
            "How people decide water is safe from its clarity, taste, smell and any residue left in their pots.",
        },
        {
          title: "Are the Springs Drying Up?",
          description:
            "Whether old naulas and dharas give less water in the dry season, and what has changed on the land around them.",
        },
        {
          title: "Storing and Treating Water at Home",
          description:
            "How families make water safe to drink, from boiling and cloth filtering to copper vessels and modern filters.",
        },
        {
          title: "Taps or Springs?",
          description:
            "Whether people trust new piped water as much as their traditional springs.",
        },
      ],
    },
    significance: {
      heading: "Why It Matters",
      paragraphs: [
        "How people judge their water decides what they drink: treated supply, or spring water at the end of a long walk. Clear water isn't always safe, especially after heavy monsoon rain.",
        "Understanding what people already know and do helps build community water-testing programmes that respect traditional knowledge instead of dismissing it.",
      ],
      wideImage: {
        src: "/images/water-stream.jpg",
        alt: "A clear mountain stream running over smooth stones with ferns above it in Uttarakhand",
        caption: "A mountain stream in Uttarakhand.",
      },
    },
    closingStatement:
      "Safe water is about more than test results. It is also about the bond between hill villages and their springs.",
    participation: {
      status: "unconfirmed",
      formUrl: null,
      estimatedMinutes: 5,
      instructions:
        "This survey isn't open yet. We're waiting for the final protocol to be confirmed.",
      unavailableReason:
        "The questionnaire and its ethics approval are still being prepared. The form will open once approval is in place.",
      privacyNotice:
        "When the survey opens, responses will be anonymous. We won't keep names or location data.",
    },
    relatedSurveySlugs: [
      "preserving-traditional-ecological-knowledge",
      "wild-life-impact-hilly-regions",
      "public-transport-hill-regions",
    ],
  },
  {
    id: "4",
    slug: "community-market-dynamics",
    aliases: [],
    title: "Weekly Markets",
    subtitle: "How village haats keep small towns running",
    description: "How weekly markets support small-town life and livelihoods.",
    category: "Economics & Livelihoods",
    status: "completed",
    formUrl: "https://forms.gle/example4",
    forms: [
      { language: "English", url: "https://forms.gle/example4" },
    ],
    coverImage: "/images/survey-market.jpg",
    coverImageAlt:
      "An older vendor arranging vegetables at an outdoor market stall",
    estimatedMinutes: 10,
    startDate: "2026-03-01",
    endDate: "2026-06-30",
    languages: ["English"],
    featured: true,
    tags: ["markets", "economy", "community", "livelihoods"],
    objective:
      "To record the economic and social role of weekly rural markets and how they fit into local supply chains.",
    targetAudience:
      "Sellers, buyers and others who regularly visit weekly or fortnightly markets",
    privacyNote:
      "All responses are anonymous. No personal information was collected.",
    about: {
      heading: "More Than a Place to Shop",
      paragraphs: [
        "In small towns, the weekly haat is about much more than buying and selling. Farmers sell directly instead of going through middlemen, artisans trade baskets and iron tools, and relatives meet and catch up on news.",
        "Between March and June 2026, we looked at how many people come, how prices change through the seasons, and how small vendors give and take credit. Markets like these help local people cope when supply chains break down.",
      ],
      supportingImage: {
        src: "/images/market-vendor.jpg",
        alt: "An elderly woman selling fresh produce from woven baskets on the pavement",
        caption: "A grower selling seasonal produce from shallow woven baskets.",
      },
    },
    audience: {
      heading: "Who Took Part",
      description:
        "People who regularly visit three weekly markets shared their experiences.",
      targetGroups: [
        "Small farmers selling extra vegetables, grain and fruit",
        "Travelling traders selling spices, cloth and household goods",
        "Artisans and blacksmiths who repair tools and sell woodwork",
        "Local shoppers managing a weekly food budget",
      ],
    },
    exploration: {
      heading: "What We Looked At",
      intro: "The study covered four parts of market life.",
      topics: [
        {
          title: "Getting Goods to Market",
          description:
            "How sellers transport their goods, how far they carry them, and how their prices compare with what middlemen at the mandi pay.",
        },
        {
          title: "Credit and Trust",
          description:
            "How khata credit, delayed payment after harvest and mutual help between neighbouring stallholders work.",
        },
        {
          title: "Facilities",
          description:
            "Whether vendors have clean drinking water, shade, waste disposal and safe overnight storage.",
        },
        {
          title: "A Place to Meet",
          description:
            "How the market works as a meeting place for news, hiring and family matters, including talk of marriages.",
        },
      ],
    },
    significance: {
      heading: "Why It Matters",
      paragraphs: [
        "Big retail chains and delivery apps often treat weekly markets as old-fashioned and on their way out. In fact, they keep money circulating inside the local area and adapt well to changing seasons.",
        "The findings give town planners evidence to protect market grounds, improve sanitation for vendors, and think twice before bringing in rules that push vendors out.",
      ],
      wideImage: {
        src: "/images/market-stall.jpg",
        alt: "A market stall piled with fresh, colourful vegetables",
        caption: "A busy stall of fresh seasonal vegetables.",
      },
    },
    closingStatement:
      "The weekly market is the heart of a small town: a place where earning a living and meeting neighbours go hand in hand.",
    participation: {
      status: "completed",
      formUrl: "https://forms.gle/example4",
      forms: [
        { language: "English", url: "https://forms.gle/example4" },
      ],
      estimatedMinutes: 10,
      instructions: "Data collection for this study has ended.",
      unavailableReason:
        "We finished collecting data on 30 June 2026. We are now analysing the results and preparing a report.",
      privacyNotice:
        "All data is kept confidential and anonymised, following research ethics guidelines.",
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
    title: "Why Youth Leave the Hills",
    subtitle: "Studies, jobs and the pull of home",
    description: "Why young people leave hill towns, and what could make them stay.",
    category: "Demographics & Migration",
    status: "ongoing",
    formUrl: "https://forms.gle/example5",
    forms: [
      { language: "English", url: "https://forms.gle/example5" },
    ],
    coverImage: "/images/survey-migration.jpg",
    coverImageAlt:
      "A young man sitting on a bench at a bus stop above a valley in Shimla",
    estimatedMinutes: 7,
    startDate: "2026-08-01",
    endDate: "2027-02-28",
    languages: ["English", "Hindi"],
    featured: false,
    tags: ["migration", "youth", "employment", "hill towns"],
    objective:
      "To understand why young people leave hill towns, looking at education, jobs and quality of life.",
    targetAudience:
      "Young adults aged 18–35 who have left a hill town or still live in one",
    privacyNote:
      "Your responses are anonymous. We don't collect any personal information.",
    about: {
      heading: "Between Home and Opportunity",
      paragraphs: [
        "Many hill towns are changing fast. Parents and grandparents stay on in stone houses and terraced fields, while young people find few college options, few office jobs and high costs in the regional cities. Every year, many head to cities in the plains.",
        "Leaving is rarely easy. It means missing family, paying high rents in the city and longing for clean mountain air. This survey asks what makes people leave, what keeps them connected to home, and what would make it possible to build a career in the hills.",
      ],
      supportingImage: {
        src: "/images/migration-students.jpg",
        alt: "College students lining up to board a bus in Srinagar Garhwal",
        caption: "Students boarding a bus in Garhwal for their daily trip to college.",
      },
    },
    audience: {
      heading: "Who Can Take Part",
      description:
        "Young people aged 18 to 35 from the mountains and foothills, whether they still live there or have moved away.",
      targetGroups: [
        "School and college students thinking about moving away",
        "Graduates and young professionals who now live in cities in the plains",
        "Young entrepreneurs, teachers and remote workers who stayed or moved back",
        "Family members and mentors who have watched young people leave",
      ],
    },
    exploration: {
      heading: "What We're Asking About",
      intro:
        "Four themes: what people want, how they study, and what could bring them back.",
      topics: [
        {
          title: "Education and Training",
          description:
            "What is available locally: polytechnics, degrees and coaching for competitive exams.",
        },
        {
          title: "Jobs and Local Business",
          description:
            "How realistic it is to make a living in the hills through small business, tourism, organic farming or remote work.",
        },
        {
          title: "City Life vs Mountain Life",
          description:
            "How city salaries compare with pollution, high rents, loneliness and missing community.",
        },
        {
          title: "What Could Bring People Back",
          description:
            "Which things would make young people return, such as fast broadband, specialist healthcare or easier credit.",
        },
      ],
    },
    significance: {
      heading: "Why It Matters",
      paragraphs: [
        "When young people leave, villages are left mostly with older people. Terraced fields go unused and village traditions weaken. Language, stories and knowledge of the land stop being passed on.",
        "Hearing from young people themselves helps agencies plan practical youth policies, training funds and digital infrastructure that build mountain economies instead of draining them.",
      ],
      wideImage: {
        src: "/images/migration-almora-ridge.jpg",
        alt: "The hill town of Almora spread along a high ridge with mountains behind it",
        caption: "Almora on its ridge in Uttarakhand, where young people weigh staying against leaving.",
      },
    },
    closingStatement:
      "Hill towns will do well when young people stay because they want to, not because they have no choice.",
    participation: {
      status: "ongoing",
      formUrl: "https://forms.gle/example5",
      forms: [
        { language: "English", url: "https://forms.gle/example5" },
      ],
      estimatedMinutes: 7,
      instructions:
        "The survey is for people aged 18–35. It takes about 7 minutes on a phone or computer.",
      privacyNotice:
        "Your responses are anonymous. We don't collect names, phone numbers or job records.",
    },
    relatedSurveySlugs: [
      "digital-access-rural-communities",
      "public-transport-hill-regions",
      "wild-life-impact-hilly-regions",
    ],
  },
  {
    id: "6",
    slug: "preserving-traditional-ecological-knowledge",
    aliases: ["traditional-knowledge-preservation"],
    title: "Traditional Mountain Knowledge",
    subtitle: "Seeds, herbs, water channels and what elders know",
    description: "Recording how mountain communities pass down their knowledge of nature.",
    category: "Culture & Heritage",
    status: "unconfirmed",
    formUrl: null,
    coverImage: "/images/survey-tradition.jpg",
    coverImageAlt:
      "Brahmakamal, a sacred medicinal flower, blooming at 13,000 feet in Chamoli",
    estimatedMinutes: 12,
    startDate: "2027-03-01",
    languages: ["English", "Hindi"],
    featured: false,
    tags: ["traditional knowledge", "ecology", "culture", "heritage"],
    objective:
      "To record the traditional knowledge about nature that mountain communities hold, and to see how it is being passed on, kept or lost.",
    targetAudience:
      "Elders, farmers and cultural practitioners in mountain areas",
    privacyNote:
      "Your responses will be anonymous. We won't collect any personal information.",
    about: {
      heading: "Knowledge Handed Down for Centuries",
      paragraphs: [
        "Himalayan communities have spent generations learning to live with fragile mountain land. They read the weather from the flight of birds, gather medicinal plants at high altitude, and cut gool channels into the rock to carry water to their fields.",
        "Today, schools rarely teach local plants and many young people are moving away, so much of this knowledge now rests with village elders. This survey asks which parts are still used every day, which are at risk of being lost, and how communities would like to protect them.",
      ],
      supportingImage: {
        src: "/images/tradition-terrace.jpg",
        alt: "Stone-walled terraced fields with traditional water channels on a Himalayan slope in Uttarakhand",
        caption: "Dry-stone terraces and gravity-fed channels in Uttarakhand that hold moisture and stop soil from washing away.",
      },
    },
    audience: {
      heading: "Who Can Take Part",
      description:
        "For mountain farmers, herders, herbal healers (vaidyas), elders and anyone documenting local culture.",
      targetGroups: [
        "Farmers who still grow traditional varieties of millet, amaranth and pulses",
        "Herbal healers and people who forage for wild plants",
        "Elders who remember farming calendars and folk stories",
        "Young people and teachers interested in local heritage",
      ],
    },
    exploration: {
      heading: "What We're Asking About",
      intro: "Four areas of knowledge handed down in mountain communities.",
      topics: [
        {
          title: "Saving Seeds",
          description:
            "How seeds are stored and swapped, and how well traditional crops handle drought and pests.",
        },
        {
          title: "Wild Plants and Herbs",
          description:
            "What people know about wild greens, roots and medicinal herbs such as Brahmakamal and Kutki.",
        },
        {
          title: "Water Channels",
          description:
            "How communities look after gools, naulas and stone rainwater ponds.",
        },
        {
          title: "Passing It On",
          description:
            "How knowledge moves from village storytelling into writing, and from elders to young apprentices.",
        },
      ],
    },
    significance: {
      heading: "Why It Matters",
      paragraphs: [
        "As the climate becomes less predictable, traditional knowledge offers practical lessons. Local mixed millet crops, for example, can survive conditions where hybrid grains fail.",
        "Protecting this knowledge isn't nostalgia. It helps communities adapt, stay self-reliant and protect the variety of life in the mountains.",
      ],
      wideImage: {
        src: "/images/tradition-seed-storage.jpg",
        alt: "A craftsman weaving a bamboo Duli basket used to store seeds",
        caption: "A craftsman weaving a bamboo Duli basket, built to let air through and keep seeds safe.",
      },
    },
    closingStatement:
      "Traditional knowledge isn't just history. It is still a guide to living well with the mountains.",
    participation: {
      status: "unconfirmed",
      formUrl: null,
      estimatedMinutes: 12,
      instructions:
        "This survey isn't open yet. We're waiting for the final protocol to be confirmed.",
      unavailableReason:
        "We are still agreeing the research plan and consent process with local institutions. The survey will open once they are approved.",
      privacyNotice:
        "When the survey opens, shared knowledge will be credited following community protocols, and you can choose to stay anonymous.",
    },
    relatedSurveySlugs: [
      "wild-life-impact-hilly-regions",
      "local-water-quality-perception",
      "community-market-dynamics",
    ],
  },
  {
    id: "7",
    slug: "public-transport-hill-regions",
    aliases: [],
    title: "Hill Bus Services",
    subtitle: "Mountain routes, delays and daily commutes",
    description: "How reliable and accessible public transport is in the hills.",
    category: "Infrastructure",
    status: "completed",
    formUrl: "https://forms.gle/example7",
    forms: [
      { language: "English", url: "https://forms.gle/example7" },
    ],
    coverImage: "/images/survey-transport.jpg",
    coverImageAlt:
      "A state bus passing under a rock overhang at Taranda Dhank in Kinnaur",
    estimatedMinutes: 6,
    startDate: "2026-01-15",
    endDate: "2026-05-15",
    languages: ["English"],
    featured: false,
    tags: ["transport", "infrastructure", "accessibility", "hills"],
    objective:
      "To find out how satisfied commuters are with public transport in the hills and where the gaps in connections are.",
    targetAudience:
      "People who regularly use public transport in hill areas",
    privacyNote:
      "All responses are anonymous. No personal information was collected.",
    about: {
      heading: "The Bus as a Lifeline",
      paragraphs: [
        "In the mountains, buses and shared jeeps are essential. Early services take children to school across the valley, patients to the hospital, and farmers with their produce to market.",
        "From January to May 2026, we asked daily commuters on high mountain roads how often buses run, how they cope with winter disruptions, how crowded the buses get, and how far they walk to reach the nearest road.",
      ],
      supportingImage: {
        src: "/images/transport-bus-stop.jpg",
        alt: "A boy waiting at a roadside bus stop above a deep valley in Shimla",
        caption: "A boy waiting at a roadside bus stop above a deep valley in Shimla.",
      },
    },
    audience: {
      heading: "Who Took Part",
      description:
        "Regular commuters on main highways and remote link roads shared their experience.",
      targetGroups: [
        "School and college students who travel between valleys every day",
        "Patients and carers travelling to district hospitals",
        "Farmers taking produce, milk and goods to town markets",
        "Women commuters, who spoke about safety, reliable timings and getting home from the bus stop",
      ],
    },
    exploration: {
      heading: "What We Looked At",
      intro: "The study covered four parts of travelling in the hills.",
      topics: [
        {
          title: "Delays and Winter Closures",
          description:
            "Delays caused by landslides, snow, narrow single-lane roads and bus breakdowns.",
        },
        {
          title: "The Walk to the Road",
          description:
            "How long people walk uphill to reach the nearest bus stop from remote villages.",
        },
        {
          title: "Safety",
          description:
            "How safe people feel about vehicle brakes, driver skill and guardrails beside steep gorges.",
        },
        {
          title: "Fares and Concessions",
          description:
            "How fares affect low-income families, and how much student passes help.",
        },
      ],
    },
    significance: {
      heading: "Why It Matters",
      paragraphs: [
        "When bus services fall short, women, older people and children suffer most, since they can't afford private cars or taxis. If one afternoon bus is cancelled, a village can be cut off from emergency care and exams.",
        "The findings give state transport corporations evidence to use their buses better, repair dangerous road edges and prioritise remote branch routes.",
      ],
      wideImage: {
        src: "/images/transport-ridge-bus.jpg",
        alt: "A state bus on a rough mountain road heading toward Parashar",
        caption: "A bus climbing the Parashar ridge road.",
      },
    },
    closingStatement:
      "In the mountains, reliable transport is a basic right. It links remote ridges to the rest of the world.",
    participation: {
      status: "completed",
      formUrl: "https://forms.gle/example7",
      forms: [
        { language: "English", url: "https://forms.gle/example7" },
      ],
      estimatedMinutes: 6,
      instructions: "Data collection for this survey has ended.",
      unavailableReason:
        "We finished collecting data on 15 May 2026. The analysis is done, and we are writing a policy brief for regional transport planners.",
      privacyNotice:
        "All participant data was anonymised when collected, in line with institutional guidelines.",
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
    title: "Mental Health in Villages",
    subtitle: "Talking about stress, stigma and support",
    description: "How rural people see mental health and where they find support.",
    category: "Public Health",
    status: "unconfirmed",
    formUrl: null,
    coverImage: "/images/survey-health.jpg",
    coverImageAlt:
      "A person walking along a dirt lane through green fields in morning light",
    estimatedMinutes: 8,
    startDate: "2027-04-01",
    languages: ["English", "Hindi"],
    featured: false,
    tags: ["mental health", "stigma", "rural", "healthcare"],
    objective:
      "To understand how rural communities think about mental health, what stops people from asking for help, and what support already exists.",
    targetAudience: "Adults living in rural areas across India",
    privacyNote:
      "Your responses will be anonymous. We won't collect any personal information.",
    about: {
      heading: "Wellbeing in Village Life",
      paragraphs: [
        "In villages, emotional distress is often carried quietly. It may show up as tiredness, headaches or poor sleep rather than being called stress. There are few local words for it, and people worry about stigma and gossip, so many never talk about it.",
        "At the same time, villages have their own ways of helping: trusted elders, chats at the tea stall, family, and time spent outdoors. This survey asks how people understand and support wellbeing in their own words, without forcing clinical labels on them.",
      ],
      supportingImage: {
        src: "/images/health-conversation.jpg",
        alt: "Two people talking quietly on a shaded path",
        caption: "Two people talking quietly on a shaded path.",
      },
    },
    audience: {
      heading: "Who Can Take Part",
      description:
        "For community members, frontline health workers (ASHAs and ANMs), teachers and carers in rural districts.",
      targetGroups: [
        "Adults dealing with family, farming or money stress",
        "Frontline health workers, including ASHA, Anganwadi and ANM workers",
        "School teachers and local youth leaders",
        "People caring for elderly or long-term ill family members",
      ],
    },
    exploration: {
      heading: "What We're Asking About",
      intro:
        "A careful look at how communities understand distress and support each other.",
      topics: [
        {
          title: "Words for Distress",
          description:
            "The local words and physical complaints people use to describe emotional strain and exhaustion.",
        },
        {
          title: "Stigma and Privacy",
          description:
            "Fear of being shunned, worries about privacy in close-knit villages, and what makes it hard to open up.",
        },
        {
          title: "Health Worker Support",
          description:
            "What counselling training, time and referral options ASHA workers have.",
        },
        {
          title: "Informal Support",
          description:
            "How walks in nature, religious gatherings, shared work (paddi) and conversation with family help people.",
        },
      ],
    },
    significance: {
      heading: "Why It Matters",
      paragraphs: [
        "Farm uncertainty, crop failure, debt and isolation can take a heavy toll on rural families. Yet mental health services are mostly found in big-city hospitals, leaving village communities largely without them.",
        "Talking respectfully, and recording how communities already cope, is a first step toward reducing stigma and building care that starts in the community.",
      ],
      wideImage: {
        src: "/images/health-village-vista.jpg",
        alt: "A quiet hill village among rolling valley slopes in soft daylight",
        caption: "A quiet valley village in the morning light.",
      },
    },
    closingStatement:
      "Care starts with listening: giving people a calm, unhurried space to speak without fear of judgement.",
    participation: {
      status: "unconfirmed",
      formUrl: null,
      estimatedMinutes: 8,
      instructions:
        "This survey isn't open yet. We're waiting for the final protocol to be confirmed.",
      unavailableReason:
        "This is a sensitive topic, so the ethics review, consent process and referral support are still being checked. The survey will open once they are approved.",
      privacyNotice:
        "Participation will be anonymous and confidential. We will never collect clinical records, names or identifying details.",
    },
    relatedSurveySlugs: [
      "digital-access-rural-communities",
      "youth-migration-hill-towns",
      "local-water-quality-perception",
    ],
  },
];