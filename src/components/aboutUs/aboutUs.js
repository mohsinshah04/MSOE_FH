import React from 'react'
import './aboutUs.css'


const aboutUs = () => {
  return (
    <div className="teambox">
      <div className="about-title">ABOUT US</div>
      <div className='about-container'>

        <div className='about-who'>
          <div className='who-title'> WHO ARE WE?</div>
          <div className='who-body'>
            Mozee Motorsports is a student organization at the Milwaukee School of Engineering (MSOE) in Milwaukee, Wisconsin.
            The organization began in the 1990's and competed in the internal combustion category and took the step forward  into
            the hybrid category in 2013. Our first hybrid vehicle was the MP3, followed by the MP4 then the MP5 and the current
            vehicle , the MP6. The team consists of on average fifty individuals of varying disciplines, team members don’t 
            even have to be studying engineering. Formula hybrid is completely student run, so a member can focus on refining 
            their technical skills, take on leadership and administrative roles, or both.
          </div>
        </div>

        <div className='about-what'>
          <div className='what-title'> WHAT IS SAE FORMULA?</div>
          <div className='what-body'>
            The SAE Formula Hybrid Competition is an engineering challenge organized by the Society of Automotive Engineers (SAE) 
            that focuses on hybrid and electric vehicle technology. It is designed for university students to showcase their 
            skills in automotive design, engineering, and teamwork. The competition aims to advance the development and application
            of hybrid and electric vehicle technologies. It encourages students to innovate and create practical, efficient, and 
            sustainable vehicles. Teams consist of university students from around the world, usually from mechanical engineering, 
            electrical engineering, and other related disciplines. Each team designs, builds, and tests a hybrid or electric 
            vehicle according to competition guidelines. Team members gain hands-on experience in vehicle design and engineering, 
            project management, and teamwork. The competition serves as a practical application of classroom knowledge.
          </div>       
        </div>

        <div className='about-why'>
          <div className='why-title'> WHY ARE WE DOING THIS? </div>
          <div className='why-body'>
            The value of being part of a student organization like Formula Hybrid is immense. Success in the competition can enhance
            a student’s resume and open doors to career opportunities in the automotive and engineering industries. It also 
            provides students with opportunities to network with industry professionals, potential employers, and peers from other 
            institutions. Employers are always looking for the technical skills a student learns in Formula Hybrid which aren’t 
            covered in classrooms and labs.
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default aboutUs