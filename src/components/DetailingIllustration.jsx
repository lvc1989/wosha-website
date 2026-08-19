// A second original illustration, same honesty rule as the hero one: stylized
// vector art, never presented as or mistakable for a real photo.
export default function DetailingIllustration({ className = "" }) {
  return (
    <svg viewBox="0 0 400 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Car panel background */}
      <rect x="20" y="30" width="360" height="240" rx="24" fill="#0B1B33" />
      <path d="M20 150c60-30 140-40 180-40s120 10 180 40" stroke="#2B6CF6" strokeWidth="2" opacity="0.3" fill="none" />

      {/* Shine streaks across the panel */}
      <path d="M60 90c80 30 200 30 280 0" stroke="#FFDE00" strokeWidth="3" strokeLinecap="round" opacity="0.5" fill="none" />
      <path d="M60 210c80 -30 200 -30 280 0" stroke="#2B6CF6" strokeWidth="3" strokeLinecap="round" opacity="0.4" fill="none" />

      {/* Cloth */}
      <ellipse cx="210" cy="150" rx="70" ry="46" fill="#F5F7FA" transform="rotate(-18 210 150)" />
      <ellipse cx="210" cy="150" rx="70" ry="46" stroke="#0B1B33" strokeWidth="3" transform="rotate(-18 210 150)" />
      <path d="M160 130c20 10 60 10 90 4" stroke="#B4B2A9" strokeWidth="2" opacity="0.6" fill="none" />

      {/* Hand */}
      <path
        d="M225 178c-6-14-2-30 10-38 8-6 18-6 26 0l30 22c8 6 10 17 4 25l-6 8c-6 8-17 10-25 4l-32-14c-4-2-6-4-7-7z"
        fill="#F5F7FA"
        stroke="#0B1B33"
        strokeWidth="3"
      />

      {/* Sparkle accents around the shine */}
      <path d="M110 70l3 8 8 3-8 3-3 8-3-8-8-3 8-3z" fill="#FFDE00" />
      <path d="M310 190l2.5 6 6 2.5-6 2.5-2.5 6-2.5-6-6-2.5 6-2.5z" fill="#FFDE00" />
      <circle cx="90" cy="200" r="4" fill="#2B6CF6" opacity="0.7" />
      <circle cx="330" cy="90" r="5" fill="#2B6CF6" opacity="0.6" />
    </svg>
  );
}
