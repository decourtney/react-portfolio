import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";

type MenuProps = {
  isMenuOpen?: boolean;
};

const Menu = ({ isMenuOpen }: MenuProps) => {
  const location = useLocation();
  const pages = ["home", "projects", "about", "contact"];
  const menuDropdown = useAnimation();
  const menuOptions = useAnimation();

  const direction = {
    close: {
      y: 0,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        staggerChildren: 1,
      },
    },
    open: {
      y: "100%",
      transition: {
        duration: 2,
        ease: "easeInOut",
        staggerChildren: 1,
        staggerDirection: -1,
      },
    },
  };

  const listVariants = {
    close: {
      opacity: 0,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  useEffect(() => {
    const sequence = async () => {
      if (isMenuOpen) {
        await menuDropdown.start(isMenuOpen ? direction.open : direction.close);
        await menuOptions.start(
          isMenuOpen ? listVariants.open : listVariants.close
        );
      } else {
        await menuOptions.start(
          isMenuOpen ? listVariants.open : listVariants.close
        );
        await menuDropdown.start(isMenuOpen ? direction.open : direction.close);
      }
    };
  }, [isMenuOpen]);

  return (
    <motion.div
      className="absolute top-[0%] right-[0%] bg-gray-200 p-2 z-10 shadow-md"
      key="Menu"
      variants={direction}
      initial="close"
      animate={isMenuOpen ? "open" : "close"}
      exit="close"
    >
      <ul className="flex flex-col space-y-4">
        {pages.map((page) => {
          return (
            <motion.li key={page} variants={listVariants}>
              <Link
                to="/"
                state={{ value: page }}
                className={`mr-6 ${
                  location.pathname === page ? "pointer-events-none" : ""
                }`}
              >
                {page}
              </Link>
            </motion.li>
          );
        })}
      </ul>
    </motion.div>
  );
};

export default Menu;
