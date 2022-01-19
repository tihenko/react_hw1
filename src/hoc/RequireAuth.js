import React from 'react';
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from "../hooks/UseAuth";

const RequireAuth = ({ children }) => {

  const location = useLocation();
  const { user } = useAuth();

  if (!user) {
    return <Navigate to={'/login'} state={location}/>
  }

  return children
};

export default RequireAuth;
