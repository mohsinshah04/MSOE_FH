import React, {useRef} from 'react'
import './contact.css';
import emailjs from '@emailjs/browser';

import ColorStack from '../../assets/colorStack.png'
import Forage from '../../assets/forage.png'
import JPMorgan from '../../assets/jpm.png'
import HPE from '../../assets/hpe.jpg'

import LinkedInIcon from '../../assets/linkedIn-icon.png'
import HandShakeIcon from '../../assets/handShake-icon.jpg'
import GitHubIcon from '../../assets/gitHub-icon.jpg'

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
        .sendForm('service_s6qzuij', 'template_0rr7ksp', form.current, {
            publicKey: '1sbX5g73u7qNp0Eae',
        })
        .then(
            () => {
            console.log('SUCCESS!');
            e.target.reset();
            alert('Email Sent');
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );
    };
    return (
        <section id="contactPage">
            <div id="clients">
                <h1 className="contactPageTitle">Our Sponsors</h1>
                <p className="clientDesc">I have had the opportunity to join organizations and obtain certificates. Some of the organizations and certificates i've done include</p>
            <div className="clientImgs">
                <img src={ColorStack} alt="Client" className="clientImg" />
                <img src={Forage} alt="Client" className="clientImg" />
                <img src={JPMorgan} alt="Client" className="clientImg" />
                <img src={HPE} alt="Client" className="clientImg" />
            </div>
            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to contact me.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your Name' name='from_name'/>
                    <input type="email" className="email" placeholder='Your Email' name='from_email'/>
                    <textarea className= 'msg' name="message" rows='5' placeholder='Your Message'></textarea>
                    <button type='submit' value='Send' className="submitBtn">Submit</button>
                    <div className="links">
                        <a href="https://www.linkedin.com/in/mohsin4882/" target="_blank" rel="noopener noreferrer">
                            <img src={LinkedInIcon} alt="LinkedIn" className="link" />
                        </a>
                        <a href="https://app.joinhandshake.com/stu/users/38469640" target="_blank" rel="noopener noreferrer">
                            <img src={HandShakeIcon} alt="HandShake" className="link" />
                        </a>
                        <a href="https://github.com/mohsinshah04" target="_blank" rel="noopener noreferrer">
                            <img src={GitHubIcon} alt="GitHub" className="link" />
                        </a>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact