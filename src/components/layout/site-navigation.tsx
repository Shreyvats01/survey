import { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation } from "react-router";
import { BrandMark } from "@/components/shared/brand-mark";
import { cn } from "@/lib/utils";

export interface NavLinkItem {
  to: string;
  label: string;
}

const defaultNavLinks: NavLinkItem[] = [
  { to: "/", label: "Surveys" },
  { to: "/archive", label: "Archive" },
  { to: "/methodology", label: "Methodology" },
  { to: "/about", label: "About" },
];

export interface SiteNavigationProps {
  navLinks?: NavLinkItem[];
}

/**
 * SiteNavigation
 * Observatory decoupled, fixed-position layout:
 * - Fixed brand logo at top-left with smooth fill/stroke transition
 * - Fixed circular menu toggle at top-right with morphing 3-bar burger / X
 * - Fixed top-right site menu:
 *   - Desktop non-scrolled: horizontal links with 36px circular backdrop
 *   - Desktop scrolled (scrollY > 100px): floating circular pill that expands on hover / focus-within
 *   - Fullscreen / mobile: full viewport overlay in dark navy with 80px display typography
 * - Synchronizes state--scrolled and state--menu-open on document.documentElement
 */
export function SiteNavigation({ navLinks = defaultNavLinks }: SiteNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const siteMenuRef = useRef<HTMLElement>(null);
  const prevPathname = useRef(location.pathname);

  // Close menu on route change
  useEffect(() => {
    if (prevPathname.current !== location.pathname) {
      prevPathname.current = location.pathname;
      setIsOpen(false);
    }
  }, [location.pathname]);

  // Synchronize state--scrolled on document.documentElement (scrollY > 100)
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      document.documentElement.classList.toggle("state--scrolled", isScrolled);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.documentElement.classList.remove("state--scrolled");
    };
  }, []);

  // Synchronize state--menu-open on document.documentElement
  useEffect(() => {
    document.documentElement.classList.toggle("state--menu-open", isOpen);

    return () => {
      document.documentElement.classList.remove("state--menu-open");
    };
  }, [isOpen]);

  // Close handler with focus restoration
  const handleClose = useCallback(() => {
    setIsOpen(false);
    menuToggleRef.current?.focus();
  }, []);

  // Escape key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        e.preventDefault();
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleClose]);

  // Accessible focus trap when menu is open
  useEffect(() => {
    if (!isOpen) return;

    const handleFocusTrap = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      const navEl = siteMenuRef.current;
      const toggleEl = menuToggleRef.current;

      const navFocusable = navEl
        ? Array.from(
            navEl.querySelectorAll<HTMLElement>(
              'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
            )
          )
        : [];

      const focusable = [toggleEl, ...navFocusable].filter(Boolean) as HTMLElement[];
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleFocusTrap);
    return () => window.removeEventListener("keydown", handleFocusTrap);
  }, [isOpen]);

  const isLinkActive = (to: string) => {
    if (to === "/") {
      return location.pathname === "/";
    }
    return location.pathname === to || location.pathname.startsWith(to + "/");
  };

  return (
    <>
      {/* Element 1: Site Logo (Fixed top-left) */}
      <Link
        to="/"
        className="site-logo"
        title="Survey Directory — Home"
        aria-label="Survey Directory — Home"
        onClick={() => setIsOpen(false)}
      >
        <BrandMark size="lg" className="logo__mark" />
        <span className="site-logo__text sr-only sm:not-sr-only sm:inline-block font-sans text-sm font-semibold tracking-tight">
          Survey Directory
        </span>
      </Link>

      {/* Element 2: Menu Toggle Button (Fixed top-right) */}
      <button
        ref={menuToggleRef}
        type="button"
        className="menu-toggle js-menu-toggle"
        aria-label={isOpen ? "Close menu" : "Menu toggle"}
        aria-pressed={isOpen}
        aria-expanded={isOpen}
        tabIndex={0}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <svg
          viewBox="0 0 36 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect className="burger__top" width="36" height="4" rx="2" />
          <rect className="burger__mid" y="10" width="36" height="4" rx="2" />
          <rect className="burger__bottom" y="20" width="36" height="4" rx="2" />
        </svg>
      </button>

      {/* Element 3: Site Menu Navigation (Fixed top-right) */}
      <nav
        ref={siteMenuRef}
        className={cn("site-menu", isOpen && "site-menu--open")}
        aria-label="Main menu"
      >
        <ul className="menu__main">
          {navLinks.map(({ to, label }) => {
            const active = isLinkActive(to);
            return (
              <li key={to}>
                <Link
                  to={to}
                  className={active ? "active" : undefined}
                  onClick={() => setIsOpen(false)}
                  title={label}
                >
                  <span>{label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Scrolled Floating Pill: Burger Icon Display */}
        <div
          className="menu__hover"
          role="button"
          tabIndex={0}
          aria-label="Expand menu"
          onClick={() => setIsOpen(true)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setIsOpen(true);
            }
          }}
        >
          <svg
            viewBox="0 0 36 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect className="burger__top" width="36" height="4" rx="2" />
            <rect className="burger__mid" y="10" width="36" height="4" rx="2" />
            <rect className="burger__bottom" y="20" width="36" height="4" rx="2" />
          </svg>
        </div>

        {/* Legal links displayed in Fullscreen / Mobile Menu */}
        <ul className="menu__legal">
          <li>
            <Link
              to="/about"
              title="Privacy Policy"
              onClick={() => setIsOpen(false)}
            >
              <span>Privacy Policy</span>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              title="Accessibility Statement"
              onClick={() => setIsOpen(false)}
            >
              <span>Accessibility Statement</span>
            </Link>
          </li>
          <li className="menu__copyright">
            <span>© {new Date().getFullYear()} Survey Directory</span>
          </li>
        </ul>
      </nav>
    </>
  );
}
