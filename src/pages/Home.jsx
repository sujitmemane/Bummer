import React, { useEffect, useState, useContext } from "react";
import Hero from "./../assets/hero.webp";
import Mention from "../components/Mention";
import SampleWears from "../components/SampleWears";
import Reviews from "../components/Reviews";
import Deal from "../components/Deal";
import Category from "../components/Category";
import Info from "../components/Info";
import { Link } from "react-router-dom";
import cartContext from "../store/cart-context";

const Home = () => {
  const cartCtx = useContext(cartContext);
  console.log(cartCtx.items);
  return (
    <div>
      <div
        className="bg-cover   bg-no-repeat  h-[28rem] bg-gradient-to-b from-black via-black-opacity-46 to-transparent"
        style={{
          backgroundImage: `url(${Hero})`,
          backgroundPosition: "top",
          filter: "contrast(0.9)",
        }}
      >
        <div className="px-8 py-40  flex flex-col space-y-8 items-center justify-between">
          <h1 className="text-6xl text-white font-bold text-shadow">
            Introducing 24/7 Inactivewear
          </h1>
          <p className="text-xl text-white  text-shadow">
            New In: Tees & Shorts
          </p>
          <div className="flex flex-row items-center justify-center space-x-3 ">
            <Link
              to="collection"
              className="text-black border-2 border-black text-md bg-white px-6 py-4 font-bold"
            >
              SHOP TEES AND SHORTS
            </Link>
            <Link
              to="collection"
              className="text-black border-2 border-black text-md bg-white px-8 py-4 font-bold"
            >
              SHOP UNDIES
            </Link>
          </div>
        </div>
      </div>
      <Mention />
      <SampleWears />
      <Reviews />
      <Deal />
      <Category />
      <Info />
    </div>
  );
};

export default Home;
