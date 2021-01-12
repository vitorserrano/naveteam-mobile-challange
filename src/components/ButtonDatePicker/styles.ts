import styled, { css } from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';

interface IColor {
  isColor: boolean;
}

export const Container = styled.View``;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.semibold};
    color: ${theme.colors.primary};
  `}

  align-self: flex-start;
  margin-top: 40px;
  font-size: 14px;
  line-height: 18px;
  font-weight: 600;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.4,
})`
  height: 40px;
  padding: 8px;
  align-self: stretch;
  flex-direction: row;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  margin-top: 4px;
  margin-bottom: 20px;
`;

export const Icon = styled(Feather).attrs({
  name: 'calendar',
  size: 18,
})<IColor>`
  color: ${({ theme, isColor }) =>
    isColor ? theme.colors.primary : theme.colors.placeholder};
`;

export const Title = styled.Text<IColor>`
  font-size: 16px;
  line-height: 24px;
  font-family: ${({ theme }) => theme.fonts.light};
  color: ${({ theme, isColor }) =>
    isColor ? theme.colors.primary : theme.colors.placeholder};
  font-weight: normal;
  margin-left: 8px;
`;
