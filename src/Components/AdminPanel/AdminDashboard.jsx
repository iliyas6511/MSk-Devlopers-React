import React from "react";
import { BiBell } from "react-icons/bi";

const AdminDashboard = () => {
    return (
        <>
            <div className="">
                <div className="p-6 bg-gray-50 min-h-screen">
                    {/* Package Info */}
                    <div className="mb-6">
                        <h2 className="text-lg font-semibold">
                            Your Current Package:{" "}
                            <span className="text-blue-600 font-bold cursor-pointer">
                                Free Membership
                            </span>
                        </h2>

                        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                            <div className="p-4 rounded-lg bg-white shadow text-center">
                                <p className="text-xl font-bold">2</p>
                                <p className="text-gray-500 text-sm">Listings Included</p>
                            </div>
                            <div className="p-4 rounded-lg bg-white shadow text-center">
                                <p className="text-xl font-bold">2</p>
                                <p className="text-gray-500 text-sm">Listings Remaining</p>
                            </div>
                            <div className="p-4 rounded-lg bg-white shadow text-center">
                                <p className="text-xl font-bold">1</p>
                                <p className="text-gray-500 text-sm">Featured Included</p>
                            </div>
                            <div className="p-4 rounded-lg bg-white shadow text-center">
                                <p className="text-xl font-bold">1</p>
                                <p className="text-gray-500 text-sm">Featured Remaining</p>
                            </div>
                            <div className="p-4 rounded-lg bg-white shadow text-center">
                                <p className="text-xl font-bold">5</p>
                                <p className="text-gray-500 text-sm">Images / listing</p>
                            </div>
                            <div className="p-4 rounded-lg bg-white shadow text-center">
                                <p className="text-xl font-bold">-</p>
                                <p className="text-gray-500 text-sm">Ends On</p>
                            </div>
                        </div>
                    </div>

                    {/* Welcome Section */}
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h3 className="text-gray-600">Welcome, Shiledar</h3>
                            <h1 className="text-3xl font-bold">Account Overview</h1>
                        </div>
                        <div className="relative">
                            <BiBell className="text-gray-700 w-8 h-8" />
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                                0
                            </span>
                        </div>
                    </div>

                    {/* Account Summary */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="p-6 bg-white rounded-lg shadow">
                            <h3 className="text-lg font-semibold mb-2">Account Summary</h3>
                            <p className="text-gray-600">Total Properties: 0</p>
                            <p className="text-gray-600">Published Properties: 0</p>
                            <p className="text-gray-600">Favorite Properties: 0</p>
                            <p className="text-gray-600">Saved Searches: 0</p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow">
                            <h3 className="text-lg font-semibold mb-2">
                                Account History (last 7 days)
                            </h3>
                            <p className="text-gray-600">No recent activity.</p>
                        </div>
                    </div>

                    {/* Listings Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white rounded-lg shadow">
                            <h3 className="text-lg font-semibold mb-2">Your most visited Listings</h3>
                            <p className="text-gray-600">You don't have any listings or enough data!</p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow">
                            <h3 className="text-lg font-semibold mb-2">Your most Popular Listings</h3>
                            <p className="text-gray-600">You don't have any listings or enough data!</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminDashboard;
