// Navbar.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import Button from "../Button";
import NavLinks from "./NavLinks";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="z-20 fixed w-full backdrop-blur-md">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <img src={Logo} alt="logo" className="md:cursor-pointer h-9" />
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center font-[Poppins]">
          <li>
            <Link
              to="/"
              className="py-7 px-5 inline-block hover:border-b-4 hover:border-blue-500"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/About"
              className="py-7 px-5 inline-block hover:border-b-4 hover:border-blue-500"
            >
              About Us
            </Link>
          </li>
          <NavLinks />
        </ul>
        <div className="md:block hidden">
          <Button btnText="Request Call Back" />
        </div>
      </div>

      {/* Mobile nav */}

      <ul
        className={`md:hidden z-20 w-3/5 top-0 h-screen bg-black fixed bottom-0 py-24 pl-4 duration-500 ${open ? "left-0" : "left-[-100%]"
          }`}
      >
        <li>
          <Link to="/" className="py-7 px-3 inline-block">
            Home
          </Link>
        </li>
        <li>
          <Link to="/About" className="py-7 px-3 inline-block">
            About Us
          </Link>
        </li>
        <NavLinks />
        <div className="py-5">
          <Button btnText="Request Call Back" />
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
