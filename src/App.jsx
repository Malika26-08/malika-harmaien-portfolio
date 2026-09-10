import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import FocusAreas from "./components/FocusAreas";
import Skills from "./components/Skills";
import Journey from "./components/Journey";
import Credentials from "./components/Credentials";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
      >
        Skip to work
      </a>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <FocusAreas />
        <Skills />
        <Journey />
        <Credentials />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
