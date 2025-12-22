import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";

export function meta() {
  return [
    { title: "Portfolio" },
    {
      name: "description",
      content:
        "Kelvin Chebet's portfolio website showcasing projects and skills.",
    },
  ];
}

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
