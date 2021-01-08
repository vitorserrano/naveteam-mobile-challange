import styled from 'styled-components/native';

export const SplashStatusBar = styled.StatusBar.attrs(({ theme }) => ({
  backgroundColor: theme.colors.primary,
  barStyle: 'light-content',
}))``;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.primary};
`;

export const Logo = styled.Image`
  width: 156px;
  height: 40px;
  margin-bottom: 60px;
`;
