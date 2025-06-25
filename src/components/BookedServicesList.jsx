import React, { use } from "react";
import ServicesCard from "./ServicesCard";
import BookedServicesCard from "./BookedServicesCard";

const BookedServicesList = ({ services }) => {
  const bookedServices = use(services);

  return (
    <div className="space-y-2">
      {bookedServices.length === 0 ? (
        <div className="text-center">
          <p className="text-lg">No services found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
          {bookedServices.map((service) => (
            <BookedServicesCard key={service._id} service={service}></BookedServicesCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookedServicesList;
