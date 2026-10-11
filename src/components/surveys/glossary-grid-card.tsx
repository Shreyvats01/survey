import { motion } from "motion/react";
import { Link } from "react-router";
import { cn } from "@/lib/utils";

export interface GlossaryGridCardProps {
  term?: string;
  pronunciation?: string;
  definition?: string;
  href?: string;
  buttonText?: string;
  index?: number;
  className?: string;
}

export function GlossaryGridCard({
  term = "Research through Design (RtD)",
  pronunciation,
  definition = "An approach to research and knowledge production built on the premise that when we engage in design practice and creative making, we discover actionable insights about the world and future possibilities.",
  href = "/about",
  buttonText = "Explore glossary",
  index = 0,
  className,
}: GlossaryGridCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className={cn(
        "group flex h-full flex-col justify-between overflow-hidden rounded-[24px] bg-[#12212B] p-6 text-[#d7ccdd] min-[688px]:rounded-[32px] min-[992px]:p-8 min-[1312px]:rounded-[40px] min-[1312px]:p-10",
        className
      )}
      data-grid-item
    >
      <div className="flex flex-1 flex-col">
        {pronunciation && (
          <span className="mb-2 font-mono text-xs tracking-wider opacity-60">
            {pronunciation}
          </span>
        )}
        <h2 className="mb-4 font-sans text-[32px] font-normal leading-[1.15] text-[#d7ccdd] text-balance min-[1312px]:mb-5 min-[1312px]:text-[36px]">
          {term}
        </h2>
        <div className="relative mb-6 h-[100px] flex-1 overflow-hidden text-base leading-[1.5] text-[#d7ccdd] after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[60px] after:bg-gradient-to-t after:from-[#12212B] after:to-transparent">
          <p className="m-0 text-base leading-[1.5] text-[#d7ccdd] text-balance">
            {definition}
          </p>
        </div>
      </div>

      <div className="mt-auto pt-2">
        <Link
          to={href}
          className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-[#d7ccdd] px-6 py-3 font-sans text-sm font-semibold text-[#12212B] transition-colors duration-200 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d7ccdd]"
        >
          <span>{buttonText}</span>
        </Link>
      </div>
    </motion.article>
  );
}
