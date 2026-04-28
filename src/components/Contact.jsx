import { useState } from "react";
import { Send, Mail, Github, Linkedin, MapPin, Phone, CheckCircle, MessageCircle } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", project: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch("https://formspree.io/f/alehnaec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(form)
      });
      
      if (response.ok) {
        setSent(true);
        setForm({ name: "", email: "", project: "", message: "" });
      } else {
        throw new Error("Error en el envío");
      }
    } catch (error) {
      console.error(error);
      alert("Hubo un problema al enviar tu mensaje. Por favor, intenta de nuevo o contáctame directamente por email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <span className="text-[#C8FF00] text-xs font-body tracking-[0.3em] uppercase mb-4 block">
            04 / Contacto
          </span>
          <h2 className="font-display font-black text-[clamp(2.5rem,6vw,5rem)] text-white leading-[0.9] tracking-tighter">
            TRABAJEMOS
            <br />
            <span className="text-white/20 [-webkit-text-stroke:1px_rgba(255,255,255,0.15)]">
              JUNTOS
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_480px] gap-16">
          {/* Left: Info */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-white/40 text-lg font-body leading-relaxed max-w-md mb-12">
                ¿Tienes un proyecto en mente? Me especializo en transformar ideas en productos
                digitales de alto impacto.{" "}
                <span className="text-white/70">Hablemos.</span>
              </p>

              {/* Contact info */}
              <div className="flex flex-col gap-5 mb-16">
                {[
                  {
                    icon: MessageCircle,
                    label: "WhatsApp",
                    value: "+58 412 462 8191",
                    href: "https://wa.me/584124628191",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "alehnaec@gmail.com",
                    href: "mailto:alehnaec@gmail.com",
                  },
                  {
                    icon: MapPin,
                    label: "Ubicación",
                    value: "Venezuela / Remoto Global",
                    href: null,
                  },
                  {
                    icon: Github,
                    label: "GitHub",
                    value: "@aleph0406",
                    href: "https://github.com/aleph0406",
                  },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="w-10 h-10 border border-white/8 bg-white/3 flex items-center justify-center flex-shrink-0">
                      <Icon size={15} className="text-white/40" />
                    </div>
                    <div>
                      <span className="text-white/25 text-xs font-body tracking-widest uppercase block mb-0.5">
                        {label}
                      </span>
                      {href ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/60 hover:text-white text-sm font-body transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <span className="text-white/60 text-sm font-body">{value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div className="border border-[#C8FF00]/20 bg-[#C8FF00]/5 p-6 inline-flex items-start gap-4 max-w-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C8FF00] mt-1 flex-shrink-0 animate-pulse" />
              <div>
                <p className="text-[#C8FF00] font-display font-bold text-sm tracking-tight mb-1">
                  Disponible para Proyectos
                </p>
                <p className="text-white/30 text-xs font-body leading-relaxed">
                  Respondo en menos de 24 horas. Proyectos freelance, contratos remotos y
                  colaboraciones largas bienvenidas.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-[#0e0e0e] border border-white/8 p-8">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 gap-6">
                <CheckCircle size={48} className="text-[#C8FF00]" />
                <div>
                  <h3 className="font-display font-bold text-white text-2xl tracking-tight mb-3">
                    ¡Mensaje enviado!
                  </h3>
                  <p className="text-white/40 text-sm font-body leading-relaxed">
                    Gracias por escribir. Te respondo en menos de 24 horas.
                  </p>
                </div>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", project: "", message: "" }); }}
                  className="px-5 py-2.5 border border-white/15 text-white/50 hover:text-white hover:border-white/30 text-sm font-body transition-all"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="font-display font-bold text-white text-xl tracking-tight mb-2">
                  Cuéntame sobre tu proyecto
                </h3>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-white/30 text-xs font-body tracking-widest uppercase block mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      className="w-full bg-[#1A1A1A] border border-white/10 focus:border-[#C8FF00]/60 outline-none px-4 py-3 text-white text-sm font-body placeholder:text-white/30 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-white/30 text-xs font-body tracking-widest uppercase block mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      className="w-full bg-[#1A1A1A] border border-white/10 focus:border-[#C8FF00]/60 outline-none px-4 py-3 text-white text-sm font-body placeholder:text-white/30 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-white/30 text-xs font-body tracking-widest uppercase block mb-2">
                    Tipo de Proyecto
                  </label>
                  <select
                    name="project"
                    value={form.project}
                    onChange={handleChange}
                    className="w-full bg-[#1A1A1A] border border-white/10 focus:border-[#C8FF00]/60 outline-none px-4 py-3 text-white text-sm font-body transition-colors appearance-none"
                  >
                    <option value="" className="bg-[#111]">Selecciona una opción</option>
                    <option value="webapp" className="bg-[#111]">Web App / SaaS</option>
                    <option value="ecommerce" className="bg-[#111]">E-Commerce</option>
                    <option value="landing" className="bg-[#111]">Landing Page</option>
                    <option value="fullstack" className="bg-[#111]">Desarrollo Full-Stack</option>
                    <option value="consulting" className="bg-[#111]">Consultoría Técnica</option>
                    <option value="other" className="bg-[#111]">Otro</option>
                  </select>
                </div>

                <div>
                  <label className="text-white/30 text-xs font-body tracking-widest uppercase block mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Descríbeme tu idea, presupuesto estimado y timeline..."
                    className="w-full bg-[#1A1A1A] border border-white/10 focus:border-[#C8FF00]/60 outline-none px-4 py-3 text-white text-sm font-body placeholder:text-white/30 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group flex items-center justify-center gap-3 w-full py-4 bg-[#C8FF00] text-black font-display font-bold text-sm tracking-tight hover:bg-white transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed mt-2"
                >
                  {loading ? (
                    "Enviando..."
                  ) : (
                    <>
                      Enviar Mensaje
                      <Send
                        size={15}
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"
                      />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
