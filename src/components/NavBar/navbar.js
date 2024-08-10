import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import './navbar.css';
import logo from '../../assets/MozzeLogo.jpg';
import contactImg from '../../assets/contact.png';
import menu from '../../assets/menu.png';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  const [scrollToSection, setScrollToSection] = useState(null);

  useEffect(() => {
    if (location.pathname === '/' && scrollToSection) {
      const element = document.getElementById(scrollToSection);
      if (element) {
        const offset = -50;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition + offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
      setScrollToSection(null);
    }
  }, [location, scrollToSection]);

  const handleScrollTo = (section) => {
    if (location.pathname !== '/') {
      setScrollToSection(section);
    } else {
      const element = document.getElementById(section);
      if (element) {
        const offset = -50; 
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition + offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className='logo' />
      <div className="desktopMenu">
        <RouterLink to="/" onClick={() => handleScrollTo('intro')} className="desktopMenuListItem">Home</RouterLink>
        
        <div className="dropdownContainer">
          <RouterLink to="/" onClick={() => handleScrollTo('about')} className="desktopMenuListItem">About</RouterLink>
          <div className="dropdownContent">
            <RouterLink to='/meetTeam' onClick={scrollToTop}>Meet The Team</RouterLink>
            <RouterLink to='/' onClick={scrollToTop}>Our Pro</RouterLink>
            <RouterLink to='/' onClick={scrollToTop}>Meet The Team</RouterLink>
          </div>
        </div>
        
        <RouterLink to="/" onClick={() => handleScrollTo('gallery')} className="desktopMenuListItem">Gallery</RouterLink>
        <RouterLink to="/" onClick={() => handleScrollTo('sponsors')} className="desktopMenuListItem">Sponsors</RouterLink>
      </div>
      
      <RouterLink to="/" onClick={() => handleScrollTo('contact')} className="desktopMenuBtn">
        <img src={contactImg} alt="Contact" className="desktopMenuImg" />Contact Us
      </RouterLink>

      <img src={menu} alt="Menu" className='mobMenu' onClick={() => setShowMenu(!showMenu)} />
      <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
        <RouterLink to="/" onClick={() => { handleScrollTo('intro'); scrollToTop(); setShowMenu(false); }} className="listItem">Home</RouterLink>
        <RouterLink to="/" onClick={() => { handleScrollTo('skills'); setShowMenu(false); }} className="listItem">About</RouterLink>
        <RouterLink to="/" onClick={() => { handleScrollTo('works'); setShowMenu(false); }} className="listItem">Gallery</RouterLink>
        <RouterLink to="/" onClick={() => { handleScrollTo('clients'); setShowMenu(false); }} className="listItem">Sponsors</RouterLink>
        <RouterLink to="/" onClick={() => { handleScrollTo('contact'); setShowMenu(false); }} className="listItem">Contact</RouterLink>
      </div>
    </nav>
  );
};

export default Navbar;