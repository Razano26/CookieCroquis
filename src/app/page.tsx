import { Button } from "@components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import { Badge } from "@components/ui/badge";
import { ArrowRight, Code2, Palette, Shield, Zap } from "lucide-react";
import { TechStack } from "@components/TechStack";
import Footer from "@components/Footer";
import Hero from "@components/Hero";

export default function HomePage() {
  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Next.js 15 & React 19",
      description:
        "Built with the latest versions for modern rendering, server components, and enhanced performance.",
      badge: "Latest",
    },
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "TypeScript + Tooling",
      description:
        "Full TypeScript support with ESLint and Prettier configured for consistent, maintainable code.",
      badge: "Developer Experience",
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "TailwindCSS + UI Libraries",
      description:
        "Pre-configured with shadcn/ui and Magic UI components for rapid, beautiful interface development.",
      badge: "Design System",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Quality Assurance",
      description:
        "Husky and lint-staged ensure code quality with automated checks on every commit.",
      badge: "Code Quality",
    },
  ];

  const techStack = [
    {
      name: "Next.js 15",
      icon: "nextjs-icon.svg",
    },
    {
      name: "React 19",
      icon: "react-logo.svg",
    },
    {
      name: "TypeScript",
      icon: "typescript-icon.svg",
    },
    {
      name: "TailwindCSS",
      icon: "tailwindcss-icon.svg",
    },
    {
      name: "shadcn/ui",
      icon: "default",
    },
    {
      name: "Magic UI",
      icon: "default",
    },
    {
      name: "ESLint",
      icon: "eslint-logo.svg",
    },
    {
      name: "Prettier",
      icon: "prettier.svg",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-mono">
              Everything You Need
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A carefully curated stack of modern tools and best practices to
              accelerate your development workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="relative overflow-hidden border-2 hover:border-primary/20 transition-colors"
              >
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit">
                      {feature.icon}
                    </div>
                    <Badge variant="secondary" className="font-mono text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-mono">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <TechStack techStack={techStack} />

      {/* CTA Section */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-mono">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-muted-foreground">
              Get started with Cookie Croquis and focus on what matters most –
              building your application.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 font-mono">
                Download Starter Kit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 font-mono bg-transparent"
              >
                Read Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
