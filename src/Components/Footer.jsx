import React from 'react';
import { FaWhatsapp, FaFacebookF, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLaptop, FaBuilding } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-extradarkblue text-white px-6 md:px-20 py-10 pt-20 text-sm">
            <div className='max-w-7xl mx-auto'>
                <div className="grid grid-cols-12 gap-10">

                    {/* Contact Us */}
                    <div className='col-span-12 md:col-span-5'>
                        <h2 className="text-base font-semibold mb-4">Contact Us</h2>
                        <div className='text-gray-300 text-sm flex flex-col gap-2'>
                            <div className="flex items-start gap-3 mb-2">
                                <FaBuilding className="mt-1 text-[16px]" />
                                <p>
                                    8th Floor 817, Gera’s Imperium Grand Opp. Ginger Hotel, Pao Panaji-Goa, 403001
                                </p>
                            </div>
                            <div className="flex items-center gap-3 mb-2">
                                <FaPhoneAlt className="text-[16px]" />
                                <span>9028 236 776</span>
                            </div>
                            <div className="flex items-center gap-3 mb-2">
                                <FaEnvelope />
                                <span>mskbuildingsystem@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-3 mb-4">
                                <FaLaptop />
                                <span>mskbuildingsystem@gmail.com</span>
                            </div>
                        </div>
                        <div className="flex gap-4 mt-4">
                            <button className="bg-[#002547] p-3 rounded-md">
                                <FaWhatsapp className='text-[14px]'/>
                            </button>
                            <button className="bg-[#002547] p-3 rounded-md">
                                <FaFacebookF  className='text-[14px]'/>
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
                            <li>Apartments (17)</li>
                            <li>Houses (5)</li>
                            <li>Industrial (9)</li>
                            <li>Offices (9)</li>
                            <li>Villas (9)</li>
                        </ul>
                    </div>

                    {/* Latest Properties */}
                    <div className='col-span-12 md:col-span-4'>
                        <h2 className="text-base font-semibold mb-4">Latest Properties</h2>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <img
                                    src="https://main.wpresidence.net/wp-content/uploads/2017/11/3-105x70.webp"
                                    alt="Aldona Royal"
                                    className="rounded-md w-[80px] h-[60px] object-cover"
                                />
                                <div className='space-y-1'>
                                    <p className="font-medium text-sm">Aldona Royal</p>
                                    <p className="text-[12px] text-gray-300">Vasco da gama</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <img
                                    src="https://main.wpresidence.net/wp-content/uploads/2017/09/house1-scaled-1-105x70.webp"
                                    alt="Ferns Residency"
                                    className="rounded-md w-[80px] h-[60px] object-cover"
                                />
                                <div className='space-y-1'>
                                    <p className="font-medium text-sm">Ferns Residency</p>
                                    <p className="text-[12px] text-gray-300">Mapusa</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <img
                                    src="https://main.wpresidence.net/wp-content/uploads/2017/01/9-105x70.webp"
                                    alt="Buena Vista"
                                    className="rounded-md w-[80px] h-[60px] object-cover"
                                />
                                <div className='space-y-1'>
                                    <p className="font-medium text-sm">Buena Vista</p>
                                    <p className="text-[12px] text-gray-300">Madgaon</p>
                                </div>
                                
                            </div>
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
