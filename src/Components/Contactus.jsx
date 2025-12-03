import React from 'react';

const Contactus = () => {
    return (
        <div className="relative bg-[#0d335d] bg-opacity-90 text-white py-16 px-4">
            <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">
                <h2 className="text-xl md:text-[24px] font-medium text-white max-w-[600px] mx-auto">
                    Contact us today if you’d like to know more
                    about how we help buy, sell or rent your home
                </h2>
            </div>

            <div className="max-w-2xl mx-auto bg-white rounded-md shadow-md p-6 md:p-10 text-gray-800">
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
                            className="relative cursor-pointer z-10 w-full overflow-hidden border border-transparent group-hover:border-darkblue 
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

export default Contactus;
