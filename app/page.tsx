'use client';
import Hero from "./sections/hero";
import About from "./sections/about";
import Projects from "./sections/projects";
import Contact from "./sections/contact";
import Navbar from "./navbar";
import { useRef } from "react";

export default function Home() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Navbar homeRef={homeRef} aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef} />
    <section>
      <div className="flex flex-col gap-5">
        <Hero id="home" ref={homeRef} />
        <About id="about" ref={aboutRef} />
        <Projects id="projects" ref={projectsRef} />
        <Contact id="contact" ref={contactRef} />
      </div>
    </section>
    </>
  );
}
