import type { Survey } from "@/types/survey";

interface SurveySignificanceProps {
  survey: Survey;
}

export function SurveySignificance({ survey }: SurveySignificanceProps) {
  const paragraphs =
    survey.significance?.paragraphs && survey.significance.paragraphs.length > 0
      ? survey.significance.paragraphs
      : [
          survey.objective ||
            "Understanding community perspectives on this subject provides essential contextual evidence that administrative datasets frequently overlook.",
          "Documenting granular lived realities supports responsive, locally led advocacy and ensures regional policies reflect authentic ground realities rather than distant assumptions.",
        ];

  const wideImage =
    survey.significance?.wideImage ||
    (survey.about?.supportingImage
      ? {
          src: survey.about.supportingImage.src,
          alt: survey.about.supportingImage.alt,
          caption: survey.about.supportingImage.caption,
        }
      : {
          src: survey.coverImage,
          alt: survey.coverImageAlt,
          caption: "Field documentation and community landscape context.",
        });

  return (
    <div className="block-section w-full bg-[#ece4df] py-16 sm:py-20 md:py-24 xl:py-28">
      <div className="wrap mx-auto max-w-[1376px] px-4 sm:px-8 mb-8 md:mb-12">
        <h2 className="block-section__heading font-serif text-3xl sm:text-4xl md:text-5xl text-plum pb-1.5">
          Significance
        </h2>
      </div>

      <div className="block-section__blocks space-y-10 sm:space-y-12 md:space-y-16">
        {/* Block 1: 660px editorial prose */}
        <div className="block-text">
          <div className="wrap mx-auto max-w-[1376px] px-4 sm:px-8">
            <div className="max-w-[660px] space-y-4 font-sans text-base md:text-lg leading-[1.6] text-plum/90">
              {paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Block 2: Full-bleed photographic monument with 24-40px radius */}
        <div className="block-image">
          <div className="wrap mx-auto max-w-[1376px] px-4 sm:px-8">
            <div className="block-image__image overflow-hidden rounded-[24px] md:rounded-[32px] xl:rounded-[40px]">
              <img
                src={wideImage.src}
                alt={wideImage.alt}
                className="w-full h-auto object-cover aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/9]"
                loading="lazy"
                width={1376}
                height={590}
              />
            </div>
            {wideImage.caption && (
              <div className="block-image__caption mt-2.5 text-base text-plum/70 font-sans">
                {wideImage.caption}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
