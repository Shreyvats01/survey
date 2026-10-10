import type { Survey } from "@/types/survey";

export const surveys: Survey[] = [
  {
    id: "1",
    slug: "wild-animal-human-conflict",
    title: "Wild Animal–Human Conflict in Hilly Regions",
    description:
      "Understanding how encounters with wild animals affect daily life, agriculture, and safety in mountainous communities.",
    category: "Environment & Wildlife",
    status: "ongoing",
    formUrl: "https://forms.gle/example1",
    forms: [
      { language: "English", url: "https://forms.gle/example1" },
      { language: "Hindi", url: "https://forms.gle/example1hi" },
    ],
    coverImage: "/images/survey-wildlife.jpg",
    coverImageAlt:
      "A misty hillside village with terraced fields bordering dense forest",
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
  },
  {
    id: "2",
    slug: "rural-digital-access",
    title: "Digital Access in Rural Communities",
    description:
      "Exploring how internet connectivity and digital literacy shape opportunities in rural areas.",
    category: "Technology & Society",
    status: "ongoing",
    formUrl: "https://forms.gle/example2",
    coverImage: "/images/survey-digital.jpg",
    coverImageAlt:
      "A person using a smartphone at a small village shop",
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
  },
  {
    id: "3",
    slug: "local-water-quality",
    title: "Local Water Quality Perception",
    description:
      "How do communities perceive and respond to the quality of their daily water supply?",
    category: "Public Health",
    status: "upcoming",
    formUrl: null,
    coverImage: "/images/survey-water.jpg",
    coverImageAlt:
      "A natural spring flowing through rocks in a village setting",
    estimatedMinutes: 5,
    startDate: "2027-01-15",
    languages: ["English", "Hindi"],
    featured: false,
    tags: ["water", "health", "public services", "environment"],
    objective:
      "To understand community perceptions of water quality, identify common concerns about drinking water sources, and assess awareness of water purification practices.",
    targetAudience:
      "Households relying on local water sources such as springs, wells, and public taps",
  },
  {
    id: "4",
    slug: "community-market-dynamics",
    title: "Community Market Dynamics",
    description:
      "A study of how local weekly markets function as social and economic lifelines in small towns.",
    category: "Economics & Livelihoods",
    status: "completed",
    formUrl: "https://forms.gle/example4",
    coverImage: "/images/survey-market.jpg",
    coverImageAlt:
      "A busy local market scene with fresh produce and handmade goods",
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
  },
  {
    id: "5",
    slug: "youth-migration-patterns",
    title: "Youth Migration from Hill Towns",
    description:
      "Why are young people leaving hill towns, and what would make them stay?",
    category: "Demographics & Migration",
    status: "ongoing",
    formUrl: "https://forms.gle/example5",
    coverImage: "/images/survey-migration.jpg",
    coverImageAlt:
      "A winding mountain road leading away from a small hillside settlement",
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
  },
  {
    id: "6",
    slug: "traditional-knowledge-preservation",
    title: "Preserving Traditional Ecological Knowledge",
    description:
      "Documenting how traditional environmental knowledge is passed across generations in mountain communities.",
    category: "Culture & Heritage",
    status: "upcoming",
    formUrl: null,
    coverImage: "/images/survey-tradition.jpg",
    coverImageAlt:
      "An elder and younger person seated together in a terraced landscape",
    estimatedMinutes: 12,
    startDate: "2027-03-01",
    languages: ["English", "Hindi"],
    featured: false,
    tags: ["traditional knowledge", "ecology", "culture", "heritage"],
    objective:
      "To identify and document forms of traditional ecological knowledge in mountain communities and understand how this knowledge is being transmitted, preserved, or lost.",
    targetAudience:
      "Community elders, farmers, and cultural practitioners in mountainous regions",
  },
  {
    id: "7",
    slug: "public-transport-hill-regions",
    title: "Public Transport in Hill Regions",
    description:
      "Assessing the reliability, accessibility, and impact of public transport services in mountainous areas.",
    category: "Infrastructure",
    status: "completed",
    formUrl: "https://forms.gle/example7",
    coverImage: "/images/survey-transport.jpg",
    coverImageAlt:
      "A bus navigating a narrow mountain road with valley views",
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
  },
  {
    id: "8",
    slug: "mental-health-awareness-rural",
    title: "Mental Health Awareness in Rural Areas",
    description:
      "Understanding mental health perceptions, stigma, and access to support in rural communities.",
    category: "Public Health",
    status: "upcoming",
    formUrl: null,
    coverImage: "/images/survey-health.jpg",
    coverImageAlt:
      "A quiet village path surrounded by fields and distant mountains",
    estimatedMinutes: 8,
    startDate: "2027-04-01",
    languages: ["English", "Hindi"],
    featured: false,
    tags: ["mental health", "stigma", "rural", "healthcare"],
    objective:
      "To gauge awareness and attitudes toward mental health in rural communities, identify barriers to seeking help, and understand existing support networks.",
    targetAudience: "Adults living in rural communities across India",
  },
];
