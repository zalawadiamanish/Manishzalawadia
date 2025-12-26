import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

interface FloatingShape {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  type: 'circle' | 'square' | 'triangle' | 'hexagon';
}

const InteractiveBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const [shapes, setShapes] = useState<FloatingShape[]>([]);

  // Generate initial particles and shapes
  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);

    const shapeTypes: ('circle' | 'square' | 'triangle' | 'hexagon')[] = ['circle', 'square', 'triangle', 'hexagon'];
    const newShapes: FloatingShape[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 60 + 40,
      rotation: Math.random() * 360,
      type: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
    }));
    setShapes(newShapes);
  }, []);

  // Track mouse position
  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth) * 100,
      y: (e.clientY / window.innerHeight) * 100,
    });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  const renderShape = (shape: FloatingShape) => {
    const baseClasses = "absolute opacity-[0.03] dark:opacity-[0.05]";
    
    switch (shape.type) {
      case 'circle':
        return (
          <div
            className={`${baseClasses} rounded-full bg-gradient-to-br from-primary to-accent`}
            style={{ width: shape.size, height: shape.size }}
          />
        );
      case 'square':
        return (
          <div
            className={`${baseClasses} bg-gradient-to-br from-accent to-primary rotate-45`}
            style={{ width: shape.size, height: shape.size }}
          />
        );
      case 'triangle':
        return (
          <div
            className={baseClasses}
            style={{
              width: 0,
              height: 0,
              borderLeft: `${shape.size / 2}px solid transparent`,
              borderRight: `${shape.size / 2}px solid transparent`,
              borderBottom: `${shape.size}px solid hsl(var(--primary) / 0.1)`,
            }}
          />
        );
      case 'hexagon':
        return (
          <div
            className={`${baseClasses} bg-gradient-to-br from-primary via-accent to-primary`}
            style={{
              width: shape.size,
              height: shape.size * 0.866,
              clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main gradient orbs that follow mouse slightly */}
      <motion.div
        className="absolute w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          x: mousePosition.x * 0.5 - 25,
          y: mousePosition.y * 0.5 - 25,
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 30 }}
      />
      
      <motion.div
        className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(var(--accent) / 0.06) 0%, transparent 70%)',
          filter: 'blur(80px)',
          right: 0,
          bottom: 0,
        }}
        animate={{
          x: -mousePosition.x * 0.3 + 15,
          y: -mousePosition.y * 0.3 + 15,
        }}
        transition={{ type: 'spring', stiffness: 30, damping: 20 }}
      />

      {/* Animated grid lines */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/20 dark:bg-primary/30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Floating geometric shapes */}
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [shape.rotation, shape.rotation + 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20 + shape.id * 2,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {renderShape(shape)}
        </motion.div>
      ))}

      {/* Glowing orb accents */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-2 h-2 md:w-3 md:h-3 rounded-full bg-primary shadow-[0_0_20px_hsl(var(--primary))]"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-2 h-2 md:w-3 md:h-3 rounded-full bg-accent shadow-[0_0_20px_hsl(var(--accent))]"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary shadow-[0_0_15px_hsl(var(--primary))]"
        animate={{
          scale: [1, 2, 1],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 2 }}
      />

      {/* Scan line effect */}
      <motion.div
        className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent"
        animate={{
          y: ['-100vh', '100vh'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 border-l-2 border-t-2 border-primary/10 rounded-tl-3xl" />
      <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 border-r-2 border-t-2 border-accent/10 rounded-tr-3xl" />
      <div className="absolute bottom-0 left-0 w-32 h-32 md:w-48 md:h-48 border-l-2 border-b-2 border-accent/10 rounded-bl-3xl" />
      <div className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 border-r-2 border-b-2 border-primary/10 rounded-br-3xl" />
    </div>
  );
};

export default InteractiveBackground;
