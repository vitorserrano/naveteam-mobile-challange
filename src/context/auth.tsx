import React, { useState, useEffect, createContext, useContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../services/api';
import * as auth from '../services/auth';

interface IUser {
  id: string;
  email: string;
}

interface IAuthContext {
  signed: boolean;
  user: IUser | null;
  loading: boolean;
  signIn(email: string, password: string): Promise<void>;
  signOut(): void;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);

  const loadStoragedData = async () => {
    const storagedUser = await AsyncStorage.getItem('@Navedex:user');
    const storagedToken = await AsyncStorage.getItem('@Navedex:token');

    if (storagedUser && storagedToken) {
      api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
      setUser(JSON.parse(storagedUser));
    }

    setTimeout(() => setLoading(false), 2000);
  };

  useEffect(() => {
    loadStoragedData();
  }, []);

  const signIn = async (email: string, password: string) => {
    const response = await auth.signIn(email, password);

    const signedUser = {
      id: response.id,
      email: response.email,
    };

    setUser(signedUser);

    api.defaults.headers.Authorization = `Bearer ${response.token}`;

    await AsyncStorage.setItem('@Navedex:user', JSON.stringify(signedUser));
    await AsyncStorage.setItem('@Navedex:token', response.token);
  };

  const signOut = async () => {
    await AsyncStorage.clear();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, loading, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): IAuthContext => useContext(AuthContext);
