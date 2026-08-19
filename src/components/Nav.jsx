import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { BOOKING_URL, INTRANET_URL } from "../api.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import LanguageSwitcher from "./LanguageSwitcher.jsx";

export default function Nav({ businessName, logoUrl }) {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Closes the mobile menu automatically after tapping any link inside it —
  // without this, tapping "Services" would jump to the section but leave the
  // menu covering the screen, which reads as broken even though the
  // navigation itself worked.
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{ background: (scrolled || menuOpen) ? "rgba(11,27,51,0.96)" : "transparent", backdropFilter: (scrolled || menuOpen) ? "blur(10px)" : "none", boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.15)" : "none" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 min-w-0" onClick={closeMenu}>
          {logoUrl ? (
            <img src={logoUrl} alt="" className="w-9 h-9 rounded-full object-contain shrink-0" />
          ) : (
            <div className="w-9 h-9 rounded-full flex items-center justify-center font-display font-bold shrink-0" style={{ background: "#FFDE00", color: "#0B1B33" }}>W</div>
          )}
          <span className="font-display font-bold text-lg text-white truncate">{businessName || "Wosha"}</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-medium text-white/80 hover:text-white transition-colors">{t("nav_services")}</a>
          <a href="#how" className="text-sm font-medium text-white/80 hover:text-white transition-colors">{t("nav_how")}</a>
          <a href="#branches" className="text-sm font-medium text-white/80 hover:text-white transition-colors">{t("nav_branches")}</a>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden sm:block"><LanguageSwitcher dark /></div>
          <a href={INTRANET_URL} className="hidden lg:inline text-xs font-semibold text-white/60 hover:text-white transition-colors">{t("nav_intranet")}</a>
          <a href={BOOKING_URL} className="text-sm font-bold px-5 py-2.5 rounded-full transition-transform hover:scale-105" style={{ background: "#FFDE00", color: "#0B1B33" }}>
            {t("nav_book")}
          </a>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg text-white"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Real mobile menu — previously these links simply vanished below the md
          breakpoint with no way to reach them at all. */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{ maxHeight: menuOpen ? 320 : 0, borderTop: menuOpen ? "1px solid rgba(255,255,255,0.1)" : "none" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col gap-4">
          <a href="#services" onClick={closeMenu} className="text-base font-medium text-white/85">{t("nav_services")}</a>
          <a href="#how" onClick={closeMenu} className="text-base font-medium text-white/85">{t("nav_how")}</a>
          <a href="#branches" onClick={closeMenu} className="text-base font-medium text-white/85">{t("nav_branches")}</a>
          <a href={INTRANET_URL} onClick={closeMenu} className="text-base font-medium text-white/60">{t("nav_intranet")}</a>
          <div className="sm:hidden pt-1"><LanguageSwitcher dark /></div>
        </div>
      </div>
    </nav>
  );
}
