import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { FiPhone } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { IoTimeOutline } from "react-icons/io5";

export default function Contact() {
  return (
    <div  id="contact">
      <div className="flex flex-col gap-7 w-full">
        <div>
          <div className="flex flex-col justify-center items-center p-6">
            <h1 className="uppercase text-[20px] font-semibold" data-aos="fade-right">CONTACT</h1>
            <h1 className="text-[20px] md:text-3xl py-3" data-aos="fade-left">Need Help?<span className="text-red-700"> Contact Us</span></h1>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 px-4" >

            <div className="flex gap-3 bg-white px-4 py-7 w-full rounded-lg drop-shadow-lg hover:drop-shadow-xl cursor-pointer " data-aos="fade-right">
              <div className="bg-red-700 p-3  w-[50px] h-[50px] rounded-full flex items-center justify-center">
                <SlLocationPin className="text-[25px] text-white" />
              </div>
              <div>
                <h1 className="font-bold text-[20px]">Address</h1>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
            </div>

            <div className="flex gap-3 bg-white px-4 py-7 w-full rounded-lg drop-shadow-lg hover:drop-shadow-xl cursor-pointer" data-aos="fade-left">
              <div className="bg-red-700 p-3 w-[50px] h-[50px] rounded-full flex items-center justify-center">
                <FiPhone className="text-[25px] text-white" />
              </div>
              <div>
                <h1 className="font-bold text-[20px]">Call Us</h1>
                <p>+1 5589 55488 55</p>
              </div>
            </div>

            <div className="flex gap-3 bg-white px-4 py-7 w-full rounded-lg drop-shadow-lg hover:drop-shadow-xl cursor-pointer" data-aos="fade-right">
              <div className="bg-red-700 p-3 w-[50px] h-[50px] rounded-full flex items-center justify-center">
                <TfiEmail className="text-[25px] text-white" />
              </div>
              <div>
                <h1 className="font-bold text-[20px]">Email Us</h1>
                <p>info@example.com</p>
              </div>
            </div>

            <div className="flex gap-3 bg-white px-4 py-7 w-full rounded-lg drop-shadow-lg hover:drop-shadow-xl cursor-pointer" data-aos="fade-left">
              <div className="bg-red-700 p-3 w-[50px] h-[50px] rounded-full flex items-center justify-center">
                <IoTimeOutline className="text-[50px] text-white" />
              </div>
              <div>
                <h1 className="font-bold text-[20px]">Opening Hours</h1>
                <p className="">Mon-Sat: 8:00AM - 10:00PM</p>
              </div>
            </div>

          </div>

        </div>

        <div className="bg-white shadow-xl p-7 w-full" data-aos="zoom-in-up">
          <div className="flex flex-col gap-4 w-full">
            <div className="flex gap-4 w-full">
              <input className="px-4 py-3 w-full rounded appearance-none border  focus:outline-none focus:shadow-outline focus:border-blue-600" type="text" placeholder="your phone" />
              <input className="px-4 py-3 w-full rounded appearance-none border  focus:outline-none focus:shadow-outline focus:border-blue-600" type="text" placeholder="your phone" />
            </div>

            <div> <input className="px-4 py-3 w-full rounded appearance-none border  focus:outline-none focus:shadow-outline focus:border-blue-600" type="text" placeholder="your phone" /></div>

            <div>
              <input className="px-4 py-3 pb-[100px] md:pb-[200px] w-full rounded appearance-none border  focus:outline-none focus:shadow-outline focus:border-blue-600" type="text" placeholder="Massege" />
            </div>

            <div className="w-full flex justify-center items-center">
              <button
                className="bg-red-700 px-24 py-4 text-white rounded-full"
                onClick={() => alert("Sending massege!")}
              >Submit</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
