import React from "react";
import { createBrowserRouter } from "react-router";
import Mainlayout from "../layouts/Mainlayout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddService from "../pages/AddService";
import PrivateRoute from "../provider/PrivateRoute";
import ErrorPage from "../pages/ErrorPage";
import axios from "axios";
import LoadingPage from "../pages/LoadingPage";
import ServiceDetails from "../pages/ServiceDetails";
import NotFoundPage from "../pages/NotFoundPage";
import Booking from "../pages/Booking";
import ManageServices from "../pages/ManageServices";
import EditServices from "../pages/EditServices";
import BookedServices from "../pages/BookedServices";
import ServiceToDo from "../pages/ServiceToDo";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Mainlayout,
    children: [
      {
        path: "/",
        Component: Home,
        loader: () =>
          axios.get(`${import.meta.env.VITE_SERVER_URL}/topServices`),
        hydrateFallbackElement: <LoadingPage></LoadingPage>,
        errorElement: <ErrorPage></ErrorPage>,
      },
      {
        path: "/services",
        Component: Services,
        loader: () =>
          axios.get(`${import.meta.env.VITE_SERVER_URL}/allServices`),
        hydrateFallbackElement: <LoadingPage></LoadingPage>,
      },
      {
        path: "/services/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          axios.get(`${import.meta.env.VITE_SERVER_URL}/service/${params.id}`),
        hydrateFallbackElement: <LoadingPage></LoadingPage>,
        errorElement: <ErrorPage></ErrorPage>,
      },
      {
        path: "/addService",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
      {
        path: "/booking/:id",
        element: (
          <PrivateRoute>
            <Booking></Booking>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          axios.get(`${import.meta.env.VITE_SERVER_URL}/service/${params.id}`),
        hydrateFallbackElement: <LoadingPage></LoadingPage>,
        errorElement: <ErrorPage></ErrorPage>,
      },
      {
        path: "/manageService",
        element: (
          <PrivateRoute>
            <ManageServices></ManageServices>
          </PrivateRoute>
        ),
        errorElement: <ErrorPage></ErrorPage>,
      },
      {
        path: "/editService/:id",
        element: (
          <PrivateRoute>
            <EditServices></EditServices>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          axios.get(`${import.meta.env.VITE_SERVER_URL}/service/${params.id}`),
        hydrateFallbackElement: <LoadingPage></LoadingPage>,
        errorElement: <ErrorPage></ErrorPage>,
      },
      {
        path: "/bookedServices",
        element: (
          <PrivateRoute>
            <BookedServices></BookedServices>
          </PrivateRoute>
        ),
      },
      {
        path: "/service-to-do",
        element: (
          <PrivateRoute>
            <ServiceToDo></ServiceToDo>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage></NotFoundPage>,
  },
]);

export default router;
