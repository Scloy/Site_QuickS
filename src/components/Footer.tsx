'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending email
    setTimeout(() => {
      setSent(true);
      setEmail('');
      setMessage('');
      setTimeout(() => setSent(false), 3000);
    }, 1000);
  };

  return (
    <footer id="contact" className="bg-ig-text text-ig-canvas py-24 px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-24">
          
          {/* Contact Form for Quotes */}
          <div className="w-full lg:w-1/2">
            <h3 className="font-serif text-3xl mb-8">Solicite um Orçamento</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-sans text-xs uppercase tracking-widest opacity-50 mb-2">Seu E-mail</label>
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-b border-ig-canvas/20 py-2 focus:outline-none focus:border-ig-canvas transition-colors font-sans text-lg placeholder:opacity-30"
                  placeholder="exemplo@empresa.com"
                />
              </div>
              <div>
                <label className="block font-sans text-xs uppercase tracking-widest opacity-50 mb-2">Sua Necessidade</label>
                <textarea 
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-transparent border-b border-ig-canvas/20 py-2 focus:outline-none focus:border-ig-canvas transition-colors font-sans text-lg min-h-[100px] resize-none placeholder:opacity-30"
                  placeholder="Conte-nos um pouco sobre o seu projeto..."
                />
              </div>
              <button 
                type="submit"
                className="group flex items-center font-sans text-xs uppercase tracking-widest py-4 hover:opacity-70 transition-opacity"
              >
                {sent ? 'Mensagem Enviada!' : 'Enviar Solicitação'}
                {!sent && <Send className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />}
              </button>
            </form>
          </div>

          {/* Contact Info & Socials */}
          <div className="w-full lg:w-1/3 flex flex-col justify-between h-full space-y-12 lg:mt-0">
            <div>
              <h4 className="font-sans text-xs uppercase tracking-widest opacity-50 mb-2">Contato Direto</h4>
              <a href="mailto:contato@quicks.com.br" className="font-serif text-2xl hover:opacity-70 transition-opacity block">
                contato@quicks.com.br
              </a>
              <a href="tel:+5511999999999" className="font-sans text-lg mt-2 hover:opacity-70 transition-opacity block">
                +55 (11) 99999-9999
              </a>
            </div>
            
            <div>
              <h4 className="font-sans text-xs uppercase tracking-widest opacity-50 mb-2">Localização</h4>
              <p className="font-sans text-sm max-w-xs opacity-80">
                Av. Paulista, 1000<br/>
                Bela Vista, São Paulo - SP<br/>
                01310-100, Brasil
              </p>
            </div>

            <div className="flex space-x-6">
              <a href="#" className="font-sans text-xs uppercase tracking-widest hover:opacity-70 transition-opacity">LinkedIn</a>
              <a href="#" className="font-sans text-xs uppercase tracking-widest hover:opacity-70 transition-opacity">Instagram</a>
              <a href="#" className="font-sans text-xs uppercase tracking-widest hover:opacity-70 transition-opacity">Twitter</a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-ig-canvas/10 pt-8">
          <p className="font-sans text-xs opacity-50 mb-4 md:mb-0">
            &copy; 2026 - Desenvolvido por QuickS
          </p>
          <p className="font-sans text-[10px] opacity-30">
            Todos os direitos reservados.
          </p>
        </div>
      </div>
      
      {/* Decorative large text */}
      <div className="absolute top-[80%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-5">
        <span className="font-serif text-[15vw] leading-none whitespace-nowrap">QUICKS</span>
      </div>
    </footer>
  );
}
