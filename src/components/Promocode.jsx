import React from "react";

import promocode_bg from "../assets/promocode/background.svg";
import Button from "./common/Button";

const Promocode = () => {
  return (
    <div
      className="w-full max-w-[1240px] min-h-[400px] mx-auto bg-black rounded-3xl flex flex-col items-center justify-center mb-[-3rem]"
      style={{
        backgroundImage: `url(${promocode_bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-white font-medium px-1 text-xl md:text-2xl lg:text-3xl">
        Get Our Promo Code by Subscribing To Our Newsletter
      </h1>
      <div className="flex flex-col justify-center items-center lg:flex-row lg:bg-white lg:rounded-2xl lg:w-[60%] lg:mt-[1rem] lg:px-3">
        <input
          className="w-[14rem] md:w-[24rem] rounded-md py-1 text-sm md:text-base my-4 pl-3 mr-auto"
          type="text"
          placeholder="Enter your email"
        />
        <Button isOrange={true}>Subscribe</Button>
      </div>
    </div>
  );
};

export default Promocode;
