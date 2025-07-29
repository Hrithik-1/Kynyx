import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Logovideo from '../assets/logo3.mp4';

const Hero = () => (
  <section className="relative w-full h-[680px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a242e] to-[#0f0f1a] text-white">
    
    {/* Background Layer - Animation */}
    <div className="absolute inset-0 z-0 pointer-events-none">
      <video
        src={Logovideo}  //  
        autoPlay
        muted
        loop
        className="w-full h-[680px] object-cover"
      />
    

    </div>

    {/* Foreground Layer - Content  className="w-full h-full object-cover" */}
    <div className="relative z-10 text-center px-6">
      <h1 className="text-8xl md:text-1xl font-extrabold mb-4 leading-tight ">
        Innovate.<br />Transform. Achieve.
      </h1>
      <p className="text-2xl md:text-3xl mb-6">
        Driving Digital Success with<br />Cutting-Edge Solutions
      </p>
      <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold text-xl">
        Get Started
      </button>
    </div>
    
 

    {/* <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-300 opacity-60 transform rotate-45 top-[30%] left-[20%] rounded-md animate-floatCube"></div>
      <div className="absolute w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-300 opacity-60 transform rotate-45 top-[60%] left-[70%] rounded-md animate-floatCube delay-3000"></div>
      <div className="absolute w-36 h-36 border-[12px] border-t-cyan-300 border-transparent rounded-full top-[40%] left-[50%] animate-spin-slow"></div>
      <div className="absolute w-[200%] h-52 top-[50%] left-[-50%] bg-gradient-to-r from-purple-500 to-cyan-300 opacity-30 rotate-[5deg] animate-moveWave"></div>
    </div>
    <style>{`
      @keyframes floatCube {
        0% { transform: translateY(0) rotate(45deg); }
        50% { transform: translateY(-20px) rotate(60deg); }
        100% { transform: translateY(0) rotate(45deg); }
      }
      .animate-floatCube {
        animation: floatCube 8s infinite ease-in-out;
      }
      .animate-floatCube.delay-3000 {
        animation-delay: 3s;
      }
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      .animate-spin-slow {
        animation: spin 10s linear infinite;
      }
      @keyframes moveWave {
        0% { transform: translateX(0) rotate(5deg); }
        100% { transform: translateX(50%) rotate(5deg); }
      }
      .animate-moveWave {
        animation: moveWave 12s linear infinite;
      }
    `}</style> */}
  </section>
);

export default Hero;
