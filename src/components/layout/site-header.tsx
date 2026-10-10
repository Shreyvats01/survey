import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router";
import { BrandMark } from "@/components/shared/brand-mark";
import { MobileNavigation } from "./mobile-navigation";

const navLinks = [
  { to: "/", label: "Surveys" },
  { to: "/archive", label: "Archive" },
  { to: "/methodology", label: "Methodology" },
  { to: "/about", label: "About" },
];

export function SiteHeader() {
  const location = useLocation();

  return (
    <header className="relative z-30 w-full">
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-5 py-5 md:px-8 md:py-6 lg:px-12 lg:py-8">
        {/* Brand */}
        <Link
          to="/"
          className="group flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-plum"
          aria-label="Shrey's Survey Archive — Home"
        >
          <BrandMark size="md" className="text-plum transition-transform duration-300 group-hover:scale-105" />
          <div className="hidden sm:block">
            <span className="text-sm font-semibold leading-tight text-plum">
              Survey Archive
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={cn(
                "relative text-sm font-medium tracking-wide transition-colors duration-200 hover:text-plum",
                location.pathname === to
                  ? "text-plum"
                  : "text-plum/60"
              )}
            >
              {label}
              {location.pathname === to && (
                <span className="absolute -bottom-1 left-0 h-px w-full bg-plum/40" />
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <MobileNavigation navLinks={navLinks} />
      </div>
    </header>
  );
}
