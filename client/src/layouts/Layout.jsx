import React from 'react'

import Header from '../components/shared/Header.jsx'
import Footer from '../components/shared/Footer.jsx'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout