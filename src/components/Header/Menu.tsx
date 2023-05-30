import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../reducers/hooks";
import { setIsLoading } from "../../reducers/projectSlice";
import { motion, stagger, useAnimation, useAnimate } from "framer-motion";

import menu_pole from "../../images/menu_pole.png";
import menu_plate from "../../images/menu_plate.png";

type MenuProps = {
  isMenuOpen?: boolean;
};

const Menu = ({ isMenuOpen }: MenuProps) => {
  const isLoading = useAppSelector((state) => state.project.isLoading);
  const location = useLocation();
  const pages = ["contact", "about", "projects", "home"];
  const dispatch = useAppDispatch();

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

  {
    /* Currently checking isLoading for panel animation completion before enabling 'to' prop. However still doesnt work - spam clicking routes breaks the routes */
  }
  return (
    <motion.div
      className="absolute bottom-[35%] right-[8.2%] w-full z-10 pointer-events-none drop-shadow-2xl"
      key="Menu"
      variants={direction}
      initial="close"
      animate={isMenuOpen && !isLoading ? "open" : "close"}
      exit="close"
    >
      <img
        src={menu_pole}
        className="transform translate-x-[0%] w-[2%] float-right drop-shadow-lg"
      />

      {pages.map((page, index) => {
        return (
          <Link
            // style={{ pointerEvents: "none" }}
            onClick={() => dispatch(setIsLoading(true))}
            key={page}
            to="/"
            state={{ value: page }}
            className={`absolute bottom-[${
              17 * (index + 1)
            }%] -right-[2.5%] w-full ${
              location.pathname === "/" + page
                ? "pointer-events-none"
                : "cursor-pointer pointer-events-auto"
            }`}
          >
            <span className="absolute top-0 right-0 bg-green-500 z-50">
              {page}
            </span>
            <motion.img
              src={menu_plate}
              className={`absolute bottom-0 right-0 w-[7%] drop-shadow-2xl`}
              variants={options}
            />
          </Link>
        );
      })}
    </motion.div>
  );
};

export default Menu;
