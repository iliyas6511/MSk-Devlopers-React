import React, { useState } from 'react';
import { FaDownload } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import { IoDownloadOutline } from 'react-icons/io5';
import { LiaBookSolid } from 'react-icons/lia';
import { MdOutlineDesignServices } from 'react-icons/md';
import { PiBookLight } from 'react-icons/pi';
import { SiAltiumdesigner } from 'react-icons/si';


const ProjectDescript = () => {

  return (
    <>
      <div className='w-full'>
        {/* Hero Section */}
        <div className='h-[80vh] relative'>
          <div className='absolute inset-0 bg-black opacity-20'></div>
          <img
            className='w-full h-full object-center'
            src="https://images.unsplash.com/photo-1419454073861-6e5bccea68ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGdvYSUyMGhvbWVzfGVufDB8fDB8fHww"
            alt="Project Background"
          />
        </div>

        {/* Project Overview Section */}
        <div className="text-center py-16 px-4 max-w-7xl mx-auto">
          <h2 className="text-3xl font-medium text-lightblack mb-4">PROJECT OVERVIEW</h2>
          <div className='max-w-5xl mx-auto text-lg'>
            <p className="text-gray-500 mb-2">
              Discover a nature-inspired lifestyle with MSK Builders – Goa’s trusted name in premium living. Nestled amidst the serene surroundings of Goa,
              each home is thoughtfully designed to offer scenic views, refined architecture, and a sense of peaceful exclusivity.
            </p>
            <p className="text-gray-500 mb-10">
              #LiveInGoaLuxury and embrace a life of tranquility, comfort, and timeless elegance.
            </p>
          </div>
          {/* Downloads */}
          <div className="flex justify-center gap-22 flex-wrap">
            {/* Floor Plan */}
            <a href="/downloads/floor-plan.pdf" download className="flex flex-col items-center text-[#778eab] hover:text-[#85a1c4] transition">
              <MdOutlineDesignServices className="text-5xl mb-2" />
              <div className='flex gap-2 items-center'>
                <FiDownload className="text-[16px] " />
                <span className="text-[18px] font-medium">Floor Plan</span>
              </div>
            </a>

            {/* Master Plan */}
            <a href="/downloads/master-plan.pdf" download className="flex flex-col items-center text-[#778eab] hover:text-[#85a1c4] transition">
              <SiAltiumdesigner className="text-5xl mb-2" />
              <div className='flex gap-2 items-center'>
                <FiDownload className="text-[16px] " />
                <span className="text-[18px] font-medium">Master Plan</span>
              </div>
            </a>

            {/* Brochure */}
            <a href="/downloads/brochure.pdf" download className="flex flex-col items-center text-[#778eab] hover:text-[#85a1c4] transition">
              <PiBookLight className="text-5xl mb-2" />
              <div className='flex gap-2 items-center'>
                <FiDownload className="text-[16px] " />
                <span className="text-[18px] font-medium">Brochure</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}











import { FaChevronLeft, FaChevronRight, FaPlay } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

const images = [
  { type: 'image', src: 'https://main.wpresidence.net/wp-content/uploads/2017/11/4.3-1-835x467.webp' },
  { type: 'image', src: 'https://main.wpresidence.net/wp-content/uploads/2017/11/4.4-2-835x467.webp' },
  { type: 'video', src: 'https://player.vimeo.com/video/284436243' },
  { type: 'image', src: 'https://main.wpresidence.net/wp-content/uploads/2017/11/3-835x467.webp' },
  { type: 'image', src: 'https://main.wpresidence.net/wp-content/uploads/2017/11/4.1-Copy-835x467.webp' },
];


const GallerySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  const openPopup = (index) => {
    setCurrentIndex(index);
    setIsPopupOpen(true);
  };
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="mb-8">
        <h1 className="text-gray-800 text-center text-3xl font-medium">Gallery</h1>
      </div>

      <div className="relative w-full h-[600px] bg-gray-200 rounded-lg overflow-hidden">
        {images[currentIndex].type === 'image' ? (
          <img src={images[currentIndex].src} className="w-full h-full object-cover" alt="Main Banner" />
        ) : (
          <iframe
            src={images[currentIndex].src}
            title="Video"
            className="w-full h-full object-cover"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        )}

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-md hover:bg-black/70"
        >
          <FaChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-md hover:bg-black/70"
        >
          <FaChevronRight size={24} />
        </button>

        {/* Active Status */}
        <span className="absolute top-4 right-4 bg-blue-600 text-white text-sm px-3 py-1 rounded-full">Active</span>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-4 mt-4 overflow-x-auto px-2 py-4">
        {images.map((item, index) => (
          <div
            key={index}
            onClick={() => openPopup(index)}
            className={`relative w-28 h-20 rounded-lg overflow-hidden border-2 ${currentIndex === index ? 'border-blue-500' : 'border-transparent'
              } hover:border-blue-500 cursor-pointer transition`}
          >
            {item.type === 'image' ? (
              <img src={item.src} alt={`Thumb ${index}`} className="w-full h-full object-cover" />
            ) : (
              <>
                <iframe
                  src={item.src}
                  title="Video Thumbnail"
                  className="w-full h-full object-cover opacity-70"
                  frameBorder="0"
                ></iframe>
                <FaPlay className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl" />
              </>
            )}
          </div>
        ))}
      </div>

      {/* Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-60">
          <div className='absolute inset-0 bg-black opacity-70'></div>
          <div className="relative max-w-4xl w-full  rounded-lg  shadow-lg">
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-gray-800 text-3xl hover:text-gray-500"
            >
              <IoMdClose />
            </button>
            {images[currentIndex].type === 'image' ? (
              <img
                src={images[currentIndex].src}
                className="w-full max-h-[80vh] object-contain rounded-lg"
                alt="Popup"
              />
            ) : (
              <iframe
                src={images[currentIndex].src}
                title="Video Popup"
                className="w-full h-[80vh] rounded-lg"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
              ></iframe>
            )}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-md hover:bg-black/70"
            >
              <FaChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-md hover:bg-black/70"
            >
              <FaChevronRight size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};



import {
  FaPlus,
  FaMinus,
  FaLocationArrow,
  FaHotel,
  FaStore,
  FaUtensils,
  FaHouseUser,
  FaMapMarkerAlt,
} from "react-icons/fa";

const LocationMap = () => {
  return (
    <>
      <div className="bg-white shadow-md rounded-md p-4 w-full py-8">
        <div className='max-w-5xl mx-auto' >
          <div className="flex justify-center items-center mb-8">
            <h2 className="text-gray-800 text-center text-3xl font-medium">Location</h2>
            
          </div>

          <div className="relative w-full h-[500px] rounded-md overflow-hidden">
            {/* Map background */}
            <iframe
              className="w-full h-full"
              src="https://maps.google.com/maps?q=New%20Jersey&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              allowFullScreen
              title="Map"
            ></iframe>

            {/* Left Sidebar Icons */}
            {/* <div className="absolute top-4 left-4 space-y-2 flex flex-col items-center z-10">
              {[FaPlus, FaMinus, FaLocationArrow, FaHotel, FaStore, FaUtensils, FaHouseUser, FaMapMarkerAlt].map((Icon, index) => (
                <button
                  key={index}
                  className="bg-white shadow-md hover:bg-gray-100 p-2 rounded-md text-red-500"
                >
                  <Icon />
                </button>
              ))}
            </div> */}

            

            {/* Popup Card */}
            <div className="absolute left-[50%] top-[50%] translate-x-4 -translate-y-[120%] z-10 w-[300px] bg-white shadow-lg rounded-md overflow-hidden">
              <div className="flex">
                <img
                  src="https://images.unsplash.com/photo-1523192193543-6e7296d960e4?w=600&auto=format&fit=crop&q=60"
                  alt="Studio"
                  className="w-24 h-24 object-cover"
                />
                <div className="p-3 flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-sm">Studio Apartment</h3>
                    <button className="text-gray-400 hover:text-gray-600">✕</button>
                  </div>
                  <p className="text-blue-600 text-sm mt-1">$ 200 / month</p>
                  <div className="text-xs text-gray-600 mt-1 space-x-2">
                    <span>1 BD</span>
                    <span>2 BA</span>
                    <span>100 ft²</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};



const ProjectDetails = () => {
  return (
    <>
      <ProjectDescript />

      <GallerySlider />

      <LocationMap />
    </>
  );
};

export default ProjectDetails;
