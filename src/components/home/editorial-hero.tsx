import { motion } from "motion/react";
import { Container } from "@/components/shared/container";

export function EditorialHero() {
  return (
    <section className="relative z-10 overflow-hidden pb-8 pt-4 md:pb-16 md:pt-8 lg:pb-24 lg:pt-12">
      <Container className="max-w-[1200px]">
        {/* Hero composition */}
        <div className="relative">
          {/* Line 1: "A collection of questions" with overlapping image */}
          <div className="relative">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-[clamp(2.8rem,8vw,7.5rem)] font-normal leading-[0.95] tracking-[-0.02em] text-plum"
            >
              A collection of questions
            </motion.h1>

            {/* First image - overlaps the text, positioned to the right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative mt-6 ml-auto w-[70%] max-w-[500px] md:absolute md:right-0 md:top-[-10%] md:w-[45%] md:max-w-[420px]"
            >
              <div className="overflow-hidden rounded-2xl bg-plum/5">
                <div className="aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80&auto=format"
                    alt="Open notebooks and research materials spread across a desk"
                    className="h-full w-full object-cover"
                    width={800}
                    height={600}
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Line 2: "about the world" with second image */}
          <div className="relative mt-6 md:mt-4">
            {/* Second image - positioned left, behind/beside text */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-4 w-[55%] max-w-[380px] md:absolute md:left-[5%] md:top-[0%] md:z-10 md:mb-0 md:w-[35%] md:max-w-[350px]"
            >
              <div className="overflow-hidden rounded-2xl bg-plum/5">
                <div className="aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=800&q=80&auto=format"
                    alt="Hands filling out a form during a community gathering"
                    className="h-full w-full object-cover"
                    width={800}
                    height={600}
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-right font-serif text-[clamp(2.8rem,8vw,7.5rem)] font-normal italic leading-[0.95] tracking-[-0.02em] text-plum md:relative md:z-20"
            >
              about the world we share.
            </motion.p>
          </div>
        </div>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 max-w-lg text-base leading-relaxed text-plum/60 md:mt-16 md:text-lg"
        >
          Explore surveys about communities, everyday challenges, and the
          issues that shape our lives. Your perspective matters.
        </motion.p>
      </Container>
    </section>
  );
}
