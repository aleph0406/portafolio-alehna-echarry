import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = ["Projects", "Skills", "Contact"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id) => {
    setOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#080808]/90 backdrop-blur-xl border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="group flex items-center gap-3">
          <div className="w-9 h-9 bg-[#C8FF00] flex items-center justify-center">
            <span className="text-black font-display font-black text-sm tracking-tighter">AE</span>
          </div>
          <span className="font-display font-bold text-white tracking-tight text-lg hidden sm:block">
            Ing. Alehna Echarry
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => handleNav(l)}
              className="text-sm font-body text-white/50 hover:text-white transition-colors duration-200 tracking-widest uppercase"
            >
              {l}
            </button>
          ))}
          <a
            href="mailto:alehnaec@gmail.com"
            className="px-5 py-2 bg-[#C8FF00] text-black text-sm font-display font-bold tracking-tight hover:bg-white transition-colors duration-200"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white/70 hover:text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0e0e0e] border-t border-white/5 px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => handleNav(l)}
              className="text-left text-white/60 hover:text-white text-lg font-display font-semibold tracking-tight transition-colors"
            >
              {l}
            </button>
          ))}
          <a
            href="mailto:alehnaec@gmail.com"
            className="inline-block px-5 py-3 bg-[#C8FF00] text-black font-display font-bold text-sm tracking-tight w-fit"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
