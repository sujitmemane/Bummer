import React from "react";
import { Link } from "react-router-dom";
const Announcement = () => {
  return (
    <div className="bg-[#F7D031] p-2 md:p-3 flex flex-row items-center justify-center border-b-2 border-black ">
      <p className="text-sm md:text-[12px]  font-bold tracking-wide ">
        JUST LAUNCHED:{" "}
        <Link to="collection" className="underline">
          SHORTS & TEES.
        </Link>
        <p className="hidden md:block">
          {" "}
          USE NEW400 TO GET ₹400 OFF YOUR ORDER OVER ₹1999/-{" "}
        </p>
      </p>
    </div>
  );
};

export default Announcement;
