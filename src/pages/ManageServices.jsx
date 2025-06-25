import React, { Suspense, useContext } from "react";
import AuthContext from "../provider/AuthContext";
import useApi from "../api/useApi";
import LoadingPage from "./LoadingPage";
import ManageServicesList from "../components/ManageServicesList";

const ManageServices = () => {
  const { user } = useContext(AuthContext);
  const { axiosManageServicesPromise } = useApi();
  return (
    <div className="container mx-auto p-4 min-h-screen">
      <Suspense fallback={<LoadingPage />}>
        <ManageServicesList
          services={axiosManageServicesPromise(user?.email)}
        ></ManageServicesList>
      </Suspense>
    </div>
  );
};

export default ManageServices;
