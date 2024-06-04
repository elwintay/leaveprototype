import React, { useState } from 'react'
// import { NavLink } from "react-router-dom"
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const NavBar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        // <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        //     <h1 className="w-full text-3xl font-bold text-[#00df9a]">
        //         Welcome User
        //     </h1>
            // <ul className='hidden md:flex'>
            //     <li className='p-4'>Apply</li>
            //     <li className='p-4'>Block</li>
            //     <li className='p-4'>Manpower</li>
            // </ul>
        //     <div onClick={handleNav} className='block md:hidden'>
        //         {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        //     </div>
        //     <div className={!nav ? 'md:hidden w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'md:hidden'}>
        //         <h1 className="w-full text-3xl font-bold text-[#00df9a]">
        //             Welcome User
        //         </h1>
        //         <ul className='uppercase p-4'>
        //             <li className='p-4 border-b border-gray-600'>Apply</li>
        //             <li className='p-4 border-b border-gray-600'>Block</li>
        //             <li className='p-4 border-b border-gray-600'>Manpower</li>
        //         </ul>
        //     </div>
        // </div>
        <div className=" flex w-1/3 text-white">
            <div className='hidden w-full justify-between md:flex'>
                <ul>
                    <li className='p-4'>Apply</li>
                    <li className='p-4'>Block</li>
                    <li className='p-4'>Manpower</li>
                </ul>
            </div>
            <div onClick={handleNav} className="md:hidden">
                {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            </div>
        </div>
    )
}

export default NavBar