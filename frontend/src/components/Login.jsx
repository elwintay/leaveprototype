import React, { useState } from 'react'
import LoginForm from './LoginForm';



function Login(props) {
  return (
    <>
      <div className='flex flex-row justify-center'>
        <LoginForm/>
      </div>
    </>
  );
}

export default Login;