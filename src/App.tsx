import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./reducers/store";
import { PersistGate } from "redux-persist/integration/react";
import AnimatedRoutes from "./routes";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AnimatePresence } from "framer-motion";
import Loading from "./pages/Loading";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Header />
          <main className="relative flex flex-grow overflow-hidden scrollbar-hide">
            {/* <AnimatePresence mode="wait"> */}
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
            {/* </AnimatePresence> */}
          </main>
          <Footer />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
