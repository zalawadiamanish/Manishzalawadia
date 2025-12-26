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
    // Generate stars
    const newStars: Star[] = Array.from({ length: 120 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.7 + 0.3,
      twinkleDuration: Math.random() * 3 + 2,
      twinkleDelay: Math.random() * 5,
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Dark gradient base */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
      
      {/* Subtle nebula effects */}
      <div 
        className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-[0.03]"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-[0.02]"
        style={{
          background: 'radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-foreground"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [star.opacity * 0.3, star.opacity, star.opacity * 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: star.twinkleDuration,
            delay: star.twinkleDelay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Larger glowing stars */}
      <motion.div
        className="absolute top-[15%] left-[20%] w-2 h-2 rounded-full bg-foreground"
        style={{ boxShadow: '0 0 10px 2px hsl(var(--foreground) / 0.5)' }}
        animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.3, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-[30%] right-[15%] w-2.5 h-2.5 rounded-full bg-foreground"
        style={{ boxShadow: '0 0 12px 3px hsl(var(--foreground) / 0.4)' }}
        animate={{ opacity: [0.3, 0.9, 0.3], scale: [1, 1.4, 1] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />
      <motion.div
        className="absolute bottom-[25%] left-[30%] w-1.5 h-1.5 rounded-full bg-foreground"
        style={{ boxShadow: '0 0 8px 2px hsl(var(--foreground) / 0.6)' }}
        animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.5, 1] }}
        transition={{ duration: 3, repeat: Infinity, delay: 2 }}
      />
      <motion.div
        className="absolute top-[60%] right-[25%] w-2 h-2 rounded-full bg-foreground"
        style={{ boxShadow: '0 0 10px 2px hsl(var(--foreground) / 0.5)' }}
        animate={{ opacity: [0.4, 0.95, 0.4], scale: [1, 1.3, 1] }}
        transition={{ duration: 4.5, repeat: Infinity, delay: 0.5 }}
      />
      <motion.div
        className="absolute bottom-[40%] left-[60%] w-1.5 h-1.5 rounded-full bg-foreground"
        style={{ boxShadow: '0 0 8px 2px hsl(var(--foreground) / 0.5)' }}
        animate={{ opacity: [0.35, 0.85, 0.35], scale: [1, 1.4, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, delay: 1.5 }}
      />

      {/* Shooting star effect */}
      <motion.div
        className="absolute w-1 h-1 rounded-full bg-foreground"
        style={{ 
          boxShadow: '0 0 6px 2px hsl(var(--foreground) / 0.8)',
          left: '10%',
          top: '10%',
        }}
        animate={{
          x: ['0vw', '30vw'],
          y: ['0vh', '20vh'],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 8,
          ease: 'easeOut',
        }}
      />
    </div>
  );
};

export default StarfieldBackground;
