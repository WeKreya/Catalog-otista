import React, { useState } from "react";
import Item from "../Item/Item";
import Data from "../../assets/database/item-catalog.json";
import "./Catalog.css";
import { IoIosArrowBack, IoIosArrowForward, IoIosSearch } from "react-icons/io";
import ReactPaginate from "react-paginate";
import { CiFilter } from "react-icons/ci";

function Catalog() {
    const [filterActive, setfilterActive] = useState(false);
    const [current, setCurrent] = useState(1);
    const [display] = useState(12);

    const [search, setSearch] = useState("");
    const [filters, setFilters] = useState({
        asal_produk: "",
        ruangan: "",
        tahun: "",
    });

    const [filteredItems, setFilteredItems] = useState(Data);

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const handleFilterChange = (e) => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value,
        });
    };

    const handleReset = () => {
        setSearch("");
        setFilters({
            asal_produk: "",
            ruangan: "",
            tahun: "",
        });
    };

    const handleSearch = () => {
        const searchQuery = search.toLowerCase();
        const filtered = Data.filter((item) => {
            const searchFields = [
                item.nama_produk,
                item.merk,
                item.pemilik_merk,
                item.jenis_produk,
                item.perusahaan_distributor,
                item.pabrik,
                item.type,
            ];

            const matchesSearch = searchFields.some((field) =>
                field.toLowerCase().includes(searchQuery)
            );

            const matchesFilters =
                (!filters.asal_produk ||
                    item.asal_produk === filters.asal_produk) &&
                (!filters.ruangan ||
                    item.serial_number.some(
                        (serial) => serial.position === filters.ruangan
                    )) &&
                (!filters.tahun || item.tahun === filters.tahun);

            return matchesSearch && matchesFilters;
        });

        setFilteredItems(filtered);
        setCurrent(1);
    };

    const paginate = (e) => {
        if (e.selected < 0 || e.selected > totalPages) return;
        setCurrent(e.selected + 1);
    };

    const last = current * display;
    const first = last - display;

    const totalPages = Math.ceil(filteredItems.length / display);

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
                            <input
                                type="text"
                                placeholder="Search..."
                                value={search}
                                onChange={handleSearchChange}
                            />
                            <IoIosSearch />
                        </div>
                    </div>
                    <div className="catalog-filter-input">
                        <label htmlFor="country">Asal Negara</label>
                        <select
                            name="asal_produk"
                            value={filters.asal_produk}
                            onChange={handleFilterChange}
                        >
                            <option value="">Search</option>
                            <option value="Negara 1">Negara 1</option>
                            <option value="Negara 2">Negara 2</option>
                        </select>
                    </div>
                    <div className="catalog-filter-input">
                        <label htmlFor="room">Ruangan</label>
                        <select
                            name="ruangan"
                            value={filters.ruangan}
                            onChange={handleFilterChange}
                        >
                            <option value="">Search</option>
                            <option value="Ruang Mawar">Ruang Mawar</option>
                            <option value="Ruang Melati">Ruang Melati</option>
                        </select>
                    </div>
                    <div className="catalog-filter-input">
                        <label htmlFor="year">Tahun</label>
                        <select
                            name="tahun"
                            value={filters.tahun}
                            onChange={handleFilterChange}
                        >
                            <option value="">Search</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                        </select>
                    </div>
                </div>
                <div className="catalog-filter-button">
                    <button
                        className="filter"
                        onClick={() => setfilterActive(!filterActive)}
                    >
                        <CiFilter />
                    </button>
                    <div>
                        <button className="reset" onClick={handleReset}>
                            Reset
                        </button>
                        <button className="search" onClick={handleSearch}>
                            Search
                        </button>
                    </div>
                </div>
            </div>
            <div className="line"></div>
            <div className="catalog-content">
                <div className="catalog-content-main">
                    {filteredItems.slice(first, last).map((item, index) => {
                        return <Item key={index} item={item} />;
                    })}
                </div>
            </div>
            <ReactPaginate
                breakLabel="..."
                nextLabel={<IoIosArrowForward />}
                onPageChange={paginate}
                pageRangeDisplayed={2}
                marginPagesDisplayed={1}
                pageCount={totalPages}
                previousLabel={<IoIosArrowBack />}
                renderOnZeroPageCount={null}
                className="catalog-page"
                pageClassName="page-number"
                forcePage={current - 1}
            />
        </div>
    );
}

export default Catalog;
