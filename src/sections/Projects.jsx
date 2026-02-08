import { ArrowUpRight, Github } from "lucide-react";
import AnimatedBorderButton from "../components/AnimatedBorderButton";

const projects = [
  {
    title: "Netflix Clone",
    description:
      "A full-stack Netflix clone with user authentication, movie browsing, and watchlist features.",
    image: "/projects/Netflix Clone.webp",
    tags: ["React", "Typescript", "NodeJS", "MongoDB", "Express"],
    link: "https://netflix-fullstack-clone-7l3x.onrender.com/",
    github: "https://github.com/odaytelbany/Netflix-Fullstack-Clone",
  },
  {
    title: "Kajwal",
    description:
      "A full-featured e-commerce solution with inventory management, payment processing, and analytics dashboard.",
    image: "/projects/Ecommerce.webp",
    tags: ["Next.js", "Stripe", "Sanity IO", "Tailwind"],
    link: "https://kajwal.vercel.app/",
    github: "https://github.com/odaytelbany/Kajwal-Ecommerce",
  },
  {
    title: "Chatty",
    description:
      "An AI-powered chat application that provides intelligent responses and context-aware conversations.",
    image: "/projects/Chatty App.webp",
    tags: ["React", "OpenAI", "Python", "FastAPI"],
    link: "https://fullstack-chat-app-au06.onrender.com",
    github: "https://github.com/odaytelbany/Fullstack_Chat_App",
  },
  {
    title: "Bookies",
    description:
      "A real-time collaborative book reading platform with chat and annotation features.",
    image: "/projects/BookStore.webp",
    tags: ["Next.js", "Express", "MongoDB", "tailwind"],
    link: "https://bookies-alpha.vercel.app",
    github: "https://github.com/odaytelbany/Book-Store",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* bg glows  */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that{" "}
            <span className="font-serif italic font-normal text-white">
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of projects showcasing my skills in building scalable,
            user-friendly applications across various industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass rounded-2xl overflow-hidden animate-fade-in row-span-1"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-40" />

                <div className="absolute inset-0 flex justify-center items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    target="_blank"
                  >
                    <ArrowUpRight className="size-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    target="_blank"
                  >
                    <Github className="size-5" />
                  </a>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="size-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                      key={idx}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects  */}
        <div className="mt-12 text-center animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            <a href="https://github.com/odaytelbany" target="_blank">View All Projects</a>
            <ArrowUpRight className="size-5"/>
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
