import React from 'react'
import Navbar from './component/Navbar.jsx'
import Hero from './component/Hero.jsx'
import About from './component/About.jsx'
import Specialties from "./component/Specialties.jsx";
import Gallery from './component/Gallery.jsx'
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Specialties />
      <Gallery />
    </>
  )
}

export default App;
