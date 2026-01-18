const experiences = [
  {
    period: "SEP 2025 - Present",
    role: "Software Engineer Volunteer",
    company: "UNRWA",
    description:
      "Assisted clinic staff by resolving hardware, software, and network issues while improving workflows through documentation, recommendations, and support for data entry department.",
    technologies: ["MS Office", "Networking", "Hardware", "Software"],
    current: true,
  },
  {
    period: "APR 2024 - NOV 2025",
    role: "Software Engineer Intern",
    company: "Altahreer",
    description:
      "Redesigned and rebuilt the website using Next.js and Sanity.io, optimized product images to match the site’s theme, integrated them into the system, and achieved a 95% internship evaluation score.",
    technologies: ["Sanity Io", "Typescript", "Next.js", "Tailwind Css"],
    current: false,
  },
  {
    period: "MAY 2023 - JUL 2023",
    role: "Frontend Developer",
    company: "Merkato Store",
    description:
      "Led the frontend development of an e-commerce website built from scratch with React.js, integrating APIs to handle 400+ products and the full checkout flow, delivering the project one month ahead of schedule and identifying three backend response issues.",
    technologies: ["React.js", "Redux", "Axios"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* bg glows  */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Experience that{" "}
            <span className="text-white font-serif font-normal italic">
              speaks volumes.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A timeline of my professional growth in building scalable,
            user-friendly applications across various industries.
          </p>
        </div>

        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in "
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="absolute size-3 left-0 md:left-1/2 top-0 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                    {exp.current && <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"/>}
                </div>

                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground "
                          key={techIdx}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
