import React, { useEffect, useState } from "react";
import { BsCart } from "react-icons/bs";
import logo from "../media/logo.png.png";
function Navbar() {
  const [isActive, setActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setActive(true) : setActive(false);
    });
  });
  return (
    <header className={`${isActive? "bg-white shadow-md fixed w-full z-10":"bg-[#F5E4E0]"} px-6`}>
      <div className="flex justify-between items-center p-2 text-2xl h-full">
        <div className="w-12 h-12">
          <img src={logo}></img>
        </div>
        <div className="space-x-2 font-bold">
          <span className=" text-[#FF3131]">Happy</span>
          <span className="text-[#38B6FF]">Namazi</span>
        </div>
        <div className="rounded-full cursor-pointer relative">
          <BsCart className="text-2xl" />
          <span className="absolute rounded-full h-[18px] w-[18px] -right-2 -top-2 bg-red-500 text-[12px] text-white px-1 pt-0 flex items-center justify-center">
            0
          </span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
