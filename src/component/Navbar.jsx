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
    FiArrowRight
}from "react-icons/fi";
import { useState } from "react";
function Navbar() {
    const [active, setActive] = useState("home");
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header className="header">
            <nav className="nav">
                <div className="brand">
                <div className="logo"><a href="#Saheededede"></a>Saheededede</div>
                <p className="text">ARTIST. DIRECTOR</p>
                </div>
                <ul className={`navbar ${menuOpen ? "show-menu" : ""}`}>
                    <li><a href="#home" className={active === "Home" ? "active" : ""} onClick={() => { setActive("Home");  setMenuOpen(false);}}><FiHome /><span>Home</span></a></li>
                    <li><a href="#about" className={active === "About" ? "active" : ""} onClick={() =>{ setActive("About"); setMenuOpen(false); }}><FiUser /><span>About</span></a></li>
                    <li><a href="#artGallery" className={active === "Art Gallery" ? "active" : ""} onClick={() =>{ setActive("Art Gallery"); setMenuOpen(false);}}><FiImage /><span>Art Gallery</span></a></li>
                    <li><a href="#artAndDrawing" className={active === "Art & Drawing" ? "active" : ""} onClick={() =>{ setActive("Art & Drawing"); setMenuOpen(false);}}><FiPenTool /> <span>Art & Drawing</span></a></li>
                    <li><a href="#experience" className={active === "Experience" ? "active" : ""} onClick={() =>{ setActive("Experience"); setMenuOpen(false);}}><FiBriefcase /> <span>Experience</span></a></li>
                    <li><a href="#awards" className={active === "Awards" ? "active" : ""} onClick={() =>{ setActive("Awards"); setMenuOpen(false);}}><FiAward /> <span>Awards</span></a></li>
                    <li><a href="#contact" className={active === "Contact" ? "active" : ""} onClick={() =>{ setActive("Contact"); setMenuOpen(false);}}><FiMail /> <span>Contact</span></a></li>
                </ul>
                <button className="menu-toggle">Get in Touch< FiArrowRight/></button>
               <button className="menu-item" onClick={() => setMenuOpen(!menuOpen)}> {menuOpen ? <fix /> : <FiMenu/>}</button>
            </nav>
        </header>
    );
}

export default Navbar;