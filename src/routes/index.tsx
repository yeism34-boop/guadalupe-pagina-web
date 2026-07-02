import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  MapPin, Calendar, UtensilsCrossed, Landmark,
  Sparkles, ArrowRight, Menu, X, Instagram, Facebook, Phone, Mail,
  ExternalLink, Globe, CloudSun, Compass,
} from "lucide-react";

const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Guadalupe+Pacasmayo+La+Libertad+Peru";
const INSTAGRAM_URL = "https://www.instagram.com/explore/tags/guadalupelalibertad/";
const FACEBOOK_URL = "https://www.facebook.com/search/top?q=municipalidad%20distrital%20de%20guadalupe%20la%20libertad";
const PHONE = "+51044000000";
const EMAIL = "turismo@guadalupe.gob.pe";

const EXTERNAL_LINKS = [
  { title: "Municipalidad de Guadalupe", desc: "Portal oficial del distrito.", href: "https://www.google.com/search?q=municipalidad+distrital+de+guadalupe+la+libertad", icon: Landmark },
  { title: "PromPerú · Visita Perú", desc: "Guía oficial de turismo del Perú.", href: "https://www.peru.travel/", icon: Globe },
  { title: "Clima en Guadalupe", desc: "Pronóstico del SENAMHI para La Libertad.", href: "https://www.senamhi.gob.pe/?p=pronostico-detalle&localidad=0022", icon: CloudSun },
  { title: "Cómo llegar", desc: "Ruta desde Lima por la Panamericana Norte.", href: "https://www.google.com/maps/dir/Lima,+Peru/Guadalupe,+La+Libertad,+Peru", icon: Compass },
];

import heroImg from "@/assets/hero-guadalupe.jpg";
import valleImg from "@/assets/valle.jpg";
import panImg from "@/assets/pan-pavo.jpg";
import dulcesImg from "@/assets/dulces.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Guadalupe, La Libertad — Descubre el valle Jequetepeque" },
      { name: "description", content: "Guía turística y cultural del distrito de Guadalupe, Pacasmayo. Gastronomía e información para visitantes." },
      { property: "og:title", content: "Guadalupe, La Libertad" },
      { property: "og:description", content: "Tradición, historia y sabor en el corazón del valle Jequetepeque." },
    ],
  }),
  component: GuadalupePage,
});

const NAV = [
  { href: "#inicio", label: "Inicio" },
  { href: "#gastronomia", label: "Gastronomía" },
  { href: "#directorio", label: "Directorio" },
];

const FOOD = [
  { img: panImg, title: "Pan con pavo", desc: "El sabor insignia: pan suave, pavo jugoso y un toque de cebolla criolla." },
  { img: dulcesImg, title: "Dulces y panes", desc: "Bizcochos, alfajores y panes tradicionales horneados al estilo norteño." },
  { img: valleImg, title: "Productos del valle", desc: "Arroz, frutas y productos frescos directamente del campo jequetepecano." },
];

function GuadalupePage() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
            href="#gastronomia"
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
            <a href="#gastronomia" className="btn-primary !bg-white !text-primary hover:!bg-white/90">
              Explorar sabores <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#directorio" className="btn-ghost">
              <MapPin className="h-4 w-4" /> Planifica tu visita
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
              <InfoRow icon={Landmark} label="Municipalidad Distrital" text="Plaza de Armas s/n, Guadalupe" href={MAPS_URL} external />
              <InfoRow icon={Phone} label="Contacto turístico" text="+51 044 000 000" href={`tel:${PHONE}`} />
              <InfoRow icon={Mail} label="Correo" text={EMAIL} href={`mailto:${EMAIL}`} />
              <InfoRow icon={MapPin} label="Ubicación" text="Provincia de Pacasmayo, La Libertad, Perú" href={MAPS_URL} external />
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Enlaces útiles</div>
            <div className="grid sm:grid-cols-2 gap-4">
              {EXTERNAL_LINKS.map((b) => (
                <a
                  key={b.title}
                  href={b.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-soft p-6 group block hover:border-primary/40 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <b.icon className="h-5 w-5 text-[var(--color-marian)]" />
                    <ExternalLink className="h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="font-serif text-xl text-primary mt-3">{b.title}</div>
                  <div className="text-sm text-muted-foreground mt-1">{b.desc}</div>
                </a>
              ))}
            </div>
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
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full border border-white/20 hover:bg-white/10 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full border border-white/20 hover:bg-white/10 transition-colors">
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

function InfoRow({ icon: Icon, label, text, href, external }: { icon: any; label: string; text: string; href?: string; external?: boolean }) {
  const content = (
    <>
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="text-foreground mt-0.5 group-hover:text-primary transition-colors">{text}</div>
      </div>
      {href && <ExternalLink className="h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity mt-1" />}
    </>
  );
  if (href) {
    return (
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="flex items-start gap-4 border-b border-border pb-4 group"
      >
        {content}
      </a>
    );
  }
  return <div className="flex items-start gap-4 border-b border-border pb-4 group">{content}</div>;
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
