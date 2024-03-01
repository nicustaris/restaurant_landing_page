import React from "react";

import section_bg from "../assets/welcome/section-bg.svg";
import side_bg from "../assets/welcome/side-bg.svg";
import garlic from "../assets/welcome/garlic.svg";
import leaf from "../assets/welcome/leaf.svg";
import Button from "./common/Button";

const Welcome = () => {
  return (
    <div className="w-full flex relative bg-grayBg p-[3.5rem] md:pt-[7rem] px-4">
      <div className="hidden md:flex w-auo absolute mt-[12rem] right-0 inset-y-0 justify-end items-center">
        <img className="w-[100%]" src={side_bg} alt="/" />
      </div>
      <div className="max-w-[1240px] w-full h-auto mx-auto flex flex-col lg:flex-row items-center">
        <div className="flex w-[80%] lg:w-full justify-center mb-8 lg:mb-0">
          <img className="w-[700px]" src={section_bg} alt="/" />
        </div>
        <div className="flex relative flex-col text-center lg:text-left mt-20">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold pb-[1rem] md:pb-[1.5rem] lg:pb-[2rem]">
            Welcome to Our Restaurant
          </h1>
          <p className="pb-[1rem] md:pb-[1.5rem] lg:pb-[2rem] text-base leading-7">
            Etiam hendrerit nec ipsum eu dictum. Nulla facilisi. Ut quis laoreet
            arcu, nec vehicula eros. Praesent egestas gravida tincidunt. Etiam
            convallis.
          </p>
          <div className="space-x-3">
            <Button>Menu</Button>
            <Button isOrange={true}>Book a table</Button>
          </div>
          <div className="hidden lg:flex absolute left-0 top-[-120px]">
            <img className="opacity-10 w-[220px]" src={leaf} alt="/" />
          </div>
          <div className="hidden lg:flex absolute justify-center bottom-[-105px] right-0 left-0">
            <img className=" opacity-10 w-[70px]" src={garlic} alt="/" />
          </div>
          <div className="hidden lg:flex absolute justify-center bottom-0 left-[-90px]">
            <img
              className=" opacity-10 w-[70px] -rotate-90"
              src={garlic}
              alt="/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
