// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prevMenuOpen) => !prevMenuOpen);
    };

    return (
        <header id="main-header">
            <div className="flex-container">
                <div className="logo">
                    <Link to="/">
                        <img src="images/flag.jpg" width="50" height="50" alt="Vietnam flag" />
                    </Link>                    
                    <h1>Vietnam: Discover Culture and Tradition</h1>
                </div>
                <button id="hamburger-menu" onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
                <nav id="main-nav" className={menuOpen ? "active" : ""}>
                    <ul className="columns">
                        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                        <li><Link to="/discover" onClick={toggleMenu}>Discover Vietnam</Link></li>
                        <li><Link to="/munchies" onClick={toggleMenu}>Munchies</Link></li>
                        <li><Link to="/activities" onClick={toggleMenu}>Activities and Attractions</Link></li>
                        <li><Link to="/about" onClick={toggleMenu}>About Us</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
