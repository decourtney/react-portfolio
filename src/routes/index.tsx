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
import NotFound from "../pages/NotFound";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <>
      <Media queries={{ small: { maxWidth: 599 } }}>
        {(matches) =>
          matches.small ? (
            <MobileHome />
          ) : (
            <section
              id="Non-mobile-wrapper"
              className="flex flex-col w-full h-screen min-w-[600px] max-h-screen"
            >
              <Header />
              <main className="relative flex flex-grow overflow-hidden scrollbar-hide">
                <AnimatePresence mode="wait">
                  <Routes key={location.pathname} location={location}>
                    <Route path="/" element={<Loading />} />
                    <Route path="home" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </AnimatePresence>
              </main>
              <Footer />
            </section>
          )
        }
      </Media>
    </>
  );
}

export default AnimatedRoutes;

// flex flex-col w-full h-screen min-w-[700px] max-h-screen
