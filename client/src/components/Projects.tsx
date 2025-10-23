import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import GymnasiumImg from "@assets/generated_images/image1.png";
import ecommerceImg from "@assets/generated_images/E-commerce_project_screenshot_dc32c4dc.png";
import taskAppImg from "@assets/generated_images/Task_management_app_screenshot_c316766a.png";

const projects = [
  {
    id: 1,
    title: "Gymnasium And Ground Booking System",
    description:
      "A comprehensive platform for managing gymnasium and ground bookings, with features for user management, scheduling, and inventory tracking.",
    image: GymnasiumImg,
    tags: ["React", "JavaScript", "Django", "Postman", "PostgreSQL"],
    github: "https://github.com/TKBK531/gym_application",
    demo: "https://demo.example.com",
    color: "blue",
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
    color: "emerald",
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
    color: "purple",
  },
];

const colorClasses = {
  blue: {
    border: "group-hover:border-blue-500/50",
    gradient: "from-blue-500/5",
    badge: "border-blue-200 text-blue-700 bg-blue-50/50",
  },
  emerald: {
    border: "group-hover:border-emerald-500/50",
    gradient: "from-emerald-500/5",
    badge: "border-emerald-200 text-emerald-700 bg-emerald-50/50",
  },
  purple: {
    border: "group-hover:border-purple-500/50",
    gradient: "from-purple-500/5",
    badge: "border-purple-200 text-purple-700 bg-purple-50/50",
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="inline-block">
              <Badge variant="outline" className="px-4 py-1.5 text-sm font-medium mb-4">
                <Sparkles className="w-3 h-3 mr-2 inline" />
                Portfolio
              </Badge>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Featured Projects
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A selection of my recent work showcasing various technologies and problem-solving approaches
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project) => {
              const colors = colorClasses[project.color as keyof typeof colorClasses];
              return (
                <Card
                  key={project.id}
                  className={`group overflow-hidden border-2 ${colors.border} transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}
                  data-testid={`card-project-${project.id}`}
                >
                  {/* Image with overlay */}
                  <div className="relative aspect-video overflow-hidden bg-muted">
                    <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10`} />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      data-testid={`img-project-${project.id}`}
                    />
                  </div>

                  <CardHeader className="pb-2 pt-4 px-4">
                    <CardTitle className="text-base">{project.title}</CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-3 px-4 pb-4">
                    <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge 
                          key={tag} 
                          variant="outline" 
                          className={`text-[10px] px-2 py-0 ${colors.badge}`}
                        >
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 3 && (
                        <Badge variant="outline" className="text-[10px] px-2 py-0">
                          +{project.tags.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 h-8 text-xs"
                        asChild
                        data-testid={`button-github-${project.id}`}
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-3 w-3 mr-1" />
                          Code
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 h-8 text-xs"
                        asChild
                        data-testid={`button-demo-${project.id}`}
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center pt-8">
            <p className="text-muted-foreground mb-4">
              Want to see more of my work?
            </p>
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/HasarangaDinujaya" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}