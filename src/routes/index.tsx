import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AnimatePresence } from "framer-motion";
import TestRoute from "../pages/testRoute";

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <>
            <Header />
            <AnimatePresence mode="wait">
                <Routes key={location.pathname} location={location}>
                    <Route path='/' element={<TestRoute />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/projects/:project" element={<Projects />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </AnimatePresence>
            <Footer />
        </>
    )
}

export default AnimatedRoutes;