# 3D Mechanical Keyboard Developer Portfolio

Portofolio interaktif modern Muhammad Arya Alqadi (**Full Stack & Software Engineer**) yang dibangun dengan **Next.js 16**, **React Three Fiber (R3F)**, dan **Tailwind CSS v4**. Menampilkan keyboard mekanik 3D sinematik, pergantian tema 4 musim, audio switch tock realistis, animasi scroll responsif via Lenis, dan dukungan dwibahasa (ID / EN).

**Dibuat oleh [Muhammad Arya Alqadi](https://linkedin.com/in/muhammad-arya-alqadi-47939a387/)** &nbsp;|&nbsp; **GitHub: [@mhmdaryaqadi](https://github.com/mhmdaryaqadi)**

---

## Fitur Utama

- **Interactive 3D Mechanical Keyboard** — Keyboard mekanik 3D responsif bertenaga Three.js dan React Three Fiber. Keycap dilengkapi logo teknologi berbasis SVG Simple Icons dengan fisika gerak dan efek audio klik tock mekanik.
- **Dynamic 3D Camera Choreography** — Kamera dan pose keyboard bertransisi secara mulus mengikuti posisi scroll setiap bagian (Hero, Tech Stack, Proyek Unggulan, Edukasi, dan Kontak).
- **Seasonal Themes** — Empat tema visual terintegrasi (Dingin/Winter, Semi/Spring, Panas/Summer, Gugur/Autumn) yang mengubah warna UI, gradasi aurora, dan pencahayaan panggung 3D secara instan.
- **Project Showcases** — Dialog modal interaktif dengan carousel screenshot, chip stack teknologi, dan tautan langsung ke repositori kode dan demo aplikasi.
- **Bilingual Support (ID / EN)** — Lapisan i18n mandiri yang ringan tanpa dependensi eksternal, memudahkan pergantian bahasa Bahasa Indonesia dan English secara dinamis.
- **Smooth Scroll & Micro-Interactions** — Ditenagai oleh [Lenis](https://github.com/darkroomengineering/lenis) untuk scroll super halus, cursor custom adaptif, dan efek snap magnetik pada tombol aksi.
- **Mobile-First 3D Optimization** — Pada perangkat mobile, keyboard 3D ditampilkan di hero section dengan interaksi tap yang ringan dan transisi ke grid 2D yang cepat.

---

## Tech Stack

| Layer | Teknologi |
|-------|-----------|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, Turbopack) |
| **3D Rendering** | [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) + [@react-three/drei](https://github.com/pmndrs/drei) + [Three.js](https://threejs.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Smooth Scroll** | [Lenis](https://github.com/darkroomengineering/lenis) |
| **Icons** | [Simple Icons](https://simpleicons.org/) & Lucide SVG |
| **Bahasa** | TypeScript |
| **Audio** | Web Audio API (Synthesized Mechanical Switch Tock) |

---

## Proyek yang Ditampilkan

1. **GameZone** — Windows Desktop Gaming Hub & RPC Engine (Python 3.12, Edge WebView2, Discord OAuth2, Firebase RTDB, SQLite).
2. **Warkop Digital** — Point of Sale (POS) & Online Ordering Web Platform (Laravel 11, PHP, Tailwind CSS, MySQL).
3. **Portofolio-3D** — Interactive 3D Driving Island & Raycast Vehicle Simulation (Three.js, WebGL, Cannon.js, GLSL).
4. **Portal Guru** — Academic School Management & Grading System with Multi-Tier RBAC (Laravel 11, MySQL, Blade).

---

## Cara Menjalankan Secara Lokal

### Prasyarat
- **Node.js** 20+
- **npm** 10+

### Instalasi & Menjalankan Dev Server

```bash
# Clone repository
git clone https://github.com/mhmdaryaqadi/AryaAL-Portofolio.git
cd AryaAL-Portofolio

# Install dependensi
npm install

# Jalankan server pengembangan
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

### Build untuk Produksi

```bash
npm run build
npm start
```

---

## Lisensi

Didistribusikan di bawah lisensi MIT. Lihat berkas `LICENSE` untuk informasi selengkapnya.
