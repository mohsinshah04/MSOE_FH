import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faTiktok, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="links">
          <a href="https://www.linkedin.com/in/mozee-motorsports/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className='link'/>
          </a>
          <a href="https://www.tiktok.com/@mozee.motorsports?_t=8mWbeQualFm&_r=1" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTiktok} className='link'/>
          </a>
          <a href="https://www.instagram.com/mozeemotorsports/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className='link'/>
          </a>
        </div>
        <div className="copyright">
          Copyright &#169; Mozee Motorsports
        </div>
    </footer>
  )
}

export default Footer