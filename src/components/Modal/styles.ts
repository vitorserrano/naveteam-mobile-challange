import styled, { css } from 'styled-components/native';

interface IButton {
  transparent?: boolean;
}

interface IButtonTitle {
  dark?: boolean;
}

export const ModalStatusBar = styled.StatusBar.attrs({
  barStyle: 'dark-content',
})``;

export const Wrapper = styled.Modal.attrs({
  transparent: true,
})``;

export const Container = styled.View`
  flex: 1;
  padding: 0 16px;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.transparent};
`;

export const Content = styled.View`
  align-self: stretch;
  padding: 24px;
  background: ${({ theme }) => theme.colors.secondary};
  box-shadow: 0px 2px 4px rgba(33, 33, 33, 0.25);
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semibold};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  font-size: 22px;
  line-height: 32px;
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
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

  justify-content: center;
  align-items: center;
  width: 142px;
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
`;
