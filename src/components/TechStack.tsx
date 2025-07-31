import { CheckCircle } from "lucide-react";
import Image from "next/image";

interface TechCardProps {
  name: string;
  icon: string;
}

interface TechStackProps {
  techStack: TechCardProps[];
}

export function TechStack({ techStack }: TechStackProps) {
  return (
    <section className="py-24 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-mono">
            Modern Tech Stack
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built with industry-leading technologies for performance, developer
            experience, and maintainability.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
          {techStack.map((tech, index) => (
            <div key={index} className="group relative w-32 sm:w-36 md:w-40">
              <div className="p-6 rounded-xl bg-background border-2 hover:border-purple-200 dark:hover:border-purple-800 transition-all duration-300 h-28 flex flex-col items-center justify-center group-hover:shadow-lg group-hover:scale-105 group-hover:bg-purple-50/50 dark:group-hover:bg-purple-950/20">
                {tech.icon === "default" ? (
                  <CheckCircle className="h-8 w-8 mx-auto text-purple-600 mb-2 group-hover:scale-110 transition-transform" />
                ) : (
                  <Image
                    src={tech.icon || "/placeholder.svg"}
                    alt={tech.name}
                    width={32}
                    height={32}
                    className="mx-auto mb-2 group-hover:scale-110 transition-transform"
                  />
                )}
                <p className="font-mono font-medium text-sm text-center leading-tight">
                  {tech.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
