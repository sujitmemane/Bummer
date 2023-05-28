import React from "react";
import { Link } from "react-router-dom";
import BG from "./../assets/bg.png";
import D1 from "./../assets/d1.avif";
import D2 from "./../assets/d2.webp";
import D3 from "./../assets/d3.avif";
const Deal = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="bg-[#F7D031] space-y-4 md:space-y-0 z-100 p-8 md:p-24 flex flex-col md:flex-row items-start justify-between ">
        <div className="flex flex-col items-center justify-center space-y-4  md:w-1/2">
          <h1 className="text-black text-2xl font-bold">Matching Undies</h1>
          <p className="text-xs text-center max-w-sm">
            Get a pair of matching undies and experince comfort together!
          </p>
          <img src={D1} className="w-72 h-72 " />
          <Link
            to="collection"
            onClick={scrollToTop}
            className="bg-white text-center border-black border-2 px-16 py-2 font-bold text-black"
          >
            SHOP MATCHING UNDIES
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4  md:w-1/2">
          <h1 className="text-black text-2xl font-bold">Deal of the Week</h1>
          <p className="text-sm text-center">
            Every week select styles upto 50% off!
          </p>
          <img src={D2} className="w-72  h-72" />
          <Link
            to="collection"
            onClick={scrollToTop}
            className="bg-white border-black border-2 px-16 py-2 font-bold text-black"
          >
            SHOP ALL DEALS
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4  md:w-1/2">
          <h1 className="text-black text-2xl font-bold">Build Your Own Pack</h1>
          <p className="text-sm text-center">
            Mix & Match, Any Style, Any Print & Save Upto 25%
          </p>
          <img src={D3} className="w-72 h-72 " />
          <Link
            to="collection"
            onClick={scrollToTop}
            className="bg-white border-black border-2 px-16 py-2 font-bold text-black"
          >
            SHOP NOW
          </Link>
        </div>
      </div>
    </>
  );
};

export default Deal;
