import React from "react";
import Carousel from "nuka-carousel";
import First from "./../assets/1.png";
import Second from "./../assets/2.jpg";
import Three from "./../assets/3.png";

const Mention = () => {
  const renderControls = () => {
    return null;
  };

  return (
    <div className="container mx-auto flex items-center justify-center p-8">
      <Carousel
        autoplay={true}
        renderCenterLeftControls={renderControls}
        renderCenterRightControls={renderControls}
        className=""
      >
        <div className="p-2 flex flex-col items-center justify-center space-y-2">
          <p className="text-md max-w-lg text-center">
            "Brilliant print and Sustainable Innerwear brand in our radar"
          </p>
          <img src={First} className="w-28 h-8" alt="First" />
        </div>
        <div className="p-2 flex flex-col items-center justify-center space-y-2">
          <p className="text-md max-w-lg text-center">
            "Extremely soft fabric and great prints. So lightweight that it
            feels like going commando"
          </p>
          <img src={Second} className="w-28 h-8" alt="Second" />
        </div>
        <div className="p-2 flex flex-col items-center justify-center space-y-2">
          <p className="text-md max-w-lg text-center">
            "Extremely soft fabric and great prints. So lightweight that it
            feels like going commando"
          </p>
          <img src={Three} className="w-28 h-16" alt="Third" />
        </div>
      </Carousel>
    </div>
  );
};

export default Mention;
