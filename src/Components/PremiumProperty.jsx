import React, { useState, useEffect } from "react";
import { BsArrowsFullscreen } from "react-icons/bs";
import { IoBedOutline } from "react-icons/io5";
import { MdOutlineShare } from "react-icons/md";
import { PiBathtub } from "react-icons/pi";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import api, { storageUrl } from "./Commonurl";
import companyLogo from "../assets/Companyimages/companyLogo.png"
import logo2 from "../assets/Companyimages/logo2.jpeg"
import { Link } from "react-router-dom";

const PremiumProperty = () => {
  const [startIdx, setStartIdx] = useState(0);
  const [premiumProperties, setPremiumProperties] = useState([]);

  // Fetch properties dynamically
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await api.get("/properties");
        // Filter for premium_status=1 and map API response to match the required structure
        
        const formattedProperties = res.data
          .filter((property) => property.premium_status === 1)
          .map((property, index) => ({
            id: property.prop_id || index + 1, // Use property.id if available, else fallback to index
            title: property.prop_title || "Property Title", // Map prop_title to title
            descript: property.description || "No description available", // Map description to descript
            location: property.area || "Unknown Location", // Map area to location
            status: ["Featured", "Sales", "Active"], // Static status as per requirement
            image: property.header_img
              ? storageUrl(`/header_imgs/${property.header_img}`)
              : "https://main.wpresidence.net/wp-content/uploads/2014/06/house_nice-525x328.webp", // Fallback image if header_img is null
            beds: property.bedrooms || 0, // Map bedrooms to beds
            baths: property.bathroom || 0, // Map bathroom to baths
            sqft: property.rooms || 0, // Map rooms to sqft (assuming rooms represents total area in this context)
            agent: "MSK Developers", // Static agent name as per requirement
            avatar: logo2, // Static avatar (can be updated if API provides)
          }));
        setPremiumProperties(formattedProperties);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };
    fetchProperties();
  }, []);

  // Responsive: how many cards on screen
  const getCardsToShow = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth >= 1024) return 3; // large (≥1024px)
    if (window.innerWidth >= 640) return 2; // medium (≥640px)
    return 1; // small
  };

  const [cardsToShow, setCardsToShow] = useState(getCardsToShow());

  // Listen for window resize for reactivity
  useEffect(() => {
    const handleResize = () => setCardsToShow(getCardsToShow());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Wrap-around indexes for continuous sliding
  const total = premiumProperties.length;
  const visible = [...Array(cardsToShow)].map((_, i) => premiumProperties[(startIdx + i) % total] || {});

  const handlePrev = () => setStartIdx((prev) => (prev - 1 + total) % total);
  const handleNext = () => setStartIdx((prev) => (prev + 1) % total);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="space-y-2 mb-8">
        <h2 className="text-[32px] text-lightblack font-medium text-center">Premium Properties</h2>
        <p className="text-lightgray text-[16px] text-center max-w-2xl mx-auto">
          Highlight the best of your properties by using the List Category shortcode. You can list specific properties categories, types, cities, areas.
        </p>
      </div>
      {/* Carousel Frame */}
      <div className="py-20 md:py-8">
        <div className="relative flex items-center">
          {/* Top-right arrows for small screens */}
          <div className="flex absolute right-2 top-[-70px] z-20 sm:hidden gap-4">
            <button
              onClick={handlePrev}
              className="bg-lightblue p-3 rounded-md hover:bg-blue-50 cursor-pointer"
              aria-label="Previous"
            >
              <FaArrowLeft className="text-blue-400 text-base" />
            </button>
            <button
              onClick={handleNext}
              className="bg-lightblue p-3 rounded-md hover:bg-blue-50 cursor-pointer"
              aria-label="Next"
            >
              <FaArrowRight className="text-blue-400 text-base" />
            </button>
          </div>

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-10
            bg-lightblue p-4 rounded-full shadow-lg hover:bg-blue-50 cursor-pointer"
            aria-label="Previous"
          >
            <FaArrowLeftLong className="text-darkblue text-lg" />
          </button>
          {/* Slider Cards */}
          <div className="w-full px-4 sm:px-6">
            <div
              className={`
                grid gap-6 
                ${cardsToShow === 1 ? "grid-cols-1" : cardsToShow === 2 ? "grid-cols-2" : "grid-cols-3"}
                transition-all duration-300
              `}
            >
              {visible.map((prop, idx) => (
                <div
                  key={prop.id || idx}
                  className="bg-white cursor-pointer rounded-md transition overflow-hidden flex flex-col shadow-[5px_2px_15px_#D9EEFE]"
                >
                  <Link to={`/projects/${prop.id}`}>
                    <div className="relative group">
                      <img
                        src={prop.image}
                        alt={prop.title}
                        className="w-full h-[220px] object-cover"
                      />
                      <div className="absolute inset-0 bg-black opacity-20"></div>
                      <div className="absolute top-2 left-2 flex gap-2 flex-wrap">
                        {prop.status?.map((status, i) => (
                          <span
                            key={i}
                            className={`text-xs px-2 py-1 rounded mr-1 ${status === "Featured"
                                ? "bg-green-500 text-white"
                                : status === "Sales"
                                  ? "bg-blue-400 text-white"
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
                      <div className="absolute bottom-1 right-3 flex items-center gap-2">
                        <BsArrowsFullscreen className="text-white text-[18px]" />
                        <span className="text-white text-xs">6</span>
                      </div>
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      <h3 className="font-semibold text-lg mb-1">{prop.title}</h3>

                      <p className="text-gray-500 text-sm mb-2 line-clamp-2">{prop.descript}</p>


                      <div className="flex flex-col text-gray-500 text-sm gap-4 mb-3">

                        <span className="flex flex-col text-gray-600 text-sm">
                          {prop.beds &&
                            prop.beds.split(",").map((item, index) => (
                              <span key={index}>{item.trim()}</span>
                            ))}
                        </span>


                        <span className="flex flex-col text-gray-600 text-sm">
                          {prop.sqft &&
                            prop.sqft.split(",").map((item, index) => (
                              <span key={index}>{item.trim()}</span>
                            ))}
                        </span>

                      </div>
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                        <div className="flex items-center">
                          <img
                            src={prop.avatar}
                            alt={prop.agent}
                            className="w-8 h-8 rounded-full mr-2"
                          />
                          <span className="text-gray-700">{prop.agent}</span>
                        </div>
                        {/* <div className="border border-gray-200 rounded-[3px] px-2 py-2 text-lightgray hover:text-darkblue">
                        <MdOutlineShare className="text-[14px]" />
                      </div> */}
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-10
            bg-lightblue p-4 rounded-full shadow-lg hover:bg-blue-50 cursor-pointer"
            aria-label="Next"
          >
            <FaArrowRightLong className="text-darkblue text-lg" />
          </button>
        </div>
        {/* Dots */}
        <div className="flex justify-center gap-6 mt-10">
          {premiumProperties.map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full 
                ${startIdx === i ? "bg-blue-500" : "bg-blue-200"}
                inline-block transition-all
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PremiumProperty;