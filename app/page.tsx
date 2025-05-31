import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
    </div>
  );
}
