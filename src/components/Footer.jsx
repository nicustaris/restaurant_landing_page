import React from "react";

import logo from "../assets/navbar/logo.svg";

import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full max-w-[1240px] grid mt-[6rem] md:mt-[7rem] lg:mt-[8rem] px-2 md:grid-cols-2 lg:grid-cols-3 lg:mx-auto">
        <div className="flex flex-col">
          <div className="flex items-center md:items-end md:mt-[-2rem]">
            <img className="w-50" src={logo} alt="/" />
            <h1 className="text-xl md:text-2xl font-medium px-2">restaurant</h1>
          </div>
          <p className="py-2 leading-7 text-[#5C6574]">
            Aenean luctus nulla sit amet nibh ultricies, sit amet gravida libero
            venenatis. Nunc eu consectetur nisl. Phasellus ligula quam, maximus
            in hendrerit in, sagittis nec nisi.
            <span className="underline ml-2 text-[#5C6574]">Read more</span>
          </p>
          <div className="flex flex-col mt-4">
            <h2 className="py-2 font-medium text-[#5C6574]">Opening Hours</h2>
            <div className="flex flex-col md:flex-row md:space-x-8 lg:space-x-12">
              <div>
                <p>Monday - Friday</p>
                8:00 am to 9 pm
              </div>
              <div>
                <p>Sunday</p>
                8:00 am to 9 pm
              </div>
              <div>
                <p>Saturday</p>
                Closed
              </div>
            </div>
          </div>
        </div>
        <div className="mx-0 md:mx-auto w-full flex flex-col lg:flex-row lg:space-x-6 lg:mx-auto lg:justify-end">
          <div className="mt-4 md:mt-0 md:text-center lg:text-left md:space-y-1 lg:space-y-3">
            <h2 className="font-medium text-[#5C6574] py-2 lg:py-0">
              NAVIGATION
            </h2>
            <p>Menu</p>
            <p>About us</p>
            <p>Contact us</p>
            <p>Main Dishes</p>
          </div>
          <div className="mt-4 md:mt-6 lg:mt-0 lg:px-6 md:text-center lg:text-left md:space-y-1 lg:space-y-3">
            <h2 className="font-medium text-[#5C6574] py-2 lg:py-0">DISHES</h2>
            <p>Fish & Viggie</p>
            <p>Tofu Chili</p>
            <p>Egg & Cocumber</p>
            <p>Lumpia with Sauce</p>
          </div>
        </div>
        <div className="mx-left mt-4 lg:mt-0 flex flex-col lg:text-right lg:mr-2">
          <h2 className="font-medium text-[#5C6574]">FOLLOW US</h2>
          <div className="flex flex-row space-x-4 py-2 lg:justify-end">
            <FaFacebook className="opacity-70" size={20} />
            <FaTwitterSquare className="opacity-70" size={20} />
            <FaInstagramSquare className="opacity-70" size={20} />
          </div>
        </div>
      </div>
      <div className="mt-[3rem] max-w-[1240px] mx-auto border-b border-gray-200"></div>
      <div className="flex flex-col md:flex-row px-2 justify-between max-w-[1240px] mx-auto m-[3rem]">
        <div>
          <span className="text-[#5C6574] mr-6">
            © 2022 Restaurant. All rights reserved. Design by Untree.coo
          </span>
        </div>
        <div className="py-4 md:py-0">
          <span className="text-[#5C6574]">Terms of Service</span>
          <span className="text-[#5C6574] pl-4">Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
