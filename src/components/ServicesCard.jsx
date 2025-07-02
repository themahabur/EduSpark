import React from "react";
import { Link } from "react-router";

const ServicesCard = ({ service }) => {
  return (
    <div className="p-6 rounded-lg border border-gray-200  space-y-4" data-aos="fade-up">
      <div>
        <img className="rounded-md " src={service.imageUrl} alt="" />
      </div>
      <div className="space-y-2">
        <div className="flex items-center ">
          <img
            src={service.providerImage}
            referrerpolicy="no-referrer"
            alt=""
            className="rounded-full w-12 h-12"
          />
          <span className="ml-2 font-semibold">{service.providerName}</span>
        </div>
        <h3 className="text-xl font-semibold">{service.serviceName}</h3>
        <p>
          {service.description.length > 100
            ? `${service.description.substring(0, 100)}...`
            : service.description}
        </p>
        <div className="flex items-center justify-between ">
          <p className="font-semibold ">Price: ${service.price}</p>
          <Link to={`/services/${service._id}`} className="btn btn-soft btn-primary rounded">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
