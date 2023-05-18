import React from "react";
import Logo from "../assets/logo.webp";
import { AiOutlineUser, AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import Underwear from "./../assets/underwear.webp";
const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-between space-x-4 px-6 py-4 border-b-2 border-black">
      <div className=" md:w-1/3">
        <Link to="..">
          <img src={Logo} alt="Bummer Logo" className="w-32  " />
        </Link>
      </div>

      <ul className="md:w-1/3 flex flex-row  space-x-8 items-center justify-center uppercase text-sm font-bold px-4">
        <li>
          <Link to="/">HOME</Link>{" "}
        </li>
        <li>
          <Link to="collection">SHOP</Link>{" "}
        </li>
        <li>
          <a href="https://thesujitmemane.vercel.app/" target="_blank">
            About Me
          </a>
        </li>
      </ul>
      <div className="md:w-1/3  flex flex-row  items-center justify-end space-x-4">
        <Link to="cart">
          <div className="relative  p-2 cursor-pointer ">
            <span className="absolute bg-[#343a40] text-white rounded-full px-1 -ml-2 -mt-2 text-xs">
              0
            </span>

            <img src={Underwear} className="w-11 h-8" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
