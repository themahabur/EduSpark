import React from "react";

const ToDoServicesCard = ({ service, handleStatusChange }) => {
  const { status } = service;
  return (
    <div className="border border-gray-200 rounded-xl p-4 my-6 flex flex-col md:flex-row gap-4" data-aos="fade-up">
      <div className="w-full md:w-1/3 flex justify-center items-center">
        <img
          src={service.serviceImage}
          alt="Service"
          className="h-40 object-cover rounded-md"
        />
      </div>
      <div className="w-full md:w-2/3">
        <h3 className="text-xl font-bold mb-1">
          <span>{service.serviceName}</span>
        </h3>

        <p className="text-sm  ">
          <strong>User:</strong> {service.userName}
        </p>
        <p className="text-sm  ">
          <strong>Address:</strong> {service.takingAddress}
        </p>
        <p className="text-sm  ">
          <strong>Date:</strong> {service.takingDate}
        </p>
        <p className="text-sm font-semibold mt-1 text-green-700">
          <strong>Price:</strong> {service.servicePrice}
        </p>

        <div className="mt-3">
          <label className="block text-sm font-medium mb-1">
            Service Status:
          </label>
          {status === "completed" ? (
            <span className="text-green-600">Completed</span>
          ) : (
            <select
              name="status"
              defaultValue={status}
              onChange={(e) => handleStatusChange(service._id, e.target.value)}
              className="border border-gray-300 bg-base-100 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value={"pending"}>Pending</option>
              <option value={"working"}>Working</option>
              <option value={"completed"}>Completed</option>
            </select>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToDoServicesCard;
