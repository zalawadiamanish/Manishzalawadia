import { GraduationCap, Briefcase } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

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
    responsibilities: [
      "Teaching 1st to 3rd year students (All 6 semesters)",
      "Delivering theory & practical sessions",
      "Guiding academic projects",
      "Mentoring students for career growth",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] bg-gradient-radial from-primary/2 to-transparent rounded-full" />
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <span className="text-primary font-medium text-xs sm:text-sm uppercase tracking-wider">
              Journey
            </span>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-heading font-bold mt-2 mb-3 sm:mb-4">
              Education & <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          {/* Education Timeline */}
          <ScrollReveal direction="left">
            <div>
              <div className="flex items-center gap-2.5 sm:gap-3 mb-6 sm:mb-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-heading font-semibold text-foreground">
                  Education
                </h3>
              </div>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

                <div className="space-y-4 sm:space-y-6">
                  {education.map((edu, index) => (
                    <div
                      key={edu.degree}
                      className="relative pl-10 sm:pl-16"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {/* Timeline Dot */}
                      <div className="absolute left-2.5 sm:left-4 top-2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-card border-2 border-primary" />

                      <div className="glass-card rounded-lg sm:rounded-xl p-4 sm:p-5 hover-glow">
                        <h4 className="text-base sm:text-lg font-heading font-semibold text-foreground">
                          {edu.degree}
                        </h4>
                        <p className="text-primary font-medium text-sm sm:text-base">{edu.field}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Experience Timeline */}
          <ScrollReveal direction="right">
            <div>
              <div className="flex items-center gap-2.5 sm:gap-3 mb-6 sm:mb-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-accent/15 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                </div>
                <h3 className="text-xl sm:text-2xl font-heading font-semibold text-foreground">
                  Experience
                </h3>
              </div>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-primary to-transparent" />

                <div className="space-y-4 sm:space-y-6">
                  {experience.map((exp, index) => (
                    <div
                      key={exp.role}
                      className="relative pl-10 sm:pl-16"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {/* Timeline Dot */}
                      <div className="absolute left-2.5 sm:left-4 top-2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-card border-2 border-accent" />

                      <div className="glass-card rounded-lg sm:rounded-xl p-4 sm:p-5 hover-glow">
                        <div className="flex flex-wrap items-start sm:items-center justify-between gap-2 mb-2 sm:mb-3">
                          <h4 className="text-base sm:text-lg font-heading font-semibold text-foreground">
                            {exp.role}
                          </h4>
                          <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-accent/15 text-accent text-xs font-medium">
                            {exp.totalYears}
                          </span>
                        </div>
                        <p className="text-primary font-medium text-xs sm:text-sm mb-1 sm:mb-2 leading-relaxed">
                          {exp.institution}
                        </p>
                        <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4">
                          {exp.duration}
                        </p>

                        {/* Departments */}
                        <div className="mb-3 sm:mb-4">
                          <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider mb-1.5 sm:mb-2">
                            Departments
                          </p>
                          <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {exp.departments.map((dept) => (
                              <span
                                key={dept}
                                className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-secondary text-muted-foreground text-[10px] sm:text-xs"
                              >
                                {dept}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Responsibilities */}
                        <div>
                          <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider mb-1.5 sm:mb-2">
                            Responsibilities
                          </p>
                          <ul className="space-y-0.5 sm:space-y-1">
                            {exp.responsibilities.map((resp) => (
                              <li
                                key={resp}
                                className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground"
                              >
                                <span className="text-primary mt-0.5 flex-shrink-0">•</span>
                                {resp}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
