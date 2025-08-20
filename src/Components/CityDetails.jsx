import React, { useState, useEffect, useRef } from 'react';
import { IoBedOutline } from 'react-icons/io5';
import { PiBathtub } from 'react-icons/pi';
import { BsArrowsFullscreen } from 'react-icons/bs';
import { MdOutlineShare } from 'react-icons/md';

import Data from './ProjectData';
import Faq from './Faq';

const CityDetails = () => {
    const [selectedCity, setSelectedCity] = useState(Data[0].cityName);
    const [activeTab, setActiveTab] = useState('Ongoing');
    const [scrollY, setScrollY] = useState(0);
    const triggerRef = useRef(null);

    const cities = Data.map(c => c.cityName);
    const currentCityData = Data.find(city => city.cityName === selectedCity);
    const filteredProjects = currentCityData.projects.filter(
        (p) => p.status === activeTab
    );

    useEffect(() => {
        const onScroll = () => {
            const triggerTop = triggerRef.current?.getBoundingClientRect().top || 0;
            setScrollY(Math.max(0, -triggerTop));
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <>
            <div className='w-full '>
                <div className='h-[80vh] relative'>
                    <div className='absolute inset-0 bg-black opacity-20'></div>
                    <img
                        className='w-full h-full object-cover'
                        src="https://images.unsplash.com/photo-1706940119672-862cdda31ecc?q=80&w=1170"
                        alt=""
                    />
                </div>
            </div>

            <div ref={triggerRef}></div>
            <div className='bg-gravishlight py-[40px]'>
                <div className='max-w-7xl mx-auto'>
                    <div className="grid grid-cols-12">
                        {/* Left: City List */}
                        <div className="col-span-3 relative">
                            <div className={`sticky transition-all duration-1000 py-6 flex flex-col 
      ${scrollY > 0 ? 'items-start top-20' : 'items-start top-0'}`}>
                                {cities.map(city => (
                                    <div
                                        key={city}
                                        onClick={() => setSelectedCity(city)}
                                        className={`cursor-pointer text-[20px] py-2 transition-colors duration-300 ${selectedCity === city ? 'text-darkblue' : 'text-gray-500 hover:text-darkblue'}`}
                                    >
                                        {city}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: City Details */}
                        <div className="col-span-9 p-6">
                            <h2 className="text-2xl font-medium mb-2">{currentCityData.cityName}</h2>
                            <p className="text-gray-500 mb-6">{currentCityData.cityDetails}</p>

                            <div className="flex gap-20 my-8 ">
                                {['Ongoing', 'Delivered'].map(tab => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`pb-3 font-normal cursor-pointer text-[24px] ${activeTab === tab ? 'border-b-2 border-black text-black' : 'text-gray-500 hover:text-lightblack'}`}
                                    >
                                        {tab} Projects
                                    </button>
                                ))}
                            </div>

                            {filteredProjects.length === 0 ? (
                                <p className="text-gray-500">No {activeTab} projects for {currentCityData.cityName}.</p>
                            ) : (
                                <div className="grid grid-cols-2 gap-8">
                                    {filteredProjects.map((p) => (
                                        <div key={p.id} className="bg-white rounded-md shadow-[5px_2px_15px_#D9EEFE] group overflow-hidden">
                                            <div className="relative ">
                                                <div className='h-[300px] overflow-hidden'>
                                                    <img src={p.proectImage} alt={p.proectname} className="w-full h-full 
                                                object-cover rounded-t-md group-hover:scale-110 transition duration-700" />
                                                </div>
                                                <div className="absolute inset-0 bg-black opacity-20 rounded-t-md"></div>
                                                <div className="absolute top-2 left-2 flex gap-2">
                                                    <span className="text-xs px-2 py-1 rounded bg-blue-800 text-white">
                                                        {p.status}
                                                    </span>
                                                </div>
                                                <div className="absolute bottom-2 left-3">
                                                    <p className="text-[12px] text-white">{p.projectadress}</p>
                                                </div>
                                            </div>
                                            <div className="p-4 flex flex-col">
                                                <h3 className="font-semibold text-lg mb-1">{p.proectname}</h3>
                                                <p className="text-gray-500 text-sm mb-2">{p.projectdescript}</p>
                                                <div className="flex text-gray-500 text-sm gap-4 mb-3">
                                                    <span className="flex items-center gap-1.5"><IoBedOutline className="text-[22px]" />{p.projectbeds}</span>
                                                    <span className="flex items-center gap-1.5"><PiBathtub className="text-[22px]" />{p.projectshowers}</span>
                                                    <span className="flex items-center gap-1.5"><BsArrowsFullscreen className="text-[14px]" />{p.proectarea} ft²</span>
                                                </div>
                                                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                                                    <div className="flex items-center">
                                                        <img src={p.proectownerimage} alt={p.proectowner} className="w-8 h-8 rounded-full mr-2" />
                                                        <span className="text-gray-700">{p.proectowner}</span>
                                                    </div>
                                                    <div className="border border-gray-200 rounded px-2 py-2 text-gray-400 hover:text-black">
                                                        <MdOutlineShare className="text-[14px]" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <Faq />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CityDetails;
