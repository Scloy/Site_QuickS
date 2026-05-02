import { Monitor, Cpu, Code2, LineChart } from 'lucide-react';

const services = [
  {
    title: "Software Sob Medida",
    description: "Desenvolvimento de aplicações web e mobile personalizadas para resolver os desafios únicos do seu negócio.",
    icon: <Code2 className="w-6 h-6" />
  },
  {
    title: "Sistemas Inteligentes & Automação",
    description: "Otimize seus processos internos com automações e inteligência artificial que economizam tempo e reduzem erros.",
    icon: <Cpu className="w-6 h-6" />
  },
  {
    title: "Plataformas SaaS",
    description: "Criamos plataformas completas e escaláveis, prontas para atender milhares de usuários com performance impecável.",
    icon: <Monitor className="w-6 h-6" />
  },
  {
    title: "Data & Analytics",
    description: "Sistemas de gestão e painéis que transformam dados complexos em insights claros para a tomada de decisão.",
    icon: <LineChart className="w-6 h-6" />
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-8 bg-ig-text text-ig-canvas">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-24">
          <span className="font-sans text-xs uppercase tracking-widest mb-4 opacity-50">O que fazemos</span>
          <h2 className="font-serif text-4xl md:text-5xl text-center">Soluções tecnológicas<br/>para acelerar seu negócio.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-24 md:gap-y-16">
          {services.map((service, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-6 group">
              <div className="w-12 h-12 rounded-full border border-ig-canvas/20 flex items-center justify-center shrink-0 group-hover:bg-ig-canvas group-hover:text-ig-text transition-colors duration-300">
                {service.icon}
              </div>
              <div>
                <h3 className="font-serif text-2xl mb-4">{service.title}</h3>
                <p className="font-sans text-sm md:text-base opacity-70 leading-relaxed max-w-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
