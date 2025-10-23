import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown, Download } from "lucide-react";
import heroImage from "@assets/generated_images/Professional_workspace_hero_image_58785799.png";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadCV = () => {
    const cvUrl = "https://drive.google.com/file/d/1Mt2CP9Ke4zGpuzCSHYsdNfkA8cOwiVCf/view?usp=sharing";
    window.open(cvUrl, "_blank");
  };



  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20 -z-10" />
      
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider border border-border/40 rounded-full px-4 py-1.5 bg-muted/30">
                  Welcome to my portfolio
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-ring via-chart-1 to-chart-2 bg-clip-text text-transparent">
                  Hasaranga Abeywickrama
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl font-semibold text-foreground/90">
                Software Engineer
              </p>
              
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg">
                I build innovative web applications with clean code and modern technologies.
                Passionate about creating seamless user experiences and scalable solutions.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button
                onClick={() => scrollToSection("#projects")}
                size="lg"
                className="shadow-lg hover:shadow-xl transition-shadow"
                data-testid="button-view-projects"
              >
                View Projects
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={handleDownloadCV}
                className="shadow-sm hover:shadow-md transition-shadow"
                data-testid="button-download-cv"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
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

            <div className="flex gap-3 pt-2">
              <Button
                variant="ghost"
                size="icon"
                className="hover:scale-110 transition-transform"
                asChild
                data-testid="link-github"
              >
                <a href="https://github.com/HasarangaDinujaya" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:scale-110 transition-transform"
                asChild
                data-testid="link-linkedin"
              >
                <a href="https://www.linkedin.com/in/hasaranga-dinujaya-344b44197/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:scale-110 transition-transform"
                asChild
                data-testid="link-email"
              >
                <a href="mailto:hasarangadinujaya1234@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center md:justify-end">
            {/* Decorative rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full border-2 border-ring/20 animate-pulse" />
              <div className="absolute w-80 h-80 md:w-[420px] md:h-[420px] rounded-full border border-ring/10" />
            </div>
            
            {/* Circular image with gradient border */}
            <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-ring via-chart-1 to-chart-2 rounded-full animate-pulse opacity-75 blur-xl" />
              <div className="relative w-full h-full rounded-full p-1 bg-gradient-to-br from-ring via-chart-1 to-chart-2 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-background">
                  <img
                    src={heroImage}
                    alt="Hasaranga Abeywickrama"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    data-testid="img-hero"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollToSection("#about")}
            className="animate-bounce hover:animate-none"
            data-testid="button-scroll-down"
          >
            <ArrowDown className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}