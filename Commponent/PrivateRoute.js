// components/PrivateRoute.js

import React from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../utils/auth';

const PrivateRoute = ({ children }) => {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    router.push('/login');
    return null;
  }

  return <>{children}</>;
};

export default PrivateRoute;
