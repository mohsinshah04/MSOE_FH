import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import MeetTeam from "./components/meetTeam/meetTeam"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Intro />
            <Skills />
            <Works />
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
