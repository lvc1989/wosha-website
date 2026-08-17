# Wosha Marketing Website

A public marketing site for Wosha — separate from the business app itself.
This is what a potential customer sees before they've ever logged in:
services, prices, branch locations, and a "Book a Wash" button that sends
them straight into the real booking flow already built into the app.

It pulls **real, live data** from your actual Wosha backend — the services
and prices, the branches, your logo and business name. Change any of that in
Settings or the Services/Locations pages, and this site reflects it
automatically. Nothing here is hardcoded placeholder content except the
"Why Wosha" feature copy and the "How it works" steps, which are general
enough not to need live data.

## Run it locally

```bash
npm install
cp .env.example .env
# edit .env — point VITE_API_URL at your real backend, VITE_APP_URL at your real app
npm run dev
```

## Deploy it for real

Same process as the main Wosha frontend: push this folder to its own GitHub
repository, then deploy it on Vercel (or Netlify) the same way, setting the
two environment variables from `.env.example` in the deploy settings. This
is a completely separate deployment from your main app — it can live on its
own domain (e.g. `www.wosha.com`) while the app itself stays wherever it is
now.

## Structure

```
src/
  api.js              real API calls to your Wosha backend's public endpoints
  useReveal.js         the scroll-reveal animation hook
  components/
    Nav.jsx
    Hero.jsx
    WhyWosha.jsx
    Services.jsx       live services & prices
    HowItWorks.jsx
    Branches.jsx        live branch locations
    ClosingCTA.jsx
    Footer.jsx
```

## What's real vs. placeholder right now

- **Real, live:** business name, logo, services, prices, branches
- **Placeholder for now (per your request):** no photos yet — the design
  relies on color, type, and motion instead of imagery until you have real
  photos to add
- **Deliberately not included:** customer testimonials — inventing fake
  quotes would be dishonest marketing copy. Add a real testimonials section
  once you have actual reviews to feature.

## Adding real photos later

Once you have them, the natural places to add real imagery are the hero
section (`Hero.jsx`) and the branch cards (`Branches.jsx`) — send them over
and this can be wired in directly.
