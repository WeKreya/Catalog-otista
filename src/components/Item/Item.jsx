import React from "react";
import "./Item.css";
import Item1 from "../../assets/img/item/item1.png";
import { useNavigate } from "react-router-dom";

function Item(props) {
    const {item} =props
    const navigate = useNavigate()

    return (
        <div className="item" onClick={() => navigate('/detail/:id'.replace(':id', String(item.id)))}>
            <img src={Item1} />
            <div className="item-main">
                <p>{item.tahun}</p>
                <h6>{item.nama_produk}</h6>
                <h5>{item.asal_produk}</h5>
            </div>
        </div>
    );
}

export default Item;
