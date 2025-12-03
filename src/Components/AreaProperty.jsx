import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "./Commonurl"; // Your axios instance

// Static image list (order will be applied as cities come in)
const cityImages = {
  first: "/Images/Panaji.png",
  second: "/Images/Calgute.png",
  third: "/Images/canacona.png",
  fourth: "/Images/Margao.png",
  fifth: "/Images/Mapusa.png",
  sixth: "/Images/Vasco-da-gama.png",
};

const AreaProperty = () => {
  const navigate = useNavigate();
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const res = await api.get("/cities_property_count");
        // No filtering for home_pg, use all cities from the response
        const imageArray = Object.values(cityImages);

        // Map cities and assign images sequentially
        const mapped = res.data.map((city, index) => ({
          id: city.city_id,
          name: city.city_name,
          property_count: city.property_count ?? 0, // Use property_count from API
          image: imageArray[index] || "/Images/default.png", // Fallback if more than 6
        }));

        setProperties(mapped);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    fetchCities();
  }, []);

  return (
    <section className="pt-36 bg-[#F6FAFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center mb-2">
          Properties by Area
        </h2>
        <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto">
          Highlight the best of your properties by using the List Category
          shortcode. You can
          <br />
          list categories, types, cities, areas and states of your choice.
        </p>

        <div className="bg-white py-14 px-14 rounded-xl shadow-[5px_2px_15px_#D9EEFE]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-y-20">
            {properties.map((item) => (
              <div
                key={item.id}
                className="flex flex-row items-center gap-8 cursor-pointer"
                onClick={() => navigate(`/cityapi`)}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="rounded-md w-28 h-24 sm:w-32 sm:h-28 object-cover shadow"
                />
                <div>
                  <div className="text-lg font-semibold text-gray-900">
                    {item.name}
                  </div>
                  <div className="text-gray-400 text-sm mt-1">
                    {item.property_count} {item.property_count === 1 ? "Listing" : "Listings"}
                  </div>
                </div>
              </div>
            ))}
            {properties.length === 0 && (
              <p className="col-span-full text-center text-gray-500">
                No cities available to display.
              </p>
            )}
          </div>

          {/* Load More Button */}
          <div className="flex justify-center mt-12">
            <button
              onClick={() => navigate(`/cityapi`)}
              className="bg-darkblue text-white px-10 py-3 cursor-pointer rounded font-medium text-sm hover:bg-blue-700 flex items-center gap-2"
            >
              Load More Cities
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreaProperty;