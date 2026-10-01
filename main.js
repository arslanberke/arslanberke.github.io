const MAIL = "mail@berke.cc";
const GH = "https://github.com/arslanberke";

const FLAG = {
  tr: `<svg viewBox="0 0 30 20" aria-hidden="true"><rect width="30" height="20" fill="#e30a17"/><circle cx="11" cy="10" r="5" fill="#fff"/><circle cx="12.3" cy="10" r="4" fill="#e30a17"/><polygon fill="#fff" points="15.6,10 19.6,8.7 17.1,12.1 17.1,7.9 19.6,11.3"/></svg>`,
  en: `<svg viewBox="0 0 60 30" aria-hidden="true"><clipPath id="u"><path d="M30,15h30v15zv15h-30zh-30v-15zv-15h30z"/></clipPath><path d="M0,0v30h60v-30z" fill="#012169"/><path d="M0,0 60,30M60,0 0,30" stroke="#fff" stroke-width="6"/><path d="M0,0 60,30M60,0 0,30" clip-path="url(#u)" stroke="#c8102e" stroke-width="4"/><path d="M30,0v30M0,15h60" stroke="#fff" stroke-width="10"/><path d="M30,0v30M0,15h60" stroke="#c8102e" stroke-width="6"/></svg>`,
};

const projects = [
  {
    name: "SportPulse", accent: "#10b981", type: "phone", shot: "assets/shots/sp-3.jpg",
    repo: "https://github.com/arslanberke/sportpulse",
    tags: ["React Native", "Expo", "Supabase", "Edge Functions", "TanStack Query"],
    tr: { kind: "iOS uygulaması", desc: "Hangi maç, ne zaman, hangi kanalda: futbol, basketbol, F1, MotoGP, UFC, tenis ve voleybol için tek kronolojik fikstür akışı, canlı skor ve hatırlatıcılar." },
    en: { kind: "iOS app", desc: "Which match, when, and on which channel: one chronological fixture feed with live scores and reminders for football, basketball, F1, MotoGP, UFC, tennis and volleyball." },
  },
  {
    name: "Istanbul Routes", accent: "#1f5f4f", type: "phone", shot: "assets/shots/ir-1.jpg", repo: null,
    tags: ["React Native", "MapLibre GL", "Valhalla", "Supabase", "Zustand"],
    tr: { kind: "Mobil gezi planlayıcı", desc: "Süreni ve ilgi alanlarını seç; yürüyüş + vapur/tramvay/metro bacaklarıyla optimize edilmiş bir İstanbul rotası çıksın." },
    en: { kind: "Mobile trip planner", desc: "Pick your time budget and interests; get an optimized Istanbul route with walking, ferry, tram and metro legs." },
  },
  {
    name: "LexPulse", accent: "#b45309", type: "browser", shot: "assets/shots/lex-1.jpg", repo: null,
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Gemini"],
    tr: { kind: "Web platformu", desc: "AI destekli hukuk haberleri: resmî kaynaklardan derlenen gelişmeler yapay zekâ ile özetlenir, editör onayından geçer ve iki dakikada okunur." },
    en: { kind: "Web platform", desc: "AI-powered legal news: updates from official sources are summarized by AI, reviewed by an editor and readable in under two minutes." },
  },
  {
    name: "TFT Comp Advisor", accent: "#6366f1", type: "browser", shot: "assets/shots/tft-1.jpg",
    repo: "https://github.com/arslanberke/tft-helper",
    tags: ["Python", "FastAPI", "Overwolf", "Pydantic"],
    tr: { kind: "Oyun içi overlay", desc: "Teamfight Tactics için canlı kompozisyon, ekonomi ve augment önerileri veren Overwolf overlay'i ve karar servisi." },
    en: { kind: "In-game overlay", desc: "Overwolf overlay and decision service giving live comp, economy and augment advice for Teamfight Tactics." },
  },
  {
    name: "CoachFlow", accent: "#16a34a", type: "phone", shot: "assets/shots/cf-login.jpg",
    repo: "https://github.com/arslanberke/coachflow",
    tags: ["React Native", "Expo", "Supabase", "Zod"],
    tr: { kind: "Mobil uygulama", desc: "Özel spor hocaları ve öğrencileri için ders planlama: hoca boş saatlerini yayınlar, öğrenci tek dokunuşla ders ister." },
    en: { kind: "Mobile app", desc: "Lesson scheduling for private coaches and their students: coaches publish open slots, students request a lesson in one tap." },
  },
];

