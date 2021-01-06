import api from './api';

interface Response {
  id: string;
  email: string;
  token: string;
}

export const signIn = async (): Promise<Response> => {
  const credentials = {
    email: 'vitor@nave.rs',
    password: '123456',
  };

  const { data } = await api.post('/users/login', credentials);

  return data;
};
