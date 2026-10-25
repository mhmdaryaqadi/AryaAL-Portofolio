"use client";

import { useState } from "react";
import FrozenKeyboard from "@/components/FrozenKeyboard";
import SmoothScroll from "@/components/smooth-scroll";
import Reveal from "@/components/Reveal";
import SectionNav from "@/components/SectionNav";
import CopyEmail from "@/components/CopyEmail";
import SeasonPicker from "@/components/SeasonPicker";
import LanguagePicker from "@/components/LanguagePicker";
import ProjectModal, {
  type ProjectDetail,
} from "@/components/ProjectModal";
import { useLanguage } from "@/components/LanguageProvider";
import { useIsMobile } from "@/lib/useIsMobile";
import { SKILLS_FLAT } from "@/lib/skills";
import type { Lang } from "@/lib/i18n";

const EMAIL = "mhmdaryaqadi@gmail.com";
const GITHUB_PROFILE = "https://github.com/mhmdaryaqadi";
const GITHUB_REPO = "https://github.com/mhmdaryaqadi/AryaAL-Portofolio";
const LINKEDIN_PROFILE = "https://linkedin.com/in/muhammad-arya-alqadi-47939a387/";
const WHATSAPP_URL = "https://wa.me/628987316516";

// Localised content lives in `{ id, en }` objects inside these arrays so the
// page can be a straightforward array.map() at render time.
type Localised = { id: string; en: string };

type Project = ProjectDetail & {
  align: "left" | "right";
  section: "project1" | "project2" | "project3" | "project4";
};

