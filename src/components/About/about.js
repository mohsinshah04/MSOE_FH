import React from 'react'
import './about.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'



const abouts = () => {
  return (
    <section id='about'>
        <span className="aboutTitle">About Us</span>
        <span className="aboutDesc">The Milwaukee School of Engineering (MSOE) SAE Formula Hybrid Team is a dynamic and innovative group dedicated to pushing the boundaries of automotive engineering. With a commitment to excellence and a collaborative spirit, we strive to foster hands-on learning experiences for our members while representing MSOE on an international stage. Through tireless dedication and a drive for innovation, we aim to foster the next generation of engineers and prepare them to contribute to the advancement of automotive technology.</span>
        <div className="aboutBars">
            <div className="aboutBar">
                <img src={UIDesign} alt="UIDesign" className="aboutBarImg" />
                <div className="aboutBarText">
                    <h2>Meet The Team</h2>
                    <p>meet the team msg</p>
                </div>
            </div>
            <div className="aboutBar">
                <img src={WebDesign} alt="WebDesign" className="aboutBarImg" />
                <div className="aboutBarText">
                    <h2>Projects</h2>
                    <p>msg about projects</p>
                </div>
            </div>
            <div className="aboutBar">
                <img src={AppDesign} alt="AppDesign" className="aboutBarImg" />
                <div className="aboutBarText">
                    <h2>The cars</h2>
                    <p>sum abt how long you guys been around</p>
                </div>
            </div>
        </div>
    </section>
  );
}


export default abouts;