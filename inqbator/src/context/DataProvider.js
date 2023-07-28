import React, { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';
import API_URL from "../api/Api";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  // const [refreshToken, setRefreshToken] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/user-info`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        // const {name, email, picture} = 
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setUser(null);
      }
    };

    if (accessToken) {
      fetchUserData();
    } else {
      setUser(null);
    }
  }, [accessToken]);

  useEffect(() => {
    setAccessToken(localStorage.getItem("accesstoken"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <DataContext.Provider
      value={{
        user,
        setUser,
        accessToken
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const DataState = () => {
  return useContext(DataContext);
};

export default DataProvider;







  // Function to read a specific cookie value
  // const getCookie = (name) => {
  //   const value = `; ${document.cookie}`;
  //   const parts = value.split(`; ${name}=`);
  //   if (parts.length === 2) return parts.pop().split(";").shift();
  // };

  // useEffect(() => {
  //   const storedRefreshToken = getCookie("refreshToken");
  //   if (storedRefreshToken) {
  //     setRefreshToken(storedRefreshToken);
  //   }
  // }, []);

  // // Function to set the access token and refresh token in the state and HTTP-only cookie
  // const setAuthData = (accessToken, refreshToken) => {
  //   setAccessToken(accessToken);
  //   setRefreshToken(refreshToken);
  //   // Set the refresh token as an HTTP-only cookie for better security
  //   document.cookie = `refreshToken=${refreshToken}; Path=/; Secure; HttpOnly; Max-Age=${7 * 24 * 60 * 60}`;
  // };

  // const logout = () => {
  //   setAccessToken(null);
  //   setRefreshToken(null);
  //   // Remove the refresh token cookie on logout
  //   document.cookie = "refreshToken=; Path=/; Max-Age=0";
  // };

  // const refreshAccessToken = async () => {
  //   try {
  //     const response = await axios.post(`${API_URL}/api/refresh-token`, { refreshToken });
  //     const { accessToken: newAccessToken } = response.data;
  //     setAccessToken(newAccessToken);
  //   } catch (error) {
  //     console.error("Error refreshing access token:", error);
  //     logout();
  //   }
  // };

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const response = await axios.get(`${API_URL}/api/user-info`, {
  //         headers: { Authorization: `Bearer ${accessToken}` },
  //       });
  //       setUser(response.data);
  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //       setUser(null);
  //     }
  //   };

  //   if (accessToken) {
  //     fetchUserData();
  //   } else {
  //     setUser(null);
  //   }
  // }, [accessToken]);

  // useEffect(() => {
  //   if (refreshToken && !accessToken) {
  //     refreshAccessToken();
  //   }
  // }, [refreshToken, accessToken]);
