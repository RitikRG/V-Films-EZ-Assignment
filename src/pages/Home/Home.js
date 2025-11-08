import React from "react";
import "./Home.css";
import Hero from "../../components/Hero/Hero";
import AboutTeam from "../../components/AboutTeam/AboutTeam";
import AboutUs from "../../components/AboutUs/AboutUs";
import Services from "../../components/Services/Services";
import Portfolio from "../../components/Portfolio/Portfolio";
import Contact from "../../components/Contact/Contact";

export default function Home() {
  return (
    <main className="home-container">
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
    </main>
  );
}
