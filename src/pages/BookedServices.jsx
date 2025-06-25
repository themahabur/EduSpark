import React, { Suspense, use } from 'react';
import useApi from '../api/useApi';
import AuthContext from '../provider/AuthContext';
import BookedServicesList from '../components/BookedServicesList';
import LoadingPage from './LoadingPage';

const BookedServices = () => {
  const { axiosBookedServicesPromise } = useApi();
  const { user } = use(AuthContext);

    return (
        <div className="container mx-auto p-4 min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Booked Services</h1>
            <div>
              <Suspense fallback={<LoadingPage />}>
                <BookedServicesList
                  services={axiosBookedServicesPromise(user?.email)}
                ></BookedServicesList>
              </Suspense>   
            </div>
        </div>
    );
};

export default BookedServices;