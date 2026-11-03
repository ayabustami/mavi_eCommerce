import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import MainFooter from '../../components/footer/mainFooter/MainFooter'
import { Outlet } from 'react-router'


export default function MainLayout() {
  return <>
  <Navbar />

  <Outlet />

  <MainFooter />

  </>
  
}
