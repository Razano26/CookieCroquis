import {} from "@components/ui/card";
import { Code2, Palette, Shield, Zap, Server } from "lucide-react";
import { TechStack } from "@components/TechStack";
import Footer from "@components/Footer";
import Hero from "@components/Hero";
import CallToAction from "@components/CallToAction";
import Feature from "@components/Feature";

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
    {
      icon: <Server className="h-8 w-8" />,
      title: "Seamless Deployment",
      description:
        "Fully Dockerized for effortless, consistent deployment across any cloud or hosting provider.",
      badge: "Production Ready",
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
      icon: "shadcn-ui.svg",
    },
    {
      name: "Magic UI",
      icon: "magic-ui.svg",
    },
    {
      name: "ESLint",
      icon: "eslint-logo.svg",
    },
    {
      name: "Prettier",
      icon: "prettier.svg",
    },
    {
      name: "Docker",
      icon: "docker-icon.svg",
    },
    {
      name: "Husky",
      icon: "husky.svg",
    },
    {
      name: "Lint staged",
      icon: "lint-staged-logo.svg",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Feature features={features} />

      {/* Tech Stack Section */}
      <section id="tech-stack" aria-labelledby="tech-stack-heading">
        <TechStack techStack={techStack} />
      </section>

      {/* CTA Section */}
      <section id="getting-started" aria-labelledby="cta-heading">
        <CallToAction />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
