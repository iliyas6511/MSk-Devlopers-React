import React from 'react'

const HeroSection = () => {

    return (
        <>
            <div className='w-full'>
                <div className='h-[80vh] relative'>
                    <div className='absolute inset-0 bg-black opacity-20'></div>
                    <img
                        className='w-full h-full object-cover'
                        src="https://images.unsplash.com/photo-1727572338251-f64ee81fb156?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEyfHxsZWFkZXJzaGlwfGVufDB8fDB8fHww"
                        alt="Project Background"
                    />
                </div>
            </div>
        </>
    )
}

import { FaQuoteLeft } from "react-icons/fa";

const ChairmanMessage = () => {
    return (
        <div className="max-w-7xl container mx-auto px-4 py-20 border-b border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">

                {/* Left Side - Text */}
                <div>
                    <h2 className="text-xl md:text-2xl font-medium mb-4 tracking-wider text-lightblack uppercase">
                        ABOUT OUR FOUNDER
                    </h2>
                    <div className='text-sm text-gray-700 leading-7'>
                        <p className="  mb-4">
                            When you believe in the power of ambition, possibilities soar. A legacy and passion passed on by our legendary leader Mr. PNC Menon,
                            who etched a royal history by crafting the imposing interiors of Sultan Qaboos Grand Mosque and Al Bustan Palace in Muscat, Oman.
                            A relentless pursuit for quality and true-blue business ethics helped him create a brand
                            that is SOBHA – a name synonymous with excellence. By pioneering the concept of self-reliance, he scaled new heights of perfection.
                        </p>

                        <p className="mb-4">
                            With a constant drive to grow, he leaped forward to the international market in 2003 with SOBHA Realty, UAE. Recipient
                            of some of the renowned global awards, Mr. Menon’s name stands tall with ‘Golden Peacock Lifetime Achievement Award for
                            Business Leadership’ by the Institute of Directors in 2014 and the ‘Lifetime Achievement Award’ in 2013 at the NDTV
                            Property Awards. He was also awarded the prestigious ‘Pravasi Bharatiya Samman Puraskar’ by the then Honourable
                            President of India, Ms. Pratibha Patil, in 2009. He is a member of the Prime Minister’s Advisory Council of Overseas
                            Indians.
                        </p>
                    </div>
                    <p className="font-normal text-gray-700 mt-6">
                        MR. JOHN DOE | CHAIRMAN
                    </p>
                </div>

                {/* Right Side - Image */}
                <div className="flex justify-center">
                    <img
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhaXJtYW58ZW58MHx8MHx8fDA%3D"
                        alt="Chairman"
                        className="object-cover"
                    />
                </div>
            </div>
        </div>
    );
};



const leaders = [
    {
        name: "John Smith",
        role: "CHAIRMAN",
        img: "https://images.unsplash.com/photo-1562788869-4ed32648eb72?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVhbSUyMG1lbWJlcnxlbnwwfHwwfHx8MA%3D%3D", // Replace with actual image URL
    },
    {
        name: "Michael Johnson",
        role: "MANAGING DIRECTOR",
        img: "https://images.unsplash.com/photo-1562788869-4ed32648eb72?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVhbSUyMG1lbWJlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        name: "David Williams",
        role: "DEPUTY MANAGING DIRECTOR",
        img: "https://images.unsplash.com/photo-1562788869-4ed32648eb72?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVhbSUyMG1lbWJlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        name: "Robert Brown",
        role: "INDEPENDENT DIRECTOR",
        img: "https://images.unsplash.com/photo-1562788869-4ed32648eb72?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVhbSUyMG1lbWJlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
];

const Leadership = () => {
    return (
        <section className="py-28 px-4 md:px-8">
            <div className='max-w-7xl mx-auto '>
                {/* Heading */}
                <div className="text-center mb-18">
                    <h2 className="text-3xl font-medium tracking-wider">OUR LEADERSHIP</h2>

                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {leaders.map((leader, index) => (
                        <div key={index} className="text-center">
                            <div className='h-[400px]'>
                                <img
                                    src={leader.img}
                                    alt={leader.name}
                                    className="w-full h-full object-cover shadow"
                                />
                            </div>
                            <h3 className="mt-4 text-xl text-lightblack font-medium">{leader.name}</h3>
                            <p className="text-lightgray text-sm">{leader.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};




const ChairmanMsg = () => {
    return (
        <>
            <HeroSection />
            <ChairmanMessage />
            <Leadership />

        </>
    )
}

export default ChairmanMsg
