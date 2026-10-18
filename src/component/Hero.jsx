import {FiArrowRight, FiInstagram} from "react-icons/fi";
import { FaTiktok } from "react-icons/fa6";
import { FiPlay } from "react-icons/fi";
import girllImage from "../assets/girll.png";
import imageseeImage from "../assets/imagesee.jpg";
import { useState } from "react";

function Hero(){
    return(
  <section className="hero-section">
    <div className="hero-content">
      <div className="hero-label">
        ARTIST <span><b>.</b></span> DIRECTOR
      </div>

      <h1 className="hero1">Saheededede</h1>

      <h2 className="hero2">
        Turning Emotions Into
        Art, Stories Into impact
      </h2>

      <p className="text1">
        I create powerful visual art pointillism,
        bring real stories to life on screen, and direct,
        projects that make people feel, think and see
        the world differently.
      </p>

      <div className="hero-action" id="home">
        <button className="btn btn-primary">
          <a href="#project"></a>
          Explore My work <FiArrowRight />
        </button>

        <button className="btn btn-outline">
          <a href="#reel"></a>
          <FiPlay /> watch my Reel
        </button>
      </div>

      <div className="hero-social">
        <a href="#instagram" aria-label="Instagram">
          <FiInstagram />
        </a>
        <a href="#tiktok" aria-label="TikTok">
          <FaTiktok />
        </a>
      </div>
    </div>

    {/* IMPORTANT: Images are now siblings of hero-content */}
    <div className="hero-images">
      <div className="hero-image portrait-image">
        <img src={girllImage} alt="Artist portrait" />
      </div>

      <div className="hero-image director-image">
        <img src={imageseeImage} alt="Film directing on set" />
      </div>
    </div>
  </section>
);

}

export default Hero;