import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import panelSlice from "./reducers/projectSlice";
import store from "./reducers/store";

import AnimatedRoutes from "./routes";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loading from "./pages/Loading";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <Provider store={store}>
      <Router >
        <AnimatedRoutes />
      </Router>
    </Provider>
  );
}

export default App;
