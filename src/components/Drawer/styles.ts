import styled, { css } from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: 24px;
  background: ${({ theme }) => theme.colors.foreground};
`;

export const Menu = styled.TouchableOpacity.attrs({
  activeOpacity: 0.4,
})`
  margin: 14px 0 0 16px;
  align-self: flex-start;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.secondary};
`;

export const Route = styled.TouchableOpacity.attrs({
  activeOpacity: 0.4,
})`
  align-self: stretch;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.semibold};
    color: ${theme.colors.primary};
  `};

  font-weight: 600;
  font-size: 22px;
  line-height: 32px;
`;
