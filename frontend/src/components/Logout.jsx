import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";



function Logout(props) {
  const navigate = useNavigate();
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
  };
  fetch('http://localhost:4000/api/user/logout', requestOptions)
  .then(res => {
    console.log(res)
    navigate("/login")
  })
  return (
    <>
    </>
  );
}

export default Logout;