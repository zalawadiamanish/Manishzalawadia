import { BookOpen, Brain, Sparkles, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import InteractiveBackground from "./InteractiveBackground";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Enhanced Interactive Background */}
      <InteractiveBackground />

      <div className="section-container relative z-10 pt-16 sm:pt-20">
        <div className="flex flex-col items-center justify-center space-y-6 sm:space-y-8 text-center">
          {/* Avatar with glow effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Glowing border effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-amber-500 to-primary animate-spin-slow opacity-75 blur-sm" style={{ animationDuration: '8s' }} />
            <div className="relative w-32 h-32 xs:w-40 xs:h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full bg-gradient-to-r from-primary via-amber-500 to-primary p-[4px] animate-float">
              <div className="w-full h-full rounded-full overflow-hidden bg-background">
                <img 
                  src={profilePhoto} 
                  alt="Manish Zalawadia"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            <motion.div 
              className="absolute -bottom-1 -right-1 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-amber-500 rounded-full flex items-center justify-center shadow-glow"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-background text-xs font-bold">✓</span>
            </motion.div>
          </motion.div>

          {/* Bold Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-3 sm:space-y-4 md:space-y-5"
          >
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight max-w-4xl">
              <span className="text-foreground">I Teach Computers How to Think —</span>
              <br />
              <span className="gradient-text">and Students How to Build Them</span>
            </h1>
            
            {/* Sub-headline */}
            <motion.p 
              className="text-base xs:text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span className="text-primary">Assistant Professor</span> | Systems & Networks | Security-Focused Educator
            </motion.p>
            
            <motion.p 
              className="text-sm xs:text-base sm:text-lg text-muted-foreground max-w-xl md:max-w-2xl mx-auto px-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Helping students turn fundamentals into real-world engineering
            </motion.p>
          </motion.div>

          {/* Differentiators */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-3xl"
          >
            {[
              { icon: Brain, text: "Systems Thinking" },
              { icon: Sparkles, text: "Fundamentals First" },
              { icon: BookOpen, text: "Security Mindset" },
            ].map((item, index) => (
              <motion.div
                key={item.text}
                className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm border border-amber-500/20 text-xs sm:text-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <item.icon size={14} className="text-amber-500 flex-shrink-0 sm:w-4 sm:h-4" />
                <span className="text-foreground font-medium">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-col xs:flex-row gap-3 sm:gap-4 pt-2"
          >
            <Button
              variant="hero"
              size="lg"
              className="group"
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Brain size={18} className="mr-2" />
              <span>Explore My Thinking</span>
              <motion.span
                className="ml-2"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </Button>
            <Button
              variant="heroOutline"
              size="lg"
              className="group"
              onClick={() =>
                document
                  .getElementById("skills")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <BookOpen size={16} className="mr-2 group-hover:scale-110 transition-transform" />
              See How I Teach Systems
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-xs text-muted-foreground/60 uppercase tracking-widest">Scroll</span>
              <ChevronDown size={20} className="text-primary/60" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
