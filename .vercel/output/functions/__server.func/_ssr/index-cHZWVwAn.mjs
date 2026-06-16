import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { u as useContent } from "./router-B4uYgEBI.mjs";
import { Z as Zap, b as Sun, M as Moon, X, c as Menu, A as ArrowRight, C as Cpu, d as Cog, e as CircuitBoard, f as Radio, g as Compass, h as Target, N as Newspaper, I as Instagram, F as Facebook, Y as Youtube, i as MapPin, j as Mail, k as Phone } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const links = [
  { href: "#tentang", label: "Tentang" },
  { href: "#keahlian", label: "Keahlian" },
  { href: "#visi-misi", label: "Visi & Misi" },
  { href: "#fasilitas", label: "Fasilitas" },
  { href: "#statistik", label: "Statistik" },
  { href: "#berita", label: "Berita" },
  { href: "#kontak", label: "Kontak" },
  { href: "/admin", label: "Admin" }
];
function Navbar() {
  const { content: siteData } = useContent();
  const [dark, setDark] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  const [scrolled, setScrolled] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(prefersDark);
    document.documentElement.classList.toggle("dark", prefersDark);
  }, []);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: `fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/85 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", className: "flex items-center gap-2 font-semibold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid place-items-center h-9 w-9 rounded-lg bg-navy text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-5 w-5 text-gold" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: siteData.brand.short })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "hidden md:flex items-center gap-7 text-sm font-medium", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: l.href,
              className: "text-foreground/80 hover:text-foreground transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gold after:transition-all hover:after:w-full",
              children: l.label
            }
          ) }, l.href)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: toggleTheme,
                "aria-label": "Toggle dark mode",
                className: "h-9 w-9 grid place-items-center rounded-lg border border-border hover:bg-secondary transition-colors",
                children: dark ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-4 w-4" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setOpen((v) => !v),
                "aria-label": "Toggle menu",
                className: "md:hidden h-9 w-9 grid place-items-center rounded-lg border border-border",
                children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-4 w-4" })
              }
            )
          ] })
        ] }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden border-t border-border bg-background/95 backdrop-blur", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "px-4 py-3 space-y-1", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: l.href,
            onClick: () => setOpen(false),
            className: "block px-3 py-2 rounded-md hover:bg-secondary text-sm",
            children: l.label
          }
        ) }, l.href)) }) })
      ]
    }
  );
}
function Counter({ value, suffix = "" }) {
  const [n, setN] = reactExports.useState(0);
  const ref = reactExports.useRef(null);
  const started = reactExports.useRef(false);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1600;
          const start = performance.now();
          const tick = (t) => {
            const p = Math.min((t - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(Math.round(value * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ref, children: [
    n.toLocaleString("id-ID"),
    suffix
  ] });
}
const heroImg = "/assets/hero-electro-D_T8uJVo.jpeg";
const iconMap = {
  Zap,
  Radio,
  CircuitBoard,
  Cog,
  Cpu
};
function Hero() {
  const { content: siteData } = useContent();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "top", className: "relative isolate overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28", style: { background: "var(--gradient-hero)" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 opacity-30 pointer-events-none", "aria-hidden": true, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-24 -left-24 h-96 w-96 rounded-full blur-3xl", style: { background: "var(--gold)", opacity: 0.15 } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-24 -right-24 h-96 w-96 rounded-full blur-3xl", style: { background: "oklch(0.5 0.18 260)", opacity: 0.3 } })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center text-primary-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-fade-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border border-white/20 bg-white/5 backdrop-blur", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-gold" }),
          "Fakultas Teknik · UNSRAT"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]", children: [
          siteData.hero.title.split(" UNSRAT")[0],
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "UNSRAT" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg text-white/80 max-w-xl", children: siteData.hero.subtitle }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: siteData.hero.primaryCta.href,
              className: "inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gold text-accent-foreground font-semibold hover:translate-y-[-2px] transition-all shadow-[var(--shadow-gold)]",
              children: [
                siteData.hero.primaryCta.label,
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: siteData.hero.secondaryCta.href,
              className: "inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/25 hover:bg-white/10 font-semibold transition-colors",
              children: siteData.hero.secondaryCta.label
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative animate-fade-up [animation-delay:200ms]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative rounded-2xl overflow-hidden border border-white/15 shadow-[var(--shadow-elegant)] animate-float", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: heroImg,
          alt: "Gedung Fakultas Teknik - Jurusan Teknik Elektro UNSRAT",
          width: 1280,
          height: 960,
          className: "w-full h-auto object-cover"
        }
      ) }) })
    ] })
  ] });
}
function SectionHeader({ eyebrow, title, desc }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal max-w-2xl mx-auto text-center mb-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.2em] font-semibold text-gold", children: eyebrow }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl sm:text-4xl font-bold", children: title }),
    desc && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: desc })
  ] });
}
function About() {
  const { content: siteData } = useContent();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "tentang", className: "py-20 sm:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Tentang Jurusan", title: "Inovasi & Keunggulan di Bidang Teknik Elektro" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "reveal rounded-2xl border border-border bg-card p-8 sm:p-12 text-center text-lg leading-relaxed text-card-foreground shadow-sm", children: siteData.about })
  ] }) });
}
function Expertise() {
  const { content: siteData } = useContent();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "keahlian", className: "py-20 sm:py-28 bg-secondary/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Bidang Keahlian", title: "Lima Pilar Keilmuan", desc: "Mahasiswa dapat mendalami fokus keahlian sesuai minat dan kebutuhan industri." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: siteData.expertise.map((e, i) => {
      const Icon = iconMap[e.icon] ?? Zap;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "reveal group p-6 rounded-2xl bg-card border border-border hover:border-gold/60 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-[var(--shadow-elegant)]",
          style: { transitionDelay: `${i * 60}ms` },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-xl grid place-items-center bg-navy text-gold group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-6 w-6" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-lg font-semibold", children: e.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: e.desc })
          ]
        },
        e.title
      );
    }) })
  ] }) });
}
function VisiMisi() {
  const { content: siteData } = useContent();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "visi-misi", className: "py-20 sm:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Visi & Misi", title: "Arah dan Komitmen Kami" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal p-8 rounded-2xl bg-navy text-primary-foreground shadow-[var(--shadow-elegant)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-10 w-10 grid place-items-center rounded-lg bg-gold text-accent-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Compass, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold", children: "Visi" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 leading-relaxed text-white/85", children: siteData.visi })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal p-8 rounded-2xl bg-card border border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-10 w-10 grid place-items-center rounded-lg bg-navy text-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold", children: "Misi" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "mt-5 space-y-3", children: siteData.misi.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 h-6 w-6 rounded-full bg-gold/20 text-foreground text-xs font-bold grid place-items-center", children: i + 1 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm leading-relaxed", children: m })
        ] }, i)) })
      ] })
    ] })
  ] }) });
}
function Labs() {
  const { content: siteData } = useContent();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "fasilitas", className: "py-20 sm:py-28 bg-secondary/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Fasilitas", title: "Laboratorium Penunjang", desc: "Empat laboratorium modern mendukung praktikum dan riset mahasiswa." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-4", children: siteData.labs.map((l, i) => {
      const Icon = iconMap[l.icon] ?? CircuitBoard;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "reveal group flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border hover:border-gold/60 hover:-translate-y-1 transition-all",
          style: { transitionDelay: `${i * 60}ms` },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-14 w-14 rounded-full grid place-items-center bg-gradient-to-br from-navy to-navy-deep text-gold group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-6 w-6" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-sm font-semibold", children: l.name })
          ]
        },
        l.name
      );
    }) })
  ] }) });
}
function Stats() {
  const { content: siteData } = useContent();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "statistik", className: "py-20 sm:py-28 relative overflow-hidden", style: { background: "var(--gradient-hero)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 text-primary-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal text-center mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.2em] font-semibold text-gold", children: "Dosen & Mahasiswa" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl sm:text-4xl font-bold", children: "Komunitas Akademik Kami" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4", children: siteData.stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal rounded-2xl border border-white/15 bg-white/5 backdrop-blur p-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl sm:text-5xl font-bold text-gold tabular-nums", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { value: s.value, suffix: s.suffix }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-sm text-white/80 uppercase tracking-wider", children: s.label })
    ] }, s.label)) })
  ] }) });
}
function Contact() {
  return ContactInner();
}
function News() {
  const { content: siteData } = useContent();
  if (!siteData.news || siteData.news.length === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "berita", className: "py-20 sm:py-28 bg-secondary/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Berita & Pengumuman", title: "Kabar Terbaru", desc: "Informasi terbaru seputar Jurusan Teknik Elektro UNSRAT." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-5", children: siteData.news.map((n, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "article",
      {
        className: "reveal p-6 rounded-2xl bg-card border border-border hover:border-gold/60 hover:-translate-y-1 transition-all shadow-sm",
        style: { transitionDelay: `${i * 60}ms` },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-lg grid place-items-center bg-navy text-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Newspaper, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-xs text-muted-foreground", children: new Date(n.date).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1 text-lg font-semibold leading-snug", children: n.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: n.summary })
        ]
      },
      n.id
    )) })
  ] }) });
}
function Gallery() {
  const { content: siteData } = useContent();
  const items = siteData.gallery;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "galeri", className: "py-20 sm:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Galeri", title: "Tampilan Dalam Gedung", desc: "Suasana lingkungan akademik Jurusan Teknik Elektro UNSRAT." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-6", children: items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "figure",
      {
        className: "reveal group relative overflow-hidden rounded-2xl border border-border shadow-sm hover:shadow-[var(--shadow-elegant)] transition-all",
        style: { transitionDelay: `${i * 80}ms` },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: it.src,
              alt: it.title,
              loading: "lazy",
              className: "w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/75 via-black/40 to-transparent text-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-gold", children: it.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-white/85 mt-1", children: it.desc })
          ] })
        ]
      },
      it.title
    )) })
  ] }) });
}
function ContactInner() {
  const { content: siteData } = useContent();
  const { contact } = siteData;
  const mapsSrc = `https://www.google.com/maps?q=${contact.mapsQuery}&output=embed`;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "kontak", className: "py-20 sm:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Kontak", title: "Hubungi Kami", desc: "Kami terbuka untuk kolaborasi akademik, riset, dan industri." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ContactItem, { icon: MapPin, title: "Alamat", content: contact.address }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ContactItem, { icon: Mail, title: "Email", content: contact.email, href: `mailto:${contact.email}` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ContactItem, { icon: Phone, title: "Telepon", content: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "reveal rounded-2xl overflow-hidden border border-border shadow-sm aspect-video lg:aspect-auto min-h-80", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "iframe",
        {
          src: mapsSrc,
          title: "Lokasi Fakultas Teknik UNSRAT",
          className: "w-full h-full",
          loading: "lazy",
          referrerPolicy: "no-referrer-when-downgrade"
        }
      ) })
    ] })
  ] }) });
}
function ContactItem({ icon: Icon, title, content, href }) {
  const inner = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 p-6 rounded-2xl bg-card border border-border hover:border-gold/50 transition-colors", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 h-12 w-12 rounded-xl grid place-items-center bg-navy text-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm text-muted-foreground break-words", children: content })
    ] })
  ] });
  return href ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href, children: inner }) : inner;
}
function Footer() {
  const { content: siteData } = useContent();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "bg-navy-deep text-primary-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 py-12 grid md:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 font-semibold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-9 w-9 grid place-items-center rounded-lg bg-gold text-accent-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-5 w-5" }) }),
          "Teknik Elektro UNSRAT"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-white/70 max-w-xs", children: "Fakultas Teknik, Universitas Sam Ratulangi, Manado." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-gold uppercase tracking-wider", children: "Navigasi" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-3 space-y-2 text-sm text-white/75", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#tentang", className: "hover:text-gold transition-colors", children: "Tentang" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#keahlian", className: "hover:text-gold transition-colors", children: "Bidang Keahlian" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#fasilitas", className: "hover:text-gold transition-colors", children: "Laboratorium" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#kontak", className: "hover:text-gold transition-colors", children: "Kontak" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-gold uppercase tracking-wider", children: "Ikuti Kami" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SocialLink, { href: siteData.social.instagram, icon: Instagram, label: "Instagram" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SocialLink, { href: siteData.social.facebook, icon: Facebook, label: "Facebook" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SocialLink, { href: siteData.social.youtube, icon: Youtube, label: "YouTube" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 py-5 text-xs text-white/60 text-center", children: [
      "Copyright © 2026 Jurusan Teknik Elektro UNSRAT. All rights reserved.",
      " · ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/admin", className: "hover:text-gold transition-colors", children: "Admin" })
    ] }) })
  ] });
}
function SocialLink({ href, icon: Icon, label }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "a",
    {
      href,
      target: "_blank",
      rel: "noreferrer",
      "aria-label": label,
      className: "h-10 w-10 grid place-items-center rounded-lg bg-white/10 hover:bg-gold hover:text-accent-foreground transition-colors",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" })
    }
  );
}
function useReveal() {
  reactExports.useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("reveal-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
function Index() {
  useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Expertise, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(VisiMisi, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Labs, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stats, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Gallery, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(News, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Index as component
};
