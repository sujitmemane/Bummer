import React from "react";
import Logo from "./../assets/logo.webp";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-[#F7D031] p-8  border-black border-2 flex flex-row items-center justify-center md:justify-between">
      <img src={Logo} className="w-48" />
      <div className="hidden md:block">
        <ul className=" flex flex-row  space-x-8 items-center justify-center uppercase text-sm font-bold px-4">
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
      </div>
    </div>
  );
};

export default Footer;
