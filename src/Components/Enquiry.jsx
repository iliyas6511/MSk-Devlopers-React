import React from 'react';

const EnquiryForm = () => {
  return (
    <div className="bg-gray-200 py-10">
      <form className="max-w-7xl mx-auto py-4 grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
        
        {/* Full Name */}
        <input
          type="text"
          placeholder="Full Name*"
          className="col-span-1 md:col-span-1 border-b border-gray-400 bg-transparent outline-none text-lightblack placeholder-gray-500 py-2"
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email*"
          className="col-span-1 md:col-span-1 border-b border-gray-400 bg-transparent outline-none text-lightblack placeholder-gray-500 py-2"
        />

        {/* Country Code + Mobile Number */}
        <div className="col-span-1 md:col-span-2 flex gap-2 items-center border-b border-gray-400 py-2">
          <select className="bg-transparent outline-none text-gray-700">
            <option value="+91">+91</option>
            {/* Add more country codes if needed */}
          </select>
          <input
            type="tel"
            placeholder="Mobile Number *"
            className="flex-1 bg-transparent outline-none text-lightblack placeholder-gray-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="col-span-1 border border-gray-500 text-lightblack py-2 px-4 hover:bg-gray-700 hover:text-white  transition-colors duration-1000"
        >
          ENQUIRE
        </button>
      </form>
    </div>
  );
};

export default EnquiryForm;
