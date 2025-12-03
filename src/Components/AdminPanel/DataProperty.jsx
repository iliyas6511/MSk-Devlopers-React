import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import api from "../Commonurl";



const DataProperty = () => {
  const [properties, setProperties] = useState([]);
  const [cities, setCities] = useState({});
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  // Fetch properties and cities
  const fetchData = async () => {
    try {
      const propRes = await api.get("/properties");
      console.log("Fetched properties:", propRes.data);
      setProperties(propRes.data);

      const cityRes = await api.get("/cities");
      const cityMap = cityRes.data.reduce((acc, city) => {
        acc[city.city_id] = city.city_name;
        return acc;
      }, {});
      setCities(cityMap);
      console.log("Fetched cities:", cityMap);
    } catch (error) {
      setMessage({
        type: "error",
        text: "Failed to fetch properties or cities",
      });
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this property?")) {
      try {
        await api.delete(`/properties/${id}`);
        setMessage({ type: "success", text: "Property deleted successfully!" });
        fetchData();
        setTimeout(() => setMessage(null), 1500);
      } catch (error) {
        let errorMessage = "Failed to delete property";
        if (error.response?.data?.message) {
          errorMessage = error.response.data.message;
        } else if (error.response?.data?.errors) {
          errorMessage = Object.values(error.response.data.errors).flat().join(", ");
        } else if (error.response?.data?.error) {
          errorMessage = error.response.data.error;
        }
        setMessage({ type: "error", text: errorMessage });
        console.error("Error deleting property:", error);
      }
    }
  };

  const handleEdit = (property) => {
    console.log("Editing property:", property);
    navigate("/Add-property", { state: { property } });
  };

  return (
    <div className="max-w-5xl mx-auto mt-8 px-4">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Property List</h2>
        <button
          onClick={() => navigate("/Add-property")}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Add
        </button>

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

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-3 border-b text-left text-sm font-medium text-gray-700">Sr.No</th>
                <th className="px-6 py-3 border-b text-left text-sm font-medium text-gray-700">Title</th>
                <th className="px-6 py-3 border-b text-left text-sm font-medium text-gray-700">City</th>
                <th className="px-6 py-3 border-b text-left text-sm font-medium text-gray-700">Address</th>
                <th className="px-6 py-3 border-b text-left text-sm font-medium text-gray-700">Status</th>
                <th className="px-6 py-3 border-b text-left text-sm font-medium text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody>
              {properties.length > 0 ? (
                properties.map((property, index) => (
                  <tr key={property.prop_id} className="hover:bg-gray-50 transition">
                    {/* Show row number */}
                    <td className="px-6 py-4 border-b text-center text-gray-600">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 border-b text-gray-600">{property.prop_title}</td>
                    <td className="px-6 py-4 border-b text-gray-600">{cities[property.city_id] || "Unknown"}</td>
                    <td className="px-6 py-4 border-b text-gray-600">{property.address}</td>
                    <td className="px-6 py-4 border-b text-gray-600">{property.status}</td>
                    <td className="px-6 py-4 border-b text-center">
                      <button
                        onClick={() => handleEdit(property)}
                        className="bg-yellow-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-yellow-600 transition duration-200"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(property.prop_id)}
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
                    colSpan="6"
                    className="px-6 py-4 text-center text-gray-500 border-b"
                  >
                    No properties found
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

export default DataProperty;