import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Navers from '../pages/Navers';

const { Navigator, Screen } = createStackNavigator();

const AppRoutes: React.FC = () => (
  <Navigator>
    <Screen name="Navers" component={Navers} />
  </Navigator>
);

export default AppRoutes;
