import React from 'react'
import './intro.css'
import bg from '../../assets/image.png'
import btnImg from '../../assets/hireme.png'
import pdf from '../../assets/Mohsin_Shah_Resume.pdf'


const Intro = () => {
  const onButtonClick = () => {

    const pdfUrl = pdf;

    const link = document.createElement("a");

    link.href = pdfUrl;

    link.download = "Mohsin_Shah_Resume.pdf"; // specify the filename

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

};
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Mohsin</span> <br />CS Student</span>
            <p className="introPara">I’m an aspiring software engineer passionate <br /> about creating innovative solutions and eager <br />to collaborate on impactful projects</p>
            <button className="btn" onClick={onButtonClick}><img src={btnImg} alt="resume" className='btnImg' />Checkout my Resume</button>
        </div>
        <img src={bg} alt="Profile" className="bg" />
    </section>
  );
}

export default Intro