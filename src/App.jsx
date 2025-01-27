import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contactme from "./components/Contactme";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";

import { useState, useEffect, useRef } from "react";

function App() {
  const [visibleSection, setVisibleSection] = useState(null);

  const homeRef = useRef(null);
  const projRef = useRef(null);
  const testRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSection(entry.target.id);
        }
      });
    }, options);

    const sections = [homeRef, projRef, testRef, contactRef];
    sections.forEach((section) => {
      if (section.current) {
        observer.observe(section.current);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section.current) {
          observer.unobserve(section.current);
        }
      });
    };
  }, []);

  return (
    <main className="w-screen h-screen text-white overflow-x-hidden">
      {/* <CursorGlow /> */}
      <div className="main">
        <Navbar />
        <Sidebar
          visibleSection={visibleSection}
          onHomeIconClick={() => scrollToSection(homeRef)}
          onProjIconClick={() => scrollToSection(projRef)}
          onTestIconClick={() => scrollToSection(testRef)}
          onContactIconClick={() => scrollToSection(contactRef)}
        />
        <div id="home" ref={homeRef}>
          <Hero />
        </div>
        <div id="projects" ref={projRef}>
          <Projects />
        </div>
        <div id="testimonials" ref={testRef}>
          <Testimonials />
        </div>
        <div>
          <Contactme />
        </div>
        <div id="contact" ref={contactRef}>
          <Footer contactRef={contactRef} />
        </div>
      </div>
    </main>
  );
}

export default App;
