import React, { use } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import AuthContext from "../provider/AuthContext";
import LoadingPage from "../pages/LoadingPage";

const Mainlayout = () => {
  const { loading } = use(AuthContext);

  if (loading) {
    return <LoadingPage></LoadingPage>;
  }

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Mainlayout;
