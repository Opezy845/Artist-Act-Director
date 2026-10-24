import {
    FiMail,
    FiUser,
    FiBriefcase,
    FiMapPin,
} from "react-icons/fi";
import ArtImage from '../assets/Art.png';
import { useState } from "react";
function About() {
  return (
    <section className="about-section" id="about">
        <div className="about-image">
    <img src={ArtImage} alt="About me" />
        </div>

        <div className="about-content">
      <h2>About Me</h2>
      <h3>More Than 
        <br />
        Just a Dreamer</h3>
      <p className="about-text">
        I'm Saheededede - a creative mind with a deep
        love for art, storytelling and the power of human
        expression. I use pointillism to bring stories
        to life - stories that inspire, challenge and 
        connect people.
        </p>
          <p className="sign">Saheededede</p>
      </div>

    
<div className="icons">
  <div className="info-row">
    <FiUser className="icon" />
    <div>
      <span className="info-label">Name</span>
      <p className="text2">Saheededede</p>
    </div>
  </div>

  <div className="info-row">
    <FiBriefcase className="icon" />
    <div>
      <span className="info-label">Profession</span>
      <p className="text2">Artist | Director</p>
    </div>
  </div>

  <div className="info-row">
    <FiMapPin className="icon" />
    <div>
      <span className="info-label">Location</span>
      <p className="text2">Lagos, Nigeria</p>
    </div>
  </div>

  <div className="info-row">
    <FiMail className="icon" />
    <div>
      <span className="info-label">Email</span>
      <p className="text2">saheededed@gmail.com</p>
    </div>
  </div>
</div>


    </section>
  );
}

export default About;