const projects: Project[] = [
  {
    num: "01",
    name: {
      id: "GameZone — Windows Gaming Hub & RPC Engine",
      en: "GameZone — Windows Gaming Hub & RPC Engine",
    },
    stack: [
      "Python 3.12",
      "Edge WebView2",
      "PyWebView",
      "SQLite 3",
      "Discord OAuth2",
      "Firebase RTDB",
      "Inno Setup",
      "PyInstaller",
    ],
    desc: {
      id: "Aplikasi desktop Windows all-in-one untuk komunitas gamer: otomatisasi library Steam, 1-Click NetFix, backup save game, dan integrasi Discord.",
      en: "All-in-one Windows desktop application for gamers: automated Steam library management, 1-Click NetFix, save data backups, and Discord integration.",
    },
    details: {
      id: "Aplikasi desktop Windows all-in-one yang dibangun dengan arsitektur hybrid Python 3.12 dan Microsoft Edge WebView2. GameZone memiliki 137 fungsi RPC mandiri dengan latensi eksekusi sangat cepat (< 0.5 ms) dan render 60 FPS GPU.\n\nDilengkapi fitur 1-Click NetFix untuk perbaikan cache Steam yang korup, cadangan multi-server stplug-in otomatis, integrasi Discord OAuth2 & Firebase Realtime Database untuk pantau teman mabar, serta paket instalasi mandiri yang dibuat dengan Inno Setup dan PyInstaller.",
      en: "An all-in-one Windows desktop application built with a hybrid Python 3.12 and Microsoft Edge WebView2 architecture. GameZone features 137 custom RPC functions delivering sub-0.5ms response times and GPU-accelerated 60 FPS rendering.\n\nIncludes 1-Click NetFix for Steam cache repair, automated multi-server stplug-in fallback, Discord OAuth2 and Firebase RTDB for real-time presence tracking, and standalone distribution via Inno Setup and PyInstaller.",
    },
    github: "https://github.com/mhmdaryaqadi/GameZone-Releases",
    media: [
      "/projects/gamezone/out-v2-scene1.png",
      "/projects/gamezone/out-v2-scene2.png",
      "/projects/gamezone/out-v2-scene4.png",
      "/projects/gamezone/out-v2-scene5.png",
    ],
    highlights: ["python", "git", "linux"],
    align: "left",
    section: "project1",
  },
  {
    num: "02",
    name: {
      id: "Warkop Digital — POS & Online Ordering Platform",
      en: "Warkop Digital — POS & Online Ordering Platform",
    },
    stack: [
      "Laravel 11",
      "PHP 8.2",
      "Tailwind CSS",
      "MySQL",
      "Blade",
      "Vite",
      "Thermal Print",
    ],
    desc: {
      id: "Sistem kasir (POS) modern dan katalog pemesanan online kafe/warkop dengan manajemen meja, struk thermal, dan laporan analitik penjualan.",
      en: "Modern Point of Sale (POS) and online ordering platform for cafes with table management, thermal receipt printing, and sales analytics.",
    },
    details: {
      id: "Platform kasir dan katalog pemesanan responsif berbasis web untuk bisnis kafe/warkop. Dibangun menggunakan Laravel 11 dengan pemisahan service layer untuk penanganan transaksi kasir, katalog menu interaktif untuk pelanggan smartphone via QR code, manajemen status meja real-time, pencetakan struk kasir thermal, dan rekapitulasi omzet harian dengan basis data MySQL.",
      en: "A responsive web-based POS and ordering catalog for food & beverage businesses. Built with Laravel 11 featuring clean service-layer architecture for transactions, mobile QR ordering for dine-in guests, real-time table status tracking, thermal receipt printing, and daily revenue reporting on MySQL.",
    },
    github: "https://github.com/mhmdaryaqadi/warkop-digital",
    highlights: ["laravel", "php", "tailwindcss", "mysql"],
    badge: { id: "Production Ready", en: "Production Ready" },
    align: "right",
    section: "project2",
  },
  {
    num: "03",
    name: {
      id: "Portofolio 3D — Island & Vehicle Simulation",
      en: "Portofolio 3D — Island & Vehicle Simulation",
    },
    stack: [
      "Three.js",
      "WebGL",
      "Cannon.js",
      "JavaScript",
      "GLSL Shaders",
      "Vite",
    ],
    desc: {
      id: "Eksplorasi portofolio 3D interaktif di mana pengunjung mengendarai mobil di pulau 3D miniatur dengan simulasi fisika realistis dan audio dinamis.",
      en: "An interactive 3D web portfolio where visitors drive a physics-enabled car across a stylized island world with spatial audio and minigames.",
    },
    details: {
      id: "Dunia pulau 3D imersif yang dibangun di atas WebGL dan Three.js dengan simulasi fisika raycast vehicle Cannon.js, audio spasial, siklus siang-malam, dan area interaktif seperti bowling, arena hancur, dan mesin waktu.\n\nMenampilkan teks 3D fisik ARYA ALQADI yang bisa ditabrak dan berinteraksi secara kinetik dengan mobil pemain di area pendaratan.",
      en: "An immersive 3D island world powered by WebGL, Three.js, and Cannon.js raycast physics simulation. Features custom spatial audio, interactive minigames (bowling, physics ramps, time machine), and physical extruded 3D lettering 'ARYA ALQADI' that dynamically reacts to vehicle collisions.",
    },
    url: "http://localhost:3001",
    github: "https://github.com/mhmdaryaqadi/Portofolio-3D",
    highlights: ["threedotjs", "javascript", "git"],
    align: "left",
    section: "project3",
  },
  {
    num: "04",
    name: {
      id: "Portal Guru — School Academic Management",
      en: "Portal Guru — School Academic Management",
    },
    stack: [
      "Laravel 11",
      "PHP",
      "MySQL",
      "Tailwind CSS",
      "RBAC Security",
      "Blade",
    ],
    desc: {
      id: "Sistem informasi akademik sekolah untuk penilaian siswa, rekapitulasi rapor, dan jurnal mengajar guru dengan kontrol hak akses (RBAC) ketat.",
      en: "School academic management platform for student grading, report card generation, and teacher lesson journals with strict RBAC.",
    },
    details: {
      id: "Aplikasi web manajemen akademik komprehensif yang dirancang untuk efisiensi administrasi sekolah. Menerapkan kontrol akses berbasis peran (RBAC) berlapis: Administrator, Wali Kelas, dan Guru Mata Pelajaran.\n\nDilengkapi modul jurnal kegiatan mengajar harian, pengelolaan absensi, input nilai formatif/sumatif, dan generasi otomatis rapor siswa siap cetak.",
      en: "Comprehensive academic management web app designed for educational administration. Implements multi-tier Role-Based Access Control (Admin, Homeroom Teacher, Subject Teacher).\n\nFeatures daily teacher journal logging, attendance management, formative/summative grading, and automated student report card export.",
    },
    github: "https://github.com/mhmdaryaqadi/portal-guru",
    highlights: ["laravel", "php", "mysql", "tailwindcss"],
    badge: { id: "Verified", en: "Verified" },
    align: "right",
    section: "project4",
  },
];

