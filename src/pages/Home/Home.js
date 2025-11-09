import React, {useEffect, useRef, useState} from "react";
import "./Home.css";
import Hero from "../../components/Hero/Hero";
import AboutTeam from "../../components/AboutTeam/AboutTeam";
import AboutUs from "../../components/AboutUs/AboutUs";
import Services from "../../components/Services/Services";
import Portfolio from "../../components/Portfolio/Portfolio";
import Contact from "../../components/Contact/Contact";

export default function Home() {
  const containerRef = useRef(null);
  const [scrollPercent, setScrollPercent] = useState(0);
  const handleScroll = () => {
    const container = containerRef.current;
    const scrollWidth = container.scrollWidth - container.clientWidth;
    const scrolled = (container.scrollLeft / scrollWidth) * 100;
    setScrollPercent(scrolled);
  };
  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main ref={containerRef} className="home-container">
      <section className="page-section">
        <Hero />
      </section>

      <section className="page-section">
        <AboutTeam />
      </section>

      <section className="page-section">
        <AboutUs />
      </section>

      <section className="page-section">
        <Services />
      </section>

      <section className="page-section">
        <Portfolio />
      </section>

      <section className="page-section">
        <Contact />
      </section>

      <div className="custom-scrollbar">
        <div className="scroll-thumb" style={{ width: `${scrollPercent}%` }}></div>
      </div>
    </main>
  );
}
