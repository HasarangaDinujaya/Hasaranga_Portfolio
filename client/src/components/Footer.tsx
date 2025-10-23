import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t py-12">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-3">
            <Button
              variant="ghost"
              size="icon"
              asChild
              data-testid="link-footer-github"
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              data-testid="link-footer-linkedin"
            >
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              data-testid="link-footer-twitter"
            >
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              data-testid="link-footer-email"
            >
              <a href="mailto:your.email@example.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>

          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              © {currentYear} John Doe. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
