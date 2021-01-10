import styled, { css } from 'styled-components/native';

interface IButton {
  transparent?: boolean;
}

interface IButtonTitle {
  dark?: boolean;
}

export const Container = styled.View`
  padding: 0 16px 40px 16px;
`;

export const Image = styled.ImageBackground`
  height: 268px;
`;

export const Name = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.semibold};
    color: ${theme.colors.primary};
  `}

  font-weight: 600;
  font-size: 22px;
  line-height: 32px;
  margin-top: 24px;
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.primary};
  `}

  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  margin-top: 4px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.semibold};
    color: ${theme.colors.primary};
  `}

  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  margin-top: 24px;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.4,
})<IButton>`
  ${({ theme, transparent }) => css`
    background: ${transparent ? theme.colors.secondary : theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
  `}

  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 166px;
  height: 40px;
  padding: 8px;
`;

export const ButtonTitle = styled.Text<IButtonTitle>`
  ${({ theme, dark }) => css`
    font-family: ${theme.fonts.semibold};
    color: ${dark ? theme.colors.primary : theme.colors.secondary};
  `}
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  margin-left: 11px;
`;
