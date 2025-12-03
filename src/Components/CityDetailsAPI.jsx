import React, { useState, useEffect, useRef } from 'react';
import { IoBedOutline } from 'react-icons/io5';
import { PiBathtub } from 'react-icons/pi';
import { BsArrowsFullscreen } from 'react-icons/bs';
import { MdOutlineShare } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import axios from 'axios';
import Faq from './Faq';
import api, { storageUrl } from "./Commonurl";
import { useNavigate } from "react-router-dom";
import logo2 from "../assets/Companyimages/logo2.jpeg"


const TruncatedText = ({ text, wordLimit = 15, id }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  const words = text.split(" ");
  const shouldTruncate = words.length > wordLimit;
  const displayText = isExpanded
    ? text
    : words.slice(0, wordLimit).join(" ") + (shouldTruncate ? "..." : "");

  return (
    <p className="text-gray-500 text-sm mb-2">
      {displayText}{" "}
      {shouldTruncate && (
        <button
          onClick={(e) => {
            e.preventDefault();
            // Instead of toggling, redirect to project details
            navigate(`/projects/${id}`);
          }}
          className="text-blue-600 cursor-pointer hover:underline font-medium"
        >
          Read More
        </button>
      )}
    </p>
  );
};


const CityDetailsAPI = () => {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [activeTab, setActiveTab] = useState("Delivered");
  const [projects, setProjects] = useState([]);
  const [scrollY, setScrollY] = useState(0);
  const triggerRef = useRef(null);

  // Fetch cities
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await api.get("/city_with_properties");
        setCities(response.data || []);
        if (response.data && response.data.length > 0) {
          setSelectedCity(response.data[0].city_name);
        }
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };
    fetchCities();
  }, []);

  // Fetch projects when selectedCity changes
  useEffect(() => {
    if (!selectedCity) return;
    const fetchProjects = async () => {
      try {
        const city = cities.find((c) => c.city_name === selectedCity);
        if (city) {
          const response = await api.get(`city_vise_property/${city.city_id}`);
          setProjects(response.data || []);
        } else {
          setProjects([]);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
        setProjects([]);
      }
    };
    fetchProjects();
  }, [selectedCity, cities]);

  // Scroll listener for sticky behaviour
  useEffect(() => {
    const onScroll = () => {
      const triggerTop = triggerRef.current?.getBoundingClientRect().top || 0;
      setScrollY(Math.max(0, -triggerTop));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Filter projects based on activeTab
  const filteredProjects = projects.filter((p) => {
    if (activeTab === "Ongoing") return p.status === "Available";
    if (activeTab === "Delivered") return p.status === "Archive";
    return false;
  });

  const currentCityData =
    cities.find((city) => city.city_name === selectedCity) || {
      city_name: selectedCity,
      cityDetails: "",
    };

  return (
    <>
      {/* Hero image */}
      <div className="w-full">
        <div className="h-[80vh] relative">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <img
            className="w-full h-full object-cover"
            src="/Images/goa_building.jpg"
            alt=""
          />
        </div>
      </div>

      <div ref={triggerRef}></div>

      <div className="bg-gravishlight py-[40px]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-12 gap-6">
            {/* ------------------- DESKTOP SIDEBAR ------------------- */}
            <div className="hidden md:block md:col-span-3 relative">
              <div
                className={`sticky transition-all duration-1000 py-6 flex flex-col ${scrollY > 0 ? "items-start top-20" : "items-start top-0"
                  }`}
              >
                {cities.map((city) => (
                  <div
                    key={city.city_id}
                    onClick={() => setSelectedCity(city.city_name)}
                    className={`cursor-pointer text-[20px] py-2 transition-colors duration-300 ${selectedCity === city.city_name
                        ? "text-darkblue"
                        : "text-gray-500 hover:text-darkblue"
                      }`}
                  >
                    {city.city_name}
                  </div>
                ))}
              </div>
            </div>

            {/* ------------------- MOBILE CITY TABS + DROPDOWN ------------------- */}
            <div className="col-span-12 md:hidden">
              {/* Horizontal city tabs */}
              <div className="flex flex-wrap gap-4  px-1 py-5 no-scrollbar">
                {cities.map((city) => {
                  const isActive = selectedCity === city.city_name;
                  return (
                    <button
                      key={city.city_id}
                      onClick={() => setSelectedCity(city.city_name)}
                      className={`whitespace-nowrap px-4 py-2 rounded-md text-[15px] font-medium transition ${isActive
                          ? "bg-lightblue text-darkblue"
                          : "bg-lightblue text-lightblack hover:text-darkblue"
                        }`}
                    >
                      {city.city_name}
                    </button>
                  );
                })}
              </div>

              {/* Active tab select (Delivered/Ongoing) on mobile */}
              <div className="flex justify-center mb-4">
                <select
                  value={activeTab}
                  onChange={(e) => setActiveTab(e.target.value)}
                  className="border border-gray-300 rounded-md py-2 px-3 text-gray-700"
                >
                  <option value="Delivered">Delivered Projects</option>
                  <option value="Ongoing">Ongoing Projects</option>
                </select>
              </div>
            </div>

            {/* ------------------- MAIN CONTENT ------------------- */}
            <div className="col-span-12 md:col-span-9 p-0 md:p-6">
              <div className="px-2 md:px-0">
                <h2 className="text-2xl font-medium mb-2">
                  {currentCityData.city_name || "Loading..."}
                </h2>

                {/* Desktop tabs (hidden on mobile) */}
                <div className="hidden md:flex gap-20 my-8">
                  {["Delivered", "Ongoing"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`pb-3 font-normal cursor-pointer text-[24px] ${activeTab === tab
                          ? "border-b-2 border-black text-black"
                          : "text-gray-500 hover:text-lightblack"
                        }`}
                    >
                      {tab} Projects
                    </button>
                  ))}
                </div>

                {/* No projects */}
                {filteredProjects.length === 0 ? (
                  <p className="text-gray-500">
                    No {activeTab} projects for{" "}
                    {currentCityData.city_name || "this city"}.
                  </p>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredProjects.map((p) => (
                      <div
                        key={p.prop_id}
                        className="bg-white rounded-md shadow-[5px_2px_15px_#D9EEFE] group overflow-hidden"
                      >
                        <Link to={`/projects/${p.prop_id}`} >
                          <div className="relative">
                            <div className="h-[300px] overflow-hidden">
                              <img
                                src={
                                  p.header_img
                                    ? storageUrl(`/header_imgs/${p.header_img}`)
                                    : "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXBhcnRtZW50fGVufDB8fDB8fHww"
                                }
                                alt={p.prop_title}
                                className="w-full h-full object-cover rounded-t-md group-hover:scale-110 transition duration-700"
                              />
                            </div>

                            <div className="absolute inset-0 bg-black opacity-20 rounded-t-md"></div>

                            <div className="absolute top-2 left-2 flex gap-2">
                              <span className="text-xs px-2 py-1 rounded bg-blue-800 text-white">
                                {p.status === "Available" ? "Ongoing" : "Delivered"}
                              </span>
                            </div>

                            <div className="absolute bottom-2 left-3">
                              <p className="text-[12px] text-white">
                                {p.address}
                              </p>
                            </div>
                          </div>

                          <div className="p-4 flex flex-col">
                            <h3 className="font-semibold text-lg mb-1">
                              <Link
                                to={`/projects/${p.prop_id}`}
                                className="text-black hover:text-black"
                              >
                                {p.prop_title}
                              </Link>
                            </h3>

                            <TruncatedText
                              text={p.description}
                              wordLimit={15}
                              id={p.prop_id}
                            />

                            <div className="flex flex-col text-gray-500 text-sm gap-4 mb-3">
                              <span className="flex flex-col text-gray-600 text-sm">
                                {p.bedrooms &&
                                  p.bedrooms.split(",").map((item, index) => (
                                    <span key={index}>{item.trim()}</span>
                                  ))}
                              </span>

                              <span className="flex flex-col text-gray-600 text-sm">
                                {p.area &&
                                  p.area.split(",").map((item, index) => (
                                    <span key={index}>{item.trim()}</span>
                                  ))}
                              </span>
                            </div>

                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                              <div className="flex items-center">
                                <img
                                  src={p.owner_image_url || logo2}
                                  alt={p.owner || "Owner"}
                                  className="w-8 h-8 rounded-full mr-2"
                                />
                                <span className="text-gray-700">MSK Developers</span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-8">
                  <Faq />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default CityDetailsAPI;