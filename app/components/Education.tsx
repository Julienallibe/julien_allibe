import React from "react";

const Education = () => {
  return (
    <section
      id="education"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[5px] "
      style={{ transform: "scale(0.9" }}
    >
      <h1 className="text-white font-semibold text-center text-6xl   pt-[5px]">
        EDUCATION
      </h1>
      <div className="flex flex-row flex-wrap justify-around items-center max-w-[900px] mx-auto">
        <div className="flex  flex-col justify-between items-center pt-5 mt-5">
          <p className="text-gray-300 ">
            <span className="font-semibold">Codecademy / </span> Web Développeur
          </p>
          <p className=" font-bold text-transparent pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
            2023
          </p>
        </div>
        <p className="text-gray-300 pt-5">
          En autodidacte j&#39;ai appris à coder et à maîtriser les bases du web
          development. Vous pouvez avoir un aperçu de mes compétences ici,
          devant vos yeux 👀 grâce à ce site. Vous pouvez retrouvez mes autres
          projets ici 🚀 🪐
        </p>
        <div className="flex-row flex-wrap flex justify-center sm:flex-row ">
          <div className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            HTML / CSS
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Javascript
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            React
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Typescript
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Next
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Github
          </div>
        </div>
        <div className="flex  flex-col justify-between items-center pt-5 mt-10">
          <p className="text-gray-300 ">
            <span className="font-semibold">IDRAC Business School / </span>{" "}
            Bachelor Responsable Marketing et Développement Commercial
          </p>
          <p className=" font-bold text-transparent pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
            2015 - 2017
          </p>
        </div>
        <div className="flex-row flex-wrap flex justify-center sm:flex-row ">
          <div className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Marketing
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Management
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Commerce International
          </div>
        </div>
        <div className="flex  flex-col justify-between items-center pt-5 mt-10">
          <p className="text-gray-300 ">
            <span className="font-semibold">
              Technische Hochschule Deggendorf /{" "}
            </span>{" "}
            International Management
          </p>
          <p className=" font-bold text-transparent pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
            2016 - 2017
          </p>
        </div>
        <div className="flex-row flex-wrap flex justify-center sm:flex-row ">
          <div className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            International Finance
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            IT Skills for Project Managers
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Cross-Cultural Management
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
