"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Badge } from "@components/ui/badge";
import { Button } from "@components/ui/button";
import { ArrowRight, GitBranch, Github, Cookie } from "lucide-react";
import { getLatestRelease, formatVersion } from "@lib/github";

const Hero = () => {
  const [version, setVersion] = useState("vx.x.x"); // change to increment annimation 0.0.0 to x.x.x

  useEffect(() => {
    const fetchVersion = async () => {
      const latestRelease = await getLatestRelease();
      const formattedVersion = formatVersion(
        latestRelease?.tag_name || "vx.x.x",
      );
      setVersion(formattedVersion);
    };

    fetchVersion();
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="relative container mx-auto px-4 py-24 sm:py-32 lg:py-40">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2">
              <Badge variant="outline" className="text-sm font-mono" asChild>
                <Link
                  href="https://github.com/Razano26/CookieCroquis/releases/latest"
                  target="_blank"
                >
                  <Github className="mr-2 h-5 w-5" color="purple" /> {version}
                </Link>
              </Badge>
              <Badge variant="outline" className="text-sm font-mono">
                Next.js 15 Ready
              </Badge>
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight font-mono">
              C<Cookie className="inline-block h-12 w-10" color="purple" />
              <Cookie className="inline-block h-12 w-10" color="purple" />
              kie Croquis
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A minimal starter for building applications with Next.js,
              TypeScript, and TailwindCSS.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 font-mono">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 font-mono bg-transparent"
            >
              <GitBranch className="mr-2 h-5 w-5" />
              View on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
