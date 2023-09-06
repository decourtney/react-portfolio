import Media from "react-media";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loading from "../pages/Loading";
import MobileHome from "../pages/MobileTemp";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <>
      <Media queries={{ small: { maxWidth: 599 } }}>
        {(matches) =>
          matches.small ? (
            <MobileHome />
          ) : (
            <>
              <Header />
              <main className="relative flex flex-grow overflow-hidden scrollbar-hide">
                <AnimatePresence mode="wait">
                  <Routes key={location.pathname} location={location}>
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
          )
        }
      </Media>
    </>
  );
}

export default AnimatedRoutes;
