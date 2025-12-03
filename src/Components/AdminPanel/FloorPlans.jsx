import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaEye } from "react-icons/fa";
import api,{ storageUrl } from "../Commonurl";

const FloorPlans = ({ editData, newPropId, onUploadSuccess, onUploadError }) => {
  const [files, setFiles] = useState({
    floorPlan: null,
    masterPlan: null,
    brochure: null,
  });
  const [uploadStatus, setUploadStatus] = useState({
    message: "",
    errors: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileData, setFileData] = useState({
    floor_plan: null,
    master_plan: null,
    brochure: null,
  });
  const propId = editData?.prop_id || newPropId;

  // Fetch file data when propId changes
  useEffect(() => {
    if (propId) {
      const fetchFileData = async () => {
        try {
          const response = await api.get(`/propdocs/${propId}`);
          console.log("Fetched file data:", response.data); // Debug log
          if (Array.isArray(response.data) && response.data.length > 0) {
            const data = response.data[0]; // Take the first item since it's an array
            setFileData({
              floor_plan: data.floor_plan,
              master_plan: data.master_plan,
              brochure: data.brochure,
            });
          }
        } catch (error) {
          console.error("Error fetching file data:", error); // Debug error
          setUploadStatus({
            message: "Failed to load file data. Please try again.",
            errors: null,
          });
        }
      };
      fetchFileData();
    }
  }, [propId]);

  const handleFileUpload = (e, type) => {
    const file = e.target.files[0];
    if (file && file.size <= 2 * 1024 * 1024) {
      setFiles((prev) => ({ ...prev, [type]: file }));
    } else if (file) {
      setUploadStatus({
        message: `File ${file.name} is too large. PDFs must be under 2MB.`,
        errors: null,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!propId) {
      setUploadStatus({
        message: "Please save the property first to upload files.",
        errors: null,
      });
      return;
    }
    setIsSubmitting(true);
    const formData = new FormData();
    formData.append("prop_id", propId);
    if (files.floorPlan) formData.append("floor_plan", files.floorPlan);
    if (files.masterPlan) formData.append("master_plan", files.masterPlan);
    if (files.brochure) formData.append("brochure", files.brochure);

    try {
      const response = await api.post(
        `/propdocs/${propId}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setUploadStatus({ message: response.data.message, errors: null });
      setFiles({ floorPlan: null, masterPlan: null, brochure: null });
      // Refresh file data after upload
      const fileResponse = await api.get(`/propdocs/${propId}`);
      if (Array.isArray(fileResponse.data) && fileResponse.data.length > 0) {
        const data = fileResponse.data[0];
        setFileData({
          floor_plan: data.floor_plan,
          master_plan: data.master_plan,
          brochure: data.brochure,
        });
      }
      onUploadSuccess(response.data.message);
    } catch (error) {
      let errorMessage = "An error occurred while uploading files";
      let errors = null;
      if (error.response?.status === 422) {
        errorMessage = "Validation failed";
        errors = error.response.data.errors;
      }
      setUploadStatus({ message: errorMessage, errors });
      onUploadError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const openPdf = (filename) => {
    if (filename) {
      const url = storageUrl(`/property_docs/${filename}`);
      window.open(url, "_blank");
    }
  };

  const handleDeleteFile = async (field) => {
    try {
      await api.delete(`/propdocs/${propId}/${field}`);
      setFileData((prev) => ({
        ...prev,
        [field]: null,
      }));
      setUploadStatus({
        message: `File for ${field.replace('_', ' ')} deleted successfully.`,
        errors: null,
      });
    } catch (error) {
      console.error("Error deleting file:", error);
      setUploadStatus({
        message: `Failed to delete ${field.replace('_', ' ')} file. Please try again.`,
        errors: null,
      });
    }
  };

  return (
    <div className="bg-white shadow-md rounded-2xl p-6 mt-6">
      <h3 className="text-lg font-medium text-lightblack mb-6">Upload Files</h3>
      <form onSubmit={handleSubmit}>
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
              disabled={!propId}
            />
            {files.floorPlan && (
              <p className="text-sm text-gray-600">
                Uploaded: {files.floorPlan.name}
              </p>
            )}
            {fileData.floor_plan && (
              <div className="space-x-2">
                <button
                  type="button"
                  className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition cursor-pointer mt-2"
                  onClick={() => openPdf(fileData.floor_plan)}
                >
                  Floor <FaEye className="mr-2" /> 
                </button>
                <button
                  type="button"
                  onClick={() => handleDeleteFile("floor_plan")}
                  className="text-red-600 hover:text-red-800 mt-2"
                >
                  🗑️
                </button>
              </div>
            )}
            {uploadStatus.errors?.floor_plan && (
              <p className="text-sm text-red-600">
                {uploadStatus.errors.floor_plan[0]}
              </p>
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
              disabled={!propId}
            />
            {files.masterPlan && (
              <p className="text-sm text-gray-600">
                Uploaded: {files.masterPlan.name}
              </p>
            )}
            {fileData.master_plan && (
              <div className="space-x-2">
                <button
                  type="button"
                  className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition cursor-pointer mt-2"
                  onClick={() => openPdf(fileData.master_plan)}
                >
                  Master <FaEye className="mr-2" /> 
                </button>
                <button
                  type="button"
                  onClick={() => handleDeleteFile("master_plan")}
                  className="text-red-600 hover:text-red-800 mt-2"
                >
                  🗑️
                </button>
              </div>
            )}
            {uploadStatus.errors?.master_plan && (
              <p className="text-sm text-red-600">
                {uploadStatus.errors.master_plan[0]}
              </p>
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
              disabled={!propId}
            />
            {files.brochure && (
              <p className="text-sm text-gray-600">
                Uploaded: {files.brochure.name}
              </p>
            )}
            {fileData.brochure && (
              <div className="space-x-2">
                <button
                  type="button"
                  className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition cursor-pointer mt-2"
                  onClick={() => openPdf(fileData.brochure)}
                >
                  Brochure <FaEye className="mr-2" /> 
                </button>
                <button
                  type="button"
                  onClick={() => handleDeleteFile("brochure")}
                  className="text-red-600 hover:text-red-800 mt-2"
                >
                  🗑️
                </button>
              </div>
            )}
            {uploadStatus.errors?.brochure && (
              <p className="text-sm text-red-600">
                {uploadStatus.errors.brochure[0]}
              </p>
            )}
          </div>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition disabled:bg-gray-400"
            disabled={isSubmitting || !propId}
          >
            {isSubmitting ? "Uploading..." : "Upload Files"}
          </button>
        </div>
        {uploadStatus.message && (
          <p
            className={`mt-4 text-sm ${
              uploadStatus.errors ? "text-red-600" : "text-green-600"
            }`}
          >
            {uploadStatus.message}
          </p>
        )}
      </form>
    </div>
  );
};

export default FloorPlans;