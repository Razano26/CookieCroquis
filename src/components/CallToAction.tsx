"use client";

import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@components/magicui/terminal";
import { ScriptCopyBtn } from "@components/magicui/script-copy-btn";

const CallToAction = () => {
  const customCommandMap = {
    https: "git clone https://github.com/Razano26/CookieCroquis.git",
    ssh: "git clone git@github.com:Razano26/CookieCroquis.git",
    "GitHub CLI": "gh repo clone Razano26/CookieCroquis",
  };
  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-mono">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-muted-foreground">
            Get started with Cookie Croquis and focus on what matters most.
            Building your application.
          </p>
          <div className="flex gap-4 justify-center text-left">
            <Terminal>
              <TypingAnimation>
                &gt; git clone git@github.com:Razano26/CookieCroquis.git
              </TypingAnimation>

              <AnimatedSpan delay={1500} className="text-purple-500">
                <span>Cloning into &apos;CookieCroquis&apos;...</span>
              </AnimatedSpan>

              <AnimatedSpan delay={2000} className="text-purple-500">
                <span>remote: Enumerating objects: 114, done.</span>
              </AnimatedSpan>

              <AnimatedSpan delay={2500} className="text-purple-500">
                <span>remote: Counting objects: 100% (114/114), done.</span>
              </AnimatedSpan>

              <AnimatedSpan delay={3000} className="text-purple-500">
                <span>remote: Compressing objects: 100% (70/70), done.</span>
              </AnimatedSpan>

              <AnimatedSpan delay={3500} className="text-purple-500">
                <span>
                  remote: Total 114 (delta 42), reused 108 (delta 36),
                  pack-reused 0 (from 0)
                </span>
              </AnimatedSpan>

              <AnimatedSpan delay={4000} className="text-purple-500">
                <span>
                  Receiving objects: 100% (114/114), 105.76 KiB | 572.00 KiB/s,
                  done.
                </span>
              </AnimatedSpan>

              <AnimatedSpan delay={4500} className="text-purple-500">
                <span>Resolving deltas: 100% (42/42), done.</span>
              </AnimatedSpan>

              <TypingAnimation delay={5000} className="text-muted-foreground">
                Success! Project cloned.
              </TypingAnimation>

              <TypingAnimation delay={5500} className="text-muted-foreground">
                You may now start building your application.
              </TypingAnimation>
            </Terminal>
          </div>
          <ScriptCopyBtn
            showMultiplePackageOptions={true}
            codeLanguage="shell"
            lightTheme="nord"
            darkTheme="vitesse-dark"
            commandMap={customCommandMap}
          />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
