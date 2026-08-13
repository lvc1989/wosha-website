// A small, deliberate set of accents — cycled across cards/steps/branches so each
// item reads as distinct at a glance, without turning the site into a rainbow.
// Every color here is a tint of something already in the brand (navy/yellow) or
// one of the two supporting colors already used elsewhere on the site (blue, green).
export const ACCENTS = [
  { bg: "#2B6CF6", tint: "#EAF1FF", text: "#185FA5" },
  { bg: "#FFDE00", tint: "#FFF8DC", text: "#8A6D00" },
  { bg: "#22C55E", tint: "#EAF9EF", text: "#15803D" },
  { bg: "#A855F7", tint: "#F5EEFE", text: "#7E22CE" },
];

export function accentFor(index) {
  return ACCENTS[index % ACCENTS.length];
}
