import React from 'react'

const HeroSection = () => {

    return (
        <>
            <div className='w-full'>
                <div className='h-[80vh] relative'>
                    <div className='absolute inset-0 bg-black opacity-20'></div>
                    <img
                        className='w-full h-full object-fill'
                        src="/Images/MSK Office.png"
                        alt="Project Background"
                    />
                </div>
            </div>
        </>
    )
}

const Contactus = () => {
    return (
        <div className="relative  bg-opacity-90 py-10 px-4">
            <div className="max-w-4xl mx-auto text-center  ">
                <h1 className='inline-block px-10 md:px-22 text-2xl font-medium text-lightblack py-6 border-b border-b-gray-300 tracking-wider'>
                    Call Us On : <span className='text-darkblue'>+91 90 9605 8400</span>
                </h1>
                <h2 className="block py-6   text-[18px] md:text-[16px] font-medium text-lightblack max-w-[600px] mx-auto">
                    How can we help you?
                </h2>
            </div>

            <div className="max-w-2xl mx-auto bg-white rounded-md p-6 md:p-10 !py-0 text-gray-800">
                <h3 className="text-lg md:text-[22px] font-semibold text-lightblack text-center mb-2">
                    Schedule a meeting with our team
                </h3>
                <p className="text-base text-center text-gray-500 mb-6 max-w-[450px] mx-auto">
                    Our experts and developers would love to contribute
                    their expertise and insights to your real estate plans.
                </p>

                <form className="space-y-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full p-3 bg-lightblue rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <input
                            type="text"
                            placeholder="Mobile"
                            className="w-full p-3 bg-lightblue rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-3 bg-lightblue rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <input
                            type="text"
                            placeholder="City"
                            className="w-full p-3 bg-lightblue rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <textarea
                        placeholder="Message"
                        rows="4"
                        className="w-full p-3 bg-lightblue rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    ></textarea>

                    <div className="w-full group relative">
                        <button
                            type="submit"
                            className="relative z-10 cursor-pointer w-full overflow-hidden border border-transparent group-hover:border-darkblue 
               bg-darkblue text-white font-medium py-3 px-6 rounded-sm transition-colors duration-500"
                        >
                            <span className="relative z-10 transition-colors duration-500 group-hover:text-darkblue">
                                Send Email
                            </span>

                            <span
                                className="absolute inset-0 z-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform 
                 duration-500 rounded-md"
                            ></span>
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};


import { FaPhoneAlt, FaEnvelope, FaChevronRight } from "react-icons/fa";

const LocationSection = () => {
  return (
    <div className='max-w-7xl mx-auto py-12'>
        <div>
            <h2 className="text-2xl font-regular px-4 text-lightblack border-b border-gray-300 tracking-wide py-4">CORPORATE OFFICE</h2>
        </div>
    <div className="flex flex-col lg:flex-row items-start justify-between gap-8 p-6 border-b border-gray-300">
      {/* Left Section - Address */}
      <div className="w-full lg:w-1/2 space-y-4">

        <div className="text-lightblack space-y-1 text-[16px]">
          <p className="font-medium">MSK Building Systems </p>
          <p>Office No: 705, 7th Floor,</p>
          <p>Dempo Trade Center, patto, Patto Centre,</p>
          <p>Panaji, Goa - 403001</p>
          <p className="flex items-center gap-2">
            <FaPhoneAlt className="text-gray-600" /> +91 90960 58400
          </p>
          <p className="flex items-center gap-2">
            <FaEnvelope className="text-gray-600" /> mskbuildingsystems@gmail.com
          </p>
        </div>

        <a
          href="https://maps.app.goo.gl/aPAhgv9vz7VprpNd6"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 font-medium inline-flex items-center hover:underline"
        >
          VIEW LOCATION <FaChevronRight className="ml-2" />
        </a>
      </div>

      {/* Right Section - Google Map Embed */}
      <div className="w-full lg:w-1/2">
        <iframe
          title="Sobha Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.8408196663345!2d73.83346477494248!3d15.492992085106051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc194b0fbac5d%3A0x5c6ce5c628d83082!2sMsk%20Builders!5e0!3m2!1sen!2sin!4v1754545058259!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="rounded-md shadow"
        ></iframe>
      </div>
    </div>
    </div>
  );
};



const ContactusPage = () => {
    return (
        <>
            <HeroSection />
            <Contactus />
            <LocationSection />


        </>
    )
}

export default ContactusPage
