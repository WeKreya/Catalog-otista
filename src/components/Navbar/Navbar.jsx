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

    return (
        <nav className="navbar">
            <Link to='' className="navbar-logo">
                <img src={Logo} />
                <img src={Otista} />
            </Link>
            <div className={`navbar-links ${isMobileMenuOpen ? "open" : ""}`}>
                <ul>
                    <li>
                        <Link to="/">Beranda</Link>
                    </li>
                    <li>
                        <Link to="/catalog">Catalog</Link>
                    </li>
                </ul>
                <button onClick={() => navigate("/catalog")}>
                    Cari Semua Barang
                </button>
            </div>
            <div className="navbar-toggle" onClick={toggleMobileMenu}>
                <span className="navbar-toggle-icon"></span>
                <span className="navbar-toggle-icon"></span>
                <span className="navbar-toggle-icon"></span>
            </div>
        </nav>
    );
};

export default Navbar;
