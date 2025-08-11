import React from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
    {
        name: "Hilry Clinton",
        location: "Green Hills",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        message:
            "I reviewed and purchased a number of different WordPress Themes before settling on Wp Residence.",
    },
    {
        name: "Makbul Khomeini",
        location: "MSK Galaxy",
        image: "https://randomuser.me/api/portraits/men/31.jpg",
        message:
            "I reviewed and purchased a number of different WordPress Themes before settling on Wp Residence.",
    },
    {
        name: "Eknath Shinde",
        location: "Buena Vista",
        image: "https://randomuser.me/api/portraits/men/10.jpg",
        message:
            "I reviewed and purchased a number of different WordPress Themes before settling on Wp Residence.",
    },
];

const Testimonials = () => {
    return (
        <div className="bg-lightblue py-16 md:py-24 px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">
                <div className="text-center space-y-4 mb-12">
                    <h2 className="text-4xl font-medium text-lightblack">Testimonials</h2>
                    <p className="mt-2 text-gray-500 max-w-2xl mx-auto">
                        Publish the best of your client testimonials and let the world know
                        what a great agent or real estate agency you are. Testimonials build trust.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t, index) => (
                        <div
                            key={index}
                        className="bg-white p-12 rounded-md shadow-[5px_2px_15px_#D9EEFE]"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <img
                                    src={t.image}
                                    alt={t.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <h4 className="font-semibold text-lg text-black">{t.name}</h4>
                                    <p className="text-sm text-gray-500">{t.location}</p>
                                </div>
                            </div>
                            <p className="text-gray-500 text-sm mb-4">{t.message}</p>
                            <div className="flex gap-1 text-[#ffc662]">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
