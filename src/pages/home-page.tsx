import { EditorialHero } from "@/components/home/editorial-hero";
import { ResearchIntro } from "@/components/home/research-intro";
import { FeaturedSurveys } from "@/components/home/featured-surveys";
import { SurveyCollection } from "@/components/home/survey-collection";
import { Container } from "@/components/shared/container";
import { motion } from "motion/react";

export function HomePage() {
  return (
    <main className="relative z-10 flex-1">
      <EditorialHero />
      <ResearchIntro />
      <FeaturedSurveys />
      <SurveyCollection />

      {/* Participation statement */}
      <section className="relative z-10 py-12 md:py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-xl rounded-2xl border border-plum/10 bg-cream-light/50 p-8 text-center md:p-10"
          >
            <h2 className="font-serif text-xl text-plum md:text-2xl">
              How participation works
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-plum/55">
              Every survey listed here is hosted on Google Forms. When you choose
              to participate, you will be redirected to the official Google Forms
              interface where your response is securely collected. No data is
              collected through this website.
            </p>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}
