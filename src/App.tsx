import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [linkClicked, setLinkClicked] = useState("");

  const handleLinkClicked = (link: string) => {
    console.log(`${link} was clicked`);
    setLinkClicked(link);
  };

  console.log("App link reference: " + linkClicked);

  return (
    <Router>
      <div className="flex-col h-screen">
        <Header onLinkClicked={handleLinkClicked} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
