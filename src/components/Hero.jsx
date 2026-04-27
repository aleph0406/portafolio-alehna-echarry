import { ArrowDown, Github, Linkedin, Globe, MessageCircle } from "lucide-react";
import myPhoto from "./yo-portafolio.jpeg";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6 pt-28 pb-20">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Glow accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#C8FF00]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-[1fr_400px] gap-16 items-center">
          {/* Left: Text */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-[#C8FF00]/30 bg-[#C8FF00]/5 px-4 py-2 mb-10">
              <span className="w-2 h-2 rounded-full bg-[#C8FF00] animate-pulse" />
              <span className="text-[#C8FF00] text-xs font-body tracking-[0.2em] uppercase">
                Available for Projects
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display font-black leading-[0.9] tracking-tighter mb-6">
              <span className="block text-[clamp(2.5rem,6vw,5rem)] text-white">
                ING. ALEHNA
              </span>
              <span className="block text-[clamp(2.5rem,6vw,5rem)] text-[#C8FF00]">
                ECHARRY
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-white/60 text-[clamp(1rem,2vw,1.25rem)] max-w-xl font-body leading-relaxed mb-12">
              Ingeniero de Telecomunicaciones | Senior Developer Full-stack
            </p>

            {/* CTA Row */}
            <div className="flex flex-wrap items-center gap-4 mb-14">
              <button
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }
                className="group flex items-center gap-3 px-7 py-4 bg-[#C8FF00] text-black font-display font-bold text-sm tracking-tight hover:bg-white transition-all duration-200"
              >
                Ver Proyectos
                <ArrowDown
                  size={16}
                  className="group-hover:translate-y-1 transition-transform duration-200"
                />
              </button>
              <a
                href="mailto:alehnaec@gmail.com"
                className="px-7 py-4 border border-white/15 text-white/60 hover:text-white hover:border-white/40 font-display font-semibold text-sm tracking-tight transition-all duration-200"
              >
                Contactar
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-6">
              <span className="text-white/20 text-xs tracking-widest uppercase font-body">
                Encuéntrame
              </span>
              <div className="flex gap-4">
                {[
                  { icon: Github, href: "https://github.com/aleph0406" },
                  { icon: Linkedin, href: "https://linkedin.com/" },
                  { icon: MessageCircle, href: "https://wa.me/584124628191" },
                  { icon: Globe, href: "#" },
                ].map(({ icon: Icon, href }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/30 hover:text-white hover:border-white/40 transition-all duration-200"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Photo placeholder + stats */}
          <div className="flex flex-col gap-6">
            {/* Photo */}
            <div className="relative group">
              <div className="absolute -inset-[1px] bg-gradient-to-br from-[#C8FF00]/40 via-transparent to-white/10" />
              <div className="relative bg-[#111] aspect-[4/5] overflow-hidden">
                <img
                  src={myPhoto}
                  alt="Senior Full-Stack Developer"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-[#C8FF00]/60 z-10" />
                <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-[#C8FF00]/60 z-10" />
                <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-[#C8FF00]/60 z-10" />
                <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-[#C8FF00]/60 z-10" />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { num: "+3", label: "Años Exp." },
                { num: "10+", label: "Proyectos" },
                { num: "15+", label: "Clientes" },
              ].map(({ num, label }) => (
                <div
                  key={label}
                  className="bg-[#0e0e0e] border border-white/5 p-4 text-center"
                >
                  <div className="font-display font-black text-2xl text-[#C8FF00] leading-none mb-1">
                    {num}
                  </div>
                  <div className="text-white/30 text-xs font-body tracking-wider uppercase">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/20 text-[10px] tracking-[0.3em] uppercase font-body">
          Scroll
        </span>
        <ArrowDown size={14} className="text-white/20" />
      </div>
    </section>
  );
}
