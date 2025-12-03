import React, { useState, useEffect } from 'react';
import ProjectDescript from './ProjectDescript';
import GallerySlider from './GallerySlider';
import LocationMap from './LocationMap';
import axios from 'axios';
import api from "./Commonurl";

const ProjectDetails = ({ id }) => {
  const [propertyData, setPropertyData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPropertyDetails = async () => {
    try {
      const response = await api.get(`property_details/${id}`);
      // console.log('Response:', response.data); // Log the response data
      setPropertyData(response.data); // Use response.data directly
      setLoading(false);
    } catch (err) {
      // console.error('Error:', err.message); // Log the error
      setError(err.message || 'Failed to fetch property details');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPropertyDetails();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <ProjectDescript
        property={propertyData?.property}
        propertyDocs={propertyData?.property_docs[0]}
      />
      <GallerySlider gallery={propertyData?.property_gallary} />
      <LocationMap property={propertyData?.property} />
    </>
  );
};

export default ProjectDetails;