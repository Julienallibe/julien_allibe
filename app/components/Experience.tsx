"use client";

import React from "react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[5px] "
      style={{ transform: "scale(0.9" }}
    >
      <h1 className="text-white font-semibold text-center text-6xl   pt-[35px]">
        EXPERIENCE
      </h1>
      <div className="flex flex-col flex-wrap justify-around items-center max-w-[900px] mx-auto">
        <div className="flex  flex-col justify-between items-center pt-5">
          <p className="text-gray-300 ">
            <span className="font-semibold">ITEM S.A.S / </span> Attaché de
            Direction - Resposable SSE
          </p>
          <p className=" font-bold text-transparent pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
            2019 - 2022, TULLINS
          </p>
        </div>
        <p className="text-gray-300 pt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          repellat quaerat quas perferendis, aspernatur amet quam iure? Ex
          explicabo, voluptate perferendis optio, tenetur maiores corrupti
          aperiam rem commodi dignissimos impedit!
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam non
          quo quia enim odio. Et nemo, explicabo ratione quam eligendi quos nisi
          asperiores ea commodi. Praesentium voluptatibus ipsum error a?
        </p>
      </div>
    </section>
  );
};

export default Experience;
