import { Code2, Layout, ShoppingBag, Server, Zap, Wrench } from "lucide-react";

const skillGroups = [
  {
    icon: Code2,
    label: "Frontend",
    accent: "#C8FF00",
    skills: [
      { name: "React", level: 98 },
      { name: "Next.js", level: 95 },
      { name: "Tailwind CSS", level: 97 },
      { name: "TypeScript", level: 88 },
    ],
  },
  {
    icon: Server,
    label: "Backend",
    accent: "#38BDF8",
    skills: [
      { name: "Node.js", level: 92 },
      { name: "Express", level: 90 },
      { name: "REST APIs", level: 95 },
      { name: "PostgreSQL", level: 82 },
    ],
  },
  {
    icon: ShoppingBag,
    label: "CMS / E-Commerce",
    accent: "#FB923C",
    skills: [
      { name: "Shopify", level: 90 },
      { name: "Liquid", level: 85 },
      { name: "WordPress", level: 88 },
      { name: "Elementor", level: 85 },
      { name: "WooCommerce", level: 80 },
    ],
  },
  {
    icon: Zap,
    label: "Motion & Design",
    accent: "#F4A7B9",
    skills: [
      { name: "Framer Motion", level: 90 },
      { name: "Figma", level: 85 },
      { name: "UI/UX Design", level: 92 },
      { name: "CSS Animations", level: 95 },
    ],
  },
  {
    icon: Layout,
    label: "Arquitectura",
    accent: "#A78BFA",
    skills: [
      { name: "Vercel / Deploy", level: 95 },
      { name: "Git / GitHub", level: 92 },
      { name: "Monorepos", level: 80 },
      { name: "CI/CD Básico", level: 78 },
    ],
  },
  {
    icon: Wrench,
    label: "Telecomunicaciones",
    accent: "#4ECDC4",
    skills: [
      { name: "Redes IP", level: 90 },
      { name: "Fibra Óptica", level: 85 },
      { name: "IoT / Smart Home", level: 80 },
      { name: "Protocolos TCP/IP", level: 88 },
    ],
  },
];

function SkillBar({ name, level, accent }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-white/60 text-sm font-body">{name}</span>
        <span className="text-white/25 text-xs font-body tabular-nums">{level}%</span>
      </div>
      <div className="h-[3px] bg-white/5 w-full overflow-hidden">
        <div
          className="h-full transition-all duration-1000"
          style={{ width: `${level}%`, backgroundColor: accent }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const Icon = null;

  return (
    <section id="skills" className="py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <span className="text-[#C8FF00] text-xs font-body tracking-[0.3em] uppercase mb-4 block">
            03 / Tecnologías
          </span>
          <h2 className="font-display font-black text-[clamp(2.5rem,6vw,5rem)] text-white leading-[0.9] tracking-tighter">
            STACK &amp;
            <br />
            <span className="text-white/20 [-webkit-text-stroke:1px_rgba(255,255,255,0.15)]">
              SKILLS
            </span>
          </h2>
        </div>

        {/* Marquee tech strip */}
        <div className="relative overflow-hidden mb-20 border-y border-white/5 py-5">
          <div className="flex gap-12 animate-[marquee_20s_linear_infinite] whitespace-nowrap">
            {[
              "React",
              "Next.js",
              "Node.js",
              "Tailwind",
              "TypeScript",
              "Shopify",
              "Liquid",
              "WordPress",
              "Framer Motion",
              "Figma",
              "Vercel",
              "PostgreSQL",
              "REST APIs",
              "React",
              "Next.js",
              "Node.js",
              "Tailwind",
              "TypeScript",
              "Shopify",
              "Liquid",
              "WordPress",
              "Framer Motion",
              "Figma",
              "Vercel",
            ].map((tech, i) => (
              <span
                key={i}
                className={`text-sm font-display font-bold tracking-widest uppercase ${
                  i % 4 === 0 ? "text-[#C8FF00]" : "text-white/20"
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Skill grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => {
            const GroupIcon = group.icon;
            return (
              <div
                key={group.label}
                className="bg-[#0e0e0e] border border-white/5 hover:border-white/10 transition-colors duration-300 p-8"
              >
                {/* Group header */}
                <div className="flex items-center gap-3 mb-8">
                  <div
                    className="w-10 h-10 flex items-center justify-center"
                    style={{ backgroundColor: `${group.accent}15`, border: `1px solid ${group.accent}20` }}
                  >
                    <GroupIcon size={18} style={{ color: group.accent }} />
                  </div>
                  <span className="font-display font-bold text-white text-base tracking-tight">
                    {group.label}
                  </span>
                </div>

                {/* Bars */}
                {group.skills.map((s) => (
                  <SkillBar key={s.name} {...s} accent={group.accent} />
                ))}
              </div>
            );
          })}
        </div>

        {/* Work Experience Section */}
        <div className="mt-20 mb-10">
          <h2 className="font-display font-black text-3xl text-white tracking-tight mb-8">
            EXPERIENCIA LABORAL
          </h2>
          <div className="grid gap-6">
            {[
              {
                role: "Ingeniero de Telecomunicaciones | Prácticas Profesionales",
                company: "Telecomunicaciones Movilnet C.A.",
                period: "Febrero 2025 - Marzo 2025",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Logo_Movilnet.png/800px-Logo_Movilnet.png",
                desc: "Departamento de Operaciones y Mantenimiento: Conmutación y fibra de la Red Maracay / San Fernando."
              },
              {
                role: "Freelancer",
                company: "Workana",
                period: "2021 - 2026",
                logo: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Workana_Logo.png",
                desc: "Desarrollador Junior: WordPress y VanillaJS, HTML5, CSS3, PHP."
              },
              {
                role: "Desarrollador Senior Fullstack",
                company: "The Websell Winet LLC",
                period: "Diciembre 2025 - Actualidad",
                logo: "https://thewebsell.com/wp-content/uploads/2021/05/logo-websell.png",
                desc: "Stack: React, Node.js, Next.js, WordPress, Python, PHP, SQL, Tailwind, TypeScript, Shopify."
              }
            ].map((job, i) => (
              <div key={i} className="bg-[#0e0e0e] border border-white/5 p-6 hover:border-[#C8FF00]/30 transition-colors flex flex-col md:flex-row gap-6 items-start md:items-center">
                {job.logo && (
                  <div className="w-16 h-16 flex-shrink-0 bg-white/5 p-2 flex items-center justify-center">
                    <img src={job.logo} alt={job.company} className="max-w-full max-h-full object-contain" />
                  </div>
                )}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <h3 className="text-[#C8FF00] font-display font-bold text-lg tracking-tight">
                      {job.role}
                    </h3>
                    <span className="text-white/20 text-xs font-body uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full whitespace-nowrap w-fit">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-white/80 font-display font-medium text-sm mb-2">{job.company}</p>
                  <p className="text-white/40 text-sm font-body leading-relaxed">{job.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-16 border border-white/5 p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-white text-xl tracking-tight mb-2">
              Ingeniería de Telecomunicaciones
            </h3>
            <p className="text-white/40 text-sm font-body max-w-lg leading-relaxed">
              Mi base como Ing. Teleco me da una perspectiva única: entiendo sistemas a nivel
              profundo, lo que se traduce en software más robusto, eficiente y pensado para escalar.
            </p>
          </div>
          <div className="w-14 h-14 flex-shrink-0 border border-[#C8FF00]/20 flex items-center justify-center">
            <span className="text-[#C8FF00] font-display font-black text-xs tracking-tighter">
              TELCO
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
