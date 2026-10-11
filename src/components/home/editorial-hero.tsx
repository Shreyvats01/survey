

import { Link } from "react-router";
import { ArrowDown } from "lucide-react";
import { Container } from "@/components/shared/container";
import { surveys } from "@/data/surveys";
import { HeroImageCollage } from "./hero-image-collage";

export function EditorialHero() {
  const scrollToFeatured = () => {
    document.getElementById("featured-surveys")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative z-10 overflow-hidden pt-0 pb-12 md:pb-20 lg:pb-28">
      <Container className="max-w-none px-5 md:px-8 lg:px-8 lg:pt-2">
        {/* Editorial hero composition */}
        <h1 className="hero__title relative flex flex-col gap-4 lg:block lg:h-[360px]">
          {/* First headline and upper-right image */}
          <div className="hero__text hero__text--one relative flex flex-col gap-4 lg:absolute lg:inset-x-0 lg:top-0 lg:block lg:h-[180px]">
            <span className="relative z-10 select-none pointer-events-none font-sans text-[clamp(2.75rem,7.2vw,7.2rem)] font-normal leading-[1.05] tracking-[-0.02em] text-plum lg:absolute lg:left-0 lg:top-[22px] lg:whitespace-nowrap lg:text-[clamp(4rem,7.8vw,6.4rem)] lg:leading-[0.95] lg:tracking-[-0.05em] xl:text-[120px]">
              A curated collection
            </span>

            <div className="hero__image hero__image--one relative z-0 lg:absolute lg:left-[56.5%] lg:top-0 lg:h-[180px] lg:w-[320px]">
              <HeroImageCollage slot="slot1" />
            </div>
          </div>

          {/* Second headline and lower-left image */}
          <div className="hero__text hero__text--two relative flex flex-col gap-4 text-right lg:absolute lg:inset-x-0 lg:top-0 lg:block lg:h-full">
            <div className="hero__image hero__image--two relative z-0 hidden lg:absolute lg:left-[17.5%] lg:top-[180px] lg:block lg:h-[180px] lg:w-[320px]">
              <HeroImageCollage slot="slot2" />
            </div>

            <span className="relative z-10 select-none pointer-events-none font-serif text-[clamp(3.1rem,8vw,7.8rem)] font-normal leading-[1.05] text-plum lg:absolute lg:left-[25%] lg:top-[204px] lg:w-max lg:whitespace-nowrap lg:text-left lg:text-[clamp(4rem,7.8vw,6.4rem)] lg:leading-[0.95] lg:tracking-[-0.04em] xl:left-[33.5%] xl:text-[120px]">
              of Human Inquiries
            </span>
          </div>
        </h1>

        {/* Bottom controls */}
        <div className="mt-14 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between sm:mt-18 md:mt-24 lg:mt-24 xl:mt-24">
          <button
            type="button"
            onClick={scrollToFeatured}
            className="group inline-flex cursor-pointer items-center gap-3.5 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-plum"
            aria-label="Scroll to featured surveys"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-plum text-cream transition-transform duration-300 group-hover:translate-y-0.5">
              <ArrowDown className="h-4 w-4" />
            </span>

            <span className="font-sans text-sm font-medium text-plum md:text-base">
              Featured surveys
            </span>
          </button>

          <Link
            to="/archive"
            className="inline-flex items-center justify-center rounded-full border border-plum/40 px-8 py-3.5 font-serif text-lg text-plum transition-all duration-300 hover:border-plum hover:bg-plum hover:text-cream focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-plum md:text-xl"
            
          >
            Browse all {surveys.length} surveys
            <span className="ml-3" aria-hidden="true">→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
