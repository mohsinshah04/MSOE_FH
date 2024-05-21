import React from 'react'
import './skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'



const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">About Us</span>
        <span className="skillDesc">enter quick about me msg</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Meet The Team</h2>
                    <p>meet the team msg</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Projects</h2>
                    <p>msg about projects</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>The cars</h2>
                    <p>sum abt how long you guys been around</p>
                </div>
            </div>
        </div>
    </section>
  );
}


export default Skills;