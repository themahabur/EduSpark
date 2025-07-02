import React, { use, useState } from "react";
import AuthContext from "../provider/AuthContext";
import axios from "axios";
import toast from "react-hot-toast";

const AddService = () => {


  const { user } = use(AuthContext)
  const [isLoading, setIsLoading] = useState(false);



  if(isLoading){
    toast.loading("Adding service...", {
      id: "loading-toast",
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newFormData = Object.fromEntries(formData.entries());

    newFormData.providerEmail = user?.email;
    newFormData.providerName = user?.displayName;
    newFormData.providerImage = user?.photoURL;

    setIsLoading(true);

    axios.post(`${import.meta.env.VITE_SERVER_URL}/addServices`, newFormData)
      .then((response) => {
        if (response.data.acknowledged) {
          toast.success("Service added successfully!");
          setIsLoading(false);
          toast.dismiss("loading-toast");
          form.reset();
        }
      })
      .catch((error) => {
        toast.error("Failed to add service. Please try again.");
        setIsLoading(false);
        toast.dismiss("loading-toast");
        console.error("Error adding service:", error);
      });

    console.log(newFormData);
  };

  return (
    <div className="container mx-auto p-4 min-h-screen">
      <div className="border border-gray-200 p-4 rounded-md ">
        <div className="flex items-center justify-center">
          <h1 className="text-2xl font-semibold ">Add Service</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 p-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Service Name
              </label>
              <input
                type="text"
                name="serviceName"
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
                name="description"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter description"
              ></textarea>
            </div>
          </div>
          <div className="p-4">
            <button
              type="submit"
              className="w-full btn btn-soft btn-primary rounded  p-2 cursor-pointer"
            >
              Add Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddService;
