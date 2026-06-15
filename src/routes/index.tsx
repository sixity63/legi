import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { About, Contact, Expertise, Footer, Gallery, Hero, Labs, News, Stats, VisiMisi } from "@/components/site/Sections";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jurusan Teknik Elektro UNSRAT — Fakultas Teknik" },
      { name: "description", content: "Profil resmi Jurusan Teknik Elektro Universitas Sam Ratulangi: bidang keahlian, visi & misi, laboratorium, dan kontak." },
      { property: "og:title", content: "Jurusan Teknik Elektro UNSRAT" },
      { property: "og:description", content: "Mencetak Insinyur Elektro yang Inovatif, Kompeten, dan Berdaya Saing Global." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/" },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <VisiMisi />
        <Labs />
        <Stats />
        <Gallery />
        <News />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
