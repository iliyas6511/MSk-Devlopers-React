import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {

  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant', // Immediate scroll for new page load
    });
  }, [location.pathname]);
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
      
    </>
  )
}

export default Layout
