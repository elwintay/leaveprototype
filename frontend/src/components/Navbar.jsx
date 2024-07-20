import React, { useState } from 'react'
import { Link } from "react-router-dom"
import {FaTimes} from 'react-icons/fa'
import {CiMenuFries} from 'react-icons/ci'

const NavBar = (props) => {
    const [nav, setNav] = useState(false)
    const loggedOut = <div className="md:flex lg:flex-1 items-center justify-end font-normal hidden">
                        <ul className="flex gap-8 mr-16 text-[18px]">
                            <Link spy={true} smooth={true} to="/login">
                                <li className='px-5 py-1 hover:text-blue-400 transition border-b-2 border-slate-900 cursor-pointer'>Login</li>
                            </Link>
                            <Link spy={true} smooth={true} to="/logout">
                                <li className='px-5 py-1 hover:text-blue-400 transition border-b-2 border-slate-900 cursor-pointer'>Logout</li>
                            </Link>
                            <Link spy={true} smooth={true} to="/signup">
                                <li className='bg-slate-500 px-5 py-1 rounded-full hover:text-blue-400 transition border-b-2 border-slate-900 cursor-pointer'>Sign Up</li>
                            </Link>
                        </ul>
                    </div>
    const loggedIn = <div className="md:flex lg:flex-1 items-center justify-end font-normal hidden">
                        <ul className="flex gap-8 mr-16 text-[18px]">
                            <Link spy={true} smooth={true} to="/logout">
                                <li className='px-5 py-1 hover:text-blue-400 transition border-b-2 border-slate-900 cursor-pointer'>Login</li>
                            </Link>
                        </ul>
                    </div>
    const loggedOutFlex = <div>
                            <div className='lg:hidden block absolute top-12 w-full left-0 right-0 bg-slate-900 transition'>
                                <ul className="text-center text-xl p-10">
                                    <Link spy={true} smooth={true} to="/login">
                                        <li className='my-2 py-2 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Login</li>
                                    </Link>
                                    <Link spy={true} smooth={true} to="/logout">
                                        <li className='my-2 py-2 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Logout</li>
                                    </Link>
                                    <Link spy={true} smooth={true} to="/signup">
                                        <li className='bg-slate-500 my-2 py-2 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Sign up</li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
    const loggedInFlex = <div>
                            <div className='lg:hidden block absolute top-12 w-full left-0 right-0 bg-slate-900 transition'>
                                <ul className="text-center text-xl p-10">
                                    <Link spy={true} smooth={true} to="/logout">
                                        <li className='my-2 py-2 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Logout</li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <nav className='bg-slate-900'>
            <div className='h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4'>
                <div className='flex items-center flex-1'>
                    <span className='text-3xl font-bold'>LeaveEase</span>
                </div>
                {loggedOut}
                <div>
                    {nav && loggedOutFlex}
                </div>
                <button className="block md:hidden transition" onClick={handleNav}>
                    {nav ? <FaTimes/> : <CiMenuFries/>}
                </button>
            </div>
        </nav>
    )
}

export default NavBar