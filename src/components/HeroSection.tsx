import { BookOpen, Brain, Sparkles, ChevronDown, Youtube, Github, Linkedin, Mail, Twitter } from "lucide-react";
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
          {/* Avatar with enhanced glow effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative group"
          >
            {/* Outer pulsing glow */}
            <motion.div 
              className="absolute -inset-4 sm:-inset-6 rounded-full bg-gradient-to-r from-primary/30 via-amber-500/40 to-primary/30 blur-2xl"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.4, 0.7, 0.4]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Inner rotating glow ring */}
            <motion.div 
              className="absolute -inset-1 sm:-inset-2 rounded-full bg-gradient-to-r from-primary via-amber-500 via-50% to-primary opacity-60 blur-md"
              animate={{ rotate: 360 }}
              transition={{ 
                duration: 8, 
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            {/* Secondary glow layer */}
            <motion.div 
              className="absolute -inset-2 sm:-inset-3 rounded-full bg-gradient-to-tr from-amber-400/20 via-transparent to-primary/20 blur-xl"
              animate={{ 
                opacity: [0.3, 0.6, 0.3],
                scale: [0.98, 1.02, 0.98]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
            
            {/* Main photo container with gradient border */}
            <motion.div 
              className="relative w-36 h-36 xs:w-44 xs:h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full bg-gradient-to-r from-primary via-amber-500 to-primary p-[4px] sm:p-[5px]"
              animate={{ 
                y: [0, -8, 0]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-background shadow-2xl">
                <motion.img 
                  src={profilePhoto} 
                  alt="Manish Zalawadia"
                  className="w-full h-full object-cover object-top transition-transform duration-500"
                  whileHover={{ scale: 1.05 }}
                />
              </div>
            </motion.div>
            
            {/* Verified badge with glow */}
            <motion.div 
              className="absolute -bottom-1 -right-1 sm:bottom-0 sm:right-0 w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-r from-amber-500 to-amber-400 rounded-full flex items-center justify-center shadow-lg"
              animate={{ 
                scale: [1, 1.15, 1],
                boxShadow: [
                  "0 0 20px rgba(245, 158, 11, 0.4)",
                  "0 0 30px rgba(245, 158, 11, 0.6)",
                  "0 0 20px rgba(245, 158, 11, 0.4)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-background text-xs sm:text-sm font-bold">✓</span>
            </motion.div>
            
            {/* Sparkle particles around photo */}
            <motion.div
              className="absolute top-2 -right-2 w-2 h-2 bg-amber-400 rounded-full"
              animate={{ 
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5],
                y: [-5, -15, -5]
              }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0 }}
            />
            <motion.div
              className="absolute -top-1 left-4 w-1.5 h-1.5 bg-primary rounded-full"
              animate={{ 
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5],
                y: [-3, -12, -3]
              }}
              transition={{ duration: 2.8, repeat: Infinity, delay: 0.5 }}
            />
            <motion.div
              className="absolute bottom-4 -left-2 w-2 h-2 bg-amber-300 rounded-full"
              animate={{ 
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5],
                x: [-5, -12, -5]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            />
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

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="flex flex-col items-center gap-3"
          >
            <div className="flex items-center gap-3 sm:gap-4">
              {[
                { icon: Youtube, href: "https://youtube.com/@manishzalawadia?si=ekpn9crTLhmGxF4q", label: "YouTube", hoverColor: "hover:text-red-500 hover:bg-red-500/10" },
                { icon: Github, href: "https://github.com/zalawadiamanish", label: "GitHub", hoverColor: "hover:text-primary hover:bg-primary/10" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/manish-zalawadia-46128a3a1", label: "LinkedIn", hoverColor: "hover:text-blue-500 hover:bg-blue-500/10" },
                { icon: Twitter, href: "https://x.com/zalawadiamanish", label: "Twitter", hoverColor: "hover:text-sky-500 hover:bg-sky-500/10" },
                { icon: Mail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=zalawadiamanish@gmail.com", label: "Email", hoverColor: "hover:text-primary hover:bg-primary/10" },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-secondary/80 backdrop-blur-sm border border-border/50 flex items-center justify-center text-muted-foreground transition-all ${social.hoverColor}`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  title={social.label}
                >
                  <social.icon size={18} className="sm:w-5 sm:h-5" />
                </motion.a>
              ))}
            </div>
            <div className="flex flex-col items-center gap-1 text-xs text-muted-foreground">
              <a 
                href="https://youtube.com/@manishzalawadia?si=ekpn9crTLhmGxF4q" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-red-500 transition-colors"
              >
                <Youtube size={12} />
                <span>The Binary Professor</span>
              </a>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=zalawadiamanish@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-primary transition-colors"
              >
                <Mail size={12} />
                <span>zalawadiamanish@gmail.com</span>
              </a>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
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
