import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import FloorPlans from "./FloorPlans";
import ListingMedia from "./ListingMedia";
import { FaEye } from "react-icons/fa";
import api,{ storageUrl } from "../Commonurl";

const AddProperty = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const editData = location.state?.property || null;

  const [formData, setFormData] = useState({
    prop_title: "",
    description: "",
    area: "",
    rooms: "",
    bedrooms: "",
    year_build: "",
    address: "",
    country_state: "",
    city_id: "",
    zip: "",
    country: "",
    status: "Available",
    category: "",
    listed_in: "",
    location_url:"",
    header_img:"",
    premium_status:0
  });
  const [cities, setCities] = useState([]);
  const [message, setMessage] = useState(null);
  const [newPropId, setNewPropId] = useState(null);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const res = await api.get("/cities");
        setCities(res.data);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };
    fetchCities();
  }, []);

  useEffect(() => {
    if (editData) {
      setFormData({
        prop_title: editData.prop_title || "",
        description: editData.description || "",
        area: editData.area || "",
        rooms: editData.rooms || "",
        bedrooms: editData.bedrooms || "",
        year_build: editData.year_build || "",
        address: editData.address || "",
        country_state: editData.country_state || "",
        city_id: editData.city_id || "",
        zip: editData.zip || "",
        country: editData.country || "",
        status: editData.status || "Available",
        category: editData.category || "",
        listed_in: editData.listed_in || "",
        location_url:editData.location_url || "",
        header_img:editData.header_img || "",
        premium_status:editData.premium_status ||0,
      });
    }
  }, [editData]);

  const handleChange = (e) => {
  const { name, value, files } = e.target;
    if (name === "header_img") {
      setFormData((prev) => ({ ...prev, header_img: files[0] })); // store File object
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e) => {
  const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        header_img: file, // store file object
        header_img_preview: URL.createObjectURL(file), // temporary preview
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null) data.append(key, value);
      });

      let response;
      if (editData) {
        response = await api.post(`/properties/${editData.prop_id}?_method=PUT`, 
          data,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
        setMessage({ type: "success", text: "Property updated successfully!" });
      } else {
        response = await api.post(
          "/properties", 
          data,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
        setNewPropId(response.data.data.prop_id);
        setMessage({ type: "success", text: "Property added successfully!" });
      }

      setTimeout(() => navigate("/Data-property"), 1500);
    } catch (error) {
      let errorMessage = "Something went wrong";
      if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      } else if (error.response?.data?.errors) {
        errorMessage = Object.values(error.response.data.errors).flat().join(", ");
      }
      setMessage({ type: "error", text: errorMessage });
      console.error("Error submitting form:", error);
    }
  };

  const handleUploadSuccess = (message) => {
    setMessage({ type: "success", text: message });
  };

  const handleUploadError = (errorMessage) => {
    setMessage({ type: "error", text: errorMessage });
  };

  const inputClass =
    "w-full  border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring focus:ring-blue-200 focus:border-blue-400 outline-none";

  return (
    <div className="max-w-7xl mx-auto mt-8 px-4">
      <div className="bg-orange-500 text-white p-3 rounded-lg mb-6">
        All fields are Mandatory
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {editData ? "Edit Property" : "Add Property"}
          </h2>



          {message && (
            <div
              className={`mb-4 p-3 rounded-md text-sm ${message.type === "success"
                ? "bg-green-100 text-green-700 border border-green-300"
                : "bg-red-100 text-red-700 border border-red-300"
                }`}
            >
              {message.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Title */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">Title<span className="text-red-500">*</span></label>
              <input
                type="text"
                name="prop_title"
                value={formData.prop_title}
                onChange={handleChange}
                className={inputClass}
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">Description<span className="text-red-500">*</span></label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className={`${inputClass} h-[150px]`}
                required
              />
            </div>

            {/* Area */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">Area<span className="text-red-500">*</span></label>
              <input
                type="number"
                name="area"
                value={formData.area}
                onChange={handleChange}
                className={inputClass}
                required
              />
            </div>

            {/* Rooms */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Commercial(value1, value2, value3)</label>
                <textarea
                  type="text"
                  name="rooms"
                  value={formData.rooms}
                  onChange={handleChange}
                  placeholder="Commercial,Flat:5,Row Banglow:5"
                  className={`${inputClass} h-[150px]`}
                  required
                />
              </div>

            
              {/* Bedrooms */}
              <div>
                <label className="block text-sm text-gray-600 mb-1">Residential(value1, value2, value3)</label>
                <textarea
                  type="text"
                  name="bedrooms"
                  value={formData.bedrooms}
                  onChange={handleChange}
                  placeholder="Residential,Flat:5,Row Banglow:5"
                  className={`${inputClass} h-[150px]`}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              
              {/* Year Built */}
              <div>
                <label className="block text-sm text-gray-600 mb-1">Year Built<span className="text-red-500">*</span></label>
                <input
                  type="number"
                  name="year_build"
                  value={formData.year_build}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">Address<span className="text-red-500">*</span></label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className={inputClass}
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Country State */}
              <div>
                <label className="block text-sm text-gray-600 mb-1">Country State<span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="country_state"
                  value={formData.country_state}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
              </div>

              {/* City */}
              <div>
                <label className="block text-sm text-gray-600 mb-1">City<span className="text-red-500">*</span></label>
                <select
                  name="city_id"
                  value={formData.city_id}
                  onChange={handleChange}
                  className={inputClass}
                  required
                >
                  <option value="">-- Select City --</option>
                  {cities.map((city) => (
                    <option key={city.city_id} value={city.city_id}>
                      {city.city_name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              
              {/* Zip */}
              <div>
                <label className="block text-sm text-gray-600 mb-1">Zip<span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            </div>
            {/* Country & Status */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Country<span className="text-red-500">*</span></label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className={inputClass}
                  required
                >
                  <option value="">Select Country<span className="text-red-500">*</span></option>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                  <option>India</option>
                  <option>Australia</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Status<span className="text-red-500">*</span></label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className={inputClass}
                  required
                >
                  <option value="Available">Available</option>
                  <option value="Archive">Archive</option>
                </select>
              </div>
            </div>

            {/* Category & Listed In */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Category<span className="text-red-500">*</span></label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">None</option>
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Industrial">Industrial</option>
                  <option value="Land">Land</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Listed In<span className="text-red-500">*</span></label>
                <select
                  name="listed_in"
                  value={formData.listed_in}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">None</option>
                  <option value="For Sale">For Sale</option>
                  <option value="Villas">Villas</option>
                  <option value="Apartments">Apartments</option>
                  <option value="Houses">Houses</option>
                  <option value="Retail">Retail</option>
                  <option value="For Rent">For Rent</option>
                  <option value="Lease">Lease</option>
                  <option value="Auction">Auction</option>
                </select>
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">Location URL<span className="text-red-500">*</span></label>
              <input
                type="text"
                name="location_url"
                accept="image/*"
                value={formData.location_url}
                onChange={handleChange}
                className={inputClass}
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Header img(size:1400X800)</label>
              <div className="flex items-center gap-3">
                <input
                  type="file"
                  name="header_img"
                  onChange={handleChange}
                  className={inputClass}
                />

                {/* Show preview if editing (from DB) */}
                {editData?.header_img && !formData.header_img_preview && (
                  <a
                    href={storageUrl(`header_imgs/${editData.header_img}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <FaEye className="w-5 h-5" />
                  </a>
                )}

                {/* Show preview if user just selected a new file */}
                {formData.header_img_preview && (
                  <a
                    href={formData.header_img_preview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800"
                  >
                    <FaEye className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Premium Status<span className="text-red-500">*</span></label>
                <select
                  name="premium_status"
                  value={formData.premium_status}
                  onChange={handleChange}
                  className={inputClass}
                  required
                >
                  <option value="0">Not Premium</option>
                  <option value="1">Premium</option>
                </select>
              </div>
            </div>
            {/* Submit */}
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition disabled:bg-gray-400"
            >
              {editData ? "Update Property" : "Save Property"}
            </button>
          </form>
        </div>
        <div>
          {/* Media Upload Sections */}
          <FloorPlans
            editData={editData}
            newPropId={newPropId}
            onUploadSuccess={handleUploadSuccess}
            onUploadError={handleUploadError}
          />
          <ListingMedia
            editData={editData}
            newPropId={newPropId}
            onUploadSuccess={handleUploadSuccess}
            onUploadError={handleUploadError}
          />
        </div>
      </div>
    </div>
  );
};

export default AddProperty;
