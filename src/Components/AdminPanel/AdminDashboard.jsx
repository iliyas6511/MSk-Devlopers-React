import React, { useState, useEffect } from "react";
import { BiBell } from "react-icons/bi";
import api from "../Commonurl"; // Assuming this is correctly set up for API calls

const AdminDashboard = () => {
  // State to store API data, loading, and error
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from the API when the component mounts
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        console.log('Fetching /dashboard...'); // Debug log
        const response = await api.get('/dashboard');
        console.log('Response:', response.data); // Log success
        setDashboardData(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Full Error:', err); // Log full error object
        console.error('Response Status:', err.response?.status);
        console.error('Response Data:', err.response?.data);
        setError(`Failed to fetch: ${err.response?.status || err.message}`);
        setLoading(false);
      }
    };
    fetchDashboardData();
  }, []);

  // Render loading state
  if (loading) {
    return <div className="p-6">Loading...</div>;
  }

  // Render error state
  if (error) {
    return <div className="p-6 text-red-500">{error}</div>;
  }

  // Destructure the API response for easier access
  const {
    total_cityCount,
    total_cities_home,
    total_properties,
    totalongoing,
    totaldeliverd,
    properties_for_sale,
    properties_villas,
    properties_apartments,
    properties_houses,
    propertyForRent,
    propertyLease,
    premium_status_0,
    premium_status_1,
    premiumproperty,
    nonpremiumproperty,
    city_wise_property_count,
    city_names,
  } = dashboardData;

  return (
    <>
      <div className="">
        <div className="p-6 bg-gray-50 min-h-screen">
          {/* Package Info */}
          <div className="mb-6">
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="p-4 rounded-lg bg-white shadow text-center">
                <p className="text-xl font-bold">{total_properties || 0}</p>
                <p className="text-gray-500 text-sm">Total Properties</p>
              </div>
              <div className="p-4 rounded-lg bg-white shadow text-center">
                <p className="text-xl font-bold">{premium_status_0 || 0}</p>
                <p className="text-gray-500 text-sm">Non Premium</p>
              </div>
              <div className="p-4 rounded-lg bg-white shadow text-center">
                <p className="text-xl font-bold">{premium_status_1 || 0}</p>
                <p className="text-gray-500 text-sm">Premium</p>
              </div>
              <div className="p-4 rounded-lg bg-white shadow text-center">
                <p className="text-xl font-bold">{total_cityCount || 0}</p>
                <p className="text-gray-500 text-sm">Cities</p>
              </div>
              <div className="p-4 rounded-lg bg-white shadow text-center">
                <p className="text-xl font-bold">{total_cities_home || 0}</p>
                <p className="text-gray-500 text-sm">Cities on Home Page</p>
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
              <h3 className="text-gray-600">Welcome,</h3>
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
              <p className="text-gray-600">Total Properties: {total_properties || 0}</p>
              <p className="text-gray-600">Total Cities: {total_cityCount || 0}</p>
              <p className="text-gray-600">Total Premium: {premium_status_1 || 0}</p>
              <p className="text-gray-600">Total Non Premium: {premium_status_0 || 0}</p>
              <p className="text-gray-600">Total  Ongoing: {totalongoing || 0}</p>
              <p className="text-gray-600">Total  Deliverd: {totaldeliverd || 0}</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Listed In</h3>
              <p className="text-gray-600">Villas: {properties_villas || 0}</p>
              <p className="text-gray-600">Apartments: {properties_apartments || 0}</p>
              <p className="text-gray-600">Houses: {properties_houses || 0}</p>
              <p className="text-gray-600">For Rent: {propertyForRent || 0}</p>
              <p className="text-gray-600">For Lease: {propertyLease || 0}</p>
              <p className="text-gray-600">For Sale: {properties_for_sale || 0}</p>
            </div>
          </div>

          {/* Premium Properties */}
          <div className="mt-6 p-6 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Premium Properties</h3>
            {premiumproperty && premiumproperty.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {premiumproperty.map((property, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-gray-50 shadow text-center"
                  >
                    <p className="text-xl font-bold">{property.prop_title}</p>
                    <p className="text-gray-500 text-sm">Premium Property</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600">No premium properties available.</p>
            )}
          </div>

          {/* Non-Premium Properties */}
          <div className="mt-6 p-6 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Non-Premium Properties</h3>
            {nonpremiumproperty && nonpremiumproperty.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {nonpremiumproperty.map((property, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-gray-50 shadow text-center"
                  >
                    <p className="text-xl font-bold">{property.prop_title}</p>
                    <p className="text-gray-500 text-sm">Non-Premium Property</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600">No non-premium properties available.</p>
            )}
          </div>

          {/* City-Wise Property Count */}
          <div className="mt-6 p-6 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">City-Wise Property Distribution</h3>
            {city_wise_property_count && city_wise_property_count.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {city_wise_property_count.map((cityData) => (
                  <div
                    key={cityData.city_id}
                    className="p-4 rounded-lg bg-gray-50 shadow text-center"
                  >
                    <p className="text-xl font-bold">{cityData.property_count}</p>
                    <p className="text-gray-500 text-sm">{cityData.city.city_name}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600">No city-wise property data available.</p>
            )}
          </div>

          {/* Featured Cities */}
          <div className="mt-6 p-6 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Featured Cities on Home Page</h3>
            {city_names && city_names.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {city_names
                  .filter((city) => city.home_pg === 1)
                  .map((city) => (
                    <div
                      key={city.city_id}
                      className="p-4 rounded-lg bg-gray-50 shadow text-center"
                    >
                      <p className="text-xl font-bold">{city.city_name}</p>
                      <p className="text-gray-500 text-sm">Featured on Home Page</p>
                    </div>
                  ))}
              </div>
            ) : (
              <p className="text-gray-600">No featured cities available.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;