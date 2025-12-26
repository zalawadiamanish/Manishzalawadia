import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  
  // Smooth spring animation for the progress
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Top progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 z-50 origin-left"
        style={{
          scaleX,
          background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))",
          boxShadow: "0 0 10px hsl(var(--primary) / 0.5), 0 0 20px hsl(var(--primary) / 0.3)",
        }}
      />
      
      {/* Vertical scroll indicator on right side */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-2">
        {/* Track */}
        <div className="w-0.5 h-32 bg-muted/20 rounded-full overflow-hidden relative">
          <motion.div
            className="absolute top-0 left-0 w-full rounded-full"
            style={{
              height: "100%",
              scaleY: scaleX,
              originY: 0,
              background: "linear-gradient(180deg, hsl(var(--primary)), hsl(var(--accent)))",
              boxShadow: "0 0 8px hsl(var(--primary) / 0.6)",
            }}
          />
        </div>
        
        {/* Scroll indicator dot */}
        <motion.div
          className="w-2 h-2 rounded-full"
          style={{
            backgroundColor: "hsl(var(--primary))",
            boxShadow: "0 0 10px hsl(var(--primary))",
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </>
  );
};

export default ScrollProgress;
