import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[5px] "
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col  justify-around flex-wrap items-center   max-w-[900px]">
        <h1 className="text-white font-semibold text-6xl">A PROPOS</h1>
        <p className=" tracking-[0.5em] text-transparent font-bold pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
          de moi!
        </p>
        <p className="text-gray-300 text-center ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aperiam
          natus ullam veritatis est voluptatum deleniti harum repudiandae sint
          consectetur atque quos, consequatur itaque nam consequuntur sed.
          Voluptatum, dolor asperiores!
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea rem, vitae
          commodi eius accusantium iure temporibus laboriosam esse cumque sequi
          eligendi obcaecati. Et perferendis minima a inventore at beatae
          voluptatum.
        </p>
      </div>
    </section>
  );
};

export default About;
