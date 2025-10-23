import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Tech Stack", href: "#tech-stack" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection("#hero")}
            className="text-xl font-bold tracking-tight hover-elevate active-elevate-2 px-2 py-1 rounded-md"
            data-testid="link-home"
          >
            Portfolio
          </button>

          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                onClick={() => scrollToSection(item.href)}
                data-testid={`link-${item.name.toLowerCase().replace(" ", "-")}`}
              >
                {item.name}
              </Button>
            ))}
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 border-t mt-2 pt-2">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  onClick={() => scrollToSection(item.href)}
                  className="justify-start"
                  data-testid={`link-mobile-${item.name.toLowerCase().replace(" ", "-")}`}
                >
                  {item.name}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
