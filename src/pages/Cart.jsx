import React, { useContext } from "react";
import CartContext from "../store/cart-context";
import CartItem from "../components/CartItem";
const Cart = () => {
  const cartCtx = useContext(CartContext);

  return (
    <div className="m-12 p-12 border ">
      <div className=" flex flex-col items-start justify-between space-y-4">
        {cartCtx.items.map((cartItem) => (
          <CartItem cartItem={cartItem} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
