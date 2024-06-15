import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/MozzeLogo.jpg';
import contactImg from '../../assets/contact.png';
import menu from '../../assets/menu.png'
import { Link } from 'react-scroll';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className='logo' />
      <div className="desktopMenu">
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
        
        <div className="dropdownContainer">
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
          <div className="dropdownContent">
            <Link to='meetTeam.js' spy={true} smooth={true} offset={-50} duration={500}>Meet The Team</Link>
            <Link to='history' spy={true} smooth={true} offset={-50} duration={500}>Our History</Link>
          </div>
        </div>
        
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Gallery</Link>
        <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Sponsors</Link>
      </div>
      <button className="desktopMenuBtn" onClick={()=> {document.getElementById('contact').scrollIntoView({behavior: 'smooth'});}}>
        <img src={contactImg} alt="" className="desktopMenuImg" />Contact Us</button>

      <img src={menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
      <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-52} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-52} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Gallery</Link>
        <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-52} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Sponsors</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-52} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
      </div>

    </nav>
  )
}

export default Navbar