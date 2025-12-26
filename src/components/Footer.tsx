import { Github, Mail, Heart, Linkedin, BookOpen, GraduationCap, Youtube } from "lucide-react";
import { motion } from "framer-motion";

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const quickStats = [
  { icon: GraduationCap, value: "M.E.", label: "Degree" },
  { icon: BookOpen, value: "15+", label: "Subjects" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      {/* Decorative top border with gradient */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative bg-card/80 backdrop-blur-sm">
        {/* Main Footer Content */}
        <div className="section-container py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 lg:gap-8">
            
            {/* Logo & Bio Section */}
            <div className="md:col-span-5 lg:col-span-4 text-center md:text-left">
              <motion.a
                href="#home"
                className="inline-flex items-center gap-3 mb-4 group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                  <span className="text-xl font-heading font-bold text-primary-foreground">
                    MZ
                  </span>
                </div>
                <div className="text-left">
                  <span className="text-lg font-heading font-bold text-foreground block leading-tight">
                    Manish Zalawadia
                  </span>
                  <span className="text-xs text-primary font-medium">
                    Assistant Professor
                  </span>
                </div>
              </motion.a>
              
              <p className="text-sm text-muted-foreground max-w-sm mx-auto md:mx-0 leading-relaxed mb-6">
                Passionate educator dedicated to shaping future tech leaders in 
                Computer Science, IT & Data Science. Transforming complex concepts 
                into accessible knowledge.
              </p>

              {/* Quick Stats */}
              <div className="flex items-center justify-center md:justify-start gap-4">
                {quickStats.map((stat) => (
                  <div 
                    key={stat.label}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/50 border border-border/50"
                  >
                    <stat.icon className="w-4 h-4 text-primary" />
                    <div className="text-left">
                      <span className="text-sm font-bold text-foreground block leading-none">
                        {stat.value}
                      </span>
                      <span className="text-[10px] text-muted-foreground">
                        {stat.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Links */}
            <div className="md:col-span-4 lg:col-span-5">
              <h4 className="text-sm font-heading font-semibold text-foreground mb-4 text-center">
                Quick Navigation
              </h4>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
                {footerLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors relative group"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </motion.a>
                ))}
              </div>
              
              {/* Academic Quote */}
              <div className="mt-8 text-center">
                <blockquote className="text-xs italic text-muted-foreground/80 max-w-xs mx-auto">
                  "Education is not the filling of a pail, but the lighting of a fire."
                  <footer className="mt-1 text-[10px] text-muted-foreground/60 not-italic">
                    — W.B. Yeats
                  </footer>
                </blockquote>
              </div>
            </div>

            {/* Connect Section */}
            <div className="md:col-span-3 text-center md:text-right">
              <h4 className="text-sm font-heading font-semibold text-foreground mb-4">
                Let's Connect
              </h4>
              
              <div className="flex items-center justify-center md:justify-end gap-3 mb-6">
                <motion.a
                  href="https://youtube.com/@manishzalawadia?si=ekpn9crTLhmGxF4q"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-secondary hover:bg-red-500/15 border border-border/50 flex items-center justify-center transition-all group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  title="The Binary Professor"
                >
                  <Youtube size={18} className="text-muted-foreground group-hover:text-red-500 transition-colors" />
                </motion.a>
                <motion.a
                  href="https://github.com/zalawadiamanish"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-secondary hover:bg-primary/15 border border-border/50 flex items-center justify-center transition-all group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/zalawadiamanish"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-secondary hover:bg-primary/15 border border-border/50 flex items-center justify-center transition-all group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.a>
                <motion.a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=zalawadiamanish@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-secondary hover:bg-primary/15 border border-border/50 flex items-center justify-center transition-all group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.a>
              </div>
              
              {/* YouTube Channel CTA */}
              <a
                href="https://youtube.com/@manishzalawadia?si=ekpn9crTLhmGxF4q"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-red-500 transition-colors mb-2"
              >
                <Youtube size={12} />
                The Binary Professor
              </a>

              {/* Email CTA */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=zalawadiamanish@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={12} />
                zalawadiamanish@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50">
          <div className="section-container py-4 sm:py-5">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              {/* Copyright */}
              <p className="text-xs text-muted-foreground flex items-center gap-1.5 flex-wrap justify-center">
                <span>© {currentYear} Manish Zalawadia.</span>
                <span className="hidden xs:inline">•</span>
                <span className="flex items-center gap-1">
                  Crafted with
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <Heart size={12} className="text-primary fill-primary" />
                  </motion.span>
                  for education
                </span>
              </p>
              
              {/* Status indicator */}
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs text-muted-foreground">
                  Open for collaborations
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
