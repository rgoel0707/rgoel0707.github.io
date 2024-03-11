import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navigate() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <button className="menu-toggle" aria-label="Toggle Menu" onClick={toggleMenu}>☰</button>
      </div>
      <ul className={`navbar-menu ${(isOpen) ? 'active' : ""}`}>
        {/*<li><NavLink className='nav-link' to="/" onClick={toggleMenu}><img src="./profile_pic.webp" alt='rishabh' className="rounded-image"></img></NavLink></li>*/}
        <li><NavLink className='nav-link' to="/" onClick={toggleMenu}>About Me</NavLink></li>
        <li><NavLink className='nav-link' to="/projects" onClick={toggleMenu}>Projects</NavLink></li>
        <li><NavLink className='nav-link' to="/contact" onClick={toggleMenu}>Contact</NavLink></li>
        {/*<li><NavLink className='nav-link' to="/meal-suggestor" onClick={toggleMenu}>Meal Suggestor</NavLink></li>
        <li><NavLink className='nav-link' to="/playlist-creator" onClick={toggleMenu}>Playlist Creator</NavLink></li>
        <li><NavLink className='nav-link' to="/reddit-explorer" onClick={toggleMenu}>Reddit Explorer</NavLink></li>
        <li><NavLink className='nav-link' to="/solar-checker" onClick={toggleMenu}>Solar Checker</NavLink></li>*/}
      </ul>
      <div className="nav-divider"></div>
    </nav>
  )
}

// Need to add Linked In icon, resume button, dark/light mode
