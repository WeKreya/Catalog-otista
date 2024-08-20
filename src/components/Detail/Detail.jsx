import React, { useState } from "react";
import "./Detail.css";
import Data from "../../assets/database/item.json";
import { useNavigate, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Tab from "./Tab/Tab";

function Detail() {
    const { id } = useParams();
    const navigate = useNavigate();

    const data = Data.find((x) => x.id == id);

    const [mainImage, setMainImage] = useState(data.foto[0]);

    const handleThumbnailClick = (image) => {
        setMainImage(image);
    };

    if (!data) {
        return (
            <div className="detail not-found">
                <button>
                    <IoIosArrowBack />
                    <h5>Kembali</h5>
                </button>
                <div className="detail-main">
                    <p>Item not found</p>
                </div>
            </div>
        );
    }

    return (
        <div className="detail">
            <button onClick={() => navigate(-1)}>
                <IoIosArrowBack />
                <h5>Kembali</h5>
            </button>
            <div className="detail-main">
                <div className="detail-main-img">
                    <img src={mainImage} alt={data.title} />
                    <div className="detail-main-img-thumb">
                        {data.foto.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Thumbnail ${index + 1}`}
                                    onClick={() => handleThumbnailClick(image)}
                                />
                            ))}
                    </div>
                </div>
                <div className="detail-main-title">
                    <span>{data.tahun}</span>
                    <h2>{data.nama_produk}</h2>
                    <p>{data.asal_produk}</p>
                </div>
            </div>
            <div className="detail-tabs">
                <Tab data={data}/>
            </div>
        </div>
    );
}

export default Detail;
