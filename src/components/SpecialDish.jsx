import React from "react";

import first_section_bg from "../assets/special-dish/first-section-bg.svg";
import onion from "../assets/special-dish/onion.svg";
import oregano from "../assets/special-dish/oregano.svg";
import oregano2 from "../assets/special-dish/oregano2.svg";
import garlic from "../assets/special-dish/garlic.svg";
import bowl1 from "../assets/special-dish/bowl1.png";
import bowl2 from "../assets/special-dish/bowl2.png";
import bowl3 from "../assets/special-dish/bowl3.png";
import bowl4 from "../assets/special-dish/bowl4.png";

import "./SpecialDish.css";

const SpecialDish = () => {
  return (
    <div className="w-full h-auto bg-grayBg">
      <div className="max-w-[1280px] w-full flex flex-col mx-auto">
        <div className="relative mx-auto mt-[3rem] md:mt-[5rem] lg:mt-[10rem] text-center">
          <img
            className="hidden md:flex w-[200px] md:w-[290px] absolute top-0 right-[0] opacity-10"
            src={first_section_bg}
            alt="/"
          />
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">
            Our Special Dish
          </h1>
          <p className="leading-6 mt-[1rem] md:mt-[1.5rem] max-w-[460px]">
            Etiam hendrerit nec ipsum eu dictum. Nulla facilisi. Ut quis laoreet
            arcu, nec vehicula eros.
          </p>
        </div>
        <div className="w-full grid gap-6 mt-[4rem] md:mt-[5rem] xl:mt-[6rem] justify-items-center text-center md:grid-cols-2 xl:grid-cols-4">
          {/* Products Card  */}
          <div className="flex flex-col relative items-center justify-center text-center w-[250px] h-[430px] mb-20 md:mb-28 z-30">
            <img className="w-[250px] z-40" src={bowl1} />
            <div className="w-[59px] h-[59px] bg-customBlack absolute rounded-full top-[45px] right-[-20px] text-white flex items-center justify-center text-lg lg:text-xl font-medium z-40">
              $12
            </div>
            <div className="flex flex-col flex-grow justify-center">
              <h3 className="font-medium text-lg z-40">Lumpia with Sauce</h3>
            </div>
            <p className="text-base z-40">
              Etiam hendrerit nec ipsum eu dictum. Nulla facilisi. Ut quis
              laoreet arcu, nec vehicula eros.
            </p>
            <div className="hidden md:flex absolute w-[300px] h-[356px] bg-white bottom-[-66px] rounded-tl-[15%] rounded-bl-lg rounded-br-[15%] rounded-tr-lg z-10"></div>
            <img
              className="hidden md:flex absolute bottom-[-66px] opacity-20 right-[-92px] z-5"
              src={onion}
            />
            <img
              className="hidden md:flex absolute top-[5rem] right-[-155px] lg:top-[5rem] lg:right-[-100px] z-5"
              src={oregano}
              alt="/"
            />
          </div>
          <div className="flex flex-col relative items-center justify-center text-center w-[250px] h-[430px] mb-20 md:mb-28">
            <img className="w-[250px]" src={bowl2} />
            <div className="w-[59px] h-[59px] bg-customBlack absolute rounded-full top-[45px] right-[-20px] text-white flex items-center justify-center text-lg lg:text-xl font-medium">
              $12
            </div>
            <div className="flex flex-col flex-grow justify-center">
              <h3 className="font-medium text-lg">Fish & Veggie</h3>
            </div>
            <p className="text-base">
              Etiam hendrerit nec ipsum eu dictum. Nulla facilisi. Ut quis
              laoreet arcu, nec vehicula eros.
            </p>
          </div>
          <div className="flex flex-col relative items-center justify-center text-center w-[250px] h-[430px] mb-20 md:mb-28">
            <img className="w-[250px] z-20" src={bowl3} />
            <div className="w-[59px] h-[59px] bg-customBlack absolute rounded-full top-[45px] right-[-20px] text-white flex items-center justify-center text-lg lg:text-xl font-medium z-20">
              $12
            </div>
            <div className="flex flex-col flex-grow justify-center">
              <h3 className="font-medium text-lg">Egg and Cocumber</h3>
            </div>
            <p className="text-base">
              Etiam hendrerit nec ipsum eu dictum. Nulla facilisi. Ut quis
              laoreet arcu, nec vehicula eros.
            </p>
            <img
              className="hidden md:flex absolute top-[-3rem] right-[-15px] z-10"
              src={oregano2}
              alt="/"
            />
          </div>
          <div className="flex flex-col relative items-center justify-center text-center w-[250px] h-[430px] mb-20 md:mb-28">
            <img className="w-[250px]" src={bowl4} />
            <div className="w-[59px] h-[59px] bg-customBlack absolute rounded-full top-[45px] right-[-20px] text-white flex items-center justify-center text-lg lg:text-xl font-medium">
              $12
            </div>
            <div className="flex flex-col flex-grow justify-center">
              <h3 className="font-medium text-lg">Lumpia with Sauce</h3>
            </div>
            <p className="text-base">
              Etiam hendrerit nec ipsum eu dictum. Nulla facilisi. Ut quis
              laoreet arcu, nec vehicula eros.
            </p>
            <img
              className="hidden md:flex absolute w-[281px] left-[-65px] bottom-[-64px]"
              src={garlic}
              alt="/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialDish;
