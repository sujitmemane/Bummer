import React, { useContext, useState, useRef } from "react";
import StripeCheckout from "react-stripe-checkout";
import CartContext from "../store/cart-context";

const PaymentForm = ({ onClose }) => {
  const CartCtx = useContext(CartContext);
  const [isFormIsValid, setIsFormIsValid] = useState({
    isEnteredNameIsValid: true,
    isEnteredPostalIsValid: true,
    isEnteredCityIsValid: true,
  });

  const isEmpty = (value) => value !== "";
  const have5Chars = (value) => value.trim().length >= 5;

  const enteredNameRef = useRef();
  const enteredPostalRef = useRef();
  const enteredCityRef = useRef();

  const placeOrderHandler = (event) => {
    console.log("clicked");
    event.preventDefault();
    const enteredName = enteredNameRef.current.value;
    const enteredCity = enteredCityRef.current.value;
    const enteredPostal = enteredPostalRef.current.value;
    const isNameValid = isEmpty(enteredName);
    const isPostalValid = have5Chars(enteredPostal);
    const isCityValid = isEmpty(enteredCity);
    setIsFormIsValid({
      isEnteredNameIsValid: isNameValid,
      isEnteredPostalIsValid: isPostalValid,
      isEnteredCityIsValid: isCityValid,
    });
    const formIsValid = isNameValid && isPostalValid && isCityValid;
    if (!formIsValid) {
      return;
    }

    props.onOrder({
      name: enteredName,
      postal: enteredPostal,
      city: enteredCity,
    });
    console.log("Order is Placed");
    console.log(isFormIsValid);
  };

  const nameControlClasses = `control ${
    isFormIsValid.isEnteredNameIsValid ? "" : "border-2 border-red-400"
  }`;
  const postalControlClasses = `control ${
    isFormIsValid.isEnteredPostalIsValid ? "" : "border-2 border-red-400"
  }`;
  const cityControlClasses = `control ${
    isFormIsValid.isEnteredCityIsValid ? "" : "border-2 border-red-400"
  }`;

  const onToken = async (token) => {
    CartCtx.clearCart();
  };

  return (
    <div>
      <form className="form" onSubmit={placeOrderHandler}>
        <div className="my-2">
          <input
            ref={enteredNameRef}
            type="text"
            id="name"
            placeholder="Enter Your Name"
            className="px-12 py-2 overflow-none uppercase outline-none border"
          />
          {!isFormIsValid.isEnteredNameIsValid && (
            <p className="err-text">Please Enter a Valid Name</p>
          )}
        </div>
        <div className="my-2">
          <input
            ref={enteredPostalRef}
            type="text"
            id="postal"
            placeholder="Enter Your Postal Code"
            className="px-12 py-2 overflow-none outline-none border uppercase"
          />
          {!isFormIsValid.isEnteredPostalIsValid && (
            <p className="err-text"> Please Enter a valid Postal Code</p>
          )}
        </div>
        <div className="my-2">
          <input
            ref={enteredCityRef}
            type="text"
            id="city"
            placeholder="Enter Your City"
            className="px-12 py-2 overflow-none outline-none border uppercase"
          />
          {!isFormIsValid.isEnteredCityIsValid && (
            <p className="err-text">Please Enter a valid City Name</p>
          )}
        </div>
        <div className="flex my-2 flex-row items-center justify-between">
          <StripeCheckout
            token={onToken}
            name="Bummer Checkout"
            className="bg-black"
            currency="INR"
            disable={!isFormIsValid}
            amount={CartCtx.totalAmount * 100}
            stripeKey="pk_test_51N9M5SSF2sALXBLTuoV4OMgbrvSrMKwKEBIjn0BksmyfXjdXx03pdL5z3f4SKLwIF8ZMWQeq1wab3e86DobKpr0400njUeoBgc"
          />
          <button
            className={`px-8 py-1 uppercase font-bold bg-[#F7D031] text-black `}
            onClick={() => onClose()}
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
