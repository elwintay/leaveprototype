import React, { useState } from 'react'
import { Link } from "react-scroll"
import {FaTimes} from 'react-icons/fa'
import {CiMenuFries} from 'react-icons/ci'

const NavBar = () => {
    const [nav, setNav] = useState(false)
    const content = <>
        <div className='lg:hidden block absolute top-12 w-full left-0 right-0 bg-slate-900 transition'>
            <ul className="text-center text-xl p-20">
                <Link spy={true} smooth={true} to="Apply">
                    <li className='my-2 py-2 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Apply</li>
                </Link>
                <Link spy={true} smooth={true} to="Block">
                    <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Block</li>
                </Link>
                <Link spy={true} smooth={true} to="Manpower">
                    <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Manpower</li>
                </Link>
            </ul>
        </div>
    </>
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <nav className='bg-slate-900'>
            <div className='h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4'>
                <div className='flex items-center flex-1'>
                    <span className='text-3xl font-bold'>LeaveEase</span>
                </div>
                <div className="md:flex lg:flex-1 items-center justify-end font-normal hidden">
                    <ul className="flex gap-8 mr-16 text-[18px]">
                        <Link spy={true} smooth={true} to="Apply">
                            <li className='hover:text-blue-400 hover:border-blue-400 transition border-b-2 border-slate-900 cursor-pointer'>Apply</li>
                        </Link>
                        <Link spy={true} smooth={true} to="Block">
                            <li className='hover:text-blue-400 hover:border-blue-400 transition border-b-2 border-slate-900 cursor-pointer'>Block</li>
                        </Link>
                        <Link spy={true} smooth={true} to="Manpower">
                            <li className='hover:text-blue-400 hover:border-blue-400 transition border-b-2 border-slate-900 cursor-pointer'>Manpower</li>
                        </Link>
                    </ul>
                </div>
                <div>
                {nav && content}
                </div>
                <button className="block md:hidden transition" onClick={handleNav}>
                    {nav ? <FaTimes/> : <CiMenuFries/>}
                </button>
            </div>
        </nav>
    )
}

export default NavBar