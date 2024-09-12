import React from "react";
import DataChef from '../jsonData/DataChef.json';
import BookingTable from "./BookingTable";

export default function Chefs() {
  return (
    <div id="chef">
      <div className="bg-red-900 w-full">
        <div className="flex flex-col justify-center items-center p-6">
          <h1 className="uppercase text-[20px] font-semibold" data-aos="fade-right">our Chef</h1>
          <h1 className="text-3xl py-3" data-aos="fade-left">Our<span className="text-red-700" > Proffesional Chefs</span></h1>
        </div>
        <div className="md:items-center justify-center flex md:flex-row flex-col gap-4 items-center" >
          {
            DataChef && DataChef.map((item => {
              return (
                <>
                  <div className="border md:w-[450px] w-[350px] flex flex-col gap-3 items-center justify-center py-7 cursor-pointer" data-aos="zoom-in-up">
                    <div className="md:w-[400px] h-min overflow-hidden rounded-md">
                      <img className="hover:scale-125 transition-all duration-500 cursor-pointer" src={item.img} alt="" />
                    </div>
                    <div className="flex flex-col gap-5 justify-center items-center px-7">
                      <div className="flex flex-col gap-1 items-center">
                        <label htmlFor="" className="font-semibold text-xl">{item.name}</label>
                        <p className="text-sm text-gray-400">{item.role}</p>
                      </div>
                      <div>
                        <p className="text-md text-gray-400 font-medium">{item.title}</p>
                      </div>
                    </div>
                  </div>
                </>
              )
            }))
          }
        </div>
      </div>
      <div className="md:mt-0 ">
        <BookingTable />
      </div>
    </div>
  );
}
