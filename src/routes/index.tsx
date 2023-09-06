import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AnimatePresence } from "framer-motion";
import Loading from "../pages/Loading";

function AnimatedRoutes() {
  const location = useLocation();

  console.log(location.pathname);
  return (
    <>
      <Header />
      <main className="relative flex flex-grow overflow-hidden scrollbar-hide">
        <AnimatePresence mode="wait">
          {/* <Routes key={location.pathname} location={location}> */}
          <Routes>
            <Route path="/" element={<Loading />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
            {/* <Route path="*" element={<Home />}/> */}
            {/*Need to make a 404 not found page here*/}
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}

export default AnimatedRoutes;
