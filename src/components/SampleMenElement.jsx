import React from "react";
import { Link } from "react-router-dom";
const SampleMenElement = ({ menwear }) => {
  return (
    <Link to={`/collection/${menwear.id}`}>
      <div className="w-60 flex flex-col  justify-center space-y-1 cursor-pointer">
        <img src={menwear.imageUrl} className="w-60" />
        <h1 className="font-bold px-1 text-center text-xs text-black">
          {menwear.name}
        </h1>
      </div>
    </Link>
  );
};

export default SampleMenElement;
