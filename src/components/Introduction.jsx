import React from "react";

import garlic_bg from "../assets/introduction/garlic-bg.svg";
import verified from "../assets/introduction/verified.svg";
import chef from "../assets/introduction/chef.svg";
import Button from "./common/Button";

const Introduction = () => {
  return (
    <div className="w-full flex relative lg:items-center">
      <div className="hidden lg:flex absolute top-[110px] left-0 z-20">
        <img className="opacity-10 w-[60%]" src={garlic_bg} alt="/" />
      </div>
      <div className="w-full max-w-[1240px] bg-white flex relative flex-col lg:flex-row mx-auto mt-8 px-4 lg:items-center">
        <div className="w-full h-full text-center flex flex-col">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">
            Our Expert Chefs
          </h1>
          <p className="leading-7 mt-6 mb-6">
            Aenean luctus nulla sit amet nibh ultricies, sit amet gravida libero
            venenatis. Nunc eu consectetur nisl. Phasellus ligula quam, maximus
            in hendrerit in, sagittis nec nisi. Cras maxim.
          </p>
          <div className="flex flex-col md:flex-row justify-evenly">
            <div className="mx-auto w-full">
              <div className="flex py-3 lg:items-start justify-center">
                <img className="pr-2" src={verified} alt="verified" />
                Aenean luctus nulla sit amet nibh
              </div>
              <div className="flex py-3 lg:items-start justify-center">
                <img className="pr-2" src={verified} alt="verified" />
                Aenean luctus nulla sit amet nibh
              </div>
              <div className="flex py-3 lg:items-start justify-center">
                <img className="pr-2" src={verified} alt="verified" />
                Aenean luctus nulla sit amet nibh
              </div>
            </div>
            <div className="mx-auto w-full lg:ml-2">
              <div className="flex py-3 lg:items-start justify-center">
                <img className="pr-2" src={verified} alt="verified" />
                Aenean luctus nulla sit amet nibh
              </div>{" "}
              <div className="flex py-3 lg:items-start justify-center">
                <img className="pr-2" src={verified} alt="verified" />
                Aenean luctus nulla sit amet nibh
              </div>{" "}
              <div className="flex py-3 lg:items-start justify-center">
                <img className="pr-2" src={verified} alt="verified" />
                Aenean luctus nulla sit amet nibh
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8 space-x-4">
            <Button>Menu</Button>
            <Button isOrange={true}>Book a table</Button>
          </div>
        </div>
        <div className="w-full h-full flex justify-center mt-12 mb-16">
          <img className="w-[70%] lg:w-[85%]" src={chef} alt="chef" />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
