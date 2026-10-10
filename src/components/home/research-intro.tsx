import { motion } from "motion/react";
import { Container } from "@/components/shared/container";

export function ResearchIntro() {
  return (
    <section className="relative z-10 py-12 md:py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-serif text-2xl leading-snug text-plum md:text-3xl lg:text-4xl">
            Surveys that listen to real communities
          </h2>
          <p className="mt-5 text-base leading-relaxed text-plum/55 md:text-lg">
            Each survey here is designed to capture perspectives from people whose voices
            often go unheard — rural residents, hill-town youth, local vendors, and
            everyday citizens navigating shared challenges. Your responses help build a
            clearer picture of the world we live in.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
