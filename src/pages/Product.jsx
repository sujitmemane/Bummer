import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FiFeather } from "react-icons/fi";
import { TbArrowAutofitWidth } from "react-icons/tb";
import { GiSplitCross } from "react-icons/gi";
import { FiArrowUp, FiArrowDown } from "react-icons/fi";

const Product = () => {
  const params = useParams();
  const [productData, setProductData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/underwears/${params.id}`);
      const result = await response.json();
      setProductData(result.underwears);
    };
    fetchData();
  }, [params.id]);

  const [accordion, setAccordion] = useState([
    {
      id: "1",
      qs: "What are Bummer Garments made of?",
      ans: "All our Undies, Pyjamas & Bralettes are made of sustainably sourced Micro Modal fabric. Our Tees & Shorts are further upgraded & made with a combination of Modal & Terry giving it a much more plush & cozy feeling.",
      open: false,
    },
    {
      id: "2",
      qs: "What is your Return/Exchange Policy?",
      ans: "Typically, all our garments qualify for an exchange within a 14 day delivery window. ",
      open: true,
    },
    {
      id: "3",
      qs: "How long does Shipping usually take?",
      ans: "Orders are typically processed within 48 working hours before shipping.",
      open: false,
    },
  ]);
  const toggleChangeHandler = (id) => {
    const newAccordion = accordion.map((accord) => {
      if (accord.id === id) {
        return {
          ...accord,
          open: !accord.open,
        };
      } else {
        return {
          ...accord,
          open: false,
        };
      }
    });
    setAccordion(newAccordion);
  };
  return (
    <div className="container mx-auto my-12">
      <div className="my-4 p-8 flex flex-col items-center justify-center space-y-4">
        <p className="uppercase text-xs">
          Home <span className="opacity-50">/ </span> Collection{" "}
          <span className="opacity-50">/ </span>{" "}
          <span className="font-bold">{productData.name}</span>
        </p>
      </div>
      <div className="flex flex-row items-center justify-between p-12 space-x-24">
        <div className="md:w-1/2">
          <img src={productData.imageUrl} className="w-full" />
        </div>
        <div className="md:w-1/2 flex flex-col items-start justify-center space-y-4">
          <h1 className="text-black text-4xl font-bold">{productData.name}</h1>
          <p className="text-black text-2xl ">
            ₹{productData.price}
            <span className="text-sm mx-4">(Incl. of all taxes)</span>
          </p>
          <div className="text-black  w-full ">
            <h1 className="text-2xl font-bold uppercase text-black my-2">
              PRODUCT HIGHLIGHTS
            </h1>
            <div className="flex flex-row font-semibold items-center justify-between flex-1 p-8 ">
              <div className="flex flex-col justify-between items-center space-y-2">
                <FiFeather size={50} />
                <p className="text-center">Feels Soft & Cozy</p>
              </div>
              <div className="flex flex-col justify-between items-center space-y-2">
                <TbArrowAutofitWidth size={50} />
                <p className="text-center max-w-xs">Body Adaptive Fit</p>
              </div>
              <div className="flex flex-col  justify-between items-center space-y-2">
                <GiSplitCross size={50} />
                <p className="text-center max-w-sm">Made with MicroModal</p>
              </div>
            </div>
          </div>
          <form className="flex flex-row items-center justify-between  space-x-2  ">
            <input
              type="number"
              max="5"
              min="1"
              defaultValue="1"
              className=" px-8 input py-3 text-xl rounded text-center text-black font-bold border-2 border-black "
            />
            <button className="px-28 py-3 text-xl tect-black bg-[#F7D031] border-2 text-black font-bold border-black">
              ADD TO CART
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between space-y-4 text-black">
        <h1 className="text-4xl font-bold ">FAQs</h1>
        <div className="w-[600px] ">
          {accordion.map((accord) => {
            console.log(accord.open);
            return (
              <div className=" p-2">
                <div
                  onClick={() => toggleChangeHandler(accord.id)}
                  className=" cursor-pointer flex flex-row items-center justify-between text-xl font-bold py-4  "
                >
                  <div>{accord.qs}</div>
                  {accord.open ? <FiArrowUp /> : <FiArrowDown />}
                </div>
                {accord.open ? (
                  <div className="text-md fade-in-top">{accord.ans}</div>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;
