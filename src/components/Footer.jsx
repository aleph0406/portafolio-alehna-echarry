  import { Github, Linkedin, Globe, ArrowUp, MessageCircle } from "lucide-react";
  
  export default function Footer() {
    return (
      <footer className="border-t border-white/5 px-6 py-12">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#C8FF00] flex items-center justify-center">
              <span className="text-black font-display font-black text-xs tracking-tighter">GR</span>
            </div>
            <span className="text-white/30 text-sm font-body">
              © 2025 Ing Alehna Echarry. Todos los derechos reservados.
            </span>
          </div>
  
          {/* Social */}
          <div className="flex items-center gap-4">
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
                className="w-9 h-9 border border-white/8 flex items-center justify-center text-white/25 hover:text-white hover:border-white/30 transition-all"
              >
                <Icon size={14} />
              </a>
            ))}

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-9 h-9 bg-[#C8FF00]/10 border border-[#C8FF00]/20 flex items-center justify-center text-[#C8FF00] hover:bg-[#C8FF00] hover:text-black transition-all"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
