import React, { useState } from "react";
import { BsArrowsFullscreen } from "react-icons/bs";
import { IoBedOutline } from "react-icons/io5";
import { MdOutlineShare } from "react-icons/md";
import { PiBathtub } from "react-icons/pi";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

// ------- Properties Data ------- //
const premiumProperties = [
    {
        id: 1,
        title: "Zuelkha",
        descript: "Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood Floors, ...",
        location: "Panaji, Goa",
        status: ["Featured", "Sales", "Active"],
        image: "https://main.wpresidence.net/wp-content/uploads/2014/06/house_nice-525x328.webp",
        beds: 8,
        baths: 8,
        sqft: 400,
        agent: "Shury Wakanda",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
        id: 2,
        title: "Marcel",
        descript: "Mineral Reserves: 2008 core drilling and testing (on just 60 of the 1,100 acres) proved 30 ...",
        location: "Margao, Goa",
        status: ["Featured", "Sales", "Active"],
        image: "https://main.wpresidence.net/wp-content/uploads/2014/05/villa-1900-525x328.webp",
        beds: 4,
        baths: 2,
        sqft: 200,
        agent: "Peter Kamble",
        avatar: "https://randomuser.me/api/portraits/men/23.jpg",
    },
    {
        id: 3,
        title: "Heritage View Paradise",
        descript: "This property is mostly wooded and sits high on a hilltop overlooking the Mohawk River Val ...",
        location: "Canacona, Goa",
        status: ["Featured", "Sales", "Active"],
        image: "https://main.wpresidence.net/wp-content/uploads/2014/05/building-teracce-525x328.webp",
        beds: 5,
        baths: 6,
        sqft: 195,
        agent: "Shin Chan",
        avatar: "https://randomuser.me/api/portraits/men/39.jpg",
    },
    // Add as many objects you want for effective "continuous" effect
    {
        id: 4,
        title: "River Front Bliss",
        descript: "A luxury property with stunning river-side views and modern amenities.",
        location: "Calangute, Goa",
        status: ["Featured", "Sales", "Active"],
        image: "https://main.wpresidence.net/wp-content/uploads/2017/09/house1-scaled-1-525x328.webp",
        beds: 6,
        baths: 5,
        sqft: 320,
        agent: "Ram Mohan",
        avatar: "https://randomuser.me/api/portraits/men/64.jpg",
    }
];

// ------- Main Slider Component ------- //
const PremiumProperty = () => {
    // For carousel logic
    const [startIdx, setStartIdx] = useState(0);

    // Responsive: how many cards on screen
    // Get from window, or just use Tailwind classes + fixed breakpoints
    const getCardsToShow = () => {
        if (typeof window === "undefined") return 3;
        if (window.innerWidth >= 1024) return 3;   // large (≥1024px)
        if (window.innerWidth >= 640) return 2;    // medium (≥640px)
        return 1;                                  // small
    };

    const [cardsToShow, setCardsToShow] = useState(getCardsToShow());

    // Listen for window resize for reactivity
    React.useEffect(() => {
        const handleResize = () => setCardsToShow(getCardsToShow());
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Wrap-around indexes for continuous sliding
    const total = premiumProperties.length;
    const visible = [...Array(cardsToShow)].map((_, i) => premiumProperties[(startIdx + i) % total]);

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
                <div className="relative flex items-center ">


                    {/* Top-right arrows for small screens */}
                    <div className="flex absolute right-2 top-[-70px] z-20 sm:hidden gap-4">
                        <button
                            onClick={handlePrev}
                            className="bg-lightblue  p-3 rounded-md  hover:bg-blue-50"
                            aria-label="Previous"
                        >
                            <FaArrowLeft className="text-blue-400 text-base" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="bg-lightblue  p-3 rounded-md hover:bg-blue-50"
                            aria-label="Next"
                        >
                            <FaArrowRight className="text-blue-400 text-base" />
                        </button>
                    </div>

                    {/* Left Arrow */}
                    <button
                        onClick={handlePrev}
                        className="hidden sm:flex absolute left-[-38px] sm:left-[-80px] top-1/2 -translate-y-1/2 z-10
          bg-lightblue  p-4 rounded-md  hover:bg-blue-50"
                        aria-label="Previous"
                    >
                        <FaArrowLeftLong className="text-darkblue text-lg" />
                    </button>
                    {/* Slider Cards */}
                    <div className={`w-full`}>
                        <div
                            className={`
              grid gap-6 
              ${cardsToShow === 1 ? "grid-cols-1" : cardsToShow === 2 ? "grid-cols-2" : "grid-cols-3"}
              transition-all duration-300
            `}
                        >
                            {visible.map((prop, idx) => (
                                <div
                                    key={prop.id}
                                    className="bg-white rounded-md transition overflow-hidden flex flex-col shadow-[5px_2px_15px_#D9EEFE]"
                                >
                                    <div className="relative group">
                                        <img
                                            src={prop.image}
                                            alt={prop.title}
                                            className="w-full h-[220px] object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black opacity-20"></div>
                                        <div className="absolute top-2 left-2 flex gap-2 flex-wrap">
                                            {prop.status.map((status, i) => (
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
                                        <div className="flex text-gray-500 text-sm gap-4 mb-3">
                                            <span className="flex items-center gap-1.5">
                                                <IoBedOutline className="inline-block text-[22px]" />
                                                {prop.beds}
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <PiBathtub className="inline-block text-[22px]" />
                                                {prop.baths}
                                            </span>
                                            <span className="flex items-center gap-2">
                                                <BsArrowsFullscreen className="inline-block text-[14px]" />
                                                {prop.sqft} ft²
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
                                            <div className="border border-gray-200 rounded-[3px] px-2 py-2 text-lightgray hover:text-darkblue">
                                                <MdOutlineShare className="text-[14px]" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Right Arrow */}
                    <button
                        onClick={handleNext}
                        className="hidden sm:flex absolute right-[-38px] sm:right-[-80px] top-1/2 -translate-y-1/2 z-10
          bg-lightblue  p-4 rounded-md  hover:bg-blue-50"
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
              ${startIdx === i ? 'bg-blue-500' : 'bg-blue-200'}
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
