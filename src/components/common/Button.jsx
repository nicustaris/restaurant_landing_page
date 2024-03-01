import React from "react";

const Button = ({ children, isOrange = false }) => {
  console.log(children);
  return (
    <button
      className={`w-28 h-10 md:w-34 md:h-10 lg:w-40 lg:h-12 rounded rounded-tl-xl rounded-br-xl text-sm lg:text-xl font-medium text-white ${
        isOrange ? "bg-customOrange" : "bg-black"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
