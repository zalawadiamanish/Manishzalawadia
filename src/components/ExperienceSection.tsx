import { GraduationCap, Briefcase, Users, Target, BookOpen } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";
import TimelineItem from "./TimelineItem";

const education = [
  {
    degree: "Master of Engineering",
    field: "Computer Engineering",
    institution: "",
    year: "",
  },
  {
    degree: "Bachelor of Engineering",
    field: "Computer Science",
    institution: "",
    year: "",
  },
  {
    degree: "Diploma",
    field: "Computer Engineering",
    institution: "",
    year: "",
  },
];

const experience = [
  {
    role: "Assistant Professor",
    institution: "Nirmala Memorial Foundation College of Commerce & Science",
    duration: "2021 – Present",
    totalYears: "5 Years",
    departments: [
      "BSc Information Technology",
      "BSc Computer Science",
      "BSc Data Science",
    ],
  },
];

const impactStats = [
  { icon: Users, value: "1000+", label: "Students trained to think in systems" },
  { icon: BookOpen, value: "15+", label: "Core subjects taught with depth" },
  { icon: Target, value: "100%", label: "Focus on fundamentals over trends" },
];

const teachingPhilosophy = [
  "Every concept connects to real-world security implications",
  "Hands-on labs that mirror industry challenges",
  "Building mental models, not memorizing syntax",
  "From microprocessors to cloud — understanding the full stack",
];

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Animate the timeline line based on scroll
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.5], ["0%", "100%"]);

  return (
    <section id="experience" className="section-padding relative" ref={sectionRef}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] bg-gradient-radial from-amber-500/2 to-transparent rounded-full" />
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <span className="text-amber-500 font-medium text-xs sm:text-sm uppercase tracking-wider">
              Impact & Journey
            </span>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-heading font-bold mt-2 mb-3 sm:mb-4">
              Education & <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-gradient-to-r from-primary to-amber-500 mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        {/* Impact Stats - Prominent */}
        <ScrollReveal>
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass-card rounded-xl p-5 sm:p-6 text-center hover-glow border-t-4 border-amber-500/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 text-amber-500 mx-auto mb-3" />
                <div className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <p className="text-sm sm:text-base text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          {/* Education Timeline */}
          <div>
            <ScrollReveal direction="left">
              <div className="flex items-center gap-2.5 sm:gap-3 mb-6 sm:mb-8">
                <motion.div 
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-heading font-semibold text-foreground">
                  Education
                </h3>
              </div>
            </ScrollReveal>

            <div className="relative">
              {/* Animated Timeline Line */}
              <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-muted/30" />
              <motion.div 
                className="absolute left-4 sm:left-6 top-0 w-px bg-gradient-to-b from-primary via-amber-500 to-primary"
                style={{ height: lineHeight }}
              />

              <div className="space-y-4 sm:space-y-6">
                {education.map((edu, index) => (
                  <TimelineItem 
                    key={edu.degree} 
                    direction="left" 
                    index={index}
                    dotColor="border-primary"
                  >
                    <motion.div 
                      className="glass-card rounded-lg sm:rounded-xl p-4 sm:p-5 hover-glow"
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 20px 40px -15px hsl(var(--primary) / 0.2)"
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <h4 className="text-base sm:text-lg font-heading font-semibold text-foreground">
                        {edu.degree}
                      </h4>
                      <p className="text-primary font-medium text-sm sm:text-base">{edu.field}</p>
                    </motion.div>
                  </TimelineItem>
                ))}
              </div>
            </div>
          </div>

          {/* Experience & Philosophy */}
          <div>
            <ScrollReveal direction="right">
              <div className="flex items-center gap-2.5 sm:gap-3 mb-6 sm:mb-8">
                <motion.div 
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-amber-500/15 flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500" />
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-heading font-semibold text-foreground">
                  Experience
                </h3>
              </div>
            </ScrollReveal>

            <div className="space-y-6">
              {experience.map((exp) => (
                <ScrollReveal key={exp.role}>
                  <motion.div 
                    className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-6 hover-glow border-l-4 border-amber-500/50"
                    whileHover={{ 
                      scale: 1.01,
                      boxShadow: "0 20px 40px -15px hsl(45 100% 50% / 0.15)"
                    }}
                  >
                    <div className="flex flex-wrap items-start sm:items-center justify-between gap-2 mb-3">
                      <h4 className="text-lg sm:text-xl font-heading font-semibold text-foreground">
                        {exp.role}
                      </h4>
                      <span className="px-3 py-1 rounded-full bg-amber-500/15 text-amber-500 text-sm font-medium">
                        {exp.totalYears}
                      </span>
                    </div>
                    <p className="text-primary font-medium text-sm sm:text-base mb-1">
                      {exp.institution}
                    </p>
                    <p className="text-muted-foreground text-sm mb-4">
                      {exp.duration}
                    </p>

                    {/* Departments */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.departments.map((dept) => (
                        <span
                          key={dept}
                          className="px-3 py-1 rounded-full bg-secondary text-muted-foreground text-xs sm:text-sm"
                        >
                          {dept}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}

              {/* Teaching Philosophy */}
              <ScrollReveal delay={0.2}>
                <div className="glass-card rounded-xl p-5 sm:p-6 border-l-4 border-primary/50">
                  <h4 className="text-lg font-heading font-semibold text-foreground mb-4">
                    My Teaching Philosophy
                  </h4>
                  <ul className="space-y-2">
                    {teachingPhilosophy.map((point, index) => (
                      <motion.li
                        key={point}
                        className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <span className="text-primary mt-1 flex-shrink-0">•</span>
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
