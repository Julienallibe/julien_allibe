import React from "react";
import Banner from "./components/Banner";
import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Education from "./components/Education";

const page = () => {
  return (
    <main className="h-full w-full  bg-[url('/LooperGroup2.png')] bg-no-repeat">
      <div className="flex flex-col gap-20">
        <Banner />
        <About />
        <Experience />
        <Education />
        <Footer />
      </div>
    </main>
  );
};

export default page;
