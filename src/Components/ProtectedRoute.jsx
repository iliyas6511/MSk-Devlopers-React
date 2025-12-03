import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("auth_token");

  if (!token || isTokenExpired() ) {
    // Not logged in → redirect to login

    localStorage.removeItem("auth_token");
    localStorage.removeItem("auth_token_expiry");
    
    return <Navigate to="/login" replace />;
  }

  // Logged in → render the page
  return children;
};

function isTokenExpired() {
  const expiry = localStorage.getItem("auth_token_expiry");
  if (!expiry) return true;

  const now = new Date();
  const expiryDate = new Date(expiry);

  return now > expiryDate;
}

export default ProtectedRoute;
