import React, { useState } from "react";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useJsApiLoader,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 40.7282, // New Jersey coordinates
  lng: -74.0776,
};

const LocationMap = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY", // replace this
  });

  const [showInfo, setShowInfo] = useState(true);

  return (
    <div className="bg-white shadow-md rounded-md p-4 w-full py-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-center items-center mb-8">
          <h2 className="text-gray-800 text-center text-3xl font-medium">Location</h2>
        </div>

        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={13}
          >
            <Marker
              position={center}
              onClick={() => setShowInfo(true)}
            />

            {showInfo && (
              <InfoWindow
                position={center}
                onCloseClick={() => setShowInfo(false)}
              >
                <div className="w-[250px]">
                  <div className="flex">
                    <img
                      src="https://images.unsplash.com/photo-1523192193543-6e7296d960e4?w=600&auto=format&fit=crop&q=60"
                      alt="Studio"
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="ml-3 flex-1">
                      <h3 className="font-semibold text-sm">Studio Apartment</h3>
                      <p className="text-blue-600 text-sm mt-1">$ 200 / month</p>
                      <div className="text-xs text-gray-600 mt-1 space-x-2">
                        <span>1 BD</span>
                        <span>2 BA</span>
                        <span>100 ft²</span>
                      </div>
                    </div>
                  </div>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        ) : (
          <p>Loading map...</p>
        )}
      </div>
    </div>
  );
};

export default LocationMap;
