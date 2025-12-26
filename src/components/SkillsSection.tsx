import { Code, Cpu, BarChart3, Users, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const skillCategories = [
  {
    icon: Cpu,
    title: "Computer Networks",
    howIUseIt: "Teach packet-level thinking, covert channels, and real security failures.",
    whyItMatters: "Understanding network behavior is the foundation of modern security.",
    misconception: "Students think networking is just IP addresses — it's actually about understanding data flow and vulnerabilities.",
    skills: ["TCP/IP Deep Dive", "Security Concepts", "Covert Channels", "Protocol Analysis"],
    color: "amber",
  },
  {
    icon: Cpu,
    title: "Microprocessors & Architecture",
    howIUseIt: "From 8086 architecture to instruction-level reasoning and system design.",
    whyItMatters: "Every abstraction layer you use is built on this foundation.",
    misconception: "Modern developers skip hardware understanding — but it's key to writing efficient, secure code.",
    skills: ["8085/8086", "8051 Microcontroller", "Assembly Language", "System Architecture"],
    color: "primary",
  },
  {
    icon: Code,
    title: "Operating Systems",
    howIUseIt: "Process management, memory allocation, and understanding system-level security.",
    whyItMatters: "The OS is where software meets hardware — and where most vulnerabilities live.",
    misconception: "Students treat the OS as a black box. I teach them to see inside it.",
    skills: ["Process Management", "Memory Systems", "File Systems", "System Calls"],
    color: "amber",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    howIUseIt: "Machine learning fundamentals with Python, focusing on understanding over libraries.",
    whyItMatters: "Data-driven decisions require understanding the math, not just the code.",
    misconception: "ML isn't magic — it's statistics and linear algebra applied carefully.",
    skills: ["Python ML", "Data Analysis", "Power BI", "Statistical Thinking"],
    color: "primary",
  },
  {
    icon: Users,
    title: "Teaching & Mentorship",
    howIUseIt: "Curriculum design that builds from fundamentals to real-world application.",
    whyItMatters: "1000+ students trained to think in systems, not just follow tutorials.",
    misconception: "Good teaching isn't about covering topics — it's about building mental models.",
    skills: ["Curriculum Design", "Lab Instruction", "Student Mentorship", "Academic Evaluation"],
    color: "amber",
  },
  {
    icon: Code,
    title: "Programming Languages",
    howIUseIt: "C/C++ for systems thinking, Python for rapid prototyping and analysis.",
    whyItMatters: "Language is a tool — the thinking behind it is what matters.",
    misconception: "Syntax is easy. Understanding memory, pointers, and system interaction is the real skill.",
    skills: ["C", "C++", "Python", "Systems Programming"],
    color: "primary",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding relative bg-card/30">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-0 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-amber-500/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <span className="text-amber-500 font-medium text-xs sm:text-sm uppercase tracking-wider">
              Proof-Driven Expertise
            </span>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-heading font-bold mt-2 mb-3 sm:mb-4">
              What I Teach & <span className="gradient-text">Why It Matters</span>
            </h2>
            <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-gradient-to-r from-primary to-amber-500 mx-auto rounded-full" />
            <p className="text-muted-foreground text-sm sm:text-base mt-4 max-w-2xl mx-auto">
              Not just skills — context, application, and the misconceptions I fix.
            </p>
          </div>
        </ScrollReveal>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories.map((category, index) => (
            <ScrollReveal key={category.title} delay={index * 0.08}>
              <div className={`glass-card rounded-xl sm:rounded-2xl p-5 sm:p-6 hover-glow group h-full border-l-4 ${
                category.color === "amber" ? "border-amber-500/50" : "border-primary/50"
              }`}>
                {/* Card Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 flex-shrink-0 ${
                      category.color === "amber"
                        ? "bg-amber-500/15 text-amber-500"
                        : "bg-primary/15 text-primary"
                    }`}
                  >
                    <category.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-heading font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* How I Use It */}
                <div className="mb-4">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">How I teach this</p>
                  <p className="text-sm sm:text-base text-foreground leading-relaxed">
                    {category.howIUseIt}
                  </p>
                </div>

                {/* Misconception I Fix */}
                <div className="mb-4 p-3 rounded-lg bg-secondary/50 border border-border/50">
                  <p className="text-xs text-amber-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                    <ArrowRight size={12} /> Misconception I fix
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground italic">
                    "{category.misconception}"
                  </p>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium transition-all hover:scale-105 ${
                        category.color === "amber"
                          ? "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20"
                          : "bg-primary/10 text-primary border border-primary/20"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
