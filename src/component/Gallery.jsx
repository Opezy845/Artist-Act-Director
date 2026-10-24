import {
    FiArrowRight
}from "react-icons/fi";
import cosmicImage from '../assets/cosmic.png';
import colorImage from '../assets/color.png';
import fruitImage from '../assets/fruit.png';
import pointImage from '../assets/point.png';
function Gallery() {
    return(
        <section className="gallery-section" id="Gallery">
            <div className="gallery-content">
                <p className="gallery-text">MY ART</p>
                <h1>pointllism Art Gallery</h1>
                <p>A collection of my pointillism artworks - detailed,
                    emotional and full of life. Each piece tells a story.
                </p>
                <button className="gallery-btn">View All Artwork <FiArrowRight /></button>
            </div>

            <div className="gallery-image">
            <div className="gallery-items">
                <img src={cosmicImage} alt="Gallery image" />
                <p>Echoes of Identity</p>
                <p>2024</p>
                </div>

                <div className="gallery-items">
                <img src={colorImage} alt="Gallery image" />
                <p>Faces of Our Heritage</p>
                <p>2024</p>
                </div>

                <div className="gallery-items">
                <img src={fruitImage} alt="Gallery image" />
                <p>Harvest of Culture</p>
                <p>2024</p>
                </div>

                <div className="gallery-items">
                <img src={pointImage} alt="Gallery image" />
                <p>The Many Faces of Emotion</p>
                <p>2024</p>
                </div>

            </div>
        </section>
        
    );
}

export default Gallery;
