import React, { useState } from 'react';

import Feather from 'react-native-vector-icons/Feather';

import {
  ModalStatusBar,
  Wrapper,
  Container,
  Content,
  Header,
  Title,
  Description,
} from './styles';

interface Props {
  isVisible: boolean;
  title?: string;
  message?: string;
  type?: string;
  onRequestClose(): void;
}

const Modal: React.FC<Props> = ({
  isVisible,
  title,
  message,
  type,
  onRequestClose,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(isVisible);

  return (
    <>
      <ModalStatusBar />

      <Wrapper visible={isVisible}>
        <Container>
          <Content>
            <Header>
              <Title>{title}</Title>

              <Feather
                name="x"
                color="#212121"
                size={22}
                onPress={() => onRequestClose()}
              />
            </Header>

            <Description>{message}</Description>

            {/* <Footer></Footer> */}
          </Content>
        </Container>
      </Wrapper>
    </>
  );
};

export default Modal;
