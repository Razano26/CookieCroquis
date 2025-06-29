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

        <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="w-full sm:w-auto sm:flex-shrink-0 sm:basis-[calc(50%-1rem)] md:basis-[calc(25%-1.5rem)] text-center space-y-2"
            >
              <div className="p-4 rounded-lg bg-background border-2 hover:border-primary/20 transition-colors h-24 flex flex-col items-center justify-center">
                {tech.icon === "default" ? (
                  <CheckCircle className="h-8 w-8 mx-auto text-primary mb-2" />
                ) : (
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={36}
                    height={36}
                    className="mx-auto mb-2"
                  />
                )}
                <p className="font-mono font-medium">{tech.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
