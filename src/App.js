import React, { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import Contact from "./pages/Contact";
import { About } from "./pages/About";
import Portfolio from "./pages/Portfolio";
import { NavBar } from "./components/NavBar";
import { ParallaxProvider } from "react-scroll-parallax";
import Footer from "./components/Footer";
import "./css/style.css";
import ScrollToTop from "./components/ScrollToTop";

function App() {
    const [yOffset, setYOffset] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });
    function handleScroll() {
        const currentYOffset = window.pageYOffset;
        const visible = yOffset > currentYOffset;

        setYOffset(currentYOffset);
        setVisible(visible);
    }

    return (
        <React.Fragment>
            <NavBar visible={visible} />
            <ParallaxProvider>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </ParallaxProvider>
            <Footer />
        </React.Fragment>
    );
}

export default App;
