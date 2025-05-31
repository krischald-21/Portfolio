import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div>
      <Sidebar />
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="education"><Education /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
}
