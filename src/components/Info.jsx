import React from "react";
import { FaFeatherAlt, FaTemperatureHigh, FaLaugh } from "react-icons/fa";

const Info = () => {
  return (
    <div className=" p-8 md:p-24 flex flex-col items-center justify-between space-y-12">
      <h1
        className="text-3xl md:text-4xl max-w-xl text-center font-bold text-black
      "
      >
        A great day starts with a great pair of undies
      </h1>

      <div className="flex flex-row items-center justify-center text-black space-x-16">
        <div className="flex flex-col items-center justify-between space-y-2 ">
          <FaFeatherAlt size={50} />
          <h2 className="text-xs  text-center font-semibold  uppercase">
            Super-Soft
          </h2>
        </div>
        <div className="flex flex-col items-center justify-between space-y-2 ">
          <FaTemperatureHigh size={50} />
          <h2 className="text-xs  font-semibold  uppercase">Breathable</h2>
        </div>
        <div className="flex flex-col items-center justify-between space-y-2 ">
          <FaLaugh size={50} />
          <h2 className="text-xs font-semibold  uppercase">Expressive</h2>
        </div>
      </div>
    </div>
  );
};

export default Info;
