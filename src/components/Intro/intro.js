import React from 'react'
import './intro.css'
import bg from '../../assets/MozzeLogo.jpg'
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
            <span className="introText">We are <span className="introName">Mozee</span> <br />Motorsports</span>
            <p className="introPara">We are a world champion hybrid formula <br /> student team based out of the Milwaukee <br /> School of Engineering</p>
            {/*<button className="btn" onClick={onButtonClick}><img src={btnImg} alt="shop" className='btnImg' />Checkout our Shop</button> */}
        </div>
        <img src={bg} alt="Profile" className="bg" />
    </section>
  );
}

export default Intro