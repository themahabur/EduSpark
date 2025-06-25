import React, { use } from "react";
import { Link, useLoaderData } from "react-router";
import { FaLocationDot } from "react-icons/fa6";
import AuthContext from "../provider/AuthContext";
const ServiceDetails = () => {
  const serviceData = useLoaderData();
  const { user } = use(AuthContext);

  console.log(serviceData);
  const {
    serviceName,
    description,
    price,
    providerName,
    providerImage,
    serviceArea,
  } = serviceData.data;

  return (
    <div className="container mx-auto p-4 min-h-screen">
      <div className="rounded-lg flex md:flex-row flex-col p-4 gap-4">
        <div className="space-y-4 md:w-4/6 flex flex-col ">
          <div className="md:w-9/12 ">
            <img
              src={serviceData.data.imageUrl}
              alt=""
              className="rounded-lg"
            />
          </div>

          <div className="flex items-center gap-4">
            <div>
              <img
                src={providerImage}
                referrerpolicy="no-referrer"
                className="w-12 h-12 rounded-full"
                alt=""
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold">{providerName}</h1>
            </div>
          </div>
          <h1 className="text-3xl font-bold">{serviceName}</h1>
          <p className="text-lg whitespace-pre-line">{description}</p>
        </div>
        <div className="md:w-2/6">
          <div className="border border-gray-200 p-4 rounded-md space-y-6">
            <h1 className="text-3xl font-bold">{serviceName}</h1>
            <div>
              <p className="font-semibold flex items-center gap-2">
                <FaLocationDot />
                Location:
              </p>{" "}
              {serviceArea}
            </div>
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold">Price: ${price}</h1>
              {serviceData.data.providerEmail === user?.email ? (
                <button className="btn btn-disabled text-white ">
                  Book Now
                </button>
              ) : (
                <Link to={`/booking/${serviceData.data._id}`}>
                  <button className="btn btn-primary text-white ">
                    Book Now
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
