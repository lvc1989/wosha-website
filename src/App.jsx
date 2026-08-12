import { useState, useEffect } from "react";
import { api } from "./api.js";
import { LanguageProvider } from "./i18n/LanguageContext.jsx";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import ServiceMarquee from "./components/ServiceMarquee.jsx";
import Stats from "./components/Stats.jsx";
import WhyWosha from "./components/WhyWosha.jsx";
import Services from "./components/Services.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Gallery from "./components/Gallery.jsx";
import Branches from "./components/Branches.jsx";
import ClosingCTA from "./components/ClosingCTA.jsx";
import Footer from "./components/Footer.jsx";
import InstallPrompt from "./components/InstallPrompt.jsx";

const VISIT_TRACKED_KEY = "wosha_visit_tracked";

export default function App() {
  const [settings, setSettings] = useState(null);
  const [services, setServices] = useState([]);
  const [branches, setBranches] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [visitCount, setVisitCount] = useState(null);

  useEffect(() => {
    api.getSettings().then(setSettings).catch(() => {});
    api.getServices().then(setServices).catch(() => {});
    api.getBranches().then(setBranches).catch(() => {});
    api.getTestimonials().then(setTestimonials).catch(() => {});
    api.getGallery().then(setGallery).catch(() => {});

    // Count once per real browser session, not once per component re-render or
    // internal navigation — sessionStorage clears when the tab actually closes,
    // so this reflects genuine separate visits.
    if (!sessionStorage.getItem(VISIT_TRACKED_KEY)) {
      api.trackVisit().then((r) => { if (r) setVisitCount(r.count); });
      sessionStorage.setItem(VISIT_TRACKED_KEY, "1");
    } else {
      api.getVisitCount().then((r) => setVisitCount(r.count)).catch(() => {});
    }
  }, []);

  // website_content is the admin-editable JSON blob from Settings → Public website
  // content. Defaults keep every section visible until an owner deliberately
  // turns one off, so nothing on a fresh install silently disappears.
  const wc = settings?.website_content || {};
  const showStats = wc.showStats !== false;
  const showTestimonials = wc.showTestimonials !== false;
  const showGallery = wc.showGallery !== false;

  return (
    <LanguageProvider defaultLanguage={wc.defaultLanguage}>
      <div>
        <Nav businessName={settings?.business_name} logoUrl={settings?.logo_url} />
        <Hero
          businessName={settings?.business_name}
          tagline={settings?.login_message}
          branchCount={branches.length}
          headlineOverride={wc.heroHeadline}
          subheadlineOverride={wc.heroSubheadline}
        />
        <ServiceMarquee services={services} />
        {showStats && <Stats branchCount={branches.length} serviceCount={services.length} categoryCount={new Set(services.map((s) => s.category)).size} />}
        <WhyWosha businessName={settings?.business_name} />
        <Services services={services} />
        <HowItWorks />
        {showTestimonials && <Testimonials testimonials={testimonials} />}
        {showGallery && <Gallery items={gallery} />}
        <Branches branches={branches} />
        <ClosingCTA businessName={settings?.business_name} />
        <Footer businessName={settings?.business_name} logoUrl={settings?.logo_url} visitCount={visitCount} />
        <InstallPrompt businessName={settings?.business_name} />
      </div>
    </LanguageProvider>
  );
}
