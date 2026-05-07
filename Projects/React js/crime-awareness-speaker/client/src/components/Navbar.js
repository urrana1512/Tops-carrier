import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/" className="nav-logo">CrimeAware</Link>
                <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
                    <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={() => setIsOpen(false)}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-links" onClick={() => setIsOpen(false)}>About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/videos" className="nav-links" onClick={() => setIsOpen(false)}>Videos</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-links" onClick={() => setIsOpen(false)}>Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-links-mobile" onClick={() => setIsOpen(false)}>Login</Link>
                    </li>
                </ul>
                <Link to="/login"><button className="btn-login">Login / Sign Up</button></Link>
            </div>
        </nav>
    );
};

export default Navbar;
