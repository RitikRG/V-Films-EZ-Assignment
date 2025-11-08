import React from "react";
import "./AboutUs.css";
import ProjectsImage from '../../assets/aboutUs/projects.svg';
import HappyClients from '../../assets/aboutUs/happyClients.svg';
import ExpertTeam from '../../assets/aboutUs/expertTeam.svg';
import Clientage from '../../assets/aboutUs/clientage.svg';
import Mountains from '../../assets/aboutUs/mountains.svg';
import Header from "../Header/Header";

export default function AboutUs() {
  return (
    <>
    <Header/>
    <section className="about-us-section">
        <div className="about-us-container">
            <div className="about-us-left">
                <h2>A montage of familiar faces and names.</h2>
                <p>Some stories come from the biggest names. Others begin with bold, rising voices. We’ve been fortunate to walk alongside both - listening, creating, and building stories that matter.</p>
                <div className="illustrations-container">
                    <img src={ProjectsImage} className="projects-image" alt="Projects Delivered"/>
                    <img src={HappyClients} className="happy-clients-image" alt="Happy Clients"/>
                    <img src={ExpertTeam} className="expert-team-image" alt="Expert Team"/>
                </div>
            </div>
            <div className="about-us-right">
                <h1>Every project is more than just a brief - it’s a new chapter waiting to be written. Together, we've crafted tales that inspire, connect, and endure.</h1>
                <div className="right-illustration-container">
                    <img src={Clientage} alt="clients" className="clientage-image"/>
                    <img src={Mountains} alt="mountains" className="mountains-image"/>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}
