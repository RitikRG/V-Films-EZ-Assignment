import React from "react";
import "./Services.css";
import BrushStroke from "../../assets/services/brushStroke.svg";
import BottomBorder from "../../assets/services/bottomBorder.svg";
import PaperClip1 from "../../assets/services/paperClip1.svg";
import PaperClip2 from "../../assets/services/paperClip2.svg";
import PaperClip3 from "../../assets/services/paperClip3.svg";
import ArtCuration from "../../assets/services/artCuration.svg";
import FilmProduction from "../../assets/services/filmProduction.svg";
import Branding from "../../assets/services/branding.svg";
import Header from "../Header/Header";

export default function Services() {
  return (
    <>
    <Header/>
    <section className="services-section">
        <div className="services-heading">
            <h2>The storyboard reveals the breadth of our craft.</h2>
            <img src={BrushStroke} className="brush-stroke" alt="brush-stroke"/>
        </div>
        <div className="services-container">
            <div className="film-production-div">
                <img src={PaperClip1} alt="Film Production" className="paper-clip-1" />
                <img src={FilmProduction} alt="Film Production" className="film-production-image" />
            </div>
            <div className="branding-div">
                <img src={PaperClip2} alt="Branding Image" className="paper-clip-2" />
                <img src={Branding} alt="Branding Image" className="branding-image" />
            </div>
            <div className="art-curation-div">
                <img src={PaperClip3} alt="Art Curation" className="paper-clip-3" />
                <img src={ArtCuration} alt="Art Curation" className="art-curation-image" />
            </div>
        </div>
        <div className="services-section-bottom">
            <img src={BottomBorder} alt="services"/>
        </div>
    </section>
    </>
  );
}
