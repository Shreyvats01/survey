import type { Survey } from "@/types/survey";

interface SurveyAboutProps {
  survey: Survey;
}

export function SurveyAbout({ survey }: SurveyAboutProps) {
  const heading = survey.about?.heading || `What's "${survey.title}"?`;
  const paragraphs =
    survey.about?.paragraphs && survey.about.paragraphs.length > 0
      ? survey.about.paragraphs
      : [
          survey.description,
          survey.objective ||
            "This inquiry brings rigorous empirical grounding to everyday challenges, gathering first-hand community observations to inform public understanding and responsive policy.",
        ];

  const supportingImage = survey.about?.supportingImage;
  const imageSrc = supportingImage?.src || survey.coverImage;
  const imageAlt = supportingImage?.alt || survey.coverImageAlt;
  const caption = supportingImage?.caption || supportingImage?.alt;

  return (
    <div className="block-section w-full bg-[#ddd3cc] py-16 sm:py-20 md:py-24 xl:py-28">
      <div className="wrap mx-auto max-w-[1376px] px-4 sm:px-8 mb-8 md:mb-12">
        <h2 className="block-section__heading font-serif text-3xl sm:text-4xl md:text-5xl text-plum pb-1.5">
          {heading}
        </h2>
      </div>

      <div className="block-section__blocks">
        <div className="block-imagetext block-imagetext--right">
          <div className="wrap mx-auto max-w-[1376px] px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* 2-column image on right on desktop */}
            <div className="block-imagetext__image lg:col-span-2 lg:order-2">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-auto object-cover rounded-[24px] md:rounded-[32px] xl:rounded-[40px] aspect-[16/10] sm:aspect-[16/9]"
                loading="lazy"
                width={1248}
                height={780}
              />
              {caption && (
                <div className="block-imagetext__caption mt-2.5 text-base text-plum/70 font-sans">
                  {caption}
                </div>
              )}
            </div>

            {/* 1-column narrative prose on left on desktop */}
            <div className="block-imagetext__text lg:col-span-1 lg:order-1 space-y-4 font-sans text-base md:text-lg leading-[1.6] text-plum/90">
              {paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
