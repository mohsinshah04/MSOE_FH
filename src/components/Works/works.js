import React from 'react'
import './works.css'
import ComingSoon from '../../assets/comingSoon.jpg'

const Works = () => {
  const projects = [
    { img: ComingSoon, alt: "ComingSoon", link: "", text: "Coming Soon" },
    { img: ComingSoon, alt: "ComingSoon", link: "", text: "Coming Soon" },
    { img: ComingSoon, alt: "ComingSoon", link: "", text: "Coming Soon" },
    { img: ComingSoon, alt: "ComingSoon", link: "", text: "Coming Soon" },
    { img: ComingSoon, alt: "ComingSoon", link: "", text: "Coming Soon" },
    { img: ComingSoon, alt: "ComingSoon", link: "", text: "Coming Soon" },
  ];

  return (
    <section id='works'>
      <h2 className="worksTitle">My Projects</h2>
      <span className="worksDesc">I take pride in my attention to detail and staying organized in my work. As a CS student, I'm eager to develop my skills to solve real-world problems and help businesses achieve their goals through innovative software solutions</span>
      <div className="worksImgs">
        {projects.map((project, index) => (
          <div key={index} className="worksItem">
            <img src={project.img} alt={project.alt} className="worksImg" />
          </div>
        ))}
      </div>
      <a href="https://www.instagram.com/mozeemotorsports/" target="_blank" rel="noopener noreferrer">
        <button className="worksBtn">See More</button>
      </a>
    </section>
  );
}

export default Works;