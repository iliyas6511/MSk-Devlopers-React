import React, { useState } from "react";
import { BsArrowsFullscreen, BsHouses } from "react-icons/bs";
import {
    FaBed,
    FaBath,
    FaRulerCombined,
    FaHome,
    FaBuilding,
    FaHotel,
    FaCity,
    FaStoreAlt,
    FaRegBuilding,
    FaArrowRight,
} from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { MdOutlineShare } from "react-icons/md";
import { PiBathtub, PiBuildingApartment } from "react-icons/pi";
import { TbHomeBitcoin, TbHomeStats } from "react-icons/tb";
import { TiHomeOutline } from "react-icons/ti";

const categories = [
    { name: "For Sale", icon: <TbHomeBitcoin className="text-[16px]" /> },
    { name: "Villas", icon: <TiHomeOutline className="text-[16px]" /> },
    { name: "Apartments", icon: <PiBuildingApartment className="text-[16px]" /> },
    { name: "Houses", icon: <BsHouses className="text-[16px]" /> },
    { name: "Retail", icon: <TbHomeStats className="text-[16px]" /> },
];

const properties = [
    {
        id: 1,
        title: "Aldia De Old Goa",
        descript:"This property is mostly wooded and sits high on a hilltop overlooking the Mohawk River Val",
        location: "Margao, Goa",
        status: ["Featured", "Active"],
        image:
            "https://main.wpresidence.net/wp-content/uploads/2017/11/3-525x328.webp",
        beds: 5,
        baths: 6,
        sqft: 195,
        agent: "Zulfikar Kadam",
        avatar:
            "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
        id: 2,
        descript:"Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood ...",
        title: "Aldona Royal",
        location: "Vasco Da Gama, Goa",
        status: ["Featured", "Active"],
        image:
            "https://main.wpresidence.net/wp-content/uploads/2017/09/house1-scaled-1-525x328.webp",
        beds: 2,
        baths: 2,
        sqft: 200,
        agent: "Wonder Woman",
        avatar:
            "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        id: 3,
        title: "Azavedo Residency",
        descript:"Sesame Street international co-productions are educational children's television series ba ...",
        location: "Madgao, Goa",
        status: ["Featured", "Active"],
        image:
            "https://main.wpresidence.net/wp-content/uploads/2017/01/9-525x328.webp",
        beds: 5,
        baths: 6,
        sqft: 195,
        agent: "Mark Musk",
        avatar:
            "https://randomuser.me/api/portraits/men/33.jpg",
    },
    {
        id: 4,
        title: "Ferns Residency",
        descript:"Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood Floors, ...",
        location: "Panaji, Goa",
        status: ["Featured", "Active"],
        image:
            "https://main.wpresidence.net/wp-content/uploads/2014/06/house_nice-525x328.webp",
        beds: 8,
        baths: 8,
        sqft: 400,
        agent: "Fissy Wakanda",
        avatar:
            "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
        id: 5,
        title: "River View Paradise",
        descript:"Mineral Reserves: 2008 core drilling and testing (on just 60 of the 1,100 acres) proved 30 ...",
        location: "Marago, Goa",
        status: ["Featured", "Active"],
        image:
            "https://main.wpresidence.net/wp-content/uploads/2014/05/villa-1900-525x328.webp",
        beds: 6,
        baths: 2,
        sqft: 200,
        agent: "Peter Kamble",
        avatar:
            "https://randomuser.me/api/portraits/men/23.jpg",
    },
    {
        id: 6,
        title: "Buena Vista",
        descript:"This property is mostly wooded and sits high on a hilltop overlooking the Mohawk River Val ...",
        location: "Canacona, Goa",
        status: ["Featured", "Active"],
        image:
            "https://main.wpresidence.net/wp-content/uploads/2014/05/building-teracce-525x328.webp",
        beds: 5,
        baths: 6,
        sqft: 195,
        agent: "Shin Chan",
        avatar:
            "https://randomuser.me/api/portraits/men/39.jpg",
    },
];

const LatestProperties = () => {
    const [selectedCategory, setSelectedCategory] = useState("For Sale");

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 mt-20">
            <div className="space-y-2">
                <h2 className="text-[32px] text-lightblack font-medium  text-center">Latest Properties</h2>
                <p className="text-lightgray text-[16px] text-center max-w-2xl mx-auto">
                    These are the latest properties in the Sales category. You can create the list using
                    the “latest listing shortcode” and show items by specific categories.
                </p>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 justify-center py-10">
                {categories.map((cat) => (
                    <button
                        key={cat.name}
                        className={`px-8 py-3 rounded-md flex items-center gap-2 font-medium text-[16px] text-lightblack bg-lightblue hover:text-darkblue transition ${selectedCategory === cat.name ? ' text-darkblue' : ''
                            }`}
                        onClick={() => setSelectedCategory(cat.name)}
                    >
                        {cat.icon}
                        {cat.name}
                    </button>
                ))}
            </div>
            {/* Properties Grid */}
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {properties.map((prop) => (
                    <div
                        key={prop.id}
                        className="bg-white rounded-md  transition overflow-hidden flex flex-col shadow-[5px_2px_15px_#D9EEFE]"
                    >
                        <div className="relative group">
                            <img
                                src={prop.image}
                                alt={prop.title}
                                className="w-full h-[230px] object-cover"
                            />
                            <div className="absolute inset-0 bg-black opacity-20"></div>
                            <div className="absolute top-2 left-2 flex gap-2">
                                {prop.status.map((status, i) => (
                                    <span
                                        key={i}
                                        className={`text-xs px-2 py-1 rounded mr-1 ${status === "Featured"
                                            ? "bg-green-500 text-white"
                                            : status === "Active"
                                                ? "bg-darkblue text-white"
                                                : "bg-gray-500 text-white"
                                            }`}
                                    >
                                        {status}
                                    </span>
                                ))}
                            </div>

                            <div className="absolute bottom-1 left-3">
                                <p className="text-[12px] text-white">{prop.location}</p>

                            </div>
                        </div>
                        <div className="p-4 flex flex-col flex-1">
                            <h3 className="font-semibold text-lg mb-1">{prop.title}</h3>
                            <p className="text-gray-500 text-sm mb-2">{prop.descript}</p>
                            <div className="flex text-gray-500 text-sm gap-4 mb-3">
                                <span className="flex items-center align-middle gap-1.5">
                                    <IoBedOutline className="inline-block text-[22px]" />
                                    {prop.beds}
                                </span>
                                <span className="flex items-center align-middle gap-1.5">
                                    <PiBathtub className="inline-block text-[22px]" />
                                    {prop.baths}
                                </span>
                                <span className="flex items-center align-middle gap-2">
                                    <BsArrowsFullscreen className="inline-block text-[14px]" />
                                    {prop.sqft} ft²
                                </span>
                            </div>
                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                                <div className= "flex items-center">
                                    <img
                                        src={prop.avatar}
                                        alt={prop.agent}
                                        className="w-8 h-8 rounded-full mr-2"
                                    />
                                    <span className="text-gray-700">{prop.agent}</span>
                                </div>
                                <div className="border border-gray-200 rounded-[3px] px-2 py-2 text-lightgray hover:text-darkblue">
                                        <MdOutlineShare className="text-[14px]"/>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Load more */}
            <div className="flex justify-center mt-8">
                <button className="bg-darkblue text-white px-10 py-3 rounded font-medium text-sm hover:bg-blue-700 flex items-center gap-2">
                    Load More Listings
                </button>
            </div>
        </div>
    );
};

export default LatestProperties;
