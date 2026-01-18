import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable and clean code that stands over the time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing speed and delivering the fastest user experience possible.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Stay ahead with the latest technologies and best practice.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-8">
              <div className="animate-fade-in">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                  About Me
                </span>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I’m a software engineer focused on building reliable, high-quality web applications using modern frontend technologies. I specialize in MERN stack, delivering products that balance performance, scalability, and thoughtful user experience.
              </p>
              <p>
                My work ranges from simple landing pages to complex full stack applications, with a strong emphasis on clean architecture and long-term maintainability.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "Simplicity in design enables reliability in systems."
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-6 animate-fade-in "
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="size-6 text-primary"/>
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
