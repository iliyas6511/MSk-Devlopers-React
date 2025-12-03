import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaFacebookF, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLaptop, FaBuilding } from 'react-icons/fa';
import api,{ storageUrl } from "./Commonurl";
import { Link } from 'react-router-dom';

const Footer = () => {
  const [categoryCounts, setCategoryCounts] = useState({
    "For Sale": 0,
    Houses: 0,
    Villas: 0,
    Apartments: 0,
    Retail: 0,
  });
  const [latestProperties, setLatestProperties] = useState([]);

  // Fetch category counts and latest properties dynamically
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get('/property_count_acc_type');
        // Map category counts
        const counts = {
          "For Sale": res.data["For Sale"]?.count || 0,
          Houses: res.data.Houses?.count || 0,
          Villas: res.data.Villas?.count || 0,
          Apartments: res.data.Apartments?.count || 0,
          Retail: res.data.Retail?.count || 0,
        };
        setCategoryCounts(counts);

        // Flatten all properties and sort by created_at descending
        const allProperties = Object.values(res.data)
          .flatMap(category => category.properties || [])
          .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
          .slice(0, 3) // Take the first 3 properties
          .map((property, index) => ({
            id: property.prop_id || index + 1,
            title: property.prop_title || "Property Title",
            location: property.city?.city_name || "Unknown Location",
            image: property.header_img
              ? storageUrl(`/header_imgs/${property.header_img}`)
              : "https://main.wpresidence.net/wp-content/uploads/2014/06/house_nice-525x328.webp",
          }));
        setLatestProperties(allProperties);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <footer className="bg-extradarkblue text-white px-6 md:px-20 py-10 pt-20 text-sm">
      <div className='max-w-7xl mx-auto'>
        <div className="grid grid-cols-12 gap-7 md:gap-10">
          {/* Contact Us */}
          <div className='col-span-12 md:col-span-5'>
            <h2 className="text-base font-semibold mb-4">Contact Us</h2>
            <div className='text-gray-300 text-sm flex flex-col gap-2'>
              <div className="flex items-start gap-3 mb-2">
                <FaBuilding className="mt-1 text-[16px]" />
                <p className=''>
                  Office No: 705, 7th Floor, Dempo Trade Center, patto, Patto Centre, Panaji, Goa - 403001
                </p>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <FaPhoneAlt className="text-[16px]" />
                <span>+91 90960 58400</span>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <FaEnvelope />
                <span>mskbuildingsystems@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <FaLaptop />
                <span>www.mskbuildersgoa.com</span>
              </div>
            </div>
            <div className="flex gap-4 mt-4">
              <button className="bg-[#002547] p-3 rounded-md">
                <FaWhatsapp className='text-[14px]' />
              </button>
              <button className="bg-[#002547] p-3 rounded-md">
                <FaFacebookF className='text-[14px]' />
              </button>
              <button className="bg-[#002547] p-3 rounded-md">
                <FaTwitter className='text-[14px]' />
              </button>
              <button className="bg-[#002547] p-3 rounded-md">
                <FaInstagram className='text-[14px]' />
              </button>
            </div>
          </div>

          {/* Lists by Category */}
          <div className='col-span-12 md:col-span-3'>
            <h2 className="text-base font-semibold mb-4">Lists by Category</h2>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li><Link to={"/filter"}>Apartments ({categoryCounts.Apartments}) </Link></li>
              <li><Link to={"/filter"}>Houses ({categoryCounts.Houses})</Link></li>
              <li><Link to={"/filter"}>Villas ({categoryCounts.Villas})</Link></li>
              <li><Link to={"/filter"}>For Sale ({categoryCounts["For Sale"]})</Link></li>
              <li><Link to={"/filter"}>Retail ({categoryCounts.Retail})</Link></li>
            </ul>
          </div>

          {/* Latest Properties */}
          <div className='col-span-12 md:col-span-4'>
            <h2 className="text-base font-semibold mb-4">Latest Properties</h2>
            <div className="space-y-4">
              {latestProperties.map((prop) => (
                <div key={prop.id} className="flex items-center gap-4">
                  
                    <img
                      src={prop.image}
                      alt={prop.title}
                      className="rounded-md w-[80px] h-[60px] object-cover"
                    />
                    <Link to={`/projects/${prop.id}`}>
                    <div className='space-y-1'>
                      <p className="font-medium text-sm">{prop.title}</p>
                      <p className="text-[12px] text-gray-300">{prop.location}</p>
                    </div>
                    </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-4 flex flex-col md:flex-row justify-between text-xs text-gray-400">
        <p>All Rights reserved by MSK Developers</p>
        <p>Developed By Noble tech</p>
      </div>
    </footer>
  );
};

export default Footer;