import React, { useState } from 'react'

import { FaBuilding, FaHandshake, FaAward, FaTools } from "react-icons/fa";





const HeroSection = () => {

  return (
    <>
      <div className='w-full'>
        <div className='h-[80vh] relative'>
          <div className='absolute inset-0 bg-black opacity-50'></div>
          <img
            className='w-full h-full object-cover'
            src="/Images/about-us-banner.jpg"
            alt="Project Background"
          />
        </div>
      </div>
    </>
  )
}


const AboutUs = () => {

  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 ">
          <div className='grid grid-cols-12 gap-5'>
            <div className='col-span-12 md:col-span-7'>
              <div className="my-4">
                {/* Title */}
                <h2 className="text-3xl font-medium text-lightblack text-left">About MSK</h2>


              </div>

              {/* Richer descriptive paragraphs placed above the grid (keeps structure you provided) */}
              <div className="space-y-4 text-left max-w-3xl mx-auto">
                {/* Intro / Above-normal about-us paragraph (rich, premium, same color scheme) */}
                <p className="text-left text-[14px] text-darkgray  leading-relaxed">
                  Established in 2004 and headquartered in Panaji, <span className="font-medium text-lightblack">MSK Builders Goa</span> is
                  a leading real estate developer and contracting firm dedicated to delivering state-of-the-art residential
                  and commercial properties across North Goa. We build with care, precision, and long-term value in mind —
                  blending superior workmanship with practical design to create homes and projects that truly uplift lifestyles.
                </p>

                <p className="text-[14px] text-darkgray leading-relaxed">
                  MSK Builders focuses on high-quality developments that enhance the present and prepare communities for the future.
                  Our projects prioritize durability, thoughtful detailing, and excellent value so that buyers and investors
                  receive both a superior product and a confident ownership experience.
                </p>
                <p className="text-[14px] text-darkgray leading-relaxed">
                  In a competitive market, we stand out for consistent delivery, timely completion, and a wide service offering —
                  from civil contracting and roofing to professional waterproofing solutions. Our team of experienced professionals
                  ensures projects complete on schedule without compromising standards.
                </p>
                {/* <p className="text-[14px] text-darkgray leading-relaxed">
                  Located at <span className="font-medium text-lightblack">8th Floor, 817 Patto Plaza, Panaji, Goa — 403001</span>,
                  MSK Builders serves clients locally and across Goa, committed to transparency, customer satisfaction, and building
                  long-term relationships.
                </p> */}
              </div>
            </div>


            <div className='col-span-12 md:col-span-5 h-full'>
              <div className='relative h-[450px]'>
                <img
                  src="/Images/about-us-right.png"
                  alt="MSK Builders Goa"
                  className="w-full h-full object-fill"
                />
                {/* 20% Black Overlay */}
                <div className="absolute inset-0 bg-black opacity-40"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </>
  )
}

