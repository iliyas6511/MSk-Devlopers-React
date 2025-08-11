import React from "react";
import { useNavigate } from "react-router-dom";

// Area property data. You can extend or update this list.
const properties = [
    {
        name: "Panaji",
        listings: 25,
        image: "/Images/Panaji.png", // Update with actual paths or import images
    },
    {
        name: "Calangute",
        listings: 3,
        image: "/Images/Calgute.png",
    },
    {
        name: "Canacona",
        listings: 10,
        image: "/Images/canacona.png",
    },
    {
        name: "Margao",
        listings: 15,
        image: "/Images/Margao.png",
    },
    {
        name: "Mapusa",
        listings: 9,
        image: "/Images/Mapusa.png",
    },
    {
        name: "Vasco Da Gama",
        listings: 24,
        image: "/Images/Vasco-da-gama.png",
    },
];



const AreaProperty = () => {
    const Navigate = useNavigate()
    return (
        <section className="pt-36 bg-[#F6FAFF]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-semibold text-center mb-2">
                    Properties by Area
                </h2>
                <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto">
                    Highlight the best of your properties by using the List Category shortcode. You can<br />
                    list categories, types, cities, areas and states of your choice.
                </p>
                <div className="bg-white py-14 px-14 rounded-xl shadow-[5px_2px_15px_#D9EEFE]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8  md:gap-y-20">
                        {properties.map((item) => (
                            <div
                                key={item.name}
                                className="flex flex-row items-center  gap-8 cursor-pointer"
                                onClick={() => {Navigate("/city")}}
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="rounded-md w-28 h-24 sm:w-32 sm:h-28 object-cover shadow"
                                />
                                <div className="">
                                    <div className="text-lg font-semibold text-gray-900">{item.name}</div>
                                    <div className="text-gray-400 text-sm mt-1">{item.listings} Listing</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AreaProperty;