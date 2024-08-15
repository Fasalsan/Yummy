import React, { useEffect } from "react";
import food from "../component/imgs/hero-img.png";
import { FaPlayCircle } from "react-icons/fa";
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import AOS from 'aos'
import "aos/dist/aos.css";

export default function Home() {

  const [text] = useTypewriter({
    words: ['Wellcome To FAIFAI Food >>>', 'Wellcome To FAIFAI Food >>>',],
    loop: 0,
    typeSpeed: 200,
    deleteSpeed: 100
  })

  useEffect(() => {
    AOS.init({ duration: 1200 })
  })

  return (
    // <div id="home" className="w-full bg-[#f2f2f2] ">
    <div id="home" className="w-full  ">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 px-[30px] md:px-[90px] w-full items-center h-screen">
        <div className="flex flex-col gap-5 " data-aos="fade-right">
          <h1 className="text-[20px] md:text-[40px] font-bold text-red-700 pt-16 md:pt-0">{text}<Cursor cursorColor="red" /> </h1>
          <h1 className="text-gray-400">Food is symbolic of love when words are inadequate</h1>
          <div className="flex gap-4">
            <button className="bg-red-700 px-4 rounded-lg md:px-7 md:py-3 text-white hover:bg-red-800 hover:text-gray-300 animate-fade-right">Book Table</button>
            <button className="border border-red-600 px-7 rounded-lg py-2 flex items-center gap-3 hover:bg-red-600 hover:text-white"><FaPlayCircle />Wacht Video</button>
          </div>
        </div>
        <div data-aos="zoom-in">
          <img className="md:h-[500px]" src={food} alt="" />

  
        </div>
      </div>
    </div>
  );
}
