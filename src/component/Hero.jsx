import {FiArrowRight, FiInstagram} from "react-icons/fi";
import { FaTiktok } from "react-icons/fa6";
import { FiPlay } from "react-icons/fi";
import personalImage from "../assets/personal.png";
import { useState } from "react";

function Hero(){
    return(
  <section className="hero-section" id="home">
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
       I transform ideas into striking pointillism art, bring compelling 
       stories to life through film, and direct creative projects that blend 
       emotion, imagination, and visual storytelling to inspire people, spark 
       new perspectives, and leave a lasting impression.
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
          <p className="create">Create<span>.</span> Express <span>.</span>Inspire</p>
    </div>
    <div className="hero-images">
      <div className="hero-image portrait-image">
        <img src={personalImage} alt="Artist portrait" />
      </div>
    </div>
    {/* <div >
     
    </div> */}
  </section>
);

}

export default Hero;