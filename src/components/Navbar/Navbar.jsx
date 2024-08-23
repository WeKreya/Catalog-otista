import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/img/home/Logo.png";
import Otista from "../../assets/img/home/Otista.png";

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [active, setActive] = useState(1);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/") {
            setActive(1);
        } else if (location.pathname === "/catalog"){
            setActive(2);
        } else{
            setActive(0);
        }
    }, [location.pathname]);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="navbar">
            <Link to="" className="navbar-logo">
                <img src={Logo} />
                <img src={Otista} />
            </Link>
            <div className={`navbar-links ${isMobileMenuOpen ? "open" : ""}`}>
                <ul>
                    <li
                        className={`navbar-links-item ${
                            active == 1 ? "active" : ""
                        }`}
                    >
                        <Link to="/" onClick={() => setActive(1)}>
                            Beranda
                        </Link>
                    </li>
                    <li
                        className={`navbar-links-item ${
                            active == 2 ? "active" : ""
                        }`}
                    >
                        <Link to="/catalog" onClick={() => setActive(2)}>
                            Semua Katalog
                        </Link>
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
