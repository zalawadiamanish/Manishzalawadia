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
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-radial from-primary/5 to-transparent opacity-50" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-2 mb-4">
              Know Who <span className="gradient-text">I Am</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Enthusiastic and dedicated{" "}
                <span className="text-foreground font-medium">
                  Assistant Professor
                </span>{" "}
                with over 5 years of teaching experience in Computer Science and
                Information Technology.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Passionate about{" "}
                <span className="text-primary">
                  simplifying complex technical concepts
                </span>{" "}
                and mentoring students across BSc IT, BSc CS, and BSc Data Science
                programs.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Strong academic background with hands-on expertise in{" "}
                <span className="text-foreground font-medium">
                  systems programming, microprocessors, computer networks
                </span>
                , and emerging technologies like machine learning.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="glass-card rounded-xl p-4 text-center hover-glow"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <stat.icon
                      size={24}
                      className="text-primary mx-auto mb-2"
                    />
                    <div className="text-2xl font-heading font-bold text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Visual Element */}
          <ScrollReveal direction="right">
            <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-10 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent opacity-10 rounded-full blur-2xl" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center">
                    <GraduationCap size={32} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-foreground">
                      Academic Excellence
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Committed to student success
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-muted-foreground">
                      BSc Information Technology
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-muted-foreground">
                      BSc Computer Science
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-muted-foreground">
                      BSc Data Science
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
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
