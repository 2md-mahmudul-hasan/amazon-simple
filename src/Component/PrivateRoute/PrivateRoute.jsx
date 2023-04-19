import React, { useContext } from 'react';
import { authContext } from '../../provider/ContextProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(authContext)
  const location = useLocation()
  if (loading) {
    return
    <div class="bg-gray-600 h-2.5 rounded-full dark:bg-gray-300" style="width: 45%"></div>
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;