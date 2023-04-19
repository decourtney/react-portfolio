import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  BrowserRouter,
} from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import panelSlice from "./reducers/panelSlice";
import store from "./reducers/store";

import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();

  return (
    <Provider store={store}>
      <Router>
        <div className="flex-col max-h-screen h-screen">
          <Header />
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:project" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
