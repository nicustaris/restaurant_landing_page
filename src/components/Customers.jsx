import React, { useState } from "react";

import profile from "../assets/customers/profile.svg";
import star from "../assets/customers/star.svg";
import background from "../assets/customers/background.svg";

import customerData from "../data.json";
import Promocode from "./Promocode";

const Customers = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full h-full flex relative flex-col bg-grayBg text-center px-4">
      <div className="absolute mt-[5rem] md:mt-[8rem] lg:mt-[14rem]">
        <img className="w-[80%]" src={background} alt="/" />
      </div>
      <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mt-[3rem] lg:mt-[8rem]">
        Our Happy Customers
      </h1>
      <p className="mt-[1rem] lg:mt-[2rem] w-[50%] lg:w-[40%] mx-auto">
        Etiam hendrerit nec ipsum eu dictum. Nulla facilisi. Ut quis laoreet
        arcu, nec vehicula eros. Praesent egestas gravida ti
      </p>
      <div className="flex flex-row">
        <div className="w-full h-full flex relative flex-col items-center max-w-[800px] bg-white max-h-[400px] mx-auto mt-[4rem] md:mt-[6rem] lg:mt-[10rem] rounded-bl-3xl rounded-tl-[90px] rounded-br-[90px] rounded-tr-3xl shadow-lg">
          <img
            className="w-[80px] md:w-[100px] lg:w-[130px] absolute -translate-y-1/2 z-40 hover:scale-105 ease-in-out duration-300"
            src={profile}
            alt="/"
          />
          <div className="flex space-x-2 mt-[3.5rem] md:mt-[4.5rem] lg:mt-[5.5rem]">
            {[...Array(customerData[currentSlide].stars)].map((_, index) => (
              <img key={index} src={star} alt="/" />
            ))}
          </div>
          <p className="w-[90%] md:w-[80%] leading-7 mt-[1rem]">
            {customerData[currentSlide].text}
          </p>
          <div className="flex flex-col leading-6 mt-[2rem] mb-[3rem]">
            <p className="font-medium">{customerData[currentSlide].name}</p>
            <p>{customerData[currentSlide].company}.</p>
          </div>
        </div>
      </div>
      <ul className="flex justify-center mt-[4rem] mb-[4rem] space-x-3">
        {customerData.map((_, index) => (
          <li
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`flex items-center justify-center rounded-full w-[7px] h-[7px] cursor-pointer ${
              currentSlide === index ? "bg-gray-400" : "bg-gray-300"
            }`}
          ></li>
        ))}
      </ul>
      <Promocode />
    </div>
  );
};

export default Customers;
