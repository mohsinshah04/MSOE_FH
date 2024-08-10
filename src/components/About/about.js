import React from 'react'
import './about.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'



const abouts = () => {
  return (
    <section id='about'>
        <span className="aboutTitle">What is Mozee Motorsports?</span>
        <span className="aboutDesc">The Milwaukee School of Engineering (MSOE) SAE Formula Hybrid Team is a dynamic and innovative group dedicated to pushing the boundaries of automotive engineering. With a commitment to excellence and a collaborative spirit, we strive to foster hands-on learning experiences for our members while representing MSOE on an international stage. Through tireless dedication and a drive for innovation, we aim to foster the next generation of engineers and prepare them to contribute to the advancement of automotive technology.</span>
        <div className="aboutBars">
            <div className="aboutBar">
                <img src={UIDesign} alt="UIDesign" className="aboutBarImg" />
                <div className="aboutBarText">
                    <h2>About Us</h2>
                    <p>Learn more about Mozee Motersports!</p>
                </div>
            </div>
            <div className="aboutBar">
                <img src={WebDesign} alt="WebDesign" className="aboutBarImg" />
                <div className="aboutBarText">
                    <h2>Meet The Team</h2>
                    <p>Learn more about the brilliant members of MM</p>
                </div>
            </div>
            <div className="aboutBar">
                <img src={AppDesign} alt="AppDesign" className="aboutBarImg" />
                <div className="aboutBarText">
                    <h2>The Cars</h2>
                    <p>Learn more about the cars we have or are working on</p>
                </div>
            </div>
        </div>
    </section>
  );
}


export default abouts;