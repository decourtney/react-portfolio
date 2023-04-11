import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import Main from "./pages/Main";
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

        <Main linkClicked={linkClicked} />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
