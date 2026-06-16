import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { i as isAdminLoggedIn, u as useContent, l as logoutAdmin, A as ADMIN_PASSWORD, a as loginAdmin } from "./router-B4uYgEBI.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { R as Root } from "../_libs/radix-ui__react-label.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { R as Root2, L as List, T as Trigger, C as Content } from "../_libs/radix-ui__react-tabs.mjs";
import { T as Toaster$1, t as toast } from "../_libs/sonner.mjs";
import { E as ExternalLink, R as RotateCcw, L as LogOut, T as Trash2, P as Plus, a as Lock, S as Save } from "../_libs/lucide-react.mjs";
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
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-roving-focus.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/radix-ui__react-presence.mjs";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Input = reactExports.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const Textarea = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Root, { ref, className: cn(labelVariants(), className), ...props }));
Label.displayName = Root.displayName;
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const Tabs = Root2;
const TabsList = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  List,
  {
    ref,
    className: cn(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      className
    ),
    ...props
  }
));
TabsList.displayName = List.displayName;
const TabsTrigger = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Trigger,
  {
    ref,
    className: cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      className
    ),
    ...props
  }
));
TabsTrigger.displayName = Trigger.displayName;
const TabsContent = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content,
  {
    ref,
    className: cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    ),
    ...props
  }
));
TabsContent.displayName = Content.displayName;
const Card = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      className: cn("rounded-xl border bg-card text-card-foreground shadow", className),
      ...props
    }
  )
);
Card.displayName = "Card";
const CardHeader = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("flex flex-col space-y-1.5 p-6", className), ...props })
);
CardHeader.displayName = "CardHeader";
const CardTitle = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      className: cn("font-semibold leading-none tracking-tight", className),
      ...props
    }
  )
);
CardTitle.displayName = "CardTitle";
const CardDescription = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("text-sm text-muted-foreground", className), ...props })
);
CardDescription.displayName = "CardDescription";
const CardContent = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("p-6 pt-0", className), ...props })
);
CardContent.displayName = "CardContent";
const CardFooter = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("flex items-center p-6 pt-0", className), ...props })
);
CardFooter.displayName = "CardFooter";
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
function AdminPage() {
  const [authed, setAuthed] = reactExports.useState(false);
  const [ready, setReady] = reactExports.useState(false);
  reactExports.useEffect(() => {
    setAuthed(isAdminLoggedIn());
    setReady(true);
  }, []);
  if (!ready) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-secondary/30", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { richColors: true, position: "top-center" }),
    authed ? /* @__PURE__ */ jsxRuntimeExports.jsx(Dashboard, { onLogout: () => setAuthed(false) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(LoginForm, { onSuccess: () => setAuthed(true) })
  ] });
}
function LoginForm({
  onSuccess
}) {
  const [pwd, setPwd] = reactExports.useState("");
  const [err, setErr] = reactExports.useState("");
  const submit = (e) => {
    e.preventDefault();
    if (loginAdmin(pwd)) {
      onSuccess();
    } else {
      setErr("Password salah");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen grid place-items-center px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "w-full max-w-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto h-12 w-12 grid place-items-center rounded-xl bg-navy text-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "mt-3", children: "Admin Login" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "pwd", children: "Password" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "pwd", type: "password", value: pwd, onChange: (e) => setPwd(e.target.value), placeholder: "••••••••", autoFocus: true }),
        err && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive", children: err }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
          "Default: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "font-mono", children: ADMIN_PASSWORD }),
          ". Bisa diganti via env ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "VITE_ADMIN_PASSWORD" }),
          "."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "w-full", children: "Masuk" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "block text-center text-xs text-muted-foreground hover:underline", children: "← Kembali ke beranda" })
    ] }) })
  ] }) });
}
function Dashboard({
  onLogout
}) {
  const {
    content,
    setContent,
    reset
  } = useContent();
  const update = (key, value) => setContent((prev) => ({
    ...prev,
    [key]: value
  }));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-4 py-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex items-center justify-between mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold", children: "Admin Dashboard" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Perubahan disimpan di browser ini (localStorage)." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", size: "sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-4 w-4" }),
          " Lihat Situs"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", onClick: () => {
          if (confirm("Reset semua konten ke default?")) {
            reset();
            toast.success("Konten direset");
          }
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "h-4 w-4" }),
          " Reset"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", onClick: () => {
          logoutAdmin();
          onLogout();
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-4 w-4" }),
          " Keluar"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "hero", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "flex flex-wrap h-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "hero", children: "Hero & Tentang" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "visi", children: "Visi & Misi" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "stats", children: "Statistik" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "gallery", children: "Galeri" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "news", children: "Berita" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "contact", children: "Kontak" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "hero", className: "space-y-4 mt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SectionCard, { title: "Hero", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FieldText, { label: "Judul", value: content.hero.title, onChange: (v) => update("hero", {
            ...content.hero,
            title: v
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FieldArea, { label: "Subjudul", value: content.hero.subtitle, onChange: (v) => update("hero", {
            ...content.hero,
            subtitle: v
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FieldText, { label: "Tombol Utama (label)", value: content.hero.primaryCta.label, onChange: (v) => update("hero", {
              ...content.hero,
              primaryCta: {
                ...content.hero.primaryCta,
                label: v
              }
            }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(FieldText, { label: "Tombol Utama (link)", value: content.hero.primaryCta.href, onChange: (v) => update("hero", {
              ...content.hero,
              primaryCta: {
                ...content.hero.primaryCta,
                href: v
              }
            }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(FieldText, { label: "Tombol Sekunder (label)", value: content.hero.secondaryCta.label, onChange: (v) => update("hero", {
              ...content.hero,
              secondaryCta: {
                ...content.hero.secondaryCta,
                label: v
              }
            }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(FieldText, { label: "Tombol Sekunder (link)", value: content.hero.secondaryCta.href, onChange: (v) => update("hero", {
              ...content.hero,
              secondaryCta: {
                ...content.hero.secondaryCta,
                href: v
              }
            }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { title: "Tentang Jurusan", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FieldArea, { label: "Deskripsi", rows: 5, value: content.about, onChange: (v) => update("about", v) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SaveHint, {})
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "visi", className: "space-y-4 mt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { title: "Visi", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FieldArea, { label: "Visi", rows: 4, value: content.visi, onChange: (v) => update("visi", v) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SectionCard, { title: "Misi", children: [
          content.misi.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 items-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FieldArea, { label: `Misi ${i + 1}`, rows: 2, value: m, onChange: (v) => {
              const next = [...content.misi];
              next[i] = v;
              update("misi", next);
            } }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", className: "mt-7", onClick: () => update("misi", content.misi.filter((_, idx) => idx !== i)), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4 text-destructive" }) })
          ] }, i)),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", onClick: () => update("misi", [...content.misi, "Misi baru"]), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
            " Tambah Misi"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SaveHint, {})
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "stats", className: "space-y-4 mt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { title: "Statistik", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-4", children: content.stats.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg border space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FieldText, { label: "Label", value: s.label, onChange: (v) => {
            const next = [...content.stats];
            next[i] = {
              ...s,
              label: v
            };
            update("stats", next);
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Nilai" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", value: s.value, onChange: (e) => {
                const next = [...content.stats];
                next[i] = {
                  ...s,
                  value: Number(e.target.value) || 0
                };
                update("stats", next);
              } })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(FieldText, { label: "Suffix (mis. +)", value: s.suffix, onChange: (v) => {
              const next = [...content.stats];
              next[i] = {
                ...s,
                suffix: v
              };
              update("stats", next);
            } })
          ] })
        ] }, i)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SaveHint, {})
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "gallery", className: "space-y-4 mt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SectionCard, { title: "Galeri Foto", children: [
          content.gallery.map((g, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg border space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: g.src, alt: g.title, className: "h-20 w-28 object-cover rounded-md border" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FieldText, { label: "URL Gambar", value: g.src, onChange: (v) => {
                  const next = [...content.gallery];
                  next[i] = {
                    ...g,
                    src: v
                  };
                  update("gallery", next);
                } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FieldText, { label: "Judul", value: g.title, onChange: (v) => {
                  const next = [...content.gallery];
                  next[i] = {
                    ...g,
                    title: v
                  };
                  update("gallery", next);
                } })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", onClick: () => update("gallery", content.gallery.filter((_, idx) => idx !== i)), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4 text-destructive" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(FieldArea, { label: "Deskripsi", rows: 2, value: g.desc, onChange: (v) => {
              const next = [...content.gallery];
              next[i] = {
                ...g,
                desc: v
              };
              update("gallery", next);
            } })
          ] }, i)),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", onClick: () => update("gallery", [...content.gallery, {
            src: "https://placehold.co/800x600",
            title: "Judul Foto",
            desc: "Deskripsi"
          }]), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
            " Tambah Foto"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Tip: gunakan URL gambar dari layanan hosting (Imgur, Cloudinary, dll)." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SaveHint, {})
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "news", className: "space-y-4 mt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SectionCard, { title: "Berita & Pengumuman", children: [
          content.news.map((n, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg border space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FieldText, { label: "Judul", value: n.title, onChange: (v) => {
                const next = [...content.news];
                next[i] = {
                  ...n,
                  title: v
                };
                update("news", next);
              } }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Tanggal" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "date", value: n.date, onChange: (e) => {
                  const next = [...content.news];
                  next[i] = {
                    ...n,
                    date: e.target.value
                  };
                  update("news", next);
                } })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(FieldArea, { label: "Ringkasan", rows: 3, value: n.summary, onChange: (v) => {
              const next = [...content.news];
              next[i] = {
                ...n,
                summary: v
              };
              update("news", next);
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "ghost", size: "sm", onClick: () => update("news", content.news.filter((_, idx) => idx !== i)), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4 text-destructive" }),
              " Hapus"
            ] }) })
          ] }, n.id)),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", onClick: () => update("news", [...content.news, {
            id: `n-${Date.now()}`,
            title: "Judul berita baru",
            date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
            summary: "Ringkasan singkat berita."
          }]), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
            " Tambah Berita"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SaveHint, {})
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "contact", className: "space-y-4 mt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SectionCard, { title: "Kontak", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FieldArea, { label: "Alamat", rows: 3, value: content.contact.address, onChange: (v) => update("contact", {
            ...content.contact,
            address: v
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FieldText, { label: "Email", value: content.contact.email, onChange: (v) => update("contact", {
              ...content.contact,
              email: v
            }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(FieldText, { label: "Telepon", value: content.contact.phone, onChange: (v) => update("contact", {
              ...content.contact,
              phone: v
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FieldText, { label: "Google Maps Query", value: content.contact.mapsQuery, onChange: (v) => update("contact", {
            ...content.contact,
            mapsQuery: v
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SectionCard, { title: "Media Sosial", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FieldText, { label: "Instagram", value: content.social.instagram, onChange: (v) => update("social", {
            ...content.social,
            instagram: v
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FieldText, { label: "Facebook", value: content.social.facebook, onChange: (v) => update("social", {
            ...content.social,
            facebook: v
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FieldText, { label: "YouTube", value: content.social.youtube, onChange: (v) => update("social", {
            ...content.social,
            youtube: v
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SaveHint, {})
      ] })
    ] })
  ] });
}
function SectionCard({
  title,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: title }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "space-y-3", children })
  ] });
}
function FieldText({
  label,
  value,
  onChange
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value, onChange: (e) => onChange(e.target.value) })
  ] });
}
function FieldArea({
  label,
  value,
  onChange,
  rows = 3
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { rows, value, onChange: (e) => onChange(e.target.value) })
  ] });
}
function SaveHint() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground flex items-center gap-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "h-3 w-3" }),
    " Perubahan otomatis disimpan saat Anda mengetik."
  ] });
}
export {
  AdminPage as component
};
