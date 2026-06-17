import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  MapPin, Calendar, Camera, UtensilsCrossed, Landmark, Mountain,
  Church, Sparkles, ArrowRight, Menu, X, Instagram, Facebook, Phone, Mail,
} from "lucide-react";

import heroImg from "@/assets/hero-guadalupe.jpg";
import plazaImg from "@/assets/plaza.jpg";
import cerroImg from "@/assets/cerro.jpg";
import santuarioImg from "@/assets/santuario.jpg";
import valleImg from "@/assets/valle.jpg";
import panImg from "@/assets/pan-pavo.jpg";
import romeriaImg from "@/assets/romeria.jpg";
import dulcesImg from "@/assets/dulces.jpg";
import portalesImg from "@/assets/portales.jpg";
import feriaImg from "@/assets/feria.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Guadalupe, La Libertad — Descubre el valle Jequetepeque" },
      { name: "description", content: "Guía turística y cultural del distrito de Guadalupe, Pacasmayo. Atractivos, gastronomía, festividades, galería e información para visitantes." },
      { property: "og:title", content: "Guadalupe, La Libertad" },
      { property: "og:description", content: "Tradición, historia y sabor en el corazón del valle Jequetepeque." },
    ],
  }),
  component: GuadalupePage,
});

const NAV = [
  { href: "#inicio", label: "Inicio" },
  { href: "#turismo", label: "Turismo" },
  { href: "#cultura", label: "Cultura" },
  { href: "#gastronomia", label: "Gastronomía" },
  { href: "#agenda", label: "Agenda" },
  { href: "#galeria", label: "Galería" },
  { href: "#directorio", label: "Directorio" },
];

const PLACES = [
  { img: plazaImg, title: "Plaza de Armas", desc: "El corazón cívico del distrito, rodeado de portales y arquitectura tradicional.", icon: Landmark },
  { img: cerroImg, title: "Cerro Namúl", desc: "El mirador natural coronado por la capilla de la Virgen, con vistas al valle.", icon: Mountain },
  { img: santuarioImg, title: "Santuario de la Virgen", desc: "Templo principal con altar dorado, centro de la devoción guadalupana.", icon: Church },
  { img: portalesImg, title: "Portales de la Plaza", desc: "Arcadas históricas que enmarcan la vida cotidiana del pueblo.", icon: Landmark },
  { img: valleImg, title: "Valle Jequetepeque", desc: "Extensos campos de arroz y caña que rodean al distrito de horizonte a horizonte.", icon: Sparkles },
  { img: romeriaImg, title: "Romería de la Virgen", desc: "Procesión patronal con devotos llegados de toda la región norte.", icon: Sparkles },
];

const TIMELINE = [
  { year: "Pre-1500", title: "Origen prehispánico", text: "Asentamientos del valle Jequetepeque y la cultura Pacasmayo configuran el territorio." },
  { year: "Siglo XVI", title: "Devoción guadalupana", text: "Llega la imagen de Nuestra Señora de Guadalupe y nace un centro de peregrinación." },
  { year: "Siglo XIX", title: "Consolidación del pueblo", text: "Guadalupe se afianza como nudo agrícola y cultural del norte peruano." },
  { year: "Hoy", title: "Identidad viva", text: "Tradiciones, ferias y romería mantienen viva la cultura local cada año." },
];

const FOOD = [
  { img: panImg, title: "Pan con pavo", desc: "El sabor insignia: pan suave, pavo jugoso y un toque de cebolla criolla." },
  { img: dulcesImg, title: "Dulces y panes", desc: "Bizcochos, alfajores y panes tradicionales horneados al estilo norteño." },
  { img: valleImg, title: "Productos del valle", desc: "Arroz, frutas y productos frescos directamente del campo jequetepecano." },
];

const EVENTS = [
  { date: "8 DIC", title: "Feria de la Virgen de Guadalupe", place: "Plaza de Armas", desc: "La gran celebración patronal con misa, romería y feria popular." , img: romeriaImg },
  { date: "JUL", title: "Aniversario del distrito", place: "Centro de Guadalupe", desc: "Desfiles cívicos, actos culturales y muestras locales.", img: plazaImg },
  { date: "TODO EL AÑO", title: "Ferias gastronómicas", place: "Recinto ferial", desc: "Sabores del valle, panes, dulces y platos típicos en un solo lugar.", img: feriaImg },
];

