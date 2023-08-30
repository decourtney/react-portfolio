import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../reducers/hooks";
import { setIsLoading } from "../../reducers/projectSlice";
import { motion, stagger, useAnimation, useAnimate } from "framer-motion";
import menu_pole from "../../images/menu_pole.png";
import menu_plate from "../../images/menu_plate.png";

type MenuProps = {
  isMenuOpen?: boolean;
  handleMouseClick: () => void;
};

const direction = {
  close: {
    y: "6%",
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    y: "97%",
    transition: {
      type: "spring",

      duration: 1,
      ease: "easeOut",
      staggerChildren: 0.1,
      staggerDirection: 1,
    },
  },
};

const options = {
  close: {
    rotate: 90,
    transition: {
      type: "spring",
      duration: 0.2,
      ease: "easeOut",
    },
  },
  open: {
    rotate: 0,
    transition: {
      type: "spring",
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Menu = (props: MenuProps) => {
  const isLoading = useAppSelector((state) => state.project.isLoading);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const pages = ["contact", "projects", "about", "home"];

  const handleMouseLeave = () => {
    // props.handleMouseClick();
  };

  useEffect(() => {
    const closeMenu = () => {};
    setTimeout(() => {}, 3000);
  },[]);

  return (
    <motion.div
      className="absolute bottom-[35%] right-[0%] w-full z-10 pointer-events-none drop-shadow-2xl will-change-transform"
      key="Menu"
      variants={direction}
      initial="close"
      animate={props.isMenuOpen && !isLoading ? "open" : "close"}
      exit="close"
    >
      <img
        src={menu_pole}
        className="translate-x-[0%] w-[2%] ml-[89.85%] drop-shadow-lg"
      />

      {pages.map((page, index) => {
        return (
          <div key={page} className={`absolute bottom-0 left-0 w-full h-full`}>
            <Link
              className={`${
                location.pathname === "/" + page
                  ? "pointer-events-none"
                  : "cursor-pointer pointer-events-auto"
              }`}
              onClick={() => {
                props.handleMouseClick();
                dispatch(setIsLoading(true));
              }}
              to="/"
              state={{ value: page }}
            >
              <motion.div
                className="absolute right-[5.6%] w-[7%] drop-shadow-lg will-change-transform"
                style={{ bottom: `${17 * (index + 0.7)}%` }}
                variants={options}
              >
                <div
                  className={`absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-[53%] ${
                    location.pathname === "/" + page
                      ? "text-black"
                      : "text-white"
                  }`}
                >
                  <motion.p
                    className="text-[1vw] text-center tracking-widest"
                    // style={{ color: "#fff", textShadow: "0 0 10px #2eff00" }}
                    animate={{
                      textShadow: `${
                        location.pathname !== "/" + page
                          ? [
                              "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #167a00, 0 0 40px #167a00, 0 0 50px #167a00, 0 0 60px #167a00, 0 0 70px #167a00",
                              "0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #2eff00, 0 0 50px #2eff00, 0 0 60px #2eff00, 0 0 70px #2eff00, 0 0 80px #2eff00",
                            ]
                          : null
                      }`,
                      transition: {
                        duration: 1,
                        repeat: Infinity,
                        repeatType: "reverse",
                      },
                    }}
                  >
                    {page.toUpperCase()}
                  </motion.p>
                </div>
                <img src={menu_plate} className="w-[100%]" />
              </motion.div>
            </Link>
          </div>
        );
      })}
    </motion.div>
  );
};

export default Menu;
