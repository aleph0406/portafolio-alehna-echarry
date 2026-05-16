import { useState } from "react";
import { ExternalLink, PartyPopper } from "lucide-react";
import artKitchenImg from "./artkitchen.png";
import hkaVzlaImg from "./hka-vzla.png";
import hkaPanamaImg from "./hka-panama.png";
import zalesImg from "./zales.png";
import dolceImg from "./dolce.png";
import smarthomeImg from "./smarthome.png";
import facexImg from "./facex.png";
import websellImg from "./websell.png";
import iaPanamaImg from "./ia-panama.png";
import felImg from "./fel.png";
import utilitarioImg from "./utilitario.png";
import captainCandyImg from "./captaincandy.png";


const projects = [
  {
    id: 1,
    title: "Art Kitchen Design",
    category: "E-Commerce / Branding",
    description:
      "Diseño web completo para empresa de mobiliario de cocina premium. Interfaz elegante que refleja la calidad artesanal del producto.",
    url: "https://artkitchendesign.us/",
    image: artKitchenImg,
    tags: ["React", "Tailwind", "UI/UX"],
    accent: "#FF6B35",
    featured: true,
  },
  {
    id: 2,
    title: "The Factory HKA Corp Panama",
    category: "Suite Empresarial (Panamá)",
    description:
      "Ecosistema digital completo: imprenta corporativa, sistema de facturación electrónica y landing pages de IA para el mercado panameño.",
    url: "https://thefactoryhka.com.pa/",
    image: hkaPanamaImg,
    tags: ["Next.js", "Node.js", "IA", "Facturación"],
    accent: "#C8FF00",
    featured: true,
  },
  {
    id: 10,
    title: "The Factory HKA Venezuela",
    category: "Suite Empresarial (Venezuela)",
    description:
      "Liderazgo en facturación electrónica y soluciones fiscales. Ecosistema digital robusto para el mercado venezolano.",
    url: "https://imprenta.thefactoryhka.com.ve/",
    image: hkaVzlaImg,
    tags: ["Next.js", "Node.js", "IA", "Fiscal"],
    accent: "#C8FF00",
    featured: true,
  },
  {
    id: 13,
    title: "Captain Candy Shop",
    category: "E-Commerce / Shopify",
    description:
      "Desarrollo Frontend en Shopify para un e-commerce de Captain Candy. Configurador interactivo utilizando jQuery y manipulación del DOM, ofreciendo animaciones en tiempo real y una experiencia de usuario dinámica y fluida.",
    url: "https://captain-candy-shop.myshopify.com/",
    image: captainCandyImg,
    tags: ["Shopify", "Liquid", "Ecommerce", "Integraciones de envío y pagos"],
    accent: "#FF007A",
    featured: true,
  },

  {
    id: 3,
    title: "Zales Accresories",
    category: "E-Commerce / Fashion",
    description:
      "Tienda online de accesorios con una estética visual cuidada y experiencia de compra optimizada para conversión.",
    url: "https://zales-accesories.vercel.app/categorias",
    image: zalesImg,
    tags: ["React", "Vercel", "E-Commerce"],
    accent: "#E8B4B8",
  },
  {
    id: 4,
    title: "Dolce Amore Pastry",
    category: "Food & Lifestyle",
    description:
      "Identidad digital para pastelería artesanal. Diseño aesthetic con fotografía protagonista, perfecto para atraer clientela aspiracional.",
    url: "https://dolce-amore-pastry.vercel.app/",
    image: dolceImg,
    tags: ["React", "Tailwind", "Animations"],
    accent: "#F4A7B9",
  },
  {
    id: 5,
    title: "Smart Home Insulation",
    category: "Construction / Tech",
    description:
      "Presencia web profesional para empresa de aislamiento inteligente. Diseño técnico y confiable para un mercado B2B exigente.",
    url: "https://smarthome-insulation.com/",
    image: smarthomeImg,
    tags: ["WordPress", "SEO", "B2B"],
    accent: "#4ECDC4",
  },
  {
    id: 6,
    title: "Facex Consulting",
    category: "Consulting / Proposal",
    description:
      "Website de propuesta para firma consultora. Comunicación de valor clara, diseño que proyecta autoridad y credibilidad instantánea.",
    url: "https://facex-proposal-website.vercel.app/",
    image: facexImg,
    tags: ["React", "Vercel", "Business"],
    accent: "#A78BFA",
  },
  {
    id: 7,
    title: "The Websell",
    category: "Senior Developer — Rol Actual",
    description:
      "Desarrollo senior en agencia digital. Arquitectura de soluciones, liderazgo técnico y delivery de proyectos de alto estándar para clientes internacionales.",
    url: "https://thewebsell.com/",
    image: websellImg,
    tags: ["Lead Dev", "React", "Node.js", "Shopify"],
    accent: "#C8FF00",
    featured: true,
  },
  {
    id: 8,
    title: "Invitaciones de Eventos",
    category: "Event Tech / Creative",
    description:
      "Experiencia digital de invitación para XV años. Animaciones, cuenta regresiva y gestión de confirmaciones — donde lo técnico se vuelve emoción.",
    url: "https://v0-mis-xv-aranza-sthefanya.vercel.app/",
    icon: PartyPopper,
    tags: ["React", "Animations", "Events"],
    accent: "#FB923C",
  },
  {
    id: 9,
    title: "Atención al Cliente con IA",
    category: "Artificial Intelligence",
    description:
      "Landing page especializada para soluciones de Inteligencia Artificial para empresas en The Factory HKA Panama.",
    url: "https://thefactoryhka.com.pa/atencion-al-cliente-con-ia-para-empresas/",
    image: iaPanamaImg,
    tags: ["Next.js", "AI", "Landing Pages"],
    accent: "#38BDF8",
  },
  {
    id: 11,
    title: "Facturación Electrónica DGI",
    category: "Compliance / Fintech",
    description:
      "Landing page especializada en cumplimiento fiscal y facturación electrónica para el mercado panameño bajo normativas DGI.",
    url: "https://thefactoryhka.com.pa/facturacion-electronica-cumple-con-la-dgi/",
    image: felImg,
    tags: ["DGI", "Fintech", "Compliance"],
    accent: "#C8FF00",
  },
  {
    id: 12,
    title: "Portal de Distribuidores",
    category: "Utilitarios / Panamá",
    description:
      "Herramienta técnica y portal de gestión para distribuidores autorizados de soluciones fiscales en Panamá.",
    url: "https://thefactoryhka.com.pa/utilitarios/",
    image: utilitarioImg,
    tags: ["Portal", "Tech", "B2B"],
    accent: "#C8FF00",
  },
];

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`group relative flex flex-col bg-[#0e0e0e] border transition-all duration-300 overflow-hidden cursor-pointer ${
        project.featured
          ? "border-white/15 hover:border-[#C8FF00]/50"
          : "border-white/5 hover:border-white/20"
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background Image Container */}
      <div className="relative h-64 overflow-hidden border-b border-white/5 bg-[#111]">
        {/* Actual Image */}
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-white/5">
            {project.icon && <project.icon size={40} className="text-white/20" />}
          </div>
        )}

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/20 to-transparent" />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(ellipse at center, ${project.accent}15 0%, transparent 70%)`,
          }}
        />

        {/* Accent bar top */}
        <div
          className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
          style={{ backgroundColor: project.accent }}
        />

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 px-2 py-1 bg-[#C8FF00] border border-[#C8FF00]/20 z-10 shadow-lg">
            <span className="text-black text-[10px] font-display font-black tracking-widest uppercase">
              {project.id === 7 ? "Actual" : "Destacado"}
            </span>
          </div>
        )}

        {/* URL hint */}
        {project.url !== "#" && (
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-10">
            <div className="bg-[#C8FF00] p-2 rounded-full shadow-xl">
              <ExternalLink size={16} className="text-black" />
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <div className="mb-4">
          <span className="text-[10px] font-body tracking-[0.2em] uppercase text-white/30 mb-2 block">
            {project.category}
          </span>
          <h3 className="font-display font-bold text-xl text-white tracking-tight mb-3 group-hover:text-[#C8FF00] transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-white/40 text-sm font-body leading-relaxed">{project.description}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-[10px] font-body tracking-wider uppercase text-white/30 border border-white/8 bg-white/3"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      {project.url !== "#" && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-20"
          aria-label={`Ver proyecto ${project.title}`}
        />
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-end justify-between mb-20 flex-wrap gap-6">
          <div>
            <span className="text-[#C8FF00] text-xs font-body tracking-[0.3em] uppercase mb-4 block">
              02 / Portafolio
            </span>
            <h2 className="font-display font-black text-[clamp(2.5rem,6vw,5rem)] text-white leading-[0.9] tracking-tighter">
              PROYECTOS
              <br />
              <span className="text-white/20 [-webkit-text-stroke:1px_rgba(255,255,255,0.15)]">
                DESTACADOS
              </span>
            </h2>
          </div>
          <p className="text-white/30 text-sm font-body max-w-xs leading-relaxed">
            Clientes reales. Resultados reales. Cada proyecto construido con precisión técnica y
            visión creativa.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
