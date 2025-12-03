import React, { useState } from 'react'

const Searchbar = () => {
    const [activeTab, setActiveTab] = useState('Commercial');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  }; 

  const categories = [
    'Property Category',
    'Apartment',
    'Villa',
    'Plot',
    'Office',
    'Shop',
  ];

  return (
    <div className="w-full max-w-6xl mx-auto z-[99] shadow-amber-300">
      {/* Tabs */}
      <div className="flex justify-center gap-1">
        {['Residential', 'Commercial'].map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`px-6 py-2 font-medium  rounded-t-md focus:outline-none
              ${
                activeTab === tab
                  ? 'bg-white text-black'
                  : ' bg-blue-600 text-white'
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Dropdowns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 py-6 px-10 rounded-lg shadow bg-white">
        {[1, 2, 3, 4].map((_, index) => (
          <div key={index}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Categories
            </label>
            <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm">
              {categories.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
        ))}

        {/* Search Button */}
        <div className="flex items-end">
          <button className="bg-blue-600 text-white font-semibold px-6 py-2 rounded w-full hover:bg-blue-700">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Searchbar
