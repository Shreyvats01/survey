import { Link } from "react-router";
import { BrandMark } from "@/components/shared/brand-mark";
import { Container } from "@/components/shared/container";

const footerLinks = [
  { to: "/", label: "Surveys" },
  { to: "/archive", label: "Archive" },
  { to: "/methodology", label: "Methodology" },
  { to: "/about", label: "About" },
];

export function SiteFooter() {
  return (
    <footer className="relative z-10 mt-auto border-t border-plum/10 py-12 md:py-16">
      <Container>
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <Link
              to="/"
              className="inline-flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-plum"
              aria-label="Home"
            >
              <BrandMark size="sm" className="text-plum" />
              <span className="text-sm font-semibold text-plum">
                Survey Directory
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-plum/50">
              A curated collection of surveys about communities, everyday
              challenges, and the issues that shape our lives.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-plum/40">
              Navigation
            </h3>
            <ul className="space-y-1">
              {footerLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="inline-block py-1.5 text-sm text-plum/60 transition-colors duration-200 hover:text-plum"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Info */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-plum/40">
              About
            </h3>
            <div className="space-y-2 text-sm text-plum/50">
              <p>
                All surveys are conducted through Google Forms.
              </p>
              <p>
                Responses are anonymous unless stated otherwise in
                individual surveys.
              </p>
              <a
                href="mailto:hello@shrey.online"
                className="inline-block text-plum/60 transition-colors hover:text-plum"
              >
                hello@shrey.online
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-plum/10 pt-6 text-xs text-plum/40 sm:flex-row">
          <span>© {new Date().getFullYear()} Survey Directory</span>
          <span>Built with care for communities everywhere.</span>
        </div>
      </Container>
    </footer>
  );
}
