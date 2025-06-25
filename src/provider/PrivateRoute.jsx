import React, { useContext } from 'react';
import AuthContext from './AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation()
    
    if (loading) {
        return <div className="flex justify-center items-center h-screen">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-primary"></div>
        </div>;
    }

    if (user && user?.email) {
        return  children;
    }

    return <Navigate to="/login" state={location.pathname}></Navigate>;
};

export default PrivateRoute;