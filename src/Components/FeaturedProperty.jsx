import React, { useState } from 'react';
import { BsArrowsFullscreen } from 'react-icons/bs';
import { FaBed, FaBath, FaArrowsAlt } from 'react-icons/fa';
import { FiHeart, FiShare2 } from 'react-icons/fi';
import { IoBedOutline } from 'react-icons/io5';
import { MdArrowBackIosNew, MdArrowForwardIos, MdOutlineShare } from 'react-icons/md';
import { PiBathtub } from 'react-icons/pi';

const properties = [
    {
        id: 1,
        title: 'Landmark Residency',
        description: 'Beautiful, updated, ground level Co-op apartment in the desirable Bay ...',
        beds: 8,
        baths: 8,
        area: 150,
        userImg: 'https://randomuser.me/api/portraits/men/32.jpg',
        images: [
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ]
    },
    {
        id: 2,
        title: 'Azavedo Residency',
        description: 'Just steps away from QM2 express bus to Manhattan and local buses and very good property; onl ...',
        beds: 3,
        baths: 2,
        area: 200,
        userImg: 'https://randomuser.me/api/portraits/women/47.jpg',
        images: [
            'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80'
        ]
    }
];

export default function FeaturedProperty() {
    const [currentImageIndex, setCurrentImageIndex] = useState([0, 0]);

    const handleArrow = (propertyIndex, direction) => {
        setCurrentImageIndex((prev) => {
            const updated = [...prev];
            const total = properties[propertyIndex].images.length;
            updated[propertyIndex] = (prev[propertyIndex] + (direction === 'next' ? 1 : total - 1)) % total;
            return updated;
        });
    };

    return (
        <div className="bg-[#f6f9fb] py-10 md:py-28 px-4 md:px-10">
            <div className='max-w-7xl mx-auto'>
                <div className='flex flex-col gap-2 mb-6'>
                    <h2 className="text-center text-2xl md:text-3xl font-medium text-black mb-2">Featured Properties</h2>
                    <p className="text-center text-[16px] text-gray-500 max-w-2xl mx-auto mb-8">
                        Here are two listings displayed with the featured property shortcode, which you can use 
                        when you have some special properties to present.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    {properties.map((property, idx) => (
                        <div
                            key={property.id}
                            className="flex flex-col md:flex-row bg-white rounded-md shadow-[5px_2px_15px_#D9EEFE] overflow-hidden md:h-[350px]"
                        >
                            {/* Left: Image Carousel */}
                            <div className="relative md:w-1/2 w-full h-full md:h-auto">
                                <img
                                    src={property.images[currentImageIndex[idx]]}
                                    alt="Property"
                                    className="w-full h-[250px] md:h-full object-cover"
                                />
                                <div className='absolute inset-0 bg-black opacity-20'>

                                </div>
                                <button
                                    onClick={() => handleArrow(idx, 'prev')}
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10"
                                >
                                    <MdArrowBackIosNew className="text-gray-300 hover:text-gray-200 text-2xl" />
                                </button>
                                <button
                                    onClick={() => handleArrow(idx, 'next')}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 z-10"
                                >
                                    <MdArrowForwardIos className="text-gray-300 hover:text-gray-200 text-2xl" />
                                </button>
                                {/* Avatar */}
                                <img
                                    src={property.userImg}
                                    className="absolute bottom-2 left-4 w-10 h-10 rounded-full  shadow-md"
                                    alt="User"
                                />
                            </div>

                            {/* Right: Content */}
                            <div className="flex flex-col justify-between p-6 flex-1">
                                <div>
                                    <h3 className="text-lg font-semibold text-lightblack mb-2">{property.title}</h3>
                                    <p className="text-sm text-gray-500 mb-4">{property.description}</p>
                                    <div className="inline-block border border-gray-200 rounded-[3px] px-2 py-2 text-lightgray hover:text-darkblue">
                                        <MdOutlineShare className="text-[14px]" />
                                    </div>
                                </div>

                                <hr className="my-3 border-gray-200" />

                                <div className="flex gap-6 text-sm text-gray-500">
                                    <div className="flex items-center gap-1">
                                        <span className="flex items-center align-middle gap-1.5">
                                            <IoBedOutline className="inline-block text-[22px]" />
                                            {property.beds}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span className="flex items-center align-middle gap-1.5">
                                            <PiBathtub className="inline-block text-[22px]" />
                                            {property.baths}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span className="flex items-center align-middle gap-2">
                                            <BsArrowsFullscreen className="inline-block text-[14px]" />
                                            {property.sqft} ft²
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
