
import React from 'react';
import {
  FaPlus,
  FaMinus,
  FaLocationArrow,
  FaHotel,
  FaStore,
  FaUtensils,
  FaHouseUser,
  FaMapMarkerAlt,
} from 'react-icons/fa';

const LocationMap = ({ property }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4 w-full py-8">
      <div className='max-w-5xl mx-auto'>
        <div className="flex justify-center items-center mb-8">
          <h2 className="text-gray-800 text-center text-3xl font-medium">Location</h2>
        </div>     
        <div className="relative w-full h-[500px] rounded-md overflow-hidden">
          <iframe
            className="w-full h-full"
            src={property?.location_url}
            //  src={`https://maps.google.com/maps?q=${encodeURIComponent(property?.location_url || 'Miraj')}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
            frameBorder="0"
            allowFullScreen
            title="Map"
          ></iframe>

          <div className="absolute left-[50%] top-[50%] translate-x-4 -translate-y-[120%] z-10 w-[300px] bg-white shadow-lg rounded-md overflow-hidden">
            <div className="flex">
              <img
                src="https://images.unsplash.com/photo-1523192193543-6e7296d960e4?w=600&auto=format&fit=crop&q=60"
                alt="Studio"
                className="w-24 h-24 object-cover"
              />
              <div className="p-3 flex-1">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-sm">{property?.prop_title || 'Studio Apartment'}</h3>
                  <button className="text-gray-400 hover:text-gray-600">✕</button>
                </div>
                <p className="text-blue-600 text-sm mt-1">{property?.category || 'Commercial'}</p>
                <div className="text-xs text-gray-600 mt-1 space-x-2">
                  <span>{property?.bedrooms || 1} BD</span>
                  <span>{property?.bathroom || 2} BA</span>
                  <span>{property?.area || 100} ft²</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;