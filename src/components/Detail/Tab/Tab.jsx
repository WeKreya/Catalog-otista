import React, { useState } from "react";
import "../Tab/Tab.css";

function Tab({ data }) {
    const [activeTab, setActiveTab] = useState("spesifikasi");

    console.log(data);

    const convertToParagraph = (string) => {
        const formattedText = string
            .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>") // **text** for bold
            .replace(/__(.*?)__/g, "<u>$1</u>") // __text__ for underline
            .replace(/_(.*?)_/g, "<i>$1</i>") // _text_ for italic
            .replace(/\n/g, "<br />"); // Handle line breaks
        return { __html: formattedText };
    };

    const renderContent = () => {
        // TAB 1
        if (activeTab === "spesifikasi") {
            return (
                <div className="tabs-content-main">
                    <h2>Spesifikasi</h2>
                    <div className="row">
                        <h5>Nama Produk</h5>
                        <p>{data.nama_produk}</p>
                    </div>
                    <div className="row">
                        <h5>Tipe</h5>
                        <p>{data.type}</p>
                    </div>
                    <div className="row">
                        <h5>Merk</h5>
                        <p>{data.merk}</p>
                    </div>
                    <div className="row">
                        <h5>Nama Pemilik Merk</h5>
                        <p>{data.pemilik_merk}</p>
                    </div>
                    <div className="row">
                        <h5>Jenis Produk</h5>
                        <p>{data.jenis_produk}</p>
                    </div>
                    <div className="row">
                        <h5>Nomor Izin Edar</h5>
                        <p>{data.no_izin_edar}</p>
                    </div>
                    <div className="row">
                        <h5>Perusahaan Distributor</h5>
                        <p>{data.perusahaan_distributor}</p>
                    </div>
                    <div className="row">
                        <h5>Nama Pabrik (Principle)</h5>
                        <p>{data.pabrik}</p>
                    </div>
                    <div className="row">
                        <h5>Garansi</h5>
                        <p>{data.garansi}</p>
                    </div>
                    <div className="row">
                        <h5>Suku Cadang/Sparepart</h5>
                        <p className="badge">{data.spare_part}</p>
                    </div>
                    <div className="row">
                        <h5>Informasi Lainnya</h5>
                        <p
                            dangerouslySetInnerHTML={convertToParagraph(
                                data.lainnya
                            )}
                        ></p>
                    </div>
                    <div className="row">
                        <h5>Asal Negara</h5>
                        <p>{data.asal_produk}</p>
                    </div>
                </div>
            );
            // TAB 2
        } else if (activeTab === "pengadaan") {
            return (
                <div className="tabs-content-main">
                    <h2>Pengadaan dan Kalibrasi</h2>
                    <div className="row">
                        <h5>Tahun Pengadaan</h5>
                        <p>{data.tahun}</p>
                    </div>
                    <div className="row">
                        <h5>Sumber Dana</h5>
                        <p>{data.dana}</p>
                    </div>
                    <div className="row">
                        <h5>Serial Number</h5>
                        <div className="value">
                            <ul>
                                {data.serial_number.map((number, i) => {
                                    return (
                                        <li key={i}>
                                            {number.id} - {number.position}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <h5>Harga</h5>
                        <p>
                            {data.harga.toLocaleString("id-ID", {
                                style: "currency",
                                currency: "IDR",
                            })}
                        </p>
                    </div>
                    <div className="row">
                        <h5>Manual Book</h5>
                        <a href={data.manual_book}>Open Manual Book</a>
                    </div>
                    <div className="row">
                        <h5>Service Manual</h5>
                        <a href={data.service_manual}>Open Service Manual</a>
                    </div>
                    <div className="row">
                        <h5>Berita Acara</h5>
                        <a href={data.berita_acara}>Open Berita Acara</a>
                    </div>
                    <h2>Kalibrasi</h2>
                    <div className="row">
                        <h5>Terkalibrasi</h5>
                        <p>{data.kalibrasi}</p>
                    </div>
                    <div className="row">
                        <h5>Sertifikat Kalibrasi</h5>
                        <a href={data.sertifikat_kalibrasi}>
                            Open Sertifikat Kalibrasi
                        </a>
                    </div>
                </div>
            );
            // TAB 3
        } else if (activeTab === "progress") {
            return (
                <div className="tabs-content-main">
                    <h2>Progress</h2>
                    <div className="row">
                        <h5>Barang Habis Pakai</h5>
                        <ul>
                            {data.pemakaian.map((data, i) => {
                                return <li>{data}</li>;
                            })}
                        </ul>
                    </div>
                    <div className="row">
                        <h5>Preventive Maintenance</h5>
                        <ul>
                            {data.maintenance.map((data, i) => {
                                return <li>{data}</li>;
                            })}
                        </ul>
                    </div>
                    <div className="row">
                        <h5>Pemeliharaan</h5>
                        <ul>
                            {data.pemeliharaan.map((data, i) => {
                                return <li>{data}</li>;
                            })}
                        </ul>
                    </div>
                    <div className="row">
                        <h5>Perbaikan</h5>
                        <ul>
                            {data.perbaikan.map((data, i) => {
                                return <li>{data}</li>;
                            })}
                        </ul>
                    </div>
                    <div className="row">
                        <h5>Nomor Teknisi Distributor</h5>
                        <p>{data.contact_distributor}</p>
                    </div>
                </div>
            );
        }
    };
    return (
        <div className="tabs">
            <div className="tabs-option">
                <button
                    className={activeTab === "spesifikasi" ? "active" : ""}
                    onClick={() => setActiveTab("spesifikasi")}
                >
                    Spesifikasi
                </button>
                <button
                    className={activeTab === "pengadaan" ? "active" : ""}
                    onClick={() => setActiveTab("pengadaan")}
                >
                    Pengadaan dan Kalibrasi
                </button>
                <button
                    className={activeTab === "progress" ? "active" : ""}
                    onClick={() => setActiveTab("progress")}
                >
                    Progress
                </button>
            </div>

            <div className="tabs-content">{renderContent()}</div>
        </div>
    );
}

export default Tab;
