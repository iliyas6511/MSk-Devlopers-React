import React from "react";
import { FaUserCircle, FaUser, FaHeart, FaSearch, FaFileInvoice, FaEnvelope, FaSignOutAlt } from "react-icons/fa";
import { MdDashboard, MdOutlineAddBox } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { RiCriminalLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
    return (
        <>
            <div className="fixed top-[96px] left-0">
                <div className="w-64 h-screen bg-white shadow-md flex flex-col items-center py-6">
                    {/* Profile Section */}
                    <div className="flex flex-col items-center mb-8">
                        <FaUserCircle className="text-gray-400 text-6xl mb-2" />
                        <p className="text-gray-600 text-sm">Welcome back,</p>
                        <p className="font-semibold text-gray-800">shiledariliy...!</p>
                    </div>

                    {/* Menu Section */}
                    <nav className="w-full">
                        <ul className="space-y-2 px-4">
                            <li className=" p-2 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
                                <Link to="/adminpanel" className="flex items-center gap-3">
                                    <MdDashboard /> <span>Dashboard</span>
                                </Link>
                            </li>
                            <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                                <FaUser /> My Profile
                            </li>

                            <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                                <Link to="/Add-property" className="flex items-center gap-3">
                                    <MdOutlineAddBox /> <span>Add New Property</span> 
                                </Link>
                            </li>

                            <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                                <FaSignOutAlt /> Logout
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default AdminSidebar;
