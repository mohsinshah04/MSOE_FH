import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Gallery from "./components/Gallery/gallery";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import MeetTeam from "./components/meetTeam/meetTeam"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Intro />
            <About />
            <Gallery />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/meetTeam" element={<MeetTeam />} />
      </Routes>

    </div>
  );
}

export default App;
