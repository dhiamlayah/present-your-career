import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../Context-SignUp-In/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = UserAuth();

  if (!user) {
    return <Navigate to='/SignIn' />;
  }
  return children;
};

export default ProtectedRoute;
