import { useEffect } from "react";
import { motion } from "motion/react";
import { Container } from "@/components/shared/container";

export function MethodologyPage() {
  useEffect(() => {
    document.title = "Methodology — Survey Directory";
  }, []);

  return (
    <div className="relative z-10 flex-1">
      <Container className="py-8 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl"
        >
          <h1 className="font-serif text-3xl sm:text-4xl text-plum md:text-5xl break-words">
            Methodology
          </h1>

          <div className="mt-10 space-y-8 text-base leading-relaxed text-plum/65">
            <section>
              <h2 className="mb-3 font-serif text-2xl text-plum">Survey design</h2>
              <p>
                Each survey is designed to be concise, accessible, and respectful
                of participants' time. Questions are structured to minimize bias
                while capturing meaningful qualitative and quantitative insights.
                Most surveys take between 5 and 12 minutes to complete.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-serif text-2xl text-plum">Distribution</h2>
              <p>
                Surveys are distributed through this website, social media, local
                community networks, and direct outreach. The goal is to reach
                people who are directly affected by or involved in the topics
                being studied.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-serif text-2xl text-plum">Language accessibility</h2>
              <p>
                Where possible, surveys are offered in multiple languages to ensure
                broader participation. Currently, English and Hindi versions are
                provided for surveys targeting communities in India.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-serif text-2xl text-plum">Data handling</h2>
              <p>
                All responses are collected through Google Forms and stored securely
                on Google's infrastructure. Individual responses are not shared
                publicly. Aggregated findings may be shared in future publications
                on this website.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-serif text-2xl text-plum">Ethical considerations</h2>
              <p>
                Participation in every survey is completely voluntary. No personally
                identifiable information is collected unless explicitly required and
                clearly stated. Participants may stop at any time without consequence.
              </p>
            </section>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
