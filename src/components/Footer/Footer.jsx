import React from "react";
import "./Footer.css";
import Logo from '../../assets/img/home/Logo.png'
import Otista from '../../assets/img/home/Otista.png'
import { FiMail, FiMapPin } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";

function Footer() {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-content-logo">
                    <img src={Logo}/>
                    <img src={Otista}/>
                </div>
                <div className="footer-content-info">
                    <div className="info-item">
                        <FiMapPin />
                        <p>
                            Jl. Gading Tutuka Kampung Cingcin Kolot Desa Cingcin
                            Kecamatan Soreang Kabupaten Bandung
                        </p>
                    </div>
                    <div className="info-item">
                        <FiMail />
                        <p>rsudotista@bandungkab.go.id</p>
                    </div>
                    <div className="info-item">
                        <BsTelephone />
                        <p>0225-891-355</p>
                    </div>
                </div>
            </div>
            <div className="footer-copy">
                <p>©2024 RSUD OTISTA Bandung. All Rights Reserved.</p>
            </div>
        </div>
    );
}

export default Footer;
