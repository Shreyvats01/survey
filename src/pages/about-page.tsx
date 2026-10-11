import { useEffect } from "react";
import { motion } from "motion/react";
import { Container } from "@/components/shared/container";

export function AboutPage() {
  useEffect(() => {
    document.title = "About — Survey Directory";
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
            About this archive
          </h1>

          <div className="mt-10 space-y-8 text-base leading-relaxed text-plum/65">
            <section>
              <h2 className="mb-3 font-serif text-2xl text-plum">Who maintains this?</h2>
              <p>
                This survey archive is maintained by Shrey as a personal research
                initiative. It is not affiliated with any academic institution,
                corporation, or government body.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-serif text-2xl text-plum">What are these surveys about?</h2>
              <p>
                The surveys cover a range of topics related to community life,
                public services, environmental challenges, cultural heritage, and
                social dynamics — particularly in rural and mountainous regions.
                Each survey is designed to capture perspectives from people whose
                experiences are underrepresented in mainstream data.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-serif text-2xl text-plum">How do I participate?</h2>
              <p>
                Every survey is hosted on Google Forms. When you click a survey's
                participation link, you are redirected to the official Google Forms
                interface. This website does not collect, store, or process any
                survey responses.
              </p>
            </section>

            <section id="privacy" className="scroll-mt-8">
              <h2 className="mb-3 font-serif text-2xl text-plum">Privacy Policy</h2>
              <p>
                All survey responses are anonymous unless explicitly stated
                otherwise in the individual survey. No cookies, analytics trackers,
                or third-party scripts are used on this website beyond what is
                necessary for its operation.
              </p>
            </section>

            <section id="accessibility" className="scroll-mt-8">
              <h2 className="mb-3 font-serif text-2xl text-plum">Accessibility Statement</h2>
              <p>
                We are committed to making this survey directory accessible to everyone.
                The interface follows WCAG 2.1 AA standards, featuring full keyboard
                navigation, focus management, minimum 44x44px touch targets on mobile
                devices, and support for prefers-reduced-motion settings.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-serif text-2xl text-plum">Contact</h2>
              <p>
                For questions, suggestions, or collaboration inquiries, reach out
                at{" "}
                <a
                  href="mailto:hello@shrey.online"
                  className="text-plum underline decoration-plum/30 underline-offset-2 transition-colors hover:decoration-plum"
                >
                  hello@shrey.online
                </a>
                .
              </p>
            </section>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
