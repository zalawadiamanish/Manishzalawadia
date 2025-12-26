import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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

  useEffect(() => {
    // Generate falling stars
    const newStars: Star[] = Array.from({ length: 150 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      startY: Math.random() * -50, // Start above viewport
      size: Math.random() * 2.5 + 0.5,
      opacity: Math.random() * 0.8 + 0.2,
      duration: Math.random() * 8 + 6, // 6-14 seconds to fall
      delay: Math.random() * 10, // Stagger the start
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[#0a0a0f]">
      {/* Deep dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d0d14] to-[#0a0a0f]" />
      
      {/* Subtle color nebula hints */}
      <div 
        className="absolute top-1/4 left-1/4 w-[800px] h-[800px] rounded-full opacity-[0.02]"
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
              ? `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.3)` 
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

      {/* Larger glowing falling stars */}
      {[
        { x: 15, size: 3, duration: 10, delay: 0 },
        { x: 45, size: 2.5, duration: 8, delay: 2 },
        { x: 75, size: 3, duration: 12, delay: 4 },
        { x: 30, size: 2, duration: 9, delay: 6 },
        { x: 60, size: 2.5, duration: 11, delay: 3 },
        { x: 85, size: 2, duration: 7, delay: 5 },
        { x: 10, size: 2.5, duration: 10, delay: 8 },
        { x: 50, size: 3, duration: 9, delay: 1 },
      ].map((star, i) => (
        <motion.div
          key={`glow-${i}`}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            width: star.size,
            height: star.size,
            boxShadow: `0 0 ${star.size * 4}px ${star.size}px rgba(255, 255, 255, 0.4)`,
          }}
          initial={{ y: '-10vh', opacity: 0 }}
          animate={{ 
            y: ['0vh', '120vh'],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}

      {/* Shooting stars - diagonal fast movement */}
      <motion.div
        className="absolute w-1 h-1 rounded-full bg-white"
        style={{ 
          boxShadow: '0 0 4px 2px rgba(255, 255, 255, 0.8), -20px -10px 15px 1px rgba(255, 255, 255, 0.3)',
          left: '5%',
          top: '-5%',
        }}
        animate={{
          x: ['0vw', '50vw'],
          y: ['0vh', '60vh'],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          repeatDelay: 8,
          ease: 'easeOut',
        }}
      />
      
      <motion.div
        className="absolute w-1 h-1 rounded-full bg-white"
        style={{ 
          boxShadow: '0 0 4px 2px rgba(255, 255, 255, 0.8), 20px -10px 15px 1px rgba(255, 255, 255, 0.3)',
          right: '10%',
          top: '-5%',
        }}
        animate={{
          x: ['0vw', '-40vw'],
          y: ['0vh', '50vh'],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatDelay: 12,
          delay: 5,
          ease: 'easeOut',
        }}
      />
    </div>
  );
};

export default StarfieldBackground;
