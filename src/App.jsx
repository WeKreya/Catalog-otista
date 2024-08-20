import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Catalog from "./components/Catalog/Catalog";
import Detail from "./components/Detail/Detail";
import "./App.css";

function App() {
    const location = useLocation();
    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);

    const Link = () => {
        return (
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Navbar />
                            <Outlet />
                            <Footer />
                        </>
                    }
                >
                    <Route index element={<Home />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/detail/:id" element={<Detail />} />
                </Route>
            </Routes>
        );
    };

    return (
        <div>
            <Link />
        </div>
    );
}

export default App;
