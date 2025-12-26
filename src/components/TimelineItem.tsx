import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

interface TimelineItemProps {
  children: React.ReactNode;
  direction: 'left' | 'right';
  index: number;
  dotColor?: string;
}

const TimelineItem = ({ children, direction, index, dotColor = 'border-primary' }: TimelineItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { 
    margin: "-100px 0px -100px 0px",
    once: false 
  });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Transform scroll progress to x position
  const xRange = direction === 'left' ? [-150, 0, 0, -150] : [150, 0, 0, 150];
  const opacityRange = [0, 1, 1, 0];
  
  const x = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], xRange);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], opacityRange);

  return (
    <motion.div
      ref={ref}
      className="relative pl-10 sm:pl-16"
      style={{ 
        x,
        opacity,
      }}
    >
      {/* Timeline Dot - stays in place */}
      <motion.div 
        className={`absolute left-2.5 sm:left-4 top-2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-card border-2 ${dotColor}`}
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 20,
          delay: index * 0.1 
        }}
      />
      
      {/* Pulse effect on dot when in view */}
      <motion.div 
        className={`absolute left-2.5 sm:left-4 top-2 w-3 h-3 sm:w-4 sm:h-4 rounded-full ${dotColor.replace('border-', 'bg-')}/20`}
        animate={isInView ? {
          scale: [1, 2, 1],
          opacity: [0.5, 0, 0.5],
        } : {}}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {children}
    </motion.div>
  );
};

export default TimelineItem;
