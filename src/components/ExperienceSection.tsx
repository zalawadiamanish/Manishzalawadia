import { GraduationCap, Briefcase } from "lucide-react";

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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/3 to-transparent rounded-full" />
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Journey
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-2 mb-4">
            Education & <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <GraduationCap size={24} className="text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-semibold text-foreground">
                Education
              </h3>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={edu.degree}
                    className="relative pl-16 animate-fade-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-4 top-2 w-4 h-4 rounded-full bg-card border-2 border-primary" />

                    <div className="glass-card rounded-xl p-5 hover-glow">
                      <h4 className="text-lg font-heading font-semibold text-foreground">
                        {edu.degree}
                      </h4>
                      <p className="text-primary font-medium">{edu.field}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                <Briefcase size={24} className="text-accent" />
              </div>
              <h3 className="text-2xl font-heading font-semibold text-foreground">
                Experience
              </h3>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-primary to-transparent" />

              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div
                    key={exp.role}
                    className="relative pl-16 animate-fade-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-4 top-2 w-4 h-4 rounded-full bg-card border-2 border-accent" />

                    <div className="glass-card rounded-xl p-5 hover-glow">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <h4 className="text-lg font-heading font-semibold text-foreground">
                          {exp.role}
                        </h4>
                        <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-medium">
                          {exp.totalYears}
                        </span>
                      </div>
                      <p className="text-primary font-medium text-sm mb-2">
                        {exp.institution}
                      </p>
                      <p className="text-muted-foreground text-sm mb-4">
                        {exp.duration}
                      </p>

                      {/* Departments */}
                      <div className="mb-4">
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                          Departments
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.departments.map((dept) => (
                            <span
                              key={dept}
                              className="px-3 py-1 rounded-full bg-secondary text-muted-foreground text-xs"
                            >
                              {dept}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Responsibilities */}
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                          Responsibilities
                        </p>
                        <ul className="space-y-1">
                          {exp.responsibilities.map((resp) => (
                            <li
                              key={resp}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <span className="text-primary mt-1">•</span>
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
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