const experiences: Array<{
  role: Localised;
  company: string;
  period: Localised;
  location: Localised;
  summary: Localised;
  bullets: Localised[];
  stack: string[];
}> = [
  {
    role: {
      id: "S1 Teknik Informatika",
      en: "B.Sc. Informatics Engineering",
    },
    company: "Universitas Pancasila",
    period: {
      id: "2024 — Sekarang (Est. 2028)",
      en: "2024 — Present (Est. 2028)",
    },
    location: {
      id: "Jakarta Selatan, Indonesia",
      en: "South Jakarta, Indonesia",
    },
    summary: {
      id: "Mendalami bidang Ilmu Komputer dan Rekayasa Perangkat Lunak tingkat lanjut, dengan fokus pada Struktur Data & Algoritma, Jaringan Komputer, Pemrograman Berorientasi Objek (PBO), Basis Data Relasional, dan Arsitektur Sistem.",
      en: "Pursuing advanced studies in Computer Science and Software Engineering, focusing on Data Structures & Algorithms, Computer Networks, Object-Oriented Programming (OOP), Relational Databases, and System Architecture.",
    },
    bullets: [
      {
        id: "Riset mandiri & pengembangan aplikasi desktop Windows GameZone (137 fungsi RPC, PyWebView, Discord RPC).",
        en: "Independent R&D and engineering of GameZone Windows desktop app (137 RPC functions, PyWebView, Discord RPC).",
      },
      {
        id: "Eksplorasi grafika web 3D interaktif Three.js & WebGL serta kontribusi platform fullstack berbasis Laravel dan Next.js.",
        en: "Interactive 3D WebGL / Three.js experimentation and full-stack development with Laravel and Next.js.",
      },
      {
        id: "Penerapan standar clean architecture, service layers, dan keamanan data pada setiap proyek perangkat lunak.",
        en: "Implementation of clean architecture, service layers, and data security across software projects.",
      },
    ],
    stack: ["Python", "Laravel", "PHP", "TypeScript", "Next.js", "Three.js", "MySQL", "Git"],
  },
  {
    role: {
      id: "Network & IT Support (Magang)",
      en: "Network & IT Support (Internship)",
    },
    company: "PTIK — Universitas Pancasila",
    period: {
      id: "Des 2022 — Mar 2023",
      en: "Dec 2022 — Mar 2023",
    },
    location: {
      id: "Jakarta Selatan, Indonesia",
      en: "South Jakarta, Indonesia",
    },
    summary: {
      id: "Bertanggung jawab atas pemeliharaan infrastruktur jaringan fisik kampus dan dukungan teknis workstation di Pusat Teknologi Informasi dan Komunikasi (PTIK) Universitas Pancasila.",
      en: "Responsible for campus physical network infrastructure maintenance and workstation technical support at the IT Center (PTIK) of Universitas Pancasila.",
    },
    bullets: [
      {
        id: "Instalasi, penarikan, dan penyambungan (fusion splicing) kabel fiber optik kampus menggunakan Fusion Splicer, OPM, dan VFL.",
        en: "Campus fiber optic cable installation, termination, and fusion splicing using Fusion Splicer, OPM, and VFL.",
      },
      {
        id: "Pemasangan kabel UTP Cat5e/Cat6, penataan kerapihan rak server lab (cable management), dan maintenance switch distribusi.",
        en: "Cat5e/Cat6 UTP cabling, server rack cable management, and distribution switch hardware maintenance.",
      },
      {
        id: "Troubleshooting hardware komputer workstation, konfigurasi driver sistem operasi Windows, dan manajemen konektivitas LAN.",
        en: "Workstation hardware troubleshooting, Windows OS driver configuration, and LAN connectivity maintenance.",
      },
    ],
    stack: ["Fiber Optic", "Fusion Splicer", "LAN Cat6", "Server Rack", "Hardware Maintenance", "Windows"],
  },
  {
    role: {
      id: "Teknik Komputer dan Jaringan (TKJ)",
      en: "Computer Network Engineering (Vocational)",
    },
    company: "SMK Teknindo Jaya",
    period: {
      id: "2021 — 2024",
      en: "2021 — 2024",
    },
    location: {
      id: "Depok, Jawa Barat, Indonesia",
      en: "Depok, West Java, Indonesia",
    },
    summary: {
      id: "Pendidikan vokasi kejuruan dengan penekanan kuat pada perakitan sistem komputer, topologi jaringan LAN/WAN, routing, dan administrasi server.",
      en: "Vocational engineering education emphasizing computer hardware assembly, LAN/WAN topologies, routing, and server administration.",
    },
    bullets: [
      {
        id: "Konfigurasi MikroTik RouterOS: Static & Dynamic Routing, DHCP Server, Firewall NAT, Bandwidth Limiter (Queues), dan Hotspot.",
        en: "MikroTik RouterOS configuration: Routing, DHCP Server, NAT Firewall, Bandwidth Limiter (Queues), and Hotspots.",
      },
      {
        id: "Desain dan simulasi topologi jaringan komputer enterprise menggunakan Cisco Packet Tracer.",
        en: "Enterprise network topology design and simulation using Cisco Packet Tracer.",
      },
      {
        id: "Perakitan hardware PC desktop, instalasi sistem operasi, dan troubleshooting bios/motherboard.",
        en: "Desktop PC hardware assembly, operating system setup, and motherboard/BIOS diagnostics.",
      },
    ],
    stack: ["MikroTik RouterOS", "Winbox", "Cisco Packet Tracer", "LAN / WAN", "Hardware Assembly"],
  },
];

