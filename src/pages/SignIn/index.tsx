import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import { useAuth } from '../../context/auth';

const SignIn: React.FC = () => {
  const { signIn } = useAuth();

  const handleSignIn = async () => {
    await signIn();
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={handleSignIn}>
        <Text style={{ fontSize: 40, fontWeight: 'bold' }}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;
