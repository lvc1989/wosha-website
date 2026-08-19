import { useState, useEffect } from "react";
import { api, MISCONFIGURED_API_URL, MISCONFIGURED_APP_URL } from "./api.js";
import { LanguageProvider } from "./i18n/LanguageContext.jsx";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import AdBanners from "./components/AdBanners.jsx";
import ServiceMarquee from "./components/ServiceMarquee.jsx";
import Stats from "./components/Stats.jsx";
import WhyWosha from "./components/WhyWosha.jsx";
import Services from "./components/Services.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import ProcessShowcase from "./components/ProcessShowcase.jsx";
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
  const [adBanners, setAdBanners] = useState([]);
  const [visitCount, setVisitCount] = useState(null);
  const [apiUnreachable, setApiUnreachable] = useState(false);

  useEffect(() => {
    // Tracks whether the backend is genuinely reachable, based on the actual
    // outcome of a real request — not on whether the configured URL happens
    // to contain "localhost", which is completely correct during real local
    // development and would be a false alarm. If every one of these fails,
    // the person testing this sees a clear reason why, in every mode, not a
    // silently blank page with no explanation.
    let failureCount = 0;
    const trackResult = (ok) => {
      if (!ok) failureCount += 1;
      if (failureCount >= 3) setApiUnreachable(true);
    };
    api.getSettings().then((r) => { setSettings(r); trackResult(true); }).catch(() => trackResult(false));
    api.getServices().then((r) => { setServices(r); trackResult(true); }).catch(() => trackResult(false));
    api.getBranches().then((r) => { setBranches(r); trackResult(true); }).catch(() => trackResult(false));
    api.getTestimonials().then(setTestimonials).catch(() => {});
    api.getGallery().then(setGallery).catch(() => {});
    api.getAdBanners().then(setAdBanners).catch(() => {});

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
  useEffect(() => {
    if (settings?.business_name) document.title = `${settings.business_name} — Car Wash & Detailing`;
  }, [settings?.business_name]);

  const wc = settings?.website_content || {};
  const showStats = wc.showStats !== false;
  const showTestimonials = wc.showTestimonials !== false;
  const showGallery = wc.showGallery !== false;

  return (
    <LanguageProvider defaultLanguage={wc.defaultLanguage}>
      <div>
        {(MISCONFIGURED_API_URL || MISCONFIGURED_APP_URL) && (
          <div style={{ background: "#DC2626", color: "#fff" }} className="text-xs font-medium text-center py-2 px-4">
            This deployment is missing setup: {MISCONFIGURED_API_URL && "VITE_API_URL "}{MISCONFIGURED_APP_URL && "VITE_APP_URL "}
            not configured in Vercel → Settings → Environment Variables. Some content and links won't work until this is fixed and redeployed.
          </div>
        )}
        {apiUnreachable && !MISCONFIGURED_API_URL && (
          <div style={{ background: "#DC2626", color: "#fff" }} className="text-xs font-medium text-center py-2 px-4">
            Can't reach the backend right now — content below may be incomplete. If you're running this locally, make sure the backend server is also running and VITE_API_URL points to it.
          </div>
        )}
        <Nav businessName={settings?.business_name} logoUrl={settings?.logo_url} />
        <Hero
          businessName={settings?.business_name}
          tagline={settings?.tagline}
          branchCount={branches.length}
          headlineOverride={wc.heroHeadline}
          subheadlineOverride={wc.heroSubheadline}
        />
        <AdBanners banners={adBanners} />
        <ServiceMarquee services={services} />
        {showStats && <Stats branchCount={branches.length} serviceCount={services.length} categoryCount={new Set(services.map((s) => s.category)).size} services={services} />}
        <WhyWosha businessName={settings?.business_name} />
        <Services services={services} />
        <HowItWorks />
        <ProcessShowcase />
        {showTestimonials && <Testimonials testimonials={testimonials} />}
        {showGallery && <Gallery items={gallery} />}
        <Branches branches={branches} />
        <ClosingCTA businessName={settings?.business_name} />
        <Footer businessName={settings?.business_name} logoUrl={settings?.logo_url} address={settings?.address} phone={settings?.phone} tagline={settings?.tagline} visitCount={visitCount} />
        <InstallPrompt businessName={settings?.business_name} />
      </div>
    </LanguageProvider>
  );
}
