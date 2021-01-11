import React from 'react';

import { Container } from './styles';

import blackLogoImage from '../../assets/img/blackLogo.png';
import whiteLogoImage from '../../assets/img/whiteLogo.png';

interface Props {
  type: 'blackLogo' | 'whiteLogo';
}

const Logo: React.FC<Props> = ({ type }) => {
  if (type === 'blackLogo') {
    return (
      <Container source={blackLogoImage} style={{ width: 125, height: 32 }} />
    );
  }

  return (
    <Container source={whiteLogoImage} style={{ width: 156, height: 40 }} />
  );
};

export default Logo;
