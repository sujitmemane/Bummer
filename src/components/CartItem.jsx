import React from "react";

const CartItem = ({ cartItem }) => {
  return (
    <div className="flex flex-col items-start justify-between space-y-2">
      <h1 className="text-md font-bold uppercase"> {cartItem.name} </h1>
      <div>
        
      </div>
    </div>
  );
};

export default CartItem;
