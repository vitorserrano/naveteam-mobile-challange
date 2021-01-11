import React from 'react';

import Loader from '../Loader';

import { SplashStatusBar, Container, Logo } from './styles';
import { colors } from '../../theme/colors';

import whiteLogo from '../../assets/img/whiteLogo.png';

const Splash: React.FC = () => (
  <>
    <SplashStatusBar />

    <Container>
      <Logo source={whiteLogo} />
      <Loader size={60} color={colors.secondary} />
    </Container>
  </>
);

export default Splash;
