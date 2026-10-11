import type { Survey } from "@/types/survey";

interface SurveyClosingProps {
  survey: Survey;
}

export function SurveyClosing({ survey }: SurveyClosingProps) {
  const statement =
    survey.closingStatement ||
    "Every inquiry begins with an invitation to listen: understanding grounded realities is the foundation of respectful community research.";

  return (
    <div className="block-section w-full bg-[#ddd3cc] py-20 sm:py-24 md:py-32 xl:py-40">
      <div className="block-section__blocks">
        <div className="block-largetext">
          <div className="wrap mx-auto max-w-[1376px] px-4 sm:px-8">
            <p className="font-sans font-normal text-[32px] md:text-[48px] lg:text-[64px] xl:text-[80px] leading-[1.25] text-plum max-w-[1100px]">
              {statement}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
