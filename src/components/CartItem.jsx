import React from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { ImCross } from "react-icons/im";
const CartItem = ({ cartItem }) => {
  return (
    <div className="flex flex-col items-start text-black justify-between space-y-4 border w-[400px] p-4">
      <h1 className="text-xl font-bold capitalize"> {cartItem.name} </h1>
      <div className="flex flex-row items-center justify-between w-full ">
        <div className="flex flex-row items-center space-x-2">
          <span className="font-bold italic">Rs {cartItem.price}</span>
          <span>
            <ImCross size={30} />
          </span>
          <span>{cartItem.amount} </span>
        </div>
        <div className="flex flex-row items-center justify-between space-x-4">
          <AiFillPlusCircle size={40} />
          <AiFillMinusCircle size={40} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
