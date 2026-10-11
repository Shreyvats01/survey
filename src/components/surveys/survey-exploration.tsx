import type { Survey, ExplorationTopic } from "@/types/survey";

interface SurveyExplorationProps {
  survey: Survey;
}

const defaultExplorationImages: Record<
  string,
  { src: string; alt: string; caption: string }
> = {
  "1": {
    src: "/images/wildlife-terrace.jpg",
    alt: "Steep terraced mountain village bordering pine forest",
    caption:
      "Terraced cultivation along forest contours where human-wildlife encounters are actively documented.",
  },
  "2": {
    src: "/images/digital-market.jpg",
    alt: "Rural artisan utilizing digital tools at local market",
    caption:
      "Field documentation of intermittent network access and device sharing routines.",
  },
  "3": {
    src: "/images/water-naula.jpg",
    alt: "Traditional mountain spring sanctuary and water harvesting channel",
    caption:
      "Mapping community-managed gravity water distribution and seasonal turbidity records.",
  },
  "4": {
    src: "/images/market-vendor.jpg",
    alt: "Weekly market stall vendor arranging local farm produce",
    caption:
      "Recording transaction methods, seasonal price resilience, and regional trading corridors.",
  },
  "5": {
    src: "/images/transport-ridge-bus.jpg",
    alt: "Regional transit bus negotiating steep mountain ridge road",
    caption:
      "Tracking transit frequencies, schedule reliability, and commute barriers.",
  },
  "6": {
    src: "/images/tradition-seed-storage.jpg",
    alt: "Traditional wooden vernacular seed storehouse and craft tools",
    caption:
      "Documenting generational agricultural knowledge systems and artisan practices.",
  },
  "7": {
    src: "/images/health-conversation.jpg",
    alt: "Community health worker consulting with village elders",
    caption:
      "Evaluating primary clinic access, emergency transit times, and community health networks.",
  },
  "8": {
    src: "/images/migration-students.jpg",
    alt: "Youth gathering at hillside transit point discussing educational opportunities",
    caption:
      "Examining regional migration drivers, vocational shifts, and local livelihood viability.",
  },
};

export function SurveyExploration({ survey }: SurveyExplorationProps) {
  const introCopy =
    survey.exploration?.intro ||
    survey.objective ||
    "Our inquiry is structured across key empirical dimensions to illuminate both systemic interactions and granular lived realities.";

  const fallbackTopics: ExplorationTopic[] = [
    {
      title: "Contextual Frameworks & Local Patterns",
      description:
        "Documenting spatial and social variations across affected communities and settlements.",
    },
    {
      title: "Lived Experience & Everyday Coping",
      description:
        "Gathering ground-level strategies, adaptation measures, and collective routines.",
    },
    {
      title: "Structural & Institutional Interactions",
      description:
        "Evaluating access to municipal, state, or civic infrastructure and support channels.",
    },
    {
      title: "Aspirations & Future Trajectories",
      description:
        "Understanding prospective community priorities and evidence-based policy directions.",
    },
  ];

  const topics: ExplorationTopic[] =
    survey.exploration?.topics && survey.exploration.topics.length > 0
      ? survey.exploration.topics
      : fallbackTopics;

  const explorationImage =
    survey.exploration?.gallery?.[0] ||
    defaultExplorationImages[survey.id] || {
      src: survey.about?.supportingImage?.src || survey.coverImage,
      alt: survey.about?.supportingImage?.alt || survey.coverImageAlt,
      caption:
        survey.about?.supportingImage?.caption ||
        "Empirical field documentation and community interaction points.",
    };

  return (
    <div className="block-section w-full bg-[#ddd3cc] py-16 sm:py-20 md:py-24 xl:py-28">
      <div className="wrap mx-auto max-w-[1376px] px-4 sm:px-8 mb-8 md:mb-12">
        <h2 className="block-section__heading font-serif text-3xl sm:text-4xl md:text-5xl text-plum pb-1.5">
          Approach
        </h2>
      </div>

      <div className="block-section__blocks">
        <div className="block-imagetext block-imagetext--left">
          <div className="wrap mx-auto max-w-[1376px] px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* 2-column image on left on desktop */}
            <div className="block-imagetext__image lg:col-span-2 lg:order-1">
              <img
                src={explorationImage.src}
                alt={explorationImage.alt}
                className="w-full h-auto object-cover rounded-[24px] md:rounded-[32px] xl:rounded-[40px] aspect-[16/10] sm:aspect-[16/9]"
                loading="lazy"
                width={1248}
                height={780}
              />
              {explorationImage.caption && (
                <div className="block-imagetext__caption mt-2.5 text-base text-plum/70 font-sans">
                  {explorationImage.caption}
                </div>
              )}
            </div>

            {/* 1-column narrative prose on right on desktop */}
            <div className="block-imagetext__text lg:col-span-1 lg:order-2 space-y-4 font-sans text-base md:text-lg leading-[1.6] text-plum/90">
              <p className="font-sans text-base md:text-lg leading-[1.6] text-plum/95">
                {introCopy}
              </p>
              <div className="space-y-3 pt-2">
                {topics.map((topic, idx) => (
                  <div key={idx} className="space-y-1">
                    <h3 className="font-serif text-lg md:text-xl text-plum leading-snug">
                      {topic.title}
                    </h3>
                    <p className="text-sm md:text-base text-plum/80 leading-relaxed font-sans">
                      {topic.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
