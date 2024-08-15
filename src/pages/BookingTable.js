import React from 'react'

export default function BookingTable() {
    return (
        <div>
            <div className="w-full bg-white">
                <div className="flex flex-col justify-center items-center p-6">
                    <h1 className="uppercase text-[20px] font-semibold" data-aos="fade-right">Book A Table</h1>
                    <h1 className="text-[20px] md:text-3xl py-3" data-aos="fade-left">Book Your <span className="text-red-700">Stay With Us</span></h1>
                </div>
                <div className="md:px-[100px] flex gap-4" data-aos="zoom-in-up">
                    <div className="flex md:flex-row flex-col gap-2 w-full bg-gray-100 ">
                        <div >
                            <img className="w-[700px] h-[500px]" src="https://thebohobrideguide.com/new_blog_images/5348129706/mceu_5022688411664766364954.jpg" alt="" />
                        </div>
                        <div className="md:p-7 w-full">
                            <div className="flex flex-col gap-3 justify-center">
                                <div className="flex md:flex-row flex-col px-4 gap-2 justify-center items-center">
                                    <input className="px-4 py-4 w-full rounded appearance-none border  focus:outline-none focus:shadow-outline focus:border-blue-600" type="text" placeholder="your name" />
                                    <input className="px-4 py-4 w-full rounded appearance-none border  focus:outline-none focus:shadow-outline focus:border-blue-600" type="text" placeholder="your email" />
                                    <input className="px-4 py-4 w-full rounded appearance-none border  focus:outline-none focus:shadow-outline focus:border-blue-600" type="text" placeholder="your phone" />
                                </div>
                                <div className='px-4'>
                                    <input className="px-4 py-3 md:pb-[200px] pb-[100px] w-full rounded appearance-none border  focus:outline-none focus:shadow-outline focus:border-blue-600" type="text" placeholder="Massege" />
                                </div>
                                <div className="w-full mb-4 flex justify-center items-center">
                                    <button
                                        className="bg-red-700 px-24 py-4 text-white rounded-full"
                                        onClick={() => alert("Sending massege!")}
                                    >Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
