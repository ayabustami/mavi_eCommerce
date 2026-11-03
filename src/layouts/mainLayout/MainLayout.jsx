import React from 'react'
import Header from '../../components/header/Header'
import MainFooter from '../../components/footer/mainFooter/MainFooter'
import { Outlet } from 'react-router'


export default function MainLayout() {
  return <>
  <Header />

  <Outlet />

  <MainFooter />

  </>
  
}
