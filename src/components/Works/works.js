import React from 'react'
import './works.css'
import TaApp from '../../assets/TaApp.jpg'
import TicTacToe from '../../assets/TicTacToe.jpg'
import BookRecs from '../../assets/BookRec.jpg'
import ComingSoon from '../../assets/comingSoon.jpg'

const Works = () => {
  const projects = [
    { img: TaApp, alt: "TA Scheduling App", link: "https://github.com/mohsinshah04/ta_project", text: "TA Scheduling App" },
    { img: TicTacToe, alt: "TicTacToe", link: "https://github.com/mohsinshah04/Tic-Tac-Toe", text: "AI Tic-Tac-Toe" },
    { img: BookRecs, alt: "BookRecs", link: "https://github.com/mohsinshah04/BookRecs", text: "Book Recs Site" },
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
            <div className="overlay">
              <a href={project.link} className="worksLink" target="_blank" rel="noopener noreferrer">{project.text}</a>
            </div>
          </div>
        ))}
      </div>
      <a href="https://github.com/mohsinshah04" target="_blank" rel="noopener noreferrer">
        <button className="worksBtn">See More</button>
      </a>
    </section>
  );
}

export default Works;