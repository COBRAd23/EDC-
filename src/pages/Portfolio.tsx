import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, X, MapPin, Calendar, Wrench } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Project = {
  id: number;
  title: string;
  location: string;
  date: string;
  service: string;
  description: string;
  image: string;
  span: string;
  images?: string[];
};

const projects: Project[] = [
  {
    id: 1,
    title: "Poda formativa en Altos del Casco",
    location: "Pilar, Buenos Aires",
    date: "Marzo 2024",
    service: "Poda de altura — SRT",
    description: "Intervención en ejemplar adulto de Quercus robur con poda de elevación de copa y reducción selectiva de ramas estructurales. Trabajo realizado con técnica SRT y rigging de seguridad.",
    image: "/img/portfolio/Casco.webp",
    span: "md:col-span-2 md:row-span-2",
    images: [
      "/img/portfolio/carrusel 02 Casco/carcas01.webp",
      "/img/portfolio/carrusel 02 Casco/carca02.webp"
    ]
  },
  {
    id: 2,
    title: "Limpieza técnica de palmera Phoenix",
    location: "San Isidro",
    date: "Febrero 2024",
    service: "Limpieza Palmeras",
    description: "Saneamiento completo de Phoenix canariensis: extracción de pencas secas, limpieza de inflorescencias y tratamiento preventivo contra picudo rojo.",
    image: "/img/portfolio/palmera.webp",
    span: "",
    images: [
      "/img/portfolio/carrusel 06 palmera/palmera.webp",
      "/img/portfolio/carrusel 06 palmera/palmera - copia.webp",
      "/img/portfolio/carrusel 06 palmera/palmera - copia (2).webp"
    ]
  },
  {
    id: 3,
    title: "Sustentación dinámica con Cobra System",
    location: "Olivos",
    date: "Enero 2024",
    service: "Ingeniería arbórea",
    description: "Instalación de cableado dinámico Cobra en Tipuana tipu de gran porte para reforzar codominancia estructural sin restringir el movimiento natural del árbol.",
    image: "/img/portfolio/Cobra System.webp",
    span: "",
    images: [
      "/img/portfolio/carrusel 03 Cobra System/Cobra System.webp",
      "/img/portfolio/carrusel 03 Cobra System/Cobra System - copia.webp",
      "/img/portfolio/carrusel 03 Cobra System/Cobra System - copia (2).webp"
    ]
  },
  {
    id: 4,
    title: "Desmonte controlado en jardín privado",
    location: "Nordelta",
    date: "Diciembre 2023",
    service: "Extracción compleja",
    description: "Tala seccionada de eucaliptus de 22m en espacio reducido junto a piscina y construcciones. Operativo con rigging dinámico y descenso controlado de fustes.",
    image: "/img/portfolio/jardín privado.webp",
    span: "md:col-span-2",
    images: [
      "/img/portfolio/carrusel 05 jardín privado/jardín privado.webp",
      "/img/portfolio/carrusel 05 jardín privado/jardín privado - copia.webp",
      "/img/portfolio/carrusel 05 jardín privado/jardín privado - copia (2).webp"
    ]
  },
  {
    id: 5,
    title: "Diagnóstico de arbolado urbano",
    location: "Vicente López",
    date: "Noviembre 2023",
    service: "Consultoría VTA",
    description: "Evaluación visual de riesgo (VTA) sobre 47 ejemplares en avenida principal. Inventario digital, dictamen técnico y plan de manejo a 5 años.",
    image: "/img/portfolio/arbolado urbano.webp",
    span: "",
    images: [
      "/img/portfolio/carrusel 01 arbolado urbano/carurb01.webp",
      "/img/portfolio/carrusel 01 arbolado urbano/carurb02.webp",
      "/img/portfolio/carrusel 01 arbolado urbano/carurb03.webp",
      "/img/portfolio/carrusel 01 arbolado urbano/carurb04.webp",
      "/img/portfolio/carrusel 01 arbolado urbano/carurb05.webp"
    ]
  },
  {
    id: 6,
    title: "Poda de seguridad post-tormenta",
    location: "CABA — Belgrano",
    date: "Octubre 2023",
    service: "Emergencia 24h",
    description: "Intervención de emergencia tras temporal: retiro de ramas peligrosas, reducción de copa y evaluación estructural de plátano centenario.",
    image: "/img/portfolio/post-tormenta.webp",
    span: "",
    images: [
      "/img/portfolio/carrusel 07 post-tormenta/post-tormenta.webp",
      "/img/portfolio/carrusel 07 post-tormenta/post-tormenta - copia.webp",
      "/img/portfolio/carrusel 07 post-tormenta/post-tormenta - copia (2).webp"
    ]
  },
  {
    id: 7,
    title: "Manejo integral de Country La Reserva",
    location: "Pilar",
    date: "2023 — 2024",
    service: "Plan anual",
    description: "Contrato anual de gestión arbórea: monitoreo, podas programadas, fitosanidad y plantación de reposición en 12 hectáreas.",
    image: "/img/portfolio/Country La Reserva.webp",
    span: "md:col-span-2",
    images: [
      "/img/portfolio/carrusel 04 Country La Reserva/Country La Reserva.webp",
      "/img/portfolio/carrusel 04 Country La Reserva/Country La Reserva - copia.webp",
      "/img/portfolio/carrusel 04 Country La Reserva/Country La Reserva - copia (2).webp"
    ]
  },
];

