// A small, deliberate set of accents — cycled across cards/steps/branches so each
// item reads as distinct at a glance, without turning the site into a rainbow.
// Kept within the same restrained brand palette as the app itself (blue/navy
// dominant, yellow as the secondary brand color, red reserved for anything
// that needs attention) — a visitor moving between the website and the app
// should see one consistent identity, not two different color systems.
export const ACCENTS = [
  { bg: "#2B6CF6", tint: "#EAF1FF", text: "#185FA5" },
  { bg: "#FFDE00", tint: "#FFF8DC", text: "#8A6D00" },
  { bg: "#0B1B33", tint: "#E4E9F0", text: "#0B1B33" },
  { bg: "#DC2626", tint: "#FDE8E7", text: "#A32D2D" },
];

export function accentFor(index) {
  return ACCENTS[index % ACCENTS.length];
}
