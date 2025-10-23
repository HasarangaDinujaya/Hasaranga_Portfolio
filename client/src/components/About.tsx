import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Server, Palette, Code2, Database, Layers } from "lucide-react";

const webDevSkills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
  "JavaScript",
  "Redux",
];

const backendSkills = [
  "Node.js",
  "Express",
  "Python",
  "FastAPI",
  "PostgreSQL",
  "MongoDB",
  "REST APIs",
  "GraphQL",
];

const designSkills = [
  "Figma",
  "Adobe XD",
  "Wireframing",
  "Prototyping",
  "User Research",
  "Responsive Design",
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              About Me
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Crafting digital experiences through code and design
            </p>
          </div>

          {/* Introduction */}
          <div className="max-w-3xl mx-auto">
            <p className="text-base md:text-lg leading-relaxed text-center text-muted-foreground">
              I'm <span className="font-semibold text-foreground">Hasaranga Abeywickrama</span>, a Software Engineer passionate about building exceptional web applications. 
              I combine technical expertise with design thinking to create solutions that are both powerful and user-friendly.
            </p>
          </div>

          {/* Expertise Cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Web Development */}
            <Card className="group relative overflow-hidden border-2 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-8 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <Globe className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="font-bold text-xl text-foreground">Web Development</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Building modern, responsive web applications with cutting-edge frameworks and technologies.
                </p>
                {/* <div className="flex flex-wrap gap-2 pt-2">
                  {webDevSkills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="outline" 
                      className="text-xs border-blue-200 text-blue-700 bg-blue-50/50"
                      data-testid={`badge-web-${skill.toLowerCase()}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div> */}
              </div>
            </Card>

            {/* Backend & APIs */}
            <Card className="group relative overflow-hidden border-2 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-8 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                  <Server className="h-7 w-7 text-emerald-600" />
                </div>
                <h3 className="font-bold text-xl text-foreground">Backend & APIs</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Designing scalable server architectures and robust APIs that power seamless experiences.
                </p>
                {/* <div className="flex flex-wrap gap-2 pt-2">
                  {backendSkills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="outline" 
                      className="text-xs border-emerald-200 text-emerald-700 bg-emerald-50/50"
                      data-testid={`badge-backend-${skill.toLowerCase()}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div> */}
              </div>
            </Card>

            {/* UI/UX Design */}
            <Card className="group relative overflow-hidden border-2 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-8 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center">
                  <Palette className="h-7 w-7 text-purple-600" />
                </div>
                <h3 className="font-bold text-xl text-foreground">UI/UX Design</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Creating intuitive interfaces and delightful user experiences that users love to interact with.
                </p>
                {/* <div className="flex flex-wrap gap-2 pt-2">
                  {designSkills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="outline" 
                      className="text-xs border-purple-200 text-purple-700 bg-purple-50/50"
                      data-testid={`badge-design-${skill.toLowerCase()}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div> */}
              </div>
            </Card>
          </div>

          {/* What I Do Section */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">What I Do</h3>
              <p className="text-muted-foreground">End-to-end solutions from concept to deployment</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <Code2 className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-foreground">Clean Code</h4>
                <p className="text-sm text-muted-foreground">
                  Writing maintainable, efficient code following best practices
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <Database className="h-6 w-6 text-emerald-600" />
                </div>
                <h4 className="font-semibold text-foreground">Database Design</h4>
                <p className="text-sm text-muted-foreground">
                  Structuring data efficiently for optimal performance
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                  <Layers className="h-6 w-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-foreground">Full Stack</h4>
                <p className="text-sm text-muted-foreground">
                  Seamlessly integrating frontend and backend systems
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}