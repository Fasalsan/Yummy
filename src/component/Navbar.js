import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Link } from 'react-router-dom';

const nav = [
    {
        link: '#home',
        title: 'Home'
    },
    {
        link: '#about',
        title: 'About'
    },
    {
        link: '#menu',
        title: 'Menu'
    },
    {
        link: '#chef',
        title: 'Chef'
    },
    {
        link: '#contact',
        title: 'Contact'
    },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <nav className='bg-white shadow-lg w-full fixed top-0 left-0 md:px-[120px] px-7 z-40'>
                <div className='md:flex items-center justify-between bg-white py-4 md:py-4'>
                    <div className='font-bold text-2xl cursor-pointer text-red-700'>
                        <a href='/'>
                            FAIFAI
                        </a>
                    </div>

                    <div onClick={() => setIsOpen(!isOpen)} className='text-3xl absolute right-7 top-5 cursor-pointer md:hidden text-red-700'>{isOpen ? <IoMdClose /> : <RxHamburgerMenu />}
                    </div>

                    <ul className={`md:flex md:items-center md:pb-0 pb-7 absolute md:static bg-white md:z-auto z-[-1] left-0 md:w-auto w-full md:pl-0 pl-12 duration-500 ease-in ${isOpen ? 'top-18' : 'left-[-490px]'}`}>
                        {
                            nav.map((data) => (
                                <li key={data.title} className='md:ml-8 text-lg md:my-0 my-5 hover:text-black'>
                                    <AnchorLink onClick={() => setIsOpen(!isOpen)}  href={data.link} class="text-lg group relative w-max">
                                        <span className='hover:text-red-700 focus:text-red-700 text-black'>{data.title}</span>
                                        <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-red-700 group-hover:w-3/6"></span>
                                        <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-red-700 group-hover:w-3/6"></span>
                                    </AnchorLink>
                                </li>
                            ))
                        }
                        <div className='md:ml-20 '>
                            <button className='bg-red-700 px-4 py-2 rounded-lg text-white'>Contact Me</button>
                        </div>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
