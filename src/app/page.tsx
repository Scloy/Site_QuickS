'use client';

import { useState, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Typewriter from "@/components/Typewriter";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative min-h-screen bg-ig-canvas text-ig-text bg-paper-texture selection:bg-blue-500/30 selection:text-ig-text scroll-smooth">
      {/* Blue Edge Glow */}
      <div className="pointer-events-none fixed inset-0 bg-edge-glow mix-blend-multiply z-0"></div>

      {!loadingComplete && <LoadingScreen onComplete={() => setLoadingComplete(true)} />}

      {/* Main Content - Only visible after loading */}
      <div className={`relative z-10 transition-opacity duration-1000 ${loadingComplete ? 'opacity-100' : 'opacity-0 h-screen overflow-hidden'}`}>
        <Navbar />

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-8 pt-20">
          <div className="text-center max-w-4xl mx-auto z-10 pb-24">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-8">
              A <Typewriter baseText="QuickS" words={["oftware", "ervice", "ystem", "aaS", "olution"]} delay={150} deleteSpeed={100} pause={1500} className="font-medium" />
            </h1>
            
            <p className="font-sans text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto opacity-70 leading-relaxed mt-12">
              "Somos uma empresa de tecnologia que visa criar aplicações, softwares e automações para estabelecimentos gerenciarem e otimizarem melhor seus serviços."
            </p>
          </div>

          {/* Scroll Indicator */}
          <div 
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center transition-opacity duration-300"
            style={{ opacity: Math.max(0, 0.5 - scrollY / 300) }}
          >
            <span className="font-sans text-xs uppercase tracking-widest mb-4">Role para baixo</span>
            <div className="w-[1px] h-16 bg-ig-text/30 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-ig-text animate-[scroll_2s_ease-in-out_infinite]"></div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <Services />

        {/* Portfolio Section */}
        <Portfolio />

        {/* Testimonials (Comments) Section */}
        <Testimonials />

        {/* Footer */}
        <Footer />
      </div>

      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `}</style>
    </main>
  );
}
