import React, { useState } from "react";
import logo from "../assets/navbar/logo.svg";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Button from "./common/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="max-w-[1240px] items-center flex flex-row justify-between mx-auto mt-6 md:mt-16 px-4 md:px-2 lg:px-4 xl:px-0">
      <div className="flex items-center md:items-end md:mt-[-2rem]">
        <img className="w-50" src={logo} alt="/" />
        <h1 className="text-xl md:text-2xl font-medium px-2">restaurant</h1>
      </div>
      <ul className="hidden md:flex text-base">
        <li className="lg:px-6 md:px-4">Menu</li>
        <li className="lg:px-6 md:px-4">Gallery</li>
        <li className="lg:px-6 md:px-4">Events</li>
        <li className="lg:px-6 md:px-4">About</li>
        <li className="lg:px-6 md:px-4">Contact</li>
      </ul>
      <div className="flex space-x-6 items-center">
        <Button isOrange={true}>Book a table</Button>
        <div className="block md:hidden" onClick={handleNavigation}>
          {isOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </div>
      <div
        className={
          isOpen
            ? "fixed top-0 left-0 w-[60%] h-full bg-gray-700 ease-in-out duration-500 z-50"
            : "fixed left-[-100%]"
        }
      >
        <ul className="flex flex-col">
          <li className="border-b border-gray-600 text-white p-4">Menu</li>
          <li className="border-b border-gray-600 text-white p-4">Gallery</li>
          <li className="border-b border-gray-600 text-white p-4">Events</li>
          <li className="border-b border-gray-600 text-white p-4">About</li>
          <li className="border-b border-gray-600 text-white p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
