import React from "react";
import Hero from "../../assets/img/home/Hero.png";
import About2 from "../../assets/img/home/about2.png";
import "./Home.css";
import Item from "../Item/Item";
import Data from "../../assets/database/item.json";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    return (
        <div className="home">
            <div className="home-hero">
                <h3>Rumah Sakit Umum Daerah</h3>
                <h1>OTO ISKANDAR DI NATA</h1>
                <h1>BANDUNG</h1>
            </div>
            <div className="home-about">
                <div className="home-about1">
                    <img src={Hero} />
                    <div className="home-about-content">
                        <h5>
                            Selamat Datang <br /> di RSUD OTISTA Bandung
                        </h5>
                        <div className="line"></div>
                        <p>
                            Selamat datang di Website RSUD Oto Iskandar Di Nata
                            Kab. Bandung. Website ini sebagai sarana informasi
                            data inventaris pengadaan dan kalibrasi untuk
                            memberikan Informasi tentang pengadaan Alkes dan
                            Aldok Rumah Sakit Umum Daerah Otista Kab. Bandung.
                        </p>
                    </div>
                </div>
                <div className="home-about2">
                    <div className="home-about-content">
                        <h5>
                            Instalasi Pemeliharaan Sarana Rumah Sakit (IPSRS)
                        </h5>
                        <div className="line"></div>
                        <p>
                            Instalasi Pemeliharaan Sarana & Prasarana Rumah
                            Sakit (IPSRS) adalah suatu unit fungsional untuk
                            melaksanakan kegiatan teknis instalasi, pemeliharaan
                            dan perbaikan, agar fasilitas yang menunjang
                            pelayanan kesehatan di rumah sakit yaitu sarana,
                            prasarana dan peralatan alat kesehatan RS selalu
                            berada dalam keadaan layak pakai guna menunjang
                            pelayanan kesehatan yang paripurna dan prima kepada
                            pelanggan. Semua urusan teknis dan manajerial ada di
                            IPSRS.
                        </p>
                    </div>
                    <img src={About2} />
                </div>
            </div>
            <div className="home-catalog">
                <h5>Catalogues</h5>
                <div className="home-catalog-item">
                    {Data.slice(0, 4).map((item, index) => {
                        return <Item key={index} item={item} />;
                    })}
                </div>
                <div className="home-catalog-button">
                    <button onClick={() => navigate("/catalog")}>
                        Lihat Semuanya
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;
