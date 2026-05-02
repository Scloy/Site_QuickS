import { MessageSquareQuote } from 'lucide-react';

const testimonials = [
  {
    name: "Ana Silva",
    role: "CEO, TechNova",
    text: "A QuickS revolucionou a forma como gerenciamos nossos processos internos. A automação implementada economizou centenas de horas da nossa equipe.",
  },
  {
    name: "Carlos Mendes",
    role: "Diretor de Operações, LogiFast",
    text: "Soluções sob medida e um atendimento excepcional. O sistema que desenvolveram para nós é robusto, intuitivo e escalou perfeitamente com o nosso crescimento.",
  },
  {
    name: "Mariana Costa",
    role: "Fundadora, EcoStyle",
    text: "Design impecável e performance absurda. A landing page e o sistema de gestão superaram todas as nossas expectativas. Verdadeiros parceiros de negócio.",
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 px-8 bg-ig-canvas">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-24">
          <span className="font-sans text-xs uppercase tracking-widest mb-4 opacity-50">O que dizem sobre nós</span>
          <h2 className="font-serif text-4xl md:text-5xl text-center">Impacto real em<br/>negócios reais.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="flex flex-col group cursor-default">
              <MessageSquareQuote className="w-8 h-8 opacity-20 mb-6 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="font-serif text-lg leading-relaxed mb-8 flex-grow">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-sans text-sm font-medium uppercase tracking-wide">{testimonial.name}</p>
                <p className="font-sans text-xs opacity-50 mt-1">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
