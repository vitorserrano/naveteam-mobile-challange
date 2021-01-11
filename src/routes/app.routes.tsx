import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Navers from '../pages/Navers';
import NaverDetail from '../pages/NaverDetail';
import FormNaver from '../pages/FormNaver';

import { Drawer, Logo } from '../components';

const AppDrawer = createDrawerNavigator();
const AppStack = createStackNavigator();

const DrawerNavigator = () => (
  <AppDrawer.Navigator drawerContent={props => <Drawer {...props} />}>
    <AppDrawer.Screen
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
  </AppDrawer.Navigator>
);

const AppRoutes: React.FC = () => (
  <AppStack.Navigator>
    <AppStack.Screen
      name="Navers"
      component={DrawerNavigator}
      options={{ headerShown: false }}
    />

    <AppStack.Screen
      name="NaverDetail"
      component={NaverDetail}
      options={({ navigation }) => ({
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
        headerBackImage: () => (
          <MaterialIcons
            name="arrow-back-ios"
            color="#212121"
            size={22}
            onPress={() => navigation.goBack()}
          />
        ),
      })}
    />

    <AppStack.Screen
      name="FormNaver"
      component={FormNaver}
      options={({ navigation }) => ({
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
        headerBackImage: () => (
          <MaterialIcons
            name="arrow-back-ios"
            color="#212121"
            size={22}
            onPress={() => navigation.goBack()}
          />
        ),
      })}
    />
  </AppStack.Navigator>
);

export default AppRoutes;
