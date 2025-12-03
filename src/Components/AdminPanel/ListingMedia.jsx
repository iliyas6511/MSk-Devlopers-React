import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import api,{ storageUrl } from "../Commonurl";

const ListingMedia = ({ editData, newPropId, onUploadSuccess, onUploadError }) => {
  const [files, setFiles] = useState([]);
  const [uploadStatus, setUploadStatus] = useState({
    message: "",
    errors: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileData, setFileData] = useState([]);

  const propId = editData?.prop_id || newPropId;

  const onDrop = useCallback(
    (acceptedFiles) => {
      const currentFilesCount = files.length;
      const maxFiles = 5 - currentFilesCount;
      const newFiles = [];
      const rejectedFiles = [];

      acceptedFiles.forEach((file) => {
        const fileSize = file.size;
        const isVideo = file.type.startsWith("video/");
        const maxSize = isVideo ? 30 * 1024 * 1024 : 2 * 1024 * 1024;

        if (fileSize > maxSize) {
          rejectedFiles.push({
            file,
            error: `File ${file.name} is too large. ${isVideo ? "Videos" : "Images/PDFs"} must be under ${isVideo ? "30MB" : "2MB"}.`,
          });
        } else if (newFiles.length < maxFiles) {
          newFiles.push(file);
        } else {
          rejectedFiles.push({
            file,
            error: `Cannot add ${file.name}. Maximum 5 files allowed.`,
          });
        }
      });

      if (rejectedFiles.length > 0) {
        const errorMessages = rejectedFiles.map((r) => r.error).join(", ");
        setUploadStatus({
          message: errorMessages,
          errors: null,
        });
      } else {
        setUploadStatus({ message: "", errors: null });
      }

      setFiles((prev) => [...prev, ...newFiles]);
    },
    [files]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [".jpeg", ".jpg"],
      "image/png": [".png"],
      "application/pdf": [".pdf"],
      "video/mp4": [".mp4"],
      "video/quicktime": [".mov"],
      "video/x-msvideo": [".avi"],
    },
    maxFiles: 5,
    disabled: !propId,
  });

  const handleRemoveFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
    setUploadStatus({ message: "", errors: null });
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

    if (files.length === 0) {
      setUploadStatus({
        message: "Please select at least one file to upload.",
        errors: null,
      });
      return;
    }

    setIsSubmitting(true);
    const formData = new FormData();
    formData.append("prop_id", propId);
    files.forEach((file) => formData.append("file_name[]", file));

    try {
      const response = await api.post(
        `/propgallary/${propId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setUploadStatus({
        message: response.data.message,
        errors: null,
      });
      setFiles([]);
      const fileResponse = await api.get(
        `/propgallary/${propId}`
      );
      setFileData(fileResponse.data);
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

  useEffect(() => {
    if (propId) {
      const fetchFileData = async () => {
        try {
          const response = await api.get(
            `/propgallary/${propId}`
          );
          setFileData(response.data);
        } catch (error) {
          console.error("Error fetching file data:", error);
          setUploadStatus({
            message: "Failed to load existing media. Please try again.",
            errors: null,
          });
        }
      };
      fetchFileData();
    }
  }, [propId]);

  const openFile = (filename) => {
    if (filename) {
      const url = storageUrl(`/property_gallery/${filename}`);
      console.log("Opening URL:", url); // Debug log
      window.open(url, "_blank");
    }
  };

  const handleDeleteFile = async (propGallId) => {
    try {
      await api.delete(`/propgallary/${propGallId}`);
      setFileData((prev) => prev.filter((item) => item.prop_gall_id !== propGallId));
      setUploadStatus({
        message: "File deleted successfully.",
        errors: null,
      });
    } catch (error) {
      console.error("Error deleting file:", error);
      setUploadStatus({
        message: "Failed to delete file. Please try again.",
        errors: null,
      });
    }
  };

  return (
    <div className="bg-white shadow-md rounded-2xl p-6">
      <h3 className="text-lg font-medium text-lightblack mb-4">Listing Media</h3>

      <form onSubmit={handleSubmit}>
        <div
          {...getRootProps()}
          className={`border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center mb-4 ${
            isDragActive ? "bg-gray-100" : ""
          } ${!propId ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          <input {...getInputProps()} />
          <p className="text-gray-500 mb-2">
            {isDragActive
              ? "Drop the files here ..."
              : "Drag and Drop Images, PDFs, or Videos or"}
          </p>
          <button
            type="button"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 disabled:bg-gray-400"
            disabled={!propId}
          >
            Select Media
          </button>
        </div>

        <ul className="text-sm text-gray-600 space-y-1 mb-4">
          {files.map((file, index) => (
            <li key={index} className="flex justify-between items-center">
              <span>{file.name}</span>
              <button
                type="button"
                onClick={() => handleRemoveFile(index)}
                className="text-red-600 hover:text-red-800"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>

        <ul className="text-sm text-gray-600 space-y-1 mb-4">
          {fileData.map((item, index) => (
            <li key={index} className="flex justify-between items-center">
              <span>{item.file_name}</span>
              <div className="space-x-2">
                <button
                  type="button"
                  onClick={() => openFile(item.file_name)}
                  className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition cursor-pointer"
                >
                  Open
                </button>
                <button
                  type="button"
                  onClick={() => handleDeleteFile(item.prop_gall_id)}
                  className="text-red-600 hover:text-red-800"
                >
                  🗑️
                </button>
              </div>
            </li>
          ))}
        </ul>

        <ul className="text-sm text-gray-600 space-y-1 mb-4">
          <li>* At least 1 file is required.</li>
          <li>You can upload max 5 files (images, PDFs, or videos).</li>
          <li>image size (835X467).</li>
          <li>** Double click on the image to set featured (not implemented).</li>
          <li>*** Change file order with Drag & Drop (not implemented).</li>
          <li>**** Supported formats: JPG, PNG, PDF (max 2MB), MP4, MOV, AVI (max 30MB).</li>
          <li>***** Files might take longer to process.</li>
        </ul>

        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition disabled:bg-gray-400"
          disabled={isSubmitting || !propId || files.length === 0}
        >
          {isSubmitting ? "Uploading..." : "Upload Files"}
        </button>

        {uploadStatus.message && (
          <p
            className={`mt-4 text-sm ${
              uploadStatus.errors ? "text-red-600" : "text-green-600"
            }`}
          >
            {uploadStatus.message}
          </p>
        )}
        {uploadStatus.errors?.file_name && (
          <p className="mt-2 text-sm text-red-600">
            {uploadStatus.errors.file_name[0]}
          </p>
        )}
      </form>
    </div>
  );
};

export default ListingMedia;