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

export const Button = styled.TouchableOpacity`
  margin-top: 40px;
  height: 40px;
  padding: 8px;
  align-self: stretch;
  background: ${({ theme }) => theme.colors.primary};
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.semibold};
  font-size: 14px;
  line-height: 24px;
  font-weight: 600;
`;
