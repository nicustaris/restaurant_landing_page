import React from "react";
import main from "../assets/hero/main.png";
import main_attachment from "../assets/hero/main-attachment.png";
import Button from "./common/Button";

import main_attachment_lt from "../assets/hero/main-attachment-lt.svg";
import main_attachment_rt from "../assets/hero/main-attachment-rt.svg";
import main_attachment_rb from "../assets/hero/main-attachment-rb.svg";

const Hero = () => {
  return (
    <div className="max-w-[1240px] w-full mx-auto grid md:grid-cols-2 mt-8 md:mt-28 mb-[2rem] md:mb-[4rem] lg:mb-[5rem] items-center text-center md:text-left md:px-6 lg:px-4 xl:px-0">
      <div className="flex flex-col w-[80%] mx-auto md:mt-[-7rem] lg:mx-0">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">
          Provide the best food for you.
        </h1>
        <p className="text-base text-[#5C6574] py-5 lg:w-[70%] font-normal">
          Etiam hendrerit nec ipsum eu dictum. Nulla facilisi. Ut quis laoreet
          arcu, nec vehicula eros. Praesent egestas gravida tincidunt. Etiam
          convallis.
        </p>
        <div className=" md:flex space-x-4">
          <Button>Menu</Button>
          <Button isOrange={true}>Book a table</Button>
        </div>
      </div>
      <div className="flex justify-end relative">
        <img
          className="w-[90%] md:w-[90%] h-auto p-6 md:p-0 mx-auto md:mx-0 z-10"
          src={main}
          alt="/"
        />
        <img
          className="hidden md:flex absolute md:w-52 md:bottom-[2.5rem] md:left-[-4rem] lg:w-72 lg:bottom-[3.5rem] lg:left-[-4.5rem] z-20"
          src={main_attachment}
          alt="/"
        />
        <img
          className="hidden 2xl:flex absolute opacity-20 2xl:top-[-3rem] 2xl:left-[-4rem] 2xl:w-[60%] z-0"
          src={main_attachment_lt}
          alt="/"
        />
        <img
          className="hidden 2xl:flex absolute opacity-20 2xl:top-[-4.5rem] 2xl:right-[-6rem] 2xl:w-[38%] z-0"
          src={main_attachment_rt}
          alt="/"
        />
        <img
          className="hidden 2xl:flex absolute opacity-20 2xl:bottom-[5rem] 2xl:right-[-8.5rem] 2xl:w-[33%] z-0"
          src={main_attachment_rb}
          alt="/"
        />
      </div>
    </div>
  );
};

export default Hero;
