// Minimal i18n layer: a single dictionary keyed by dot-path, with each leaf
// carrying both EN and ID copy. Consumers read via `useLanguage().t()`
// which resolves the path for the active language.
export type Lang = "en" | "id";

export const LANGUAGES: Lang[] = ["en", "id"];
export const DEFAULT_LANG: Lang = "en";

type Leaf = Record<Lang, string>;
type Node = Leaf | { [key: string]: Node };

function isLeaf(node: Node): node is Leaf {
  return typeof (node as Leaf).en === "string";
}

export const DICT = {
  picker: {
    season: { en: "Theme", id: "Tema Musim" },
    language: { en: "Language", id: "Bahasa" },
  },
  seasons: {
    spring: { en: "Spring", id: "Semi" },
    summer: { en: "Summer", id: "Panas" },
    autumn: { en: "Autumn", id: "Gugur" },
    winter: { en: "Winter", id: "Dingin" },
  },
  nav: {
    aria: { en: "Navigation Sections", id: "Navigasi Halaman" },
    home: { en: "Home", id: "Beranda" },
    stack: { en: "Stack", id: "Tech Stack" },
    experience: { en: "Experience", id: "Pengalaman" },
    project: { en: "Project", id: "Proyek" },
    contact: { en: "Contact", id: "Kontak" },
  },
  header: {
    availability: {
      en: "Available for opportunities",
      id: "Terbuka untuk Peluang Kerja",
    },
  },
  hero: {
    greeting: { en: "Hello, I am", id: "Halo, saya" },
    roleLine: {
      en: "Full Stack & Software Engineer.",
      id: "Full Stack & Software Engineer.",
    },
    tagline: {
      en: "Focused on full-stack web platforms, desktop software engineering, and system infrastructure.",
      id: "Fokus pada rekayasa platform web full-stack, pengembangan perangkat lunak desktop, dan infrastruktur sistem.",
    },
    cv: { en: "Download CV", id: "Unduh CV" },
    hire: { en: "Get in Touch", id: "Hubungi Saya" },
    scroll: { en: "Scroll to explore", id: "Gulir untuk eksplorasi" },
    keysHint: {
      en: "· hover over keycaps to inspect",
      id: "· arahkan kursor ke tombol keyboard",
    },
  },
  stack: {
    title: { en: "Tech Stack", id: "Tech Stack" },
    hint: {
      en: "(hint: hover over a keycap to inspect)",
      id: "(petunjuk: arahkan kursor ke tombol keyboard)",
    },
    hintMobile: {
      en: "Core technologies and engineering tools.",
      id: "Perangkat dan teknologi rekayasa utama.",
    },
  },
  experience: {
    title: { en: "Experience & Education", id: "Pengalaman & Edukasi" },
    subtitle: {
      en: "Academic background and practical technical experience.",
      id: "Latar belakang akademis dan pengalaman teknis terapan.",
    },
  },
  projects: {
    kicker: { en: "featured project", id: "proyek pilihan" },
    viewMore: { en: "View Details", id: "Lihat Rincian" },
    openSite: { en: "Visit Site", id: "Kunjungi Situs" },
    viewCode: { en: "View Source Code", id: "Lihat Kode Sumber" },
    close: { en: "Close", id: "Tutup" },
    stackLabel: { en: "Tech Stack", id: "Tumpukan Teknologi" },
    overview: { en: "Project Overview", id: "Ikhtisar Proyek" },
  },
  contact: {
    kicker: { en: "contact", id: "kontak" },
    title: { en: "Get In Touch", id: "Hubungi Saya" },
    body: {
      en: "Open to technical discussions, software engineering collaborations, and career opportunities. Feel free to reach out via email or direct messaging.",
      id: "Terbuka untuk diskusi teknis, kolaborasi rekayasa perangkat lunak, maupun peluang profesional. Silakan hubungi melalui email atau pesan langsung.",
    },
    copyEmail: { en: "Copy Email", id: "Salin Email" },
    openMail: { en: "Send Email", id: "Kirim Email" },
    github: { en: "GitHub", id: "GitHub" },
    linkedin: { en: "LinkedIn", id: "LinkedIn" },
    whatsapp: { en: "WhatsApp", id: "WhatsApp" },
    emailToast: { en: "Email copied to clipboard", id: "Email berhasil disalin" },
    footer: {
      en: "© 2026 Muhammad Arya Alqadi. All rights reserved.",
      id: "© 2026 Muhammad Arya Alqadi. Hak cipta dilindungi.",
    },
  },
  keyboard: {
    taglines: {
      typescript: {
        en: "Statically typed JavaScript superset for structured software architectures.",
        id: "Superset JavaScript dengan sistem pengetikan statis untuk arsitektur perangkat lunak terstruktur.",
      },
      javascript: {
        en: "ECMAScript language standard for clientside logic and runtime execution.",
        id: "Standar bahasa ECMAScript untuk logika sisi klien dan eksekusi runtime.",
      },
      react: {
        en: "Declarative UI component library with virtual DOM state management.",
        id: "Pustaka antarmuka deklaratif dengan manajemen status dan siklus hidup komponen.",
      },
      nextdotjs: {
        en: "Full-stack React framework supporting Server Components, App Router, and SSR.",
        id: "Kerangka kerja full-stack React berbasis Server Components, App Router, dan SSR.",
      },
      tailwindcss: {
        en: "Utility-first CSS framework for systematic and responsive interface styling.",
        id: "Kerangka kerja CSS utility-first untuk perancangan antarmuka sistematis dan responsif.",
      },
      python: {
        en: "High-level programming language utilized for desktop GUI, IPC bridges, and automation.",
        id: "Bahasa pemrograman tingkat tinggi untuk desktop GUI, jembatan IPC, dan otomasi sistem.",
      },
      php: {
        en: "Server-side scripting language for backend web engineering and data processing.",
        id: "Bahasa skrip sisi server untuk rekayasa backend web dan pengolahan data.",
      },
      laravel: {
        en: "PHP framework employing MVC architecture, Eloquent ORM, and dependency injection.",
        id: "Kerangka kerja PHP dengan arsitektur MVC, Eloquent ORM, dan dependency injection.",
      },
      nodedotjs: {
        en: "Event-driven asynchronous JavaScript runtime environment for backend services.",
        id: "Lingkungan eksekusi JavaScript asinkron berbasis event untuk layanan backend.",
      },
      threedotjs: {
        en: "WebGL and WebGPU 3D graphics rendering library for interactive browser scenes.",
        id: "Pustaka rendering grafika 3D WebGL dan WebGPU untuk adegan interaktif pada peramban.",
      },
      mysql: {
        en: "Relational database management system for ACID-compliant transactional data.",
        id: "Sistem manajemen basis data relasional untuk integritas data transaksional berstandar ACID.",
      },
      postgresql: {
        en: "Open-source object-relational database system emphasizing standards compliance.",
        id: "Sistem basis data objek-relasional dengan kepatuhan tinggi terhadap standar SQL.",
      },
      docker: {
        en: "OS-level virtualization platform for containerized application environments.",
        id: "Platform virtualisasi tingkat sistem operasi untuk lingkungan aplikasi berbasis kontainer.",
      },
      git: {
        en: "Distributed version control system for tracking source code change history.",
        id: "Sistem kontrol versi terdistribusi untuk pelacakan riwayat perubahan kode sumber.",
      },
      linux: {
        en: "Unix-like operating system foundation for server environments and CLI workflows.",
        id: "Sistem operasi berbasis Unix untuk lingkungan server dan alur kerja antarmuka baris perintah.",
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
  if (isLeaf(ref)) return ref[lang] ?? ref.en ?? path;
  return path;
}
