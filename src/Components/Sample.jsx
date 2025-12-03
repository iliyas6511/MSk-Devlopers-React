import React, { useState, useEffect, useRef } from 'react';
import { IoBedOutline } from 'react-icons/io5';
import { PiBathtub } from 'react-icons/pi';
import { BsArrowsFullscreen } from 'react-icons/bs';
import api, { storageUrl } from "./Commonurl";
import { Link, useNavigate } from 'react-router-dom';
import logo2 from "../assets/Companyimages/logo2.jpeg";

const TruncatedText = ({ text, wordLimit = 15, id }) => {
  const navigate = useNavigate();
  const words = text.split(" ");
  const shouldTruncate = words.length > wordLimit;
  const displayText = shouldTruncate
    ? words.slice(0, wordLimit).join(" ") + "..."
    : text;

  return (
    <p className="text-gray-500 text-sm mb-2">
      {displayText}{" "}
      {shouldTruncate && (
        <button
          onClick={(e) => {
            e.preventDefault();
            navigate(`/projects/${id}`);
          }}
          className="text-blue-600 hover:underline font-medium"
        >
          Read More
        </button>
      )}
    </p>
  );
};

const Filters = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("Completed"); // ✅ default Completed
  const [scrollY, setScrollY] = useState(0);
  const [projects, setProjects] = useState([]);
  const triggerRef = useRef(null);

  const categories = [
    { name: "All" },
    { name: "For Sale" },
    { name: "Houses" },
    { name: "Villas" },
    { name: "Apartments" },
    { name: "Retail" },
  ];

  // ✅ Fetch projects dynamically with both category + status filter
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        let res;
        if (selectedCategory === "All") {
          res = await api.get("/properties");
        } else {
          res = await api.get(`/property_acc_type/${selectedCategory}`);
        }

        // Map API response to usable structure
        const formattedProjects = res.data
          .map((property, index) => ({
            id: property.prop_id || index + 1,
            proectname: property.prop_title || "Property Title",
            projectdescript: property.description || "No description available",
            projectadress: property.area || "Unknown Location",
            category: property.listed_in || "Unknown Category",
            proectImage: property.header_img
              ? storageUrl(`/header_imgs/${property.header_img}`)
              : "https://main.wpresidence.net/wp-content/uploads/2014/06/house_nice-525x328.webp",
            projectbeds: property.bedrooms || "",
            projectshowers: property.bathroom || "",
            proectarea: property.rooms || "",
            proectowner: "MSK Developers",
            proectownerimage: logo2,
            status: property.status || "Completed", // ✅ Assuming API has a status
          }))
          .filter((p) =>
            selectedStatus === "All" ? true : p.status === selectedStatus
          );

        setProjects(formattedProjects);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setProjects([]);
      }
    };

    fetchProjects();
  }, [selectedCategory, selectedStatus]);

  // Sticky scroll logic
  useEffect(() => {
    const onScroll = () => {
      const triggerTop = triggerRef.current?.getBoundingClientRect().top || 0;
      setScrollY(Math.max(0, -triggerTop));
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* --------------------------- HERO IMAGE --------------------------- */}
      <div className="w-full">
        <div className="h-[80vh] relative">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1706940119672-862cdda31ecc?q=80&w=1170"
            alt=""
          />
        </div>
      </div>

      <div ref={triggerRef}></div>
      <div className="bg-gray-100 py-[40px]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-6">
            {/* --------------------------- LEFT SIDEBAR (DESKTOP ONLY) --------------------------- */}
            <div className="hidden md:block col-span-3 relative">
              <div
                className={`sticky transition-all duration-1000 py-6 flex flex-col ${
                  scrollY > 0 ? "items-start top-20" : "items-start top-0"
                }`}
              >
                {categories.map((cat) => (
                  <div
                    key={cat.name}
                    onClick={() => setSelectedCategory(cat.name)}
                    className={`cursor-pointer text-[20px] py-2 transition-colors duration-300 
                    ${
                      selectedCategory === cat.name
                        ? "text-darkblue"
                        : "text-gray-500 hover:text-darkblue"
                    }`}
                  >
                    {cat.name}
                  </div>
                ))}

                {/* ✅ Status Filter Dropdown (Desktop) */}
                <div className="mt-6">
                  <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700"
                  >
                    <option value="Completed">Completed</option>
                    <option value="Ongoing">Ongoing</option>
                    <option value="All">All</option>
                  </select>
                </div>
              </div>
            </div>

            {/* --------------------------- MOBILE TABS + DROPDOWN --------------------------- */}
            <div className="col-span-12 md:hidden">
              {/* ✅ Category Tabs */}
              <div className="flex flex-wrap gap-2 justify-center py-5">
                {categories.map((cat) => {
                  const isActive = selectedCategory === cat.name;
                  return (
                    <button
                      key={cat.name}
                      className={`cursor-pointer px-6 py-2 rounded-md flex items-center gap-2 font-medium text-[15px] transition 
                      ${
                        isActive
                          ? "bg-lightblue text-darkblue"
                          : "bg-lightblue text-lightblack hover:text-darkblue"
                      }`}
                      onClick={() => setSelectedCategory(cat.name)}
                    >
                      {cat.name}
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

            {/* --------------------------- RIGHT PROJECT GRID --------------------------- */}
            <div className="col-span-12 md:col-span-9 p-6">
              {projects.length === 0 ? (
                <p className="text-gray-500">
                  No projects found for {selectedCategory}.
                </p>
              ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
                  {projects.map((p) => (
                    <div
                      key={p.id}
                      className="bg-white rounded-md shadow-[5px_2px_15px_#D9EEFE] group overflow-hidden"
                    >
                      <Link to={`/projects/${p.id}`}>
                        <div className="relative">
                          <div className="h-[300px] overflow-hidden">
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
                            <p className="text-[12px] text-white">
                              {p.projectadress}
                            </p>
                          </div>
                        </div>

                        <div className="p-4 flex flex-col">
                          <h3 className="font-semibold text-lg mb-1">
                            {p.proectname}
                          </h3>
                          <TruncatedText
                            text={p.projectdescript}
                            wordLimit={15}
                            id={p.id}
                          />

                          <div className="flex flex-col text-gray-500 text-sm gap-4 mb-3">
                            <span className="flex flex-col text-gray-600 text-sm">
                              {p.projectbeds &&
                                p.projectbeds
                                  .toString()
                                  .split(",")
                                  .map((item, i) => (
                                    <span key={i}>{item.trim()}</span>
                                  ))}
                            </span>

                            <span className="flex flex-col text-gray-600 text-sm">
                              {p.proectarea &&
                                p.proectarea
                                  .toString()
                                  .split(",")
                                  .map((item, i) => (
                                    <span key={i}>{item.trim()}</span>
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
                              <span className="text-gray-700">
                                {p.proectowner}
                              </span>
                            </div>
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
