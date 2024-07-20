import React, { useState } from 'react'
import NavBar from './Navbar'
import LoginSignUp from './Login'
import { Outlet } from 'react-router-dom';


const Home = () => {
  return (
    <>
      <div>
        <NavBar/>
        <Outlet/>
      </div>
    </>
  );
}

export default Home;