import styled, { css } from 'styled-components/native';

interface IDefaultInputProps {
  isError: boolean;
}

export const DefaultInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.placeholder,
}))<IDefaultInputProps>`
  ${({ theme, isError }) => css`
    background: ${theme.colors.secondary};
    font-family: ${theme.fonts.light};
    border: 1px solid
      ${isError ? theme.colors.error : theme.colors.primaryLight};
    color: ${theme.colors.primary};
  `}

  align-self: stretch;
  margin-top: 4px;
  height: 40px;
  padding: 8px;
  font-size: 16px;
  line-height: 24px;
  font-weight: normal;
`;

export const ErrorMessage = styled.Text`
  color: ${({ theme }) => theme.colors.error};
  font-size: 14px;
  margin-top: 4px;
  align-self: flex-start;
`;
