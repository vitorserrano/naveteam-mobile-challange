import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Navers from '../pages/Navers';
import NaverDetail from '../pages/NaverDetail';

import Drawer from '../components/Drawer';
import Logo from '../components/Logo';

const { Navigator, Screen } = createDrawerNavigator();

const AppRoutes: React.FC = () => (
  <Navigator drawerContent={props => <Drawer {...props} />}>
    <Screen
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
        headerTitle: () => <Logo type="blackLogo" />,
        headerTitleAlign: 'center',
      }}
    />

    <Screen
      name="NaverDetail"
      component={NaverDetail}
      options={({ navigation }) => ({
        headerShown: true,
        headerStyle: {
          paddingLeft: 16,
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
        headerTitle: () => <Logo type="blackLogo" />,
        headerTitleAlign: 'center',
        headerLeft: () => (
          <MaterialIcons
            name="arrow-back-ios"
            color="#212121"
            size={20}
            onPress={() => navigation.goBack()}
          />
        ),
        headerLeftContainerStyle: {},
      })}
    />
  </Navigator>
);

export default AppRoutes;
