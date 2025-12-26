import { GraduationCap, Users, BookOpen, Award, Lightbulb, Target, Zap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const stats = [
  { icon: Users, value: "1000+", label: "Students Trained" },
  { icon: BookOpen, value: "15+", label: "Subjects Taught" },
  { icon: GraduationCap, value: "10+", label: "Years Teaching" },
  { icon: Award, value: "3", label: "Departments" },
];

const beliefs = [
  {
    icon: Target,
    title: "Fundamentals Over Frameworks",
    description: "Strong engineers are built on understanding how systems work, not just how to use them.",
  },
  {
    icon: Zap,
    title: "Security-First Thinking",
    description: "Every system I teach includes understanding how it can fail, be exploited, and secured.",
  },
  {
    icon: Lightbulb,
    title: "Clarity Through Complexity",
    description: "From microprocessors to networks — I simplify without oversimplifying.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-radial from-amber-500/5 to-transparent opacity-50" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <span className="text-amber-500 font-medium text-xs sm:text-sm uppercase tracking-wider">
              My Philosophy
            </span>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-heading font-bold mt-2 mb-3 sm:mb-4">
              How I Think About <span className="gradient-text">Computer Science</span>
            </h2>
            <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-gradient-to-r from-primary to-amber-500 mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        {/* Core Beliefs */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {beliefs.map((belief, index) => (
            <ScrollReveal key={belief.title} delay={index * 0.1}>
              <div className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 hover-glow h-full border-l-4 border-amber-500/50">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-amber-500/15 flex items-center justify-center mb-4">
                  <belief.icon className="w-6 h-6 sm:w-7 sm:h-7 text-amber-500" />
                </div>
                <h3 className="text-lg sm:text-xl font-heading font-semibold text-foreground mb-2">
                  {belief.title}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {belief.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
          {/* About Text */}
          <ScrollReveal direction="left">
            <div className="space-y-5 sm:space-y-6">
              <div className="glass-card rounded-xl p-5 sm:p-6 border-l-4 border-primary/50">
                <h3 className="text-lg sm:text-xl font-heading font-semibold text-foreground mb-3">
                  What Most Students Get Wrong
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  They chase trends and tools without understanding the fundamentals. When the tool changes, 
                  they're lost. I teach the <span className="text-primary font-medium">principles</span> — so my students can adapt to any technology.
                </p>
              </div>
              
              <div className="glass-card rounded-xl p-5 sm:p-6 border-l-4 border-amber-500/50">
                <h3 className="text-lg sm:text-xl font-heading font-semibold text-foreground mb-3">
                  How I Teach Differently
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  I focus on <span className="text-amber-500 font-medium">how systems behave, fail, and secure themselves</span> — 
                  from microprocessors to networks. Theory meets practice in every session.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="glass-card rounded-lg sm:rounded-xl p-3 sm:p-4 text-center hover-glow"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <stat.icon
                      size={20}
                      className="text-primary mx-auto mb-1.5 sm:mb-2 sm:w-6 sm:h-6"
                    />
                    <div className="text-xl sm:text-2xl font-heading font-bold text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-[10px] xs:text-xs text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Visual Element */}
          <ScrollReveal direction="right">
            <div className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 relative overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-amber-500 opacity-5 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-20 sm:w-24 h-20 sm:h-24 bg-primary opacity-5 rounded-full blur-2xl" />

              <div className="relative z-10 space-y-5 sm:space-y-6">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl bg-gradient-to-r from-primary to-amber-500 flex items-center justify-center flex-shrink-0">
                    <GraduationCap size={24} className="text-primary-foreground sm:w-7 sm:h-7 md:w-8 md:h-8" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-heading font-semibold text-foreground">
                      Academic Excellence
                    </h3>
                    <p className="text-muted-foreground text-xs sm:text-sm">
                      Building engineers who think in systems
                    </p>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Programs I Teach</p>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-sm sm:text-base">
                      BSc Information Technology
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm sm:text-base">
                      BSc Computer Science
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-sm sm:text-base">
                      BSc Data Science
                    </span>
                  </div>
                </div>

                <div className="pt-3 sm:pt-4 border-t border-border">
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Teaching 1st to 3rd year students across all 6 semesters
                    with theory & practical sessions.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
