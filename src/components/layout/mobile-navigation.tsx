import { useState, useEffect, useCallback, useRef } from "react";
import { Link, useLocation } from "react-router";
import { X, Menu } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { BrandMark } from "@/components/shared/brand-mark";
import { cn } from "@/lib/utils";

interface NavLink {
  to: string;
  label: string;
}

interface MobileNavigationProps {
  navLinks: NavLink[];
}

export function MobileNavigation({ navLinks }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  // Close on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Focus close button on open
      setTimeout(() => closeRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Escape key handler
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    },
    [isOpen]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const handleClose = () => {
    setIsOpen(false);
    triggerRef.current?.focus();
  };

  return (
    <div className="md:hidden">
      {/* Circular menu trigger */}
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen(true)}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-plum text-cream transition-transform duration-200 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum"
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
        aria-controls="mobile-nav-overlay"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Full-screen overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-overlay"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex flex-col bg-nav-dark"
          >
            {/* Overlay header */}
            <div className="flex items-center justify-between px-5 py-5">
              <Link
                to="/"
                onClick={handleClose}
                className="flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-nav-text"
                aria-label="Home"
              >
                <BrandMark size="sm" className="text-nav-text" />
                <span className="text-sm font-semibold text-nav-text">
                  Survey Archive
                </span>
              </Link>
              <button
                ref={closeRef}
                type="button"
                onClick={handleClose}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-nav-text/20 text-nav-text transition-colors duration-200 hover:bg-nav-text/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nav-text"
                aria-label="Close navigation menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Navigation links */}
            <nav
              className="flex flex-1 flex-col justify-center px-5"
              aria-label="Mobile navigation"
            >
              <ul className="space-y-2">
                {navLinks.map(({ to, label }, index) => (
                  <motion.li
                    key={to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.1 + index * 0.06,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      to={to}
                      onClick={handleClose}
                      className={cn(
                        "block py-2 font-serif text-[2.5rem] leading-[1.15] transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-nav-text sm:text-5xl",
                        location.pathname === to
                          ? "text-white"
                          : "text-nav-text/70"
                      )}
                    >
                      {label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Footer links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="px-5 pb-8"
            >
              <div className="space-y-1 text-sm text-nav-text/50">
                <a
                  href="mailto:hello@shrey.online"
                  className="block transition-colors hover:text-nav-text"
                >
                  Contact
                </a>
                <span className="block">
                  © {new Date().getFullYear()} Shrey's Survey Archive
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
