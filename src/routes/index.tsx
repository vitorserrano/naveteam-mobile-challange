import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '../context/auth';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

import { Splash } from '../components';

const Routes: React.FC = () => {
  const { signed, loading } = useAuth();

  if (loading) {
    return <Splash />;
  }

  return (
    <NavigationContainer>
      {signed ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};

export default Routes;
