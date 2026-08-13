const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4000/api";

async function get(path) {
  const res = await fetch(`${BASE_URL}${path}`);
  if (!res.ok) throw new Error(`Request failed: ${path}`);
  return res.json();
}

export const api = {
  getSettings: () => get("/settings/public"),
  getBranches: () => get("/locations/public"),
  getServices: () => get("/services/public"),
  getTestimonials: () => get("/testimonials/public"),
  getGallery: () => get("/media-gallery/public"),
  trackVisit: () =>
    fetch(`${BASE_URL}/site-visits/track`, { method: "POST" }).then((r) => r.json()).catch(() => null),
  getVisitCount: () => get("/site-visits/count"),
};

const APP_URL = import.meta.env.VITE_APP_URL || "http://localhost:5173";

// The real Wosha app is one shared system — the public website never has its own
// separate booking form or its own separate login. Every link here sends the
// person into the exact same app staff and the owner use, just pre-set to the
// right starting point, so anything a customer does here shows up in the app
// immediately (and vice versa) because it's the same backend, not a copy of it.
export const BOOKING_URL = `${APP_URL}/?portal=client&mode=guest`;
export const CLIENT_PORTAL_URL = `${APP_URL}/?portal=client`;
export const INTRANET_URL = `${APP_URL}/?portal=owner`;
