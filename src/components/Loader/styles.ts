import styled from 'styled-components/native';
import { Flow } from 'react-native-animated-spinkit';

export const AnimatedLoader = styled(Flow).attrs(({ theme, size, color }) => ({
  size: size || 40,
  color: color || theme.colors.primary,
}))``;
