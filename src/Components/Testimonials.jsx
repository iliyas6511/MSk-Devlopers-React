import React, { useRef, useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

const testimonials = [
    {
        name: "Balina Dias",
        location: "Green Hills",
        image: "/Images/Balina Dias.png",
        message:
            "The flats are spacious, airy, and boast an excellent view. I was impressed by the builder's cooperation and support throughout the construction process, from start to finish!",
    },
    {
        name: "Sandeep Tukaram Vaingankar",
        location: "Haazraryan Residency at Marcel",
        image: "/Images/Sandeep Tukaram Vaingankar.png",
        message:
            "Builder took on the challenge of building on a narrow plot and delivered an outstanding result! The flats were snapped up even before completion, a testament to his exceptional work. I'm thrilled with the package and services provided – a truly satisfying experience!",
    },
    {
        name: "Gagan Aggarwal",
        location: "Buena Vista",
        image: "/Images/Gagan Agarwal.png",
        message:
            "We were impressed by Builder's youthful energy and dedication. He turned our dream apartment into a reality! The view from our home is breathtaking – a perfect blend of beauty and comfort!",
    },
    {
        name: "Audumber Shinde",
        location: "MSK Avenue",
        image: "/Images/Audumber Shinde.png",
        message:
            "I appreciate the professionalism and attention to detail. From start to finish, the process was smooth, transparent, and satisfying. Highly recommended!",
    },
];

const Testimonials = () => {
    const [current, setCurrent] = useState(0);
    const sliderRef = useRef(null);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    // Scroll to current index
    useEffect(() => {
        if (sliderRef.current) {
            const width = sliderRef.current.offsetWidth;
            const visibleCards = window.innerWidth >= 768 ? 2 : 1;
            sliderRef.current.scrollTo({
                left: (width / visibleCards) * current,
                behavior: "smooth",
            });
        }
    }, [current]);

    const handleNext = () => {
        const visibleCards = window.innerWidth >= 768 ? 2 : 1;
        setCurrent((prev) =>
            prev + visibleCards >= testimonials.length ? 0 : prev + 1
        );
    };

    const handlePrev = () => {
        setCurrent((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    // Touch Handling for Mobile
    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };
    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX;
    };
    const handleTouchEnd = () => {
        const distance = touchStartX.current - touchEndX.current;
        if (distance > 50) handleNext();
        if (distance < -50) handlePrev();
    };

    return (
        <div className="bg-lightblue py-16 md:py-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
            <div className="max-w-5xl mx-auto relative">
                {/* Heading */}
                <div className="text-center space-y-4 mb-12">
                    <h2 className="text-4xl font-medium text-lightblack">Testimonials</h2>
                    <p className="mt-2 text-gray-500 max-w-2xl mx-auto">
                        Publish the best of your client testimonials and let the world know
                        what a great agent or real estate agency you are. Testimonials build trust.
                    </p>
                </div>

                <div className="relative w-full py-5">

                    {/* Slider Container */}
                    <div
                        ref={sliderRef}
                        className="flex transition-transform ease-in-out duration-700 overflow-x-hidden scroll-smooth touch-pan-x"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        {testimonials.map((t, index) => (
                            <div
                                key={index}
                                className="min-w-full md:min-w-[50%] px-4 flex justify-center"
                            >
                                <div className="bg-white p-10 rounded-md shadow-[5px_2px_15px_#D9EEFE] max-w-md w-full text-center">
                                    <div className="flex flex-col items-center mb-4">
                                        <img
                                            src={t.image}
                                            alt={t.name}
                                            className="w-16 h-16 rounded-full object-cover mb-3"
                                        />
                                        <h4 className="font-semibold text-lg text-black">{t.name}</h4>
                                        <p className="text-sm text-gray-500">{t.location}</p>
                                    </div>
                                    <p className="text-gray-500 text-sm mb-4">“{t.message}”</p>
                                    <div className="flex justify-center gap-1 text-[#ffc662]">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Left Arrow */}
                    <button
                        onClick={handlePrev}
                        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10
          bg-white p-4 rounded-full shadow-lg hover:bg-blue-50 cursor-pointer border border-gray-200"
                        aria-label="Previous"
                    >
                        <FaArrowLeftLong className="text-darkblue text-lg" />
                    </button>

                    {/* Right Arrow */}
                    <button
                        onClick={handleNext}
                        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10
          bg-white p-4 rounded-full shadow-lg hover:bg-blue-50 cursor-pointer border border-gray-200"
                        aria-label="Next"
                    >
                        <FaArrowRightLong className="text-darkblue text-lg" />
                    </button>

                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-2 mt-8">
                    {testimonials.map((_, index) => (
                        <span
                            key={index}
                            className={`h-3 w-3 rounded-full transition-all duration-300 cursor-pointer ${current === index
                                    ? "bg-darkblue w-6"
                                    : "bg-gray-400 hover:bg-gray-500"
                                }`}
                            onClick={() => setCurrent(index)}
                        ></span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
