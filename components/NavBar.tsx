import { NextComponentType } from "next";
import NavItem from "./NavItem";

import { useEffect, useState } from "react";

const NavBar: NextComponentType = () => {
  const [scroll, setScroll] = useState(false);
  const [navbar, setNavbar] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 1);
    });
  }, []);

  const popUpNav = () => {
    setNavbar(!navbar);
  };

  return (
    <nav
      className={
        (scroll ? "backdrop-blur-xl lg:h-20 " : "lg:h-32 ") +
        (navbar ? "h-80" : "h-32 ") +
        " sticky top-0 z-50 flex flex-col lg:flex-row transition-[height]"
      }
    >
      <NavItem
        navID="#top"
        // className="flex font-[blast] lg:flex  px-6 lg:px-14 my-auto py-1 cursor-pointer  text-center h-full whitespace-nowrap text-[3rem] mr-auto"
        className=" font-[blast] mr-auto flex px-6 lg:px-14 py-6 cursor-pointer h-30  whitespace-nowrap  leading-10  text-[3rem]"
        content="Anupama D."
        noUnderline
      />
      <NavItem content="About Me" nav={navbar} />
      <NavItem content="My Work" nav={navbar} />
      <NavItem content="Contact Me" nav={navbar} />
    </nav>
  );
};

export default NavBar;
