'use client';

import { useEffect, useState } from 'react';

export default function Typewriter({ 
  baseText = "",
  words = [], 
  delay = 100,
  deleteSpeed = 50,
  pause = 2000,
  className = "" 
}: { 
  baseText?: string,
  words?: string[], 
  delay?: number,
  deleteSpeed?: number,
  pause?: number,
  className?: string
}) {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    if (words.length === 0) return;

    const targetWord = words[wordIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        if (currentText.length < targetWord.length) {
          setCurrentText(targetWord.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(targetWord.slice(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    const timeoutId = setTimeout(
      handleTyping,
      isDeleting ? deleteSpeed : delay
    );

    return () => clearTimeout(timeoutId);
  }, [currentText, isDeleting, wordIndex, words, delay, deleteSpeed, pause]);

  return (
    <span className={className}>
      {baseText}
      {currentText}
      <span className="inline-block w-[2px] h-[1em] bg-ig-text ml-1 animate-pulse align-middle"></span>
    </span>
  );
}
