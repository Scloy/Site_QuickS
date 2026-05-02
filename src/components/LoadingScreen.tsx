'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStage(1), 800); // Start text typing
    const timer2 = setTimeout(() => setStage(2), 2500); // Particle explosion / text fade out
    const timer3 = setTimeout(() => {
      onComplete();
    }, 3200); // Done

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  // Welcome text to type out
  const welcomeText = "sejam bem vindos a QuickS".split("");

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-ig-canvas text-ig-text overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      >
        <div className="relative w-full h-full flex flex-col items-center justify-center">
          
          {/* Central loading circle/particles */}
          <motion.div 
            className="absolute"
            animate={
              stage === 0 ? { scale: [1, 1.2, 1], rotate: [0, 180] } : 
              stage === 1 ? { scale: 1.5, opacity: 0.2 } :
              { scale: 50, opacity: 0 } // Explosion
            }
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <div className="w-16 h-16 rounded-full border-t-2 border-ig-text opacity-50 animate-spin"></div>
            {/* Minimalist particle representation */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-ig-text mix-blend-difference blur-xl"></div>
          </motion.div>

          {/* Typing Text */}
          <div className="z-10 text-center flex flex-col items-center">
            {stage >= 1 && (
              <motion.div 
                className="font-sans tracking-widest text-sm uppercase flex space-x-1"
                initial={{ opacity: 1 }}
                animate={stage >= 2 ? { opacity: 0, y: -20, filter: "blur(10px)" } : { opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {welcomeText.map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.1,
                      delay: index * 0.05,
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
