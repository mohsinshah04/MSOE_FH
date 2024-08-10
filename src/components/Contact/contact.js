import React, {useRef} from 'react'
import './contact.css';
import emailjs from '@emailjs/browser';

// import SF from '../../assets/SF-logo.png'
// import SAE from '../../assets/sae-logo.png'
// import Regal from '../../assets/Regal-logo.png'
// import SolidWorks from '../../assets/solidworks-logo.png'
// import Polaris from '../../assets/Polaris-Industries-Logo.png'
// import OZ from '../../assets/OZRace-logo.png'
// import MilTool from '../../assets/MilTool-logo.png'
// import JWS from '../../assets/jwspeaker-logo.png'
// import Hoosier from '../../assets/hoosier-logo.png'
// import Hayes from '../../assets/hayes-logo.png'
// import Generac from '../../assets/generac-logo.png'
// import Evology from '../../assets/evology-logo.png'
// import HE from '../../assets/HE-logo.png'
// import IEEE from '../../assets/IEEE-logo.png'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLinkedin, faTiktok, faInstagram } from '@fortawesome/free-brands-svg-icons';

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
        <section id="contact">
                <h1 className="contactPageTitle">Contact Us</h1>
                <span className="contactDesc">Please fill out the form below to contact us with any questions.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your Name' name='from_name'/>
                    <input type="email" className="email" placeholder='Your Email' name='from_email'/>
                    <textarea className= 'msg' name="message" rows='5' placeholder='Your Message'></textarea>
                    <button type='submit' value='Send' className="submitBtn">Submit</button>
                </form>
        </section>
    )
}

export default Contact