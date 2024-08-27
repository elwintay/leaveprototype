import React, { useState } from 'react'
import Login from './components/Login'
// import Signup from './components/Signup'
import Home from './components/Home'
import Apply from './components/Apply'
import { Provider } from 'react-redux'
import store from './components/redux/storage';
import { createHashRouter, Link, RouterProvider } from 'react-router-dom'


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
                path: 'apply',
                element: <Apply />,
            },
        ],
    },
]);

export default function App(props) {
    return (
        <Provider store={store}>
            <div>
                <RouterProvider router={router} />
            </div>
        </Provider>
    );
}