const tech = ["React Native", "Expo", "TypeScript", "Next.js", "Supabase", "PostgreSQL", "Prisma", "Python", "FastAPI", "MapLibre", "TailwindCSS", "Gemini", "Zustand", "Deno"];

const i18n = {
  tr: {
    "nav.work": "Projeler", "nav.about": "Hakkımda", "nav.contact": "İletişim",
    "hero.badge": "AI ile ürün geliştiriyorum", "hero.title": "fikirleri ürüne çevirir.",
    "hero.lead": "Ürünü ben tasarlıyorum, kodu AI ajanlarıyla (Devin, Claude, ChatGPT) yazdırıyorum; test edip yayına alıyorum.",
    "work.eyebrow": "Seçili işler", "work.title": "Yaptığım ürünler",
    "about.eyebrow": "Hakkımda", "about.title": "Nasıl çalışıyorum",
    "contact.eyebrow": "İletişim", "contact.title": "Birlikte çalışalım.",
    role: "AI destekli ürün geliştirici",
    bio: "Klasik anlamda yazılımcı değilim; “vibe coding” ile çalışıyorum. Neyin yapılacağına ve kullanıcı deneyimine ben karar veriyorum, kodu AI yazıyor. Bu şekilde tek başıma 5 ürünü fikirden yayına taşıdım.",
    statNum: "AI ile geliştirdiğim ürün", now: "Şu an", nowText: "SportPulse'u geliştiriyorum",
    github: "GitHub'da incele →", private: "🔒 Özel repo",
    mail: "E-posta", copy: "Kopyala", copied: "Kopyalandı ✓", ghText: "Açık kaynak projelerim",
    skills: [
      ["Fikir & ürün tasarımı", "Problemi bulup ekranları, akışları ve özellikleri kurguluyorum; neyin önemli olduğuna karar veriyorum."],
      ["AI ile geliştirme", "Devin, Claude ve ChatGPT gibi AI ajanlarına işi tarif edip kodu yazdırıyorum; çıktıyı inceleyip yönlendiriyorum."],
      ["Test", "Uygulamayı simülatörde ve telefonda deneyip hataları buluyor, düzelttiriyorum."],
      ["Yayına alma", "TestFlight, EAS / OTA güncellemeleri, GitHub Pages, alan adı ve DNS."],
      ["Veri & entegrasyon", "Spor fikstürü, harita/rota, hukuk kaynakları gibi gerçek veri kaynaklarını ürüne bağlatmak."],
      ["Projelerde kullanılan teknolojiler", "React Native, Expo, Next.js, Supabase, Python / FastAPI, MapLibre, Gemini"],
    ],
  },
  en: {
    "nav.work": "Work", "nav.about": "About", "nav.contact": "Contact",
    "hero.badge": "Building products with AI", "hero.title": "turns ideas into products.",
    "hero.lead": "I design the product, have AI agents (Devin, Claude, ChatGPT) write the code, then test it and ship it.",
    "work.eyebrow": "Selected work", "work.title": "Products I've built",
    "about.eyebrow": "About", "about.title": "How I work",
    "contact.eyebrow": "Contact", "contact.title": "Let's work together.",
    role: "AI-assisted product builder",
    bio: "I'm not a traditional software engineer; I work with “vibe coding”. I decide what gets built and how it feels to use, and AI writes the code. That's how I've taken 5 products from idea to launch on my own.",
    statNum: "products built with AI", now: "Now", nowText: "Working on SportPulse",
    github: "View on GitHub →", private: "🔒 Private repo",
    mail: "Email", copy: "Copy", copied: "Copied ✓", ghText: "My open-source projects",
    skills: [
      ["Idea & product design", "I find the problem and shape the screens, flows and features; I decide what matters."],
      ["Building with AI", "I describe the work to AI agents like Devin, Claude and ChatGPT, review the output and steer it."],
      ["Testing", "I try the app on the simulator and on my phone, find bugs and get them fixed."],
      ["Shipping", "TestFlight, EAS / OTA updates, GitHub Pages, domains and DNS."],
      ["Data & integrations", "Wiring real data sources into products: sports fixtures, maps/routing, legal sources."],
      ["Technologies used in my projects", "React Native, Expo, Next.js, Supabase, Python / FastAPI, MapLibre, Gemini"],
    ],
  },
};

