import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Gallery from "./components/Gallery/gallery";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import MeetTeam from "./components/meetTeam/meetTeam"
import Sponsor from "./components/Sponsors/sponsor"

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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
