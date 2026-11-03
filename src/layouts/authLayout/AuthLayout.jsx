import React from 'react'
import { Outlet } from 'react-router'
import AuthFooter from '../../components/footer/authFooter/AuthFooter'


export default function AuthLayout() {
  return <>
  <Outlet />
  <AuthFooter />
  </>
}
