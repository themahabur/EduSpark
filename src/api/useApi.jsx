import React from "react";
import useAxios from "../hooks/useAxios";

const useApi = () => {
  const axiosSecure = useAxios();

  const axiosManageServicesPromise = (email) => {
    return axiosSecure
      .get(`/manageServices?email=${email}`)
      .then((res) => res.data);
  };

  const axiosBookedServicesPromise = (email) => {
    return axiosSecure
      .get(`/bookedServices?email=${email}`)
      .then((res) => res.data);
  };

  const axiosSecureServicesToDoPromise = (email) => {
    return axiosSecure
      .get(`/serviceToDo?email=${email}`)
      .then((res) => res.data);
  };

  return {
    axiosManageServicesPromise,
    axiosBookedServicesPromise,
    axiosSecureServicesToDoPromise
  };
};

export default useApi;
