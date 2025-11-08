import React from "react";
import "./Portfolio.css";
import VideoPlayer from "../../assets/portfolio/container.svg";
import ControlsContainer from "../../assets/portfolio/controlsContainer.svg";
import Right from "../../assets/portfolio/right.svg";
import Left from "../../assets/portfolio/left.svg";
import Camera from "../../assets/portfolio/camera.svg";
import CircularDesign from "../../assets/portfolio/circularDesign.svg";
import Header from "../Header/Header";

export default function Portfolio() {
  return (
    <>
    <Header/>
    <section className="portfolio-section">
        <div className="portfolio-header">
            <h2>The Highlight Reel</h2>
            <p>Watch the magic we've captured.</p>
        </div>
        <div className="player-container">
            <img src={VideoPlayer} alt="Video player" className="video-player"/>
            <img src={ControlsContainer} alt="controls-holder" className="controls-holder-1"/>
            <img src={ControlsContainer} alt="controls-holder" className="controls-holder-2"/>
            <img src={Left} alt="left-control" className="left-control"/>
            <img src={Right} alt="right-control" className="right-control"/>
        </div>
        <div className="camera-container">
            <img src={Camera} />
        </div>
        <div className="circular-design-container">
            <img src={CircularDesign} />
        </div>

    </section>
    </>
  );
}
