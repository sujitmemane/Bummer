import React, { useContext } from "react";
import CartContext from "../store/cart-context";
import CartItem from "../components/CartItem";
import PaymentForm from "../components/PaymentForm";
const Cart = () => {
  const cartCtx = useContext(CartContext);

  return (
    <div className="m-12 p-12 border ">
      <div className="flex flex-row items-start justify-between">
        <div className=" flex flex-col items-start border justify-between space-y-4">
          {cartCtx.items.map((cartItem) => (
            <CartItem cartItem={cartItem} />
          ))}
        </div>
        <div className="border w-[400px] p-8 ">
          Total Amount : {cartCtx.totalAmount}
          <PaymentForm />
        </div>
      </div>
    </div>
  );
};

export default Cart;
