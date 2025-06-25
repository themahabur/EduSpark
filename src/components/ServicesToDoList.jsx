import React, { use, useState } from "react";
import ToDoServicesCard from "./ToDoServicesCard";
import axios from "axios";
import toast from "react-hot-toast";

const ServicesToDoList = ({ services }) => {
  const data = use(services);

  const [toDoServicesList, setToDoServicesList] = useState(data);

  const handleStatusChange = (id, newStatus) => {
    axios
      .patch(`${import.meta.env.VITE_SERVER_URL}/service/${id}`, {
        status: newStatus,
      })
      .then((response) => {

       if (response.data.modifiedCount > 0) {


          const updatedServices = toDoServicesList.map((service) => {
            if (service._id === id) {
              return { ...service, status: newStatus };
            }
            return service;
          });


          toast.success("Status updated successfully!");

          setToDoServicesList(updatedServices);
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to update status. Please try again.");
      });
  };

  return (
    <div>
      {toDoServicesList.length === 0 ? (
        <div className="text-center">
          <p className="text-lg">No services found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1  gap-6 p-4">
          {toDoServicesList.map((service) => (
            <ToDoServicesCard
              key={service._id}
              service={service}
              handleStatusChange={handleStatusChange}
            ></ToDoServicesCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServicesToDoList;
