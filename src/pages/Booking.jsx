import React, { use, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";
import AuthContext from "../provider/AuthContext";
import axios from "axios";
import toast from "react-hot-toast";

const Booking = () => {
  const { id } = useParams();
  const serviceData = useLoaderData();
  const { user } = use(AuthContext);
  const { serviceName, price, providerName, providerEmail, imageUrl } =
    serviceData.data;
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleBooking = (e) => {
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
    newFormData.status = "pending";
    console.log(newFormData);

    axios
      .post(`${import.meta.env.VITE_SERVER_URL}/booking`, newFormData)
      .then((response) => {
        if (response.data.acknowledged) {
          toast.success("Booking successfully!");
          toast.dismiss("loading-toast");
          navigate("/bookedServices");
          setLoading(false);
          form.reset();
        }
      })
      .catch((error) => {
        toast.error("Failed to Booking service. Please try again.");
        toast.dismiss("loading-toast");
        setLoading(false);
        console.error("Error Booking service:", error);
      });
  };

  return (
    <div className="container mx-auto p-4 min-h-screen">
      <h2 className="text-3xl font-bold text-center my-8">Book your service</h2>
      <div className="border border-gray-100 rounded-lg p-4 md:w-1/2 mx-auto">
        <form className="space-y-4" onSubmit={handleBooking}>
          <div>
            <label htmlFor="email" className="block text-sm/6 font-medium ">
              Service ID
            </label>
            <div className="mt-2">
              <input
                readOnly
                id="serviceID"
                name="serviceID"
                type="text"
                required
                autoComplete="serviceID"
                value={id}
                className="w-full rounded-md px-3 py-1.5    bg-base-200 focus:outline-base-200 sm:text-sm/6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm/6 font-medium ">
              Service Name
            </label>
            <div className="mt-2">
              <input
                readOnly
                id="serviceName"
                name="serviceName"
                type="text"
                required
                autoComplete="serviceName"
                value={serviceName}
                className="w-full rounded-md px-3 py-1.5    bg-base-200 focus:outline-base-200 sm:text-sm/6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm/6 font-medium ">
              Service Image
            </label>
            <div className="mt-2">
              <input
                readOnly
                id="serviceImage"
                name="serviceImage"
                type="text"
                required
                autoComplete="serviceImage"
                value={imageUrl}
                className="w-full rounded-md px-3 py-1.5    bg-base-200 focus:outline-base-200 sm:text-sm/6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm/6 font-medium ">
              Provider email
            </label>
            <div className="mt-2">
              <input
                readOnly
                id="providerEmail"
                name="providerEmail"
                type="text"
                required
                autoComplete="providerEmail"
                value={providerEmail}
                className="w-full rounded-md px-3 py-1.5    bg-base-200 focus:outline-base-200 sm:text-sm/6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm/6 font-medium ">
              Provider Name
            </label>
            <div className="mt-2">
              <input
                readOnly
                id="providerName"
                name="providerName"
                type="text"
                required
                autoComplete="providerName"
                value={providerName}
                className="w-full rounded-md px-3 py-1.5   bg-base-200 focus:outline-base-200 sm:text-sm/6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm/6 font-medium ">
              Your email
            </label>
            <div className="mt-2">
              <input
                readOnly
                id="userEmail"
                name="userEmail"
                type="text"
                required
                autoComplete="userEmail"
                value={user?.email}
                className="w-full rounded-md px-3 py-1.5   bg-base-200 focus:outline-base-200 sm:text-sm/6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm/6 font-medium ">
              Your Name
            </label>
            <div className="mt-2">
              <input
                readOnly
                id="userName"
                name="userName"
                type="text"
                required
                autoComplete="userName"
                value={user?.displayName}
                className="w-full rounded-md px-3 py-1.5    bg-base-200 focus:outline-base-200 sm:text-sm/6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm/6 font-medium ">
              Service Taking Date
            </label>
            <div className="mt-2">
              <input
                id="takingDate"
                name="takingDate"
                type="date"
                required
                autoComplete="takingDate"
                className="block w-full rounded-md px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm/6 font-medium ">
              Service Taking Address
            </label>
            <div className="mt-2">
              <input
                id="takingAddress"
                name="takingAddress"
                type="text"
                required
                autoComplete="takingAddress"
                className="block w-full rounded-md px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm/6 font-medium ">
              Service Price
            </label>
            <div className="mt-2">
              <input
                readOnly
                id="servicePrice"
                name="servicePrice"
                type="text"
                required
                autoComplete="servicePrice"
                value={"$" + price}
                className="w-full rounded-md px-3 py-1.5    bg-base-200 focus:outline-base-200 sm:text-sm/6"
              />
            </div>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-soft btn-primary rounded w-full">
              Purchase
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Booking;
