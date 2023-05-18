import React from "react";
import { Link } from "react-router-dom";
const SampleWearElement = ({ underwear }) => {
  return (
    <Link to={`/collection/${underwear.id}`}>
      <div className="w-60 flex flex-col  justify-center space-y-1 cursor-pointer">
        <img src={underwear.imageUrl} className="w-60" />
        <h1 className="font-bold px-1  text-black">{underwear.name}</h1>
        <div className="flex flex-row items-center justify-between px-1 ">
          <p>₹ {underwear.price} </p>
          <p className="opacity-50">+ colors</p>
        </div>
      </div>
    </Link>
  );
};

export default SampleWearElement;
