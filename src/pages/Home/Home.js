import React from "react";
import "./Home.css";
import Hero from "../../components/Hero/Hero";
import AboutTeam from "../../components/AboutTeam/AboutTeam";

export default function Home() {
  return (
    <main className="home-container">
      <section className="page-section">
        <Hero />
      </section>

      <section className="page-section">
        <AboutTeam />
      </section>
    </main>
  );
}
