import { Card } from "@/components/ui/card";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiAmazon,
  SiGit,
  SiTailwindcss,
  SiGraphql,
} from "react-icons/si";

const techStack = [
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
  { name: "React", icon: SiReact, color: "text-cyan-500" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
  { name: "Python", icon: SiPython, color: "text-blue-600" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-700" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  { name: "Docker", icon: SiDocker, color: "text-blue-500" },
  { name: "AWS", icon: SiAmazon, color: "text-orange-500" },
  { name: "Git", icon: SiGit, color: "text-orange-600" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "GraphQL", icon: SiGraphql, color: "text-pink-600" },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Tech Stack</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {techStack.map((tech) => {
              const Icon = tech.icon;
              return (
                <Card
                  key={tech.name}
                  className="p-6 flex flex-col items-center gap-3 hover-elevate transition-all duration-300"
                  data-testid={`card-tech-${tech.name.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <Icon className={`h-12 w-12 ${tech.color}`} />
                  <span className="text-sm font-medium text-center">{tech.name}</span>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
