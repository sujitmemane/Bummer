import React from "react";
import { useState, useEffect } from "react";
import CollectionPageElement from "../components/CollectionPageElement";
const Collection = () => {
  const [underwears, setUnderwears] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      const respone = await fetch("/api/underwears");
      const result = await respone.json();
      const underwearData = result.underwears;

      setUnderwears(underwearData);
    };
    fetchAPI();
  }, []);
  const shuffleArray = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  const randomizedArray = shuffleArray([...underwears]);
  return (
    <div className="my-24">
      <div className="my-4 p-8 flex flex-col items-center justify-center space-y-4">
        <p className="uppercase text-xs">
          Home <span className="opacity-30">/ </span> Collection{" "}
          <span className="opacity-30">/ </span>
        </p>
        <h1 className="text-5xl text-center font-bold text-black">
          All Inactivewear
        </h1>
      </div>
      <div className="px-4 py-2 text-lg ">{underwears.length} products</div>
      <div className="grid md:grid-cols-4 px-12  mt-8 items-start gap-7 ">
        {randomizedArray.map((product) => (
          <CollectionPageElement key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Collection;
