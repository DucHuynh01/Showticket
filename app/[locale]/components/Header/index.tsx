"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import Logo from "./Logo";
import MainMenu from "./MainMenu";
import HeaderTools from "./HeaderTools";

import { GetMenuData, GetLanguage } from "../../apis/GetDataHome";
import NavToggle from "./NavToggle";

const Header = () => {
  const [dataMenu, setDataMenu] = useState([]);
  const [languageData, setLanguageData] = useState([]);

  const dataMenuFetch = async () => {
    try {
      const res = await GetMenuData();
      const resLanguage = await GetLanguage();
      setDataMenu(res.data);
      setLanguageData(resLanguage.data);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(dataMenu);


  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    dataMenuFetch();
    window.addEventListener("scroll", handleStickyNavbar);
  }, []);

  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    if (window.innerWidth <= 1199) {
      setNavbarOpen(!navbarOpen);
      document.querySelector("body").classList.toggle("NavOpen");
    }
  };

  return (
    <>
      <header
        id="Header"
        className={`header ease-linear z-[1000] duration-100 top-0 left-0 flex flex-col w-full items-center justify-start bg-transparent ${sticky
          ? "!fixed !z-[9999] !bg-white  shadow-sticky backdrop-blur-sm !transition dark:!bg-[green] dark:!bg-opacity-20"
          : " !bg-white !bg-opacity-50"
          }`}
      >
        <div className={"w-full py-2 xl:py-0 px-2 sm:px-[20px] "}>
          <div
            className={`relative -mx-4 flex items-center justify-between ${sticky ? "animate-fadeInUp" : "py-0"
              }`}
          >
            <NavToggle
              navbarToggleHandler={navbarToggleHandler}
              navbarOpen={navbarOpen}
            />
            <Logo />
            <MainMenu
              dataMenu={dataMenu}
              navbarOpen={navbarOpen}
              navbarToggleHandler={navbarToggleHandler}
            />
            <HeaderTools languageData={languageData} />
          </div>
        </div>

        <div className="flex h-[6px] w-full">
          <div className="h-[6px] w-[20%] bg-[#fa7305]"></div>
          <div className="h-[6px] w-[60%] bg-[#09b50c]"></div>
          <div className="h-[6px] w-[20%] bg-[#b55609]"></div>
        </div>
      </header>

      {sticky && <div className="h-20"></div>}
    </>
  );
};

export default Header;