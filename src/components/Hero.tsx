"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Badge } from "@components/ui/badge";
import { Button } from "@components/ui/button";
import { GitBranch, Github, Cookie } from "lucide-react";
import { getLatestRelease, formatVersion } from "@lib/github";
import { LineShadowText } from "@components/magicui/line-shadow-text";

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
    <section className="relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-background to-blue-50 dark:from-purple-950/20 dark:via-background dark:to-blue-950/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      <div className="relative container mx-auto px-4 py-24 sm:py-32 lg:py-40">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <Badge
                variant="outline"
                className="text-sm font-mono bg-purple-50 border-purple-200 text-purple-700 dark:bg-purple-950/50 dark:border-purple-800 dark:text-purple-300"
                asChild
              >
                <Link
                  href="https://github.com/Razano26/CookieCroquis/releases/latest"
                  target="_blank"
                  className="hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
                >
                  <Github className="mr-2 h-4 w-4" /> {version}
                </Link>
              </Badge>
              <Badge
                variant="outline"
                className="text-sm font-mono bg-green-50 border-green-200 text-green-700 dark:bg-green-950/50 dark:border-green-800 dark:text-green-300"
              >
                Next.js 15 Ready
              </Badge>
            </div>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight font-mono leading-tight">
              C<Cookie className="inline-block h-16 w-14 text-purple-600" />
              <Cookie className="inline-block h-16 w-14 text-purple-600" />
              kie{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                <LineShadowText shadowColor="purple">Croquis</LineShadowText>
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
              A <span className="text-purple-600 font-semibold">modern</span>,{" "}
              <span className="text-blue-600 font-semibold">minimal</span>{" "}
              starter for building applications with Next.js, TypeScript, and
              TailwindCSS.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-10 py-7 font-mono bg-transparent border-2 hover:bg-purple-50 dark:hover:bg-purple-950/20 hover:border-purple-300 transition-all duration-300"
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
