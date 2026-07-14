/* =============================================================================
   main.js — renders the page from data.js and builds the journey map.
   You shouldn't need to edit this file. Content lives in data.js.
   ========================================================================== */
(function () {
  "use strict";

  var $ = function (id) { return document.getElementById(id); };
  var esc = function (s) { return String(s == null ? "" : s); };

  /* ------------------------------------------------------------- ICON SETS */
  var RESEARCH_ICONS = {
    raster: '<path d="M4 10 18 5 30 10 44 5v33L30 43 18 38 4 43Z"/><path d="M18 5v33M30 10v33" opacity=".45"/><rect x="22" y="18" width="12" height="9" stroke="#C42E63" stroke-width="2.2"/>',
    water:  '<path d="M24 6c7 9 12 15 12 22a12 12 0 0 1-24 0c0-7 5-13 12-22Z"/><path d="M18 30c2 3 10 3 12 0" stroke="#0B8A8F"/>',
    network:'<circle cx="10" cy="14" r="4"/><circle cx="38" cy="10" r="4"/><circle cx="24" cy="30" r="4" stroke="#C42E63"/><circle cx="14" cy="40" r="3.5"/><path d="M13 16 21 28M35 13 27 27M22 33 16 37" opacity=".65"/>',
    globe:  '<circle cx="24" cy="24" r="18"/><path d="M6 24h36M24 6c6 6 6 30 0 36M24 6c-6 6-6 30 0 36" opacity=".5"/><circle cx="24" cy="24" r="3" fill="#FFC24B" stroke="none"/>'
  };

  var OUT_ICONS = {
    wave:   '<svg class="out-ico" viewBox="0 0 120 30" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M4 15h6M16 15h4M26 8v14M34 3v24M42 10v10M50 6v18M58 12v6M66 4v22M74 9v12M82 2v26M90 11v8M98 6v18M106 13v4M114 15h2"/></svg>',
    layers: '<svg class="out-ico" viewBox="0 0 40 30" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 11 20 4l16 7-16 7Z"/><path d="M4 17l16 7 16-7" opacity=".6"/><path d="M4 23l16 7 16-7" opacity=".35"/></svg>',
    podium: '<svg class="out-ico" viewBox="0 0 34 30" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 22V8l11-4 11 4v14"/><path d="M11 22v-8h12v8" opacity=".7"/><path d="M4 22h26"/></svg>',
    map:    '<svg class="out-ico" viewBox="0 0 34 30" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="28" height="22"/><path d="M3 11h28M12 4v22" opacity=".6"/><circle cx="21" cy="18" r="3" fill="#FFC24B" stroke="none"/></svg>'
  };

  var THUMBS = {
    fields:
      '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg"><rect width="320" height="200" fill="#1FB7C4"/>' +
      '<rect x="10" y="12" width="96" height="62" fill="#FF5C8A"/><rect x="112" y="12" width="70" height="40" fill="#0E1236"/>' +
      '<rect x="112" y="58" width="70" height="46" fill="#FF87A9"/><rect x="188" y="12" width="80" height="48" fill="#E23E6E"/>' +
      '<rect x="274" y="12" width="38" height="90" fill="#FF5C8A"/><rect x="10" y="82" width="60" height="66" fill="#FF87A9"/>' +
      '<circle cx="228" cy="104" r="34" fill="#FF5C8A"/><circle cx="292" cy="152" r="26" fill="#E23E6E"/>' +
      '<path d="M0 160 C70 152 96 190 160 186 C224 182 240 200 320 194 L320 200 L0 200 Z" fill="#0E1236"/>' +
      '<rect x="96" y="112" width="26" height="14" fill="#FFC24B"/><rect x="96" y="130" width="26" height="14" fill="#FFC24B"/>' +
      '<rect x="90" y="106" width="46" height="46" fill="none" stroke="#FFC24B" stroke-width="2" stroke-dasharray="4 3"/></svg>',
    terrain:
      '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg"><rect width="320" height="200" fill="#141138"/>' +
      '<g fill="none" stroke="#FF5C8A" stroke-width="1.6" opacity=".85">' +
      '<path d="M-10 150 C60 120 90 168 160 140 C230 112 260 158 330 130"/><path d="M-10 130 C60 100 90 148 160 120 C230 92 260 138 330 110"/>' +
      '<path d="M-10 110 C60 80 90 128 160 100 C230 72 260 118 330 90"/><path d="M-10 90 C60 60 90 108 160 80 C230 52 260 98 330 70"/>' +
      '<path d="M-10 70 C60 40 90 88 160 60 C230 32 260 78 330 50" stroke="#FFC24B"/>' +
      '<path d="M-10 170 C60 140 90 188 160 160 C230 132 260 178 330 150" stroke="#19C7B6"/></g>' +
      '<path d="M150 44 L166 92 L134 92 Z" fill="#FFC24B" opacity=".9"/><circle cx="150" cy="104" r="5" fill="#FF5C8A"/></svg>',
    globe:
      '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg"><rect width="320" height="200" fill="#0E1236"/>' +
      '<g fill="none" stroke="#19C7B6" stroke-width="1.3" opacity=".6"><circle cx="160" cy="100" r="76"/>' +
      '<ellipse cx="160" cy="100" rx="30" ry="76"/><ellipse cx="160" cy="100" rx="56" ry="76"/>' +
      '<path d="M84 100h152M96 62h128M96 138h128"/></g>' +
      '<circle cx="132" cy="76" r="7" fill="#FF5C8A"/><circle cx="192" cy="118" r="7" fill="#FFC24B"/>' +
      '<circle cx="176" cy="66" r="5" fill="#FF87A9"/><circle cx="118" cy="128" r="5" fill="#19C7B6"/></svg>'
  };

  /* ----------------------------------------------------------------- HERO */
  function renderHero() {
    var p = SITE.profile, el = $("hero-copy");
    if (!el) return;
    document.getElementById("brand-name").textContent = p.firstName + " " + p.lastName;

    var meta = (p.meta || []).map(function (m) {
      return '<span><b>' + esc(m.label) + '</b> ' + esc(m.value) + '</span>';
    }).join("");

    var L = p.links || {};
    var btns = '<a class="btn solid" href="mailto:' + esc(p.email) + '">✉ Email</a>';
    if (p.cv)           btns += '<a class="btn" href="' + esc(p.cv) + '" target="_blank" rel="noopener">CV ↗</a>';
    if (L.linkedin)     btns += '<a class="btn" href="' + esc(L.linkedin) + '" target="_blank" rel="noopener">LinkedIn ↗</a>';
    if (L.scholar)      btns += '<a class="btn" href="' + esc(L.scholar) + '" target="_blank" rel="noopener">Scholar ↗</a>';
    if (L.researchgate) btns += '<a class="btn" href="' + esc(L.researchgate) + '" target="_blank" rel="noopener">ResearchGate ↗</a>';

    el.innerHTML =
      '<div class="hero-eyebrow">' + esc(p.eyebrow) + '</div>' +
      '<h1>' + esc(p.firstName) + '<br><em>' + esc(p.lastName) + '</em></h1>' +
      '<p class="role">' + esc(p.role) + '</p>' +
      '<p class="thesis">' + esc(p.thesis) + '</p>' +
      (p.quip ? '<span class="quip">' + esc(p.quip) + '</span>' : "") +
      '<div class="coords">' + meta + '</div>' +
      '<div class="cta-row">' + btns + '</div>';
  }

  /* ----------------------------------------------------------- STORY MAPS */
  function renderStorymaps() {
    var grid = $("sm-grid");
    if (!grid) return;
    grid.innerHTML = (SITE.storymaps || []).map(function (s) {
      var live = s.url && s.url.trim().length;
      var inner =
        '<div class="sm-thumb">' + (THUMBS[s.thumb] || THUMBS.fields) + '</div>' +
        '<div class="sm-body">' +
          '<span class="sm-kicker">' + esc(s.kicker) + '</span>' +
          '<h3>' + esc(s.title) + '</h3>' +
          '<p>' + esc(s.blurb) + '</p>' +
          (live ? '<span class="sm-go">Open the story ↗</span>'
                : '<span class="sm-pending">Add URL in data.js</span>') +
        '</div>';
      return live
        ? '<a class="sm-card live" href="' + esc(s.url) + '" target="_blank" rel="noopener">' + inner + '</a>'
        : '<div class="sm-card">' + inner + '</div>';
    }).join("");
  }

  /* ---------------------------------------------------------------- ABOUT */
  function renderAbout() {
    var a = SITE.about, el = $("about-grid");
    if (!el) return;
    var tk = (a.toolkit || []).map(function (t, i, arr) {
      return '<span>' + esc(t) + '</span>' + (i < arr.length - 1 ? '<span class="d">/</span>' : "");
    }).join("");
    el.innerHTML =
      '<p class="lead">' + esc(a.lead) + '</p>' +
      '<div>' + (a.paragraphs || []).map(function (p) { return '<p>' + esc(p) + '</p>'; }).join("") +
        '<div class="toolkit"><b>Toolkit</b>' + tk + '</div></div>';
  }

  /* ------------------------------------------------------------- RESEARCH */
  function renderResearch() {
    var el = $("research-cards");
    if (!el) return;
    el.innerHTML = (SITE.research || []).map(function (r) {
      return '<div class="card">' +
        '<svg class="card-ico" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6">' +
        (RESEARCH_ICONS[r.icon] || RESEARCH_ICONS.globe) + '</svg>' +
        '<h3>' + esc(r.title) + '</h3><p>' + esc(r.blurb) + '</p>' +
        (r.tag ? '<span class="tag">' + esc(r.tag) + '</span>' : "") +
        '</div>';
    }).join("");
  }

  /* --------------------------------------------------------- PUBLICATIONS */
  function renderPubs() {
    var el = $("pub-list");
    if (!el) return;
    el.innerHTML = (SITE.publications || []).map(function (p) {
      return '<div class="pub"><div class="yr">' + esc(p.year) + '</div><div>' +
        '<p class="title">' + esc(p.title) + '</p>' +
        '<p class="authors">' + p.authors + '</p>' +
        '<p class="venue">' + esc(p.venue) + '</p>' +
        (p.url ? '<a class="doi" href="' + esc(p.url) + '" target="_blank" rel="noopener">' + esc(p.linkLabel || "Read ↗") + '</a>' : "") +
        '</div></div>';
    }).join("");
  }

  /* --------------------------------------------------------------- HONORS */
  function renderHonors() {
    var el = $("honor-grid");
    if (!el) return;
    el.innerHTML = (SITE.honors || []).map(function (h) {
      return '<div class="honor"><div class="hy">' + esc(h.tag) + '</div>' +
        '<h3>' + esc(h.title) + '</h3><p>' + esc(h.blurb) + '</p></div>';
    }).join("");
  }

  /* ------------------------------------------------------------- OUTREACH */
  function renderOutreach() {
    var el = $("out-list");
    if (!el) return;
    el.innerHTML = (SITE.outreach || []).map(function (o) {
      var link = "";
      if (o.url)                 link = '<a class="todo" href="' + esc(o.url) + '" target="_blank" rel="noopener">' + esc(o.linkLabel || "Open ↗") + '</a>';
      else if (o.linkLabel)      link = '<span class="todo">↗ add link in data.js</span>';
      return '<div class="out">' + (OUT_ICONS[o.icon] || OUT_ICONS.map) +
        '<h3>' + esc(o.title) + '</h3><p>' + esc(o.blurb) + '</p>' + link + '</div>';
    }).join("");
  }

  /* ------------------------------------------------------------ EDUCATION */
  function renderEducation() {
    var el = $("edu-list");
    if (!el) return;
    var d = (SITE.degrees || []).slice();
    // newest first for reading; pin numbers stay chronological
    el.innerHTML = d.map(function (x, i) { x._n = i + 1; return x; }).reverse().map(function (x) {
      return '<div class="edu-item' + (x.current ? " current" : "") + '">' +
        '<div class="edu-n">' + (x._n < 10 ? "0" + x._n : x._n) + '</div>' +
        '<div class="edu-deg">' + esc(x.degree) + '</div>' +
        (x.note ? '<div class="edu-meta">' + esc(x.note) + '</div>' : "") +
        '<div class="edu-place">' + esc(x.school) + ' · ' + esc(x.place) + '</div>' +
        '</div>';
    }).join("");
  }

  /* -------------------------------------------------------------- CONTACT */
  function renderContact() {
    var c = SITE.contact, p = SITE.profile, el = $("contact-block");
    if (!el) return;
    var L = p.links || {};
    var links = "";
    if (L.linkedin)     links += '<a href="' + esc(L.linkedin) + '" target="_blank" rel="noopener">LinkedIn</a>';
    if (L.researchgate) links += '<a href="' + esc(L.researchgate) + '" target="_blank" rel="noopener">ResearchGate</a>';
    if (L.scholar)      links += '<a href="' + esc(L.scholar) + '" target="_blank" rel="noopener">Google Scholar</a>';
    if (L.orcid)        links += '<a href="' + esc(L.orcid) + '" target="_blank" rel="noopener">ORCID</a>';

    el.innerHTML =
      '<div class="legend hollow">Legend · Contact</div>' +
      '<h2 class="section-title">' + c.titleHTML + '</h2>' +
      '<p class="lead">' + esc(c.lead) + '</p>' +
      '<a class="mail" href="mailto:' + esc(p.email) + '">' + esc(p.email) + '</a>' +
      '<div class="foot-links">' + links + '</div>' +
      '<div class="colophon">' + esc(c.colophon) + '</div>';
  }

  /* ------------------------------------------------------------------ NAV */
  function initNav() {
    var nav = $("nav");
    if (!nav) return;
    function upd() { nav.classList.toggle("scrolled", window.scrollY > 60); }
    upd();
    window.addEventListener("scroll", upd, { passive: true });
  }

  /* --------------------------------------------------------- JOURNEY MAP */
  function haversine(a, b) {
    var R = 6371, toRad = function (x) { return x * Math.PI / 180; };
    var dLat = toRad(b[0] - a[0]), dLon = toRad(b[1] - a[1]);
    var s = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRad(a[0])) * Math.cos(toRad(b[0])) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    return 2 * R * Math.asin(Math.sqrt(s));
  }

  function arc(a, b) {
    var lat1 = a[0], lng1 = a[1], lat2 = b[0], lng2 = b[1];
    var mLat = (lat1 + lat2) / 2, mLng = (lng1 + lng2) / 2;
    var dx = lng2 - lng1, dy = lat2 - lat1;
    var lift = Math.min(Math.sqrt(dx * dx + dy * dy) * 0.18, 22);
    var cLat = mLat + lift, cLng = mLng, pts = [];
    for (var t = 0; t <= 1.001; t += 0.02) {
      pts.push([
        (1 - t) * (1 - t) * lat1 + 2 * (1 - t) * t * cLat + t * t * lat2,
        (1 - t) * (1 - t) * lng1 + 2 * (1 - t) * t * cLng + t * t * lng2
      ]);
    }
    return pts;
  }

  function initMap() {
    var el = $("journey");
    if (!el) return;
    if (typeof L === "undefined") {
      var s = $("jmap-status");
      if (s) s.textContent = "Map loads when online";
      return;
    }
    var D = SITE.degrees || [], S = SITE.fieldSites || [];

    // total distance travelled, shown in the panel caption
    var total = 0;
    for (var i = 0; i < D.length - 1; i++) total += haversine(D[i].coords, D[i + 1].coords);
    var dist = $("jmap-dist");
    if (dist) dist.textContent = Math.round(total / 100) * 100 + " km";

    var map = L.map("journey", { scrollWheelZoom: true, attributionControl: false, worldCopyJump: true })
                .setView([36, -25], 2);
    L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
                { maxZoom: 19, subdomains: "abcd" }).addTo(map);
    L.control.scale({ imperial: true, metric: true, position: "bottomleft" }).addTo(map);

    function pin(n, cls) {
      return L.divIcon({ className: "", html: '<div class="pin ' + (cls || "") + '">' + n + "</div>",
                         iconSize: [22, 22], iconAnchor: [11, 11] });
    }

    var degreeLayer = L.layerGroup(), siteLayer = L.layerGroup();

    for (var j = 0; j < D.length - 1; j++) {
      L.polyline(arc(D[j].coords, D[j + 1].coords),
        { color: "#FF5C8A", weight: 1.6, opacity: .75, dashArray: "5 6" }).addTo(degreeLayer);
    }
    D.forEach(function (d, k) {
      L.marker(d.coords, { icon: pin(k + 1) }).addTo(degreeLayer)
       .bindPopup("<strong>" + esc(d.school) + "</strong><br>" + esc(d.degree) + "<br><em>" + esc(d.place) + "</em>");
    });
    S.forEach(function (s) {
      L.marker(s.coords, { icon: pin("◆", "site") }).addTo(siteLayer)
       .bindPopup("<strong>" + esc(s.title) + "</strong><br>" + esc(s.blurb));
    });

    degreeLayer.addTo(map);
    L.control.layers(null, { "Degrees": degreeLayer, "Field sites": siteLayer },
                     { collapsed: false, position: "topright" }).addTo(map);

    if (D.length) map.fitBounds(L.latLngBounds(D.map(function (d) { return d.coords; })).pad(0.35));
    setTimeout(function () { map.invalidateSize(); }, 250);
  }

  /* --------------------------------------------------------------- REVEAL */
  function initReveal() {
    var els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (e) { e.classList.add("in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (x) {
        if (x.isIntersecting) { x.target.classList.add("in"); io.unobserve(x.target); }
      });
    }, { threshold: .1 });
    els.forEach(function (e) { io.observe(e); });
  }

  /* ------------------------------------------------------------------ RUN */
  function boot() {
    if (typeof SITE === "undefined") { console.error("data.js failed to load"); return; }
    renderHero(); renderStorymaps(); renderAbout(); renderResearch();
    renderPubs(); renderHonors(); renderOutreach(); renderEducation(); renderContact();
    initNav(); initReveal();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();

  window.addEventListener("load", initMap);
})();
