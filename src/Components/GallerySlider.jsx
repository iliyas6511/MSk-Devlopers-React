
import React, { useState } from 'react';
import { FaPlay, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import api,{ storageUrl } from "./Commonurl";

const GallerySlider = ({ gallery }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % gallery.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  const openPopup = (index) => {
    setCurrentIndex(index);
    setIsPopupOpen(true);
  };
  const closePopup = () => setIsPopupOpen(false);

  if (!gallery || gallery.length === 0) {
    return <div>No gallery items available</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="mb-8">
        <h1 className="text-gray-800 text-center text-3xl font-medium">Gallery</h1>
      </div>

      <div className="relative w-full h-[600px] bg-gray-200 rounded-lg overflow-hidden">
        {gallery[currentIndex]?.file_name?.endsWith('.mp4') ? (
          <iframe
            src={storageUrl(`/property_gallery/${gallery[currentIndex].file_name}`)}
            title="Video"
            className="w-full h-full object-cover"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        ) : (
          <img
            src={storageUrl(`/property_gallery/${gallery[currentIndex]?.file_name}`)}
            className="w-full h-full object-cover"
            alt="Main Banner"
          />
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
        {gallery.map((item, index) => (
          <div
            key={index}
            onClick={() => openPopup(index)}
            className={`relative w-28 h-20 rounded-lg overflow-hidden border-2 ${currentIndex === index ? 'border-blue-500' : 'border-transparent'} hover:border-blue-500 cursor-pointer transition`}
          >
            {item.file_name.endsWith('.mp4') ? (
              <>
                <video
                  src={storageUrl(`/property_gallery/${item.file_name}`)}
                  className="w-full h-full object-cover opacity-70"
                ></video>
                <FaPlay className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl" />
              </>
            ) : (
              <img
                src={storageUrl(`/property_gallery/${item.file_name}`)}
                alt={`Thumb ${index}`}
                className="w-full h-full object-cover"
              />
            )}
          </div>
        ))}
      </div>

      {/* Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-60">
          <div className='absolute inset-0 bg-black opacity-70'></div>
          <div className="relative max-w-4xl w-full rounded-lg shadow-lg">
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-gray-800 text-3xl hover:text-gray-600"
            >
              <IoClose />
            </button>
            {gallery[currentIndex].file_name.endsWith('.mp4') ? (
              <iframe
                src={storageUrl(`/property_gallery/${gallery[currentIndex].file_name}`)}
                title="Video Popup"
                className="w-full h-[80vh] rounded-lg"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
              ></iframe>
            ) : (
              <img
                src={storageUrl(`/property_gallery/${gallery[currentIndex].file_name}`)}
                className="w-full max-h-[80vh] object-contain rounded-lg"
                alt="Popup"
              />
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

export default GallerySlider;