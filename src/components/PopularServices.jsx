import React from "react";
import ServicesCard from "./ServicesCard";
import { Link } from "react-router";

const PopularServices = ({ servicesData }) => {
  return (
    <div className="my-8" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-center my-8">Popular Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
        {servicesData.map((service) => (
         <ServicesCard key={service._id} service={service}></ServicesCard>
        ))}
      </div>
      <div className="text-center p-4">
        <Link to="/services" className="btn btn-soft btn-primary rounded">Show All Services</Link>
      </div>
    </div>
  );
};

export default PopularServices;
