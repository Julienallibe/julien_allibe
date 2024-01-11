"use client";

import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] bg-['#111'] fixed backdrop-blur-sm z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <p className="cursor-pointer hover:animate-slowspin text-white">
          Julien ALLIBE
        </p>

        <div className="flex flex-row gap-5">
          <div
            onClick={() => window.open("mailto:julienallibe@gmail.com")}
            className=" z-[1] bg-transparent  padding-10 cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl  text-white  py-2 px-5"
          >
            Contact
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
