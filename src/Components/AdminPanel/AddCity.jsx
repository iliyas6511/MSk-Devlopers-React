import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import api from "../Commonurl";

const AddCity = () => {
  const [cityName, setCityName] = useState("");
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { city } = location.state || {};

  const [homePg, setHomePg] = useState(0);

  useEffect(() => {
    if (city) {
      setCityName(city.city_name);
      setHomePg(city.home_pg || 0);
    }
  }, [city]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null); // Clear previous messages

    try {
      if (city) {
        await api.put(`/cities/${city.city_id}`, {
          city_name: cityName,
          home_pg: homePg,
        });
      } else {
        await api.post("/cities", {
          city_name: cityName,
          home_pg: homePg,
        });
      }

      setCityName("");
      setTimeout(() => {
        setMessage(null); // Clear message after redirect
        navigate("/Data-cities");
      }, 1500);
    } catch (error) {
      // Extract specific error message from API response
      let errorMessage = `Failed to ${city ? "update" : "add"} city`;
      if (error.response?.data?.message) {
        errorMessage = error.response.data.message; // e.g., "The city name has already been taken."
      } else if (error.response?.data?.errors?.city_name) {
        // Handle Laravel validation errors (array of messages)
        errorMessage = error.response.data.errors.city_name.join(", ");
      } else if (error.response?.data?.error) {
        errorMessage = error.response.data.error;
      }
      setMessage({ type: "error", text: errorMessage });
      console.error("Error:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 px-4">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          {city ? "Edit City" : "Add City"}
        </h2>
        {message && (
          <div
            className={`mb-4 p-3 rounded-md text-sm ${
              message.type === "success"
                ? "bg-green-100 text-green-700 border border-green-300"
                : "bg-red-100 text-red-700 border border-red-300"
            }`}
          >
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              City Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={cityName}
              onChange={(e) => setCityName(e.target.value)}
              placeholder="Enter city name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              checked={homePg === 1}
              onChange={(e) => setHomePg(e.target.checked ? 1 : 0)}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
            <label className="ml-2 block text-sm text-gray-700">
              Display on Home Page
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            {city ? "Update City" : "Save City"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCity;