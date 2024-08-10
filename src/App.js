import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Gallery from "./components/Gallery/gallery";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import AboutUs from "./components/aboutUs/aboutUs"
import MeetTeam from "./components/meetTeam/meetTeam"
import Sponsor from "./components/Sponsors/sponsor"
import TheCars from "./components/theCars/theCars"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Intro />
            <About />
            <Gallery />
            <Sponsor />
            <Contact />
          </>
        } />
        <Route path="/meetTeam" element={<MeetTeam />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/theCars" element={<TheCars />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
