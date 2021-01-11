import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding-top: 32px;
  background: ${({ theme }) => theme.colors.secondary};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.semibold};
    color: ${theme.colors.primary};
  `}

  font-weight: 600;
  font-size: 22px;
  line-height: 32px;
  align-self: center;
  margin-bottom: 24px;
`;

export const Form = styled.ScrollView`
  padding: 0 16px;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.4,
})`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
  `}

  align-self: stretch;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding: 8px;
  margin: 40px 0;
`;

export const ButtonTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.semibold};
    color: ${theme.colors.secondary};
  `}
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  margin-left: 11px;
`;
