import React, { useState } from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray hover:text-black"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img
            src={hamburger}
            alt="Hamburger"
            width={24}
            height={24}
            onClick={toggleDropdown}
            className="cursor-pointer"
          />
        </div>
      </nav>
      {isDropdownOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg max-lg:block lg:hidden">
          <ul className="flex flex-col items-start p-4">
            {navLinks.map((item) => (
              <li key={item.label} className="w-full">
                <a
                  href={item.href}
                  className="block w-full py-2 px-4 font-montserrat text-lg text-slate-gray hover:text-black"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Nav;
