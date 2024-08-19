import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/home/Logo.png";
import Otista from "../../assets/img/home/Otista.png";

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    console.log(isMobileMenuOpen);

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={Logo} />
                <img src={Otista} />
            </div>
            <ul className={`navbar-links ${isMobileMenuOpen ? "open" : ""}`}>
                <li>
                    <Link to="/">Beranda</Link>
                </li>
                <li>
                    <Link to="/catalog">Catalog</Link>
                </li>
            </ul>
            <div className="navbar-toggle" onClick={toggleMobileMenu}>
                <span className="navbar-toggle-icon"></span>
                <span className="navbar-toggle-icon"></span>
                <span className="navbar-toggle-icon"></span>
            </div>
        </nav>
    );
};

export default Navbar;
