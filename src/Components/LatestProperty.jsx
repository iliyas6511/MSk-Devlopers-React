import React, { useState, useEffect } from "react";
import companyLogo from "../assets/Companyimages/companyLogo.png";
import logo2 from "../assets/Companyimages/logo2.jpeg";
import {
  BsHouses,
} from "react-icons/bs";
import {
  TbCategoryPlus,
  TbHomeBitcoin,
  TbHomeStats,
} from "react-icons/tb";
import { TiHomeOutline } from "react-icons/ti";
import { PiBuildingApartment } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import api, { storageUrl } from "./Commonurl";

// --------------------------- CATEGORY SETUP -----------------------------
const categories = [
  { name: "All", icon: <TbCategoryPlus className="text-[16px]" /> },
  { name: "For Sale", icon: <TbHomeBitcoin className="text-[16px]" /> },
  { name: "Villas", icon: <TiHomeOutline className="text-[16px]" /> },
  { name: "Apartments", icon: <PiBuildingApartment className="text-[16px]" /> },
  { name: "Houses", icon: <BsHouses className="text-[16px]" /> },
  { name: "Retail", icon: <TbHomeStats className="text-[16px]" /> },
];

// --------------------------- MAIN COMPONENT -----------------------------
const LatestProperties = () => {
  const [selectedCategory, setSelectedCategory] = useState("All"); // ✅ Default is 'All'
  const [properties, setProperties] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        let res;

        // ✅ Handle "All" case properly
        if (selectedCategory && selectedCategory !== "All") {
          res = await api.get(`/property_acc_type/${selectedCategory}`);
        } else {
          res = await api.get("/properties");
        }

        // ✅ Map and format properties
        const formattedProperties = res.data
          .slice(0, 6)
          .map((property, index) => ({
            id: property.prop_id || index + 1,
            title: property.prop_title || "Property Title",
            descript: property.description || "No description available",
            location: property.area || "Unknown Location",
            status: ["Featured", "Active"],
            image: property.header_img
              ? storageUrl(`/header_imgs/${property.header_img}`)
              : "https://main.wpresidence.net/wp-content/uploads/2014/06/house_nice-525x328.webp",
            beds: property.bedrooms || 0,
            baths: property.bathroom || 0,
            sqft: property.rooms || 0,
            agent: "MSK Developers",
            avatar: logo2,
          }));

        setProperties(formattedProperties);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchProperties();
  }, [selectedCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 mt-20">
      <div className="space-y-2">
        <h2 className="text-[32px] text-lightblack font-medium text-center">
          Latest Properties
        </h2>
        <p className="text-lightgray text-[16px] text-center max-w-2xl mx-auto">
          These are the latest properties in the Sales category. You can create the list using
          the “latest listing shortcode” and show items by specific categories.
        </p>
      </div>

      {/* --------------------------- CATEGORY FILTERS --------------------------- */}
      <div className="flex flex-wrap gap-2 justify-center py-10">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.name;
          return (
            <button
              key={cat.name}
              className={`cursor-pointer px-8 py-3 rounded-md flex items-center gap-2 font-medium text-[16px] transition 
                ${
                  isActive
                    ? "bg-lightblue text-darkblue" // ✅ Highlighted when active
                    : "bg-lightblue text-lightblack hover:text-darkblue" // ✅ Hover effect preserved
                }`}
              onClick={() => setSelectedCategory(cat.name)}
            >
              {cat.icon}
              {cat.name}
            </button>
          );
        })}
      </div>


      {/* --------------------------- PROPERTIES GRID --------------------------- */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {properties.map((prop) => (
          <div
            key={prop.id}
            className="bg-white rounded-md transition overflow-hidden flex flex-col shadow-[5px_2px_15px_#D9EEFE] cursor-pointer"
          >
            <Link to={`/projects/${prop.id}`}>
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
                      className={`text-xs px-2 py-1 rounded mr-1 ${
                        status === "Featured"
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
                <p className="text-gray-500 text-sm mb-2">
                  {prop.descript.length > 100
                    ? prop.descript.slice(0, 100) + "..."
                    : prop.descript}
                </p>

                <div className="flex flex-col text-gray-500 text-sm gap-4 mb-3">
                  {prop.beds && (
                    <span className="flex flex-col text-gray-600 text-sm">
                      {prop.beds
                        .toString()
                        .split(",")
                        .map((item, index) => (
                          <span key={index}>{item.trim()}</span>
                        ))}
                    </span>
                  )}

                  {prop.sqft && (
                    <span className="flex flex-col text-gray-600 text-sm">
                      {prop.sqft
                        .toString()
                        .split(",")
                        .map((item, index) => (
                          <span key={index}>{item.trim()}</span>
                        ))}
                    </span>
                  )}
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
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* --------------------------- LOAD MORE BUTTON --------------------------- */}
      <div className="flex justify-center mt-8" onClick={() => navigate("/filter")}>
        <button className="bg-darkblue text-white px-10 py-3 cursor-pointer rounded font-medium text-sm hover:bg-blue-700 flex items-center gap-2">
          Load More Listings
        </button>
      </div>
    </div>
  );
};

export default LatestProperties;
