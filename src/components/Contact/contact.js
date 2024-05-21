import React, {useRef} from 'react'
import './contact.css';
import emailjs from '@emailjs/browser';

import SF from '../../assets/SF-logo.png'
import SAE from '../../assets/sae-logo.png'
import Regal from '../../assets/Regal-logo.png'
import SolidWorks from '../../assets/solidworks-logo.png'
import Polaris from '../../assets/Polaris-Industries-Logo.png'
import OZ from '../../assets/OZRace-logo.png'
import MilTool from '../../assets/MilTool-logo.png'
import JWS from '../../assets/jwspeaker-logo.png'
import Hoosier from '../../assets/hoosier-logo.png'
import Hayes from '../../assets/hayes-logo.png'
import Generac from '../../assets/generac-logo.png'
import Evology from '../../assets/evology-logo.png'
import HE from '../../assets/HE-logo.png'
import IEEE from '../../assets/IEEE-logo.png'

import LinkedInIcon from '../../assets/linkedIn-icon.png'
import TikTokIcon from '../../assets/tiktok.png'
import InstagramIcon from '../../assets/instagram.png'

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
                <p className="clientDesc">enter thank you msg for sponsors</p>
            <div className="clientImgs">
                <img src={SF} alt="Client" className="clientImg" />
                <img src={SAE} alt="Client" className="clientImg" />
                <img src={Regal} alt="Client" className="clientImg" />
                <img src={SolidWorks} alt="Client" className="clientImg" />
                <img src={Polaris} alt="Client" className="clientImg" />
                <img src={OZ} alt="Client" className="clientImg" />
                <img src={MilTool} alt="Client" className="clientImg" />
                <img src={JWS} alt="Client" className="clientImg" />
                <img src={Hoosier} alt="Client" className="clientImg" />
                <img src={Hayes} alt="Client" className="clientImg" />
                <img src={Generac} alt="Client" className="clientImg" />
                <img src={Evology} alt="Client" className="clientImg" />
                <img src={HE} alt="Client" className="clientImg" />
                <img src={IEEE} alt="Client" className="clientImg" />

            </div>
            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Us</h1>
                <span className="contactDesc">Please fill out the form below to contact us with any questions.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your Name' name='from_name'/>
                    <input type="email" className="email" placeholder='Your Email' name='from_email'/>
                    <textarea className= 'msg' name="message" rows='5' placeholder='Your Message'></textarea>
                    <button type='submit' value='Send' className="submitBtn">Submit</button>
                    <div className="links">
                        <a href="https://www.linkedin.com/in/mozee-motorsports/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                            <img src={LinkedInIcon} alt="LinkedIn" className="link" />
                        </a>
                        <a href="https://www.tiktok.com/@mozee.motorsports?_t=8mWbeQualFm&_r=1" target="_blank" rel="noopener noreferrer">
                            <img src={TikTokIcon} alt="tiktok" className="link" />
                        </a>
                        <a href="https://www.instagram.com/mozeemotorsports/" target="_blank" rel="noopener noreferrer">
                            <img src={InstagramIcon} alt="ig" className="link" />
                        </a>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact