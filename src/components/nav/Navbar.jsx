"use client";

import logo from "../../assets/img/logo.svg";
import marker from "../../assets/img/marker.svg";
import bars from "../../assets/img/bars-solid.svg";
import times from "../../assets/img/times-solid.svg";

const Navbar = ({ open, navClose, navOpen }) => {
  return (
    <header className="flex h-24">
      <nav className="z-[10000]  container flex items-center justify-between text-base">
        <img src={logo} alt="starbucks" className="w-10 h-10" />

        <ul className="flex-1 hidden ml-4 space-x-4 font-bold uppercase md:flex">
          <li className="transition-all duration-75 hover:text-green-700">
            <a href="#">Menu</a>
          </li>
          <li className="transition-all duration-75 hover:text-green-700">
            <a href="#">Rewards</a>
          </li>
          <li className="transition-all duration-75 hover:text-green-700">
            <a href="#">Gift Cards</a>
          </li>
        </ul>

        <ul className="items-center hidden space-x-3 md:flex">
          <li className="transition-all duration-75 hover:text-green-700">
            <a href="#" className="flex items-center">
              <img src={marker} alt="marker " className="w-5 h-5 mr-2" />
              <span>Find a store</span>
            </a>
          </li>
          <li className="">
            <a
              href="#"
              className="btn border-[.5px] border-black hover:bg-gray-500 transition-all duration-75"
            >
              Sign in
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white transition-all duration-75 bg-black btn hover:bg-gray-700"
            >
              Join now
            </a>
          </li>
        </ul>

        {open ? (
          <img
            src={times}
            alt="x"
            className="w-8 h-8 cursor-pointer md:hidden"
            onClick={navClose}
          />
        ) : (
          <img
            src={bars}
            alt="BARS"
            className="cursor-pointer md:hidden w-7 h-7"
            onClick={navOpen}
          />
        )}
      </nav>
    </header>
  );
};

export default Navbar;
