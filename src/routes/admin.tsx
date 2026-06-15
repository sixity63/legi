import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, type ChangeEvent } from "react";
import { ADMIN_PASSWORD, isAdminLoggedIn, loginAdmin, logoutAdmin, useContent } from "@/lib/content-store";
import type { SiteContent } from "@/lib/site-data";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, LogOut, Plus, RotateCcw, Save, Trash2, ExternalLink } from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin — Teknik Elektro UNSRAT" },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: AdminPage,
});

function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setAuthed(isAdminLoggedIn());
    setReady(true);
  }, []);

  if (!ready) return null;

  return (
    <div className="min-h-screen bg-secondary/30">
      <Toaster richColors position="top-center" />
      {authed ? <Dashboard onLogout={() => setAuthed(false)} /> : <LoginForm onSuccess={() => setAuthed(true)} />}
    </div>
  );
}

function LoginForm({ onSuccess }: { onSuccess: () => void }) {
  const [pwd, setPwd] = useState("");
  const [err, setErr] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginAdmin(pwd)) {
      onSuccess();
    } else {
      setErr("Password salah");
    }
  };

  return (
    <div className="min-h-screen grid place-items-center px-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <div className="mx-auto h-12 w-12 grid place-items-center rounded-xl bg-navy text-gold">
            <Lock className="h-5 w-5" />
          </div>
          <CardTitle className="mt-3">Admin Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={submit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="pwd">Password</Label>
              <Input
                id="pwd"
                type="password"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
                placeholder="••••••••"
                autoFocus
              />
              {err && <p className="text-xs text-destructive">{err}</p>}
              <p className="text-xs text-muted-foreground">
                Default: <code className="font-mono">{ADMIN_PASSWORD}</code>. Bisa diganti via env <code>VITE_ADMIN_PASSWORD</code>.
              </p>
            </div>
            <Button type="submit" className="w-full">Masuk</Button>
            <Link to="/" className="block text-center text-xs text-muted-foreground hover:underline">
              ← Kembali ke beranda
            </Link>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

function Dashboard({ onLogout }: { onLogout: () => void }) {
  const { content, setContent, reset } = useContent();

  const update = <K extends keyof SiteContent>(key: K, value: SiteContent[K]) =>
    setContent((prev) => ({ ...prev, [key]: value }));

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <header className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <p className="text-sm text-muted-foreground">
            Perubahan disimpan di browser ini (localStorage).
          </p>
        </div>
        <div className="flex gap-2">
          <Button asChild variant="outline" size="sm">
            <Link to="/"><ExternalLink className="h-4 w-4" /> Lihat Situs</Link>
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              if (confirm("Reset semua konten ke default?")) {
                reset();
                toast.success("Konten direset");
              }
            }}
          >
            <RotateCcw className="h-4 w-4" /> Reset
          </Button>
          <Button variant="outline" size="sm" onClick={() => { logoutAdmin(); onLogout(); }}>
            <LogOut className="h-4 w-4" /> Keluar
          </Button>
        </div>
      </header>

      <Tabs defaultValue="hero">
        <TabsList className="flex flex-wrap h-auto">
          <TabsTrigger value="hero">Hero & Tentang</TabsTrigger>
          <TabsTrigger value="visi">Visi & Misi</TabsTrigger>
          <TabsTrigger value="stats">Statistik</TabsTrigger>
          <TabsTrigger value="gallery">Galeri</TabsTrigger>
          <TabsTrigger value="news">Berita</TabsTrigger>
          <TabsTrigger value="contact">Kontak</TabsTrigger>
        </TabsList>

        <TabsContent value="hero" className="space-y-4 mt-4">
          <SectionCard title="Hero">
            <FieldText label="Judul" value={content.hero.title}
              onChange={(v) => update("hero", { ...content.hero, title: v })} />
            <FieldArea label="Subjudul" value={content.hero.subtitle}
              onChange={(v) => update("hero", { ...content.hero, subtitle: v })} />
            <div className="grid sm:grid-cols-2 gap-3">
              <FieldText label="Tombol Utama (label)" value={content.hero.primaryCta.label}
                onChange={(v) => update("hero", { ...content.hero, primaryCta: { ...content.hero.primaryCta, label: v } })} />
              <FieldText label="Tombol Utama (link)" value={content.hero.primaryCta.href}
                onChange={(v) => update("hero", { ...content.hero, primaryCta: { ...content.hero.primaryCta, href: v } })} />
              <FieldText label="Tombol Sekunder (label)" value={content.hero.secondaryCta.label}
                onChange={(v) => update("hero", { ...content.hero, secondaryCta: { ...content.hero.secondaryCta, label: v } })} />
              <FieldText label="Tombol Sekunder (link)" value={content.hero.secondaryCta.href}
                onChange={(v) => update("hero", { ...content.hero, secondaryCta: { ...content.hero.secondaryCta, href: v } })} />
            </div>
          </SectionCard>
          <SectionCard title="Tentang Jurusan">
            <FieldArea label="Deskripsi" rows={5} value={content.about}
              onChange={(v) => update("about", v)} />
          </SectionCard>
          <SaveHint />
        </TabsContent>

        <TabsContent value="visi" className="space-y-4 mt-4">
          <SectionCard title="Visi">
            <FieldArea label="Visi" rows={4} value={content.visi}
              onChange={(v) => update("visi", v)} />
          </SectionCard>
          <SectionCard title="Misi">
            {content.misi.map((m, i) => (
              <div key={i} className="flex gap-2 items-start">
                <div className="flex-1">
                  <FieldArea label={`Misi ${i + 1}`} rows={2} value={m}
                    onChange={(v) => {
                      const next = [...content.misi]; next[i] = v;
                      update("misi", next);
                    }} />
                </div>
                <Button variant="ghost" size="icon" className="mt-7"
                  onClick={() => update("misi", content.misi.filter((_, idx) => idx !== i))}>
                  <Trash2 className="h-4 w-4 text-destructive" />
                </Button>
              </div>
            ))}
            <Button variant="outline" size="sm" onClick={() => update("misi", [...content.misi, "Misi baru"])}>
              <Plus className="h-4 w-4" /> Tambah Misi
            </Button>
          </SectionCard>
          <SaveHint />
        </TabsContent>

        <TabsContent value="stats" className="space-y-4 mt-4">
          <SectionCard title="Statistik">
            <div className="grid sm:grid-cols-2 gap-4">
              {content.stats.map((s, i) => (
                <div key={i} className="p-4 rounded-lg border space-y-2">
                  <FieldText label="Label" value={s.label}
                    onChange={(v) => {
                      const next = [...content.stats]; next[i] = { ...s, label: v };
                      update("stats", next);
                    }} />
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <Label className="text-xs">Nilai</Label>
                      <Input type="number" value={s.value}
                        onChange={(e) => {
                          const next = [...content.stats]; next[i] = { ...s, value: Number(e.target.value) || 0 };
                          update("stats", next);
                        }} />
                    </div>
                    <FieldText label="Suffix (mis. +)" value={s.suffix}
                      onChange={(v) => {
                        const next = [...content.stats]; next[i] = { ...s, suffix: v };
                        update("stats", next);
                      }} />
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>
          <SaveHint />
        </TabsContent>

        <TabsContent value="gallery" className="space-y-4 mt-4">
          <SectionCard title="Galeri Foto">
            {content.gallery.map((g, i) => (
              <div key={i} className="p-4 rounded-lg border space-y-2">
                <div className="flex gap-3">
                  <img src={g.src} alt={g.title} className="h-20 w-28 object-cover rounded-md border" />
                  <div className="flex-1 space-y-2">
                    <FieldText label="URL Gambar" value={g.src}
                      onChange={(v) => {
                        const next = [...content.gallery]; next[i] = { ...g, src: v };
                        update("gallery", next);
                      }} />
                    <FieldText label="Judul" value={g.title}
                      onChange={(v) => {
                        const next = [...content.gallery]; next[i] = { ...g, title: v };
                        update("gallery", next);
                      }} />
                  </div>
                  <Button variant="ghost" size="icon"
                    onClick={() => update("gallery", content.gallery.filter((_, idx) => idx !== i))}>
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </div>
                <FieldArea label="Deskripsi" rows={2} value={g.desc}
                  onChange={(v) => {
                    const next = [...content.gallery]; next[i] = { ...g, desc: v };
                    update("gallery", next);
                  }} />
              </div>
            ))}
            <Button variant="outline" size="sm"
              onClick={() => update("gallery", [...content.gallery, { src: "https://placehold.co/800x600", title: "Judul Foto", desc: "Deskripsi" }])}>
              <Plus className="h-4 w-4" /> Tambah Foto
            </Button>
            <p className="text-xs text-muted-foreground">
              Tip: gunakan URL gambar dari layanan hosting (Imgur, Cloudinary, dll).
            </p>
          </SectionCard>
          <SaveHint />
        </TabsContent>

        <TabsContent value="news" className="space-y-4 mt-4">
          <SectionCard title="Berita & Pengumuman">
            {content.news.map((n, i) => (
              <div key={n.id} className="p-4 rounded-lg border space-y-2">
                <div className="grid sm:grid-cols-2 gap-2">
                  <FieldText label="Judul" value={n.title}
                    onChange={(v) => {
                      const next = [...content.news]; next[i] = { ...n, title: v };
                      update("news", next);
                    }} />
                  <div>
                    <Label className="text-xs">Tanggal</Label>
                    <Input type="date" value={n.date}
                      onChange={(e) => {
                        const next = [...content.news]; next[i] = { ...n, date: e.target.value };
                        update("news", next);
                      }} />
                  </div>
                </div>
                <FieldArea label="Ringkasan" rows={3} value={n.summary}
                  onChange={(v) => {
                    const next = [...content.news]; next[i] = { ...n, summary: v };
                    update("news", next);
                  }} />
                <div className="text-right">
                  <Button variant="ghost" size="sm"
                    onClick={() => update("news", content.news.filter((_, idx) => idx !== i))}>
                    <Trash2 className="h-4 w-4 text-destructive" /> Hapus
                  </Button>
                </div>
              </div>
            ))}
            <Button variant="outline" size="sm"
              onClick={() => update("news", [
                ...content.news,
                {
                  id: `n-${Date.now()}`,
                  title: "Judul berita baru",
                  date: new Date().toISOString().slice(0, 10),
                  summary: "Ringkasan singkat berita.",
                },
              ])}>
              <Plus className="h-4 w-4" /> Tambah Berita
            </Button>
          </SectionCard>
          <SaveHint />
        </TabsContent>

        <TabsContent value="contact" className="space-y-4 mt-4">
          <SectionCard title="Kontak">
            <FieldArea label="Alamat" rows={3} value={content.contact.address}
              onChange={(v) => update("contact", { ...content.contact, address: v })} />
            <div className="grid sm:grid-cols-2 gap-3">
              <FieldText label="Email" value={content.contact.email}
                onChange={(v) => update("contact", { ...content.contact, email: v })} />
              <FieldText label="Telepon" value={content.contact.phone}
                onChange={(v) => update("contact", { ...content.contact, phone: v })} />
            </div>
            <FieldText label="Google Maps Query" value={content.contact.mapsQuery}
              onChange={(v) => update("contact", { ...content.contact, mapsQuery: v })} />
          </SectionCard>
          <SectionCard title="Media Sosial">
            <FieldText label="Instagram" value={content.social.instagram}
              onChange={(v) => update("social", { ...content.social, instagram: v })} />
            <FieldText label="Facebook" value={content.social.facebook}
              onChange={(v) => update("social", { ...content.social, facebook: v })} />
            <FieldText label="YouTube" value={content.social.youtube}
              onChange={(v) => update("social", { ...content.social, youtube: v })} />
          </SectionCard>
          <SaveHint />
        </TabsContent>
      </Tabs>
    </div>
  );
}

function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Card>
      <CardHeader><CardTitle className="text-base">{title}</CardTitle></CardHeader>
      <CardContent className="space-y-3">{children}</CardContent>
    </Card>
  );
}

function FieldText({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div className="space-y-1">
      <Label className="text-xs">{label}</Label>
      <Input value={value} onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)} />
    </div>
  );
}

function FieldArea({ label, value, onChange, rows = 3 }: { label: string; value: string; onChange: (v: string) => void; rows?: number }) {
  return (
    <div className="space-y-1">
      <Label className="text-xs">{label}</Label>
      <Textarea rows={rows} value={value} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => onChange(e.target.value)} />
    </div>
  );
}

function SaveHint() {
  return (
    <p className="text-xs text-muted-foreground flex items-center gap-1">
      <Save className="h-3 w-3" /> Perubahan otomatis disimpan saat Anda mengetik.
    </p>
  );
}