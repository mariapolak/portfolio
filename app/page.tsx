
import Hero from "./sections/hero";
import About from "./sections/about";
import Projects from "./sections/projects";
import RootLayout from "@/app/layout";
import Contact from "./sections/contact";

export default function Home() {
  return (
    <RootLayout>
    <section>
      <div className="flex flex-col gap-5">
        <Hero id="home" />
        <About id="about" />
        <Projects id="projects" />
        <Contact id="contact" />
      </div>
    </section>
    </RootLayout>
  );
}
