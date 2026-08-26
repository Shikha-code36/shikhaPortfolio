import React, { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { OpenSource } from "./components/OpenSource";
import { AlsoOnGitHub } from "./components/AlsoOnGitHub";
import { Publications } from "./components/Publications";
import { EcosystemPresence } from "./components/EcosystemPresence";
import { Skills } from "./components/Skills";
import { Blog } from "./components/Blog";
import { Achievements } from "./components/Achievements";
import { Principles } from "./components/Principles";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { AmbientBackground } from "./components/AmbientBackground";
import { ChapterHeader } from "./components/shared/ChapterHeader";

const THEMES = ["light", "mesh", "dark"];

function App() {
  const [theme, setTheme] = useState(() => {
    const current = document.documentElement.getAttribute("data-theme");
    return THEMES.includes(current) ? current : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch (e) {
      // localStorage unavailable — theme just won't persist across reloads
    }
  }, [theme]);

  return (
    <div className="min-h-screen bg-schema-bg text-schema-text overflow-x-hidden font-mono">
      <AmbientBackground theme={theme} />
      <Navbar theme={theme} setTheme={setTheme} />
      <main className="relative z-10">
        <Hero />

        <ChapterHeader
          id="build"
          index="01"
          title="Build"
          subtitle="Roles, systems shipped, and fixes sent back upstream."
        />
        <Experience />
        <Projects />
        <OpenSource />
        <AlsoOnGitHub />
        <Skills />

        <ChapterHeader
          id="write"
          index="02"
          title="Write"
          subtitle="Publications and posts on caching, databases, and distributed systems."
        />
        <Publications />
        <Blog />

        <ChapterHeader
          id="presence"
          index="03"
          title="Presence"
          subtitle="Who's behind the code, where else I show up, and how I work."
        />
        <About />
        <EcosystemPresence />
        <Achievements />
        <Principles />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
