import React, { useState } from "react";
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
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AnimatePresence } from "framer-motion";

function App() {

  return (
    <Provider store={store}>
      <div className="flex-col max-h-screen h-screen">
        <Router>      
          <AnimatedRoutes />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