function pick<T>(loc: { id: T; en: T }, lang: Lang): T {
  return loc[lang] ?? loc.id;
}

// Hero name split per word so each can rise independently.
function HeroWord({
  text,
  delay,
  className = "",
}: {
  text: string;
  delay: number;
  className?: string;
}) {
  return (
    <span className={`hero-word ${className}`}>
      <span style={{ animationDelay: `${delay}ms` }}>{text}</span>
    </span>
  );
}

export default function Home() {
  const { t, lang } = useLanguage();
  const isMobile = useIsMobile();
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <SmoothScroll>
      <div className="relative">
        {/* Desktop: persistent 3D scene fullscreen behind content. On mobile
            the canvas lives inside the hero instead so it scrolls away. */}
        {!isMobile && (
          <div className="fixed inset-0 z-0">
            <FrozenKeyboard />
          </div>
        )}

        {/* Header */}
        <header className="fixed top-0 inset-x-0 z-50 px-6 sm:px-10 md:px-14 py-5 flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-3 pointer-events-auto">
            <span
              data-cursor="hover"
              className="text-sm font-semibold tracking-tight text-ice-100 whitespace-nowrap"
            >
              Arya Alqadi
            </span>
            <span className="hidden md:inline-flex">
              <span className="status-pill">{t("header.availability")}</span>
            </span>
          </div>
          <div className="flex items-center gap-2 pointer-events-auto">
            <SeasonPicker />
            <span className="hidden md:inline-flex">
              <a
                href={GITHUB_REPO}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="hover"
                className="frost-btn !py-1.5 !px-3 !text-xs"
              >
                <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" aria-hidden>
                  <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                </svg>
                <span>GitHub</span>
              </a>
            </span>
            <LanguagePicker />
          </div>
        </header>

        <SectionNav />

        <main className="relative z-10 pointer-events-none">
          {/* Hero */}
          <section
            data-kb-section="hero"
            className="min-h-screen flex flex-col justify-center p-6 sm:p-10 md:p-14"
          >
            {isMobile && (
              <div className="w-full h-[34vh] mt-12 -mb-4 pointer-events-auto">
                <FrozenKeyboard mobile />
              </div>
            )}
            <div className="mt-2 md:mt-20">
              <p
                className="text-[11px] uppercase tracking-[0.3em] text-ice-300 mb-5 fade-in-up"
                style={{ ["--d" as string]: "0ms" }}
              >
                {t("hero.greeting")}
              </p>
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[8.5rem] font-bold tracking-[-0.03em] text-ice-50 leading-[0.92] whitespace-nowrap">
                <HeroWord text="Muhammad Arya" delay={120} />
                <br />
                <HeroWord text="Alqadi" delay={260} className="text-ice-400" />
              </h1>
              <p
                className="mt-8 text-base sm:text-lg md:text-xl text-ice-200 max-w-xl leading-relaxed fade-in-up"
                style={{ ["--d" as string]: "520ms" }}
              >
                {t("hero.roleLine")}
                <br />
                {t("hero.tagline")}
              </p>

              {/* CTAs */}
              <div
                className="mt-10 flex flex-wrap items-center gap-3 pointer-events-auto fade-in-up"
                style={{ ["--d" as string]: "700ms" }}
              >
                <a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  data-magnetic
                  className="frost-btn frost-btn--primary"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z" />
                    <path d="M14 3v5h5" />
                  </svg>
                  {t("hero.cv")}
                </a>
                <button
                  type="button"
                  data-cursor="hover"
                  data-magnetic
                  className="frost-btn"
                  onClick={() =>
                    document
                      .querySelector<HTMLElement>(
                        '[data-kb-section="contact"]'
                      )
                      ?.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                >
                  {t("hero.hire")}
                </button>
                <div className="basis-full h-0 md:hidden" aria-hidden />
                <a
                  href={LINKEDIN_PROFILE}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  data-magnetic
                  className="frost-icon"
                  aria-label="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
                    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.4 0h4.37v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 6.99V22h-4.56v-6.59c0-1.57-.03-3.6-2.19-3.6-2.19 0-2.53 1.71-2.53 3.48V22H7.62V8z" />
                  </svg>
                </a>
                <a
                  href={GITHUB_PROFILE}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  data-magnetic
                  className="frost-icon"
                  aria-label="GitHub"
                >
                  <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden>
                    <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  data-magnetic
                  className="frost-icon"
                  aria-label="WhatsApp"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.41a8.17 8.17 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.17 8.17 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.25-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.71 4.3 3.8 2.53 1.09 2.53.73 2.98.69.46-.04 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.3z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Animated scroll indicator at bottom */}
            <div
              className="mt-10 md:mt-auto flex items-center gap-3 fade-in-up"
              style={{ ["--d" as string]: "900ms" }}
            >
              <span className="scroll-indicator">
                <span>{t("hero.scroll")}</span>
                <span className="scroll-indicator__rail" />
              </span>
              <span className="text-[11px] uppercase tracking-[0.25em] text-ice-400 hidden sm:inline">
                {t("hero.keysHint")}
              </span>
            </div>
          </section>

          {/* Stack */}
          <section
            data-kb-section="stack"
            className="relative md:min-h-[200vh] p-6 sm:p-10 md:p-14"
          >
            <div className="relative md:h-[150vh]">
              <div className="md:sticky md:top-28 text-center">
                <Reveal>
                  <h2 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-[-0.03em] text-ice-50 leading-[0.95]">
                    {t("stack.title")}
                  </h2>
                </Reveal>
                <Reveal delay={120}>
                  <p className="mt-3 text-sm sm:text-base text-ice-400">
                    <span className="hidden md:inline">{t("stack.hint")}</span>
                    <span className="md:hidden">{t("stack.hintMobile")}</span>
                  </p>
                </Reveal>
              </div>

              {/* Mobile skills grid */}
              {isMobile && (
                <div className="md:hidden mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 pointer-events-auto">
                  {SKILLS_FLAT.map((s) => (
                    <div
                      key={s.slug}
                      className="flex items-start gap-3 rounded-xl bg-ink-1/70 backdrop-blur-sm border border-ink-3 p-4"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="22"
                        height="22"
                        fill={`#${s.hex}`}
                        className="flex-none mt-0.5"
                        aria-hidden
                      >
                        <path d={s.path} />
                      </svg>
                      <div>
                        <p className="text-ice-50 font-medium text-sm">
                          {s.title}
                        </p>
                        <p className="text-ice-400 text-xs mt-0.5 leading-snug">
                          {t(`keyboard.taglines.${s.slug}`)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* Experience */}
          <section
            data-kb-section="experience"
            className="relative p-6 sm:p-10 md:p-14 pb-24"
          >
            <div className="sticky top-24 sm:top-28 text-center mb-12 sm:mb-16 z-0">
              <Reveal>
                <h2 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-[-0.03em] text-ice-50 leading-[0.95]">
                  {t("experience.title")}
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-3 text-sm sm:text-base text-ice-300">
                  {t("experience.subtitle")}
                </p>
              </Reveal>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              {experiences.map((exp, idx) => (
                <Reveal
                  key={`${exp.company}-${idx}`}
                  delay={idx * 120}
                  as="article"
                  className="relative rounded-2xl bg-ink-1/75 backdrop-blur-md border border-ink-3 p-6 sm:p-8 md:p-10 pointer-events-auto shadow-[0_8px_40px_-20px_rgba(0,0,0,0.6)]"
                >
                  <header className="flex flex-wrap items-start justify-between gap-3 mb-5">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-ice-50 tracking-tight">
                        {pick(exp.role, lang)}
                      </h3>
                      <p className="text-ice-400 font-medium mt-1">
                        {exp.company}
                        <span className="text-ice-500/80 font-normal">
                          {" · "}
                          {pick(exp.location, lang)}
                        </span>
                      </p>
                    </div>
                    <span className="font-mono text-xs text-ice-100 px-3 py-1 rounded-full border border-ice-700/70 bg-ink-2/60 whitespace-nowrap">
                      {pick(exp.period, lang)}
                    </span>
                  </header>

                  <p className="text-ice-200 leading-relaxed mb-5">
                    {pick(exp.summary, lang)}
                  </p>

                  <ul className="space-y-2.5 mb-6">
                    {exp.bullets.map((b, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-ice-100 leading-relaxed"
                      >
                        <span className="mt-[0.65em] flex-none w-1.5 h-1.5 rounded-full bg-ice-400" />
                        <span>{pick(b, lang)}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.stack.map((s) => (
                      <span
                        key={s}
                        data-cursor="hover"
                        className="frost-chip"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Projects */}
          {projects.map((p) => (
            <section
              key={p.num}
              data-kb-section={p.section}
              data-kb-highlights={(p.highlights ?? []).join(",")}
              className="relative py-20 md:min-h-screen flex items-center p-6 sm:p-10 md:p-14 overflow-hidden"
            >
              <span
                aria-hidden
                className={`watermark hidden md:block top-1/2 -translate-y-1/2 ${
                  p.align === "left" ? "right-[-2vw]" : "left-[-2vw]"
                }`}
              >
                {p.num}
              </span>

              <div
                className={
                  p.align === "left"
                    ? "max-w-xl relative"
                    : "max-w-xl relative md:ml-auto md:text-right md:mr-16 lg:mr-24"
                }
              >
                <Reveal>
                  <p className="font-mono text-sm text-ice-400 mb-3">
                    {p.num} · {t("projects.kicker")}
                  </p>
                </Reveal>
                <Reveal delay={80}>
                  <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-ice-50 leading-[1.05] mb-4">
                    {pick(p.name, lang)}
                  </h2>
                </Reveal>
                {p.badge ? (
                  <Reveal delay={140}>
                    <span className="inline-block text-[10px] uppercase tracking-widest text-ice-300 border border-ice-700 rounded-full px-2 py-0.5 mb-4">
                      {pick(p.badge, lang)}
                    </span>
                  </Reveal>
                ) : null}
                <Reveal delay={180}>
                  <p className="text-base sm:text-lg text-ice-200 leading-relaxed mb-6">
                    {pick(p.desc, lang)}
                  </p>
                </Reveal>
                <Reveal delay={260}>
                  <div
                    className={
                      p.align === "right"
                        ? "flex flex-wrap gap-1.5 md:justify-end pointer-events-auto mb-5"
                        : "flex flex-wrap gap-1.5 pointer-events-auto mb-5"
                    }
                  >
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        data-cursor="hover"
                        className="frost-chip"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </Reveal>
                <Reveal delay={320}>
                  <div
                    className={
                      p.align === "right"
                        ? "flex md:justify-end pointer-events-auto"
                        : "flex pointer-events-auto"
                    }
                  >
                    <button
                      type="button"
                      onClick={() => setActiveProject(p)}
                      data-cursor="hover"
                      data-magnetic
                      className="frost-btn"
                    >
                      {t("projects.viewMore")}
                      <svg
                        viewBox="0 0 24 24"
                        width="14"
                        height="14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        aria-hidden
                      >
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </Reveal>
              </div>
            </section>
          ))}

          {/* Contact */}
          <section
            data-kb-section="contact"
            className="relative py-24 md:min-h-screen flex flex-col justify-center p-6 sm:p-10 md:p-14 overflow-hidden"
          >
            <div className="max-w-xl relative">
              <Reveal>
                <p className="font-mono text-sm text-ice-400 mb-3">
                  {t("contact.kicker")}
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight text-ice-50 mb-6">
                  {t("contact.title")}
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="text-ice-200 mb-10">{t("contact.body")}</p>
              </Reveal>
              <Reveal delay={240}>
                <div className="flex flex-wrap gap-3 pointer-events-auto">
                  <CopyEmail
                    email={EMAIL}
                    className="frost-btn frost-btn--primary"
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="M3 7l9 6 9-6" />
                    </svg>
                    {t("contact.copyEmail")}
                  </CopyEmail>
                  <a
                    href={`mailto:${EMAIL}`}
                    data-cursor="hover"
                    className="frost-btn"
                  >
                    {t("contact.openMail")}
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="hover"
                    className="frost-btn"
                  >
                    {t("contact.whatsapp")}
                  </a>
                  <a
                    href={GITHUB_PROFILE}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="hover"
                    className="frost-btn"
                  >
                    {t("contact.github")}
                  </a>
                  <a
                    href={LINKEDIN_PROFILE}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="hover"
                    className="frost-btn"
                  >
                    {t("contact.linkedin")}
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal delay={320}>
              <p className="mt-14 text-[11px] uppercase tracking-[0.25em] text-ice-400">
                {t("contact.footer")}
              </p>
            </Reveal>
          </section>
        </main>

        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      </div>
    </SmoothScroll>
  );
}
