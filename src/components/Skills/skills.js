import React from 'react'
import './skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'



const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">About Me</span>
        <span className="skillDesc">I am a student at the University of Wisconsin-Milwaukee, specializing in Software Engineering. My goal is to apply my knowledge and skills to develop innovative solutions that address real-world challenges. I am driven by a passion for technology and a commitment to lifelong learning. Here are my skills below:</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Coding Languages</h2>
                    <p>Python, Java, JavaScript, TypeScript, HTML, CSS, C, C#</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Libraries / Frameworks</h2>
                    <p>React, JUnit, Django</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Developer Tools / IDE</h2>
                    <p>GitHub, PyCharm, Linux, Virtual Machine, Eclipse, Visual Studio Code, Node.js, Spring Boot</p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Skills;