const GALLERY = [
  { img: cerroImg, span: "row-span-2" },
  { img: plazaImg, span: "" },
  { img: romeriaImg, span: "" },
  { img: valleImg, span: "row-span-2" },
  { img: portalesImg, span: "" },
  { img: feriaImg, span: "" },
  { img: dulcesImg, span: "" },
  { img: santuarioImg, span: "" },
];

function GuadalupePage() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HEADER */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="container-x flex items-center justify-between py-4">
          <a href="#inicio" className="flex items-center gap-2.5">
            <Sello scrolled={scrolled} />
            <div className="leading-tight">
              <div className={`font-serif text-xl ${scrolled ? "text-primary" : "text-white"}`}>Guadalupe</div>
              <div className={`text-[10px] tracking-[0.25em] uppercase ${scrolled ? "text-muted-foreground" : "text-white/70"}`}>La Libertad · Perú</div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className={`text-sm transition-colors ${
                  scrolled ? "text-foreground/80 hover:text-primary" : "text-white/85 hover:text-white"
                }`}
              >
                {n.label}
              </a>
            ))}
          </nav>

          <a
            href="#turismo"
            className={`hidden lg:inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm transition-colors ${
              scrolled
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "bg-white text-primary hover:bg-white/90"
            }`}
          >
            Visitar <ArrowRight className="h-3.5 w-3.5" />
          </a>

          <button
            onClick={() => setOpen(!open)}
            className={`lg:hidden rounded-full p-2 ${scrolled ? "text-primary" : "text-white"}`}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden bg-background border-t border-border">
            <nav className="container-x flex flex-col py-4">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-foreground/80 border-b border-border last:border-0"
                >
                  {n.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="inicio" className="relative min-h-screen flex items-end overflow-hidden">
        <img
          src={heroImg}
          alt="Vista aérea del valle de Guadalupe al atardecer"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

        <div className="relative container-x pb-16 pt-32 text-white animate-float-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.22em] backdrop-blur-sm">
            <MapPin className="h-3 w-3" /> Valle Jequetepeque · Pacasmayo
          </span>

          <h1 className="mt-6 font-serif text-balance text-5xl sm:text-6xl lg:text-7xl leading-[1.02] max-w-4xl">
            Descubre la magia<br/>de <em className="text-[var(--color-accent)] not-italic">Guadalupe</em>
          </h1>

          <p className="mt-5 max-w-xl text-lg text-white/85">
            Tradición, historia y sabor en La Libertad. Un destino vivo entre la fe, el patrimonio y el valle.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#turismo" className="btn-primary !bg-white !text-primary hover:!bg-white/90">
              Explorar turismo <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#galeria" className="btn-ghost">
              <Camera className="h-4 w-4" /> Ver galería
            </a>
          </div>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/15 border border-white/15 rounded-2xl overflow-hidden backdrop-blur-sm max-w-3xl">
            {[
              { k: "Patrimonio", v: "y tradición" },
              { k: "Fe", v: "y cultura viva" },
              { k: "Valle", v: "agrícola" },
              { k: "Sabores", v: "locales" },
            ].map((s) => (
              <div key={s.k} className="bg-black/25 px-4 py-4">
                <div className="font-serif text-xl text-white">{s.k}</div>
                <div className="text-xs text-white/75 mt-0.5">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO TURISMO */}
      <section id="turismo" className="py-24 sm:py-32">
        <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="eyebrow">Turismo en Guadalupe</span>
            <h2 className="section-title mt-4">
              Un valle que une historia, fe y paisaje.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Guadalupe, en la provincia de Pacasmayo, combina historia, cultura, devoción, paisajes agrícolas y una identidad viva que invita a descubrir sus calles, su plaza, sus tradiciones y sus sabores.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Patrimonio", "Religioso", "Naturaleza", "Gastronomía", "Cultura"].map((t) => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden">
              <img src={cerroImg} alt="Cerro de la Virgen" loading="lazy" width={1200} height={900} className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl p-5 max-w-[230px] shadow-xl">
              <div className="text-xs uppercase tracking-widest text-[var(--color-marian)]">Cerro Namúl</div>
              <div className="font-serif text-xl mt-1">Mirador del valle</div>
              <div className="text-xs text-muted-foreground mt-1">Devoción y paisaje en un solo lugar.</div>
            </div>
          </div>
        </div>
      </section>

      {/* LUGARES */}
      <section className="py-20 bg-muted/60">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="eyebrow">Atractivos</span>
              <h2 className="section-title mt-4">Lugares para descubrir</h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              Plaza, cerro, santuario y campos: cada rincón cuenta una parte de la historia guadalupana.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PLACES.map((p) => (
              <article key={p.title} className="card-soft group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[var(--color-accent-foreground)]">
                    <p.icon className="h-3.5 w-3.5" /> Atractivo
                  </div>
                  <h3 className="font-serif text-2xl mt-2 text-primary">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  <button className="mt-5 inline-flex items-center gap-1.5 text-sm text-primary border-b border-primary/30 pb-0.5 hover:border-primary transition-colors">
                    Conocer más <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CULTURA / HISTORIA */}
      <section id="cultura" className="py-24 sm:py-32">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <span className="eyebrow">Historia y cultura</span>
              <h2 className="section-title mt-4">Un pueblo con raíces profundas.</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                La historia de Guadalupe se remonta a la época prehispánica y se fortalece con la llegada de la devoción a Nuestra Señora de Guadalupe. Su identidad se expresa en sus celebraciones religiosas, su arquitectura, sus tradiciones populares y el vínculo de la comunidad con el valle.
              </p>
            </div>

            <ol className="lg:col-span-7 relative border-l-2 border-accent/40 pl-8 space-y-10">
              {TIMELINE.map((t, i) => (
                <li key={i} className="relative">
                  <span className="absolute -left-[42px] top-1 grid h-5 w-5 place-items-center rounded-full bg-accent text-[10px] font-medium text-accent-foreground">
                    {i + 1}
                  </span>
                  <div className="text-xs uppercase tracking-widest text-[var(--color-marian)]">{t.year}</div>
                  <div className="font-serif text-2xl text-primary mt-1">{t.title}</div>
                  <p className="text-muted-foreground mt-1.5">{t.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* GASTRONOMÍA */}
      <section id="gastronomia" className="py-20 bg-[oklch(0.96_0.02_82)]">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow justify-center">Sabores</span>
            <h2 className="section-title mt-4">Sabores de Guadalupe</h2>
            <p className="text-muted-foreground mt-4">
              Una cocina cálida, generosa y nacida en el valle.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {FOOD.map((f) => (
              <article key={f.title} className="card-soft">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={f.img} alt={f.title} loading="lazy" width={1200} height={900} className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[var(--color-accent-foreground)]">
                    <UtensilsCrossed className="h-3.5 w-3.5" /> Plato local
                  </div>
                  <h3 className="font-serif text-2xl mt-2 text-primary">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AGENDA */}
      <section id="agenda" className="py-24">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="eyebrow">Agenda</span>
              <h2 className="section-title mt-4">Festividades y eventos</h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              Vive el calendario más vibrante del valle Jequetepeque.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {EVENTS.map((e) => (
              <article key={e.title} className="card-soft relative">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={e.img} alt={e.title} loading="lazy" width={1200} height={900} className="h-full w-full object-cover" />
                </div>
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground rounded-xl px-3 py-2 text-center min-w-[60px]">
                  <div className="text-[10px] tracking-widest uppercase opacity-80">Fecha</div>
                  <div className="font-serif text-sm leading-tight mt-0.5">{e.date}</div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-primary">{e.title}</h3>
                  <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" /> {e.place}
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{e.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GALERÍA */}
      <section id="galeria" className="py-20 bg-muted/60">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow justify-center">Galería</span>
            <h2 className="section-title mt-4">Postales de Guadalupe</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3">
            {GALLERY.map((g, i) => (
              <button
                key={i}
                onClick={() => setLightbox(g.img)}
                className={`relative overflow-hidden rounded-xl group ${g.span}`}
              >
                <img src={g.img} alt={`Foto ${i + 1}`} loading="lazy" width={1200} height={900} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[60] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-float-up"
        >
          <button className="absolute top-6 right-6 text-white" aria-label="Cerrar">
            <X className="h-6 w-6" />
          </button>
          <img src={lightbox} alt="Vista ampliada" className="max-h-[90vh] max-w-[92vw] rounded-xl object-contain" />
        </div>
      )}

      {/* DIRECTORIO */}
      <section id="directorio" className="py-24">
        <div className="container-x grid lg:grid-cols-2 gap-12">
          <div>
            <span className="eyebrow">Directorio útil</span>
            <h2 className="section-title mt-4">Planifica tu visita</h2>
            <p className="mt-5 text-muted-foreground max-w-md">
              Información práctica para que descubras Guadalupe con tranquilidad.
            </p>

            <div className="mt-8 space-y-4">
              <InfoRow icon={Landmark} label="Municipalidad Distrital" text="Plaza de Armas s/n, Guadalupe" />
              <InfoRow icon={Phone} label="Contacto turístico" text="+51 044 000 000" />
              <InfoRow icon={Mail} label="Correo" text="turismo@guadalupe.gob.pe" />
              <InfoRow icon={MapPin} label="Ubicación" text="Provincia de Pacasmayo, La Libertad, Perú" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { t: "Atractivos turísticos", d: "Plaza, cerro, santuario, valle." , i: Landmark },
              { t: "Servicios locales", d: "Hospedajes, transporte y guías." , i: Sparkles },
              { t: "Festividades", d: "Calendario de fiestas patronales." , i: Calendar },
              { t: "Cómo llegar", d: "Vía Panamericana Norte, 700 km de Lima.", i: MapPin },
            ].map((b) => (
              <div key={b.t} className="card-soft p-6">
                <b.i className="h-5 w-5 text-[var(--color-marian)]" />
                <div className="font-serif text-xl text-primary mt-3">{b.t}</div>
                <div className="text-sm text-muted-foreground mt-1">{b.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary text-primary-foreground">
        <div className="container-x py-16 grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3">
              <Sello scrolled light />
              <div>
                <div className="font-serif text-2xl">Guadalupe</div>
                <div className="text-xs uppercase tracking-[0.22em] text-white/60">La Libertad · Perú</div>
              </div>
            </div>
            <p className="mt-5 text-white/75 max-w-xs">
              Tradición, historia y sabor en el corazón del valle Jequetepeque.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-white/60 mb-4">Explorar</div>
            <ul className="space-y-2">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-white/85 hover:text-[var(--color-accent)] transition-colors">{n.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-white/60 mb-4">Síguenos</div>
            <div className="flex gap-3">
              <a href="#" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full border border-white/20 hover:bg-white/10 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full border border-white/20 hover:bg-white/10 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-6 text-sm text-white/70">
              © {new Date().getFullYear()} Guadalupe — Destino turístico y cultural.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function InfoRow({ icon: Icon, label, text }: { icon: any; label: string; text: string }) {
  return (
    <div className="flex items-start gap-4 border-b border-border pb-4">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/5 text-primary">
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="text-foreground mt-0.5">{text}</div>
      </div>
    </div>
  );
}

function Sello({ scrolled, light }: { scrolled?: boolean; light?: boolean }) {
  const stroke = light ? "white" : scrolled ? "var(--color-primary)" : "white";
  return (
    <div className="grid h-11 w-11 place-items-center rounded-full border" style={{ borderColor: stroke }}>
      <svg viewBox="0 0 40 40" className="h-7 w-7" fill="none" stroke={stroke} strokeWidth="1.2">
        <circle cx="20" cy="20" r="17" />
        <path d="M8 26 L16 18 L22 22 L32 14" />
        <path d="M8 30 L32 30" />
        <path d="M20 8 L21 11 L24 11 L21.5 13 L22.5 16 L20 14 L17.5 16 L18.5 13 L16 11 L19 11 Z" fill={stroke} />
      </svg>
    </div>
  );
}
