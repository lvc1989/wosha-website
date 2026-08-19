// Every piece of static copy on the site, in three languages. What this does NOT
// translate: content that comes from the business owner's own database (service
// names, branch addresses, testimonial quotes, gallery captions) — that's real
// user-entered content with no translation source, and auto-translating it without
// review risks getting it wrong in public. The interface around that content —
// every label, button, and heading — is what's covered here, completely.
export const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "sw", label: "Kiswahili" },
  { code: "fr", label: "Français" },
];

export const translations = {
  en: {
    nav_services: "Services",
    nav_how: "How it works",
    nav_branches: "Branches",
    nav_intranet: "Staff & Owner Intranet",
    nav_book: "Book a Wash",

    hero_badge: "NOW BOOKING ACROSS {count} BRANCHES",
    hero_headline_1: "Your car,",
    hero_headline_2: "spotless",
    hero_headline_3: "in",
    hero_headline_4: "under an hour.",
    hero_tagline_default: "{business} washes and details vehicles the way you'd do it yourself — if you had the time, the water pressure, and the products.",
    hero_cta_book: "Book a Wash Now",
    hero_cta_services: "See Services & Prices",
    hero_trust_1: "No account needed to book",
    hero_trust_2: "Transparent pricing",
    hero_trust_3: "Cashless payment accepted",

    marquee_eyebrow: "Every Service, One Place",
    marquee_headline: "Drag through what we offer.",

    why_eyebrow: "Why {business}",
    process_eyebrow: "Real Care, Every Time",
    why_headline: "A wash you'd actually trust with your own car.",
    why_1_title: "Fast, not rushed",
    why_1_body: "Most washes finish in under an hour — booked to a real time slot, not a guess.",
    why_2_title: "Real products, real care",
    why_2_body: "The same pH-balanced soaps and microfiber tools a detailer would use on their own car.",
    why_3_title: "Transparent pricing",
    why_3_body: "Every service is priced upfront in the app before you arrive — no surprises at pickup.",
    why_4_title: "Detailing, done properly",
    why_4_body: "From a quick exterior rinse to full interior and paint care, at whichever level you need.",

    stats_branch: "Branch",
    stats_branches: "Branches",
    stats_services: "Services Offered",
    stats_category: "Service Category",
    stats_categories: "Service Categories",
    stats_turnaround: "Typical Turnaround",

    services_eyebrow: "Services & Pricing",
    services_headline: "Straightforward pricing, no guesswork.",
    services_cta: "Book One of These",
    services_min: "min",

    how_eyebrow: "How It Works",
    how_headline: "Four steps. No standing around.",
    how_1_title: "Book your slot",
    how_1_body: "Pick a branch, a service, and a time — takes under a minute in the app.",
    how_2_title: "Drop off",
    how_2_body: "Arrive, hand over your keys, and go about your day if you'd rather not wait.",
    how_3_title: "We get to work",
    how_3_body: "Your vehicle is washed and detailed exactly to the service you chose.",
    how_4_title: "Drive away",
    how_4_body: "A quick check together, then you're back on the road — spotless.",

    testimonials_eyebrow: "What Customers Say",
    testimonials_headline: "Real feedback, straight from the people we've washed for.",
    testimonials_empty: "Reviews are on their way — check back soon.",

    gallery_eyebrow: "See Our Work",
    gallery_headline: "Washing and detailing, in progress.",
    gallery_empty: "Photos and clips are on their way — check back soon.",

    branches_eyebrow: "Find Us",
    branches_headline_one: "One branch, one standard.",
    branches_headline_many: "{count} branches, one standard.",

    closing_headline: "Book your next wash with {business} today.",
    closing_body: "Takes under a minute. No account needed to get started.",
    closing_cta: "Book a Wash Now",

    footer_quick_links: "Quick Links",
    footer_contact: "Contact",
    footer_rights: "All rights reserved.",
    footer_visits: "{count} real visits and counting.",

    install_button: "Install App",
    install_ios_title: "Add {business} to your Home Screen",
    install_ios_body: "Two taps, and it opens instantly next time — just like an app.",
    install_ios_step1: "Tap the",
    install_ios_step1b: "Share icon at the bottom of Safari.",
    install_ios_step2: "Scroll down and tap",
    install_ios_step2b: "\"Add to Home Screen\".",
  },

  sw: {
    nav_services: "Huduma",
    nav_how: "Jinsi Inavyofanya Kazi",
    nav_branches: "Matawi",
    nav_intranet: "Uingiaji wa Wafanyakazi na Mmiliki",
    nav_book: "Weka Nafasi ya Kuosha",

    hero_badge: "SASA TUNAPOKEA WATEJA KATIKA MATAWI {count}",
    hero_headline_1: "Gari lako,",
    hero_headline_2: "safi kabisa",
    hero_headline_3: "ndani ya",
    hero_headline_4: "saa moja.",
    hero_tagline_default: "{business} husafisha na kuhudumia magari kama ambavyo ungependa kufanya mwenyewe — kama ungekuwa na muda, shinikizo la maji, na bidhaa sahihi.",
    hero_cta_book: "Weka Nafasi Sasa",
    hero_cta_services: "Angalia Huduma na Bei",
    hero_trust_1: "Hauhitaji akaunti kuweka nafasi",
    hero_trust_2: "Bei wazi bila kujificha",
    hero_trust_3: "Malipo ya kielektroniki yanakubalika",

    marquee_eyebrow: "Huduma Zote, Sehemu Moja",
    marquee_headline: "Vuta kuona tunachotoa.",

    why_eyebrow: "Kwa Nini {business}",
    process_eyebrow: "Utunzaji Halisi, Kila Wakati",
    why_headline: "Usafi ambao ungeuaminia gari lako mwenyewe.",
    why_1_title: "Haraka, si kwa pupa",
    why_1_body: "Usafi mwingi humalizika ndani ya saa moja — kwa muda halisi ulioratibiwa, si makisio tu.",
    why_2_title: "Bidhaa halisi, utunzaji halisi",
    why_2_body: "Sabuni zenye kiwango sahihi cha pH na vitambaa vya microfiber ambavyo mtaalamu angetumia kwenye gari lake mwenyewe.",
    why_3_title: "Bei iliyo wazi",
    why_3_body: "Kila huduma ina bei iliyowekwa kabla hujafika — hakuna mshangao wa bei ukifika.",
    why_4_title: "Uhudumiaji sahihi",
    why_4_body: "Kutoka safisho la nje la haraka hadi utunzaji kamili wa ndani na rangi, kwa kiwango unachohitaji.",

    stats_branch: "Tawi",
    stats_branches: "Matawi",
    stats_services: "Huduma Zinazotolewa",
    stats_category: "Aina ya Huduma",
    stats_categories: "Aina za Huduma",
    stats_turnaround: "Muda wa Wastani",

    services_eyebrow: "Huduma na Bei",
    services_headline: "Bei iliyo wazi, bila kubahatisha.",
    services_cta: "Weka Nafasi ya Hii",
    services_min: "dakika",

    how_eyebrow: "Jinsi Inavyofanya Kazi",
    how_headline: "Hatua nne. Bila kusubiri bure.",
    how_1_title: "Weka nafasi yako",
    how_1_body: "Chagua tawi, huduma, na muda — inachukua chini ya dakika moja kwenye programu.",
    how_2_title: "Leta gari",
    how_2_body: "Fika, kabidhi funguo, na uendelee na siku yako ikiwa hutaki kusubiri.",
    how_3_title: "Tunaanza kazi",
    how_3_body: "Gari lako linasafishwa na kuhudumiwa kulingana na huduma uliyochagua.",
    how_4_title: "Ondoka na gari lako",
    how_4_body: "Ukaguzi wa haraka pamoja nasi, kisha uko tayari kuondoka — safi kabisa.",

    testimonials_eyebrow: "Wateja Wanasema Nini",
    testimonials_headline: "Maoni halisi, moja kwa moja kutoka kwa wateja tuliowahudumia.",
    testimonials_empty: "Maoni yanakuja hivi karibuni — rudi tena baadaye.",

    gallery_eyebrow: "Angalia Kazi Yetu",
    gallery_headline: "Usafishaji na uhudumiaji, ukiendelea.",
    gallery_empty: "Picha na video zinakuja hivi karibuni — rudi tena baadaye.",

    branches_eyebrow: "Tupate",
    branches_headline_one: "Tawi moja, kiwango kimoja.",
    branches_headline_many: "Matawi {count}, kiwango kimoja.",

    closing_headline: "Weka nafasi yako inayofuata na {business} leo.",
    closing_body: "Inachukua chini ya dakika moja. Hauhitaji akaunti kuanza.",
    closing_cta: "Weka Nafasi Sasa",

    footer_quick_links: "Viungo vya Haraka",
    footer_contact: "Mawasiliano",
    footer_rights: "Haki zote zimehifadhiwa.",
    footer_visits: "Wageni halisi {count} na wanaendelea kuongezeka.",

    install_button: "Sakinisha Programu",
    install_ios_title: "Weka {business} kwenye Skrini ya Nyumbani",
    install_ios_body: "Mibofyo miwili tu, na itafunguka papo hapo mara nyingine — kama programu halisi.",
    install_ios_step1: "Gusa",
    install_ios_step1b: "aikoni ya Share chini ya Safari.",
    install_ios_step2: "Telezesha chini na ugusa",
    install_ios_step2b: "\"Add to Home Screen\".",
  },

  fr: {
    nav_services: "Services",
    nav_how: "Comment ça marche",
    nav_branches: "Agences",
    nav_intranet: "Intranet Personnel & Propriétaire",
    nav_book: "Réserver un Lavage",

    hero_badge: "RÉSERVATIONS OUVERTES DANS {count} AGENCES",
    hero_headline_1: "Votre voiture,",
    hero_headline_2: "impeccable",
    hero_headline_3: "en",
    hero_headline_4: "moins d'une heure.",
    hero_tagline_default: "{business} lave et détaille les véhicules comme vous le feriez vous-même — si vous aviez le temps, la pression d'eau et les produits.",
    hero_cta_book: "Réserver Maintenant",
    hero_cta_services: "Voir Services & Tarifs",
    hero_trust_1: "Aucun compte requis pour réserver",
    hero_trust_2: "Tarifs transparents",
    hero_trust_3: "Paiement sans espèces accepté",

    marquee_eyebrow: "Tous Nos Services, Un Seul Endroit",
    marquee_headline: "Faites défiler notre offre.",

    why_eyebrow: "Pourquoi {business}",
    process_eyebrow: "Un Vrai Soin, à Chaque Fois",
    why_headline: "Un lavage en qui vous feriez vraiment confiance pour votre propre voiture.",
    why_1_title: "Rapide, sans précipitation",
    why_1_body: "La plupart des lavages se terminent en moins d'une heure — sur un vrai créneau réservé, pas une estimation.",
    why_2_title: "Vrais produits, vrai soin",
    why_2_body: "Les mêmes savons au pH équilibré et outils en microfibre qu'un professionnel utiliserait sur sa propre voiture.",
    why_3_title: "Tarifs transparents",
    why_3_body: "Chaque service est tarifé à l'avance dans l'application — aucune surprise au retrait.",
    why_4_title: "Un détailing fait dans les règles",
    why_4_body: "D'un simple rinçage extérieur à un soin complet intérieur et carrosserie, au niveau dont vous avez besoin.",

    stats_branch: "Agence",
    stats_branches: "Agences",
    stats_services: "Services Proposés",
    stats_category: "Catégorie de Service",
    stats_categories: "Catégories de Services",
    stats_turnaround: "Durée Habituelle",

    services_eyebrow: "Services & Tarifs",
    services_headline: "Des tarifs clairs, sans surprise.",
    services_cta: "Réserver Celui-ci",
    services_min: "min",

    how_eyebrow: "Comment Ça Marche",
    how_headline: "Quatre étapes. Pas d'attente inutile.",
    how_1_title: "Réservez votre créneau",
    how_1_body: "Choisissez une agence, un service et une heure — moins d'une minute dans l'application.",
    how_2_title: "Déposez le véhicule",
    how_2_body: "Arrivez, remettez vos clés, et vaquez à vos occupations si vous préférez ne pas attendre.",
    how_3_title: "Nous nous mettons au travail",
    how_3_body: "Votre véhicule est lavé et détaillé exactement selon le service choisi.",
    how_4_title: "Reprenez la route",
    how_4_body: "Une vérification rapide ensemble, puis vous repartez — impeccable.",

    testimonials_eyebrow: "Avis Clients",
    testimonials_headline: "De vrais retours, directement de nos clients.",
    testimonials_empty: "Les avis arrivent bientôt — revenez plus tard.",

    gallery_eyebrow: "Notre Travail",
    gallery_headline: "Lavage et détailing, en action.",
    gallery_empty: "Photos et vidéos arrivent bientôt — revenez plus tard.",

    branches_eyebrow: "Nous Trouver",
    branches_headline_one: "Une agence, une seule norme.",
    branches_headline_many: "{count} agences, une seule norme.",

    closing_headline: "Réservez votre prochain lavage avec {business} aujourd'hui.",
    closing_body: "Moins d'une minute. Aucun compte requis pour commencer.",
    closing_cta: "Réserver Maintenant",

    footer_quick_links: "Liens rapides",
    footer_contact: "Contact",
    footer_rights: "Tous droits réservés.",
    footer_visits: "{count} vraies visites, et ça continue.",

    install_button: "Installer l'App",
    install_ios_title: "Ajouter {business} à votre écran d'accueil",
    install_ios_body: "Deux appuis, et elle s'ouvre instantanément la prochaine fois — comme une vraie application.",
    install_ios_step1: "Appuyez sur l'icône",
    install_ios_step1b: "Partager en bas de Safari.",
    install_ios_step2: "Faites défiler et appuyez sur",
    install_ios_step2b: "\"Sur l'écran d'accueil\".",
  },
};

export function translate(lang, key, vars = {}) {
  const dict = translations[lang] || translations.en;
  let text = dict[key] ?? translations.en[key] ?? key;
  Object.entries(vars).forEach(([k, v]) => {
    text = text.replace(`{${k}}`, v);
  });
  return text;
}
