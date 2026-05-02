import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "EcoManager",
    category: "SaaS Platform",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    color: "bg-emerald-100"
  },
  {
    title: "FinFlow",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop",
    color: "bg-blue-100"
  },
  {
    title: "Artisanal",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1481437156560-3205f6a55735?q=80&w=2395&auto=format&fit=crop",
    color: "bg-orange-100"
  },
  {
    title: "Nexus CRM",
    category: "Web Application",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2340&auto=format&fit=crop",
    color: "bg-purple-100"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 px-8 bg-ig-canvas text-ig-text">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div>
            <span className="font-sans text-xs uppercase tracking-widest mb-4 block opacity-50">Nosso Trabalho</span>
            <h2 className="font-serif text-5xl md:text-7xl">Projetos em<br/>destaque.</h2>
          </div>
          <a href="#" className="hidden md:inline-block font-sans text-xs uppercase tracking-widest relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-ig-text hover:after:h-[2px] after:transition-all pb-1">
            Ver todos os projetos
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`group cursor-pointer ${index % 2 !== 0 ? 'md:mt-32' : ''}`}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-ig-canvas mb-6">
                {/* Fallback color block while loading/if no image */}
                <div className={`absolute inset-0 ${project.color} opacity-20`}></div>
                
                {/* Placeholder image using unsplash, in a real scenario use actual project images */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="object-cover w-full h-full grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-in-out"
                />
                
                <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 text-black">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-serif text-2xl mb-2">{project.title}</h3>
                  <p className="font-sans text-xs uppercase tracking-wider opacity-50">{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center md:hidden">
           <a href="#" className="inline-block font-sans text-xs uppercase tracking-widest relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-ig-text pb-1">
            Ver todos os projetos
          </a>
        </div>
      </div>
    </section>
  );
}
