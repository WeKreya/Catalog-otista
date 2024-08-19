import React from "react";
import "./Item.css";
import Item1 from "../../assets/img/item/item1.png";
import { useNavigate } from "react-router-dom";

function Item() {
    const navigate = useNavigate()

    return (
        <div className="item" onClick={() => navigate('/detail/:id'.replace(':id', String(1)))}>
            <img src={Item1} />
            <div className="item-main">
                <p>2023</p>
                <h6>Ventilator</h6>
                <h5>Jepang</h5>
            </div>
        </div>
    );
}

export default Item;
