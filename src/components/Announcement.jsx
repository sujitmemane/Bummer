import React from "react";

const Announcement = () => {
  return (
    <div className="bg-[#F7D031] p-3 flex flex-row items-center justify-center border-b-2 border-black ">
      <p className="text-[12px]  font-bold tracking-wide ">
        JUST LAUNCHED:{" "}
        <a href="#" className="underline">
          SHORTS & TEES.
        </a>{" "}
        USE NEW400 TO GET ₹400 OFF YOUR ORDER OVER ₹1999/-
      </p>
    </div>
  );
};

export default Announcement;
