import { motion } from "framer-motion";
import { Microscope, Scissors, Wrench, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Microscope,
    tag: "01 — Consultoría",
    title: "Diagnóstico y gestión de arbolado",
    desc: "Evaluaciones de riesgo, inventarios, planes de manejo y dictámenes técnicos basados en metodología VTA y SIA.",
    bullets: [
      "Asesoramiento en gestión de arbolado urbano.",
      "Evaluación y mitigación de riesgos (árboles peligrosos).",
      "Diagnósticos fitosanitarios y tratamientos específicos.",
    ],
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=900&q=80",
  },
  {
    icon: Scissors,
    tag: "02 — Intervenciones",
    title: "Poda de altura y limpieza técnica",
    desc: "Poda formativa, sanitaria y de seguridad. Limpieza técnica de palmeras y tratamientos fitosanitarios bajo norma ANSI Z133.",
    bullets: [
      "Poda de Altura: Ejecución técnica en ejemplares de gran porte.",
      "Poda y limpieza técnica de palmeras.",
      "Poda de muros verdes, enredaderas y trepadoras.",
    ],
    image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=900&q=80",
  },
  {
    icon: Wrench,
    tag: "03 — Ingeniería",
    title: "Sustentación y extracciones complejas",
    desc: "Sistemas de cableado dinámico, refuerzos estructurales y desmontes controlados en espacios reducidos con rigging avanzado.",
    bullets: [
      "Sustentación Artificial: Anclajes, cableados y sistemas de soporte para evitar caídas.",
      "Talas controladas y extracciones complejas.",
      "Destoconado (eliminación de restos de troncos) y uso de maquinaria especializada.",
    ],
    image: "https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=900&q=80",
  },
];

const Servicios = () => {
  return (
    <section id="servicios" className="relative py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-20"
        >
          <div className="text-xs uppercase tracking-widest text-primary mb-4">Servicios</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
            Tres áreas, <span className="text-gradient-green">un solo estándar:</span> excelencia técnica.
          </h2>
          <p className="text-muted-foreground text-lg">
            Soluciones integrales para municipios, paisajistas, countries y propietarios particulares.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <div className="absolute top-4 left-4 size-12 rounded-xl glass-strong flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <s.icon className="size-5" />
                </div>
                <ArrowUpRight className="absolute top-4 right-4 size-5 text-muted-foreground group-hover:text-primary group-hover:rotate-12 transition-all" />
              </div>

              {/* Content */}
              <div className="p-7">
                <div className="text-[11px] uppercase tracking-widest text-primary/70 mb-3">{s.tag}</div>
                <h3 className="font-display text-xl font-semibold mb-3 leading-snug">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
                <ul className="space-y-2 pt-5 border-t border-border">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="size-1 rounded-full bg-primary" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Glow on hover */}
              <div className="absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios;
