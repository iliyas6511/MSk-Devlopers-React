import React, { useEffect, useRef, useState } from 'react'

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaHeart, FaWhatsapp } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';
const SocialBar = () => {

  return (
    <>
      <div className="text-white hidden md:block">
        <div className='container mx-auto flex justify-between items-center px-10 border-b border-borderLight h-10'>
          <div className="flex space-x-4  h-full">
            <div className="border-r-[1px] border-l-[1px] border-borderLight h-full flex items-center py-2 pr-4 pl-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="hover:text-gray-300 text-[18px]" />
              </a>
            </div>
            <div className="border-r border-borderLight h-full flex items-center py-2 pr-4">
              <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="hover:text-gray-300" />
              </a>
            </div>
            <div className="border-r border-borderLight h-full flex items-center py-2 pr-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="hover:text-gray-300" />
              </a>
            </div>
            <div className="h-full flex items-center py-2 pr-4 border-r-[1px] border-borderLight">
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="hover:text-gray-300" />
              </a>
            </div>
          </div>
          <div className="flex space-x-4 h-full items-center">
            <div className="border-r border-borderLight flex items-center gap-1 py-2 pr-4 h-full">
              <FaHeart className="text-white text-sm" />
              <span className="text-white text-sm leading-none">Favorites</span>
            </div>
            <div className="border-r border-borderLight flex items-center gap-1 py-2 pr-4 h-full">
              <IoMail className="text-white text-sm" />
              <a
                href="mailto:mskbuildingsystem@gmail.com"
                className="text-white text-sm leading-none hover:text-gray-300"
              >
                mskbuildingsystem@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-1 py-2 h-full">
              <FaWhatsapp className="text-white text-sm" />
              <a
                href="tel:+9225906776"
                className="text-white text-sm leading-none hover:text-gray-300"
              >
                +9225 906 776
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

import companyLogo from "../assets/Companyimages/companyLogo.png"
import { MdCall } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
const Menubar = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);

  return (
    <>
      <nav className={`w-full ${isScrolled ? 'bg-black opacity-90 text-white shadow-[5px_2px_15px_#D9EEFE] ' : ''} text-white transition-all duration-300`}>
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
                {/* Main menu item as Link */}
                <Link
                  to="/aboutus"
                  className="hover:text-gray-300 text-lg font-medium flex items-center"
                >
                  About Us
                  <svg
                    className={`ml-1 w-4 h-4 transform transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </Link>

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

              <Link to="/projects">
                <p className="hover:text-gray-300 text-lg font-medium">Projects</p>
              </Link>
              <Link to="/city">
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
                <a href="tel:+919028236776" className="hover:text-gray-300 text-lg">+919028236776</a>
              </div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-medium py-1.5 px-4 rounded">Get In Touch</button>
            </div>
            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <GiHamburgerMenu className='text-[20px]' />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden text-white p-4 space-y-2">
          <a href="#home" className="block hover:text-gray-300">Home</a>
          <a href="#about" className="block hover:text-gray-300">About Us</a>
          <a href="#projects" className="block hover:text-gray-300">Projects</a>
          <a href="#contact" className="block hover:text-gray-300">Contact Us</a>

          <div className='flex items-center gap-1'>
            <MdCall className="text-[22px] text-white" />
            <a href="tel:+919028236776" className="hover:text-gray-300 text-lg">+919028236776</a>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">Get In Touch</button>
        </div>
      )}
    </>
  )
}

const Navbar = () => {
  const [hideTopBar, setHideTopBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHideTopBar(window.scrollY > 70);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {!hideTopBar && <SocialBar />}
      <Menubar isScrolled={hideTopBar} />
    </div>
  );
}

export default Navbar
