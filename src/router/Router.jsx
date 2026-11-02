import React from 'react'
import { createBrowserRouter } from 'react-router'
import MainLayout from '../layouts/mainLayout/MainLayout'
import AuthLayout from '../layouts/authLayout/AuthLayout'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import Register from '../pages/register/Register'
    
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [{
        path: "login",
        element: <Login />
    },
    {
        path: "register",
        element: <Register />
    }
  ]
  }
 ]);






export default router