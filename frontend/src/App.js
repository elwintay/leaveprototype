import React, { useState } from 'react'
import NavBar from './components/Navbar'
import Apply from './components/Apply'
import Login from './components/Login'
import Home from './components/Home'
import { createHashRouter, Link, RouterProvider } from 'react-router-dom'
import Logout from './components/Logout'


const router = createHashRouter([
  {
      path: '/',
      element: <Home />,
      children: [
          {
              path: 'signup',
              element: (
                  <div></div>
              ),
          },
          {
            path: 'login',
            element: <Login />,
          },
          {
            path: 'logout',
            element: <Logout />,
          },
          {
              path: 'apply',
              element: <Apply />,
          },
      ],
  },
]);

export default function App(props) {
  return (
      <div>
          <RouterProvider router={router} />
      </div>
  );
}