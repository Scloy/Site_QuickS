'use client';

import { useState } from 'react';
import { X, Eye, EyeOff } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AuthModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register';
    const payload = isLogin ? { email, password } : { name, email, password };

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Ocorreu um erro');
      }

      setSuccess(data.message);
      if (isLogin) {
        // Handle successful login (e.g. save to context, close modal)
        setTimeout(() => {
          onClose();
          // reload or redirect if needed
        }, 1500);
      } else {
        // Handle successful register
        setTimeout(() => {
          setIsLogin(true);
          setSuccess('Agora faça seu login.');
        }, 1500);
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      >
        <motion.div 
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          className="bg-ig-canvas w-full max-w-md p-8 relative rounded-sm shadow-2xl"
        >
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 opacity-50 hover:opacity-100 transition-opacity"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex justify-center space-x-6 mb-8 border-b border-ig-text/10 pb-4">
            <button 
              onClick={() => { setIsLogin(true); setError(''); setSuccess(''); }}
              className={`font-sans text-sm uppercase tracking-widest transition-opacity ${isLogin ? 'opacity-100 font-bold' : 'opacity-50 hover:opacity-80'}`}
            >
              Login
            </button>
            <button 
              onClick={() => { setIsLogin(false); setError(''); setSuccess(''); }}
              className={`font-sans text-sm uppercase tracking-widest transition-opacity ${!isLogin ? 'opacity-100 font-bold' : 'opacity-50 hover:opacity-80'}`}
            >
              Registrar
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div>
                <label className="block font-sans text-xs uppercase tracking-widest opacity-70 mb-2">Nome Completo</label>
                <input 
                  type="text" 
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-transparent border-b border-ig-text/20 py-2 focus:outline-none focus:border-ig-text transition-colors font-serif text-lg"
                  placeholder="Seu nome"
                />
              </div>
            )}
            
            <div>
              <label className="block font-sans text-xs uppercase tracking-widest opacity-70 mb-2">E-mail</label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-b border-ig-text/20 py-2 focus:outline-none focus:border-ig-text transition-colors font-serif text-lg"
                placeholder="seu@email.com"
              />
            </div>

            <div className="relative">
              <label className="block font-sans text-xs uppercase tracking-widest opacity-70 mb-2">Senha</label>
              <input 
                type={showPassword ? "text" : "password"} 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent border-b border-ig-text/20 py-2 pr-10 focus:outline-none focus:border-ig-text transition-colors font-serif text-lg"
                placeholder="••••••••"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 bottom-2 opacity-50 hover:opacity-100 transition-opacity"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {error && <p className="text-red-500 text-sm font-sans">{error}</p>}
            {success && <p className="text-green-600 text-sm font-sans">{success}</p>}

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-ig-text text-ig-canvas font-sans text-xs uppercase tracking-widest py-4 mt-8 hover:bg-opacity-90 transition-all disabled:opacity-50"
            >
              {loading ? 'Aguarde...' : (isLogin ? 'Entrar' : 'Criar Conta')}
            </button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
