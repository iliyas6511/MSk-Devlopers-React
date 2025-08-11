import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const images = [
    // Main image (left)
    "https://images.unsplash.com/photo-1523192193543-6e7296d960e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D",

    // Right side images
    "https://images.unsplash.com/photo-1612320648993-61c1cd604b71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1529408686214-b48b8532f72c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8fDB8fHww",
];

const GoaFullyImages = () => {
    return (
        <div className="w-full flex flex-col md:flex-row h-auto md:h-[90vh] gap-[1px] mb-20">
            {/* Left Side with Overlay */}
            <div className="relative w-full md:w-1/2 h-[70vh] md:h-full">
                <img
                    src={images[0]}
                    alt="Main"
                    className="w-full h-full object-cover"
                />

                {/* Text Overlay */}
                <div className="absolute bottom-0 right-13 md:right-18  bg-white p-6 rounded-[4px_4px_0px_0px]  h-[50%] w-[80%] md:max-w-[50%]">
                    <h2 className="text-[28px] font-semibold text-lightblack">Gorgeous Home in Goa</h2>
                    <div className="flex gap-4 my-4 font-medium text-lg md:text-xl">
                        <p className="text-gray-500">5 BD</p>
                        <p className="text-gray-500">6 BA</p>
                        <p className=" text-gray-500">190 ft²</p>
                    </div>
                    <p className="hidden md:block text-sm text-gray-500 mb-4">
                        This property is mostly wooded and sits high on a hilltop overlooking the Mohawk River Valley. Located right in the heart of Upsta...
                    </p>
                    <a href="#" className="text-sm text-black font-medium mt-2 inline-flex gap-[1px] items-center">Discover more <IoIosArrowForward /></a>
                </div>
            </div>

            {/* Right Side Grid (Only for md and above) */}
            <div className="hidden md:grid md:w-1/2 grid-cols-2 grid-rows-2 gap-[1px]">
                {images.slice(1).map((img, idx) => (
                    <div key={idx} className="w-full h-full">
                        <img
                            src={img}
                            alt={`Right ${idx}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GoaFullyImages;
