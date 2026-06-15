import {
  Zap,
  Radio,
  CircuitBoard,
  Cog,
  Cpu,
  MapPin,
  Mail,
  Phone,
  Target,
  Compass,
  Instagram,
  Facebook,
  Youtube,
  ArrowRight,
  Newspaper,
  type LucideIcon,
} from "lucide-react";
import { useContent } from "@/lib/content-store";
import { Counter } from "./Counter";
import heroImg from "@/assets/hero-electro.jpeg";

const iconMap: Record<string, LucideIcon> = {
  Zap, Radio, CircuitBoard, Cog, Cpu,
};

export function Hero() {
  const { content: siteData } = useContent();
  return (
    <section id="top" className="relative isolate overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28" style={{ background: "var(--gradient-hero)" }}>
      <div className="absolute inset-0 opacity-30 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full blur-3xl" style={{ background: "var(--gold)", opacity: 0.15 }} />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full blur-3xl" style={{ background: "oklch(0.5 0.18 260)", opacity: 0.3 }} />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center text-primary-foreground">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border border-white/20 bg-white/5 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Fakultas Teknik · UNSRAT
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
            {siteData.hero.title.split(" UNSRAT")[0]}{" "}
            <span className="text-gold">UNSRAT</span>
          </h1>
          <p className="mt-5 text-lg text-white/80 max-w-xl">
            {siteData.hero.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={siteData.hero.primaryCta.href}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gold text-accent-foreground font-semibold hover:translate-y-[-2px] transition-all shadow-[var(--shadow-gold)]"
            >
              {siteData.hero.primaryCta.label}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={siteData.hero.secondaryCta.href}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/25 hover:bg-white/10 font-semibold transition-colors"
            >
              {siteData.hero.secondaryCta.label}
            </a>
          </div>
        </div>
        <div className="relative animate-fade-up [animation-delay:200ms]">
          <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-[var(--shadow-elegant)] animate-float">
            <img
              src={heroImg}
              alt="Gedung Fakultas Teknik - Jurusan Teknik Elektro UNSRAT"
              width={1280}
              height={960}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
  return (
    <div className="reveal max-w-2xl mx-auto text-center mb-12">
      <div className="text-xs uppercase tracking-[0.2em] font-semibold text-gold">{eyebrow}</div>
      <h2 className="mt-3 text-3xl sm:text-4xl font-bold">{title}</h2>
      {desc && <p className="mt-4 text-muted-foreground">{desc}</p>}
    </div>
  );
}

export function About() {
  const { content: siteData } = useContent();
  return (
    <section id="tentang" className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeader eyebrow="Tentang Jurusan" title="Inovasi & Keunggulan di Bidang Teknik Elektro" />
        <div className="reveal rounded-2xl border border-border bg-card p-8 sm:p-12 text-center text-lg leading-relaxed text-card-foreground shadow-sm">
          {siteData.about}
        </div>
      </div>
    </section>
  );
}

export function Expertise() {
  const { content: siteData } = useContent();
  return (
    <section id="keahlian" className="py-20 sm:py-28 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader eyebrow="Bidang Keahlian" title="Lima Pilar Keilmuan" desc="Mahasiswa dapat mendalami fokus keahlian sesuai minat dan kebutuhan industri." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {siteData.expertise.map((e, i) => {
            const Icon = iconMap[e.icon] ?? Zap;
            return (
              <div
                key={e.title}
                className="reveal group p-6 rounded-2xl bg-card border border-border hover:border-gold/60 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-[var(--shadow-elegant)]"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="h-12 w-12 rounded-xl grid place-items-center bg-navy text-gold group-hover:scale-110 transition-transform">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{e.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{e.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function VisiMisi() {
  const { content: siteData } = useContent();
  return (
    <section id="visi-misi" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader eyebrow="Visi & Misi" title="Arah dan Komitmen Kami" />
        <div className="grid md:grid-cols-2 gap-6">
          <div className="reveal p-8 rounded-2xl bg-navy text-primary-foreground shadow-[var(--shadow-elegant)]">
            <div className="flex items-center gap-3">
              <span className="h-10 w-10 grid place-items-center rounded-lg bg-gold text-accent-foreground"><Compass className="h-5 w-5" /></span>
              <h3 className="text-2xl font-bold">Visi</h3>
            </div>
            <p className="mt-5 leading-relaxed text-white/85">{siteData.visi}</p>
          </div>
          <div className="reveal p-8 rounded-2xl bg-card border border-border">
            <div className="flex items-center gap-3">
              <span className="h-10 w-10 grid place-items-center rounded-lg bg-navy text-gold"><Target className="h-5 w-5" /></span>
              <h3 className="text-2xl font-bold">Misi</h3>
            </div>
            <ol className="mt-5 space-y-3">
              {siteData.misi.map((m, i) => (
                <li key={i} className="flex gap-3">
                  <span className="shrink-0 h-6 w-6 rounded-full bg-gold/20 text-foreground text-xs font-bold grid place-items-center">{i + 1}</span>
                  <span className="text-sm leading-relaxed">{m}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Labs() {
  const { content: siteData } = useContent();
  return (
    <section id="fasilitas" className="py-20 sm:py-28 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader eyebrow="Fasilitas" title="Laboratorium Penunjang" desc="Empat laboratorium modern mendukung praktikum dan riset mahasiswa." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {siteData.labs.map((l, i) => {
            const Icon = iconMap[l.icon] ?? CircuitBoard;
            return (
              <div
                key={l.name}
                className="reveal group flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border hover:border-gold/60 hover:-translate-y-1 transition-all"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className="h-14 w-14 rounded-full grid place-items-center bg-gradient-to-br from-navy to-navy-deep text-gold group-hover:scale-110 transition-transform">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-sm font-semibold">{l.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Stats() {
  const { content: siteData } = useContent();
  return (
    <section id="statistik" className="py-20 sm:py-28 relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 text-primary-foreground">
        <div className="reveal text-center mb-12">
          <div className="text-xs uppercase tracking-[0.2em] font-semibold text-gold">Dosen & Mahasiswa</div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">Komunitas Akademik Kami</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {siteData.stats.map((s) => (
            <div key={s.label} className="reveal rounded-2xl border border-white/15 bg-white/5 backdrop-blur p-6 text-center">
              <div className="text-4xl sm:text-5xl font-bold text-gold tabular-nums">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm text-white/80 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return ContactInner();
}

export function News() {
  const { content: siteData } = useContent();
  if (!siteData.news || siteData.news.length === 0) return null;
  return (
    <section id="berita" className="py-20 sm:py-28 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader eyebrow="Berita & Pengumuman" title="Kabar Terbaru" desc="Informasi terbaru seputar Jurusan Teknik Elektro UNSRAT." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {siteData.news.map((n, i) => (
            <article
              key={n.id}
              className="reveal p-6 rounded-2xl bg-card border border-border hover:border-gold/60 hover:-translate-y-1 transition-all shadow-sm"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="h-10 w-10 rounded-lg grid place-items-center bg-navy text-gold">
                <Newspaper className="h-5 w-5" />
              </div>
              <div className="mt-4 text-xs text-muted-foreground">
                {new Date(n.date).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}
              </div>
              <h3 className="mt-1 text-lg font-semibold leading-snug">{n.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{n.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Gallery() {
  const { content: siteData } = useContent();
  const items = siteData.gallery;
  return (
    <section id="galeri" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader eyebrow="Galeri" title="Tampilan Dalam Gedung" desc="Suasana lingkungan akademik Jurusan Teknik Elektro UNSRAT." />
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((it, i) => (
            <figure
              key={it.title}
              className="reveal group relative overflow-hidden rounded-2xl border border-border shadow-sm hover:shadow-[var(--shadow-elegant)] transition-all"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <img
                src={it.src}
                alt={it.title}
                loading="lazy"
                className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/75 via-black/40 to-transparent text-white">
                <div className="text-sm font-semibold text-gold">{it.title}</div>
                <div className="text-xs text-white/85 mt-1">{it.desc}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactInner() {
  const { content: siteData } = useContent();
  const { contact } = siteData;
  const mapsSrc = `https://www.google.com/maps?q=${contact.mapsQuery}&output=embed`;
  return (
    <section id="kontak" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader eyebrow="Kontak" title="Hubungi Kami" desc="Kami terbuka untuk kolaborasi akademik, riset, dan industri." />
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="reveal space-y-4">
            <ContactItem icon={MapPin} title="Alamat" content={contact.address} />
            <ContactItem icon={Mail} title="Email" content={contact.email} href={`mailto:${contact.email}`} />
            <ContactItem icon={Phone} title="Telepon" content={contact.phone} href={`tel:${contact.phone.replace(/\s/g, "")}`} />
          </div>
          <div className="reveal rounded-2xl overflow-hidden border border-border shadow-sm aspect-video lg:aspect-auto min-h-80">
            <iframe
              src={mapsSrc}
              title="Lokasi Fakultas Teknik UNSRAT"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon: Icon, title, content, href }: { icon: LucideIcon; title: string; content: string; href?: string }) {
  const inner = (
    <div className="flex gap-4 p-6 rounded-2xl bg-card border border-border hover:border-gold/50 transition-colors">
      <span className="shrink-0 h-12 w-12 rounded-xl grid place-items-center bg-navy text-gold">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <div className="text-sm font-semibold">{title}</div>
        <div className="mt-1 text-sm text-muted-foreground break-words">{content}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}

export function Footer() {
  const { content: siteData } = useContent();
  return (
    <footer className="bg-navy-deep text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 font-semibold">
            <span className="h-9 w-9 grid place-items-center rounded-lg bg-gold text-accent-foreground">
              <Zap className="h-5 w-5" />
            </span>
            Teknik Elektro UNSRAT
          </div>
          <p className="mt-4 text-sm text-white/70 max-w-xs">
            Fakultas Teknik, Universitas Sam Ratulangi, Manado.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold text-gold uppercase tracking-wider">Navigasi</div>
          <ul className="mt-3 space-y-2 text-sm text-white/75">
            <li><a href="#tentang" className="hover:text-gold transition-colors">Tentang</a></li>
            <li><a href="#keahlian" className="hover:text-gold transition-colors">Bidang Keahlian</a></li>
            <li><a href="#fasilitas" className="hover:text-gold transition-colors">Laboratorium</a></li>
            <li><a href="#kontak" className="hover:text-gold transition-colors">Kontak</a></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold text-gold uppercase tracking-wider">Ikuti Kami</div>
          <div className="mt-3 flex gap-3">
            <SocialLink href={siteData.social.instagram} icon={Instagram} label="Instagram" />
            <SocialLink href={siteData.social.facebook} icon={Facebook} label="Facebook" />
            <SocialLink href={siteData.social.youtube} icon={Youtube} label="YouTube" />
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-5 text-xs text-white/60 text-center">
          Copyright © 2026 Jurusan Teknik Elektro UNSRAT. All rights reserved.
          {" · "}
          <a href="/admin" className="hover:text-gold transition-colors">Admin</a>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon: Icon, label }: { href: string; icon: LucideIcon; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="h-10 w-10 grid place-items-center rounded-lg bg-white/10 hover:bg-gold hover:text-accent-foreground transition-colors"
    >
      <Icon className="h-4 w-4" />
    </a>
  );
}