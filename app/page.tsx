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
      en: "GameZone Launcher",
      id: "GameZone Launcher",
    },
    badge: {
      en: "v3.1.2 Production",
      id: "v3.1.2 Rilis Stabil",
    },
    stack: [
      "Python 3.12",
      "Microsoft Edge WebView2",
      "PyWebView",
      "SQLite 3 (WAL)",
      "Discord OAuth2",
      "Firebase RTDB",
      "Inno Setup",
      "PyInstaller",
    ],
    desc: {
      en: "A modular Windows desktop management software for PC gaming communities, featuring automated Steam asset deployment, system diagnostics, and encrypted local save synchronization.",
      id: "Perangkat lunak desktop Windows modular untuk manajemen kebutuhan komunitas game PC, mencakup automasi penempatan aset Steam, diagnostik integritas sistem, dan sinkronisasi berkas simpanan lokal.",
    },
    details: {
      en: "GameZone Launcher is an integrated Windows desktop application engineered to replace conventional GUI toolkits by utilizing Microsoft Edge WebView2 via PyWebView, providing a hardware-accelerated composite interface with zero UI thread blocking.\n\nKey Subsystems & Architecture:\n• Asynchronous IPC Bridge: Implements ~137 remote procedure call (RPC) methods in api.py adhering to parameter boundary validation and standardized JSON response serialization.\n• Steam Ingestion & Mirror Failover: Automates payload verification and extraction into the Steam stplug-in directory with graceful shutdown signaling (-shutdown) and hierarchical multi-server fallback.\n• NetFix Diagnostic Engine: Automates license cache invalidation (appinfo.vdf) and network connectivity repair without altering personal user settings.\n• Local & Cloud Save Isolation: Structured backup engine for game progress and SQLite 3 (WAL mode) local persistence, paired with Discord OAuth2 community verification.",
      id: "GameZone Launcher merupakan perangkat lunak desktop Windows terintegrasi yang mengadopsi Microsoft Edge WebView2 melalui kerangka kerja PyWebView untuk menghadirkan antarmuka komposit berbasis akselerasi GPU tanpa pembekuan thread komputasi utama.\n\nSubsistem Inti & Arsitektur:\n• Jembatan Komunikasi IPC Asinkron: Mengimplementasikan sekitar 137 metode RPC pada kelas API utama dengan validasi batasan parameter dan struktur serialisasi data standar.\n• Pipeline Injeksi Steam & Mirror Failover: Mengotomasi verifikasi dan penempatan berkas ke direktori Steam stplug-in dengan penutupan aman proses steam.exe (-shutdown) serta failover multi-server terdistribusi.\n• Mesin Diagnostik NetFix: Menginvalidasi berkas lisensi appinfo.vdf untuk memulihkan anomali klien Steam tanpa merusak konfigurasi pengguna.\n• Manajemen Simpanan Data Lokal: Sistem pencadangan terstruktur untuk save game lokal, basis data SQLite 3 mode WAL, serta verifikasi keanggotaan komunitas via Discord OAuth2.",
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
      en: "Warkop Digital — POS & Order System",
      id: "Warkop Digital — Sistem Kasir & Pemesanan",
    },
    badge: {
      en: "Web Application",
      id: "Aplikasi Web",
    },
    stack: [
      "Laravel 11",
      "PHP 8.2",
      "MySQL",
      "Tailwind CSS",
      "Blade",
      "Vite",
    ],
    desc: {
      en: "A web-based Point of Sale (POS) and digital ordering platform designed for food and beverage outlets, managing menu catalogs, cart sessions, and transaction workflows.",
      id: "Aplikasi berbasis web untuk operasional kasir (Point of Sale) dan pemesanan digital pada unit usaha kafe/warkop, mencakup pengelolaan katalog menu, sesi keranjang, dan transaksi.",
    },
    details: {
      en: "Warkop Digital is an operational platform built with Laravel 11 following Model-View-Controller (MVC) architectural standards to streamline ordering workflows in food and beverage micro-businesses.\n\nKey Subsystems & Architecture:\n• Customer Ordering Workflow: Digital menu catalog allowing dine-in visitors to select items, adjust quantities, and manage session-based carts with real-time subtotal calculations.\n• Administrative Management Dashboard: Protected administrative area for complete CRUD operations over catalog items, category classifications, and pricing updates.\n• Data Architecture & Integrity: Relational data modeling in MySQL managed via Laravel database migrations, input sanitization, and CSRF protection.\n• Responsive Interface: Mobile-first interface designed with Tailwind CSS and Vite asset pipeline for customer and staff devices.",
      id: "Warkop Digital adalah platform operasional berbasis web yang dibangun menggunakan Laravel 11 dengan standar arsitektur Model-View-Controller (MVC) untuk menyederhanakan alur transaksi pada unit usaha kafe/warkop.\n\nSubsistem Inti & Arsitektur:\n• Alur Pemesanan Pelanggan: Katalog menu digital yang memungkinkan pelanggan memilih makanan/minuman, menyesuaikan kuantitas pesanan, serta mengelola sesi keranjang belanja dengan kalkulasi total harga.\n• Panel Manajemen Administratif: Rute khusus terproteksi sesi untuk operasi CRUD (Create, Read, Update, Delete) data menu, klasifikasi kategori, dan pembaruan harga.\n• Arsitektur Basis Data: Pemodelan data relasional pada MySQL yang dikelola melalui migrasi skema Laravel, sanitasi input, dan proteksi token CSRF.\n• Desain Responsif: Antarmuka berbasis Tailwind CSS dan bundler Vite yang dioptimalkan untuk perangkat mobile staf dan pengunjung.",
    },
    github: "https://github.com/mhmdaryaqadi/warkop-digital",
    highlights: ["laravel", "php", "tailwindcss", "mysql"],
    align: "right",
    section: "project2",
  },
  {
    num: "03",
    name: {
      en: "Portal Guru — Academic Management System",
      id: "Portal Guru — Sistem Informasi Akademik",
    },
    badge: {
      en: "Verified System",
      id: "Sistem Terverifikasi",
    },
    stack: [
      "Laravel 11",
      "PHP 8.2",
      "MySQL",
      "Tailwind CSS",
      "RBAC Security",
      "Blade",
    ],
    desc: {
      en: "An integrated educational administration system featuring geofenced instructor attendance, digital classroom journals, student academic evaluations, and role-based access control.",
      id: "Sistem administrasi pendidikan terpadu mencakup presensi guru berbasis geofencing GPS, jurnal pembelajaran digital (KBM), evaluasi akademik siswa, dan kontrol hak akses multi-peran.",
    },
    details: {
      en: "Portal Guru is a centralized academic management system developed to digitize daily instructional governance for formal schools and educational institutions.\n\nKey Subsystems & Architecture:\n• Geofenced Attendance Validation: Verifies teacher attendance by calculating real-time GPS coordinate proximity against the institution's designated geofence radius.\n• Instructional Journaling & Class Roll Call: Enables educators to log daily teaching materials, competency achievements, and record student attendance directly within each scheduled class period.\n• Student Development Tracking: Maintains holistic academic records, formative assessments, student disciplinary logs, and portfolio archives.\n• Multi-Tier Role-Based Access Control (RBAC): Differentiates authorization boundaries between System Administrators and Instructional Staff with dual-credential authentication.",
      id: "Portal Guru merupakan platform tata kelola akademik terpusat yang dirancang untuk mendigitalkan administrasi operasional pengajar pada institusi pendidikan.\n\nSubsistem Inti & Arsitektur:\n• Presensi Berbasis Geofencing: Validasi kehadiran dan kepulangan pengajar secara real-time dengan memverifikasi koordinat GPS perangkat terhadap radius titik geofence institusi.\n• Jurnal Pembelajaran Digital (KBM): Dokumentasi materi ajar, capaian kompetensi, dan pencatatan absensi peserta didik per sesi tatap muka.\n• Rekapitulasi Evaluasi Peserta Didik: Pencatatan perkembangan akademik, penilaian formatif/sumatif, portofolio siswa, dan log kedisiplinan terpadu.\n• Kontrol Hak Akses Multi-Level (RBAC): Pemisahan wewenang operasional antara peran Administrator dan Tenaga Pengajar dengan sistem autentikasi terproteksi.",
    },
    github: "https://github.com/mhmdaryaqadi/portal-guru",
    highlights: ["laravel", "php", "mysql", "tailwindcss"],
    align: "left",
    section: "project3",
  },
  {
    num: "04",
    name: {
      en: "Portofolio 3D — Island & Vehicle Simulation",
      id: "Portofolio 3D — Simulasi Pulau & Kendaraan",
    },
    badge: {
      en: "Interactive WebGL",
      id: "WebGL Interaktif",
    },
    stack: [
      "Three.js",
      "Rapier 3D (WASM)",
      "WebGL",
      "Howler.js",
      "Vite",
      "JavaScript",
    ],
    desc: {
      en: "An interactive 3D web experience allowing visitors to navigate a physics-driven vehicle through an explorable island world featuring custom 3D typography and interactive zones.",
      id: "Pengalaman web 3D interaktif yang memungkinkan pengunjung mengemudikan kendaraan berbasis simulasi fisika di kepulauan 3D dengan tipografi kinetik dan zona interaktif.",
    },
    details: {
      en: "An interactive 3D web application developed with Three.js and Rapier 3D physics compiled to WebAssembly (WASM), delivering real-time vehicle raycasting and rigid-body mechanics in the browser.\n\nKey Subsystems & Architecture:\n• WASM Physics Engine: Real-time suspension kinematics, tire friction models, and rigid-body collision detection calculated via WebAssembly.\n• Dynamic 3D Lettering: Extruded physical text mesh ('ARYA ALQADI') at the island spawn area that responds kinematically to vehicular impact.\n• Spatial Audio Pipeline: Positional 3D audio environment powered by Howler.js, tying engine revs, surface contact, and ambient soundscapes to spatial camera coordinates.\n• Shading & Performance: Optimized GLSL shaders, Draco geometric compression, and custom level-of-detail management for consistent 60 FPS frame rates.",
      id: "Aplikasi web 3D interaktif yang dibangun menggunakan Three.js dan mesin fisika Rapier 3D terkompilasi WebAssembly (WASM), menghadirkan simulasi kendaraan dan interaksi rigid-body secara real-time di peramban web.\n\nSubsistem Inti & Arsitektur:\n• Mesin Fisika WebAssembly: Pemodelan suspensi kendaraan, traksi ban, dan kalkulasi deteksi tabrakan fisik dengan latensi komputasi minimal.\n• Tipografi 3D Fisik Dinamis: Model teks fisik 'ARYA ALQADI' pada area pendaratan yang bereaksi secara kinetik saat bertubrukan dengan kendaraan pengguna.\n• Pipeline Audio Spasial: Penataan audio lingkungan dan efek mekanis tiga dimensi berbasis Howler.js yang diselaraskan dengan koordinat kamera.\n• Optimasi Rendering: Shader GLSL teroptimasi, kompresi geometri Draco, serta pengaturan level-of-detail untuk menjaga kestabilan 60 FPS.",
    },
    url: "http://localhost:3001",
    github: "https://github.com/mhmdaryaqadi/Portofolio-3D",
    highlights: ["threedotjs", "javascript", "git"],
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
      en: "B.Sc. in Informatics Engineering",
      id: "S1 Teknik Informatika",
    },
    company: "Universitas Pancasila",
    period: {
      en: "2024 — Present (Est. 2028)",
      id: "2024 — Sekarang (Est. 2028)",
    },
    location: {
      en: "South Jakarta, Indonesia",
      id: "Jakarta Selatan, Indonesia",
    },
    summary: {
      en: "Pursuing academic studies in Computer Science and Software Engineering, emphasizing Data Structures & Algorithms, Computer Networks, Object-Oriented Programming (OOP), Relational Database Systems, and Operating Systems.",
      id: "Mendalami bidang Ilmu Komputer dan Rekayasa Perangkat Lunak, berfokus pada Struktur Data & Algoritma, Jaringan Komputer, Pemrograman Berorientasi Objek (PBO), Sistem Basis Data Relasional, dan Sistem Operasi.",
    },
    bullets: [
      {
        en: "Engineered GameZone Launcher, a hybrid Windows desktop management utility leveraging Python 3.12, Edge WebView2, and ~137 custom RPC functions.",
        id: "Mengembangkan GameZone Launcher, aplikasi desktop hybrid Windows berbasis Python 3.12, Edge WebView2, dan sekitar 137 fungsi RPC mandiri.",
      },
      {
        en: "Built full-stack transactional web applications with Laravel 11/12, modern relational schemas, and interactive WebGL experiences with Three.js.",
        id: "Membangun aplikasi web transaksional full-stack dengan Laravel 11/12, skema relasional terstruktur, serta eksplorasi WebGL interaktif Three.js.",
      },
      {
        en: "Applied software design patterns, service-layer separations, parameter boundary sanitization, and automated test runners.",
        id: "Menerapkan pola desain perangkat lunak, pemisahan service layer, sanitasi batas parameter, dan otomasi pengujian sistem.",
      },
    ],
    stack: ["Python", "Laravel", "PHP", "TypeScript", "Next.js", "Three.js", "MySQL", "Git"],
  },
  {
    role: {
      en: "Network & IT Support (Internship)",
      id: "Network & IT Support (Magang)",
    },
    company: "PTIK — Universitas Pancasila",
    period: {
      en: "Dec 2022 — Mar 2023",
      id: "Des 2022 — Mar 2023",
    },
    location: {
      en: "South Jakarta, Indonesia",
      id: "Jakarta Selatan, Indonesia",
    },
    summary: {
      en: "Maintained campus-wide physical network infrastructure and provided workstation hardware and operating system technical support at the IT Center (PTIK).",
      id: "Bertanggung jawab atas pemeliharaan infrastruktur jaringan fisik kampus dan dukungan teknis workstation di Pusat Teknologi Informasi dan Komunikasi (PTIK).",
    },
    bullets: [
      {
        en: "Performed campus fiber optic cable routing, termination, and fusion splicing using industrial fusion splicers, OPM, and VFL testers.",
        id: "Melakukan penarikan, terminasi, dan penyambungan kabel fiber optik (fusion splicing) menggunakan fusion splicer, OPM, dan VFL.",
      },
      {
        en: "Managed Cat5e/Cat6 UTP cabling, structured server rack cable organization, and distribution switch hardware maintenance.",
        id: "Pemasangan kabel UTP Cat5e/Cat6, penataan kerapihan rak server lab (cable management), dan perawatan berkala switch distribusi.",
      },
      {
        en: "Conducted desktop workstation diagnostics, Windows driver installations, component replacements, and LAN configuration.",
        id: "Melakukan diagnostik workstation desktop, instalasi driver Windows, pergantian komponen hardware, dan konfigurasi koneksi LAN.",
      },
    ],
    stack: ["Fiber Optic", "Fusion Splicing", "LAN Cat6", "Server Rack", "Hardware Maintenance", "Windows"],
  },
  {
    role: {
      en: "Computer Network Engineering (Vocational)",
      id: "Teknik Komputer dan Jaringan (TKJ)",
    },
    company: "SMK Teknindo Jaya",
    period: {
      en: "2021 — 2024",
      id: "2021 — 2024",
    },
    location: {
      en: "Depok, West Java, Indonesia",
      id: "Depok, Jawa Barat, Indonesia",
    },
    summary: {
      en: "Three-year vocational secondary education specializing in computer hardware architecture, network protocols, server administration, and routing.",
      id: "Pendidikan kejuruan tiga tahun dengan konsentrasi pada arsitektur perangkat keras komputer, protokol jaringan, administrasi server, dan routing.",
    },
    bullets: [
      {
        en: "Configured MikroTik RouterOS: static and dynamic routing, DHCP servers, NAT firewalls, bandwidth queue limits, and user hotspot gateways.",
        id: "Konfigurasi MikroTik RouterOS: routing statis & dinamis, DHCP server, firewall NAT, manajemen bandwidth (queues), dan gateway hotspot.",
      },
      {
        en: "Simulated and analyzed enterprise network topologies, VLANs, and subnetting structures using Cisco Packet Tracer.",
        id: "Simulasi dan analisis topologi jaringan enterprise, VLAN, dan skema subnetting menggunakan Cisco Packet Tracer.",
      },
      {
        en: "Assembled desktop PC hardware, diagnosed BIOS/UEFI settings, and performed clean operating system deployments.",
        id: "Perakitan hardware PC desktop, diagnostik pengaturan BIOS/UEFI, serta instalasi sistem operasi bersih.",
      },
    ],
    stack: ["MikroTik RouterOS", "Winbox", "Cisco Packet Tracer", "LAN / WAN", "Hardware Assembly"],
  },
];

function pick<T>(loc: { id: T; en: T }, lang: Lang): T {
  return loc[lang] ?? loc.en;
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
