import { GraduationCap, Users, BookOpen, Award } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const stats = [
  { icon: GraduationCap, value: "5+", label: "Years Teaching" },
  { icon: Users, value: "1000+", label: "Students Mentored" },
  { icon: BookOpen, value: "15+", label: "Subjects Taught" },
  { icon: Award, value: "3", label: "Departments" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-radial from-primary/3 to-transparent opacity-50" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <span className="text-primary font-medium text-xs sm:text-sm uppercase tracking-wider">
              About Me
            </span>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-heading font-bold mt-2 mb-3 sm:mb-4">
              Know Who <span className="gradient-text">I Am</span>
            </h2>
            <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
          {/* About Text */}
          <ScrollReveal direction="left">
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Enthusiastic and dedicated{" "}
                <span className="text-foreground font-medium">
                  Assistant Professor
                </span>{" "}
                with over 5 years of teaching experience in Computer Science and
                Information Technology.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Passionate about{" "}
                <span className="text-primary">
                  simplifying complex technical concepts
                </span>{" "}
                and mentoring students across BSc IT, BSc CS, and BSc Data Science
                programs.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Strong academic background with hands-on expertise in{" "}
                <span className="text-foreground font-medium">
                  systems programming, microprocessors, computer networks
                </span>
                , and emerging technologies like machine learning.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4 sm:pt-6">
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
              <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-primary opacity-5 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-20 sm:w-24 h-20 sm:h-24 bg-accent opacity-5 rounded-full blur-2xl" />

              <div className="relative z-10 space-y-5 sm:space-y-6">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <GraduationCap size={24} className="text-primary-foreground sm:w-7 sm:h-7 md:w-8 md:h-8" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-heading font-semibold text-foreground">
                      Academic Excellence
                    </h3>
                    <p className="text-muted-foreground text-xs sm:text-sm">
                      Committed to student success
                    </p>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-sm sm:text-base">
                      BSc Information Technology
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
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
