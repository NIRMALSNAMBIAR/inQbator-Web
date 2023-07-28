// AuthContext.js

import React, { createContext, useEffect, useState } from "react";
import { authenticateUser, refreshAccessToken } from "./auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);

  useEffect(() => {
    // Check if we have refresh token stored in localStorage and set it to the state
    const storedRefreshToken = localStorage.getItem("refreshToken");
    if (storedRefreshToken) {
      setRefreshToken(storedRefreshToken);
    }
  }, []);

  // Function to set the access token and refresh token in the state and localStorage
  const setAuthData = (accessToken, refreshToken) => {
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
    // Store the refresh token in localStorage for persistent login
    localStorage.setItem("refreshToken", refreshToken);
  };

  // Function to handle refreshing the access token using the refresh token
  const refreshAuthData = async () => {
    try {
      const newAccessToken = await refreshAccessToken(refreshToken);
      setAccessToken(newAccessToken);
    } catch (error) {
      console.error("Error refreshing access token:", error);
      logout();
    }
  };

  // Function to clear the access token and refresh token from the state and localStorage
  const logout = () => {
    setAccessToken(null);
    setRefreshToken(null);
    localStorage.removeItem("refreshToken");
  };

  // Call the refreshAuthData function on component mount if a refresh token exists
  useEffect(() => {
    if (refreshToken) {
      refreshAuthData();
    }
  }, [refreshToken]);

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        setAuthData,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
