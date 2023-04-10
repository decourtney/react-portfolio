import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  const [linkClicked, setLinkClicked] = useState("home");

  const handleLinkClicked = (link: string) => {
    console.log(`${link} was clicked`);
    setLinkClicked(link);
  };

  console.log("App link reference: " + linkClicked);

  return (
    <Router>
      <div className="flex flex-col h-screen overflow-hidden">
        <Header onLinkClicked={handleLinkClicked} />

        <Home linkClicked={linkClicked} />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
