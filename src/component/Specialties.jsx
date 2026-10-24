import {
  FiImage,
  FiVideo,
  FiArrowRight
} from "react-icons/fi";


function Specialties() {
  return (
    <section className="specialties-section" id="Specialties">
      <div className="specail-text">
        <p>WHAT I DO</p>
      <h2>My Specialties</h2>
      <p>I create art, tell stories and bring ideas to life
        through different mediums. Each area represents 
        a part of who i am and how i see the world.
      </p>
      </div>

    <div className="specail-items">
      <div className="specail-box">
    <FiImage  className="icons1"/>
    <h2 className="special-1">Pointillism Artist</h2>
    <p className="specail-2">I create detailed, emotional artwork 
      using thousands of tiny dots,
      turning simple points into powerful
      images.
    </p>
    <p className="specail-3">view My Art <FiArrowRight /></p>
    </div>

    <div className="specail-tool">
      <FiVideo  className="icons2"/>
      <h2>Director</h2>
      <p>I lead creative teams to turn ideas to turn
        ideas into visual stories 
        that inspire.
      </p>
      <p className="specail-3">view My Art <FiArrowRight /></p>
    </div>
    </div>
    </section>
  );
}

export default Specialties;