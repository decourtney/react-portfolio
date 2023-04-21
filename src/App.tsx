import React, { useState } from "react";
<<<<<<< Updated upstream
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

=======
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import panelSlice from './reducers/panelSlice'
import store from './reducers/store'

import AnimatedRoutes from "./routes";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
>>>>>>> Stashed changes
import Header from "./components/Header";
import Main from "./pages/Main";
import Footer from "./components/Footer";
import { AnimatePresence } from "framer-motion";

function App() {
<<<<<<< Updated upstream
  const [linkClicked, setLinkClicked] = useState('');

  const handleLinkClicked = (link: string) => {
    console.log(`${link} was clicked`);
    setLinkClicked(link);
  };

  console.log("App link reference: " + linkClicked);

  return (
    <Router>
      <div className="flex flex-col h-screen overflow-hidden">
        <Header onLinkClicked={handleLinkClicked} />

        <Main linkClicked={linkClicked} />

        <Footer />
      </div>
    </Router>
=======

  return (
    <Provider store={store}>
        <Router>      
          <AnimatedRoutes />
        </Router>
    </Provider>
>>>>>>> Stashed changes
  );
}

export default App;
