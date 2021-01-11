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
  margin-bottom: 40px;
`;
