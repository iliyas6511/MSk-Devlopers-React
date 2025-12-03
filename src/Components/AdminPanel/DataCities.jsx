import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import api from "../Commonurl";

const DataCities = () => {
  const [cities, setCities] = useState([]);
  const navigate = useNavigate();

  const fetchCities = async () => {
    const res = await api.get("/cities");
    setCities(res.data);
  };

  useEffect(() => {
    fetchCities();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this city?")) {
      await api.delete(`/cities/${id}`);
      fetchCities();
    }
  };

  const handleEdit = (city) => {
    navigate("/Add-city", { state: { city } });
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 px-4">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">City List</h2>
        <button
          onClick={() => navigate("/Add-city")}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Add
        </button>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-3 border-b text-left text-sm font-medium text-gray-700">Sr.NO</th>
                <th className="px-6 py-3 border-b text-left text-sm font-medium text-gray-700">City Name</th>
                <th className="px-6 py-3 border-b text-left text-sm font-medium text-gray-700">Dispaly on Home</th>
                <th className="px-6 py-3 border-b text-center text-sm font-medium text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody>
            {cities.length > 0 ? (
                cities.map((city, index) => (
                <tr key={city.city_id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 border-b text-center text-gray-600">
                    {index + 1}
                    </td>
                    <td className="px-6 py-4 border-b text-gray-600">{city.city_name}</td>
                    <td className="px-6 py-4 border-b text-gray-600">
                      {city.home_pg == 1 ? "Yes" : "No"}
                    </td>
                    <td className="px-6 py-4 border-b text-center">
                      <button
                        onClick={() => handleEdit(city)}
                        className="bg-yellow-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-yellow-600 transition duration-200"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(city.city_id)}
                        className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-200"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="3"
                    className="px-6 py-4 text-center text-gray-500 border-b"
                  >
                    No cities found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataCities;