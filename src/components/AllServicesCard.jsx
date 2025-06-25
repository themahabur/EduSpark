import React from "react";
import { Link } from "react-router";

const AllServicesCard = ({ service }) => {
  return (
    <div className="flex md:flex-row flex-col gap-4 p-6 rounded-lg border border-gray-200  space-y-4" data-aos="fade-up">
      <div className="md:w-2/6">
        <img className="rounded-md " src={service.imageUrl} alt="" />
      </div>
      <div className="flex flex-col md:w-4/6 space-y-4 p-4">
        <div className="md:w-4/6 space-y-2">
          <div className="flex items-center ">
            <img
              src={service.providerImage}
              alt=""
              className="rounded-full w-12 h-12"
            />
            <span className="ml-2 font-semibold">{service.providerName}</span>
          </div>
          <div>
            <h3 className="text-xl font-semibold">{service.serviceName}</h3>
            <p>
              {service.description.length > 100
                ? `${service.description.substring(0, 100)}...`
                : service.description}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between ">
          <p className="font-semibold">Price: ${service.price}</p>
          <Link to={`/services/${service._id}`} className="btn btn-primary text-white ">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default AllServicesCard;
