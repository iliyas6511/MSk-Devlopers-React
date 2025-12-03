import React, { useRef, useState } from 'react'
import AdminSidebar from '../Components/AdminPanel/AdminSidebar'
import AdminDashboard from '../Components/AdminPanel/AdminDashboard'

import companyLogo from "../assets/Companyimages/companyLogo.png"
import { MdCall } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link, Outlet } from 'react-router-dom';
const AdminNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);

  return (
    <>
      <nav className={`w-full h-[96px] flex items-center fixed top-0 right-0 left-0 z-[20] bg-black opacity-90 text-white shadow-[5px_2px_15px_#D9EEFE]  transition-all duration-300`}>
        <div className="container mx-auto">
          <div className='  py-2 px-4 md:px-10 flex justify-between items-center'>
            <div className="flex items-center">
              <img src={companyLogo} alt="MSK Builders Logo" className="mr-2" />
            </div>
            <div className="hidden md:flex md:items-center md:gap-10">
              <Link to="/">
                <p className="hover:text-gray-300 text-lg font-medium">Home</p>
              </Link>

              <div
                className="relative inline-block"
                onMouseEnter={() => {
                  if (timeoutRef.current) clearTimeout(timeoutRef.current);
                  setIsOpen(true);
                }}
                onMouseLeave={() => {
                  timeoutRef.current = setTimeout(() => setIsOpen(false), 200);
                }}
              >
              
                {/* Dropdown menu */}
                {isOpen && (
                  <div
                    className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg z-20"
                    onMouseEnter={() => {
                      if (timeoutRef.current) clearTimeout(timeoutRef.current);
                    }}
                    onMouseLeave={() => {
                      timeoutRef.current = setTimeout(() => setIsOpen(false), 200);
                    }}
                  >
                    {/* Example subitem; add more as needed */}
                    <Link
                      to="/chairmans-message"
                      className="block px-4 py-2 text-darkgray hover:bg-blue-50"
                      onClick={() => setIsOpen(false)}
                    >
                      Chairman's Message
                    </Link>
                  </div>
                )}
              </div>

              <Link to="/filter">
                <p className="hover:text-gray-300 text-lg font-medium">Projects</p>
              </Link>
              <Link to="/cityapi">
                <p className="hover:text-gray-300 text-lg font-medium">City</p>
              </Link>
              <Link to="/contactus">
                <p className="hover:text-gray-300 text-lg font-medium">Contact Us</p>
              </Link>
              <Link to="/adminpanel">
                <p className="hover:text-gray-300 text-lg font-medium">Admin</p>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <div className='flex items-center gap-1'>
                <MdCall className="text-[22px] text-white" />
                <a href="tel:+919096058400" className="hover:text-gray-300 text-lg">+91 90960 58400</a>
              </div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-medium py-1.5 px-4 rounded">Get In Touch</button>
            </div>
            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <GiHamburgerMenu className='text-[20px]' />
            </button>
          </div>
        </div>
      </nav>

    </>
  )
}

const Adminpanel = () => {
  return (
    <>
      <div className='w-full flex flex-col '>
        <AdminNavbar />
        <div className='pt-[96px]'>
          <AdminSidebar />
          <div className='ml-64'>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}

export default Adminpanel
