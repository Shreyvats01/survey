import { useEffect } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/shared/container";
import { BrandMark } from "@/components/shared/brand-mark";

export function NotFoundPage() {
  useEffect(() => {
    document.title = "Page Not Found — Survey Directory";
  }, []);

  return (
    <div className="relative z-10 flex flex-1 items-center justify-center">
      <Container className="py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-md"
        >
          <BrandMark size="lg" className="mx-auto mb-6 text-plum/30" />
          <h1 className="font-serif text-5xl text-plum md:text-6xl">404</h1>
          <p className="mt-4 text-lg text-plum/60">
            This page doesn't exist — or perhaps the survey has moved.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-plum/30 px-6 py-3 text-sm font-medium text-plum transition-colors hover:bg-plum hover:text-cream"
            >
              <ArrowLeft className="h-4 w-4" />
              Back home
            </Link>
            <Link
              to="/archive"
              className="inline-flex items-center gap-2 rounded-full bg-plum px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-plum/85"
            >
              Browse archive
            </Link>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
