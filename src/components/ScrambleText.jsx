import { useState, useEffect } from 'react';

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

export default function ScrambleText({ text, duration = 2000, delay = 0, className = '' }) {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let timeoutId;
    let intervalId;
    
    timeoutId = setTimeout(() => {
      let frame = 0;
      const totalFrames = Math.round(duration / 30);
      
      intervalId = setInterval(() => {
        frame++;
        
        const progress = frame / totalFrames;
        
        if (progress >= 1) {
          setDisplayText(text);
          clearInterval(intervalId);
          return;
        }
        
        let scrambled = '';
        for (let i = 0; i < text.length; i++) {
          if (text[i] === ' ' || text[i] === '\n') {
            scrambled += text[i];
          } else if (progress * text.length > i) {
            scrambled += text[i];
          } else {
            scrambled += characters[Math.floor(Math.random() * characters.length)];
          }
        }
        
        setDisplayText(scrambled);
      }, 30);
    }, delay);
    
    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, duration, delay]);

  return <span className={className}>{displayText}</span>;
}
