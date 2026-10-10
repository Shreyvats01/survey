import { BrowserRouter, Routes, Route } from "react-router";
import { MotionConfig } from "motion/react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollToTop } from "@/components/shared/scroll-to-top";
import { HomePage } from "@/pages/home-page";
import { SurveyPage } from "@/pages/survey-page";
import { ArchivePage } from "@/pages/archive-page";
import { AboutPage } from "@/pages/about-page";
import { MethodologyPage } from "@/pages/methodology-page";
import { NotFoundPage } from "@/pages/not-found-page";

export function AppRouter() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <ScrollToTop />
        <SiteHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/survey/:slug" element={<SurveyPage />} />
          <Route path="/archive" element={<ArchivePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/methodology" element={<MethodologyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <SiteFooter />
      </BrowserRouter>
    </MotionConfig>
  );
}
