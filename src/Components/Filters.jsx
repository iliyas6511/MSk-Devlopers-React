import React, { useState, useEffect, useRef } from 'react';
import { IoBedOutline } from 'react-icons/io5';
import { PiBathtub } from 'react-icons/pi';
import { BsArrowsFullscreen } from 'react-icons/bs';
import { MdOutlineShare } from 'react-icons/md';
import api, { storageUrl } from "./Commonurl";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import companyLogo from "../assets/Companyimages/companyLogo.png"
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

const Filters = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [scrollY, setScrollY] = useState(0);
  const [projects, setProjects] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("Completed");
  const triggerRef = useRef(null);

  const categories = ['All', 'For Sale', 'Houses', 'Villas', 'Apartments', 'Retail'];

  // Fetch projects dynamically
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        let res;
        if (selectedCategory === 'All') {
          res = await api.get("/properties");
        } else {
          res = await api.get(`/property_acc_type/${selectedCategory}`);
        }
        // Map API response to the required structure
        const formattedProjects = res.data.map((property, index) => ({
          id: property.prop_id || index + 1, // Map prop_id to id
          proectname: property.prop_title || "Property Title", // Map prop_title to proectname
          projectdescript: property.description || "No description available", // Map description to projectdescript
          projectadress: property.area || "Unknown Location", // Map area to projectadress
          category: property.listed_in || "Unknown Category", // Map listed_in to category
          proectImage: property.header_img
            ? storageUrl(`/header_imgs/${property.header_img}`)
            : "https://main.wpresidence.net/wp-content/uploads/2014/06/house_nice-525x328.webp", // Fallback image
          projectbeds: property.bedrooms || 0, // Map bedrooms to projectbeds
          projectshowers: property.bathroom || 0, // Map bathroom to projectshowers
          proectarea: property.rooms || 0, // Map rooms to proectarea
          proectowner: "MSK Developers", // Static agent name
          proectownerimage: logo2, // Static avatar
        }));
        setProjects(formattedProjects);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setProjects([]);
      }
    };
    fetchProjects();
  }, [selectedCategory]);

  // Scroll effect for sticky category list
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
      <div className='w-full'>
        <div className='h-[80vh] relative'>
          <div className='absolute inset-0 bg-black opacity-20'></div>
          <img
            className='w-full h-full object-cover'
            src="/Images/north-goa-beach.jpg"
            alt=""
          />
        </div>
      </div>

      <div ref={triggerRef}></div>
      <div className='bg-gray-100 py-[40px]'>
        <div className='max-w-7xl mx-auto'>
          <div className="grid grid-cols-12">
            {/* Left: Category List */}
            <div className="hidden md:block col-span-3 relative">
              <div className={`sticky transition-all duration-1000 py-6 flex flex-col 
                ${scrollY > 0 ? 'items-start top-20' : 'items-start top-0'}`}>
                {categories.map(category => (
                  <div
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`cursor-pointer text-[20px] py-2 transition-colors duration-300 
                    ${selectedCategory === category ? 'text-darkblue' : 'text-gray-500 hover:text-darkblue'}`}
                  >
                    {category}
                  </div>
                ))}
              </div>
            </div>

            {/* --------------------------- MOBILE TABS + DROPDOWN --------------------------- */}
            <div className="col-span-12 md:hidden">
              {/* ✅ Category Tabs */}
              <div className="flex flex-wrap gap-2 justify-center py-5">
                {categories.map((cat) => {
                  const isActive = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      className={`cursor-pointer px-6 py-2 rounded-md flex items-center gap-2 font-medium text-[15px] transition 
                      ${isActive
                          ? "bg-lightblue text-darkblue"
                          : "bg-lightblue text-lightblack hover:text-darkblue"
                        }`}
                      onClick={() => setSelectedCategory(cat)}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>

              {/* ✅ Status Select (Mobile) */}
              <div className="flex justify-center mb-4">
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="border border-gray-300 rounded-md py-2 px-3 text-gray-700"
                >
                  <option value="Completed">Completed</option>
                  <option value="Ongoing">Ongoing</option>
                  <option value="All">All</option>
                </select>
              </div>
            </div>

            {/* Right: Project Cards */}
            <div className="col-span-12 md:col-span-9 p-6">
              {projects.length === 0 ? (
                <p className="text-gray-500">No projects found for {selectedCategory}.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {projects.map((p) => (
                    <div key={p.id} className="bg-white rounded-md shadow-[5px_2px_15px_#D9EEFE] group overflow-hidden">
                      <Link to={`/projects/${p.id}`} >
                        <div className="relative">
                          <div className='h-[300px] overflow-hidden'>
                            <img
                              src={p.proectImage}
                              alt={p.proectname}
                              className="w-full h-full object-cover rounded-t-md group-hover:scale-110 transition duration-700"
                            />
                          </div>
                          <div className="absolute inset-0 bg-black opacity-20 rounded-t-md"></div>
                          <div className="absolute top-2 left-2 flex gap-2">
                            <span className="text-xs px-2 py-1 rounded bg-blue-800 text-white">
                              {p.category}
                            </span>
                          </div>
                          <div className="absolute bottom-2 left-3">
                            <p className="text-[12px] text-white">{p.projectadress}</p>
                          </div>
                        </div>
                        <div className="p-4 flex flex-col">
                          <h3 className="font-semibold text-lg mb-1">
                            {p.proectname}
                          </h3>
                          <TruncatedText text={p.projectdescript} wordLimit={15} id={p.id} />


                          <div className="flex flex-col text-gray-500 text-sm gap-4 mb-3">

                            <span className="flex flex-col text-gray-600 text-sm">
                              {p.projectbeds &&
                                p.projectbeds.split(",").map((item, index) => (
                                  <span key={index}>{item.trim()}</span>
                                ))}
                            </span>


                            <span className="flex flex-col text-gray-600 text-sm">
                              {p.proectarea &&
                                p.proectarea.split(",").map((item, index) => (
                                  <span key={index}>{item.trim()}</span>
                                ))}
                            </span>

                          </div>

                          <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                            <div className="flex items-center">
                              <img
                                src={p.proectownerimage}
                                alt={p.proectowner}
                                className="w-8 h-8 rounded-full mr-2"
                              />
                              <span className="text-gray-700">{p.proectowner}</span>
                            </div>
                            {/* <div className="border border-gray-200 rounded px-2 py-2 text-gray-400 hover:text-black">
                            <MdOutlineShare className="text-[14px]" />
                          </div> */}
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );  
};

export default Filters;