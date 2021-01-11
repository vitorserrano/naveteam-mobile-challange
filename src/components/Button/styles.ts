import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.4,
})`
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
