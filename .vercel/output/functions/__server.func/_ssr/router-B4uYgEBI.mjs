import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
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
const appCss = "/assets/styles-LFMjuF3P.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const tamanCourtyardImg = "/assets/taman_courtyard-lFBzxBCH.jpeg";
const ruangKelasImg = "/assets/ruang_kelas-OwS5MzL0.jpeg";
const siteData = {
  brand: {
    name: "Teknik Elektro UNSRAT",
    short: "TE UNSRAT"
  },
  hero: {
    title: "Jurusan Teknik Elektro UNSRAT",
    subtitle: "Mencetak Insinyur Elektro yang Inovatif, Kompeten, dan Berdaya Saing Global",
    primaryCta: { label: "Profil Jurusan", href: "#tentang" },
    secondaryCta: { label: "Hubungi Kami", href: "#kontak" }
  },
  about: "Jurusan Teknik Elektro Universitas Sam Ratulangi merupakan salah satu program studi yang berfokus pada pengembangan ilmu dan teknologi di bidang tenaga listrik, telekomunikasi, elektronika, sistem kontrol, dan komputer.",
  expertise: [
    { icon: "Zap", title: "Teknik Tenaga Listrik dan Tegangan Tinggi", desc: "Mempelajari sistem pembangkitan, penyaluran, distribusi, dan pemanfaatan energi listrik, termasuk teknologi serta peralatan yang bekerja pada tegangan tinggi untuk menjamin keandalan, efisiensi, dan keamanan sistem tenaga listrik." },
    { icon: "Cog", title: "Teknik Kendali dan Kecerdasan Buatan", desc: "Fokus pada otomasi industri dan kecerdasan buatan, mempelajari sistem pengendalian otomatis serta penerapan kecerdasan buatan (Artificial Intelligence) untuk meningkatkan kinerja, efisiensi, dan kemampuan pengambilan keputusan pada berbagai sistem dan perangkat." },
    { icon: "CircuitBoard", title: "Elektronika dan Instrumentasi", desc: "Mempelajari perancangan, pengembangan, dan penerapan perangkat elektronika serta instrumen pengukuran yang digunakan untuk memantau, mengendalikan, dan menganalisis berbagai proses dan sistem." },
    { icon: "Cpu", title: "Teknik Jaringan Komputer dan Biomedis", desc: "Mempelajari teknologi jaringan komputer untuk komunikasi dan pertukaran data, serta penerapan teknologi rekayasa dalam bidang kesehatan melalui pengembangan dan pemeliharaan peralatan medis dan sistem biomedis." }
  ],
  visi: "Menjadi program studi unggulan dalam pendidikan, penelitian, dan pengabdian masyarakat di bidang Teknik Elektro yang berdaya saing global pada tahun 2030.",
  misi: [
    "Menyelenggarakan pendidikan Teknik Elektro yang berkualitas dan adaptif terhadap perkembangan teknologi.",
    "Mengembangkan penelitian inovatif di bidang ketenagalistrikan, telekomunikasi, elektronika, kontrol, dan komputer.",
    "Melaksanakan pengabdian masyarakat berbasis penerapan teknologi untuk peningkatan kesejahteraan.",
    "Membangun kerjasama strategis dengan industri, pemerintah, dan institusi pendidikan nasional maupun internasional."
  ],
  labs: [
    { icon: "Zap", name: "Teknik Tenaga Listrik dan Tegangan Tinggi", desc: "Laboratorium sistem tenaga dan proteksi listrik." },
    { icon: "Cog", name: "Teknik Kendali dan Kecerdasan Buatan", desc: "Laboratorium robotika dan kecerdasan buatan." },
    { icon: "CircuitBoard", name: "Elektronika dan Instrumentasi", desc: "Laboratorium pengembangan perangkat elektronik." },
    { icon: "Cpu", name: "Teknik Jaringan Komputer dan Biomedis", desc: "Laboratorium teknologi kesehatan dan jaringan." }
  ],
  stats: [
    { label: "Dosen", value: 38, suffix: "+" },
    { label: "Mahasiswa", value: 620, suffix: "+" },
    { label: "Laboratorium", value: 4, suffix: "" },
    { label: "Alumni", value: 2400, suffix: "+" }
  ],
  contact: {
    address: "Fakultas Teknik, Universitas Sam Ratulangi, Jl. Kampus UNSRAT, Bahu, Malalayang, Manado, Sulawesi Utara 95115",
    email: "elektro@unsrat.ac.id",
    phone: "+62 431 852959",
    mapsQuery: "Fakultas+Teknik+Universitas+Sam+Ratulangi+Manado"
  },
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com"
  },
  gallery: [
    // PANDUAN MENGGANTI TEKS:
    // 3. Ubah 'title' dan 'desc' di bawah ini sesuai dengan deskripsi foto Anda
    { src: tamanCourtyardImg, title: "Taman & Courtyard", desc: "Area hijau di tengah gedung sebagai ruang interaksi mahasiswa." },
    { src: ruangKelasImg, title: "Ruang Kelas & Seminar", desc: "Classroom JTE dan Seminar Room untuk perkuliahan modern." }
  ],
  news: [
    {
      id: "welcome",
      title: "Selamat Datang di Website Jurusan Teknik Elektro UNSRAT",
      date: "2026-06-13",
      summary: "Website resmi Jurusan Teknik Elektro UNSRAT kini hadir dengan tampilan baru yang modern dan informatif."
    }
  ]
};
const STORAGE_KEY = "te-unsrat-content-v1";
const ContentContext = reactExports.createContext(null);
function loadInitial() {
  if (typeof window === "undefined") return siteData;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return siteData;
    const parsed = JSON.parse(raw);
    const gallery = Array.isArray(parsed.gallery) && parsed.gallery.length > 0 ? parsed.gallery.map((item, index) => ({
      ...siteData.gallery[index],
      ...item,
      src: item?.src || siteData.gallery[index]?.src
    })) : siteData.gallery;
    return { ...siteData, ...parsed, gallery };
  } catch {
    return siteData;
  }
}
function ContentProvider({ children }) {
  const [content, setContentState] = reactExports.useState(siteData);
  reactExports.useEffect(() => {
    setContentState(loadInitial());
    const onStorage = (e) => {
      if (e.key === STORAGE_KEY) setContentState(loadInitial());
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);
  const setContent = (updater) => {
    setContentState((prev) => {
      const next = typeof updater === "function" ? updater(prev) : updater;
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
      }
      return next;
    });
  };
  const reset = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
    }
    setContentState(siteData);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ContentContext.Provider, { value: { content, setContent, reset }, children });
}
function useContent() {
  const ctx = reactExports.useContext(ContentContext);
  if (!ctx) throw new Error("useContent must be used inside <ContentProvider>");
  return ctx;
}
const ADMIN_KEY = "te-unsrat-admin-session";
const ADMIN_PASSWORD = "admin123";
function isAdminLoggedIn() {
  if (typeof window === "undefined") return false;
  return sessionStorage.getItem(ADMIN_KEY) === "1";
}
function loginAdmin(password) {
  if (password === ADMIN_PASSWORD) {
    sessionStorage.setItem(ADMIN_KEY, "1");
    return true;
  }
  return false;
}
function logoutAdmin() {
  sessionStorage.removeItem(ADMIN_KEY);
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$3 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lovable App" },
      { name: "description", content: "Elektro UNSRAT Hub is a modern, responsive website showcasing the Electrical Engineering Department of Universitas Sam Ratulangi." },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Lovable App" },
      { property: "og:description", content: "Elektro UNSRAT Hub is a modern, responsive website showcasing the Electrical Engineering Department of Universitas Sam Ratulangi." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Lovable App" },
      { name: "twitter:description", content: "Elektro UNSRAT Hub is a modern, responsive website showcasing the Electrical Engineering Department of Universitas Sam Ratulangi." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/25397ef0-7dc0-41ec-a7cb-05fe16d03570/id-preview-f2570cb2--1a41c25f-b2cd-410b-badf-de56e23f9697.lovable.app-1781201929337.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/25397ef0-7dc0-41ec-a7cb-05fe16d03570/id-preview-f2570cb2--1a41c25f-b2cd-410b-badf-de56e23f9697.lovable.app-1781201929337.png" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$3.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ContentProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }) });
}
const BASE_URL = "";
const Route$2 = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [{ path: "/", changefreq: "weekly", priority: "1.0" }];
        const urls = entries.map(
          (e) => `  <url>
    <loc>${BASE_URL}${e.path}</loc>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
        );
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" }
        });
      }
    }
  }
});
const $$splitComponentImporter$1 = () => import("./admin-o6ToNR53.mjs");
const Route$1 = createFileRoute("/admin")({
  head: () => ({
    meta: [{
      title: "Admin — Teknik Elektro UNSRAT"
    }, {
      name: "robots",
      content: "noindex,nofollow"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-cHZWVwAn.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Jurusan Teknik Elektro UNSRAT — Fakultas Teknik"
    }, {
      name: "description",
      content: "Profil resmi Jurusan Teknik Elektro Universitas Sam Ratulangi: bidang keahlian, visi & misi, laboratorium, dan kontak."
    }, {
      property: "og:title",
      content: "Jurusan Teknik Elektro UNSRAT"
    }, {
      property: "og:description",
      content: "Mencetak Insinyur Elektro yang Inovatif, Kompeten, dan Berdaya Saing Global."
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:url",
      content: "/"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SitemapDotxmlRoute = Route$2.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$3
});
const AdminRoute = Route$1.update({
  id: "/admin",
  path: "/admin",
  getParentRoute: () => Route$3
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$3
});
const rootRouteChildren = {
  IndexRoute,
  AdminRoute,
  SitemapDotxmlRoute
};
const routeTree = Route$3._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  ADMIN_PASSWORD as A,
  loginAdmin as a,
  isAdminLoggedIn as i,
  logoutAdmin as l,
  router as r,
  useContent as u
};
