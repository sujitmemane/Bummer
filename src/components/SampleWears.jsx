import React, { useState, useEffect } from "react";
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

  return (
    <div className="container mx-auto my-12 flex flex-col items-center  ">
      <h1 className="text-4xl font-bold text-center">Meet our favourites </h1>
      <div className="grid md:grid-cols-4 px-24  mt-8 items-start gap-3 ">
        {underwears.map((underwear) => (
          <SampleWearElement key={underwear.id} underwear={underwear} />
        ))}
      </div>
      <a
        href="#"
        className="px-12 py-3  text-black font-bold border-black border-2"
      >
        SHOP ALL FAVOURITES
      </a>
    </div>
  );
};

export default SampleWears;
