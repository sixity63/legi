// Default content. Admin edits are stored in localStorage and merged on top
// at runtime via src/lib/content-store.tsx.
import galleryPlaceholder from "@/assets/hero-electro.jpeg";
import tamanCourtyardImg from "@/assets/taman_courtyard.png";
import ruangKelasImg from "@/assets/ruang_kelas.png";

export type SiteContent = typeof siteData;

export const siteData = {
  brand: {
    name: "Teknik Elektro UNSRAT",
    short: "TE UNSRAT",
  },
  hero: {
    title: "Jurusan Teknik Elektro UNSRAT",
    subtitle:
      "Mencetak Insinyur Elektro yang Inovatif, Kompeten, dan Berdaya Saing Global",
    primaryCta: { label: "Profil Jurusan", href: "#tentang" },
    secondaryCta: { label: "Hubungi Kami", href: "#kontak" },
  },
  about:
    "Jurusan Teknik Elektro Universitas Sam Ratulangi merupakan salah satu program studi yang berfokus pada pengembangan ilmu dan teknologi di bidang tenaga listrik, telekomunikasi, elektronika, sistem kontrol, dan komputer.",
  expertise: [
    { icon: "Zap", title: "Teknik Tenaga Listrik dan Tegangan Tinggi", desc: "Mempelajari sistem pembangkitan, penyaluran, distribusi, dan pemanfaatan energi listrik, termasuk teknologi serta peralatan yang bekerja pada tegangan tinggi untuk menjamin keandalan, efisiensi, dan keamanan sistem tenaga listrik." },
    { icon: "Cog", title: "Teknik Kendali dan Kecerdasan Buatan", desc: "Fokus pada otomasi industri dan kecerdasan buatan, mempelajari sistem pengendalian otomatis serta penerapan kecerdasan buatan (Artificial Intelligence) untuk meningkatkan kinerja, efisiensi, dan kemampuan pengambilan keputusan pada berbagai sistem dan perangkat." },
    { icon: "CircuitBoard", title: "Elektronika dan Instrumentasi", desc: "Mempelajari perancangan, pengembangan, dan penerapan perangkat elektronika serta instrumen pengukuran yang digunakan untuk memantau, mengendalikan, dan menganalisis berbagai proses dan sistem." },
    { icon: "Cpu", title: "Teknik Jaringan Komputer dan Biomedis", desc: "Mempelajari teknologi jaringan komputer untuk komunikasi dan pertukaran data, serta penerapan teknologi rekayasa dalam bidang kesehatan melalui pengembangan dan pemeliharaan peralatan medis dan sistem biomedis." },
  ],
  visi:
    "Menjadi program studi unggulan dalam pendidikan, penelitian, dan pengabdian masyarakat di bidang Teknik Elektro yang berdaya saing global pada tahun 2030.",
  misi: [
    "Menyelenggarakan pendidikan Teknik Elektro yang berkualitas dan adaptif terhadap perkembangan teknologi.",
    "Mengembangkan penelitian inovatif di bidang ketenagalistrikan, telekomunikasi, elektronika, kontrol, dan komputer.",
    "Melaksanakan pengabdian masyarakat berbasis penerapan teknologi untuk peningkatan kesejahteraan.",
    "Membangun kerjasama strategis dengan industri, pemerintah, dan institusi pendidikan nasional maupun internasional.",
  ],
  labs: [
    { icon: "Zap", name: "Teknik Tenaga Listrik dan Tegangan Tinggi", desc: "Laboratorium sistem tenaga dan proteksi listrik." },
    { icon: "Cog", name: "Teknik Kendali dan Kecerdasan Buatan", desc: "Laboratorium robotika dan kecerdasan buatan." },
    { icon: "CircuitBoard", name: "Elektronika dan Instrumentasi", desc: "Laboratorium pengembangan perangkat elektronik." },
    { icon: "Cpu", name: "Teknik Jaringan Komputer dan Biomedis", desc: "Laboratorium teknologi kesehatan dan jaringan." },
  ],
  stats: [
    { label: "Dosen", value: 38, suffix: "+" },
    { label: "Mahasiswa", value: 620, suffix: "+" },
    { label: "Laboratorium", value: 4, suffix: "" },
    { label: "Alumni", value: 2400, suffix: "+" },
  ],
  contact: {
    address:
      "Fakultas Teknik, Universitas Sam Ratulangi, Jl. Kampus UNSRAT, Bahu, Malalayang, Manado, Sulawesi Utara 95115",
    email: "elektro@unsrat.ac.id",
    phone: "+62 431 852959",
    mapsQuery: "Fakultas+Teknik+Universitas+Sam+Ratulangi+Manado",
  },
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
  },
  gallery: [
    { src: tamanCourtyardImg, title: "Taman & Courtyard", desc: "Area hijau di tengah gedung sebagai ruang interaksi mahasiswa." },
    { src: ruangKelasImg, title: "Ruang Kelas & Seminar", desc: "Classroom JTE dan Seminar Room untuk perkuliahan modern." },
  ] as { src: string; title: string; desc: string }[],
  news: [
    {
      id: "welcome",
      title: "Selamat Datang di Website Jurusan Teknik Elektro UNSRAT",
      date: "2026-06-13",
      summary: "Website resmi Jurusan Teknik Elektro UNSRAT kini hadir dengan tampilan baru yang modern dan informatif.",
    },
  ] as { id: string; title: string; date: string; summary: string }[],
};