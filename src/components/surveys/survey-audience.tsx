import type { Survey, AudienceGroup } from "@/types/survey";

interface SurveyAudienceProps {
  survey: Survey;
}

export function SurveyAudience({ survey }: SurveyAudienceProps) {
  const scopeNarrative =
    survey.audience?.description ||
    survey.targetAudience ||
    "We invite participants whose daily lived experience, local work, or community observations intersect with this inquiry.";

  const rawGroups =
    survey.audience?.targetGroups && survey.audience.targetGroups.length > 0
      ? survey.audience.targetGroups
      : [
          "Community members and residents residing in the focus region",
          "Local practitioners, farmers, or municipal workers navigating these conditions daily",
          "Educators, researchers, and civil society representatives active in the area",
          "Households and commuters with direct experiential perspectives to share",
        ];

  const parsedGroups: AudienceGroup[] = rawGroups.map((g) => {
    if (typeof g === "object" && g !== null) {
      return g;
    }
    const str = String(g);
    if (str.includes("—")) {
      const [title, desc] = str.split("—");
      return { title: title.trim(), description: desc.trim() };
    }
    if (str.includes(":")) {
      const [title, desc] = str.split(":");
      return { title: title.trim(), description: desc.trim() };
    }
    return { title: str };
  });

  return (
    <div className="block-section w-full bg-[#ece4df] py-16 sm:py-20 md:py-24 xl:py-28">
      <div className="wrap mx-auto max-w-[1376px] px-4 sm:px-8 mb-8 md:mb-12">
        <h2 className="block-section__heading font-serif text-3xl sm:text-4xl md:text-5xl text-plum pb-1.5">
          Who's it for?
        </h2>
      </div>

      <div className="block-section__blocks">
        <div className="block-text">
          <div className="wrap mx-auto max-w-[1376px] px-4 sm:px-8">
            <div className="max-w-[660px] space-y-4 font-sans text-base md:text-lg leading-[1.6] text-plum/90">
              <p>{scopeNarrative}</p>
              {parsedGroups && parsedGroups.length > 0 && (
                <div className="space-y-3 pt-2">
                  {parsedGroups.map((group, idx) => (
                    <p key={idx}>
                      <strong className="font-medium text-plum">
                        {group.title}
                      </strong>
                      {group.description ? ` — ${group.description}` : ""}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
