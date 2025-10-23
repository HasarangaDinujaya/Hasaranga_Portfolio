import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import dashboardImg from "@assets/generated_images/Project_dashboard_screenshot_ae083041.png";
import ecommerceImg from "@assets/generated_images/E-commerce_project_screenshot_dc32c4dc.png";
import taskAppImg from "@assets/generated_images/Task_management_app_screenshot_c316766a.png";

const projects = [
  {
    id: 1,
    title: "Analytics Dashboard",
    description:
      "A comprehensive analytics platform with real-time data visualization, custom reporting, and team collaboration features.",
    image: dashboardImg,
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://demo.example.com",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description:
      "Full-featured online store with payment integration, inventory management, and advanced product filtering.",
    image: ecommerceImg,
    tags: ["Next.js", "Stripe", "MongoDB", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://demo.example.com",
  },
  {
    id: 3,
    title: "Task Management App",
    description:
      "Collaborative project management tool with kanban boards, time tracking, and team productivity insights.",
    image: taskAppImg,
    tags: ["React", "Express", "WebSocket", "Redis"],
    github: "https://github.com",
    demo: "https://demo.example.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Projects</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A selection of my recent work showcasing various technologies and problem-solving approaches
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden hover-elevate transition-all duration-300"
                data-testid={`card-project-${project.id}`}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    data-testid={`img-project-${project.id}`}
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      data-testid={`button-github-${project.id}`}
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      asChild
                      data-testid={`button-demo-${project.id}`}
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
