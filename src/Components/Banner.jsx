import React from 'react'
import Searchbar from './Searchbar'



const Banner = () => {
    return (
        <>
            {/* Banner */}
            <div className="relative h-screen overflow-hidden">

                {/* Background Video */}
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    src="/Videos/sample.mp4"// replace with your video URL
                    autoPlay
                    loop
                    muted
                    playsInline
                ></video>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-50"></div>

                

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                    <h1 className="text-5xl font-semibold mb-4">Building Dreams, Creating Value</h1>
                    <p className="text-lg mb-4 max-w-3xl">
                        MSK Builders delivers exceptional, thoughtfully designed homes in North Goa, blending quality, trust, and value to turn your dream of home.
                    </p>
                    {/* <div className="space-x-4">
                        <button className="bg-white text-black font-bold py-2 px-4 rounded">Residential</button>
                        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">Commercial</button>
                    </div> */}
                </div>

                {/* <div className='absolute  w-full z-[10] bottom-[10px] '>
                    <Searchbar />
                </div> */}

            </div>

        </>
    )
}

export default Banner
