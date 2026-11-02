import React from 'react'
import { createBrowserRouter } from 'react-router'
import MainLayout from '../layouts/mainLayout/MainLayout'
import AuthLayout from '../layouts/authLayout/AuthLayout'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import Register from '../pages/register/Register'
import ForgotPassword from '../pages/forgetPassword/ForgetPassword'
import VerifyCode from '../pages/verifyCode/VeryfiCode'
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
    },
    {
        path: "forget-password",
        element: <ForgotPassword />
    },
    {
        path: "verify-code",
        element: <VerifyCode />
    }
  ]
  }
 ]);






export default router