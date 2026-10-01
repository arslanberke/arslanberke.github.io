const projects = [
  {
    name: "SportPulse",
    initials: "SP",
    color: "linear-gradient(135deg,#facc15,#f97316)",
    repo: "https://github.com/arslanberke/sportpulse",
    tags: ["React Native", "Expo", "TypeScript", "Supabase", "Deno Edge Functions", "TanStack Query"],
    tr: {
      kind: "iOS uygulaması",
      desc: "Hangi maç, ne zaman, hangi kanalda: futbol, basketbol, F1, MotoGP, UFC, tenis ve voleybol için tek kronolojik liste ve hatırlatıcılar.",
      points: [
        "Takip edilen spor/lig/takımlara göre kişisel fikstür akışı",
        "Birden fazla kaynaktan fikstür birleştiren sağlayıcı katmanı (Edge Functions)",
        "Canlı skor, kadrolar, iOS Dynamic Island / Live Activities",
        "Sessiz saatler, takvime ekleme (.ics), TR/EN dil desteği",
      ],
    },
    en: {
      kind: "iOS app",
      desc: "Which match, when, and on which channel: one chronological list with reminders for football, basketball, F1, MotoGP, UFC, tennis and volleyball.",
      points: [
        "Personal fixture feed based on followed sports, leagues and teams",
        "Provider layer merging fixtures from multiple sources (Edge Functions)",
        "Live scores, lineups, iOS Dynamic Island / Live Activities",
        "Quiet hours, add to calendar (.ics), TR/EN localization",
      ],
    },
  },
  {
    name: "Istanbul Routes",
    initials: "IR",
    color: "linear-gradient(135deg,#38bdf8,#6366f1)",
    repo: null,
    tags: ["React Native", "Expo", "MapLibre GL", "Valhalla", "Supabase", "Zustand"],
    tr: {
      kind: "Mobil gezi planlayıcı",
      desc: "Gezmek istediğin yerleri seç; uygulama süre bütçene ve ilgi alanlarına göre optimize edilmiş yürüyüş + toplu taşıma rotası üretsin.",
      points: [
        "2-opt tabanlı sıralama, gün batımı ve kapanış saatlerine göre planlama",
        "Vapur, tramvay, metro ve Marmaray bacakları; eğim ve yağmur riski",
        "3D vektör harita, tarihi harita katmanları, çevrimdışı çalışma",
        "Çok günlük planlar ve gezi günlüğü",
      ],
    },
    en: {
      kind: "Mobile trip planner",
      desc: "Pick the places you want to see; the app builds an optimized walking + transit route for your time budget and interests.",
      points: [
        "2-opt based ordering, planning around sunsets and opening hours",
        "Ferry, tram, metro and Marmaray legs; slope and rain risk",
        "3D vector map, historic map overlays, offline support",
        "Multi-day plans and a trip journal",
      ],
    },
  },
  {
    name: "TFT Comp Advisor",
    initials: "TF",
    color: "linear-gradient(135deg,#a78bfa,#ec4899)",
    repo: "https://github.com/arslanberke/tft-helper",
    tags: ["Python", "FastAPI", "Overwolf", "JavaScript", "Pydantic"],
    tr: {
      kind: "Oyun içi overlay + karar servisi",
      desc: "Teamfight Tactics için canlı kompozisyon, ekonomi ve augment önerileri veren Overwolf overlay'i ve Python karar servisi.",
      points: [
        "Overwolf GEP ile oyun durumunun anlık takibi",
        "Birden fazla karar modelini olasılık bazında birleştiren ensemble katmanı",
        "Meta sitelerinden (tactics.tools, MetaTFT, Mobalytics) tier list birleştirme",
        "Tek tıkla Windows kurulum",
      ],
    },
    en: {
      kind: "In-game overlay + decision service",
      desc: "Overwolf overlay and Python decision service giving live comp, economy and augment advice for Teamfight Tactics.",
      points: [
        "Real-time game state tracking via Overwolf GEP",
        "Ensemble layer fusing multiple decision models by probability",
        "Tier-list merging from meta sites (tactics.tools, MetaTFT, Mobalytics)",
        "One-click Windows installer",
      ],
    },
  },
  {
    name: "LexPulse",
    initials: "LP",
    color: "linear-gradient(135deg,#34d399,#0ea5e9)",
    repo: null,
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "TailwindCSS", "Gemini"],
    tr: {
      kind: "Web platformu",
      desc: "AI destekli hukuk haberleri: resmî kaynaklardan derlenen gelişmeler yapay zekâ ile özetlenir, editör onayından geçer ve iki dakikada okunur.",
      points: [
        "RSS tarayıp taslak makale üreten AI pipeline'ı",
        "Sağlayıcıdan bağımsız AI katmanı (mock / Gemini / OpenAI)",
        "Editör onay paneli, Google ile giriş, kaydedilen makaleler",
      ],
    },
    en: {
      kind: "Web platform",
      desc: "AI-powered legal news: updates from official sources are summarized by AI, reviewed by an editor and readable in under two minutes.",
      points: [
        "AI pipeline that crawls RSS feeds and drafts articles",
        "Provider-agnostic AI layer (mock / Gemini / OpenAI)",
        "Editorial approval panel, Google sign-in, saved articles",
      ],
    },
  },
  {
    name: "CoachFlow",
    initials: "CF",
    color: "linear-gradient(135deg,#4ade80,#16a34a)",
    repo: "https://github.com/arslanberke/coachflow",
    tags: ["React Native", "Expo", "Supabase", "React Hook Form", "Zod"],
    tr: {
      kind: "Mobil uygulama",
      desc: "Özel spor hocaları (ilk olarak tenis) ve öğrencileri için ders planlama: hoca takvimini yayınlar, öğrenci boş saatleri görüp ders ister.",
      points: [
        "Haftalık takvimde boş saat yayınlama ve onay akışı",
        "İptal olunca boşalan saat için öğrencilere bildirim",
        "Öğrenci listesi, e-posta ile otomatik hesap eşleme",
      ],
    },
    en: {
      kind: "Mobile app",
      desc: "Lesson scheduling for private coaches (starting with tennis) and their students: coaches publish slots, students request lessons.",
      points: [
        "Publishing open slots on a weekly calendar with an approval flow",
        "Alerts to students when a cancelled slot opens up",
        "Student roster with automatic account linking by email",
      ],
    },
  },
];

