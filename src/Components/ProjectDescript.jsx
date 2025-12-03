
import React from 'react';
import { FiDownload } from 'react-icons/fi';
import { MdOutlineDesignServices } from 'react-icons/md';
import { PiBookLight } from 'react-icons/pi';
import { SiAltiumdesigner } from 'react-icons/si';
import api,{ storageUrl } from "./Commonurl";

const ProjectDescript = ({ property, propertyDocs }) => {
  return (
    <div className='w-full'>
      {/* Hero Section */}
      <div className='h-[80vh] relative'>
        <div className='absolute inset-0 bg-black opacity-20'></div>
        <img
          className='w-full h-full object-center'
          src={property?.header_img
              ? storageUrl(`/header_imgs/${property.header_img}`):"https://images.unsplash.com/photo-1419454073861-6e5bccea68ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGdvYSUyMGhvbWVzfGVufDB8fDB8fHww"}
          alt="Project Background"
        />
      </div>

      {/* Project Overview Section */}
      <div className="text-center py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-medium text-lightblack mb-4">{property?.prop_title || 'PROJECT OVERVIEW'}</h2>
        <div className='max-w-5xl mx-auto text-lg'>
          <p className="text-gray-500 mb-2">
            {property?.description || 'Discover a nature-inspired lifestyle with MSK Builders – Goa’s trusted name in premium living.'}
          </p>
          <p className="text-gray-500 mb-10">
            {`#${property?.prop_title?.replace(/\s+/g, '') || 'LiveInGoaLuxury'} and embrace a life of tranquility, comfort, and timeless elegance.`}
          </p>
        </div>
        {/* Downloads */}
        <div className="flex justify-center gap-22 flex-wrap">
          {/* Floor Plan */}
          {propertyDocs?.floor_plan && (
            <a href={storageUrl(`/property_docs/${propertyDocs.floor_plan}`)} target="_blank" download className="flex flex-col items-center text-[#778eab] hover:text-[#85a1c4] transition">
              <MdOutlineDesignServices className="text-5xl mb-2" />
              <div className='flex gap-2 items-center'>
                <FiDownload className="text-[16px]" />
                <span className="text-[18px] font-medium">Floor Plan</span>
              </div>
            </a>
          )}

          {/* Master Plan */}
          {propertyDocs?.master_plan && (
            <a href={storageUrl(`/property_docs/${propertyDocs.master_plan}`)} target="_blank" download className="flex flex-col items-center text-[#778eab] hover:text-[#85a1c4] transition">
              <SiAltiumdesigner className="text-5xl mb-2" />
              <div className='flex gap-2 items-center'>
                <FiDownload className="text-[16px]" />
                <span className="text-[18px] font-medium">Master Plan</span>
              </div>
            </a>
          )}

          {/* Brochure */}
          {propertyDocs?.brochure && (
            <a href={storageUrl(`/property_docs/${propertyDocs.brochure}`)} target="_blank" download className="flex flex-col items-center text-[#778eab] hover:text-[#85a1c4] transition">
              <PiBookLight className="text-5xl mb-2" />
              <div className='flex gap-2 items-center'>
                <FiDownload className="text-[16px]" />
                <span className="text-[18px] font-medium">Brochure</span>
              </div>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDescript;