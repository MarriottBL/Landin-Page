import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

const AdminRoute = () => {
    const { currentUser, userRole } = useAuth();

    // Check if user is logged in and has admin role
    if (!currentUser || userRole !== 'admin') {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
};

export default AdminRoute;