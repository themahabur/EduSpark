import React, { Suspense, use } from 'react';
import AuthContext from '../provider/AuthContext';
import useApi from '../api/useApi';
import ServicesToDoList from '../components/ServicesToDoList';
import LoadingPage from './LoadingPage';

const ServiceToDo = () => {

    const { user } = use(AuthContext);

    const { axiosSecureServicesToDoPromise } = useApi();

    return (
        <div className='container mx-auto p-4 min-h-screen'>
            <h1 className='text-2xl font-bold mb-4'>Service to do</h1>

            <Suspense fallback={<LoadingPage />}>
                <ServicesToDoList
                    services={axiosSecureServicesToDoPromise(user?.email)}
                ></ServicesToDoList>
            </Suspense>

        </div>
    );
};

export default ServiceToDo;