const frame = (p) =>
  p.type === "phone"
    ? `<div class="dev-phone"><div class="dev-body"><img src="${p.shot}" alt="${p.name}" loading="lazy"><i class="island"></i></div></div>`
    : `<div class="dev-win"><div class="dev-bar"><i></i><i></i><i></i></div><img src="${p.shot}" alt="${p.name}" loading="lazy"></div>`;

const $ = (id) => document.getElementById(id);
const reveal = new IntersectionObserver(
  (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); reveal.unobserve(e.target); } }),
  { threshold: 0.15 },
);

$("stack").innerHTML = [1, 0, 4].map((i, k) => frame(projects[i]).replace('class="dev-phone"', `class="dev-phone ${"abc"[k]}"`)).join("");
$("stage").insertAdjacentHTML("beforeend", projects.map(frame).join(""));
const items = [...$("stage").querySelectorAll(".dev-phone,.dev-win")];
let active = 0;
const show = (i) => {
  active = i;
  items.forEach((el, k) => el.classList.toggle("on", k === i));
  document.querySelectorAll(".st").forEach((s, k) => s.classList.toggle("act", k === i));
  $("glow").style.background = projects[i].accent;
};
const stepIO = new IntersectionObserver(
  (es) => es.forEach((e) => e.isIntersecting && show(+e.target.dataset.i)),
  { rootMargin: "-45% 0px -45% 0px" },
);

function render(lang) {
  const t = i18n[lang];
  $("steps").innerHTML = projects.map((p, i) => `<div class="st" data-i="${i}"><small>0${i + 1} · ${p[lang].kind}</small><h3>${p.name}</h3><p>${p[lang].desc}</p><ul>${p.tags.map((x) => `<li>${x}</li>`).join("")}</ul>${p.repo ? `<a class="lnk" href="${p.repo}" target="_blank" rel="noopener">${t.github}</a>` : `<span class="lnk priv">${t.private}</span>`}</div>`).join("");
  document.querySelectorAll(".st").forEach((s) => stepIO.observe(s));
  show(active);

  $("bento").innerHTML = `<div class="t s2 about reveal"><div class="av"></div><div><h3>Berke Arslan</h3><div class="role">${t.role}</div><p>${t.bio}</p></div></div>
<div class="t stat reveal"><b>5</b><span>${t.statNum}</span></div>
<div class="t stat reveal"><span><i class="dot"></i> ${t.now}</span><b style="font-size:24px;margin-top:10px;line-height:1.2">${t.nowText}</b></div>
${t.skills.map(([h, p], i) => `<div class="t ${i < 2 ? "s2" : ""} reveal"><h4>${h}</h4><p>${p}</p></div>`).join("")}
<div class="marq-w"><div class="marq">${[0, 1].map(() => tech.map((x) => `<span>${x}</span>`).join("")).join("")}</div></div>`;

  $("contactg").innerHTML = `<div class="t s2 mail reveal"><h4>${t.mail}</h4><b><a href="mailto:${MAIL}">${MAIL}</a></b><button id="copy">${t.copy}</button></div>
<a class="t s2 soc reveal" href="${GH}" target="_blank" rel="noopener"><span class="ar">→</span><h4 lang="en">GitHub</h4><b>@arslanberke</b><p>${t.ghText}</p></a>`;
  $("copy").onclick = (e) => { navigator.clipboard.writeText(MAIL); e.target.textContent = t.copied; };

  document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t[el.dataset.i18n]; });
  document.querySelectorAll(".reveal").forEach((el) => reveal.observe(el));
  document.documentElement.lang = lang;
  $("lang").innerHTML = lang === "tr" ? `${FLAG.en} EN` : `${FLAG.tr} TR`;
  localStorage.setItem("lang", lang);
}

$("lang").onclick = () => render(document.documentElement.lang === "tr" ? "en" : "tr");
$("year").textContent = new Date().getFullYear();
render(localStorage.getItem("lang") || (navigator.language.startsWith("tr") ? "tr" : "en"));

addEventListener("pointermove", (e) => {
  document.body.style.setProperty("--x", e.clientX + "px");
  document.body.style.setProperty("--y", e.clientY + "px");
  const x = e.clientX / innerWidth - 0.5, y = e.clientY / innerHeight - 0.5;
  $("stack").style.transform = `rotateY(${x * 10}deg) rotateX(${-y * 8}deg)`;
});
