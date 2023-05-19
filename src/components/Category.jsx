import React from "react";
import { useState, useEffect } from "react";
import SampleMenElement from "./SampleMenElement";
import SampleWomenElement from "./SampleWomenElement";
const Category = () => {
  const [menwears, setMenwears] = useState([]);
  const [womenwears, setWomenwears] = useState([]);
  const [activeTab, setActiveTab] = useState("men");
  useEffect(() => {
    const fetchAPI = async () => {
      const respone = await fetch("/api/underwears");
      const result = await respone.json();
      const underwearData = result.underwears;
      const shortListMen = underwearData.slice(6, 10);
      const shortListWomen = underwearData.slice(10, 14);
      setMenwears(shortListMen);
      setWomenwears(shortListWomen);
    };
    fetchAPI();
  }, []);

  return (
    <div
      className="bg-[#e2eef7]  p-24 flex flex-col items-center justify-center space-y-8"
      f
    >
      <h1 className="text-4xl font-bold  text-black">Shop by Category</h1>
      <div className="flex flex-row items-center space-x-4 text-black">
        <button
          onClick={() => setActiveTab("men")}
          className={` ${
            activeTab === "men" ? "bg-black text-white" : ""
          } px-16 py-3   uppercase font-bold  rounded-full shadow  hover:bg-black hover:text-white`}
        >
          Men
        </button>
        <button
          onClick={() => setActiveTab("women")}
          className={` ${
            activeTab === "women" ? "bg-black text-white" : ""
          } px-16 py-3   uppercase font-bold  rounded-full shadow  hover:bg-black hover:text-white`}
        >
          Women
        </button>
      </div>
      {activeTab === "men" && (
        <div className="grid md:grid-cols-4 px-24  mt-8 items-start gap-5 ">
          {menwears.map((menwear) => (
            <SampleMenElement key={menwear.id} menwear={menwear} />
          ))}
        </div>
      )}
      {activeTab === "women" && (
        <div className="grid md:grid-cols-4 px-24  mt-8 items-start gap-5 ">
          {womenwears.map((women) => (
            <SampleWomenElement key={women.id} women={women} />
          ))}
        </div>
      )}
      <a
        href="#"
        className="px-12 py-3 bg-white  text-black font-bold border-black border-2"
      >
        SHOP ALL UNDIES
      </a>
    </div>
  );
};

export default Category;
