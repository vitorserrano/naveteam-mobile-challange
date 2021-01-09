import React from 'react';
import { Alert, Image, View, TouchableOpacity, Text } from 'react-native';

import Feater from 'react-native-vector-icons/Feather';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import blackLogo from '../assets/img/blackLogo.png';

import Navers from '../pages/Navers';

const CustomDrawerContent = (props: any) => {
  const { state, navigation } = props;

  const isFocused = state.routes[state.index].name;

  console.log(navigation);

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      style={{ backgroundColor: '#FAFAFA' }}
    >
      <TouchableOpacity
        style={{
          marginLeft: 18,
          marginTop: 14,
          alignSelf: 'flex-start',
        }}
        onPress={() => navigation.closeDrawer()}
      >
        <Feater name="menu" size={22} color="#212121" />
      </TouchableOpacity>

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TouchableOpacity
          style={{
            alignSelf: 'stretch',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => Alert.alert('Navers')}
        >
          <Text
            style={{
              fontSize: 22,
              fontWeight: '600',
              color: isFocused === 'Navers' ? '#424242' : '#212121',
            }}
          >
            Navers
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignSelf: 'stretch',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 24,
          }}
          onPress={() => Alert.alert('Navers')}
        >
          <Text style={{ fontSize: 22, fontWeight: '600', color: '#212121' }}>
            Sair
          </Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

const Drawer = createDrawerNavigator();

const AppRoutes: React.FC = () => (
  <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
    <Drawer.Screen
      name="Navers"
      component={Navers}
      options={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#FAFAFA',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.29,
          shadowRadius: 4.65,
          elevation: 7,
        },
        headerTitle: () => (
          <Image source={blackLogo} style={{ width: 125, height: 32 }} />
        ),
        headerTitleAlign: 'center',
      }}
    />

    <Drawer.Screen
      name="Sair"
      component={Navers}
      options={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#FAFAFA',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.29,
          shadowRadius: 4.65,
          elevation: 7,
        },
        headerTitle: () => (
          <Image source={blackLogo} style={{ width: 125, height: 32 }} />
        ),
        headerTitleAlign: 'center',
      }}
    />
  </Drawer.Navigator>
);

export default AppRoutes;
