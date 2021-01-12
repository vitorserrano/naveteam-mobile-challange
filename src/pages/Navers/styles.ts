import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 28px 16px;
  background: ${({ theme }) => theme.colors.secondary};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.semibold};
    color: ${theme.colors.primary};
  `};

  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.4,
})`
  padding: 8px;
  background: ${({ theme }) => theme.colors.primary};
  min-width: 170px;
  justify-content: center;
  align-items: center;
`;

export const ButtonTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.semibold};
    color: ${theme.colors.secondary};
  `};

  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
`;

export const NaversList = styled.FlatList`
  margin-top: 28px;
`;

export const Content = styled.TouchableOpacity.attrs({
  activeOpacity: 0.4,
})`
  margin-bottom: 26px;
`;

export const Image = styled.Image`
  width: 170px;
  height: 170px;
`;

export const Description = styled.View`
  max-width: 170px;
`;

export const Name = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.semibold};
    color: ${theme.colors.primary};
  `};

  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  margin-top: 8px;
`;

export const JobRole = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.primary};
  `};

  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  margin-top: 4px;
`;

export const Actions = styled.View`
  flex-direction: row;
  width: 56px;
  justify-content: space-between;
  align-items: center;
  margin-top: 11px;
`;
