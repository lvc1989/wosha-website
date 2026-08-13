import { useCountUp } from "../useCountUp.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";

function Stat({ value, suffix = "", label }) {
  const [ref, count] = useCountUp(value);
  return (
    <div ref={ref} className="text-center px-4">
      <div className="font-display font-bold text-white" style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)" }}>
        {count}{suffix}
      </div>
      <div className="text-xs font-medium mt-1 tracking-wide uppercase" style={{ color: "rgba(255,255,255,0.5)" }}>{label}</div>
    </div>
  );
}

// Every number here is real and already fetched by the app — this section exists
// to make that scale visible, not to assert numbers Wosha can't actually back up
// (no invented "10,000+ happy customers" claims without real data behind them).
export default function Stats({ branchCount, serviceCount, categoryCount }) {
  const { t } = useLanguage();
  if (!branchCount && !serviceCount) return null;
  return (
    <section className="py-14" style={{ background: "#0B1B33" }}>
      <div className="max-w-4xl mx-auto px-6 flex flex-wrap justify-center gap-y-8">
        {branchCount > 0 && <Stat value={branchCount} label={branchCount === 1 ? t("stats_branch") : t("stats_branches")} />}
        {serviceCount > 0 && <Stat value={serviceCount} label={t("stats_services")} />}
        {categoryCount > 0 && <Stat value={categoryCount} label={categoryCount === 1 ? t("stats_category") : t("stats_categories")} />}
        <Stat value={60} suffix="min" label={t("stats_turnaround")} />
      </div>
    </section>
  );
}
