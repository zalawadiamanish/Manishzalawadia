import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

interface Star {
  id: number;
  x: number;
  startY: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
}

const StarfieldBackground = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Reduced particle count by ~40% (from 150 to 90)
    const newStars: Star[] = Array.from({ length: 90 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      startY: Math.random() * -50,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.6 + 0.1, // Reduced opacity
      duration: Math.random() * 10 + 8, // Slower, more subtle
      delay: Math.random() * 12,
    }));
    setStars(newStars);
  }, []);

  // Use resolvedTheme to handle system preference
  const isDark = mounted && resolvedTheme === "dark";

  // Light mode background styles
  if (!isDark) {
    return (
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Light mode gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
        
        {/* Subtle color accents for light mode */}
        <div 
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-[0.08]"
          style={{
            background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 60%)',
            filter: 'blur(100px)',
          }}
        />
        
        <div 
          className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{
            background: 'radial-gradient(circle, hsl(var(--accent)) 0%, transparent 60%)',
            filter: 'blur(120px)',
          }}
        />

        {/* Subtle floating dots for light mode */}
        {stars.slice(0, 30).map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-primary/20"
            style={{
              left: `${star.x}%`,
              width: star.size * 1.5,
              height: star.size * 1.5,
            }}
            initial={{ 
              y: `${star.startY}vh`,
              opacity: 0,
            }}
            animate={{ 
              y: ['0vh', '120vh'],
              opacity: [0, star.opacity * 0.3, star.opacity * 0.3, 0],
            }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}

        {/* Light grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>
    );
  }

  // Dark mode starfield
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[#0a0a0f]">
      {/* Deep dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d0d14] to-[#0a0a0f]" />
      
      {/* Subtle amber accent nebula */}
      <div 
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-[0.015]"
        style={{
          background: 'radial-gradient(circle, hsl(var(--accent)) 0%, transparent 60%)',
          filter: 'blur(100px)',
        }}
      />
      
      {/* Subtle primary accent */}
      <div 
        className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full opacity-[0.02]"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 60%)',
          filter: 'blur(120px)',
        }}
      />

      {/* Falling stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            width: star.size,
            height: star.size,
            boxShadow: star.size > 1.5 
              ? `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.2)` 
              : 'none',
          }}
          initial={{ 
            y: `${star.startY}vh`,
            opacity: 0,
          }}
          animate={{ 
            y: ['0vh', '120vh'],
            opacity: [0, star.opacity, star.opacity, 0],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}

      {/* Reduced glowing stars */}
      {[
        { x: 20, size: 2.5, duration: 12, delay: 0 },
        { x: 55, size: 2, duration: 10, delay: 4 },
        { x: 80, size: 2.5, duration: 14, delay: 8 },
        { x: 40, size: 2, duration: 11, delay: 2 },
      ].map((star, i) => (
        <motion.div
          key={`glow-${i}`}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            width: star.size,
            height: star.size,
            boxShadow: `0 0 ${star.size * 3}px ${star.size}px rgba(255, 255, 255, 0.3)`,
          }}
          initial={{ y: '-10vh', opacity: 0 }}
          animate={{ 
            y: ['0vh', '120vh'],
            opacity: [0, 0.8, 0.8, 0],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}

      {/* Single subtle shooting star */}
      <motion.div
        className="absolute w-1 h-1 rounded-full bg-white"
        style={{ 
          boxShadow: '0 0 4px 2px rgba(255, 255, 255, 0.6), -15px -8px 12px 1px rgba(255, 255, 255, 0.2)',
          left: '10%',
          top: '-5%',
        }}
        animate={{
          x: ['0vw', '40vw'],
          y: ['0vh', '50vh'],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatDelay: 15,
          ease: 'easeOut',
        }}
      />
    </div>
  );
};

export default StarfieldBackground;
