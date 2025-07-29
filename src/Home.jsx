import React from "react";




import Hero from "./components/Hero";
import Features from "./components/Features";

const Home = () => {
  return (
    <div className="font-['Inter'] bg-[#0d0d1a] text-white overflow-x-hidden">
      
      <Hero />
      <Features />
      
    </div>
  );
};

export default Home;