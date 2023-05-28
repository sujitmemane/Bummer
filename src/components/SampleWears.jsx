import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SampleWearElement from "./SampleWearElement";
const SampleWears = () => {
  const [underwears, setUnderwears] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      const respone = await fetch("/api/underwears");
      const result = await respone.json();
      const underwearData = result.underwears;
      const shortList = underwearData.slice(0, 5);
      setUnderwears(shortList);
    };
    fetchAPI();
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="container space-y-4 mx-auto my-8 md:my-12 flex flex-col items-center md:items-center  ">
      <h1 className="text-3xl md:text-4xl font-bold text-center">
        Meet our favourites{" "}
      </h1>
      <div className="grid grid-cols-1 border items-center justify-center md:grid-cols-4 md:px-24  mt-8 md:items-start gap-5 ">
        {underwears.map((underwear) => (
          <SampleWearElement key={underwear.id} underwear={underwear} />
        ))}
      </div>
      <Link
        to="collection"
        onClick={scrollToTop}
        className="px-12 py-5  text-black font-bold border-black border-2"
      >
        SHOP ALL FAVOURITES
      </Link>
    </div>
  );
};

export default SampleWears;
