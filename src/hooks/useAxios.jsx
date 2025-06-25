import axios from "axios";
import React, { useContext } from "react";
import AuthContext from "../provider/AuthContext";
import Swal from "sweetalert2";

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}`,
});

const useAxios = () => {
  const { user, logoutUser } = useContext(AuthContext);

  if (!user?.accessToken) {
    return;
  }

  axiosInstance.interceptors.request.use((config) => {
    const token = user?.accessToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  axiosInstance.interceptors.response.use(
    (res) => res,
    (err) => {
      if (err.status === 401 || err.status === 403) {
        logoutUser()
          .then(() => {
            if (err.status === 401) {
              Swal.fire({
                position: "center",
                icon: "warning",
                title: "Logged out Session expired",
                text: `Status ${err.status}`,
                showConfirmButton: true,
                timer: 1500,
              });
            } else if (err.status === 403) {
              Swal.fire({
                position: "center",
                icon: "warning",
                title: "Logged out Unauthorized access",
                text: `Status ${err.status}`,
                showConfirmButton: true,
                timer: 1500,
              });
            }
          })
          .catch((err) => console.log(err));
      }
      return Promise.reject(err);
    }
  );

  return axiosInstance;
};

export default useAxios;
