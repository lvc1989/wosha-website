import { useState, useEffect } from "react";
import { Download, Share, SquarePlus, X } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext.jsx";

// Real platform constraints, not a design choice: Chrome/Android supports firing
// a native one-tap install prompt via the `beforeinstallprompt` event. Apple does
// not allow any website to trigger installation programmatically on iOS — the
// person has to open the Share sheet and tap "Add to Home Screen" themselves, so
// the best a website can do there is show exactly where to tap, clearly.
function detectPlatform() {
  const ua = navigator.userAgent || "";
  const isIOS = /iPhone|iPad|iPod/i.test(ua) && !window.MSStream;
  const isStandalone =
    window.matchMedia?.("(display-mode: standalone)")?.matches ||
    window.navigator.standalone === true;
  if (isStandalone) return "installed";
  if (isIOS) return "ios";
  return "checking"; // Android/Chrome: wait for beforeinstallprompt to confirm it's actually installable
}

export default function InstallPrompt({ businessName }) {
  const { t } = useLanguage();
  const [platform, setPlatform] = useState(detectPlatform);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showIOSSteps, setShowIOSSteps] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onBeforeInstall = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setPlatform("android");
    };
    const onInstalled = () => {
      setPlatform("installed");
      setDeferredPrompt(null);
    };
    window.addEventListener("beforeinstallprompt", onBeforeInstall);
    window.addEventListener("appinstalled", onInstalled);
    // If neither beforeinstallprompt nor iOS applies within a moment, this is a
    // desktop browser or one that doesn't support installing — stay hidden rather
    // than showing a button that can't do anything.
    const t = setTimeout(() => setPlatform((p) => (p === "checking" ? "unsupported" : p)), 2500);
    return () => {
      window.removeEventListener("beforeinstallprompt", onBeforeInstall);
      window.removeEventListener("appinstalled", onInstalled);
      clearTimeout(t);
    };
  }, []);

  const handleClick = async () => {
    if (platform === "ios") {
      setShowIOSSteps(true);
      return;
    }
    if (platform === "android" && deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") setPlatform("installed");
      setDeferredPrompt(null);
    }
  };

  if (dismissed || platform === "installed" || platform === "unsupported" || platform === "checking") return null;

  return (
    <>
      <button
        onClick={handleClick}
        className="fixed bottom-5 right-5 z-40 flex items-center gap-2 pl-4 pr-5 py-3 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95"
        style={{ background: "#FFDE00", color: "#0B1B33" }}
      >
        <Download size={18} strokeWidth={2.4} />
        <span className="font-display font-bold text-sm">{t("install_button")}</span>
      </button>

      {showIOSSteps && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
          style={{ background: "rgba(11,27,51,0.6)" }}
          onClick={() => setShowIOSSteps(false)}
        >
          <div
            className="w-full max-w-sm rounded-3xl p-6 relative"
            style={{ background: "#fff" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setShowIOSSteps(false)} className="absolute top-4 right-4" style={{ color: "#667085" }}>
              <X size={20} />
            </button>
            <div className="font-display font-bold text-lg mb-1" style={{ color: "#0B1B33" }}>{t("install_ios_title", { business: businessName || "Wosha" })}</div>
            <div className="text-sm mb-5" style={{ color: "#667085" }}>{t("install_ios_body")}</div>

            <div className="flex items-start gap-3 mb-4">
              <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-display font-bold text-sm" style={{ background: "#0B1B33", color: "#FFDE00" }}>1</div>
              <div className="flex items-center gap-2 text-sm" style={{ color: "#0B1B33" }}>
                {t("install_ios_step1")} <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg mx-1" style={{ background: "#F5F7FA" }}><Share size={15} color="#2B6CF6" /></span> {t("install_ios_step1b")}
              </div>
            </div>
            <div className="flex items-start gap-3 mb-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-display font-bold text-sm" style={{ background: "#0B1B33", color: "#FFDE00" }}>2</div>
              <div className="flex items-center gap-2 text-sm" style={{ color: "#0B1B33" }}>
                {t("install_ios_step2")} <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg mx-1" style={{ background: "#F5F7FA" }}><SquarePlus size={15} color="#2B6CF6" /></span> {t("install_ios_step2b")}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
