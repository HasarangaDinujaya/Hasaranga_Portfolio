import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import heroImage from "@assets/generated_images/Professional_workspace_hero_image_58785799.png";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-ring to-chart-1 bg-clip-text text-transparent">
                  John Doe
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Software Engineer
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                I build innovative web applications with clean code and modern technologies.
                Passionate about creating seamless user experiences and scalable solutions.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                onClick={() => scrollToSection("#projects")}
                size="lg"
                data-testid="button-view-projects"
              >
                View Projects
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("#contact")}
                data-testid="button-contact-me"
              >
                Contact Me
              </Button>
            </div>

            <div className="flex gap-3">
              <Button
                variant="ghost"
                size="icon"
                asChild
                data-testid="link-github"
              >
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                data-testid="link-linkedin"
              >
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                data-testid="link-email"
              >
                <a href="mailto:your.email@example.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={heroImage}
                alt="Professional workspace"
                className="w-full h-auto object-cover"
                data-testid="img-hero"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollToSection("#about")}
            className="animate-bounce"
            data-testid="button-scroll-down"
          >
            <ArrowDown className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
