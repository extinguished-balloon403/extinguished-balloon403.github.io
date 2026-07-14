/* =============================================================================
   data.js  —  ALL YOUR CONTENT LIVES HERE.
   This is the only file you need to edit for normal updates.
   Rules of thumb:
     • Text goes inside "quotes". Keep the quotes.
     • Every item ends with a comma.
     • To add an entry, copy an existing { ... } block and edit it.
     • To hide an entry, delete the block (or leave url: "" for a soft state).
   ========================================================================== */

const SITE = {

  /* ---------------------------------------------------------------- PROFILE */
  profile: {
    eyebrow:  "Remote Sensing · Geospatial AI · Phosphorus Sustainability",
    firstName:"Barira",
    lastName: "Rashid",
    role:     "PhD Scholar, Geosciences & Biological and Agricultural Engineering — University of Arkansas",
    thesis:   "I teach machines to read landscapes from orbit.",
    quip:     "// serious about water quality · delighted by a good basemap",
    email:    "brashid@uark.edu",

    // shown as monospace metadata under the tagline
    meta: [
      { label: "LAT", value: "36.0764° N" },
      { label: "LON", value: "94.2088° W" },
      { label: "LAB", value: "NSF STEPS · Muenich Group" }
    ],

    // EDIT: swap the search-page links below for your real profile URLs
    links: {
      linkedin:     "https://www.linkedin.com/in/brashid02/",
      scholar:      "https://scholar.google.com/scholar?q=%22Barira+Rashid%22",
      researchgate: "https://www.researchgate.net/profile/Barira-Rashid",
      orcid:        "https://orcid.org/orcid-search/search?searchQuery=Barira%20Rashid"
    },

    // optional: put a PDF at assets/cv.pdf and set this to "assets/cv.pdf"
    cv: ""
  },

  /* ------------------------------------------------------------- STORY MAPS */
  /* Paste each public URL into url:. Empty url => tasteful "link pending" card.
     thumb options: "fields" | "terrain" | "globe"                             */
  storymaps: [
    {
      kicker: "NASA LifeLines",
      title:  "Food Security Data Studio",
      blurb:  "An open data studio package turning Earth-observation data into food-security insight for decision-makers without geospatial training.",
      url:    "",
      thumb:  "fields"
    },
    {
      kicker: "NASA LifeLines",
      title:  "Landslide Risk Data Studio",
      blurb:  "Mapping landslide susceptibility from satellite data, built with Earth-science review boards, USGS, and humanitarian NGOs.",
      url:    "",
      thumb:  "terrain"
    },
    {
      kicker: "NSF STEPS",
      title:  "Mapping Animal Feeding Operations",
      blurb:  "How deep learning finds the farms that regulators miss — and why phosphorus makes it matter for every downstream river.",
      url:    "",
      thumb:  "globe"
    }
  ],

  /* ---------------------------------------------------------------- DEGREES */
  /* Powers BOTH the journey map pins AND the education timeline.
     Order = chronological (oldest first). Pin numbers are automatic.
     Coordinates are campus-level; nudge if you want a different spot.        */
  degrees: [
    {
      degree:  "BS, Environmental Science",
      school:  "Fatima Jinnah Women University",
      place:   "Rawalpindi, Pakistan",
      note:    "",
      coords:  [33.5978, 73.0517]
    },
    {
      degree:  "MS, Remote Sensing & GIS",
      school:  "National University of Sciences & Technology",
      place:   "Islamabad, Pakistan",
      note:    "",
      coords:  [33.6423, 72.9906]
    },
    {
      degree:  "MS, GIS & Cartography",
      school:  "Arizona State University",
      place:   "Tempe, Arizona, USA",
      note:    "",
      coords:  [33.4242, -111.9281]
    },
    {
      degree:  "PhD, Geosciences & Biological and Agricultural Engineering",
      school:  "University of Arkansas",
      place:   "Fayetteville, Arkansas, USA",
      note:    "In progress — advisor Dr. Rebecca L. Muenich",
      current: true,
      coords:  [36.0679, -94.1738]
    }
  ],

  /* ------------------------------------------------------------ FIELD SITES */
  /* Second (toggleable) layer on the journey map. */
  fieldSites: [
    { title: "NSF STEPS · Muenich Group", blurb: "AFO mapping & phosphorus sustainability", coords: [36.0764, -94.2088] },
    { title: "Phoenix–Tempe, Arizona",    blurb: "Thermal refuge & desert wildlife study (Land, 2025)", coords: [33.4255, -111.9400] },
    { title: "United States",             blurb: "Nationwide AFO / CAFO detection (~87% accuracy)", coords: [39.5, -98.35] }
  ],

  /* ------------------------------------------------------------------ ABOUT */
  about: {
    lead: "Earth observation, geospatial AI, and the policy questions satellite data can actually answer.",
    paragraphs: [
      "I'm an environmental remote-sensing scientist working where Earth observation meets agricultural and water policy. My research applies object-based deep learning to satellite imagery to locate and characterize animal feeding operations across the United States — the diffuse, often-undocumented sources that shape water quality and the phosphorus cycle.",
      "I trained across three countries and four degrees, from environmental science in Pakistan to cartography at Arizona State, before joining the University of Arkansas and the NSF STEPS Center. Throughout, one commitment has stayed fixed: making Earth-observation tools usable by the communities and decision-makers who need them most."
    ],
    toolkit: ["Google Earth Engine","ArcGIS Pro","QGIS","Python","Object-based Deep Learning","Landscape Ecology"]
  },

  /* --------------------------------------------------------------- RESEARCH */
  /* icon options: "raster" | "water" | "network" | "globe"                    */
  research: [
    {
      icon:  "raster",
      title: "Mapping animal feeding operations from space",
      blurb: "Object-based deep learning on satellite imagery to detect AFOs and CAFOs at parcel scale, nationwide. A U.S.-wide model reached roughly 87% accuracy, with land use, land-surface temperature, and tree cover as key predictors.",
      tag:   "STEPS · Muenich Group"
    },
    {
      icon:  "water",
      title: "Phosphorus sustainability & water quality",
      blurb: "Locating the diffuse pollutant sources that drive nutrient loading in watersheds — foundational data for the NSF STEPS Center's mission to close the phosphorus cycle and protect freshwater.",
      tag:   "NSF STEPS Center"
    },
    {
      icon:  "network",
      title: "Thermal refuges & desert wildlife",
      blurb: "Quantifying how climate change and urbanization reshape the structural and functional connectivity of thermal refuges for desert species — landscape ecology meets remote sensing.",
      tag:   "Published in Land, 2025"
    },
    {
      icon:  "globe",
      title: "Earth observation for equity",
      blurb: "Building open, decision-ready tools through NASA LifeLines that put satellite data — on food security and landslide risk — into the hands of frontline and underserved communities.",
      tag:   "NASA LifeLines Fellowship"
    }
  ],

  /* ----------------------------------------------------------- PUBLICATIONS */
  /* EDIT: verify author order; ResearchGate lists 8 — add the rest here.
     Wrap your own name in <strong> tags to bold it.                          */
  publications: [
    {
      year:    "2025",
      title:   "Machine learning-based identification of animal feeding operations in the United States on a parcel-scale",
      authors: "Saha, A., <strong>Rashid, B.</strong>, Liu, T., Miralha, L., &amp; Muenich, R. L.",
      venue:   "Science of the Total Environment, 960, 178312.",
      linkLabel: "DOI ↗ 10.1016/j.scitotenv.2024.178312",
      url:     "https://doi.org/10.1016/j.scitotenv.2024.178312"
    },
    {
      year:    "2025",
      title:   "Structural and functional connectivity of thermal refuges in a desert city",
      authors: "<strong>Rashid, B.</strong>, et al. — impacts of climate change and urbanization on desert wildlife",
      venue:   "Land, 14(3), 480.",
      linkLabel: "DOI ↗ 10.3390/land14030480",
      url:     "https://doi.org/10.3390/land14030480"
    },
    {
      year:    "2025",
      title:   "Gaps in U.S. livestock data are a barrier to effective environmental and disease management",
      authors: "Nelson, N. G., <strong>Rashid, B.</strong>, Saha, A., et al.",
      venue:   "PLOS (open access).",
      linkLabel: "Read ↗ PMC11811603",
      url:     "https://pmc.ncbi.nlm.nih.gov/articles/PMC11811603/"
    },
    {
      year:    "2024",
      title:   "Navigating Earth Sciences: addressing equity and sustainability",
      authors: "<strong>Rashid, B.</strong> — GeoScienceWorld Diversity &amp; Representation Award essay",
      venue:   "Lithosphere, 2024(3).",
      linkLabel: "Read ↗ GeoScienceWorld",
      url:     "https://pubs.geoscienceworld.org/gsw/lithosphere"
    }
  ],

  /* ----------------------------------------------------------------- HONORS */
  honors: [
    { tag: "2024",       title: "GeoScienceWorld Diversity & Representation Award", blurb: "Inaugural recipient. A $5,000 scholarship recognizing graduate students advancing equity in the Earth sciences; winning essay published in Lithosphere." },
    { tag: "Fellowship", title: "NASA LifeLines Fellow",        blurb: "Developing open-access data studio packages that make Earth-observation data actionable for decision-makers without geospatial expertise." },
    { tag: "Program",    title: "NASA DEVELOP",                 blurb: "National capacity-building program; applied Earth-observation data to develop an automated method for detecting aquatic vegetation." },
    { tag: "Center",     title: "NSF STEPS Graduate Researcher",blurb: "Science and Technologies for Phosphorus Sustainability Center — an NSF-funded national research center (award CBET-2019435)." },
    { tag: "Grant",      title: "ASPRS Student Presentation Grant", blurb: "Awarded for presenting managed-aquifer-recharge water-level analysis using PlanetScope imagery, with complimentary ASPRS membership." },
    { tag: "Program",    title: "IEEE GRSS IDEA Program",       blurb: "Professional-development support for women and underrepresented students advancing degrees in geoscience and remote sensing." }
  ],

  /* -------------------------------------------------- SCIENCE COMMUNICATION */
  /* icon options: "wave" | "layers" | "podium" | "map"                        */
  outreach: [
    { icon: "wave",   title: "PhosForUs Podcast",          blurb: "Co-created podcast translating phosphorus science and sustainability for a general audience.", url: "", linkLabel: "Listen ↗" },
    { icon: "layers", title: "NASA LifeLines Data Studio", blurb: "Open-access geospatial modules on food security and landslide risk, built with Earth-science review boards, USGS, and humanitarian NGOs.", url: "https://nasalifelines.org/current-fellows/", linkLabel: "Fellows page ↗" },
    { icon: "podium", title: "Talks & School Outreach",    blurb: "Invited speaker events and K–12 engagement introducing students to Earth observation and GIS.", url: "", linkLabel: "" }
  ],

  /* ---------------------------------------------------------------- CONTACT */
  contact: {
    titleHTML: "Let's <em>map</em> something together",
    lead:  "Open to research collaborations, data partnerships, and science-communication work.",
    colophon: "Barira Rashid · Fayetteville, Arkansas · Built on GitHub Pages · Basemap © OpenStreetMap contributors, © CARTO"
  }
};
