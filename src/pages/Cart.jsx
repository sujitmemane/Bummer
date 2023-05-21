import React, { useContext, useState } from "react";
import CartContext from "../store/cart-context";
import CartItem from "../components/CartItem";
import PaymentForm from "../components/PaymentForm";
const Cart = () => {
  const [checkout, setCheckout] = useState(false);
  const cartCtx = useContext(CartContext);
  const checkoutHandler = () => {
    setCheckout(true);
  };
  return (
    <div className="m-12 md:p-8  ">
      <div className=" md:p-4 flex flex-col items-center justify-center space-y-8">
        <p className="uppercase text-xs">
          Home <span className="opacity-30">/ </span> Cart
          <span className="opacity-30">/ </span>
        </p>
        <h1 className=" text-3xl my-4 text-center md:text-5xl font-bold text-black">
          My Cart
        </h1>
      </div>
      {cartCtx.items.length > 0 ? (
        <div className="flex flex-col md:flex-row md:items-start my-2 justify-between">
          <div className=" flex flex-col items-start md:p-3   justify-between space-y-4   ">
            {cartCtx.items.map((cartItem) => (
              <CartItem cartItem={cartItem} />
            ))}
          </div>
          <div className="border w-[400px] p-8 flex flex-col justify-between items-start  ">
            Total Amount : {cartCtx.totalAmount}
            {checkout ? (
              <PaymentForm />
            ) : (
              <button
                className="px-12 py-3 bg-[#F7D031] text-black"
                onClick={checkoutHandler}
              >
                Checkout
              </button>
            )}
          </div>
        </div>
      ) : (
        <h1 className="p-16 flex flex-row items-center justify-center text-3xl font-bold text-black">
          NO ITEMS ADDED IN CART
        </h1>
      )}
    </div>
  );
};

export default Cart;
