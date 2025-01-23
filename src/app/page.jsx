import Image from "next/image";
import Navbar from "./components/navbar";
import Hello from "./sections/hello/hello";
import About from "./sections/about/about";
import Experience from "./sections/experience/experience";
import Projects from "./sections/projects/projects";
import Contact from "./sections/contact/contact";

export default function Home() {
  return (
    <div className="max-w-full w-screen overflow-x-hidden">
      <div>
        {/* Navbar */}
        <Navbar />
        {/* Sections */}
        <Hello />
        <About />
        {/* <Experience /> */}
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
