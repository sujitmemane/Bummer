import React from "react";
import Img1 from "./../assets/r1.png";
import Img2 from "./../assets/r2.png";
import Img3 from "./../assets/r3.png";
import Carousel from "nuka-carousel";
import { AiFillStar } from "react-icons/ai";
const Reviews = () => {
  const renderControls = () => {
    return null;
  };
  return (
    <div className=" hidden md:block container mx-auto flex items-center justify-center p-8 text-black ">
      <Carousel
        autoplay={true}
        renderCenterLeftControls={renderControls}
        renderCenterRightControls={renderControls}
      >
        <div className="px-4 md:p-2 flex flex-col items-center justify-center space-y-2 ">
          <img src={Img2} className="w-24 md:w-32" />
          <div className="flex flex-row items-center justify-center space-x-2">
            <AiFillStar size={25} />
            <AiFillStar size={25} />
            <AiFillStar size={25} />
            <AiFillStar size={25} />
            <AiFillStar size={25} />
          </div>
          <p className="text-lg md:max-w-md text-center">
            "I am big fan of customer experience. The whole buying process was
            seamless and the packaging was elite."
          </p>
          <h1 className="font-bold">
            Aakash S -
            <span className="font-bold uppercase">Verified Buyer</span>
          </h1>
        </div>
        <div className="p-2 flex flex-col items-center justify-center space-y-2 ">
          <img src={Img3} className="w-32" />
          <div className="flex flex-row items-center justify-center space-x-2">
            <AiFillStar size={25} />
            <AiFillStar size={25} />
            <AiFillStar size={25} />
            <AiFillStar size={25} />
            <AiFillStar size={25} />
          </div>
          <p className="text-lg max-w-md text-center">
            "The itching I used to have while wearing normal undies has gone
            away. Really soft fibre and quite comfortable. Fits with your body
            shape."
          </p>
          <h1 className="font-bold">
            Mohammed Taha -
            <span className="font-bold uppercase">Verified Buyer</span>
          </h1>
        </div>
        <div className="p-2 flex flex-col items-center justify-center space-y-2 ">
          <img src={Img1} className="w-32" />
          <div className="flex flex-row items-center justify-center space-x-2">
            <AiFillStar size={25} />
            <AiFillStar size={25} />
            <AiFillStar size={25} />
            <AiFillStar size={25} />
            <AiFillStar size={25} />
          </div>
          <p className="text-lg max-w-md text-center">
            "LOVE LOVE LOVE. I love the 2 colors that I bought. Please add more
            nice and amazing prints."
          </p>
          <h1 className="font-bold">
            Rujula J -
            <span className="font-bold uppercase">Verified Buyer</span>
          </h1>
        </div>
      </Carousel>
    </div>
  );
};

export default Reviews;
