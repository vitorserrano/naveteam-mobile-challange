import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';

import { useAuth } from '../../context/auth';
import api from '../../services/api';

import Loader from '../../components/Loader';

import { colors } from '../../theme/colors';

interface INavers {
  id: string;
  name: string;
  admission_date: string;
  job_role: string;
  user_id: string;
  project: string;
  birthdate: string;
  url: string;
}

const Navers: React.FC = () => {
  const { signOut } = useAuth();

  const [navers, setNavers] = useState<INavers[]>([]);
  const [loading, setLoading] = useState(false);

  const handleLoadNavers = async () => {
    setLoading(true);

    try {
      const { data } = await api.get('/navers');

      setNavers(data);
    } catch (error) {
      console.log(error);
    }

    // setTimeout(() => setLoading(false), 2000);
    setLoading(false);
  };

  useEffect(() => {
    handleLoadNavers();
  }, []);

  const handleSignOut = () => {
    signOut();
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Loader size={60} color={colors.primary} />
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingTop: 28,
      }}
    >
      {navers.map(naver => (
        <View key={naver.id}>
          <Image
            source={{ uri: naver.url }}
            style={{ width: 170, height: 170 }}
          />
          <Text style={{ marginTop: 8 }}>{naver.name}</Text>
          <Text style={{ marginTop: 2 }}>{naver.job_role}</Text>
        </View>
      ))}
    </View>
  );
};

export default Navers;