const Statements = () => {


  const items = [
    {
      icon: <FaBuilding className="text-blue-600 text-3xl mb-3" />,
      title: "Our Mission",
      text: "MSK Builders aims to create state-of-the-art properties that positively impact North Goa’s real estate sector by delivering high-quality spaces that enhance the present and shape the future."
    },
    {
      icon: <FaHandshake className="text-blue-600 text-3xl mb-3" />,
      title: "Our Vision",
      text: "To become a trusted name in North Goa by consistently offering homes and projects that bring quality, transparency, and customer satisfaction to the forefront of real estate development."
    },
    {
      icon: <FaAward className="text-blue-600 text-3xl mb-3" />,
      title: "Our Values",
      text: "Driven by integrity, excellence, and dedication, we focus on delivering durable, innovative, and value-driven construction while earning the faith and trust of our customers."
    },
    {
      icon: <FaTools className="text-blue-600 text-3xl mb-3" />,
      title: "Our Expertise",
      text: "Established in 2004, MSK Builders Goa offers comprehensive real estate and contracting services including civil construction, waterproofing, and roofing — managed by a team of skilled professionals."
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4 space-y-18">
        <div className='space-y-4'>
          {/* Title */}
          <h2 className="text-3xl font-medium text-lightblack text-center">More About Us</h2>
          <p className="text-center text-[14px] text-darkgray max-w-2xl mx-auto">
            Backed by years of dedication and expertise, MSK Builders Goa transforms visions into lasting landmarks, shaping North Goa’s real estate with unmatched quality and value.
          </p>
        </div>



        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-18">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-start text-left">

              <h3 className="text-[16px] text-lightblack font-medium mb-2">{item.title}</h3>
              <p className="text-darkgray text-[14px]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { FaFacebookF, FaLinkedinIn, FaPinterestP, FaInstagram, FaYoutube, FaVimeoV, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';

const MyTeams = () => {
  const members = [

    {
      name: "Makbul Kalsur",
      role: "Chairman",
      listings: "4 listings",
      img: "/Images/Makbul Kalsur Final.png",
      desc: "With a genuine passion for helping clients find their dream homes, Samuel Diesel brings a...",
      social: [FaXTwitter, FaLinkedinIn, FaInstagram],
    },

  ];

  return (
    <section className="py-10 md:py-20 bg-gravishlight">
      <div className="max-w-6xl mx-auto px-4">

        {/* Title */}
        <div className='space-y-4 mb-12'>
          <h2 className="text-3xl font-medium text-center">Meet Our Team</h2>
          <p className="text-center text-darkgray  max-w-2xl mx-auto">
            If you want the best care possible for your real estate needs, our certified professionals are here to help
          </p>
        </div>



        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className='this is for centered-grid hidden md:block'>

          </div>
          {members.map((member, index) => (
            <div key={index} className="bg-white rounded-lg p-2 shadow-[5px_2px_15px_#D9EEFE] overflow-hidden transition group">
              {/* Image */}
              <div className="relative">
                <div className='w-full h-60  rounded-[6px] overflow-hidden'>
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-all ease-in-out duration-1000" />
                </div>
                <div className='absolute inset-0 bg-black opacity-5 group-hover:opacity-0'></div>
                {/* {member.listings && (
                  <span className="absolute bottom-3 left-3 bg-green-300 text-white text-xs font-semibold px-2 py-1 rounded">
                    {member.listings}
                  </span>
                )} */}
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-[16px] font-medium text-lightblack group-hover:text-darkblue">{member.name}</h3>
                <p className="text-lightgray text-sm mb-3">{member.role}</p>
                <p className="text-lightgray text-sm mb-4">{member.desc}</p>

                <div className='flex justify-between items-center'>
                  {/* Social Icons */}
                  <div className="flex flex-wrap items-center gap-3">
                    {member.social.map((Icon, i) => (
                      <a key={i} href="#" className="text-gray-500 hover:text-blue-600 text-sm">
                        <Icon className='text-[12px]' />
                      </a>
                    ))}
                  </div>

                  {/* Contact Icons */}
                  <div className="flex items-center gap-2 text-gray-500">
                    <a href="#"><FaPhoneAlt className="text-[12px] hover:text-blue-600" /></a>
                    <a href="#"><FaEnvelope className="text-[12px] hover:text-blue-600" /></a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


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

// const Testimonials = () => {
//   return (
//     <div className="bg-white py-16 md:py-24 px-4 md:px-8 lg:px-16">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center space-y-4 mb-12">
//           <h2 className="text-2xl font-medium text-lightblack">Testimonials</h2>
//           <p className="mt-2 text-[15px] text-darkgray max-w-2xl mx-auto">
//             Publish the best of your client testimonials and let the world know
//             what a great agent or real estate agency you are. Testimonials build trust.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {testimonials.map((t, index) => (
//             <div
//               key={index}
//               className="bg-white p-12 rounded-md shadow-[5px_2px_15px_#D9EEFE]"
//             >
//               <div className="flex items-center gap-4 mb-4">
//                 <img
//                   src={t.image}
//                   alt={t.name}
//                   className="w-12 h-12 rounded-full object-cover"
//                 />
//                 <div>
//                   <h4 className="font-semibold text-[16px] text-lightblack">{t.name}</h4>
//                   <p className="text-sm text-lightgray">{t.location}</p>
//                 </div>
//               </div>
//               <p className="text-lightgray text-sm mb-4">{t.message}</p>
//               <div className="flex gap-1 text-[#ffc662]">
//                 {[...Array(5)].map((_, i) => (
//                   <FaStar key={i} />
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };



import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Testimonials from '../Components/Testimonials';

const faqs = [

  // New MSK Building Systems questions
  {
    question: "How can I locate MSK Building Systems in Panjim, Goa?",
    answer:
      "MSK Building Systems in Panjim, Goa is located Patto Panaji, Goa - 403001."
  },
  {
    question: "Where is the company located?",
    answer:
      "The company is located in Panjim, Goa, close to Patto Panaji, Goa - 403001."
  },
  {
    question: "Do I need to make an advance payment?",
    answer:
      "Yes, most of the builders ask for an advance payment. We recommend you talk to them for more information."
  },
  {
    question: "Does MSK Building Systems inspect the site?",
    answer:
      "Yes, MSK Building Systems will inspect the site to prepare a design and consider all the other important factors before making the final decision."
  },
  {
    question: "Do builders & developers need a licence to perform their work?",
    answer:
      "Yes. The prerequisites for obtaining a construction licence vary by state. To be qualified for employment, you must pass your state licensure exam and register with the state board."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gravishlight py-26 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl text-lightblack md:text-2xl font-semibold text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-[15px] text-darkgray max-w-2xl mx-auto mb-16">
          You can use this guide to familiarize yourself with rules, laws and
          other important information relating to your property.
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-sm hover:shadow-md p-5 cursor-pointer transition-all duration-300"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between">
                <h3
                  className={`font-medium text-base transition-colors duration-300 ${openIndex === index ? "text-blue-600" : "text-black"
                    }`}
                >
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <FaChevronUp className="text-blue-600 transition-transform duration-300 self-start" />
                ) : (
                  <FaChevronDown className="text-gray-500 transition-transform duration-300 self-start" />
                )}
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-40 mt-3" : "max-h-0"
                  }`}
              >
                <p className="text-gray-600 text-sm">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



const Stats = () => {


  return (
    <>
    </>
  );
};




const ContactForm = () => {
  return (
    <>
      <div className='bg-gravishlight relative'>
        <section className="text-center">
          <div className='space-y-3  mb-12'>
            {/* Heading */}
            <h2 className="text-3xl text-lightblack font-medium">Get In Touch With Us</h2>
            <p className="text-darkgray text-sm max-w-xl mx-auto">
              Despite well over $1 billion in combined sales, however, the team strives
              to maintain an air of humility and discretion
            </p>
          </div>
        </section>
        <div className="max-w-5xl mx-auto p-6 ">
          <div className="grid md:grid-cols-2 bg-white shadow-lg overflow-hidden">
            {/* Left Image */}
            <div className="relative h-64 md:h-[600px]">
              <div className='absolute inset-0 bg-black opacity-10'></div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Q1_Tower%2C_Gold_Coast%2C_Queensland.jpg/640px-Q1_Tower%2C_Gold_Coast%2C_Queensland.jpg"
                alt="Building"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Form */}
            <div className="px-14 flex flex-col justify-center">
              <div className='space-y-4 mb-9'>
                <h2 className="text-2xl font-medium">
                  Get in touch to plan your next transaction
                </h2>
                <p className="text-darkgray text-sm">
                  Our experts and developers would love to contribute their expertise
                  and insights and help you today.
                </p>
              </div>
              <form className="space-y-4">
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] text-lightgray mb-1">
                      Last name*
                    </label>
                    <input
                      type="text"
                      placeholder="Last name"
                      className="w-full bg-lightblue-2  rounded-sm placeholder:text-sm px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-200"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-lightgray mb-1">
                      First name*
                    </label>
                    <input
                      type="text"
                      placeholder="First name"
                      className="w-full bg-lightblue-2  rounded-sm placeholder:text-sm px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-200"
                    />
                  </div>
                </div>

                {/* Email & Mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] text-lightgray mb-1">
                      Email*
                    </label>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full bg-lightblue-2  rounded-sm placeholder:text-sm px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-200"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-lightgray mb-1">
                      Mobile
                    </label>
                    <input
                      type="text"
                      placeholder="Mobile"
                      className="w-full bg-lightblue-2  rounded-sm placeholder:text-sm px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-200"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[11px] text-lightgray mb-1">Message</label>
                  <textarea
                    placeholder="Message"
                    rows="4"
                    className="w-full bg-lightblue-2  rounded-sm placeholder:text-sm px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-200"
                  ></textarea>
                </div>

                {/* Button */}
                <button
                  type="submit"
                  onClick={
                    (e) => {
                      e.preventDefault()
                    }
                  }
                  className="w-full cursor-pointer bg-darkblue hover:bg-blue-600 text-sm text-white py-2 rounded-sm font-medium transition-colors"
                >
                  Send Email
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};











const AboutUS = () => {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <Statements />
      <MyTeams />
      <Testimonials />
      <FAQ />
      <Stats />
      <ContactForm />
    </>
  )
}

export default AboutUS
