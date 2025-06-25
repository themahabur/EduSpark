import React, { use, useState } from "react";
import ManageServicesCard from "./ManageServicesCard";
import Swal from "sweetalert2";
import axios from "axios";

const ManageServicesList = ({ services }) => {
  
  const myServicesList = use(services);

  const [servicesList, setServicesList] = useState(myServicesList);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "you want to delete this service?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#309975",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${import.meta.env.VITE_SERVER_URL}/service/${id}`)
          .then((response) => {
            console.log(response.data);

            if (response.data.deletedCount > 0) {
              const remainingServices = servicesList.filter(
                (service) => service._id !== id
              );
              setServicesList(remainingServices);
              Swal.fire({
                title: "Deleted!",
                text: "Your service has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((error) => {
            console.error(error);
          });
      }
    });
  };

  return (
    <div>
      <div>
        <h2 className="text-3xl font-bold text-center my-8">
          Manage Your Services
        </h2>
      </div>

      <div className="p-4">
        {servicesList.length === 0 ? (
          <div className="p-4 bg-gray-100 rounded-lg">
            <h3 className="text-2xl font-bold text-center my-8">
              No service found
            </h3>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            {servicesList.map((service) => (
              <ManageServicesCard
                key={service._id}
                service={service}
                handleDelete={handleDelete}
              ></ManageServicesCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageServicesList;
