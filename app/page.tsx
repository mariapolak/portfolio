
import Hero from "./sections/hero";
import About from "./sections/about";
import Projects from "./sections/projects";
import RootLayout from "@/components/layout";

export default function Home() {
  return (
    <RootLayout>
    <section>
      <div className="flex flex-col lg:px-[15%] mb-[10rem]">
        <Hero id="home" />
        <About id="about" />
        <Projects id="projects" />
      </div>
    </section>
    </RootLayout>
  );
}
