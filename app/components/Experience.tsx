"use client";

import React from "react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[5px] "
      style={{ transform: "scale(0.9" }}
    >
      <h1 className="text-white font-semibold text-center text-6xl pt-[10px]">
        EXPERIENCE
      </h1>
      <div className="flex flex-col flex-wrap justify-around items-center max-w-[900px] mx-auto">
        <div className="flex  flex-col justify-between items-center pt-5 text-lg">
          <p className="text-gray-300 ">
            <span className="font-semibold">ITEM S.A.S / </span> Attaché de
            Direction - Resposable SSE
          </p>
          <p className=" font-bold text-transparent pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
            2019 - 2022, TULLINS
          </p>
        </div>
        <p className="text-gray-300 pt-5 text-center text-xl">
          Diplômé d&#39;une licence Bachelor Responsable Marketing &
          Développement commercial j&#39;ai fait mes armes au sein d&#39;une
          entreprise de maintenance industrielle spécialisé dans la papeterie.
          Sous la responsabilité du Président j&#39;occupais la fonction
          d&#39;attaché de direction et responsable SSE. Mon rôle était, entre
          autres, d&#39;établir et de maintenir des relations solides et
          durables avec les clients, la négociation commerciale des contrats, la
          coordination avec les responsables de chantier.
        </p>
      </div>
    </section>
  );
};

export default Experience;
