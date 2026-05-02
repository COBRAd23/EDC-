import { motion } from "framer-motion";
import { Award, BookOpen, ShieldCheck } from "lucide-react";
import nosotrosArborista from "@/assets/nosotros-arborista.jpg";

const certs = [
  { name: "ISA", full: "International Society of Arboriculture", icon: Award },
  { name: "AATAAC", full: "Asociación Argentina de Arboricultura", icon: BookOpen },
  { name: "ANSI Z133", full: "Norma de Seguridad Operativa", icon: ShieldCheck },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
} as const;

const Nosotros = () => {
  return (
    <section id="nosotros" className="relative py-32 overflow-hidden">
      <div className="absolute top-1/2 -left-32 size-96 rounded-full bg-primary/10 blur-3xl -z-10" />

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated group">
              <img
                src={nosotrosArborista}
                alt="Arborista trepando un árbol con técnica profesional"
                className="w-full h-full object-cover transition-transform duration-[1.4s] group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-xs uppercase tracking-widest text-primary mb-2">Trabajo en altura</div>
                <div className="font-display text-2xl font-semibold">Técnica + Pasión</div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -bottom-6 -right-6 glass-strong rounded-2xl p-5 max-w-[200px] shadow-glow"
            >
              <div className="text-3xl font-display font-bold text-primary">15+</div>
              <div className="text-xs text-muted-foreground mt-1">años protegiendo el patrimonio arbóreo</div>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="text-xs uppercase tracking-widest text-primary mb-4">Nosotros</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
              Pasión por la naturaleza,<br />
              <span className="text-gradient-green">precisión científica.</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                En EDC Arborismo entendemos que cada árbol es un organismo vivo único, con una historia y un rol
                ecológico irremplazable. Nuestro trabajo se enfoca en preservar y prolongar la longevidad del
                entorno mediante intervenciones técnicas, seguras y minimamente invasivas.
              </p>
              <p>
                Combinamos metodología internacional con sensibilidad local: cada poda, diagnóstico o sustentación
                responde a un análisis biomecánico y fisiológico específico. No improvisamos. <span className="text-foreground">Operamos con criterio.</span>
              </p>
              <p>
                Dirección: Edgardo Corniola
              </p>
            </div>

            {/* Certifications grid */}
            <div className="mt-10">
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Certificaciones y normas</div>
              <div className="grid grid-cols-3 gap-3">
                {certs.map((c, i) => (
                  <motion.div
                    key={c.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="group glass rounded-xl p-4 hover:border-primary/50 transition-all hover:-translate-y-1"
                  >
                    <c.icon className="size-6 text-primary mb-3" />
                    <div className="font-display font-bold text-sm">{c.name}</div>
                    <div className="text-[11px] text-muted-foreground mt-1 leading-snug">{c.full}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
