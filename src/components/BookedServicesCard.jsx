import React from "react";
import { Link } from "react-router";

const BookedServicesCard = ({ service }) => {
  const {
    serviceName,
    providerName,
    serviceImage,
    servicePrice,
    takingDate,
    takingAddress,
    status,
  } = service;

  return (
    <div className="max-w-md mx-auto  rounded-xl overflow-hidden md:max-w-2xl my-2 border border-gray-200" data-aos="fade-up">
      <div className="md:flex">
        <div className="md:flex items-center py-2 px-4">
          <img
            className="h-48 w-full rounded-lg object-cover "
            src={serviceImage}
            alt="Service"
          />
        </div>
        <div className="p-4">
          <div className="uppercase tracking-wide text-sm text-primary font-semibold">
            {serviceName.length > 20
              ? `${serviceName.trim().split(" ").slice(0, 2).join(" ")}`
              : serviceName}
          </div>
          <p className="block mt-1 text-lg leading-tight font-medium ">
            {serviceName.length > 20
              ? `${serviceName
                  .trim()
                  .split(" ")
                  .slice(2, serviceName.trim().split(" ").length)
                  .join(" ")}`
              : serviceName}
          </p>
          <p className="mt-2   ">
            Provider: <span className="font-medium">{providerName}</span>
          </p>
          <p className="  ">
            Taking Date: <span className="font-medium">{takingDate}</span>
          </p>
          <p className="  ">
            Address: <span className="font-medium">{takingAddress}</span>
          </p>
          <p className=" font-semibold mt-2">
            Price: <span className="text-green-600">{servicePrice}</span>
          </p>
          <p
            className={`inline-block mt-2 px-3 py-1 rounded-full text-sm font-medium 
              ${
                status === "pending"
                  ? "bg-yellow-100 text-yellow-800"
                  : status === "working"
                  ? "bg-blue-100 text-blue-800"
                  : status === "completed"
                  ? "bg-green-100 text-green-800"
                  : "bg-gray-100 text-gray-800"
              }
            
            `}
          >
            Status: {status}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookedServicesCard;
