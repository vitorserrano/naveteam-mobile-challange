import React from 'react';

import Feather from 'react-native-vector-icons/Feather';

import { colors } from '../../theme/colors';

import {
  ModalStatusBar,
  Wrapper,
  Container,
  Content,
  Header,
  Title,
  Description,
  Footer,
  Button,
  ButtonTitle,
} from './styles';

import { IModal } from '../../helpers/Interfaces';

const Modal: React.FC<IModal> = ({
  isVisible,
  title,
  message,
  type,
  onSubmit,
  onRequestClose,
}) => {
  return (
    <>
      <ModalStatusBar
        backgroundColor={isVisible ? colors.transparent : colors.secondary}
      />

      <Wrapper visible={isVisible}>
        <Container>
          <Content>
            <Header>
              <Title>{title}</Title>

              <Feather
                name="x"
                color="#212121"
                size={22}
                onPress={onRequestClose}
              />
            </Header>

            <Description>{message}</Description>

            {type === 'delete' && (
              <Footer>
                <Button onPress={onRequestClose} transparent>
                  <ButtonTitle dark>Cancelar</ButtonTitle>
                </Button>

                <Button onPress={onSubmit}>
                  <ButtonTitle>Excluir</ButtonTitle>
                </Button>
              </Footer>
            )}
          </Content>
        </Container>
      </Wrapper>
    </>
  );
};

export default Modal;
