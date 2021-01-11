import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';

import * as moment from 'moment';
import 'moment/locale/pt-br';

import { ThemeProvider } from 'styled-components';

import Routes from './routes';

import { AuthProvider } from './context/auth';
import { navedexTheme } from './theme';

import { colors } from './theme/colors';

const App: React.FC = () => {
  useEffect(() => {
    moment.locale('pt-br');
  }, []);

  return (
    <AuthProvider>
      <ThemeProvider theme={navedexTheme}>
        <StatusBar
          backgroundColor={colors.secondary}
          barStyle="dark-content"
          translucent
        />

        <Routes />
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
