import styled, { css } from 'styled-components/native';

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.semibold};
    color: ${theme.colors.primary};
  `}

  align-self: flex-start;
  padding-top: 32px;
  font-size: 14px;
  line-height: 18px;
  font-weight: 600;
`;
