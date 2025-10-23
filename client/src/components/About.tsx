import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Briefcase, GraduationCap } from "lucide-react";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Python",
  "SQL",
  "Git",
  "Docker",
  "AWS",
  "REST APIs",
  "GraphQL",
  "CI/CD",
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About Me</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Building the future, one line of code at a time
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-base leading-relaxed text-foreground">
              I'm a passionate software engineer with over 5 years of experience building web
              applications that solve real-world problems. My journey in tech started with a
              curiosity about how things work, and has evolved into a career dedicated to crafting
              elegant, efficient solutions.
            </p>
            <p className="text-base leading-relaxed text-foreground">
              I specialize in full-stack development, with a strong focus on creating intuitive user
              interfaces and robust backend systems. I thrive in collaborative environments and enjoy
              mentoring junior developers while continuously learning new technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 space-y-3 hover-elevate">
              <Code className="h-8 w-8 text-ring" />
              <h3 className="font-semibold text-lg">Development</h3>
              <p className="text-sm text-muted-foreground">
                Building scalable applications with modern frameworks and best practices
              </p>
            </Card>

            <Card className="p-6 space-y-3 hover-elevate">
              <Briefcase className="h-8 w-8 text-ring" />
              <h3 className="font-semibold text-lg">Experience</h3>
              <p className="text-sm text-muted-foreground">
                5+ years working with startups and established companies worldwide
              </p>
            </Card>

            <Card className="p-6 space-y-3 hover-elevate">
              <GraduationCap className="h-8 w-8 text-ring" />
              <h3 className="font-semibold text-lg">Learning</h3>
              <p className="text-sm text-muted-foreground">
                Constantly exploring new technologies and sharing knowledge with the community
              </p>
            </Card>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" data-testid={`badge-skill-${skill.toLowerCase()}`}>
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
