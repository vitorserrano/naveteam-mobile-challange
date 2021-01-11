import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  background: ${({ theme }) => theme.colors.secondary};
`;

export const Logo = styled.Image`
  width: 156px;
  height: 40px;
  margin-bottom: 24px;
`;
