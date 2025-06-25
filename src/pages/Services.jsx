import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router";
import AllServicesCard from "../components/AllServicesCard";
import axios from "axios";

const Services = () => {
  const allServices = useLoaderData();
  console.log("All services data:", allServices.data);
  const [services, setServices] = useState(allServices.data);
  // const [searchLoading, setSearchLoading] = useState(false);

  const handleSearch = (e) => {
    // setSearchLoading(true);
    axios
      .get(
        `${import.meta.env.VITE_SERVER_URL}/allServices?search=${
          e.target.value
        }`
      )
      .then((response) => {
        console.log(response.data);
        setServices(response.data);
        // setSearchLoading(false);
      })
      .catch((error) => {
        console.error(error);
        // setSearchLoading(false);
      });

    console.log(e.target.value);
  };

  return (
    <div className="container mx-auto p-4 min-h-screen">
      <Helmet>
        <title>EduSpark - Services</title>
      </Helmet>
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 py-4">
        <h1 className="text-4xl font-bold mb-4">All Services</h1>
        <input
          onKeyUp={handleSearch}
          type="text"
          placeholder="Search services..."
          className="py-2 px-4 border-2 border-gray-300 focus:outline-none focus:border-primary rounded w-full max-w-xs"
        />
      </div>

      <div className="my-8">
        {services.length > 0 ? (
          <div className="grid grid-cols-1 gap-6">
            {services.map((service) => (
              <AllServicesCard
                key={service._id}
                service={service}
              ></AllServicesCard>
            ))}
          </div>
        ) : (
          <h2 className="text-2xl font-bold text-center my-8">
            No services found.
          </h2>
        )}
      </div>
    </div>
  );
};

export default Services;
