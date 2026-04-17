// ============================================================
// Navigasi
// ============================================================
export const NAV_LINKS = [
  { label: "Beranda", href: "/" },
  { label: "Belajar", href: "/belajar" },
  { label: "Jasa", href: "/jasa" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Kontak", href: "/kontak" },
];

// ============================================================
// Tiga Pilar Brand
// ============================================================
export const PILLARS = [
  {
    id: "belajar",
    icon: "BookOpen",
    title: "Belajar Koding",
    description:
      "Tutorial web development yang approachable untuk pemula hingga menengah. Dari HTML dasar sampai full-stack modern — belajar dengan cara yang menyenangkan dan terstruktur.",
    href: "/belajar",
    cta: "Mulai Belajar",
  },
  {
    id: "jasa",
    icon: "Briefcase",
    title: "Jasa Development",
    description:
      "Butuh website atau aplikasi yang profesional? Aku bantu wujudkan dari konsep sampai live. Untuk UMKM, startup, hingga personal brand yang ingin tampil elegan.",
    href: "/jasa",
    cta: "Lihat Layanan",
  },
  {
    id: "portfolio",
    icon: "Layers",
    title: "Portfolio",
    description:
      "Koleksi project yang pernah aku kerjakan — dari landing page, dashboard, sampai aplikasi web full-scale. Lihat kualitas kerja sebelum memutuskan kolaborasi.",
    href: "/portfolio",
    cta: "Lihat Karya",
  },
];

// ============================================================
// Stats untuk section About
// ============================================================
export const STATS = [
  { value: "50+", label: "Project Selesai" },
  { value: "3+", label: "Tahun Pengalaman" },
  { value: "100+", label: "Murid & Member" },
  { value: "30+", label: "Klien Puas" },
];

// ============================================================
// Portfolio (data placeholder)
// ============================================================
export const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "Toko Online UMKM Batik",
    description:
      "Platform e-commerce untuk brand batik lokal dengan fitur katalog, keranjang, dan integrasi WhatsApp.",
    tags: ["Next.js", "Tailwind", "Supabase"],
    thumbnail: "/images/portfolio-1.jpg",
    href: "#",
  },
  {
    id: 2,
    title: "Dashboard Analytics SaaS",
    description:
      "Dashboard internal untuk startup logistik — visualisasi data real-time, export laporan, dan manajemen pengguna.",
    tags: ["React", "TypeScript", "Recharts"],
    thumbnail: "/images/portfolio-2.jpg",
    href: "#",
  },
  {
    id: 3,
    title: "Landing Page Klinik Kecantikan",
    description:
      "Website profil elegan untuk klinik kecantikan dengan sistem booking appointment online.",
    tags: ["Next.js", "Framer Motion", "Tailwind"],
    thumbnail: "/images/portfolio-3.jpg",
    href: "#",
  },
  {
    id: 4,
    title: "Aplikasi Manajemen Event",
    description:
      "Platform registrasi dan manajemen peserta event untuk komunitas tech wanita Indonesia.",
    tags: ["Next.js", "Prisma", "PostgreSQL"],
    thumbnail: "/images/portfolio-4.jpg",
    href: "#",
  },
  {
    id: 5,
    title: "Company Profile Startup EdTech",
    description:
      "Website modern untuk startup pendidikan dengan animasi smooth dan performa tinggi.",
    tags: ["Next.js", "Framer Motion", "Vercel"],
    thumbnail: "/images/portfolio-5.jpg",
    href: "#",
  },
  {
    id: 6,
    title: "Blog Developer Personal",
    description:
      "Platform blog custom dengan MDX, syntax highlighting, dan dark mode yang elegan.",
    tags: ["Next.js", "MDX", "Tailwind"],
    thumbnail: "/images/portfolio-6.jpg",
    href: "#",
  },
];

// ============================================================
// Tutorial/Blog (data placeholder)
// ============================================================
export const TUTORIALS = [
  {
    id: 1,
    title: "Mulai Web Development dari Nol: Panduan Lengkap 2024",
    excerpt:
      "Bingung harus mulai dari mana? Artikel ini memandu kamu dari setup environment hingga deploy website pertamamu.",
    thumbnail: "/images/tutorial-1.jpg",
    readTime: "12 menit",
    date: "10 Jan 2026",
    category: "Pemula",
    href: "#",
  },
  {
    id: 2,
    title: "Menguasai Tailwind CSS: Tips & Trik yang Jarang Dibahas",
    excerpt:
      "Lebih dari sekedar utility classes — pelajari pola-pola advanced Tailwind yang membuat kode kamu lebih clean.",
    thumbnail: "/images/tutorial-2.jpg",
    readTime: "8 menit",
    date: "25 Jan 2026",
    category: "CSS",
    href: "#",
  },
  {
    id: 3,
    title: "Next.js App Router: Migrasi dari Pages Router",
    excerpt:
      "Panduan step-by-step migrasi project Next.js kamu ke App Router dengan aman tanpa breaking changes.",
    thumbnail: "/images/tutorial-3.jpg",
    readTime: "15 menit",
    date: "5 Feb 2026",
    category: "Next.js",
    href: "#",
  },
];

// ============================================================
// Testimonial (data placeholder)
// ============================================================
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Sari Dewi Rahayu",
    role: "Founder, Batik Nusantara Online",
    avatar: "/images/testimonial-1.jpg",
    quote:
      "Website toko kami sekarang terlihat jauh lebih profesional dan penjualan online meningkat 3x lipat dalam 2 bulan pertama. Komunikasinya lancar dan hasilnya melebihi ekspektasi.",
  },
  {
    id: 2,
    name: "Rina Marlina",
    role: "Mahasiswi Informatika, Universitas Padjadjaran",
    avatar: "/images/testimonial-2.jpg",
    quote:
      "Tutorial di Nonakoding adalah yang paling mudah dipahami yang pernah aku temukan. Dalam 3 bulan aku bisa bikin landing page sendiri untuk project kampus. Highly recommended!",
  },
  {
    id: 3,
    name: "Dian Fitriani",
    role: "Co-founder, Startup HealthTech",
    avatar: "/images/testimonial-3.jpg",
    quote:
      "Proses pengerjaan cepat, kode-nya bersih dan terdokumentasi dengan baik. Tim kami bisa langsung maintain sendiri setelah handover. Ini yang kami cari!",
  },
];

// ============================================================
// Social Media Links
// ============================================================
export const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com/nonakoding", icon: "Instagram" },
  { label: "LinkedIn", href: "https://linkedin.com/company/nonakoding", icon: "Linkedin" },
  { label: "GitHub", href: "https://github.com/nonakoding", icon: "Github" },
  { label: "YouTube", href: "https://youtube.com/@nonakoding", icon: "Youtube" },
  { label: "TikTok", href: "https://tiktok.com/@nonakoding", icon: "Music" },
];
