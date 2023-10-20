import React, { useEffect, useState } from "react";
import slider1 from "../../Assets/Images/slider1.png";
import slider2 from "../../Assets/Images/slider2.png";
import slider3 from "../../Assets/Images/slider3.png";
import slider4 from "../../Assets/Images/slider4.png";

const images = [slider1, slider2, slider3, slider4];

const Slider = () => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  });

  return (
    <div className="w-full h-full relative max-w-[1920px] mx-auto">
      <img src={images[imageIndex]} className="w-full" />
      <div className="absolute bottom-0 h-[58px] bg-opacity-40 bg-black w-full flex items-center ">
        <div className="max-w-screen-ntt mx-auto flex items-center gap-1 justify-end text-white w-full">
          {images.map((_, index) => (
            <button
              onClick={() => setImageIndex(index)}
              key={index}
              className={`${
                imageIndex === index ? "bg-transparent" : "bg-white"
              } w-3 h-3 rounded-full  border-white border`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
