import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleDuration: number;
  twinkleDelay: number;
}

const StarfieldBackground = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    // Generate more stars for denser starfield like reference
    const newStars: Star[] = Array.from({ length: 200 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 0.5, // Smaller stars
      opacity: Math.random() * 0.8 + 0.2,
      twinkleDuration: Math.random() * 4 + 2,
      twinkleDelay: Math.random() * 5,
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

      {/* Stars - white dots like reference */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [star.opacity * 0.4, star.opacity, star.opacity * 0.4],
          }}
          transition={{
            duration: star.twinkleDuration,
            delay: star.twinkleDelay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Larger glowing stars scattered */}
      {[
        { x: 15, y: 12, size: 3, delay: 0 },
        { x: 85, y: 8, size: 2.5, delay: 1 },
        { x: 45, y: 20, size: 2, delay: 0.5 },
        { x: 75, y: 35, size: 3, delay: 1.5 },
        { x: 25, y: 45, size: 2.5, delay: 2 },
        { x: 90, y: 55, size: 2, delay: 0.8 },
        { x: 10, y: 65, size: 2.5, delay: 1.2 },
        { x: 55, y: 75, size: 3, delay: 0.3 },
        { x: 35, y: 85, size: 2, delay: 1.8 },
        { x: 80, y: 90, size: 2.5, delay: 0.6 },
        { x: 5, y: 30, size: 2, delay: 2.2 },
        { x: 60, y: 5, size: 2.5, delay: 1.1 },
      ].map((star, i) => (
        <motion.div
          key={`glow-${i}`}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            boxShadow: `0 0 ${star.size * 3}px ${star.size}px rgba(255, 255, 255, 0.3)`,
          }}
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            delay: star.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Shooting star effect */}
      <motion.div
        className="absolute w-1 h-1 rounded-full bg-white"
        style={{ 
          boxShadow: '0 0 4px 2px rgba(255, 255, 255, 0.8), -20px 0 15px 1px rgba(255, 255, 255, 0.3)',
          left: '5%',
          top: '15%',
        }}
        animate={{
          x: ['0vw', '40vw'],
          y: ['0vh', '25vh'],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatDelay: 10,
          ease: 'easeOut',
        }}
      />
      
      <motion.div
        className="absolute w-1 h-1 rounded-full bg-white"
        style={{ 
          boxShadow: '0 0 4px 2px rgba(255, 255, 255, 0.8), -20px 0 15px 1px rgba(255, 255, 255, 0.3)',
          right: '20%',
          top: '30%',
        }}
        animate={{
          x: ['0vw', '-35vw'],
          y: ['0vh', '20vh'],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          repeatDelay: 15,
          delay: 5,
          ease: 'easeOut',
        }}
      />
    </div>
  );
};

export default StarfieldBackground;
