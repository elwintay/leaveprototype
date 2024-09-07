import React, { useState } from 'react'
import { useForm, Controller } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { add } from './redux/userSlice';
import { login } from './redux/loginSlice';
import Cookies from 'js-cookie'

function LoginForm(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, control, setValue } = useForm({});
  const onSubmitData = (loginCredentials) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
      credentials: 'include',
      body: JSON.stringify(loginCredentials),
    };
    fetch('http://leaveprototype-backend.vercel.app/api/user/login', requestOptions)
        .then(res => {if (res.status==200){
          dispatch(add(Cookies.get('username')))
          dispatch(login())
          navigate("/apply")
        }})
  };

  return (
    <div className='p-4 m-8 border rounded-lg'>
      <span className='text-xl font-bold pb-4'>Login</span>
      <form className="w-full max-w-xxl" onSubmit={handleSubmit(onSubmitData)}>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3 mb-6">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-email">
              Email
            </label>
            <input {...register("email")} class="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder='eg: example@abc.com'></input>
          </div>
          <div class="w-full px-3 mb-2">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-email">
              Password
            </label>
            <input {...register("password")} type='password' class="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder='eg: 123456'></input>
          </div>
        </div>
        <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Login"/>
      </form>
    </div>
  );
}

export default LoginForm;