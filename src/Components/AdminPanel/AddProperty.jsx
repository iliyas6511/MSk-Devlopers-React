import React, { useState } from "react";
import { FaBell } from "react-icons/fa";

const FloorPlans = () => {
    const [files, setFiles] = useState({
        floorPlan: "",
        masterPlan: "",
        brochure: "",
    });

    const handleFileUpload = (e, type) => {
        const file = e.target.files[0];
        if (file) {
            setFiles((prev) => ({ ...prev, [type]: file.name }));
        }
    };

    return (
        <div className="bg-white shadow-md rounded-2xl p-6 mt-6">
            <h3 className="text-lg font-semibold mb-6">Upload Files</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Floor Plan */}
                <div className="space-y-3">
                    <label className="block text-[12px] text-lightgray font-medium">
                        Floor Plan
                    </label>
                    <label
                        htmlFor="floorPlanUpload"
                        className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition cursor-pointer"
                    >
                        Upload
                    </label>
                    <input
                        id="floorPlanUpload"
                        type="file"
                        accept="application/pdf"
                        className="hidden"
                        onChange={(e) => handleFileUpload(e, "floorPlan")}
                    />
                    {files.floorPlan && (
                        <p className="text-sm text-gray-600">Uploaded: {files.floorPlan}</p>
                    )}
                </div>

                {/* Master Plan */}
                <div className="space-y-3">
                    <label className="block text-[12px] text-lightgray font-medium">
                        Master Plan
                    </label>
                    <label
                        htmlFor="masterPlanUpload"
                        className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition cursor-pointer"
                    >
                        Upload
                    </label>
                    <input
                        id="masterPlanUpload"
                        type="file"
                        accept="application/pdf"
                        className="hidden"
                        onChange={(e) => handleFileUpload(e, "masterPlan")}
                    />
                    {files.masterPlan && (
                        <p className="text-sm text-gray-600">Uploaded: {files.masterPlan}</p>
                    )}
                </div>

                {/* Brochure */}
                <div className="space-y-3">
                    <label className="block text-[12px] text-lightgray font-medium">
                        Brochure
                    </label>
                    <label
                        htmlFor="brochureUpload"
                        className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition cursor-pointer"
                    >
                        Upload
                    </label>
                    <input
                        id="brochureUpload"
                        type="file"
                        accept="application/pdf"
                        className="hidden"
                        onChange={(e) => handleFileUpload(e, "brochure")}
                    />
                    {files.brochure && (
                        <p className="text-sm text-gray-600">Uploaded: {files.brochure}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

const SubmitProperty = () => {
    const inputClass =
        "w-full bg-gravishlight rounded-lg p-3 placeholder:text-sm focus:bg-white focus:ring-1 focus:ring-indigo-500 outline-none";

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-3">
                <h1 className="text-xl font-medium">
                    Welcome, <span className="font-semibold">Shiledar</span>
                </h1>
                <div className="relative">
                    <FaBell className="text-2xl text-gray-600 cursor-pointer" />
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                        0
                    </span>
                </div>
            </div>

            <h2 className="text-3xl font-medium mb-6">Submit Property</h2>

            <div className="bg-orange-500 text-white p-3 rounded-lg mb-6">
                All fields are Mandatory
            </div>

            <form action="">
                <div className="grid grid-cols-12 gap-6">
                    {/* Left Side */}
                    <div className="col-span-7 bg-white shadow-md rounded-2xl overflow-hidden">
                        <div className="bg-white p-6">
                            <h3 className="text-lg font-medium text-lightblack mb-6">
                                Property Description
                            </h3>

                            {/* Title */}
                            <div className="space-y-3 mb-4">
                                <label className="block text-[12px] text-lightgray font-medium">
                                    *Title (mandatory)
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter property title"
                                    className={inputClass}
                                />
                            </div>

                            {/* Description */}
                            <div className="space-y-3 mb-4">
                                <label className="block text-[12px] text-lightgray font-medium">
                                    Description
                                </label>
                                <textarea
                                    rows="6"
                                    placeholder="Enter property description..."
                                    className={inputClass}
                                ></textarea>
                            </div>
                        </div>

                        {/* Listing Details */}
                        <div className="bg-white p-6">
                            <h3 className="text-lg font-medium text-lightblack mb-4">
                                Listing Details
                            </h3>

                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    "Size in ft² (*only numbers)",
                                    "Rooms (*only numbers)",
                                    "Bedrooms (*only numbers)",
                                    "Bathrooms (*only numbers)",
                                    "Year Built (*numeric)",
                                ].map((label, idx) => (
                                    <div key={idx} className="space-y-3">
                                        <label className="block text-[12px] text-lightgray font-medium">
                                            {label}
                                        </label>
                                        <input type="number" className={inputClass} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Location */}
                        <div className="p-6">
                            <h3 className="text-lg font-medium text-lightblack mb-4">
                                Listing Location
                            </h3>

                            <div className="space-y-3 mb-4">
                                <label className="block text-[12px] text-lightgray font-medium">
                                    *Address
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter address"
                                    className={inputClass}
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {["County / State", "City", "Neighborhood", "Zip"].map(
                                    (label, idx) => (
                                        <div key={idx} className="space-y-3">
                                            <label className="block text-[12px] text-lightgray font-medium">
                                                {label}
                                            </label>
                                            <input
                                                type="text"
                                                placeholder={`Enter ${label.toLowerCase()}`}
                                                className={inputClass}
                                            />
                                        </div>
                                    )
                                )}
                            </div>

                            <div className="space-y-3 mt-4">
                                <label className="block text-[12px] text-lightgray font-medium">
                                    Country
                                </label>
                                <select className={inputClass}>
                                    <option>United States</option>
                                    <option>Canada</option>
                                    <option>United Kingdom</option>
                                    <option>India</option>
                                    <option>Australia</option>
                                </select>
                            </div>
                        </div>

                        {/* Categories */}
                        <div className="p-6">
                            <h3 className="text-lg font-medium text-lightblack mb-4">
                                Select Categories
                            </h3>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-3">
                                    <label className="block text-[12px] text-lightgray font-medium">
                                        Category
                                    </label>
                                    <select className={inputClass}>
                                        <option>None</option>
                                        <option>Residential</option>
                                        <option>Commercial</option>
                                        <option>Industrial</option>
                                        <option>Land</option>
                                    </select>
                                </div>
                                <div className="space-y-3">
                                    <label className="block text-[12px] text-lightgray font-medium">
                                        Listed In
                                    </label>
                                    <select className={inputClass}>
                                        <option>None</option>
                                        <option>For Sale</option>
                                        <option>For Rent</option>
                                        <option>Lease</option>
                                        <option>Auction</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="col-span-5">
                        <div className="bg-white shadow-md rounded-2xl p-6">
                            <h3 className="text-lg font-medium mb-4">Listing Media</h3>

                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center mb-4">
                                <p className="text-gray-500 mb-2">
                                    Drag and Drop Images or
                                </p>
                                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700">
                                    Select Media
                                </button>
                            </div>

                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>* At least 1 image is required.</li>
                                <li>You can upload max 5 images</li>
                                <li>** Double click on the image to set featured.</li>
                                <li>*** Change image order with Drag & Drop.</li>
                                <li>**** PDF files supported.</li>
                                <li>***** Images might take longer to process.</li>
                            </ul>
                        </div>

                        <FloorPlans />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SubmitProperty;