const strings = {
  en: {
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.contact": "Contact",
    "hero.eyebrow": "Hi, I'm",
    "hero.role": "Mobile & Full-Stack Developer",
    "hero.lead": "I build products end to end, from idea to release: mobile apps with React Native / Expo, web with Next.js, backends with Supabase and Python. I like making tools that work with real data and save people time.",
    "hero.cta": "See projects",
    "hero.mail": "Email",
    "projects.title": "Projects",
    "skills.title": "Skills",
    "skills.mobile": "Mobile",
    "skills.web": "Web",
    "skills.data": "Data & AI",
    "skills.dataText": "LLM pipelines (Gemini / OpenAI), probabilistic decision models, third-party API integrations",
    "skills.maps": "Maps & Routing",
    "skills.tools": "Tools",
    "contact.title": "Contact",
    "contact.text": "Reach out about a project, a job opportunity, or just to say hi.",
    code: "View code →",
    private: "Private repo",
  },
  tr: { code: "Kodu incele →", private: "Özel repo" },
};

const trDefaults = {};
document.querySelectorAll("[data-i18n]").forEach((el) => (trDefaults[el.dataset.i18n] = el.innerHTML));

function renderProjects(lang) {
  const t = { ...strings.tr, ...(lang === "en" ? strings.en : {}) };
  document.getElementById("project-grid").innerHTML = projects
    .map((p) => {
      const c = p[lang];
      const foot = p.repo
        ? `<a href="${p.repo}" target="_blank" rel="noopener">${t.code}</a>`
        : `<span class="private">${t.private}</span>`;
      return `<article class="card">
        <div class="card-head">
          <div class="mark" style="background:${p.color}">${p.initials}</div>
          <div><h3>${p.name}</h3><p class="kind">${c.kind}</p></div>
        </div>
        <p class="desc">${c.desc}</p>
        <ul>${c.points.map((x) => `<li>${x}</li>`).join("")}</ul>
        <div class="tags">${p.tags.map((x) => `<span class="tag">${x}</span>`).join("")}</div>
        <div class="card-foot">${foot}</div>
      </article>`;
    })
    .join("");
}

function setLang(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    el.innerHTML = lang === "en" ? strings.en[key] ?? trDefaults[key] : trDefaults[key];
  });
  document.getElementById("lang").textContent = lang === "en" ? "TR" : "EN";
  renderProjects(lang);
  localStorage.setItem("lang", lang);
}

document.getElementById("lang").addEventListener("click", () =>
  setLang(document.documentElement.lang === "en" ? "tr" : "en")
);
document.getElementById("year").textContent = new Date().getFullYear();
setLang(localStorage.getItem("lang") || (navigator.language.startsWith("tr") ? "tr" : "en"));
