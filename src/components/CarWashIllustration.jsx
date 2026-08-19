// An original illustration, not a photo — built entirely from vector shapes in
// Wosha's own brand colors. Deliberately stylized rather than photorealistic:
// it can never be mistaken for an actual photo of a real vehicle or a real
// customer's car, which matters, since presenting a fake or stock photo as if
// it were real would misrepresent the business.
export default function CarWashIllustration({ className = "" }) {
  return (
    <svg viewBox="0 0 460 340" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Ground shadow */}
      <ellipse cx="230" cy="290" rx="170" ry="18" fill="#000" opacity="0.18" />

      {/* Water/suds puddle */}
      <path d="M60 292c30 10 90 14 170 14s140-4 170-14" stroke="#2B6CF6" strokeWidth="3" strokeLinecap="round" opacity="0.35" />

      {/* Car body */}
      <path
        d="M70 250c0-14 10-24 24-26l28-4 22-34c8-12 22-19 36-19h60c15 0 29 8 37 21l20 33 26 5c13 2 22 13 22 26v18c0 8-6 14-14 14H84c-8 0-14-6-14-14v-20z"
        fill="#F5F7FA"
      />
      <path
        d="M70 250c0-14 10-24 24-26l28-4 22-34c8-12 22-19 36-19h60c15 0 29 8 37 21l20 33 26 5c13 2 22 13 22 26v18c0 8-6 14-14 14H84c-8 0-14-6-14-14v-20z"
        stroke="#0B1B33"
        strokeWidth="4"
      />

      {/* Windows */}
      <path d="M150 220l16-28c5-8 14-13 24-13h20v41h-60z" fill="#2B6CF6" opacity="0.85" />
      <path d="M222 179h34c9 0 18 4 24 12l19 29h-77v-41z" fill="#2B6CF6" opacity="0.85" />
      <path d="M150 220l16-28c5-8 14-13 24-13h20v41h-60z" stroke="#0B1B33" strokeWidth="3" strokeLinejoin="round" />
      <path d="M222 179h34c9 0 18 4 24 12l19 29h-77v-41z" stroke="#0B1B33" strokeWidth="3" strokeLinejoin="round" />

      {/* Door lines */}
      <line x1="222" y1="179" x2="222" y2="261" stroke="#0B1B33" strokeWidth="3" />

      {/* Wheels */}
      <circle cx="150" cy="266" r="26" fill="#0B1B33" />
      <circle cx="150" cy="266" r="11" fill="#F5F7FA" />
      <circle cx="320" cy="266" r="26" fill="#0B1B33" />
      <circle cx="320" cy="266" r="11" fill="#F5F7FA" />

      {/* Headlight */}
      <circle cx="88" cy="248" r="7" fill="#FFDE00" />

      {/* Spray gun + hose, upper right */}
      <path d="M400 60c-30 10-55 30-70 55" stroke="#2B6CF6" strokeWidth="6" strokeLinecap="round" fill="none" />
      <rect x="392" y="38" width="34" height="20" rx="6" fill="#0B1B33" transform="rotate(28 409 48)" />

      {/* Spray lines from the gun toward the car roof */}
      <g stroke="#2B6CF6" strokeWidth="3" strokeLinecap="round" opacity="0.7">
        <line x1="360" y1="90" x2="300" y2="150" />
        <line x1="368" y1="104" x2="308" y2="158" />
        <line x1="376" y1="118" x2="318" y2="166" />
      </g>

      {/* Suds bubbles */}
      <circle cx="120" cy="150" r="10" fill="#fff" opacity="0.9" />
      <circle cx="140" cy="130" r="6" fill="#fff" opacity="0.7" />
      <circle cx="105" cy="130" r="5" fill="#FFDE00" opacity="0.8" />
      <circle cx="330" cy="200" r="8" fill="#fff" opacity="0.85" />
      <circle cx="350" cy="215" r="5" fill="#fff" opacity="0.6" />
      <circle cx="60" cy="200" r="7" fill="#FFDE00" opacity="0.6" />

      {/* Shine sparkle on the body */}
      <path d="M190 205l4 10 10 4-10 4-4 10-4-10-10-4 10-4z" fill="#FFDE00" />
    </svg>
  );
}
