
import Hero from "./sections/hero";
import About from "./sections/about";
import Projects from "./sections/projects";

export default function Home() {
  return (
    <section>
      <div className="flex flex-col lg:px-[15%]"> 
        <Hero id="home"/>
         <About id="about"/>
         <Projects id="projects"/>
      </div>
    </section>
  );
}
