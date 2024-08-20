import React from "react";
import Hero from "../../assets/img/home/Hero.png";
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
                <h1>OTISTA BANDUNG</h1>
                <button>Cari Semua Barang</button>
            </div>
            <div className="home-about">
                <img src={Hero} />
                <div className="home-about-content">
                    <h5>About</h5>
                    <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum."
                    </p>
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
