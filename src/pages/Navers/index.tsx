import React, { useEffect } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import { useAuth } from '../../context/auth';
import api from '../../services/api';

const Navers: React.FC = () => {
  const { signOut } = useAuth();

  const handleLoadNavers = async () => {
    const { data } = await api.get('/navers');
  };

  handleLoadNavers();

  const handleSignOut = () => {
    signOut();
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={handleSignOut}>
        <Text style={{ fontSize: 40, fontWeight: 'bold' }}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Navers;
