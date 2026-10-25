// Minimal i18n layer: a single dictionary keyed by dot-path, with each leaf
// carrying both ID and EN copy. Consumers read via `useLanguage().t()`
// which resolves the path for the active language.
export type Lang = "id" | "en";

export const LANGUAGES: Lang[] = ["id", "en"];
export const DEFAULT_LANG: Lang = "id";

type Leaf = Record<Lang, string>;
type Node = Leaf | { [key: string]: Node };

function isLeaf(node: Node): node is Leaf {
  return typeof (node as Leaf).id === "string";
}

export const DICT = {
  picker: {
    season: { id: "Tema Musim", en: "Season Theme" },
    language: { id: "Bahasa", en: "Language" },
  },
  seasons: {
    spring: { id: "Semi", en: "Spring" },
    summer: { id: "Panas", en: "Summer" },
    autumn: { id: "Gugur", en: "Autumn" },
    winter: { id: "Dingin", en: "Winter" },
  },
  nav: {
    aria: { id: "Bagian Halaman", en: "Sections" },
    home: { id: "Beranda", en: "Home" },
    stack: { id: "Tech Stack", en: "Stack" },
    experience: { id: "Pengalaman", en: "Experience" },
    project: { id: "Proyek", en: "Project" },
    contact: { id: "Kontak", en: "Contact" },
  },
  header: {
    availability: {
      id: "Terbuka untuk Peluang Kerja",
      en: "Open to opportunities",
    },
  },
  hero: {
    greeting: { id: "Halo, saya", en: "Hi, I am" },
    roleLine: {
      id: "Full Stack & Software Engineer.",
      en: "Full Stack & Software Engineer.",
    },
    tagline: {
      id: "Spesialis aplikasi web modern, desktop software berkinerja tinggi, dan infrastruktur sistem.",
      en: "Specialized in modern web platforms, high-performance desktop apps, and system infrastructure.",
    },
    cv: { id: "Unduh CV", en: "Download CV" },
    hire: { id: "Hubungi Saya", en: "Contact me" },
    scroll: { id: "Scroll untuk eksplorasi", en: "Scroll to explore" },
    keysHint: {
      id: "· arahkan kursor ke tombol keyboard",
      en: "· hover over the keys",
    },
  },
  stack: {
    title: { id: "Tech Stack", en: "Tech Stack" },
    hint: {
      id: "(petunjuk: arahkan kursor ke tombol keyboard)",
      en: "(hint: hover over a key)",
    },
    hintMobile: {
      id: "Teknologi dan perangkat yang saya gunakan untuk membangun solusi.",
      en: "The tools and technologies I build with.",
    },
  },
  experience: {
    title: { id: "Pengalaman & Edukasi", en: "Experience & Education" },
    subtitle: {
      id: "Rekam jejak profesional, kejuruan, dan latar belakang akademis saya.",
      en: "My professional journey, vocational foundation, and academic background.",
    },
  },
  projects: {
    kicker: { id: "proyek unggulan", en: "featured project" },
    viewMore: { id: "Lihat Detail", en: "View details" },
    openSite: { id: "Kunjungi Aplikasi", en: "Visit site" },
    viewCode: { id: "Lihat Kode di GitHub", en: "View code" },
    close: { id: "Tutup", en: "Close" },
    stackLabel: { id: "Teknologi", en: "Stack" },
    overview: { id: "Ikhtisar Proyek", en: "Overview" },
  },
  contact: {
    kicker: { id: "kontak", en: "contact" },
    title: { id: "Mari Berkolaborasi?", en: "Let's talk?" },
    body: {
      id: "Punya ide proyek, kebutuhan sistem bisnis, atau ingin berdiskusi seputar rekayasa perangkat lunak? Keyboard ini siap menyambut pesan Anda.",
      en: "Have a project in mind, business system needs, or want to discuss software engineering? The keyboard is ready for your first message.",
    },
    copyEmail: { id: "Salin Email", en: "Copy email" },
    openMail: { id: "Kirim Email", en: "Send email" },
    github: { id: "GitHub", en: "GitHub" },
    linkedin: { id: "LinkedIn", en: "LinkedIn" },
    whatsapp: { id: "WhatsApp", en: "WhatsApp" },
    emailToast: { id: "Email berhasil disalin!", en: "Email copied!" },
    footer: {
      id: "© 2026 Muhammad Arya Alqadi. Hak cipta dilindungi.",
      en: "© 2026 Muhammad Arya Alqadi. All rights reserved.",
    },
  },
  keyboard: {
    taglines: {
      typescript: {
        id: "JavaScript bertipe ketat untuk skalabilitas dan keandalan kode.",
        en: "Typed JavaScript for scalable, robust codebases.",
      },
      javascript: {
        id: "Mesin penggerak web dinamis dari browser hingga server runtime.",
        en: "The dynamic engine of the modern web ecosystem.",
      },
      react: {
        id: "Arsitektur komponen deklaratif untuk antarmuka yang reaktif.",
        en: "Component-driven architecture for interactive UIs.",
      },
      nextdotjs: {
        id: "Framework fullstack React: Server Components, App Router & SSR.",
        en: "React all grown up: routing, SSR, edge & high performance.",
      },
      tailwindcss: {
        id: "Utility-first CSS untuk styling antarmuka modern, cepat, dan presisi.",
        en: "Utility-first styling for pixel-perfect design systems.",
      },
      python: {
        id: "Sintaks bersih, tangguh untuk desktop GUI, automasi, dan backend.",
        en: "Clean syntax, powerful for desktop GUI, automation, and backend.",
      },
      php: {
        id: "Fondasi backend web yang stabil dan teruji di industri global.",
        en: "Reliable server-side powerhouse driving modern web applications.",
      },
      laravel: {
        id: "Framework PHP elegan: Eloquent ORM, REST API, dan sistem POS terstruktur.",
        en: "Elegant PHP framework for MVC architecture and scalable platforms.",
      },
      nodedotjs: {
        id: "Runtime JavaScript asynchronous berkecepatan tinggi di sisi server.",
        en: "High-throughput asynchronous JavaScript server runtime.",
      },
      threedotjs: {
        id: "Grafika WebGL dan pengalaman 3D interaktif di browser web.",
        en: "Interactive 3D graphics and WebGL in the browser via Three.js & R3F.",
      },
      mysql: {
        id: "Relational database andalan untuk integritas data transaksi dan bisnis.",
        en: "Battle-tested relational database for data integrity and fast queries.",
      },
      postgresql: {
        id: "Database open-source tingkat lanjut dengan keandalan enterprise.",
        en: "Advanced open-source relational database built for high reliability.",
      },
      docker: {
        id: "Kontainerisasi agar aplikasi berjalan identik di lokal maupun server.",
        en: "Same on my machine, same in production with containers.",
      },
      git: {
        id: "Mesin waktu dan sistem kontrol versi untuk riwayat kode terdistribusi.",
        en: "History and a time machine for distributed code collaboration.",
      },
      linux: {
        id: "Sistem operasi andalan untuk manajemen server, CLI, dan deployment.",
        en: "The rock-solid foundation for server management and cloud hosting.",
      },
    },
  },
} as const satisfies Record<string, Node>;

// Resolve a dotted path in the dictionary for a given language.
export function translate(path: string, lang: Lang): string {
  const parts = path.split(".");
  let ref: Node = DICT as unknown as Node;
  for (const p of parts) {
    if (isLeaf(ref)) return path;
    ref = (ref as { [key: string]: Node })[p];
    if (ref === undefined) return path;
  }
  if (isLeaf(ref)) return ref[lang] ?? ref.id ?? path;
  return path;
}