const Portfolio = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <Navbar />

      <section className="pt-36 pb-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft className="size-4" /> Volver al inicio
            </Link>
            <div className="text-xs uppercase tracking-widest text-primary mb-4">Portfolio</div>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] mb-6 max-w-4xl">
              Trabajos realizados con <span className="text-gradient-green">precisión</span>.
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Una selección de intervenciones técnicas en arboricultura, poda de altura y gestión de patrimonio verde.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[280px] gap-4">
            {projects.map((p, i) => (
              <motion.button
                key={p.id}
                onClick={() => setSelected(p)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: (i % 4) * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`relative group overflow-hidden rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 text-left ${p.span}`}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="text-[11px] uppercase tracking-widest text-primary mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {p.service}
                  </div>
                  <div className="font-display text-xl font-semibold leading-snug mb-1 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    {p.title}
                  </div>
                  <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                    <MapPin className="size-3" /> {p.location}
                  </div>
                </div>
                <div className="absolute top-4 right-4 size-10 rounded-full glass-strong flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all group-hover:rotate-45">
                  <ArrowLeft className="size-4 rotate-[135deg] text-primary" />
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-md flex items-center justify-center p-4 md:p-8 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-card border border-border rounded-3xl max-w-4xl w-full overflow-hidden shadow-elevated my-auto"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-[110] size-10 rounded-full glass-strong flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <X className="size-4" />
              </button>
              
              <div className="aspect-[16/9] overflow-hidden bg-muted relative group/carousel">
                {selected.images && selected.images.length > 0 ? (
                  <Carousel className="w-full h-full">
                    <CarouselContent className="h-full ml-0">
                      {selected.images.map((img, idx) => (
                        <CarouselItem key={idx} className="pl-0 h-full">
                          <img 
                            src={img} 
                            alt={`${selected.title} - ${idx + 1}`} 
                            className="w-full h-full object-cover"
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-4 opacity-0 group-hover/carousel:opacity-100 transition-opacity" />
                    <CarouselNext className="right-4 opacity-0 group-hover/carousel:opacity-100 transition-opacity" />
                  </Carousel>
                ) : (
                  <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" />
                )}
              </div>

              <div className="p-8 md:p-10">
                <div className="text-xs uppercase tracking-widest text-primary mb-3">{selected.service}</div>
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-5 leading-tight">{selected.title}</h3>
                <div className="flex flex-wrap gap-5 mb-6 pb-6 border-b border-border text-sm text-muted-foreground">
                  <div className="flex items-center gap-2"><MapPin className="size-4 text-primary" />{selected.location}</div>
                  <div className="flex items-center gap-2"><Calendar className="size-4 text-primary" />{selected.date}</div>
                  <div className="flex items-center gap-2"><Wrench className="size-4 text-primary" />{selected.service}</div>
                </div>
                <p className="text-muted-foreground leading-relaxed text-base">{selected.description}</p>
                <div className="mt-8 flex gap-3">
                  <Button variant="hero" asChild>
                    <a href="https://wa.me/5491150537615" target="_blank" rel="noreferrer">Consultar trabajo similar</a>
                  </Button>
                  <Button variant="glow" onClick={() => setSelected(null)}>Cerrar</Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </motion.div>
  );
};

export default Portfolio;
