import React from "react";
import Product from '../jsonData/Product.json'
import {  Outlet } from "react-router-dom";
const tab = [
  {
    link: "/starters",
    title: 'Starters'
  },
  {
    link: "/breakfast",
    title: 'Breakfast'
  },
  {
    link: "/lunch",
    title: 'Lunch'
  },
  {
    link: "/dinner",
    title: 'Dinner'
  },
]

export default function Menu() {
  return (
    <div id="menu" className="bg-green-700">
      <div className="w-full h-auto bg-[#f2f2f2]">
        <div className="flex flex-col justify-center items-center p-6" data-aos="zoom-in-up">
          <h1 className="uppercase text-[20px] font-semibold" data-aos="fade-right">our menu</h1>
          <h1 className="text-[20px] md:text-3xl py-3" data-aos="fade-left">Check Our <span className="text-red-700">Yummy Menu</span></h1>

          <div>
            <Outlet />
          </div>
        </div>
        <div className="flex md:flex-row flex-row  justify-center " data-aos="flip-right">
          {
            tab && tab.map(item => {
              return (
                <div>
                  <ul className="flex gap-7 md:gap-12" >
                    <li className="hover:border-red-700 border-transparent border-b-2 hover:text-red-700">
                      <a className="flex md:px-6 px-3 py-2" href={item.link}>{item.title}</a>
                    </li>
                  </ul>
                </div>
              )
            })
          }
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-7  md:px-[100px] px-4 py-12">
          {
            Product && Product.map((item => {
              return (
                <>
                  <div className="group flex flex-col items-center py-3 md:w-[400px] md:p-7 gap-4 hover:shadow-xl" data-aos="zoom-in-up">
                    <div className="w-[300px] max-w-xs transition duration-300 ease-in-out hover:scale-110">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="flex flex-col justify-center gap-2 items-center">
                      <label className="text-2xl font-medium" htmlFor="">{item.title}</label>
                      <p className="text-gray-400">{item.content}</p>
                      <h1 className="text-red-700 font-bold text-xl group-hover:bg-red-600 px-7  py-2 group-hover:text-white rounded-2xl duration-200">{item.price}$</h1>
                    </div>
                  </div>
                </>
              )
            }))
          }
        </div>
      </div>
    </div>
  );
}
