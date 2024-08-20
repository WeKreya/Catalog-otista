import React, { useState } from "react";
import Item from "../Item/Item";
import Data from "../../assets/database/item.json";
import "./Catalog.css";
import { IoIosArrowBack, IoIosArrowForward, IoIosSearch } from "react-icons/io";
import ReactPaginate from "react-paginate";
import { CiFilter } from "react-icons/ci";

function Catalog() {
    const [filterActive, setfilterActive] = useState(false);
    const [current, setCurrent] = useState(1);
    const [display] = useState(12);

    function paginate(e) {
        if (e < 1 || e > totalPages) return;
        setCurrent(e);
    }

    const last = current * display;
    const first = last - display;

    const totalPages = Math.ceil(Data.length / display);

    return (
        <div className="catalog">
            <h5>All Catalog</h5>
            <div className="catalog-filter">
                <div
                    className={
                        filterActive
                            ? "catalog-filter-group active"
                            : "catalog-filter-group"
                    }
                >
                    <div className="catalog-filter-input">
                        <label>Search</label>
                        <div className="input-group">
                            <input type="text" />
                            <IoIosSearch />
                        </div>
                    </div>
                    <div className="catalog-filter-input">
                        <label for="country">Asal Negara</label>
                        <select id="country">
                            <option value="">Search</option>
                        </select>
                    </div>
                    <div className="catalog-filter-input">
                        <label for="room">Ruangan</label>
                        <select id="room">
                            <option value="">Search</option>
                        </select>
                    </div>
                    <div className="catalog-filter-input">
                        <label for="year">Tahun</label>
                        <select id="year">
                            <option value="">Search</option>
                        </select>
                    </div>
                </div>
                <div className="catalog-filter-button">
                    <button
                        className="filter"
                        onClick={() => setfilterActive(!filterActive)}
                    >
                        <CiFilter />
                        Filter
                    </button>
                    <button className="search">Search</button>
                </div>
            </div>
            <div className="line"></div>
            <div className="catalog-content">
                {Data.slice(first, last).map((item, index) => {
                    return <Item key={index} item={item} />;
                })}
            </div>
            <div className="catalog-page">
                <button
                    onClick={() => paginate(current - 1)}
                    disabled={current === 1}
                >
                    <IoIosArrowBack />
                </button>
                <div className="catalog-page-number">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => paginate(index + 1)}
                            className={index == current - 1 ? "active" : ""}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
                <button
                    onClick={() => paginate(current - 1)}
                    disabled={current === totalPages}
                >
                    <IoIosArrowForward />
                </button>
            </div>
        </div>
    );
}

export default Catalog;
