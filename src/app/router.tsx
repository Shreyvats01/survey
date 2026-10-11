import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { MotionConfig } from "motion/react";
import { SiteNavigation } from "@/components/layout/site-navigation";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollToTop } from "@/components/shared/scroll-to-top";

const HomePage = React.lazy(() => import("@/pages/home-page").then(m => ({ default: m.HomePage })));
const SurveyPage = React.lazy(() => import("@/pages/survey-page").then(m => ({ default: m.SurveyPage })));
const ArchivePage = React.lazy(() => import("@/pages/archive-page").then(m => ({ default: m.ArchivePage })));
const AboutPage = React.lazy(() => import("@/pages/about-page").then(m => ({ default: m.AboutPage })));
const MethodologyPage = React.lazy(() => import("@/pages/methodology-page").then(m => ({ default: m.MethodologyPage })));
const NotFoundPage = React.lazy(() => import("@/pages/not-found-page").then(m => ({ default: m.NotFoundPage })));

function RouteLoadingFallback() {
  return (
    <div
      role="status"
      aria-label="Loading page content"
      className="min-h-[50vh] flex items-center justify-center bg-background"
      style={{ backgroundColor: "var(--background-color, var(--background))" }}
    >
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 rounded-full border-2 border-plum/20 border-t-plum animate-spin" />
        <span className="text-xs font-medium tracking-widest uppercase text-plum-muted/70">
          Loading
        </span>
      </div>
    </div>
  );
}

export function AppRouter() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <ScrollToTop />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <SiteNavigation />
        <main
          id="main-content"
          tabIndex={-1}
          className="relative z-10 flex flex-1 flex-col bg-cream focus:outline-none"
        >
          <Suspense fallback={<RouteLoadingFallback />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/survey/:slug" element={<SurveyPage />} />
              <Route path="/archive" element={<ArchivePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/methodology" element={<MethodologyPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>
        <SiteFooter />
      </BrowserRouter>
    </MotionConfig>
  );
}

