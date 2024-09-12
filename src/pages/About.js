import React from "react";
import photo from '../component/imgs/about.jpg'
import food from '../component/imgs/food.jpg'
import { BsCheckCircleFill } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import DataAbout from '../jsonData/DataAbout.json'

export default function About() {

  console.log(DataAbout)
  return (
    <div id="about" >
      <div className="w-full " data-aos="zoom-in-up">
        <div className="" >
          <h1 className="uppercase flex p-6 justify-center font-semibold text-2xl font-serif" data-aos="fade-right">about us</h1>
          <h1 className="uppercase  flex justify-center font-semibold text-xl" data-aos="fade-left">Lern more about us</h1>
        </div>

        <div className="md:px-[50px] px-7 flex md:flex-row flex-col gap-7 md:gap-12 py-12">
          <div className="flex flex-col gap-2">
            <img data-aos="zoom-in-up" className="h-[500px] w-[1000px]" src={photo} alt="" />
            <div className="border border-red-700 flex flex-col gap-3 justify-center items-center py-9" data-aos="zoom-in-up">
              <h1 className="font-semibold text-[20px]">Book a Table</h1>
              <h1 className="font-semibold text-red-700 text-[20px]">+855 81 567 015</h1>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <p className="text-gray-500" data-aos="zoom-in-up">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <div className="flex flex-col gap-4 pt-3">
              <div className="flex gap-2 items-center" data-aos="zoom-in-up">
                <BsCheckCircleFill className="text-red-600 text-[20px]" />
                <p className="flex gap-2 items-center">Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>

              <div className="flex gap-2 items-center" data-aos="zoom-in-up">
                <BsCheckCircleFill className="text-red-600 text-[20px]" />
                <p className="flex gap-2 items-center">Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>

              <div className="flex gap-2 items-center" data-aos="zoom-in-up">
                <BsCheckCircleFill className="text-red-600 text-[20px]" />
                <p className="flex gap-2 items-center">Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>

            <div data-aos="zoom-in-up">
              <img className=" w-[600px]" src={food} alt="" />
            </div>
          </div>
        </div>



        <div className="bg-[#f2f2f2] py-12 " >
          <div className="px-7 flex md:flex-row flex-col  justify-center items-center gap-4">

            <div className="bg-red-700 text-white p-9 md:w-[400px]" data-aos="zoom-in-up">
              <div className="flex flex-col gap-4 items-center">
                <h1 className="font-serif text-[30px]">Why Choose Yummy</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.</p>
                <button className="bg-red-400 px-9 py-3 rounded-full flex gap-2 text-white">Lern More<BsChevronRight /></button>
              </div>
            </div>
            {
              DataAbout && DataAbout.map(item => {
                return (

                  <div className="group bg-white p-12 md:w-[300px] hover:shadow-lg" data-aos="zoom-in-up">
                    <div className="flex flex-col gap-4 items-center">
                      <h1 className="font-serif text-[30px] text-red-800 bg-red-100 p-2 rounded-full group-hover:bg-red-600 hover:text-white cursor-pointer">
                        <img src={item.icon ? item.icon : 'https://static.vecteezy.com/system/resources/thumbnails/024/284/256/small_2x/icon-of-no-camera-use-or-no-photo-sign-vector.jpg'} className="w-[70px] h-[70px] object-cover rounded-full group-hover:scale-105 duration-200" alt="" />
                      </h1>
                      <p className="font-semibold text-[20px] flex items-center group-hover:text-blue-700">{item.title}</p>
                      <h2 className="text-gray-400 group-hover:text-red-800">{item.content}</h2>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>

    </div>
  );
}
