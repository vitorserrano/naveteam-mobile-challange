import React from 'react';

import Loader from '../Loader';
import { Container, Title } from './styles';
import { colors } from '../../theme/colors';

interface IButton {
  isLoading?: boolean;
  disabled: boolean;
  title: string;
  onPress(): void;
}

const Button: React.FC<IButton> = ({ isLoading, title, ...props }) => {
  return (
    <Container {...props}>
      {isLoading && <Loader size={22} color={colors.secondary} />}
      {!isLoading && <Title>{title}</Title>}
    </Container>
  );
};

export default Button;
