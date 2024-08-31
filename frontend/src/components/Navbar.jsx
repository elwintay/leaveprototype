import React, { useState } from 'react'
import { Link } from "react-router-dom"
import {FaTimes} from 'react-icons/fa'
import {CiMenuFries} from 'react-icons/ci'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { login } from './redux/loginSlice';
import Cookies from 'js-cookie'

const NavBar = (props) => {
    const isLoggedIn = useSelector(function(store) {
        return store.login.value;
    });
    const user = useSelector(function(store) {
        return store.user.value;
    });
    const dispatch = useDispatch();
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    const navigate = useNavigate();
    const clearCookie = () => {
        const requestOptions = {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
          credentials: 'include'
        };
        fetch('http://localhost:4000/api/user/logout', requestOptions)
            .then(res => {
                console.log(res)
                navigate("/login")
                navigate(0)
            })
    };
    const loggedOut = <div className="md:flex lg:flex-1 items-center justify-end font-normal hidden">
                        <ul className="flex gap-8 mr-16 text-[18px]">
                            <Link spy={true} smooth={true} to="/login">
                                <li className='bg-slate-500 px-5 py-1 rounded-full hover:text-blue-400 transition border-b-2 border-slate-900 cursor-pointer'>Login</li>
                            </Link>
                        </ul>
                    </div>
    const loggedIn = <div className="md:flex lg:flex-1 items-center justify-end font-normal hidden">
                        <span className='text-m p-4 text-blue-400'>Welcome {user}</span>
                        <ul className="flex gap-8 mr-16 text-[18px]">
                            <Link spy={true} smooth={true} onClick={clearCookie}>
                                <li className='bg-slate-500 px-5 py-1 rounded-full hover:text-blue-400 transition border-b-2 border-slate-900 cursor-pointer'>Logout</li>
                            </Link>
                        </ul>
                    </div>
    const loggedOutFlex = <div>
                            <div className='lg:hidden block absolute top-12 w-full left-0 right-0 bg-slate-900 transition'>
                                
                                <ul className="text-center text-xl p-10">
                                    <Link spy={true} smooth={true} to="/login">
                                        <li className='bg-slate-500 my-2 py-2 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Login</li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
   const loggedInFlex = <div>
                            <div className='lg:hidden block absolute top-12 w-full left-0 right-0 bg-slate-900 transition'>
                                <ul className="text-center text-xl p-10">
                                    <li><span className='text-m p-4 text-blue-400'>Welcome {user}</span></li>
                                    <Link spy={true} smooth={true} onClick={clearCookie}>
                                        <li className='bg-slate-500 my-2 py-2 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Logout</li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
    
    return (
        <nav className='bg-slate-900'>
            <div className='h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4'>
                <div className='flex items-center flex-1'>
                    <span className='text-3xl font-bold'>LeaveEase</span>
                </div>
                {isLoggedIn? loggedIn : loggedOut}
                <div>
                    {(nav && isLoggedIn) ? loggedInFlex : (nav && !isLoggedIn) && loggedOutFlex}
                </div>
                <button className="block md:hidden transition" onClick={handleNav}>
                    {nav ? <FaTimes/> : <CiMenuFries/>}
                </button>
            </div>
        </nav>
    )
}

export default NavBar