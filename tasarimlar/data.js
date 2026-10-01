window.PROJECTS = [
  { name: "SportPulse", kind: "iOS uygulaması", accent: "#10b981", repo: "https://github.com/arslanberke/sportpulse",
    desc: "Hangi maç, ne zaman, hangi kanalda: 7 branş için tek kronolojik fikstür akışı, canlı skor ve hatırlatıcılar.",
    tags: ["React Native", "Expo", "Supabase", "Edge Functions", "TanStack Query"],
    shots: ["shots/sp-3.jpg", "shots/sp-4.jpg", "shots/sp-2.jpg"], type: "phone" },
  { name: "Istanbul Routes", kind: "Mobil gezi planlayıcı", accent: "#1f5f4f", repo: null,
    desc: "Süreni ve ilgi alanlarını seç; yürüyüş + vapur/tramvay/metro bacaklarıyla optimize edilmiş İstanbul rotası çıksın.",
    tags: ["React Native", "MapLibre GL", "Valhalla", "2-opt", "Zustand"],
    shots: ["shots/ir-1.jpg", "shots/ir-2.jpg", "shots/ir-3.jpg"], type: "phone" },
  { name: "LexPulse", kind: "Web platformu", accent: "#b45309", repo: null,
    desc: "AI destekli hukuk haberleri: resmî kaynaklar taranır, yapay zekâ özetler, editör onaylar; iki dakikada okunur.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Gemini"],
    shots: ["shots/lex-1.jpg", "shots/lex-2.jpg"], type: "browser" },
  { name: "TFT Comp Advisor", kind: "Oyun içi overlay + karar servisi", accent: "#6366f1", repo: "https://github.com/arslanberke/tft-helper",
    desc: "Teamfight Tactics için canlı kompozisyon, ekonomi ve augment önerileri veren Overwolf overlay'i ve ensemble karar servisi.",
    tags: ["Python", "FastAPI", "Overwolf", "Pydantic"],
    shots: ["shots/tft-1.jpg"], type: "window" },
  { name: "CoachFlow", kind: "Mobil uygulama", accent: "#16a34a", repo: "https://github.com/arslanberke/coachflow",
    desc: "Özel spor hocaları ve öğrencileri için ders planlama: boş saat yayınla, öğrenci tek dokunuşla ders istesin.",
    tags: ["React Native", "Expo", "Supabase", "Zod"],
    shots: ["shots/cf-login.jpg"], type: "phone" },
];
window.ME = { name: "Berke Arslan", role: "AI destekli ürün geliştirici",
  lead: "Ürünü ben tasarlıyorum, kodu AI ajanlarıyla (Devin, Claude, ChatGPT) yazdırıyorum; test edip yayına alıyorum.",
  mail: "arslanberke95@gmail.com", gh: "https://github.com/arslanberke" };
window.frame = (p, i = 0, cls = "") => {
  const s = p.shots[i] || p.shots[0];
  if (p.type === "phone") return `<div class="dev-phone ${cls}"><div class="dev-body"><img src="${s}" alt="${p.name}" loading="lazy"><i class="island"></i></div></div>`;
  return `<div class="dev-win ${cls}"><div class="dev-bar"><i></i><i></i><i></i></div><img src="${s}" alt="${p.name}" loading="lazy"></div>`;
};
