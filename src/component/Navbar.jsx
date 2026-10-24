import {
    FiHome,
    FiX,
    FiMenu,
    FiBriefcase,
    FiUser,
    FiImage,
   FiPenTool,
    FiAward,
    FiMail,
    FiArrowRight,
    FiGrid
}from "react-icons/fi";
import { useState } from "react";
function Navbar() {
    const [active, setActive] = useState("home");
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header className="header">
            <nav className="nav">
                <div className="brand">
                <div className="logo"><a href="#home">Saheededede</a></div>
                <p className="text">ARTIST. DIRECTOR</p>
                </div>
                <div className={`nav-menu ${menuOpen ? "show-menu" : ""}`}>
                <ul className= "navbar">
                    <li><a href="#home" onClick={() => setMenuOpen(false)}><FiHome /><span>Home</span></a></li>
                    <li><a href="#about" onClick={() => setMenuOpen(false)}><FiUser /><span>About</span></a></li>
                    <li><a href="#Specialties" onClick={() => setMenuOpen(false)}><FiGrid /> <span>Specialties</span></a></li>
                    <li><a href="#artGallery" onClick={() => setMenuOpen(false)}><FiImage /><span>Art & Gallery</span></a></li>
                    <li><a href="#artAndDrawing" onClick={() => setMenuOpen(false)}><FiPenTool /> <span>Art & Drawing</span></a></li>
                    <li><a href="#experience" onClick={() => setMenuOpen(false)}><FiBriefcase /> <span>Experience</span></a></li>
                    <li><a href="#awards" onClick={() => setMenuOpen(false)}><FiAward /> <span>Awards</span></a></li>
                    <li><a href="#contact" onClick={() => setMenuOpen(false)}><FiMail /> <span>Contact</span></a></li>
                </ul>
                <button className="menu-toggle" onClick={() => {setMenuOpen(false);
                    document.getElementById("contact")?.scrollInteView({behaviour:"smooth",
                    });
                }}
                > Get in Touch< FiArrowRight/></button>
                </div>
               <button className="menu-item" onClick={() => setMenuOpen(!menuOpen)}> {menuOpen ? <fiX /> : <FiMenu/>}</button>
               
            </nav>
        </header>
    );
}

export default Navbar;