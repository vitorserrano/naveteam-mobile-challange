import React from 'react';

import Feater from 'react-native-vector-icons/Feather';
import { useAuth } from '../../context/auth';

import { Wrapper, Menu, Container, Route, Title } from './styles';

const Drawer: React.FC<any> = props => {
  const { navigation } = props;

  const { signOut } = useAuth();

  const handleSignOut = () => {
    signOut();
  };

  return (
    <Wrapper {...props}>
      <Menu onPress={() => navigation.closeDrawer()}>
        <Feater name="menu" size={22} color="#212121" />
      </Menu>

      <Container>
        <Route onPress={() => navigation.navigate('Navers')}>
          <Title>Navers</Title>
        </Route>

        <Route onPress={() => handleSignOut()}>
          <Title>Sair</Title>
        </Route>
      </Container>
    </Wrapper>
  );
};

export default Drawer;
