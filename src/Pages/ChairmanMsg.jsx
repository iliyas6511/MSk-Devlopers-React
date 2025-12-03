import React from 'react'


const HeroSection = () => {

return (
<>
    <div className='w-full'>
        <div className='h-[80vh] relative'>
            <div className='absolute inset-0 bg-black opacity-20'></div>
            <img className='w-full h-full object-cover'
                src="https://images.unsplash.com/photo-1727572338251-f64ee81fb156?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEyfHxsZWFkZXJzaGlwfGVufDB8fDB8fHww"
                alt="Project Background" />
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
                    At MSK Builders, our journey began with a simple yet powerful vision — to build homes and spaces
                    that stand for trust, quality, and long-lasting value. When I founded this company in 2004, my goal
                    was not just to construct buildings, but to create environments where families could thrive,
                    investors could grow, and communities could flourish.

                </p>

                <p className="mb-4">

                    Over the years, MSK Builders has become a name associated with integrity and excellence in North
                    Goa’s real estate landscape. Every project we undertake reflects our commitment to craftsmanship,
                    attention to detail, and a deep understanding of what our customers truly need. We believe that a
                    home is more than a structure; it is a foundation for dreams, memories, and lifelong comfort.

                    Our philosophy is guided by three core principles:
                    Quality, because every family deserves a space built with care;
                    Transparency, because trust is the foundation of every relationship;
                    and Customer Satisfaction, because our success is measured by the happiness of those who choose us.

                    With a dedicated team and a strong work ethic, we continue to expand our presence across North Goa,
                    developing residential and commercial projects that bring together innovation, practicality, and
                    timeless design. As we grow, our mission remains unchanged — to deliver properties that not only
                    enhance today but also inspire a better tomorrow.

                    I extend my heartfelt gratitude to our clients, partners, and well-wishers who have been a part of
                    this journey. Your trust motivates us to strive harder and deliver even greater value.

                    Welcome to MSK Builders — where dreams take shape, and trust builds the future.

                </p>
            </div>
            <p className="font-normal text-gray-700 mt-6">
                MR. Makbul Kalsur | Founder & Chairman, MSK Builders.
            </p>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center">
            <img src="/Images/Makbul Kalsur Final.png" alt="Chairman" className="object-cover" />
        </div>
    </div>
</div>
);
};



const leaders = [
{
name: "John Smith",
role: "CHAIRMAN",
img:
"https://images.unsplash.com/photo-1562788869-4ed32648eb72?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVhbSUyMG1lbWJlcnxlbnwwfHwwfHx8MA%3D%3D",
// Replace with actual image URL
},
{
name: "Michael Johnson",
role: "MANAGING DIRECTOR",
img:
"https://images.unsplash.com/photo-1562788869-4ed32648eb72?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVhbSUyMG1lbWJlcnxlbnwwfHwwfHx8MA%3D%3D",
},
{
name: "David Williams",
role: "DEPUTY MANAGING DIRECTOR",
img:
"https://images.unsplash.com/photo-1562788869-4ed32648eb72?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVhbSUyMG1lbWJlcnxlbnwwfHwwfHx8MA%3D%3D",
},
{
name: "Robert Brown",
role: "INDEPENDENT DIRECTOR",
img:
"https://images.unsplash.com/photo-1562788869-4ed32648eb72?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVhbSUyMG1lbWJlcnxlbnwwfHwwfHx8MA%3D%3D",
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
                    <img src={leader.img} alt={leader.name} className="w-full h-full object-cover shadow" />
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
    {/*
    <Leadership /> */}

</>
)
}

export default ChairmanMsg
