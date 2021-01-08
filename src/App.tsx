import React from 'react';
import { StatusBar } from 'react-native';

import { ThemeProvider } from 'styled-components';

import Routes from './routes';

import { AuthProvider } from './context/auth';
import { navedexTheme } from './theme';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <ThemeProvider theme={navedexTheme}>
        <StatusBar
          backgroundColor="#FFFF"
          barStyle="dark-content"
          translucent
        />

        <Routes />
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
