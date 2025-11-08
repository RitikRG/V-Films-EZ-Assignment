import React from "react";
import mandalaImage from "../../assets/hero/mandala.svg"
import "./Hero.css";
import logo from "../../assets/logo.png";
import Header from "../Header/Header";

export default function Hero() {
  return (
    <>
    <Header/>
    <section className="hero-section">
      <div className="hero-section-left">
        <img src={mandalaImage} alt="Mandala"  className="rotating-bg"/>
        <div className="hero-left-text">
          <img src={logo} alt="Logo" className="logo"/>
        </div>
      </div>
      <div className="hero-section-right">
        <h1 className="hero-title">
          Varnan is where stories find <br />
          their voice and form
        </h1>

        <div className="hero-categories">
          <span>Films . Brands . Art</span>
        </div>

        <p className="hero-description">
          Since 2009, V’ve been telling stories — stories of people,
          their journeys, and the places that shape them.
          Some begin in polished boardrooms, others in humble village squares.
          But every story starts the same way — by listening with intention.
          V believes it takes trust, patience, and an eye for the unseen to capture
          what truly matters.
          V doesn’t just tell stories — V honors them.
        </p>
      </div>
    </section>
    </>
  );
}
