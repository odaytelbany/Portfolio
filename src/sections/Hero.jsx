import { ArrowRight } from "lucide-react";
import { Github, Instagram, Linkedin} from "lucide-react";
import Button from "../components/Button";
import AnimatedBorderButton from "../components/AnimatedBorderButton";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero Bg"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background"></div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20b2a6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* left col  */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer * Full Stack Developer
              </span>
            </div>
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting <span className="text-primary glow-text">digital</span>
                <br />
                experience with
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Oday Altelbani - a software engineer specializing in
                MERN full stack web development. I build scalable web
                applications with a focus on performance and user experience.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg">
                Contact Me <ArrowRight className="size-5" />
              </Button>
              <AnimatedBorderButton />
            </div>

            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow: </span>
              {[
                {icon: Github, href: "#"},
                {icon: Linkedin, href: "#"},
                {icon: Instagram, href: "#"},
              ].map((social, index) => (
                <a className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300" href={social.href} key={index}>{<social.icon className="size-5"/>}</a>
              ))
              
              }
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
