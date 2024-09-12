import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaFacebook, FaInstagramSquare, FaTiktok, FaTelegram } from "react-icons/fa";

export default function Footer() {
    return (
        <div className='bg-white flex flex-col gap-4 md:px-[100px] px-4 py-[20px]' data-aos="zoom-in">

            <div className="flex md:flex-row flex-col gap-7 md:ga-4 w-full justify-between  py-12 border-b">
                <div className='flex gap-3 ' data-aos="zoom-in">
                    <FaLocationDot className='text-2xl text-red-700' />
                    <div className='flex flex-col gap-3 text-black'>
                        <label className='text-lg font-medium' htmlFor="">Address</label>
                        <div>
                            <p>150 Woat Jah</p>
                            <p>Chroy Chongva</p>
                        </div>
                    </div>

                </div>

                <div className='flex gap-3' data-aos="zoom-in" >
                    <FaPhoneAlt className='text-2xl text-red-700' />
                    <div className='flex flex-col gap-3 text-black'>
                        <label className='text-lg font-medium' htmlFor="">Phone</label>
                        <div>
                            <p>Phone: +855 81 567 015</p>
                            <p>Email: sanfasal70@gmail.com</p>
                        </div>
                    </div>

                </div>

                <div className='flex gap-3 ' data-aos="zoom-in">
                    <MdAccessTimeFilled className='text-2xl text-red-700' />
                    <div className='flex flex-col gap-3 text-black'>
                        <label className='text-lg font-medium' htmlFor="">
                            Opening Hours</label>
                        <div>
                            <p>Mon-Sat: 8:00AM - 6:00PM</p>
                            <p>Sunday: Closed</p>
                        </div>
                    </div>

                </div>

                <div className='flex gap-3 ' data-aos="zoom-in">
                    <FaLocationDot className='text-2xl text-red-700' />
                    <div className='flex flex-col gap-3 text-black'>
                        <label className='text-lg font-medium' htmlFor="">Follow Us</label>
                        <div className='flex  gap-3 text-[25px]'>
                            <a href="https://www.facebook.com/profile.php?id=100084406881640&mibextid=LQQJ4d"> <FaFacebook className='text-blue-700' /></a>
                            <div onClick={() => alert("My Accoutn : Fa Sal")}>
                                <FaInstagramSquare className='text-pink-600' />
                            </div>
                            <a href="https://www.tiktok.com/@esq1691?_t=8oQZIs0AKmX&_r=1">
                                <FaTiktok />
                            </a>
                            <a href="https://t.me/fasal_san">
                                <FaTelegram className='text-[#2db8d4]' /></a>

                        </div>
                    </div>

                </div>
            </div>

            <div className='text-white'>
                <div className='flex justify-center py-7' data-aos="zoom-in">
                    <div className='flex flex-col gap-3 justify-center items-center text-black'>
                        <label htmlFor="">&copy; Copyright <span className='font-bold'>Yummy</span> All Rights Reserved</label>
                        <p>Designed by <span className='text-red-700 font-bold'>Fasal_SAN</span></p>
                    </div>
                </div>
            </div>

        </div>
    )
}
