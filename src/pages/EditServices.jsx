import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router";

const EditServices = () => {
  const service = useLoaderData();
  const {serviceName,imageUrl,description,price,serviceArea}=service.data
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const handleUpdate = (e) => {

    setLoading(true);
    if (loading) {
      toast.loading("Loading...", {
        id: "loading-toast",
      });
    }

    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newFormData = Object.fromEntries(formData.entries());

    axios
      .put(`${import.meta.env.VITE_SERVER_URL}/updateServices/${service.data._id}`, newFormData)
      .then((response) => {
        console.log(response.data);
        if (response.data.acknowledged) {
          navigate("/manageService");
          toast.success("Service updated successfully!");
          toast.dismiss("loading-toast");
          setLoading(false);
          form.reset();
        }
      })
      .catch((error) => {
        toast.error("Failed to update service. Please try again.");
        toast.dismiss("loading-toast");
        setLoading(false);
        console.error("Error updating service:", error);
      });

    console.log(newFormData);
  };

  return (
    <div className="container mx-auto p-4 min-h-screen">
      <div className="border border-gray-200 p-4 rounded-md ">
        <div className="flex items-center justify-center">
          <h1 className="text-2xl font-semibold ">Edit Service</h1>
        </div>
        <form onSubmit={handleUpdate}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 p-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Service Name
              </label>
              <input
                type="text"
                name="serviceName"
                defaultValue={serviceName}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter service name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Image URL
              </label>
              <input
                type="text"
                name="imageUrl"
                defaultValue={imageUrl}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter image URL"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4  p-4">
            <div>
              <label className="block text-sm font-medium mb-2">Price</label>
              <input
                type="text"
                name="price"
                defaultValue={price}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter price"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Service Area
              </label>
              <input
                type="text"
                name="serviceArea"
                defaultValue={serviceArea}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter service area"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4  p-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Description
              </label>
              <textarea
                rows="8"
                defaultValue={description}
                name="description"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter description"
              ></textarea>
            </div>
          </div>
          <div className="p-4">
            <button
              type="submit"
              className="w-full bg-primary text-white p-2 rounded-md cursor-pointer"
            >
              Update Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditServices;
