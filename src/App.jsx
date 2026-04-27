import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  return (
    <div
      className={`min-h-screen bg-[#080808] text-white font-body transition-opacity duration-700 ${
        loaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <Nav />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
