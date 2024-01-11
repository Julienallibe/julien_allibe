"use client";

import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-row items-center justify-center px-20 mt-[100px] z-[20] ">
      <div className="flex flex-col  justify-center  text-center">
        <div className="justify-center flex ">
          <img
            src="/Me.jpg"
            height={300}
            width={300}
            alt="Julien Allibe"
            className="rounded-full"
          />
        </div>

        <div className="flex flex-col gap-6 mt-6 cursor-pointer hover:-translate-y-1  hover:scale-110 transition ease-in-out hover:text-transparent bg-clip-text  hover:bg-gradient-to-r from-purple-500 to-orange-400 z-[1] tracking-tighter text-7xl font-semibold text-white max-w-[600px] w-auto h-auto">
          Julien Allibe!
        </div>
        <p className="text-2xl font-medium tracking-tighter  text-gray-300 max-w-[600px]">
          I do Marketing &{" "}
          <span className="text-transparent font-semibold  bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">
            Code
          </span>{" "}
          🚀
        </p>
        <p className="text-md text-gray-200 my-5 max-w-[600px]">
          Hey, moi c&#39;est Julien! Je suis un programmeur autodidacte et un
          diplomé de marketing et développement commercial. Passioné du monde de
          l&#39;informatique et du marketing, j&#39;ai décidé de rassembler les
          deux pour je sais pas quoi mettre 😔
        </p>
        <p className="text-md text-gray-200 my-5 max-w-[600px]">
          Scroll en bas pour en savoir plus 😉
        </p>
        <div className="text-md flex justify-center">
          <button
            onClick={() => window.open("mailto:julienallibe@gmail.com")}
            className=" z-[1]     padding-20  hover:bg-white rounded-3xl  text-white font-semibold hover:text-black py-3 px-10  border-[0.1px] border-white hover:border-transparent "
          >
            Contactez moi
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
