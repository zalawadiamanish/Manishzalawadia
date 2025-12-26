import { motion } from "framer-motion";

const FixedEmail = () => {
  return (
    <motion.div
      className="fixed left-4 md:left-6 bottom-0 z-40 hidden md:flex flex-col items-center gap-4"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      {/* Email text - rotated vertically */}
      <a
        href="mailto:manish.zalawadia@email.com"
        className="text-muted-foreground hover:text-primary transition-colors duration-300 text-xs tracking-widest"
        style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
        }}
      >
        manish.zalawadia@email.com
      </a>
      
      {/* Vertical line */}
      <motion.div
        className="w-px h-24 bg-gradient-to-b from-primary/50 to-muted-foreground/30"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        style={{ originY: 0 }}
      />
    </motion.div>
  );
};

export default FixedEmail;
