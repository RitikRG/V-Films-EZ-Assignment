import React from "react";
import "./AboutTeam.css";
import PaperClip from '../../assets/aboutTeam/paperClip.svg';
import IndiaGate from '../../assets/aboutTeam/indiaGate.svg';
import People from '../../assets/aboutTeam/people.svg';
import Marker1 from '../../assets/aboutTeam/marker1.svg';
import Marker2 from '../../assets/aboutTeam/marker2.svg';
import Marker3 from '../../assets/aboutTeam/marker3.svg';
import Header from "../Header/Header";

export default function AboutTeam() {
  return (
    <>
    <Header/>
    <section className="about-team-section">
        <div className="paper-clip-container">
            <img src={PaperClip} alt="Paper Clip"/>
        </div>
        <div className="india-gate-container">
            <img src={IndiaGate} alt="India Gate"/>
        </div>
        <div className="people-container">
            <img src={People} alt="Team"/>
            <div className="view-portfolio-container">
                <p>Take a closer look at the stories V bring to life.</p>
                <button className="btn">View Portfolio</button>
            </div>

            <div className="marker marker-1">
                <img src={Marker1} alt="marker1"/>
                <p>Branding Experts</p>
            </div>

            <div className="marker marker-2">
                <p>Film Makers</p>
                <img src={Marker2} alt="marker2"/>
            </div>

            <div className="marker marker-3">
                <p>Art Curators</p>
                <img src={Marker3} alt="marker3"/>
            </div>
        </div>
    </section>
    </>
  );
}
