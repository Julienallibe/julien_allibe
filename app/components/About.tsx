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
          Je suis née à Manille et j&#39;ai passé mon enfance à Singapour dans
          une école internationale. L&#39;anglais est ma langue natale, que je
          parle couramment ainsi que le français. Depuis mon plus jeune âge je
          me passionne pour l&#39;informatique, comme tout enfant de ma
          génération j&#39;ai grandi avec le développement technologique et
          l&#39;évolution d’internet. Après plusieurs années à travailler dans
          une société de maintenance industrielle, je décide d&#39;ajouter le
          codage à mes compétences afin d&#39;ouvrir de nouvelles portes. Je
          réside dans la magnifique région des Alpes, près du massif de la
          Chartreuse d&#39;où je propose mes services.
        </p>
      </div>
    </section>
  );
};

export default About;
